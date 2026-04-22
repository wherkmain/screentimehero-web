"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  Clock,
  XCircle,
  Loader2,
} from "lucide-react";

// Base URL for the Screen Time Hero API. Defaults to production; override
// at build time via NEXT_PUBLIC_API_BASE_URL when deploying to preview.
const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.screentimehero.com";

type FetchState =
  | { kind: "loading" }
  | { kind: "pending"; privacyPolicyVersion?: string }
  | { kind: "expired" }
  | { kind: "revoked" }
  | { kind: "alreadyGranted" }
  | { kind: "notFound" }
  | { kind: "error"; message: string }
  | { kind: "submitting" }
  | { kind: "granted" };

export default function ConsentPage() {
  return (
    <Suspense fallback={<PageShell><CenterLoader label="Loading your consent request…" /></PageShell>}>
      <ConsentPageInner />
    </Suspense>
  );
}

function ConsentPageInner() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  // Initialize from token presence so we never setState inside the effect
  // just to flip to "notFound" — that trips react-hooks/set-state-in-effect
  // and forces a wasted render.
  const [state, setState] = useState<FetchState>(() =>
    token ? { kind: "loading" } : { kind: "notFound" }
  );
  const [attestGuardian, setAttestGuardian] = useState(false);
  const [attestConsent, setAttestConsent] = useState(false);

  // Reset fetch + attestation state when `token` changes so approvals from a
  // previous token can't be replayed against a new one. Doing this during
  // render (rather than in an effect) avoids a cascading render and keeps us
  // clear of react-hooks/set-state-in-effect.
  const [prevToken, setPrevToken] = useState(token);
  if (prevToken !== token) {
    setPrevToken(token);
    setState(token ? { kind: "loading" } : { kind: "notFound" });
    setAttestGuardian(false);
    setAttestConsent(false);
  }

  // Validate the token on load so terminal states (expired/granted/etc.)
  // don't waste a checkbox click.
  useEffect(() => {
    if (!token) return;
    const controller = new AbortController();
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/consent/${encodeURIComponent(token)}`, {
          method: "GET",
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });
        if (res.status === 404) {
          setState({ kind: "notFound" });
          return;
        }
        if (res.status === 410) {
          setState({ kind: "expired" });
          return;
        }
        if (!res.ok) {
          setState({
            kind: "error",
            message: "We couldn't load this consent request right now. Please refresh the page.",
          });
          return;
        }
        const body: { status?: string; privacy_policy_version?: string } =
          await res.json();
        switch (body.status) {
          case "pending":
            setState({
              kind: "pending",
              privacyPolicyVersion: body.privacy_policy_version,
            });
            break;
          case "granted":
            setState({ kind: "alreadyGranted" });
            break;
          case "expired":
            setState({ kind: "expired" });
            break;
          case "revoked":
            setState({ kind: "revoked" });
            break;
          default:
            setState({ kind: "error", message: "Unexpected response from the server." });
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        console.error("[ConsentPage] token validation failed:", err);
        setState({
          kind: "error",
          message: "We couldn't reach the server. Check your internet and try again.",
        });
      }
    })();
    return () => {
      controller.abort();
    };
  }, [token]);

  const canSubmit =
    state.kind === "pending" && attestGuardian && attestConsent;

  async function handleConsent() {
    if (!token || !canSubmit || state.kind !== "pending") return;
    const privacyPolicyVersion = state.privacyPolicyVersion;
    setState({ kind: "submitting" });
    try {
      const res = await fetch(`${API_BASE}/api/consent/${encodeURIComponent(token)}/grant`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          attestation: true,
          method: "email_confirmation",
          ...(privacyPolicyVersion && {
            privacy_policy_version: privacyPolicyVersion,
          }),
        }),
      });
      if (res.status === 200) {
        setState({ kind: "granted" });
        return;
      }
      if (res.status === 409) {
        setState({ kind: "alreadyGranted" });
        return;
      }
      if (res.status === 410) {
        setState({ kind: "expired" });
        return;
      }
      const body: { error?: string } = await res.json().catch(() => ({}));
      setState({
        kind: "error",
        message:
          body.error ??
          "We couldn't record your consent right now. Please refresh and try again.",
      });
    } catch (err) {
      console.error("[ConsentPage] grant request failed:", err);
      setState({
        kind: "error",
        message: "We couldn't reach the server. Check your internet and try again.",
      });
    }
  }

  return (
    <PageShell>
      {renderState(state, {
        attestGuardian,
        attestConsent,
        setAttestGuardian,
        setAttestConsent,
        canSubmit,
        onConsent: handleConsent,
      })}
    </PageShell>
  );
}

// ---------------------------------------------------------------------------
// State-specific views
// ---------------------------------------------------------------------------

function renderState(
  state: FetchState,
  props: {
    attestGuardian: boolean;
    attestConsent: boolean;
    setAttestGuardian: (v: boolean) => void;
    setAttestConsent: (v: boolean) => void;
    canSubmit: boolean;
    onConsent: () => void;
  }
) {
  switch (state.kind) {
    case "loading":
      return <CenterLoader label="Loading your consent request…" />;
    case "submitting":
      return <CenterLoader label="Recording your consent…" />;
    case "pending":
      return <PendingCard {...props} />;
    case "granted":
      return <GrantedCard />;
    case "alreadyGranted":
      return (
        <TerminalCard
          icon={<CheckCircle className="w-12 h-12 text-[#4CCB6E]" />}
          title="You've already approved this request."
          body="Your child's account is unlocked. You can close this page."
        />
      );
    case "expired":
      return (
        <TerminalCard
          icon={<Clock className="w-12 h-12 text-[#F2C94C]" />}
          title="This consent link has expired."
          body="For safety, consent links expire after 48 hours. Ask your child to sign up again and resend the message."
        />
      );
    case "revoked":
      return (
        <TerminalCard
          icon={<XCircle className="w-12 h-12 text-gray-400" />}
          title="This request has been cancelled."
          body="Your child's app may have cancelled this request. Ask them to start over if they still want to sign up."
        />
      );
    case "notFound":
      return (
        <TerminalCard
          icon={<AlertTriangle className="w-12 h-12 text-[#EB5757]" />}
          title="We couldn't find that consent link."
          body="The link may be broken or copied incorrectly. Please use the button in the email or text message you received."
        />
      );
    case "error":
      return (
        <TerminalCard
          icon={<AlertTriangle className="w-12 h-12 text-[#EB5757]" />}
          title="Something went wrong."
          body={state.message}
        />
      );
  }
}

// ---------------------------------------------------------------------------
// Pending consent form
// ---------------------------------------------------------------------------

function PendingCard(props: {
  attestGuardian: boolean;
  attestConsent: boolean;
  setAttestGuardian: (v: boolean) => void;
  setAttestConsent: (v: boolean) => void;
  canSubmit: boolean;
  onConsent: () => void;
}) {
  const {
    attestGuardian,
    attestConsent,
    setAttestGuardian,
    setAttestConsent,
    canSubmit,
    onConsent,
  } = props;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-[#3A7BFA]/10 flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-[#3A7BFA]" />
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-[#1C1F26]">
            Your child wants to use Screen Time Hero
          </h1>
          <p className="text-gray-500">
            A child signing up with your contact info is asking for your permission.
          </p>
        </div>
      </div>

      <div className="bg-[#E3F2FD] rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
        Under the{" "}
        <strong className="text-[#1C1F26]">
          Children&apos;s Online Privacy Protection Act (COPPA)
        </strong>
        , we can&apos;t collect any information from a child under 13 until a parent
        or legal guardian gives us permission. That&apos;s why you&apos;re here.
      </div>

      <div className="space-y-3">
        <h2 className="text-base font-semibold text-[#1C1F26]">
          What this means
        </h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <span className="shrink-0 w-5 h-5 rounded-full bg-[#3A7BFA]/10 text-[#3A7BFA] text-xs font-bold flex items-center justify-center">
              1
            </span>
            <span>
              Your child will be able to create an account, do chores you approve,
              and earn screen time.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0 w-5 h-5 rounded-full bg-[#3A7BFA]/10 text-[#3A7BFA] text-xs font-bold flex items-center justify-center">
              2
            </span>
            <span>
              We&apos;ll collect the data described in our{" "}
              <Link
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3A7BFA] hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and use it only to run the app. We do not sell it.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0 w-5 h-5 rounded-full bg-[#3A7BFA]/10 text-[#3A7BFA] text-xs font-bold flex items-center justify-center">
              3
            </span>
            <span>
              You can review or delete your child&apos;s data at any time from the
              parent dashboard in the app.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3 border-t border-gray-100 pt-6">
        <AttestCheckbox
          checked={attestGuardian}
          onChange={setAttestGuardian}
          label={
            <>
              I am the <strong>parent or legal guardian</strong> of the child who
              made this request.
            </>
          }
          id="attest-guardian"
        />
        <AttestCheckbox
          checked={attestConsent}
          onChange={setAttestConsent}
          label="I consent to the collection of my child's information as described in the Privacy Policy and Terms of Service."
          id="attest-consent"
        />
        <p className="pl-8 text-xs text-gray-500">
          Read the{" "}
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A7BFA] hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A7BFA] hover:underline"
          >
            Terms of Service
          </Link>
          .
        </p>
      </div>

      <button
        type="button"
        onClick={onConsent}
        disabled={!canSubmit}
        className={`w-full py-3.5 rounded-full text-white font-semibold text-base transition-colors ${
          canSubmit
            ? "bg-[#3A7BFA] hover:bg-[#2563EB] shadow-sm"
            : "bg-[#3A7BFA]/40 cursor-not-allowed"
        }`}
      >
        Yes, I approve
      </button>

      <p className="text-center text-xs text-gray-400">
        If you didn&apos;t expect this message, you can safely close this page and
        no account will be created.
      </p>
    </div>
  );
}

function AttestCheckbox(props: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: React.ReactNode;
  id: string;
}) {
  return (
    <label
      htmlFor={props.id}
      className="flex items-start gap-3 cursor-pointer group rounded focus-within:ring-2 focus-within:ring-[#3A7BFA]/50 focus-within:ring-offset-2"
    >
      <span
        className={`shrink-0 w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center transition-colors ${
          props.checked
            ? "bg-[#3A7BFA] border-[#3A7BFA]"
            : "bg-white border-gray-300 group-hover:border-[#3A7BFA]"
        }`}
      >
        {props.checked && (
          <svg
            className="w-3 h-3 text-white"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 6.5L4.5 9.5L10.5 2.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <input
        id={props.id}
        type="checkbox"
        className="sr-only"
        checked={props.checked}
        onChange={(e) => props.onChange(e.target.checked)}
      />
      <span className="text-sm text-gray-700 leading-relaxed">{props.label}</span>
    </label>
  );
}

// ---------------------------------------------------------------------------
// Granted success state
// ---------------------------------------------------------------------------

function GrantedCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center space-y-4">
      <div className="mx-auto w-16 h-16 rounded-full bg-[#4CCB6E]/10 flex items-center justify-center">
        <CheckCircle className="w-10 h-10 text-[#4CCB6E]" />
      </div>
      <h1 className="text-2xl font-bold text-[#1C1F26]">
        Thanks! Your child&apos;s account is unlocked.
      </h1>
      <p className="text-gray-500 max-w-md mx-auto">
        They&apos;ll be able to keep going in Screen Time Hero on their device in a
        few seconds. You can close this page.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Terminal and loader helpers
// ---------------------------------------------------------------------------

function TerminalCard(props: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center space-y-4">
      <div className="mx-auto">{props.icon}</div>
      <h1 className="text-xl sm:text-2xl font-bold text-[#1C1F26]">
        {props.title}
      </h1>
      <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
        {props.body}
      </p>
    </div>
  );
}

function CenterLoader({ label }: { label: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center space-y-4">
      <Loader2 className="w-8 h-8 text-[#3A7BFA] animate-spin mx-auto" />
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Shared page chrome
// ---------------------------------------------------------------------------

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Screen Time Hero" width={32} height={32} />
            <span className="text-xl font-bold text-[#1C1F26]">
              Screen Time Hero
            </span>
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-[#3A7BFA] hover:underline"
          >
            Privacy
          </Link>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {children}
      </main>

      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-gray-400">
        &copy; 2026 Screen Time Hero · <Link href="/privacy" className="hover:underline">Privacy</Link> · <Link href="/terms" className="hover:underline">Terms</Link>
      </footer>
    </div>
  );
}
