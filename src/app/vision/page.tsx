"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User, MapPin, Clock, Twitter, Disc3, Rss } from "lucide-react";
import { motion } from "framer-motion";

// animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

// feature card
const FeatureCard = ({ title, description, Icon }: any) => (
  <motion.div
    variants={fadeUp}
    className="bg-[#0A0A0A] border border-zinc-800/50 p-8 rounded-2xl min-h-[280px]
    transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/40
    hover:shadow-purple-500/20 hover:shadow-2xl"
  >
    <div className="w-10 h-10 bg-purple-900/20 border border-purple-500/20 rounded-lg flex items-center justify-center mb-6">
      <Icon className="text-purple-500 w-5 h-5" />
    </div>
    <h3 className="text-xl text-white mb-3">{title}</h3>
    <p className="text-zinc-500 text-sm">{description}</p>
  </motion.div>
);

// image block
const ImageBlock = ({ src, alt }: any) => (
  <motion.div
    variants={fadeUp}
    className="relative w-full h-[280px] rounded-2xl overflow-hidden grayscale
    hover:grayscale-0 transition-all duration-700 border border-zinc-800/30"
  >
    <Image src={src} alt={alt} fill className="object-cover opacity-60" />
  </motion.div>
);

export default function VisionPage() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="min-h-screen bg-black text-white"
    >
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        className="pt-44 pb-20 flex flex-col items-center text-center px-6"
      >
        <h1 className="text-6xl md:text-[100px] font-serif italic mb-8">
          THE RISE <br />
          <span className="not-italic">MANIFEST</span>
        </h1>

        <p className="max-w-xl text-zinc-500 text-xs uppercase tracking-widest">
          We don't build habits to do more. We build systems to become more.
        </p>

        {/* animated arrow */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-10 opacity-50"
        >
          ↓
        </motion.div>
      </motion.section>

      {/* IDENTITY CORE */}
      <section className="relative py-40 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.18),transparent_60%)]" />
        <div className="absolute w-[700px] h-[700px] bg-purple-600/30 blur-[180px] rounded-full opacity-40" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] border border-purple-500/10 rounded-full animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-[700px] h-[700px] border border-purple-500/5 rounded-full animate-[spin_60s_linear_infinite_reverse]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6">
          <div className="relative w-40 h-40 mb-12">
            <div className="absolute inset-0 bg-purple-600/40 blur-[120px] rounded-full" />
            <div className="w-28 h-28 mx-auto bg-gradient-to-br from-purple-500/60 to-purple-900/60 rounded-full border border-white/10 shadow-[0_0_80px_rgba(147,51,234,0.5)]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif italic mb-6">
            The Identity Core
          </h2>

          <p className="text-white/60 leading-loose mb-10">
            At the heart of every action lies an identity. Traditional
            productivity tools focus on the “what.” RISE focuses on the “who.”
          </p>

          <button className="bg-gradient-to-r from-purple-600 to-indigo-500 px-12 py-4 rounded-full text-xs tracking-[0.2em] font-bold shadow-[0_0_40px_rgba(147,51,234,0.4)] hover:scale-105 transition">
            START YOUR JOURNEY →
          </button>
        </div>
      </section>

      {/* GRID */}
      <motion.section
        variants={fadeUp}
        className="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 pb-40"
      >
        <FeatureCard
          Icon={User}
          title="Identity Over Tasks"
          description="Checking off boxes is temporary. Identity is permanent."
        />
        <ImageBlock
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK1rA3PFyCXsyoqRHBVFyCieL9MdiJSc3jznGt_Rq7yir2muwXyuTSJRWipPtsa1xDMUxemjyMEg1sthrFDTXyN4ETK7BUCWR97Pzbra6U9t9fyMoskZhrGG_vLwUFbm9Ldq9jtZ1xoq8LyOVGGiJ33weMrZhWCwIaIEP6tI94R1NBigDS2f-ipTgAf3PxxOEtpDyPIdN4NiUfKVXj8Uh6orrxj_buuRPS5T_c2YQKGBgTHfjqhDhGEYWgS8zItxJtQY20TKEy7Mg"
          alt="mesh"
        />
        <ImageBlock
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUchQAd6xTsz9329MrAZKtO7JxjfvteXYQWDrvLTZNm6n50Gmz-FmZv2s-HMGpz0hhG2F3yKif5xlUGIMj3xJ4KhmYr4U3lcQI7padHk9-fyrEgyLjMySxqHr9Xp_1t2XXi48TdWdQhPH2osOpQKbU5qc-ARn4gedZGSBf58Jr4Agmjv5xzrCRSWsNJAiSLZxD83QPf1iWDFoMstgn7Yf0TaSqV0HNG6U8scRV4Z5iDXPz1KUYVgsSgnACdFUWezs_ZpvkaKwEVAE"
          alt="face"
        />
        <FeatureCard
          Icon={MapPin}
          title="AI as a Mentor"
          description="RISE learns your rhythms."
        />
        <FeatureCard
          Icon={Clock}
          title="90 Days to Mastery"
          description="Consistency compounds into mastery."
        />
        <ImageBlock
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmQ2-hzKWSAyOORFce1nqQ1L6tukI56jRQk5yc2ua0u6yih27zhUhJLnTQFvkS1pQy4CALxNWNZoHyrzFgK1Lar0feftLWq8lV4CmAQQXGHDDKIyQB2iT4X-ud0UPS0etRMxyxHDTxIR9FaxRnPacBLulKNJCCP4hQmpAOnCykenKpOcb09DsPwkXS1sSvrV75Bt7PA9lXOJ2qoO49ZY8ioGF1RTL1kuKL9Av09pUbvMMW8lyQTcH76ZChe5GxMt7rbWiPuefPM0U"
          alt="galaxy"
        />
      </motion.section>

     
    </motion.div>
  );
}
