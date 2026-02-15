"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- Types ---
interface FrameworkPhase {
  id: string;
  phaseNumber: string;
  title: string;
  description: string;
  imageSrc: string;
  isReversed: boolean;
  quote?: string;
  bullets?: string[];
  subCards?: {
    title: string;
    desc: string;
  }[];
}

// --- Phase Section ---
const PhaseSection = ({ phase }: { phase: FrameworkPhase }) => {
  return (
    <div
      className={`flex flex-col ${
        phase.isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-16 py-24`}
    >
      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: phase.isReversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1 space-y-6"
      >
        <span className="text-purple-500 uppercase tracking-[0.3em] text-[10px] font-bold">
          Phase {phase.phaseNumber}
        </span>

        <h2 className="text-4xl font-serif text-white tracking-tight">
          {phase.id}. {phase.title}
        </h2>

        <p className="text-zinc-400 leading-relaxed max-w-md">
          {phase.description}
        </p>

        {phase.quote && (
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl flex gap-4">
            <span className="text-purple-500">✦</span>
            <p className="text-xs italic text-zinc-500 leading-relaxed">
              "{phase.quote}"
            </p>
          </div>
        )}

        {phase.bullets && (
          <ul className="space-y-3">
            {phase.bullets.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-sm text-zinc-400"
              >
                <span className="w-1 h-1 bg-purple-500 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {phase.subCards && (
          <div className="grid grid-cols-2 gap-4 pt-4">
            {phase.subCards.map((card, i) => (
              <div
                key={i}
                className="bg-zinc-900/40 border border-zinc-800/50 p-4 rounded-xl"
              >
                <h4 className="text-xs font-bold text-white mb-1">
                  {card.title}
                </h4>
                <p className="text-[10px] text-zinc-500 leading-snug">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* IMAGE with hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1 flex justify-center"
      >
        <div
          className="relative w-[300px] h-[300px] rounded-2xl overflow-hidden
          grayscale hover:grayscale-0 transition-all duration-700
          border border-zinc-800/30"
        >
          <Image
            src={phase.imageSrc}
            alt={phase.title}
            fill
            className="object-contain opacity-80"
          />
        </div>
      </motion.div>
    </div>
  );
};

// --- Page ---
export default function FrameworkPage() {
  const phases: FrameworkPhase[] = [
    {
      id: "01",
      phaseNumber: "ONE",
      title: "Define Your Identity",
      description:
        "We begin not with tasks, but with resonance. By reflecting on your core aspirations, our system helps you distill the person you are evolving into.",
      quote:
        "The most powerful form of change is identity-based. When you change who you are, habits follow naturally.",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAK1rA3PFyCXsyoqRHBVFyCieL9MdiJSc3jznGt_Rq7yir2muwXyuTSJRWipPtsa1xDMUxemjyMEg1sthrFDTXyN4ETK7BUCWR97Pzbra6U9t9fyMoskZhrGG_vLwUFbm9Ldq9jtZ1xoq8LyOVGGiJ33weMrZhWCwIaIEP6tI94R1NBigDS2f-ipTgAf3PxxOEtpDyPIdN4NiUfKVXj8Uh6orrxj_buuRPS5T_c2YQKGBgTHfjqhDhGEYWgS8zItxJtQY20TKEy7Mg",
      isReversed: false,
    },
    {
      id: "02",
      phaseNumber: "TWO",
      title: "Map the Journey",
      description:
        "A clear, 90-day trajectory tailored to your life's rhythm. We remove the clutter and focus on the singular path of least resistance.",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAUchQAd6xTsz9329MrAZKtO7JxjfvteXYQWDrvLTZNm6n50Gmz-FmZv2s-HMGpz0hhG2F3yKif5xlUGIMj3xJ4KhmYr4U3lcQI7padHk9-fyrEgyLjMySxqHr9Xp_1t2XXi48TdWdQhPH2osOpQKbU5qc-ARn4gedZGSBf58Jr4Agmjv5xzrCRSWsNJAiSLZxD83QPf1iWDFoMstgn7Yf0TaSqV0HNG6U8scRV4Z5iDXPz1KUYVgsSgnACdFUWezs_ZpvkaKwEVAE",
      subCards: [
        {
          title: "Sustainable Pace",
          desc: "Flow-based schedules that adapt to your energy.",
        },
        {
          title: "Visual Clarity",
          desc: "Intuitive timelines that breathe with your progress.",
        },
      ],
      isReversed: true,
    },
    {
      id: "03",
      phaseNumber: "THREE",
      title: "Grow with AI",
      description:
        "Our gentle intelligence learns your patterns not to monitor you, but to support you. It recalibrates your journey in real-time.",
      bullets: [
        "Intuitive Recalibration",
        "Gentle Accountability",
        "Wisdom-based Insights",
      ],
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCmQ2-hzKWSAyOORFce1nqQ1L6tukI56jRQk5yc2ua0u6yih27zhUhJLnTQFvkS1pQy4CALxNWNZoHyrzFgK1Lar0feftLWq8lV4CmAQQXGHDDKIyQB2iT4X-ud0UPS0etRMxyxHDTxIR9FaxRnPacBLulKNJCCP4hQmpAOnCykenKpOcb09DsPwkXS1sSvrV75Bt7PA9lXOJ2qoO49ZY8ioGF1RTL1kuKL9Av09pUbvMMW8lyQTcH76ZChe5GxMt7rbWiPuefPM0U",
      isReversed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-300 px-6">
      {/* HEADER */}
      <header className="max-w-4xl mx-auto text-center pt-32 pb-20">
        <span className="text-purple-500 uppercase tracking-[0.4em] text-[10px] font-bold">
          THE FRAMEWORK
        </span>

        <h1 className="text-5xl md:text-7xl font-serif text-white mt-6">
          The Architecture of your{" "}
          <span className="italic text-purple-400">Becoming</span>
        </h1>
      </header>

      <main className="max-w-5xl mx-auto">
        {phases.map((phase) => (
          <PhaseSection key={phase.id} phase={phase} />
        ))}
      </main>

      {/* CTA */}
      <section className="max-w-4xl mx-auto my-40 text-center">
        <h2 className="text-4xl font-serif text-white mb-8">
          Ready to transcend the noise?
        </h2>
        <button className="bg-purple-600 hover:bg-purple-500 px-10 py-4 rounded-full text-xs tracking-widest">
          START YOUR ASCENSION
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-xs text-zinc-600 uppercase tracking-widest">
          © 2024 RISE LABS
        </p>
      </footer>
    </div>
  );
}
