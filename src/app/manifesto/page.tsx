export default function ManifestoPage() {
  return (
    <>
      {/* Nebula glow */}
      <div className="nebula" />

      <main className="snap-container relative z-10">
        {/* SECTION 1 */}
        <section className="section-snap flex flex-col items-center justify-center px-6 relative overflow-hidden">
          <h1 className="font-serif italic text-[12vw] md:text-[10vw] leading-none text-white text-center opacity-90 select-none">
            WE BELIEVE
          </h1>

          <div className="absolute bottom-20 flex flex-col items-center gap-4 animate-bounce opacity-30">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
              Scroll to Begin
            </span>
            <div className="w-px h-12 bg-white" />
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="section-snap flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-5xl w-full">
            <p className="font-mono text-primary text-sm mb-8 uppercase tracking-[0.4em]">
              Principle 01
            </p>

            <h2 className="font-serif text-5xl md:text-8xl leading-tight mb-12">
              We build <span className="italic">roadmaps</span>, <br />
              not lists.
            </h2>

            <div className="relative w-full h-24 flex items-center justify-center">
              <div className="glow-path relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full blur-[2px] shadow-[0_0_15px_#8c25f4]" />
              </div>
            </div>

            <p className="max-w-md mx-auto font-display text-white/40 text-sm mt-8 leading-relaxed">
              Checklists are for maintenance. Roadmaps are for evolution. We
              prioritize direction over raw volume.
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="section-snap flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-5xl w-full flex flex-col items-center">
            <p className="font-mono text-primary text-sm mb-8 uppercase tracking-[0.4em]">
              Principle 02
            </p>

            <h2 className="font-serif text-5xl md:text-8xl leading-tight mb-12">
              We track <span className="italic">identities</span>, <br />
              not habits.
            </h2>

            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8nk8OzfXLU8H52X_kl2ozw-hGo8N8ke3lnJIXcoLgSlE-xH6iJ7z_l8We4Hcpz5L5FoMl0lzn5AEYoWP4yBnJUk9Srnb067cXFdFGPXdvS0joJ4NVTF709mPlfIouVjZtuKymSwXXoDAPtABykmq2KfQhSogqHYe779vHyD4zEou5Er0cAGIc5PebFcZyzW9Sj7VrRpRz-bcz9QM3KtLYuINLIezT65V3asSaB6irwrOTfWKyPaw-AvlKkea4xzjctW4OJKNIPN0"
                alt="Identity"
                className="w-full h-full object-cover rounded-full opacity-40 mix-blend-screen grayscale brightness-150"
              />
            </div>

            <p className="max-w-md mx-auto font-display text-white/40 text-sm mt-8 leading-relaxed">
              True change happens when who you are shifts.
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="section-snap flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-5xl w-full">
            <p className="font-mono text-primary text-sm mb-8 uppercase tracking-[0.4em]">
              Principle 03
            </p>

            <h2 className="font-serif text-5xl md:text-8xl leading-tight mb-12">
              We use <span className="italic text-primary">AI</span> to find{" "}
              <br />
              your focus, not your <br />
              <span className="line-through decoration-primary/50 text-white/20">
                distractions
              </span>
              .
            </h2>

            <div className="relative flex justify-center">
              <div className="w-32 h-32 border border-primary/40 rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                <div className="w-16 h-16 border border-white/20 rounded-full" />
              </div>
            </div>

            <p className="max-w-md mx-auto font-display text-white/40 text-sm mt-8 leading-relaxed">
              Intelligence should sharpen the mind.
            </p>
          </div>
        </section>

        {/* SECTION 5 */}
        <section className="section-snap flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-4xl w-full p-12 md:p-24 border border-white/5 bg-white/[0.02] rounded-3xl backdrop-blur-sm">
            <p className="font-mono text-xs text-primary/60 mb-12 tracking-widest uppercase">
              The Promise
            </p>

            <h3 className="font-serif text-3xl md:text-5xl leading-relaxed text-white">
              RISE is the bridge between{" "}
              <span className="italic">who you are</span> and{" "}
              <span className="italic text-primary">
                who you want to become.
              </span>
            </h3>

            <div className="w-16 h-px bg-primary/40 mx-auto my-12" />

            <p className="font-display text-lg md:text-xl text-white/60 font-light leading-loose max-w-2xl mx-auto">
              It is a system of change, powered by intelligence.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
