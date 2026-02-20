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
          Hrishi<br />
          <span className="italic text-muted-foreground">Rao</span>
        </h1>

        <div className="max-w-xl ml-1">
          <p className="font-body text-lg md:text-xl text-foreground font-light leading-relaxed mb-6">
            UX Researcher at an assistive technology company, with a PhD in Human-Computer
            Interaction & Accessibility.
          </p>
          <p className="font-body text-base text-muted-foreground font-light leading-relaxed">
            Over 6 years of experience conducting mixed-methods UX research
            across academic and industry settings — working at the intersection
            of inclusive design, emerging technology, and human need.
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
