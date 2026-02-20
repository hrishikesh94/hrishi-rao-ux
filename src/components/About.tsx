const skills = [
  "Mixed-Methods Research",
  "Accessibility & Inclusive Design",
  "Usability Studies",
  "Ethnographic Research",
  "Survey & Diary Studies",
  "Cognitive Walkthroughs",
  "Data Analysis (Qual + Quant)",
  "Assistive Technology",
  "Academic Writing",
  "Research Strategy",
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Label */}
          <div className="md:col-span-3">
            <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
              About
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10 leading-tight">
              Research rooted in<br />
              <em>empathy & rigor</em>
            </h2>

            <div className="space-y-5 max-w-2xl">
              <p className="font-body text-base text-foreground font-light leading-relaxed">
                I am a UX researcher specializing in accessibility and device UX
                research, currently part of the founding team at NewHaptics. My work
                involves creating and validating design systems for braille user
                interfaces and developing custom rapid prototyping tools for Codex — a
                multiline braille display powered by bespoke microfluidic technology.
              </p>
              <p className="font-body text-base text-muted-foreground font-light leading-relaxed">
                My PhD at the University of Michigan in Accessibility & Human-Computer
                Interaction gave me a strong foundation in both qualitative and
                quantitative methods. I have led numerous end-to-end mixed-method UX
                research projects that have directly influenced product development —
                from field deployments to generative research and co-design workshops.
              </p>
              <p className="font-body text-base text-muted-foreground font-light leading-relaxed">
                I am passionate about bridging the gap between complex technical
                challenges and human-centered solutions, making cutting-edge technology
                more accessible to all users.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-14">
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-6">
                Areas of expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-xs font-light tracking-wide border border-border px-3 py-1.5 text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
