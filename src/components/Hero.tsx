export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Thin rule */}
        <div className="w-12 h-px bg-accent mb-12" />

        <h1 className="font-display text-6xl md:text-8xl text-foreground leading-none tracking-tight mb-8">
          Hrishi Rao
        </h1>

        <div className="max-w-xl ml-1">
          <p className="font-body text-lg md:text-xl text-foreground font-light leading-relaxed mb-6">
            A seasoned UX researcher specializing in accessibility and device UX
            research, currently driving innovation at NewHaptics.
          </p>
          <p className="font-body text-base text-muted-foreground font-light leading-relaxed">
            Bridging the gap between complex technical challenges and
            human-centered solutions — making cutting-edge technology more
            accessible to all users.
          </p>
        </div>

        <div className="mt-16 flex gap-6">
          <a
            href="#projects"
            className="font-body text-sm tracking-widest uppercase text-foreground border-b border-foreground pb-0.5 hover:text-accent-color hover:border-accent-color transition-colors"
          >
            View Work
          </a>
          <a
            href="#about"
            className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors underline-grow"
          >
            About Me
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-24 flex items-center gap-3 text-muted-foreground">
          <div className="w-6 h-px bg-muted-foreground/40" />
          <span className="font-body text-xs tracking-widest uppercase font-light">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
