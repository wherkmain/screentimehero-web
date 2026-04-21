import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/_components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service - Screen Time Hero",
  description: "Screen Time Hero Terms of Service. Read our terms and conditions for using the service.",
};

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-[#1C1F26] mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Effective Date: March 1, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the Screen Time Hero application and website (the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Service. These Terms constitute a legally binding agreement between you and Screen Time Hero (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">2. Eligibility</h2>
            <p className="text-gray-600 leading-relaxed">
              You must be at least 18 years of age to create a parent account and use the Service. By creating an account, you represent that you are the parent or legal guardian of any children added to the Service. Child accounts may only be created and managed by a parent or legal guardian.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">3. Account Terms</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
              <li>You must provide accurate and complete information when creating your account.</li>
              <li>You must not use the Service for any illegal or unauthorized purpose.</li>
              <li>You are responsible for all content uploaded through your account, including photos submitted as task proof.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">4. Parental Consent</h2>
            <p className="text-gray-600 leading-relaxed">
              By creating child accounts within the Service, you confirm that you are the parent or legal guardian of the child and consent to the collection and use of their information as described in our Privacy Policy. You may review, modify, or delete your child&apos;s information at any time through your account settings or by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">5. Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the Service in violation of any applicable law or regulation</li>
              <li>Upload content that is illegal, harmful, threatening, abusive, or otherwise objectionable</li>
              <li>Attempt to gain unauthorized access to other accounts or our systems</li>
              <li>Interfere with or disrupt the Service or its infrastructure</li>
              <li>Use automated means (bots, scrapers) to access the Service without permission</li>
              <li>Reverse-engineer, decompile, or disassemble any part of the Service</li>
              <li>Resell or redistribute the Service without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">6. Subscriptions and Payments</h2>
            <p className="text-gray-600 leading-relaxed">
              Screen Time Hero offers subscription-based access. By subscribing, you agree to pay the applicable fees. Subscriptions automatically renew unless cancelled before the renewal date. You may cancel your subscription at any time; access continues until the end of the current billing period. Refunds are handled in accordance with Apple App Store policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">7. Screen Time Enforcement</h2>
            <p className="text-gray-600 leading-relaxed">
              Screen Time Hero uses Apple&apos;s FamilyControls framework to manage screen time on children&apos;s devices. While we strive for reliable enforcement, we cannot guarantee uninterrupted operation due to factors outside our control, including iOS updates, device settings, or Apple framework changes. The Service is a tool to assist parents and is not a substitute for parental oversight.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">8. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              The Service and its original content, features, and functionality are owned by Screen Time Hero and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Service without our written permission.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              You retain ownership of all content you upload to the Service (such as photos). By uploading content, you grant us a limited license to store, process, and display that content as necessary to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">9. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">10. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SCREEN TIME HERO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">11. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend your account at any time for violation of these Terms, with or without notice. You may terminate your account at any time by contacting us. Upon termination, your right to use the Service ceases immediately. Provisions that by their nature should survive termination (including intellectual property, disclaimers, and limitations of liability) shall survive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">12. Changes to These Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the effective date. Your continued use of the Service after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">13. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">14. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about these Terms, please contact us at:
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
