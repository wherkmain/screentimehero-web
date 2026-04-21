import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/_components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy - Screen Time Hero",
  description: "Screen Time Hero Privacy Policy. Learn how we collect, use, and protect your data.",
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
          <Link href="/" className="text-sm text-[#3A7BFA] hover:underline">Back to Home</Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#1C1F26] mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Effective Date: March 1, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Screen Time Hero (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Screen Time Hero mobile application and website (collectively, the &quot;Service&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service. We are committed to protecting the privacy of all our users, especially children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">Account Information</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Parent/guardian name and email address</li>
              <li>Child&apos;s first name (or nickname)</li>
              <li>Authentication credentials (via email/password or Apple Sign In)</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">Usage Data</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Task assignments and completion records</li>
              <li>Photos submitted as task proof</li>
              <li>Points earned and rewards redeemed</li>
              <li>Screen time usage categories (managed through Apple&apos;s FamilyControls framework)</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">Technical Data</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Device type and operating system version</li>
              <li>App version</li>
              <li>Crash logs and performance data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">3. Children&apos;s Privacy (COPPA Compliance)</h2>
            <p className="text-gray-600 leading-relaxed">
              We comply with the Children&apos;s Online Privacy Protection Act (COPPA). Our Service is designed so that parents or legal guardians create and manage all accounts. We do not knowingly collect personal information directly from children under 13 without verifiable parental consent.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-3">
              <li>Child accounts are created and controlled by the parent/guardian</li>
              <li>We collect only the minimum information necessary (first name or nickname)</li>
              <li>Parents can review, modify, or delete their child&apos;s data at any time</li>
              <li>We do not serve advertising to children</li>
              <li>We do not share children&apos;s data with third parties for marketing purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">4. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>To provide and maintain the Service</li>
              <li>To manage task assignments, approvals, and reward redemptions</li>
              <li>To enforce screen time rules via Apple&apos;s FamilyControls framework</li>
              <li>To send transactional emails (account verification, password resets, family invitations)</li>
              <li>To improve and optimize the Service</li>
              <li>To respond to support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">5. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">We use the following third-party services:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-3">
              <li><strong>Supabase</strong> — Database hosting and file storage (photos). Data is encrypted at rest and in transit.</li>
              <li><strong>Apple Sign In</strong> — Optional authentication method. We receive only the information you authorize Apple to share.</li>
              <li><strong>Resend</strong> — Transactional email delivery (invitations, password resets). We share only the recipient&apos;s email address.</li>
              <li><strong>Apple FamilyControls</strong> — Screen time enforcement. App usage tokens are opaque and processed on-device only.</li>
              <li><strong>Vercel</strong> — Website hosting.</li>
              <li><strong>Railway</strong> — API server hosting.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              We do not sell your personal information to any third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">6. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your data, including TLS 1.2+ encryption in transit, AES-256 encryption at rest, and secure authentication with JWT tokens. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">7. Data Retention and Deletion</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your data for as long as your account is active. You can request deletion of your account and all associated data at any time by contacting us at support@screentimehero.com. Upon account deletion:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-3">
              <li>All personal information is permanently deleted within 30 days</li>
              <li>Photos submitted as task proof are permanently deleted</li>
              <li>Child account data is deleted along with the parent account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">8. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-3">
              <li>Access the personal information we hold about you and your children</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">9. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the effective date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">10. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-600 mt-3">
              <strong>Email:</strong>{" "}
              <a href="mailto:support@screentimehero.com" className="text-[#3A7BFA] hover:underline">
                support@screentimehero.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
