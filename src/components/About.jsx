import { skills, experience } from "../data/skills"
import { useScrollReveal } from "../hooks/useScrollReveal"

function Reveal({ children, delay = "" }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-700 ${delay}`}>
      {children}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-28 px-8 lg:px-16 border-t border-border">
      <Reveal><p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-accent mb-4">01 — About Me</p></Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <Reveal>
            <h2 className="font-playfair text-4xl lg:text-5xl leading-tight tracking-tight mb-12">
              Design instincts.<br /><em className="text-accent">Engineering precision.</em>
            </h2>
          </Reveal>
          <div className="space-y-5 text-muted leading-relaxed mb-10">
            <Reveal><p>Front-End Developer with <strong className="text-ink font-semibold">2 years of experience</strong> building responsive, SEO-friendly WordPress websites at Proweaver Inc.</p></Reveal>
            <Reveal delay="delay-100"><p>Before front-end, I spent 3+ years as a <strong className="text-ink font-semibold">2D Animator</strong> at Honey Entertainment Inc., sharpening my eye for visual storytelling — skills that directly elevate my UI work.</p></Reveal>
            <Reveal delay="delay-200"><p>BS in Information Technology, AMA Computer Learning Center, Mandaue City.</p></Reveal>
          </div>

          {/* Timeline */}
          <div className="divide-y divide-border">
            {experience.map((e, i) => (
              <Reveal key={i} delay={`delay-${i * 100}`}>
                <div className="grid grid-cols-[120px_1fr] gap-5 py-5">
                  <p className="font-mono text-[0.65rem] tracking-wider text-muted leading-relaxed pt-0.5">{e.date}</p>
                  <div>
                    <p className="font-mono text-[0.65rem] tracking-widest uppercase text-accent mb-0.5">{e.company}</p>
                    <p className="font-playfair font-bold text-base">{e.role}</p>
                    <p className="text-sm text-muted">{e.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Skills */}
        <Reveal delay="delay-200">
          <div className="space-y-7">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-muted mb-3">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className={`hoverable text-sm font-medium px-3.5 py-1.5 rounded-lg border transition-all hover:-translate-y-0.5 hover:shadow-sm ${
                        ["HTML5","CSS3","JavaScript","WordPress","Figma"].includes(skill)
                            ? "bg-ink text-bg border-ink hover:bg-accent hover:border-accent hover:text-white"
                            : "bg-card text-ink border-border hover:border-accent hover:text-accent"
                        }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}