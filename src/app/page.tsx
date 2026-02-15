import Link from "next/link";
import {
  Sparkles,
  User,
  Brain,
  ArrowLeft,
  ArrowRight,
  Route,
  Twitter,
  Disc3,
  Rss,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 z-[-1] grid-pattern" />
      <div className="fixed inset-0 z-[-1] torch-glow pointer-events-none" />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
        <div className="glass w-full max-w-7xl px-8 py-4 rounded-full border border-white/10 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
              <Route className="text-white" size={18} />
            </div>
            <span className="text-xl font-bold">RISE</span>
          </div>

          {/* Links (FIXED) */}
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

      {/* HERO */}
      <main className="pt-32 px-6">
        <section className="text-center max-w-7xl mx-auto space-y-10">
          <h1 className="text-6xl md:text-8xl font-bold hero-gradient">
            Stop Tracking.
            <br />
            Start Becoming.
          </h1>

          <p className="text-white/50 max-w-2xl mx-auto">
            The AI-powered identity engine that builds habits through identity.
          </p>

          {/* Waitlist */}
          <div className="max-w-lg mx-auto">
            <div className="glass p-2 rounded-2xl border border-white/10 hover:border-purple-500/40 transition">
              <form className="flex gap-2">
                <input
                  className="flex-1 bg-white/5 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-purple-500 transition"
                  placeholder="Enter your email"
                />
                <button className="bg-purple-600 text-white px-8 rounded-xl font-bold hover:bg-purple-700 transition">
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CORE */}
        <section className="max-w-7xl mx-auto mt-40">
          <div className="flex justify-between mb-12">
            <h2 className="text-4xl font-bold">The Core Protocol</h2>

            <div className="flex gap-2">
              <button className="w-12 h-12 glass border border-white/5 rounded-full flex items-center justify-center hover:border-purple-500 transition">
                <ArrowLeft size={18} />
              </button>
              <button className="w-12 h-12 glass border border-purple-500/40 rounded-full flex items-center justify-center text-purple-400 hover:scale-105 transition">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "AI Roadmaps", icon: Sparkles },
              { title: "Identity Evolution", icon: User },
              { title: "Pattern Insights", icon: Brain },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="glass border border-white/5 p-8 rounded-3xl transition hover:-translate-y-2 hover:border-purple-500/40 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-purple-400" size={22} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>

                  <p className="text-white/40">
                    Discover how AI helps optimize identity-driven growth.
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FUTURE */}
        <section className="max-w-4xl mx-auto mt-40 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            The future belongs to the focused.
          </h2>

          <div className="h-px w-24 bg-purple-600 mx-auto" />

          <p className="text-white/60 leading-relaxed text-lg">
            Generic tracking apps treat you like a machine. RISE treats you like
            a creator.
          </p>

          <Link
            href="/manifesto"
            className="text-purple-400 hover:text-white transition font-bold uppercase text-sm tracking-widest"
          >
            Read the Manifesto →
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 mt-32">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-600/20 rounded-sm flex items-center justify-center">
              <Route className="text-purple-400" size={14} />
            </div>
            <span className="text-lg font-bold">RISE</span>
          </div>

          {/* Social */}
          <div className="flex gap-5 text-white/40">
            <Twitter
              size={18}
              className="hover:text-purple-400 cursor-pointer"
            />
            <Disc3 size={18} className="hover:text-purple-400 cursor-pointer" />
            <Rss size={18} className="hover:text-purple-400 cursor-pointer" />
          </div>
        </div>
      </footer>

      {/* Glow */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-[-1]" />
    </>
  );
}
