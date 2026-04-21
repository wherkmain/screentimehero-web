import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-[#1C1F26] text-white py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Screen Time Hero" width={24} height={24} />
            <span className="font-bold">Screen Time Hero</span>
          </div>
          <nav className="flex items-center space-x-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/download" className="hover:text-white transition-colors">Download</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
          </nav>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
          <p>&copy; 2026 Screen Time Hero. All rights reserved.</p>
          <a href="mailto:support@screentimehero.com" className="hover:text-white transition-colors">
            support@screentimehero.com
          </a>
        </div>
      </div>
    </footer>
  );
}
