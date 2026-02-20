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
          {["LinkedIn", "Google Scholar", "Email"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-xs tracking-widest uppercase text-muted-foreground underline-grow hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-border flex justify-between items-center">
        <span className="font-body text-xs text-muted-foreground">
          © 2025 Hrishi Rao
        </span>
        <span className="font-body text-xs text-muted-foreground">
          Built with care
        </span>
      </div>
    </footer>
  );
}
