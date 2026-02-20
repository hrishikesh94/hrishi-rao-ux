import type { ReactNode } from "react";
import { Timeline, TimelineItem } from "./ui/timeline";

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
  {
    citation:
      "Pandey, M., Bondre, S., Rao, H.V., O'Modhrain, S., & Oney, S. (2024). UI Development Experiences of Programmers with Visual Impairments in Product Teams. Equity, Diversity, and Inclusion in Software Engineering.",
    year: "2024",
  },
  {
    citation:
      "Fan, D., Siu, A.F., Rao, H.V., Kim, G.S.-H., Vazquez, X., Greco, L., O'Modhrain, S., & Follmer, S. (2023). The Accessibility of Data Visualizations on the Web for Screen Reader Users: Practices and Experiences During COVID-19. ACM Transactions on Accessible Computing.",
    year: "2023",
  },
  {
    citation:
      "Rao, H.V. & O'Modhrain, S. (2022). Designing Interactive Audio-Tactile Charts Grounded in Current Practices of Tactile Graphics Production. ACM DIS '22.",
    year: "2022",
  },
  {
    citation:
      "Pandey, M., Kameswaran, V., Rao, H.V., O'Modhrain, S., & Oney, S. (2021). Understanding Accessibility and Collaboration in Programming for People with Visual Impairments. Proc. ACM Hum.-Comput. Interact. (CSCW).",
    year: "2021",
  },
  {
    citation:
      "Siu, A.F., Fan, D., Rao, H.V., Kim, G.S.-H., Vazquez, X., O'Modhrain, S., & Follmer, S. (2021). COVID-19 Highlights the Issues Facing Blind and Visually Impaired People in Accessing Data on the Web. W4A '21.",
    year: "2021",
  },
  {
    citation:
      "Rao, H.V. & O'Modhrain, S. (2020). 2Across: A Comparison of Audio-Tactile and Screen-Reader Based Representations of a Crossword Puzzle. ACM CHI '20.",
    year: "2020",
  },
];

function Section({ title, children }: { title: string; children: ReactNode }) {
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
              className="font-body text-sm tracking-widest uppercase text-foreground border-b border-foreground pb-0.5 hover:text-accent-color hover:border-accent-color focus-visible:text-accent-color focus-visible:border-accent-color transition-colors outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* Experience */}
        <Section title="Experience">
          <Timeline aria-label="Work experience timeline">
            {experience.map((exp, i) => (
              <TimelineItem
                key={exp.role + exp.org}
                year={exp.period}
                aria-label={`${exp.role} at ${exp.org}, ${exp.period}`}
                isLast={i === experience.length - 1}
              >
                <h3 className="font-display text-xl text-foreground group-hover:text-accent-color group-focus-visible:text-accent-color transition-colors">
                  {exp.role}
                </h3>
                <p className="font-body text-sm text-accent-color mb-2 tracking-wide">
                  {exp.org}
                </p>
                <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                  {exp.desc}
                </p>
              </TimelineItem>
            ))}
          </Timeline>
        </Section>

        {/* Education */}
        <Section title="Education">
          <Timeline aria-label="Education timeline">
            {education.map((edu, i) => (
              <TimelineItem
                key={edu.degree}
                year={edu.year}
                aria-label={`${edu.degree} from ${edu.school}, ${edu.year}`}
                isLast={i === education.length - 1}
              >
                <h3 className="font-display text-lg text-foreground group-hover:text-accent-color group-focus-visible:text-accent-color transition-colors">
                  {edu.degree}
                </h3>
                <p className="font-body text-sm text-muted-foreground font-light">
                  {edu.school}
                </p>
              </TimelineItem>
            ))}
          </Timeline>
        </Section>

        {/* Publications */}
        <Section title="Publications">
          <Timeline aria-label="Publications timeline">
            {publications.map((pub, i) => (
              <TimelineItem
                key={pub.citation}
                year={pub.year}
                aria-label={`Publication: ${pub.citation}`}
                isLast={i === publications.length - 1}
              >
                <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                  {pub.citation}
                </p>
              </TimelineItem>
            ))}
          </Timeline>
        </Section>
      </div>
    </section>
  );
}
