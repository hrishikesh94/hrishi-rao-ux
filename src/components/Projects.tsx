import { Timeline, TimelineItem } from "./ui/timeline";

const projects = [
  {
    title: "Grounded Product Features Pipeline",
    tags: ["Digital Ethnography", "Text Mining"],
    description:
      "AI-enhanced thematic analysis to systematically process and interpret screen reader forum messages, using hybrid qualitative and quantitative approaches with SQL databases and Model Context Protocol servers.",
    year: "2025",
  },
  {
    title: "Design Systems for Braille Based UIs",
    tags: ["User Testing", "Product Management"],
    description:
      "Created rapid prototyping tools evaluating icons and UI elements for a Braille User Interface design system. Testing showed the BUI accelerated the onboarding process for new users transitioning to multi-line interfaces.",
    year: "2024",
  },
  {
    title: "Meta Privacy Center Redesign",
    tags: ["Mixed-Methods Study"],
    description:
      "Conducted generative research on data access and privacy management across Meta products using design probe based user studies combining card sorting and interviews, resulting in Privacy Center control changes across Instagram, WhatsApp, and Messenger.",
    year: "2022",
  },
  {
    title: "Co-Designing Audio-Tactile Graphics",
    tags: ["Co-Design Workshop", "Focus Group"],
    description:
      "Facilitated intensive co-design sessions with educators to explore adoption of tactile graphic tablets with audio labels, examining workflow challenges in school-based production environments.",
    year: "2022",
  },
  {
    title: "Audio-Tactile Tablets in Inclusive Classrooms",
    tags: ["Field Deployment", "Mixed Methods Study"],
    description:
      "Conducted year-long deployment study investigating teacher adoption and pedagogical approaches through contextual interviews and longitudinal surveys, transforming accessibility design practices.",
    year: "2023",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-3">
            <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
              Projects
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
              Selected research<br />
              <em>& case studies</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3" />
          <div className="md:col-span-9">
            <Timeline aria-label="Research projects timeline">
              {projects.map((project, i) => (
                <TimelineItem
                  key={project.title}
                  year={project.year}
                  aria-label={`${project.title}, ${project.year}`}
                  isLast={i === projects.length - 1}
                >
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-accent-color group-focus-visible:text-accent-color transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground font-light leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-xs text-accent-color tracking-wide border border-accent-foreground/30 px-2.5 py-1 rounded-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
}
