"use client"
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center font-serif">
            {/* Animated Breaking News Icon */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-red-100 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-white border-4 border-[#403F3F] p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(64,63,63,1)] animate-bounce-slow">
                    <h1 className="text-9xl font-black text-[#403F3F]">404</h1>
                    <div className="bg-[#D72344] text-white px-4 py-1 absolute -top-4 -right-4 font-sans font-bold transform rotate-12 uppercase tracking-widest text-sm">
                        Breaking: Lost!
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <div className="max-w-md space-y-4">
                <h2 className="text-3xl font-bold text-[#403F3F] uppercase tracking-tight">
                    Page Not Found in Our Archives
                </h2>
                <p className="text-[#706F6F] font-sans text-lg">
                    It seems this story hasn't been written yet, or the reporter took it down for further investigation.
                    Don't worry, the truth is still out there!
                </p>
            </div>

            {/* Decorative Newspaper Divider */}
            <div className="w-24 h-1 bg-[#D72344] my-8 rounded-full"></div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 font-sans">
                <Link
                    href="/"
                    className="px-8 py-3 bg-[#403F3F] text-white font-semibold transition-all hover:bg-[#D72344] hover:shadow-lg active:scale-95"
                >
                    Return Home
                </Link>
                <button
                    onClick={() => window.history.back()}
                    className="px-8 py-3 border-2 border-[#403F3F] text-[#403F3F] font-semibold transition-all hover:bg-gray-50 active:scale-95"
                >
                    Go Back
                </button>
            </div>

            {/* Background Decorative Element */}
            <div className="fixed bottom-0 left-0 w-full opacity-[0.03] pointer-events-none select-none overflow-hidden whitespace-nowrap text-[20rem] font-black font-serif leading-none">
                THE DRAGON NEWS THE DRAGON NEWS
            </div>
            <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>

        </div>
    );
}