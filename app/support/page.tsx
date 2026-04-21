import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/_components/SiteFooter";

export const metadata: Metadata = {
  title: "Support - Screen Time Hero",
  description: "Get help with Screen Time Hero setup, subscriptions, Family Sharing, account access, and data requests.",
};

const faqs = [
  {
    id: "how-it-works",
    question: "How does Screen Time Hero work?",
    answer:
      "Parents assign tasks, kids submit photo proof, and approved tasks earn points that can be redeemed for screen time or other rewards.",
  },
  {
    id: "family-sharing",
    question: "Do I need Apple Family Sharing?",
    answer:
      "Yes, Apple Family Sharing is recommended for the full screen time management experience. It helps Screen Time Hero access the child device controls required by Apple's FamilyControls framework.",
  },
  {
    id: "restore-subscription",
    question: "Can I restore my subscription?",
    answer:
      "Yes. Open the app, go to Settings, and use Restore Purchases. If that does not work, email support@screentimehero.com and include the Apple ID used for purchase.",
  },
  {
    id: "delete-data",
    question: "How do I delete my family's data?",
    answer:
      "Email support@screentimehero.com from the parent account email and request account deletion. We will process the request and remove associated family data.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Screen Time Hero" width={32} height={32} />
            <span className="text-xl font-bold text-[#1C1F26]">Screen Time Hero</span>
          </Link>
          <Link href="/" className="text-sm text-[#3A7BFA] hover:underline">Back to Home</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#1C1F26] mb-3">Support</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Need help with setup, Family Sharing, subscriptions, or your account? We&apos;re here to help.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <section className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">Contact Support</h2>
            <p className="text-gray-600 mb-4">
              For help with account access, billing, Family Sharing setup, or app questions, email us anytime.
            </p>
            <a
              href="mailto:support@screentimehero.com"
              className="inline-flex items-center rounded-xl bg-[#3A7BFA] px-5 py-3 font-semibold text-white hover:bg-blue-600 transition-colors"
            >
              support@screentimehero.com
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Please include your device type, iOS version, and a short description of the issue so we can help faster.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">Helpful Links</h2>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/download" className="text-[#3A7BFA] hover:underline">Download the app</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#3A7BFA] hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#3A7BFA] hover:underline">Terms of Service</Link>
              </li>
            </ul>
          </section>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1C1F26] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-[#1C1F26] mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-[#F4F5F7] p-8">
          <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">Account and Billing Requests</h2>
          <div className="space-y-3 text-gray-600 leading-relaxed">
            <p>
              For subscription questions, restoration issues, refunds, or account deletion requests, email <a href="mailto:support@screentimehero.com" className="text-[#3A7BFA] hover:underline">support@screentimehero.com</a> from your parent account email.
            </p>
            <p>
              We may ask follow-up questions to verify account ownership before making account-level changes.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
