export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <span className="font-display text-lg text-foreground">Hrishi Rao</span>
        </div>
        <div className="md:col-span-6">
          <p className="font-body text-sm text-muted-foreground font-light">
            UX Researcher · Accessibility · HCI · Assistive Technology
          </p>
        </div>
        <div className="md:col-span-3 flex flex-wrap gap-5 md:justify-end">
          <a
            href="https://www.linkedin.com/in/hrishikeshrao/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-muted-foreground underline-grow hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://scholar.google.com/citations?user=ljPCw_oAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-muted-foreground underline-grow hover:text-foreground transition-colors"
          >
            Google Scholar
          </a>
          <a
            href="mailto:hrishikeshrao94@gmail.com"
            className="font-body text-xs tracking-widest uppercase text-muted-foreground underline-grow hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-border flex justify-between items-center">
        <span className="font-body text-xs text-muted-foreground">
          © 2026 Hrishi Rao
        </span>
        <span className="font-body text-xs text-muted-foreground">
          Built with care
        </span>
      </div>
    </footer>
  );
}
