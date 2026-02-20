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
                I am a UX researcher specialising in accessibility and assistive technology.
                My work bridges the gap between lived disability experiences and the
                design decisions that shape technology — ensuring that products are not
                just functional, but genuinely inclusive.
              </p>
              <p className="font-body text-base text-muted-foreground font-light leading-relaxed">
                My PhD at the intersection of HCI and accessibility gave me a strong
                foundation in both qualitative and quantitative methods. Since then, I
                have applied this expertise in industry — leading end-to-end research
                programmes, facilitating cross-functional collaboration, and translating
                complex human insights into actionable design direction.
              </p>
              <p className="font-body text-base text-muted-foreground font-light leading-relaxed">
                I am particularly passionate about participatory research methods and
                the role of co-design in building technology that truly works for
                everyone.
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
