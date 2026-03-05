import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3A7BFA] via-[#2563EB] to-[#1d4ed8] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFC300] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <Image src="/logo.svg" alt="Screen Time Hero" width={56} height={56} />
          <span className="text-3xl sm:text-4xl font-bold text-white">Screen Time Hero</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          Coming Soon
        </h1>

        <p className="text-xl text-blue-100 mb-8 max-w-lg mx-auto">
          We&apos;re building something that will end the screen time fights forever. Stay tuned.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
          <p className="text-blue-100 text-sm mb-1">Get notified when we launch</p>
          <a
            href="mailto:support@screentimehero.com"
            className="text-white font-semibold text-lg hover:text-[#FFC300] transition-colors"
          >
            support@screentimehero.com
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 text-blue-200/50 text-sm">
        &copy; 2026 Screen Time Hero
      </div>
    </div>
  );
}
