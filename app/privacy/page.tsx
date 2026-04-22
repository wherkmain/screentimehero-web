import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/_components/SiteFooter";

const PRIVACY_POLICY_EFFECTIVE_DATE_ISO = "2026-04-22";
const PRIVACY_POLICY_EFFECTIVE_DATE = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeZone: "UTC",
}).format(new Date(`${PRIVACY_POLICY_EFFECTIVE_DATE_ISO}T00:00:00Z`));

export const metadata: Metadata = {
  title: "Privacy Policy - Screen Time Hero",
  description:
    "Screen Time Hero Privacy Policy. What we collect, how we use it, how long we keep it, who we share it with, and your rights under GDPR, CCPA, and COPPA.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Screen Time Hero" width={32} height={32} />
            <span className="text-xl font-bold text-[#1C1F26]">Screen Time Hero</span>
          </Link>
          <Link href="/" className="text-sm text-[#3A7BFA] hover:underline">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#1C1F26] mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">
          Effective Date:{" "}
          <time dateTime={PRIVACY_POLICY_EFFECTIVE_DATE_ISO}>{PRIVACY_POLICY_EFFECTIVE_DATE}</time>
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">1. Who we are</h2>
            <p className="text-gray-600 leading-relaxed">
              Screen Time Hero (&quot;Screen Time Hero,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Screen Time Hero mobile application (iOS) and the supporting website at screentimehero.com (together, the &quot;Service&quot;). This Privacy Policy explains what personal information we collect, how we use it, how long we keep it, who we share it with, and the rights you have over it.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              For the purposes of the EU and UK General Data Protection Regulations (&quot;GDPR&quot;) and the California Consumer Privacy Act as amended by the CPRA (&quot;CCPA&quot;), Screen Time Hero is the data controller / business for the personal information described in this policy.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Questions? Email{" "}
              <a href="mailto:support@screentimehero.com" className="text-[#3A7BFA] hover:underline">
                support@screentimehero.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">2. What we collect</h2>
            <p className="text-gray-600 leading-relaxed">
              We collect only the data we need to operate the Service. We do not use analytics SDKs, we do not track users across apps or websites, and we do not request or use the Advertising Identifier (IDFA).
            </p>

            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">From parents when you create an account</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Email address (required)</li>
              <li>Name (first and last)</li>
              <li>Authentication credentials (password stored as a salted hash via Supabase Auth, or a federated identifier if you choose Apple Sign-In or Google Sign-In)</li>
              <li>Phone number (only if you use the SMS option for parental consent delivery; otherwise not collected)</li>
              <li>Subscription receipt metadata processed by RevenueCat on our behalf (plan, renewal state, country)</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">From you about your child</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>First name or nickname</li>
              <li>Birth month and year (used to determine whether COPPA verifiable parental consent is required)</li>
              <li>Optional avatar photo (only if you upload one)</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">Generated while using the Service</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Chores assigned, completed, approved, or rejected</li>
              <li>Rewards created and redeemed, points earned and spent</li>
              <li>Photos or other proof a child submits for a chore (stored as-is in Supabase Storage)</li>
              <li>Screen-time rules and aggregated usage summaries produced by Apple&apos;s FamilyControls framework. The app-usage tokens themselves are opaque on-device identifiers defined by Apple; we never receive or store real bundle IDs.</li>
              <li>Extension-of-time requests from a child and the parent&apos;s decision on each</li>
              <li>Messages your device exchanges with our backend for the Service to function (task approvals, push notifications, etc.)</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">Operational and security data</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Device push tokens so we can deliver Apple Push Notifications</li>
              <li>Login session tokens (JWT), password-reset codes, and session IP address</li>
              <li>Rate-limit counters and short-lived audit log rows so we can detect abuse</li>
              <li>Anonymous device fingerprint and the IP address / user agent recorded at the time a parent grants verifiable parental consent (required under 16 CFR §312.8)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">3. Why we use your data and our legal basis (GDPR)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-600 text-sm border-collapse">
                <caption className="sr-only">GDPR legal basis by processing purpose</caption>
                <thead>
                  <tr className="border-b border-gray-200">
                    <th scope="col" className="py-2 pr-4 font-semibold text-[#1C1F26]">Purpose</th>
                    <th scope="col" className="py-2 pr-4 font-semibold text-[#1C1F26]">Data used</th>
                    <th scope="col" className="py-2 font-semibold text-[#1C1F26]">Legal basis (GDPR Art. 6)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Create and operate your account</td>
                    <td className="py-2 pr-4">Account information</td>
                    <td className="py-2">Performance of a contract &mdash; 6(1)(b)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Deliver parental-control features (chores, rewards, screen time)</td>
                    <td className="py-2 pr-4">Child profile, usage data, proofs</td>
                    <td className="py-2">Performance of a contract &mdash; 6(1)(b)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Obtain verifiable parental consent under COPPA</td>
                    <td className="py-2 pr-4">Parent contact (hashed), consent audit trail</td>
                    <td className="py-2">Legal obligation &mdash; 6(1)(c) (U.S.); consent &mdash; 6(1)(a) (EEA/UK)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Process subscriptions and receipts</td>
                    <td className="py-2 pr-4">Purchase history via RevenueCat</td>
                    <td className="py-2">Performance of a contract &mdash; 6(1)(b)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Prevent abuse, enforce rate limits, debug incidents</td>
                    <td className="py-2 pr-4">Session IP, device fingerprint, request logs</td>
                    <td className="py-2">Legitimate interests &mdash; 6(1)(f) (fraud prevention and service security)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Respond to support requests</td>
                    <td className="py-2 pr-4">Anything you send us</td>
                    <td className="py-2">Legitimate interests &mdash; 6(1)(f)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              We never use your data for behavioral advertising, profiling, or automated decision-making with legal or similarly significant effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">4. Children&apos;s privacy (COPPA)</h2>
            <p className="text-gray-600 leading-relaxed">
              Screen Time Hero complies with the Children&apos;s Online Privacy Protection Act (COPPA, 16 CFR Part 312) for children under 13 in the United States.
            </p>
            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">Verifiable parental consent</h3>
            <p className="text-gray-600 leading-relaxed">
              When a child under 13 is introduced into the app &mdash; either by a parent adding them, or by the child attempting to sign up &mdash; we require verifiable parental consent before collecting, using, or disclosing the child&apos;s personal information. We currently offer the &quot;email-plus&quot; consent method under §312.5(b)(2): we send the parent a consent link via email (or SMS, at the parent&apos;s choice), and record the consent along with the time, parent IP, user agent, and the privacy-policy version in effect.
            </p>
            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">Parental controls</h3>
            <p className="text-gray-600 leading-relaxed">
              A parent (or legal guardian) can at any time, from inside the app:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li>
                <strong>Review</strong> everything we hold about a specific child &mdash; open the child&apos;s Settings and tap <em>Data &amp; Privacy &rarr; Download</em>.
              </li>
              <li>
                <strong>Correct</strong> information by editing the child&apos;s profile.
              </li>
              <li>
                <strong>Delete</strong> the child&apos;s account and all associated data &mdash; open the child&apos;s Settings and tap <em>Data &amp; Privacy &rarr; Delete</em>. This is an immediate, hard delete, not a soft delete.
              </li>
              <li>
                <strong>Withdraw consent</strong> for any further collection by deleting the child&apos;s account.
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">What we do not do</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>We do not serve advertising to children.</li>
              <li>We do not enable or permit children to make personal information publicly available.</li>
              <li>We do not disclose children&apos;s personal information to third parties for their own marketing.</li>
              <li>We collect only the personal information reasonably necessary to provide the parental-control features the parent signed up for.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">5. Who we share data with</h2>
            <p className="text-gray-600 leading-relaxed">
              We share personal information only with the service providers who help us operate Screen Time Hero. Each is contractually bound by a Data Processing Agreement (or the equivalent under CCPA) to process the data only on our behalf and only for the purposes listed here.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left text-gray-600 text-sm border-collapse">
                <caption className="sr-only">Service providers and data shared with each</caption>
                <thead>
                  <tr className="border-b border-gray-200">
                    <th scope="col" className="py-2 pr-4 font-semibold text-[#1C1F26]">Provider</th>
                    <th scope="col" className="py-2 pr-4 font-semibold text-[#1C1F26]">Role</th>
                    <th scope="col" className="py-2 font-semibold text-[#1C1F26]">Data shared</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Supabase</td>
                    <td className="py-2 pr-4">Database, authentication, file storage</td>
                    <td className="py-2">All application data at rest</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Railway</td>
                    <td className="py-2 pr-4">API server hosting</td>
                    <td className="py-2">Transient request/response data and operational logs</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Vercel</td>
                    <td className="py-2 pr-4">Website + consent-landing-page hosting</td>
                    <td className="py-2">Web request metadata</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">RevenueCat</td>
                    <td className="py-2 pr-4">Subscription and purchase management</td>
                    <td className="py-2">App user ID, purchase receipts, plan state</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Apple</td>
                    <td className="py-2 pr-4">Sign in with Apple, Push Notifications, FamilyControls / Screen Time APIs</td>
                    <td className="py-2">Apple-provided identifier and device push token; screen-time tokens remain on-device</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Google</td>
                    <td className="py-2 pr-4">Sign in with Google (optional)</td>
                    <td className="py-2">Google-provided identifier and basic profile you authorize</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Resend</td>
                    <td className="py-2 pr-4">Transactional email (invitations, consent links, password resets)</td>
                    <td className="py-2">Recipient email address and email contents</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Twilio</td>
                    <td className="py-2 pr-4">SMS delivery (parental consent via SMS, if selected)</td>
                    <td className="py-2">Recipient phone number and SMS body</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              We do not sell personal information and we do not share personal information for cross-context behavioral advertising. We may disclose information when required by law, subpoena, or a court order, or to protect the rights, property, or safety of Screen Time Hero, our users, or the public.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">6. International data transfers</h2>
            <p className="text-gray-600 leading-relaxed">
              Screen Time Hero operates from the United States, and our service providers (listed in Section 5) store and process data primarily in the United States. If you are located in the European Economic Area, the United Kingdom, or Switzerland, your personal information is transferred to the United States. We rely on the European Commission&apos;s Standard Contractual Clauses (and the UK International Data Transfer Addendum where applicable) as the lawful mechanism for those transfers, which we have in place with each service provider named above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">7. How long we keep your data</h2>
            <p className="text-gray-600 leading-relaxed">
              We keep personal information only for as long as we need it for the purposes in Section 3. The concrete windows are:
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left text-gray-600 text-sm border-collapse">
                <caption className="sr-only">Data retention windows by category</caption>
                <thead>
                  <tr className="border-b border-gray-200">
                    <th scope="col" className="py-2 pr-4 font-semibold text-[#1C1F26]">Category</th>
                    <th scope="col" className="py-2 font-semibold text-[#1C1F26]">Retention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Parent and child accounts (profiles, chores, rewards, usage, proofs)</td>
                    <td className="py-2">Until you delete the account. Deletion is immediate and hard &mdash; not a soft delete.</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Verifiable parental consent records</td>
                    <td className="py-2">90 days after the consent request is resolved (granted, expired, or revoked). The consent outcome snapshot stays on the child&apos;s profile until the profile is deleted.</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Password-reset codes and tokens</td>
                    <td className="py-2">7 days after the code or token expires</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Rate-limit state</td>
                    <td className="py-2">30 days after the last action</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Host-level logs (Railway)</td>
                    <td className="py-2">30 days rolling</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Encrypted database backups (Supabase)</td>
                    <td className="py-2">Supabase point-in-time-recovery window. Deleted data ages out of backups within that window.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              These windows are enforced automatically by purge jobs that run daily.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">8. Your rights (GDPR / UK GDPR)</h2>
            <p className="text-gray-600 leading-relaxed">
              If the GDPR applies to your processing, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li>
                <strong>Access</strong> the personal data we hold about you &mdash; tap <em>Settings &rarr; Download my data</em> in the app. For a specific child, use <em>Data &amp; Privacy &rarr; Download</em> on that child&apos;s profile. Both return a machine-readable JSON bundle.
              </li>
              <li>
                <strong>Rectify</strong> inaccurate personal data &mdash; edit the profile in the app.
              </li>
              <li>
                <strong>Erase</strong> your personal data &mdash; tap <em>Settings &rarr; Delete Account</em>. For a specific child, use <em>Data &amp; Privacy &rarr; Delete</em>.
              </li>
              <li>
                <strong>Restrict</strong> or <strong>object to</strong> certain processing &mdash; email us and we will honor the request where the law allows.
              </li>
              <li>
                <strong>Portability</strong> &mdash; the Download action above produces a portable JSON file.
              </li>
              <li>
                <strong>Withdraw consent</strong> where we rely on consent (primarily COPPA) &mdash; delete the child account.
              </li>
              <li>
                <strong>Lodge a complaint</strong> with your local supervisory authority. In the UK it is the Information Commissioner&apos;s Office (ico.org.uk).
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We do not charge a fee for exercising these rights. We respond to requests within 30 days (extendable by up to two additional months for complex requests, with notice to you).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">9. California residents (CCPA / CPRA)</h2>
            <p className="text-gray-600 leading-relaxed">
              This section applies if you are a California resident.
            </p>

            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">Categories of personal information collected in the last 12 months</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li><strong>Identifiers</strong> &mdash; name, email, account ID, device ID, IP address</li>
              <li><strong>Customer records (Cal. Civ. Code §1798.80(e))</strong> &mdash; phone number (optional)</li>
              <li><strong>Commercial information</strong> &mdash; subscription plan, purchase history (via RevenueCat)</li>
              <li><strong>Internet or other electronic network activity</strong> &mdash; app request logs, rate-limit counters, consent-audit IP and user agent</li>
              <li><strong>Audio, electronic, visual information</strong> &mdash; child-submitted chore photos (only if uploaded)</li>
              <li><strong>Information about minors under 16</strong> &mdash; the age and activity information a parent provides about a child</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">Sources</h3>
            <p className="text-gray-600 leading-relaxed">
              Directly from you when you sign up or use the app, and from the service providers listed in Section 5 when they act on our behalf (e.g., RevenueCat when you complete a subscription).
            </p>

            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">Business purposes</h3>
            <p className="text-gray-600 leading-relaxed">
              See Section 3 above. In CCPA terms: performing services, fraud prevention, security, and legal compliance.
            </p>

            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">Sale or sharing</h3>
            <p className="text-gray-600 leading-relaxed">
              <strong>We do not sell personal information and we do not share personal information for cross-context behavioral advertising.</strong> We have not done so in the last 12 months. We do not sell or share the personal information of anyone under 16.
            </p>

            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">Your California rights</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
              <li>Right to know what personal information we collect, use, disclose, and retain</li>
              <li>Right to delete personal information we have collected</li>
              <li>Right to correct inaccurate personal information</li>
              <li>Right to limit the use of sensitive personal information (we do not use sensitive PI beyond the purposes allowed without a right-to-limit)</li>
              <li>Right to non-discrimination for exercising these rights</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              You can exercise the Right to Know and the Right to Delete directly in the app (see Section 8), or by emailing{" "}
              <a href="mailto:support@screentimehero.com" className="text-[#3A7BFA] hover:underline">
                support@screentimehero.com
              </a>
              . We verify requests by confirming you have access to the account email on file. Authorized agents may submit requests on your behalf with written authorization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">10. Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We protect personal information with industry-standard measures, including TLS 1.2+ encryption in transit, encryption at rest for Supabase data and storage, salted password hashing, JWT-based session tokens, signed-URL access to stored files, server-side rate limiting, and least-privilege row-level security policies. No system is perfectly secure. If we experience a data breach that affects your personal information, we will notify you and the relevant regulators as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">11. Tracking and advertising</h2>
            <p className="text-gray-600 leading-relaxed">
              Screen Time Hero does not use third-party analytics SDKs, crash-reporting SDKs, or behavioral advertising tools. We do not request Apple&apos;s App Tracking Transparency permission because we do not track you across other apps or websites. We do not respond to any particular browser Do Not Track signal because none are applicable &mdash; there is no tracking to disable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">12. Changes to this policy</h2>
            <p className="text-gray-600 leading-relaxed">
              When we make a material change we will update the &quot;Effective Date&quot; at the top of this page and, where practicable, notify you in-app or by email before the change takes effect. We keep prior versions on request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">13. Contact us</h2>
            <p className="text-gray-600 leading-relaxed">
              For any question about this Privacy Policy, or to exercise any of the rights above:
            </p>
            <p className="text-gray-600 mt-3">
              <strong>Email:</strong>{" "}
              <a href="mailto:support@screentimehero.com" className="text-[#3A7BFA] hover:underline">
                support@screentimehero.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">14. Where the Service is offered</h2>
            <p className="text-gray-600 leading-relaxed">
              Screen Time Hero is currently offered only in the United States, Canada, and Australia. The app is distributed through the Apple App Store in those territories only. We do not offer the Service, market the Service, or knowingly collect personal information from residents of the European Economic Area, the United Kingdom, or Switzerland at this time.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              The GDPR and UK GDPR references in this policy (Sections 1, 3, 6, and 8) are retained as a defensive measure in case a resident of those regions accesses the Service despite the territory restriction. When we expand into the EEA, the UK, or Switzerland we will update this policy, designate a representative under Article 27 of the GDPR and UK GDPR, and publish the representative&apos;s contact information here before making the Service available in those regions.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
