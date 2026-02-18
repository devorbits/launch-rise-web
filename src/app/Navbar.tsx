"use client";

import Link from "next/link";
import { Route } from "lucide-react";

export default function Navbar() {
  const scrollToWaitlist = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] flex justify-center p-6">
      <div className="glass w-full max-w-7xl px-8 py-4 rounded-full border border-white/10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
            <Route className="text-white" size={18} />
          </div>
          <span className="text-xl font-bold">RISE</span>
        </Link>

        {/* CTA Button */}
        <button
          onClick={scrollToWaitlist}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold transition-all shadow-lg shadow-purple-500/20"
        >
          Join Waitlist
        </button>
      </div>
    </nav>
  );
}
