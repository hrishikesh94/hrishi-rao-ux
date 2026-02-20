const experience = [
  {
    role: "Founding UX Researcher",
    org: "NewHaptics",
    period: "Jan 2024 — Present",
    desc: "Developing next-generation braille interfaces utilizing multi-modal information design approaches. Creating and validating design systems for braille user interfaces and building custom rapid prototyping tools.",
  },
  {
    role: "UX Researcher",
    org: "Meta",
    period: "May 2022 — Aug 2022",
    desc: "Focused on privacy-related customer experience initiatives, including generative research, card sorting, and interviews to redesign the Meta Privacy Center across Instagram, WhatsApp, and Messenger.",
  },
  {
    role: "Visiting Researcher",
    org: "Smith-Kettlewell Eye Research Institute",
    period: "May 2019 — Aug 2019",
    desc: "Developed multi-sensory approaches for representing tactile graphics and data visualizations for visually impaired users.",
  },
  {
    role: "UX Research Specialist",
    org: "IBM Research",
    period: "May 2017 — Aug 2017",
    desc: "Contributed to the Data for Social Good initiative, applying UX research methods to socially impactful projects.",
  },
  {
    role: "Design Researcher",
    org: "Cisco",
    period: "Jan 2016 — Jul 2016",
    desc: "Conducted design research to inform product decisions and improve user experiences.",
  },
];

const education = [
  {
    degree: "PhD, Accessibility & Human-Computer Interaction",
    school: "University of Michigan",
    year: "2024",
  },
  {
    degree: "MSI, Human-Computer Interaction",
    school: "University of Michigan",
    year: "2019",
  },
  {
    degree: "B.Tech, Mechatronics Engineering",
    school: "Manipal University",
    year: "2015",
  },
];

const publications = [
  "Pandey, M., Bondre, S., Rao, H.V., O'Modhrain, S., & Oney, S. (2024). UI Development Experiences of Programmers with Visual Impairments in Product Teams. Equity, Diversity, and Inclusion in Software Engineering.",
  "Fan, D., Siu, A.F., Rao, H.V., Kim, G.S.-H., Vazquez, X., Greco, L., O'Modhrain, S., & Follmer, S. (2023). The Accessibility of Data Visualizations on the Web for Screen Reader Users: Practices and Experiences During COVID-19. ACM Transactions on Accessible Computing.",
  "Rao, H.V. & O'Modhrain, S. (2022). Designing Interactive Audio-Tactile Charts Grounded in Current Practices of Tactile Graphics Production. ACM DIS '22.",
  "Pandey, M., Kameswaran, V., Rao, H.V., O'Modhrain, S., & Oney, S. (2021). Understanding Accessibility and Collaboration in Programming for People with Visual Impairments. Proc. ACM Hum.-Comput. Interact. (CSCW).",
  "Siu, A.F., Fan, D., Rao, H.V., Kim, G.S.-H., Vazquez, X., O'Modhrain, S., & Follmer, S. (2021). COVID-19 Highlights the Issues Facing Blind and Visually Impaired People in Accessing Data on the Web. W4A '21.",
  "Rao, H.V. & O'Modhrain, S. (2020). 2Across: A Comparison of Audio-Tactile and Screen-Reader Based Representations of a Crossword Puzzle. ACM CHI '20.",
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
