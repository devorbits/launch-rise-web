"use client";

import { Route, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-12 mx-auto mt-32 border-t max-w-7xl border-white/5">
      <div className="grid gap-8 mb-8 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-purple-600 rounded">
              <Route className="text-white" size={18} />
            </div>
            <span className="text-xl font-bold">RISE</span>
          </div>
          <p className="text-sm leading-relaxed text-white/50">
            Transform your daily habits into your dream identity. Build
            intentionally. Grow consistently.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white/80">Coming Soon</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li>Habit Tracking</li>
            <li>AI Roadmaps</li>
            <li>Social Accountability</li>
            <li>Progress Analytics</li>
          </ul>
        </div>

        {/* Connect */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white/80">Connect</h4>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors rounded-lg bg-white/5 hover:bg-purple-600/20"
            >
              <Twitter size={18} className="text-white/60 hover:text-purple-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors rounded-lg bg-white/5 hover:bg-purple-600/20"
            >
              <Linkedin size={18} className="text-white/60 hover:text-purple-400" />
            </a>
            <a
              href="mailto:hello@rise.app"
              className="p-2 transition-colors rounded-lg bg-white/5 hover:bg-purple-600/20"
            >
              <Mail size={18} className="text-white/60 hover:text-purple-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm border-t border-white/5 md:flex-row text-white/40">
        <p>&copy; {currentYear} RISE. All rights reserved.</p>
        <p>Building the future of intentional growth.</p>
      </div>
    </footer>
  );
}
