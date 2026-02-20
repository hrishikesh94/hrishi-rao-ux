const experience = [
  {
    role: "UX Researcher",
    org: "Assistive Technology Company",
    period: "2022 — Present",
    desc: "Leading end-to-end mixed-methods research programmes to inform product strategy and inclusive design. Collaborating with cross-functional teams across engineering, design, and policy.",
  },
  {
    role: "Postdoctoral Researcher",
    org: "University Research Lab",
    period: "2021 — 2022",
    desc: "Conducted research on accessible interfaces and co-design methodologies with disabled communities. Published in top-tier HCI venues.",
  },
  {
    role: "PhD Researcher",
    org: "HCI & Accessibility Lab",
    period: "2017 — 2021",
    desc: "Doctoral research at the intersection of Human-Computer Interaction and accessibility. Thesis focused on participatory design methods for assistive technology.",
  },
  {
    role: "Research Assistant",
    org: "Human Factors Lab",
    period: "2016 — 2017",
    desc: "Supported usability studies and user interviews for academic and industry-facing research projects.",
  },
];

const education = [
  {
    degree: "PhD, Human-Computer Interaction & Accessibility",
    school: "University",
    year: "2021",
  },
  {
    degree: "MSc, Human-Computer Interaction",
    school: "University",
    year: "2016",
  },
  {
    degree: "BEng, Computer Science",
    school: "University",
    year: "2015",
  },
];

const publications = [
  "Rao, H. et al. (2024). Understanding Screen Reader Navigation in Complex Web Applications. CHI '24.",
  "Rao, H. & Collaborators (2023). Co-designing AAC Interfaces: A Participatory Approach. ASSETS '23.",
  "Rao, H. et al. (2022). Workplace AT Adoption: A Longitudinal Diary Study. CSCW '22.",
  "Rao, H. (2021). Participatory Design in Assistive Technology: Methods and Ethics. PhD Thesis.",
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-border">
      <div className="md:col-span-3">
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
          {title}
        </span>
      </div>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}

export default function CV() {
  return (
    <section id="cv" className="py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-4">
          <div className="md:col-span-3">
            <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
              CV
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
              Experience &<br />
              <em>Background</em>
            </h2>
            <a
              href="#"
              className="font-body text-sm tracking-widest uppercase text-foreground border-b border-foreground pb-0.5 hover:text-accent-color hover:border-accent-color transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* Experience */}
        <Section title="Experience">
          <div className="space-y-10">
            {experience.map((exp) => (
              <div key={exp.role + exp.org}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 gap-1">
                  <h3 className="font-display text-xl text-foreground">
                    {exp.role}
                  </h3>
                  <span className="font-body text-xs text-muted-foreground tracking-wide">
                    {exp.period}
                  </span>
                </div>
                <p className="font-body text-sm text-accent-color mb-2 tracking-wide">
                  {exp.org}
                </p>
                <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.degree} className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <div>
                  <h3 className="font-display text-lg text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground font-light">
                    {edu.school}
                  </p>
                </div>
                <span className="font-body text-xs text-muted-foreground">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Publications */}
        <Section title="Publications">
          <ul className="space-y-4">
            {publications.map((pub) => (
              <li key={pub} className="font-body text-sm text-muted-foreground font-light leading-relaxed pl-4 border-l border-border">
                {pub}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </section>
  );
}
