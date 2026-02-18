"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { joinWaitlist } from "@/lib/api/waitlist";
import {
  CheckCircle2,
  Target,
  Brain,
  Users,
  Sparkles,
  TrendingUp,
  Calendar,
  Award,
  Zap,
  Shield,
  Clock,
  Globe,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    const sanitizedEmail = email.trim().toLowerCase();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    try {
      setStatus("loading");
      await joinWaitlist(sanitizedEmail);
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <motion.main
      initial="hidden"
      animate="show"
      className="px-6 pb-20 space-y-32 md:space-y-40"
    >
      {/* HERO SECTION */}
      <motion.section
        variants={fadeUp}
        className="max-w-6xl pt-16 mx-auto space-y-10 text-center md:pt-24"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <span className="px-4 py-2 text-sm font-semibold text-purple-300 border rounded-full bg-purple-600/20 border-purple-500/30">
            The Future of Intentional Growth
          </span>
        </motion.div>

        <h1 className="px-4 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl hero-gradient">
          You become what you
          <br />
          <span className="italic">repeatedly do.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-xl leading-relaxed md:text-2xl text-white/60">
          Transform your daily habits into your dream identity with AI-powered
          roadmaps, social accountability, and intelligent progress tracking.
        </p>

        <form
          onSubmit={submit}
          className="flex flex-col max-w-2xl gap-4 mx-auto mt-12 md:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === "loading" || status === "success"}
            className="flex-1 px-6 py-4 text-lg transition-all border outline-none bg-white/5 border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-10 py-4 text-lg font-semibold transition-all shadow-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 rounded-xl shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading"
              ? "Joining..."
              : status === "success"
                ? "✓ Joined!"
                : "Join Waitlist"}
          </button>
        </form>

        {status === "error" && errorMessage && (
          <p className="text-sm text-red-400">{errorMessage}</p>
        )}

        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium text-green-400"
          >
            Welcome to the journey! Check your email for updates.
          </motion.p>
        )}

        <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-purple-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-purple-400" />
            <span>Early access perks</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-purple-400" />
            <span>Join 1,000+ founding members</span>
          </div>
        </div>
      </motion.section>

      {/* THE PHILOSOPHY */}
      <motion.section
        variants={fadeUp}
        className="max-w-5xl mx-auto space-y-8 text-center"
      >
        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
          Nothing great happens in a flick.
          <br />
          <span className="text-white/50">Everything adds up.</span>
        </h2>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed md:text-xl text-white/60">
          Every second you spend doing something counts. Your daily habits, the
          time you dedicate, the consistency you maintain — they all compound
          into who you become. We eventually master what we practice most. So
          why not take control and design your days to guarantee your vision?
        </p>

        <div className="grid gap-6 pt-8 md:grid-cols-3">
          <StatCard number="100%" label="You are the sum of your actions" />
          <StatCard number="Daily" label="Small habits create big changes" />
          <StatCard
            number="∞"
            label="Potential when actions align with vision"
          />
        </div>
      </motion.section>

      {/* CORE FEATURES */}
      <motion.section
        variants={stagger}
        className="mx-auto space-y-12 max-w-7xl"
      >
        <motion.div variants={fadeUp} className="space-y-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Three Pillars of Transformation
          </h2>
          <p className="text-lg text-white/60">
            A complete system for intentional growth
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div variants={fadeUp}>
            <FeatureCard
              icon={CheckCircle2}
              title="Daily Habits"
              description="Track gym, reading, development, affirmations, and any habit that shapes you. Simple tick-style logging every day. No fluff, just action."
              features={[
                "Quick daily check-ins",
                "Habit streaks & consistency",
                "Time-bound logging discipline",
                "Morning-focused execution",
              ]}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <FeatureCard
              icon={Target}
              title="Identity & Goals"
              description="See the bigger picture. Goals aren't just wishes — they're destinations. Adopt the identity: I AM A READER not I want to read."
              features={[
                "Short & long-term goals",
                "Identity-based transformation",
                "Habit-to-goal mapping",
                "Progress milestones & checkpoints",
              ]}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <FeatureCard
              icon={Brain}
              title="AI Roadmaps"
              description="Tell us your goals. Our AI asks the right questions, then builds a personalized roadmap that adapts as you grow. Your custom path to mastery."
              features={[
                "Multi-goal planning",
                "Adaptive daily tasks",
                "Intelligent sequencing",
                "Progress predictions",
              ]}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section
        variants={fadeUp}
        className="mx-auto space-y-16 max-w-7xl"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">How RISE Works</h2>
          <p className="text-lg text-white/60">
            From vision to execution in four simple steps
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StepCard
            step="01"
            title="Set Your Vision"
            description="Define your goals: career, health, learning, lifestyle. Dream big or specific — AI handles both."
            icon={Sparkles}
          />
          <StepCard
            step="02"
            title="AI Creates Roadmap"
            description="Answer a few questions. AI builds your personalized daily habits and milestone timeline."
            icon={Brain}
          />
          <StepCard
            step="03"
            title="Execute Daily"
            description="Log your habits every day. 5 minutes. Simple ticks. Real discipline. No excuses."
            icon={Calendar}
          />
          <StepCard
            step="04"
            title="Grow & Adapt"
            description="AI analyzes your patterns, predicts outcomes, and optimizes your path to success."
            icon={TrendingUp}
          />
        </div>
      </motion.section>

      {/* SOCIAL ACCOUNTABILITY */}
      <motion.section
        variants={fadeUp}
        className="grid items-center gap-16 mx-auto max-w-7xl md:grid-cols-2"
      >
        <div className="space-y-8">
          <div className="inline-block p-3 bg-purple-600/20 rounded-xl">
            <Users className="text-purple-400" size={32} />
          </div>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Growth becomes
            <br />
            <span className="hero-gradient">social.</span>
          </h2>

          <p className="text-lg leading-relaxed text-white/60">
            Add friends. Create groups. Share achievements. Hold each other
            accountable. Your circle sees your consistency and celebrates your
            wins. Motivation becomes collective.
          </p>

          <div className="space-y-4">
            <SocialFeature
              title="Friend Network"
              description="Connect with like-minded individuals on similar journeys"
            />
            <SocialFeature
              title="Accountability Groups"
              description="Create or join groups focused on specific goals"
            />
            <SocialFeature
              title="Progress Sharing"
              description="Celebrate wins and learn from each other's paths"
            />
            <SocialFeature
              title="Collective Motivation"
              description="When someone shows up, everyone is inspired"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 space-y-4 glass-card rounded-3xl"
          >
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop"
              className="object-cover w-20 h-20 mx-auto rounded-full"
              alt="Member"
            />
            <div className="text-center">
              <p className="font-semibold">Sarah K.</p>
              <p className="text-sm text-white/50">28 day gym streak</p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-8 rounded-full bg-purple-500/60"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 mt-8 space-y-4 glass-card rounded-3xl"
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
              className="object-cover w-20 h-20 mx-auto rounded-full"
              alt="Member"
            />
            <div className="text-center">
              <p className="font-semibold">Mike R.</p>
              <p className="text-sm text-white/50">Coding: 2h daily</p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-8 rounded-full bg-green-500/60"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 space-y-4 glass-card rounded-3xl"
          >
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop"
              className="object-cover w-20 h-20 mx-auto rounded-full"
              alt="Member"
            />
            <div className="text-center">
              <p className="font-semibold">Emma L.</p>
              <p className="text-sm text-white/50">Reading: 45min</p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-8 rounded-full bg-blue-500/60"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 mt-8 space-y-4 glass-card rounded-3xl"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              className="object-cover w-20 h-20 mx-auto rounded-full"
              alt="Member"
            />
            <div className="text-center">
              <p className="font-semibold">Alex T.</p>
              <p className="text-sm text-white/50">Meditation: Daily</p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-8 rounded-full bg-yellow-500/60"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* AI INTELLIGENCE */}
      <motion.section
        variants={fadeUp}
        className="grid items-center gap-16 mx-auto max-w-7xl md:grid-cols-2"
      >
        <div className="relative order-2 overflow-hidden glass-card rounded-3xl md:order-1">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop"
            alt="AI Intelligence"
            className="w-full h-[500px] object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute space-y-4 bottom-8 left-8 right-8">
            <div className="p-4 glass-card rounded-xl">
              <p className="text-sm text-white/80">
                "Based on your patterns, you'll reach your fitness goal in 67
                days if you maintain consistency."
              </p>
            </div>
            <div className="p-4 glass-card rounded-xl">
              <p className="text-sm text-white/80">
                "You're most productive between 9-11 AM. Schedule deep work in
                that window."
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 space-y-8 md:order-2">
          <div className="inline-block p-3 bg-purple-600/20 rounded-xl">
            <Sparkles className="text-purple-400" size={32} />
          </div>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            AI that actually
            <br />
            <span className="hero-gradient">understands you.</span>
          </h2>

          <p className="text-lg leading-relaxed text-white/60">
            Every habit logged, every goal set, every day tracked — it all feeds
            into your personal AI intelligence system. The more you use RISE,
            the smarter it gets about YOU.
          </p>

          <div className="space-y-4">
            <AIFeature
              icon={Brain}
              title="Personalized Roadmaps"
              description="Custom paths for multiple goals simultaneously — fitness, career, learning, all in one plan"
            />
            <AIFeature
              icon={TrendingUp}
              title="Predictive Analytics"
              description="Know when you'll reach your goals based on current trajectory and patterns"
            />
            <AIFeature
              icon={Zap}
              title="Energy Optimization"
              description="Identify your best performance windows and optimize task scheduling"
            />
            <AIFeature
              icon={Award}
              title="Adaptive Learning"
              description="Plans evolve as you do — dates adjust, priorities shift, paths optimize"
            />
          </div>
        </div>
      </motion.section>

      {/* IDENTITY TRANSFORMATION */}
      <motion.section
        variants={fadeUp}
        className="max-w-5xl mx-auto space-y-12 text-center"
      >
        <h2 className="text-4xl font-bold md:text-5xl">
          Track who you're becoming
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-white/60">
          Inspired by Atomic Habits — build identity-based goals. Don't say "I
          want to read," say "I am a reader." Your identity score reflects the
          alignment between who you want to be and what you actually do.
        </p>

        <div className="grid gap-8 pt-8 md:grid-cols-3">
          <IdentityCard
            identity="Reader"
            progress={87}
            streak={23}
            color="blue"
          />
          <IdentityCard
            identity="Athlete"
            progress={92}
            streak={41}
            color="purple"
          />
          <IdentityCard
            identity="Developer"
            progress={76}
            streak={15}
            color="green"
          />
        </div>
      </motion.section>

      {/* THE FUTURE VISION */}
      <motion.section
        variants={fadeUp}
        className="max-w-6xl p-12 mx-auto space-y-8 text-center glass-card rounded-3xl md:p-16"
      >
        <Globe className="mx-auto text-purple-400" size={48} />

        <h2 className="text-4xl font-bold md:text-5xl">
          Beyond habits.
          <br />
          <span className="italic text-white/70">The mentorship problem.</span>
        </h2>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white/60">
          In today's world, finding the right guidance is nearly impossible.
          Everyone is struggling, and real mentorship is rare. RISE is solving
          this. As we scale, we're building a platform where people with
          questions can connect with those who've walked the path. AI-matched
          mentorship. Real guidance. Community wisdom.
        </p>

        <div className="grid gap-6 pt-8 md:grid-cols-3">
          <VisionCard
            title="AI-Matched Mentors"
            description="Connect with people who've achieved what you're pursuing"
          />
          <VisionCard
            title="Community Wisdom"
            description="Learn from collective experiences and proven paths"
          />
          <VisionCard
            title="Guided Growth"
            description="Never walk your journey alone — mentorship at scale"
          />
        </div>
      </motion.section>

      {/* WHY RISE IS DIFFERENT */}
      <motion.section
        variants={fadeUp}
        className="mx-auto space-y-12 max-w-7xl"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            What makes RISE different?
          </h2>
          <p className="text-lg text-white/60">
            No fake streaks. No casual logging. Real systems for real growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <DifferentiatorCard
            icon={Clock}
            title="Time-Bound Discipline"
            description="Cannot log after midnight. Real discipline enforced by design."
          />
          <DifferentiatorCard
            icon={Target}
            title="Identity-First"
            description="Track who you're becoming, not just what you checked off."
          />
          <DifferentiatorCard
            icon={Users}
            title="Social Accountability"
            description="Your circle sees your consistency. Growth becomes collective."
          />
          <DifferentiatorCard
            icon={Brain}
            title="Adaptive AI"
            description="Roadmaps that evolve as you evolve. Always optimizing."
          />
        </div>
      </motion.section>

      {/* MATHEMATICAL REPRESENTATION */}
      <motion.section
        variants={fadeUp}
        className="max-w-5xl mx-auto space-y-12 text-center"
      >
        <h2 className="text-4xl font-bold md:text-5xl">
          Your data tells your story
        </h2>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white/60">
          We don't just show you charts. We analyze patterns, predict outcomes,
          suggest optimizations, and help you see where you're excelling and
          where you're slipping. Every data point is a chance to improve.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-8 space-y-6 text-left glass-card rounded-3xl">
            <h3 className="text-2xl font-bold">Weekly Insights</h3>
            <div className="space-y-4">
              <InsightRow label="Consistency Score" value="87%" trend="up" />
              <InsightRow label="Identity Alignment" value="92%" trend="up" />
              <InsightRow label="Energy Peak" value="9-11 AM" trend="neutral" />
              <InsightRow
                label="Skip Pattern"
                value="Weekends"
                trend="down"
              />
            </div>
          </div>

          <div className="p-8 space-y-6 text-left glass-card rounded-3xl">
            <h3 className="text-2xl font-bold">AI Suggestions</h3>
            <div className="space-y-4 text-white/60">
              <SuggestionItem text="Move meditation to morning for 23% better completion" />
              <SuggestionItem text="Your fitness goal is 8 days ahead of schedule" />
              <SuggestionItem text="Consider joining the 'Early Risers' group" />
              <SuggestionItem text="Reading habit pairs well with your commute time" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        variants={fadeUp}
        className="max-w-4xl py-20 mx-auto space-y-10 text-center"
      >
        <h2 className="text-4xl font-bold leading-tight md:text-6xl">
          The future belongs to
          <br />
          <span className="hero-gradient">the focused.</span>
        </h2>

        <p className="text-xl text-white/60">
          Every great thing takes time. Every action adds up.
          <br />
          Start building the person you want to become.
        </p>

        <form
          onSubmit={submit}
          className="flex flex-col max-w-2xl gap-4 mx-auto mt-12 md:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === "loading" || status === "success"}
            className="flex-1 px-6 py-4 text-lg transition-all border outline-none bg-white/5 border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-10 py-4 text-lg font-semibold transition-all shadow-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 rounded-xl shadow-purple-500/30 disabled:opacity-50"
          >
            {status === "loading"
              ? "Joining..."
              : status === "success"
                ? "✓ Joined!"
                : "Join Waitlist"}
          </button>
        </form>

        {status === "error" && errorMessage && (
          <p className="text-sm text-red-400">{errorMessage}</p>
        )}

        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-medium text-green-400"
          >
            Welcome aboard! Check your email for updates.
          </motion.p>
        )}

        <p className="pt-8 text-sm text-white/40">
          Join early and get lifetime access to premium features
        </p>
      </motion.section>
    </motion.main>
  );
}

// Component definitions
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-6 text-center glass-card rounded-2xl">
      <div className="mb-2 text-4xl font-bold text-purple-400">{number}</div>
      <p className="text-sm text-white/50">{label}</p>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  features,
}: {
  icon: any;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="h-full p-8 space-y-6 transition-all glass-card rounded-3xl hover:border-purple-500/40">
      <div className="inline-block p-3 bg-purple-600/20 rounded-xl">
        <Icon className="text-purple-400" size={28} />
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="leading-relaxed text-white/60">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-white/50">
            <CheckCircle2 size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
  icon: Icon,
}: {
  step: string;
  title: string;
  description: string;
  icon: any;
}) {
  return (
    <div className="p-6 space-y-4 transition-all glass-card rounded-2xl hover:border-purple-500/40">
      <div className="flex items-center justify-between">
        <span className="text-5xl font-bold text-white/10">{step}</span>
        <Icon className="text-purple-400" size={24} />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}

function SocialFeature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-purple-500 rounded-full" />
      <div>
        <h4 className="mb-1 font-semibold">{title}</h4>
        <p className="text-sm text-white/50">{description}</p>
      </div>
    </div>
  );
}

function AIFeature({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 glass-card rounded-xl">
      <div className="flex-shrink-0 p-2 rounded-lg bg-purple-600/20">
        <Icon className="text-purple-400" size={20} />
      </div>
      <div>
        <h4 className="mb-1 font-semibold">{title}</h4>
        <p className="text-sm text-white/50">{description}</p>
      </div>
    </div>
  );
}

function IdentityCard({
  identity,
  progress,
  streak,
  color,
}: {
  identity: string;
  progress: number;
  streak: number;
  color: string;
}) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
  };

  return (
    <div className="p-8 space-y-6 glass-card rounded-3xl">
      <h3 className="text-2xl font-bold">I am a {identity}</h3>
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="currentColor"
            className={`text-${color}-500`}
            strokeWidth="8"
            strokeDasharray="352"
            strokeDashoffset={352 - (352 * progress) / 100}
            fill="transparent"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold">{progress}%</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm text-white/50">{streak} day streak</p>
      </div>
    </div>
  );
}

function VisionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-3 text-center">
      <Shield className="mx-auto text-purple-400" size={32} />
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-sm text-white/50">{description}</p>
    </div>
  );
}

function DifferentiatorCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 space-y-4 transition-all glass-card rounded-2xl hover:border-purple-500/40">
      <Icon className="text-purple-400" size={28} />
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm leading-relaxed text-white/50">{description}</p>
    </div>
  );
}

function InsightRow({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: "up" | "down" | "neutral";
}) {
  const trendColors = {
    up: "text-green-400",
    down: "text-red-400",
    neutral: "text-white/50",
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-white/60">{label}</span>
      <span className={`font-semibold ${trendColors[trend]}`}>{value}</span>
    </div>
  );
}

function SuggestionItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <Sparkles className="flex-shrink-0 mt-1 text-purple-400" size={16} />
      <p className="text-sm">{text}</p>
    </div>
  );
}
