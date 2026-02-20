import { Timeline, TimelineItem } from "./ui/timeline";

const projects = [
  {
    title: "Screen Reader Navigation Patterns",
    tags: ["Accessibility", "Usability Study", "Assistive Tech"],
    description:
      "A mixed-methods investigation into how screen reader users navigate complex web applications, combining think-aloud protocols with interaction logging to surface systemic friction points.",
    year: "2024",
  },
  {
    title: "Co-designing AAC Interfaces with Non-speaking Adults",
    tags: ["Participatory Research", "AAC", "Co-design"],
    description:
      "A participatory design study conducted with non-speaking adults and their support networks to understand how augmentative and alternative communication tools could better reflect user agency and identity.",
    year: "2023",
  },
  {
    title: "Longitudinal Diary Study: AT Adoption in the Workplace",
    tags: ["Diary Study", "Workplace", "Longitudinal"],
    description:
      "An eight-week diary study tracking how employees with disabilities adopt and adapt assistive technologies in professional environments, identifying barriers at the intersection of technology, policy, and culture.",
    year: "2023",
  },
  {
    title: "Cognitive Load in Accessible Data Visualisation",
    tags: ["Cognitive Research", "Data Viz", "Quantitative"],
    description:
      "An experimental study examining how different accessible chart formats affect cognitive load and data comprehension for users with visual impairments, contributing to evidence-based design guidelines.",
    year: "2022",
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
