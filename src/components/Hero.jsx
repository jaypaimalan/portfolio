export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-8 lg:px-16 gap-12 relative overflow-hidden pb-24 lg:pb-0">
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      {/* Left content */}
      <div className="relative z-10 pt-24">
        <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-5 animate-[fadeUp_.7s_.2s_both]">
          Front-End Developer · Cebu, PH
        </p>
        <h1 className="font-playfair text-5xl lg:text-7xl leading-[1.05] tracking-tight mb-7 animate-[fadeUp_.7s_.4s_both]">
          Pixel-perfect<br />interfaces,<br />
          <em className="text-accent">built with care.</em>
        </h1>
        <p className="text-muted text-lg leading-relaxed max-w-md mb-10 animate-[fadeUp_.7s_.6s_both]">
          I'm Francis Jay — a front-end developer with 2+ years building responsive, SEO-friendly WordPress websites. I combine clean code with strong design instincts.
        </p>
        <div className="flex gap-4 flex-wrap animate-[fadeUp_.7s_.8s_both]">
          <a href="#works" className="hoverable inline-flex items-center gap-2 bg-ink text-bg font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-accent transition-all hover:-translate-y-0.5">
            See My Work →
          </a>
          {/* <a href="https://fjpaimalan-portfolio.vercel.app/" target="_blank" rel="noreferrer" className="hoverable inline-flex items-center gap-2 border border-border text-ink font-medium text-sm px-7 py-3.5 rounded-full hover:border-accent hover:text-accent transition-all">
            Live Portfolio ↗
          </a> */}
        </div>
      </div>

      {/* Right — info card */}
      <div className="hidden lg:block relative z-10 pt-24 animate-[fadeIn_1s_.5s_both]">
        <div className="bg-card border border-border rounded-2xl p-9 shadow-2xl shadow-ink/5 relative">
          <div className="absolute top-6 right-6 flex items-center gap-2 font-mono text-[0.6rem] text-emerald-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to work
          </div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-orange-300 flex items-center justify-center font-playfair text-2xl font-bold text-white mb-5">
            FJ
          </div>
          <p className="font-playfair font-bold text-lg">Francis Jay Paimalan</p>
          <p className="font-mono text-[0.68rem] tracking-widest uppercase text-muted mt-1 mb-5">Front-End Developer</p>
          <div className="h-px bg-border mb-5" />
          <div className="flex mb-5">
            {[["2+", "Yrs Exp"], ["WP", "Expert"], ["SEO", "Ready"]].map(([n, l]) => (
              <div key={l} className="flex-1 text-center py-3 border-r border-border last:border-r-0">
                <p className="font-playfair text-2xl font-bold">{n}</p>
                <p className="font-mono text-[0.58rem] tracking-widest uppercase text-muted mt-1">{l}</p>
              </div>
            ))}
          </div>
          <div className="h-px bg-border mb-5" />
          <div className="flex flex-wrap gap-2">
            {["HTML5", "CSS3", "JavaScript", "WordPress", "Elementor", "Tailwind", "Figma", "PHP"].map(tag => (
              <span key={tag} className={`font-mono text-[0.62rem] tracking-wider px-2.5 py-1 rounded-full border ${["HTML5","CSS3","JavaScript"].includes(tag) ? "bg-accent/10 text-accent border-accent/30" : "bg-warm text-muted border-border"}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="relative mt-12 flex gap-10 animate-[fadeUp_.7s_1.2s_both] lg:absolute lg:bottom-12 lg:left-16 lg:mt-0">
        {[["2+", "Years Exp."], ["WP", "Specialist"], ["SEO", "Optimized"]].map(([n, l]) => (
          <div key={l}>
            <p className="font-playfair text-3xl font-bold">{n}</p>
            <p className="font-mono text-[0.65rem] tracking-widest uppercase text-muted mt-1">{l}</p>
          </div>
        ))}
      </div>
    </section>
  )
}