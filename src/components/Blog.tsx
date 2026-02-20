const posts = [
  {
    title: "Why 'Accessible by Default' is a Research Problem, Not Just a Design One",
    date: "January 2025",
    readTime: "6 min read",
    excerpt:
      "Accessibility is often framed as a design challenge — a set of guidelines to implement. But the deeper question of what users actually need demands rigorous, participatory research.",
    tag: "Accessibility",
  },
  {
    title: "On Recruiting Disabled Participants: Ethics, Power, and Compensation",
    date: "November 2024",
    readTime: "8 min read",
    excerpt:
      "Recruiting disabled participants is not just a logistics challenge. It surfaces fundamental questions about power dynamics, informed consent, and the ethics of who benefits from research.",
    tag: "Research Ethics",
  },
  {
    title: "The Limits of Personas: What Disability Simulation Gets Wrong",
    date: "September 2024",
    readTime: "5 min read",
    excerpt:
      "Disability simulation exercises are popular in UX workshops. But they are often counterproductive — and sometimes harmful. Here is what the evidence says.",
    tag: "Inclusive Design",
  },
  {
    title: "Triangulating Mixed-Methods Data: A Practical Guide",
    date: "July 2024",
    readTime: "10 min read",
    excerpt:
      "Combining qualitative and quantitative methods is easier said than done. This post walks through the triangulation strategies I use in my own research practice.",
    tag: "Methods",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-3">
            <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
              Blog
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
              Writing on research,<br />
              <em>accessibility & practice</em>
            </h2>
          </div>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className={`py-10 border-t border-border group cursor-pointer ${
                i < 2 ? "" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-body text-xs text-accent-color tracking-wide">
                  {post.tag}
                </span>
                <span className="font-body text-xs text-muted-foreground">
                  {post.date} · {post.readTime}
                </span>
              </div>
              <h3 className="font-display text-xl text-foreground mb-3 leading-snug group-hover:text-accent-color transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed mb-5">
                {post.excerpt}
              </p>
              <span className="font-body text-xs tracking-widest uppercase text-foreground underline-grow">
                Read more
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
