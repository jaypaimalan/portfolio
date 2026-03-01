const links = [
//   { label: "Portfolio", href: "https://fjpaimalan-portfolio.vercel.app/" },
  { label: "Email", href: "mailto:jaypaimalan@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/francis-jay-paimalan-552445191" },
  { label: "GitHub", href: "https://github.com/jaypaimalan" },
]

export default function Footer() {
  return (
    <footer className="px-8 lg:px-16 py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-mono text-[0.65rem] tracking-wider text-muted">© 2026 Francis Jay Paimalan · Cebu, PH</p>
      <div className="flex gap-6">
        {links.map(l => (
          <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hoverable font-mono text-[0.65rem] tracking-widest uppercase text-muted hover:text-accent transition-colors">
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  )
}