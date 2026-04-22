import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SiteFooter } from "@/app/_components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service - Screen Time Hero",
  description:
    "Screen Time Hero Terms of Service. The agreement between you and Screen Time Hero covering account use, subscriptions, parental responsibilities, and dispute resolution.",
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
        <p className="text-gray-500 mb-8">Effective Date: April 22, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">1. Agreement</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your use of the Screen Time Hero mobile application and the website at screentimehero.com (together, the &quot;Service&quot;), operated by Screen Time Hero (&quot;Screen Time Hero,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By creating an account or using the Service you agree to these Terms and to our{" "}
              <Link href="/privacy" className="text-[#3A7BFA] hover:underline">Privacy Policy</Link>. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">2. Eligibility and roles</h2>
            <p className="text-gray-600 leading-relaxed">
              You must be at least 18 years old and have the legal capacity to form a binding contract to create a parent account. By creating an account you represent that you are the parent or legal guardian of every child you add or invite, and you consent on their behalf to the collection and use of personal information as described in the Privacy Policy.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Child accounts are created and controlled by a parent account. Children may interact with the Service only under the parent&apos;s supervision and only within the scope the parent allows.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">3. Account security</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Keep your credentials confidential.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
              <li>Tell us immediately at{" "}
                <a href="mailto:support@screentimehero.com" className="text-[#3A7BFA] hover:underline">support@screentimehero.com</a>
                {" "}if you believe your account has been accessed without authorization.
              </li>
              <li>Provide accurate and current information and keep it up to date.</li>
              <li>You are responsible for any content you or your child uploads through your account, including photos submitted as chore proof.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">4. Parental consent and children&apos;s data</h2>
            <p className="text-gray-600 leading-relaxed">
              Before collecting personal information from a child under 13, we request verifiable parental consent as described in Section 4 of the Privacy Policy. By completing the consent flow you represent that you are that child&apos;s parent or legal guardian.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              You may at any time review, correct, or delete your child&apos;s information from inside the app. From a child&apos;s Settings, tap <em>Data &amp; Privacy</em> to download or delete. From your own Settings, tap <em>Download my data</em> or <em>Delete Account</em> to exercise the same rights on your own data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">5. Acceptable use</h2>
            <p className="text-gray-600 leading-relaxed mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the Service in violation of any applicable law or regulation;</li>
              <li>Upload content that is illegal, sexually explicit, exploitative of minors, threatening, abusive, harassing, defamatory, or otherwise objectionable;</li>
              <li>Use the Service to surveil, stalk, or control any person beyond the parental-oversight role the Service is designed for;</li>
              <li>Attempt to gain unauthorized access to other accounts, our systems, or the underlying infrastructure;</li>
              <li>Interfere with or disrupt the Service, its infrastructure, or any user&apos;s use of it;</li>
              <li>Use automated means (bots, scrapers) to access the Service without our written permission;</li>
              <li>Reverse-engineer, decompile, or disassemble any part of the Service, except to the minimum extent permitted by applicable law;</li>
              <li>Resell, sublicense, or redistribute the Service without authorization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">6. Subscriptions, auto-renewal, and refunds</h2>
            <p className="text-gray-600 leading-relaxed">
              Screen Time Hero offers auto-renewing subscriptions sold through the Apple App Store. By starting a subscription you authorize your Apple ID account to be charged the applicable fee at the start of each billing period. Subscriptions renew automatically at the same price and for the same term unless cancelled at least 24 hours before the renewal date.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              You can manage or cancel your subscription at any time under <em>Apple ID &rarr; Subscriptions</em> on your device. Cancellation takes effect at the end of the current billing period; you keep access until then. Free trials, where offered, convert to paid unless cancelled before the trial ends.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Refunds are handled by Apple under the App Store&apos;s refund policy. We do not process refunds directly. If you are an EEA or UK consumer, you may have a statutory right of withdrawal within 14 days of purchase; Apple implements that right on our behalf through the App Store refund flow.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">7. Screen-time enforcement</h2>
            <p className="text-gray-600 leading-relaxed">
              The Service uses Apple&apos;s FamilyControls and DeviceActivity frameworks to apply screen-time rules on a child&apos;s device. Enforcement depends on Apple&apos;s frameworks and on the child&apos;s device being set up correctly with Family Sharing. We cannot guarantee uninterrupted enforcement because iOS updates, device configuration changes, or Apple framework changes can affect behavior outside our control.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              The Service is a tool to assist parents in setting and enforcing limits. It is not a substitute for parental oversight or for keeping a child&apos;s device physically secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">8. Your content and license</h2>
            <p className="text-gray-600 leading-relaxed">
              You retain ownership of the content you or your child upload to the Service (for example, chore-proof photos). By uploading content you grant Screen Time Hero a worldwide, non-exclusive, royalty-free license to store, process, display, and transmit that content solely as needed to provide the Service to you and your family. This license ends when the content is deleted from the Service, except to the extent the content survives in encrypted backups until those backups age out of the retention window described in the Privacy Policy.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              The Service itself &mdash; including the app, website, design, logos, and source code &mdash; is owned by Screen Time Hero and its licensors and is protected by copyright, trademark, and other intellectual-property laws. You may use the Service only as these Terms allow.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">9. DMCA / copyright</h2>
            <p className="text-gray-600 leading-relaxed">
              If you believe content on the Service infringes your copyright, send a written notice meeting the requirements of 17 U.S.C. §512(c)(3) to{" "}
              <a href="mailto:support@screentimehero.com" className="text-[#3A7BFA] hover:underline">support@screentimehero.com</a>
              {" "}with the subject line &quot;DMCA Notice&quot;. Include the infringed work, the infringing material, your contact information, a good-faith statement, a statement under penalty of perjury that you are authorized to act for the rights holder, and your physical or electronic signature. We may remove material, disable access, or terminate repeat-infringer accounts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">10. Apple App Store terms</h2>
            <p className="text-gray-600 leading-relaxed">
              If you obtained the Screen Time Hero app from the Apple App Store, the Apple Licensed Application End-User License Agreement also applies. You and we acknowledge that these Terms are between you and Screen Time Hero, not Apple, and that Screen Time Hero (not Apple) is responsible for the Service and its content. Apple has no obligation to furnish any maintenance or support for the Service. You represent that you are not located in a country subject to a U.S. Government embargo or designated as a terrorist-supporting country, and that you are not on any U.S. Government list of prohibited or restricted parties. Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">11. Disclaimer of warranties</h2>
            <p className="text-gray-600 leading-relaxed">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FULLY SECURE, OR THAT SCREEN-TIME ENFORCEMENT WILL PREVENT ALL UNAUTHORIZED ACCESS TO APPS OR CONTENT ON A CHILD&apos;S DEVICE.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Some jurisdictions do not allow the exclusion of implied warranties, so some of these exclusions may not apply to you. Nothing in these Terms limits statutory consumer rights that cannot be waived by contract (including rights consumers have under EEA or UK consumer law).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">12. Limitation of liability</h2>
            <p className="text-gray-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SCREEN TIME HERO AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, USE, OR GOODWILL, RESULTING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE. OUR AGGREGATE LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE SERVICE WILL NOT EXCEED THE GREATER OF (a) THE AMOUNT YOU PAID US IN THE TWELVE MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM, OR (b) US$50.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Nothing in this section limits liability that cannot be limited under applicable law, including for death or personal injury caused by our negligence, for fraud, or for any other liability that cannot be excluded under the law that governs your relationship with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">13. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              You may end these Terms at any time by deleting your account from inside the app (Settings &rarr; Delete Account). Deletion is immediate and hard &mdash; see the Privacy Policy for the retention details that apply after deletion.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              We may suspend or terminate your account if you violate these Terms, if we are required to by law, or if we discontinue the Service. Provisions that by their nature should survive termination &mdash; including Sections 5 (acceptable use), 8 (intellectual property), 11 (warranty disclaimer), 12 (liability), 14 (dispute resolution), and 15 (governing law) &mdash; will survive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">14. Disputes</h2>
            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">14.1 Informal resolution first</h3>
            <p className="text-gray-600 leading-relaxed">
              Before bringing a formal claim, please email{" "}
              <a href="mailto:support@screentimehero.com" className="text-[#3A7BFA] hover:underline">support@screentimehero.com</a>
              {" "}describing the issue. We will work in good faith to resolve it within 60 days.
            </p>
            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">14.2 Arbitration and class-action waiver (United States)</h3>
            <p className="text-gray-600 leading-relaxed">
              If you are a U.S. resident and the informal process does not resolve the dispute, you and Screen Time Hero agree to resolve any dispute arising out of or relating to the Service or these Terms by binding individual arbitration administered by the American Arbitration Association under its Consumer Arbitration Rules, rather than in court, except that you may bring claims in small-claims court if they qualify. You and Screen Time Hero each waive the right to a jury trial and the right to participate in a class action, class arbitration, or representative proceeding. The Federal Arbitration Act governs the interpretation and enforcement of this section.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              You may opt out of this arbitration agreement by emailing{" "}
              <a href="mailto:support@screentimehero.com" className="text-[#3A7BFA] hover:underline">support@screentimehero.com</a>
              {" "}within 30 days of first accepting these Terms with the subject line &quot;Arbitration Opt-Out&quot; and your account email. Opting out will not affect any other part of these Terms.
            </p>
            <h3 className="text-lg font-semibold text-[#1C1F26] mt-4 mb-2">14.3 Consumers outside the United States</h3>
            <p className="text-gray-600 leading-relaxed">
              If you are a consumer residing outside the United States, nothing in Section 14.2 takes away the mandatory protections you have under the consumer-protection laws of your country of residence. You may bring claims in the courts of your country of residence if your local law requires it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">15. Governing law and venue</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms are governed by the laws of the State of Delaware, United States, without regard to its conflict-of-law rules. Subject to Section 14, the exclusive venue for any claim that is not subject to arbitration is the state or federal courts located in Delaware, and you and Screen Time Hero submit to the personal jurisdiction of those courts. If you are a consumer residing outside the United States, the mandatory consumer-protection law of your country of residence still applies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">16. Changes to these Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these Terms from time to time. If the change is material we will update the effective date at the top of this page and, where practicable, notify you in-app or by email before the change takes effect. Your continued use of the Service after the change takes effect constitutes acceptance of the updated Terms; if you do not agree, stop using the Service and delete your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">17. Miscellaneous</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Entire agreement.</strong> These Terms and the Privacy Policy are the entire agreement between you and Screen Time Hero about the Service and supersede any prior agreements on the same subject.</li>
              <li><strong>Severability.</strong> If any provision is found unenforceable, the remaining provisions will continue in full force.</li>
              <li><strong>No waiver.</strong> Our failure to enforce a provision is not a waiver of that or any other provision.</li>
              <li><strong>Assignment.</strong> You may not assign these Terms without our written consent. We may assign these Terms to an affiliate or in connection with a merger, acquisition, or sale of assets.</li>
              <li><strong>Force majeure.</strong> Neither party is liable for delay or failure caused by events beyond its reasonable control.</li>
              <li><strong>Notices.</strong> We may provide notice to you through the app, email, or this website. Notices to us should go to{" "}
                <a href="mailto:support@screentimehero.com" className="text-[#3A7BFA] hover:underline">support@screentimehero.com</a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">18. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              Questions about these Terms:{" "}
              <a href="mailto:support@screentimehero.com" className="text-[#3A7BFA] hover:underline">support@screentimehero.com</a>
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
