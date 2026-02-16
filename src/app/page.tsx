"use client";

import { useState } from "react";
import Link from "next/link";
import { joinWaitlist } from "@/lib/api/waitlist";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setStatus("loading");
      await joinWaitlist(email);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <main className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* HERO */}
        <section className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-void-accent border border-white/10 text-xs font-semibold uppercase tracking-widest text-mint">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
            </span>
            Identity engine loading
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter hero-gradient leading-[1.1]">
            Stop Tracking.
            <br />
            Start Becoming.
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-white/50 font-light leading-relaxed">
            The AI-powered identity engine that builds habits through the lens
            of who you want to be.
          </p>

          {/* WAITLIST */}
          <div className="w-full max-w-lg">
            <div className="glass-card p-2 rounded-2xl relative group">
              <form
                onSubmit={submit}
                className="relative flex flex-col md:flex-row gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  className="flex-1 bg-white/5 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-xl"
                >
                  {status === "loading" ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            </div>

            {status === "success" && (
              <p className="mt-3 text-green-400 text-sm">You’re on the list.</p>
            )}
            {status === "error" && (
              <p className="mt-3 text-red-400 text-sm">Something went wrong.</p>
            )}
          </div>
        </section>

        {/* CORE */}
        <section className="max-w-7xl mx-auto mt-40">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              The Core Protocol
            </h2>
            <p className="text-white/40 max-w-md">
              Our neural framework replaces mindless streaks with
              identity-aligned evolution.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden min-h-[460px]">
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                  <span className="material-symbols-outlined text-primary">
                    route
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">AI Roadmaps</h3>
                  <p className="text-white/40 text-sm">
                    Dynamic pathfinding that adjusts to your energy levels and
                    cognitive load.
                  </p>
                </div>
              </div>

              <svg
                className="absolute bottom-0 left-0 w-full h-40 opacity-60"
                viewBox="0 0 300 100"
              >
                <path
                  d="M0 70 Q 25 20 50 60 T 100 40 T 150 80 T 200 30 T 250 70 T 300 50"
                  stroke="#8655f6"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>

            {/* CARD 2 */}
            <div className="glass-card glass-card-mint p-8 rounded-3xl relative overflow-hidden min-h-[460px]">
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 bg-mint/20 rounded-2xl flex items-center justify-center border border-mint/30">
                  <span className="material-symbols-outlined text-mint">
                    fingerprint
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">Identity Scoring</h3>
                  <p className="text-white/40 text-sm">
                    Quantify your transformation.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 evolution-ring">
                <svg className="w-40 h-40 -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#2de28e"
                    strokeWidth="8"
                    strokeDasharray="440"
                    strokeDashoffset="120"
                    fill="transparent"
                  />
                </svg>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden min-h-[460px]">
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                  <span className="material-symbols-outlined text-primary">
                    query_stats
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">Pattern Insights</h3>
                  <p className="text-white/40 text-sm">
                    AI detects subconscious blockers.
                  </p>
                </div>
              </div>

              <svg
                className="absolute bottom-0 left-0 w-full h-40 opacity-70"
                viewBox="0 0 300 100"
              >
                <path
                  d="M0 70 Q 25 20 50 60 T 100 40 T 150 80 T 200 30 T 250 70 T 300 50"
                  stroke="#8655f6"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto mt-40 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            The future belongs to the focused.
          </h2>

          <div className="h-px w-24 bg-primary mx-auto" />

          <p className="text-white/60 leading-relaxed text-lg md:text-xl font-light">
            Generic tracking apps treat you like a machine. RISE treats you like
            a creator. We don't count days; we engineer states of being.
          </p>

          <Link
            href="/manifesto"
            className="text-primary hover:text-white transition-colors flex items-center gap-2 justify-center font-bold uppercase tracking-widest text-sm"
          >
            Read the Manifesto →
          </Link>
        </section>
      </main>
    </>
  );
}
