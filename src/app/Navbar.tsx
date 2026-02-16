"use client";

import Link from "next/link";
import { Route } from "lucide-react";

export default function Navbar() {
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
        {/* Links */}
        <div className="hidden md:flex gap-8 text-white/70 font-medium">
          <Link
            href="/vision"
            className="transition-colors duration-200 hover:text-purple-500"
          >
            Vision
          </Link>

          <Link
            href="/framework"
            className="transition-colors duration-200 hover:text-purple-500"
          >
            Framework
          </Link>

          <Link
            href="/manifesto"
            className="transition-colors duration-200 hover:text-purple-500"
          >
            Manifesto
          </Link>
        </div>
        {/* Button */}
        <button className="px-5 py-2 rounded-full border border-purple-500/40 text-purple-400 hover:bg-purple-600 hover:text-white transition">
          Pre-Alpha
        </button>
      </div>
    </nav>
  );
}
