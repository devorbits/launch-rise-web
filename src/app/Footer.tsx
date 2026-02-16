"use client";

import { Route, Twitter, Disc3, Rss } from "lucide-react";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 mt-32">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-purple-600/20 rounded-sm flex items-center justify-center">
            <Route className="text-purple-400" size={14} />
          </div>
          <span className="text-lg font-bold">RISE</span>
        </div>

        <div className="flex gap-5 text-white/40">
          <Twitter size={18} className="hover:text-purple-400 cursor-pointer" />
          <Disc3 size={18} className="hover:text-purple-400 cursor-pointer" />
          <Rss size={18} className="hover:text-purple-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
