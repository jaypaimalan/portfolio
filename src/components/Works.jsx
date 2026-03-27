import { useState } from "react"
import { works } from "../data/works"
import { useScrollReveal } from "../hooks/useScrollReveal"

function GalleryCard({ work, delay }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700 break-inside-avoid mb-4 rounded-2xl overflow-hidden relative group hoverable cursor-none"
      style={{ transitionDelay: delay }}
    >
      {/* Thumbnail */}
      <div className={`w-full bg-gradient-to-br ${work.gradient} relative overflow-hidden max-h-80`}>
        <img
          src={work.thumbnail}
          alt={work.title}
          className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = "none"
          }}
        />
        {/* Number badge */}
        <span className="absolute top-3 right-3 font-mono text-[0.6rem] text-white/40 tracking-widest z-10 bg-black/30 px-2 py-0.5 rounded-full">
          {work.id}
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-sm">
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.58rem] tracking-wider uppercase px-2 py-0.5 rounded bg-accent/30 border border-accent/50 text-orange-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="font-mono text-[0.65rem] tracking-widest uppercase text-accent/80 mb-1">
          {work.category}
        </p>
        <h3 className="font-playfair text-lg font-bold text-white mb-4 leading-tight">
          {work.title}
        </h3>
        <a
          href={work.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[1.3rem] tracking-widest uppercase text-accent border-b border-accent/30 pb-0.5 w-fit hover:border-accent transition-colors"
        >
          View Project ↗
        </a>
      </div>
    </div>
  )
}

export default function Works() {
  const INITIAL_COUNT = 4
  const [showAll, setShowAll] = useState(false)

  // On mobile show limited, on desktop always show all
  const visibleWorks = showAll ? works : works.slice(0, INITIAL_COUNT)

  return (
    <section id="works" className="py-28 px-8 lg:px-16 border-t border-border bg-ink text-bg">
      <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-accent mb-4">
        02 — Works
      </p>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <h2 className="font-playfair text-4xl lg:text-5xl leading-tight tracking-tight">
          Selected <em className="text-accent">Works.</em>
        </h2>
        <p className="font-mono text-[0.65rem] tracking-widest uppercase text-white/30">
          {works.length} Projects
        </p>
      </div>

      {/* Desktop — always show all */}
      <div className="hidden md:block">
        <div className="columns-2 lg:columns-3 gap-4">
          {works.map((work, i) => (
            <GalleryCard
              key={work.id}
              work={work}
              delay={`${(i % 3) * 80}ms`}
            />
          ))}
        </div>
      </div>

      {/* Mobile — show limited with toggle */}
      <div className="md:hidden">
        <div className="columns-1 gap-4">
          {visibleWorks.map((work, i) => (
            <GalleryCard
              key={work.id}
              work={work}
              delay={`${i * 60}ms`}
            />
          ))}
        </div>

        {/* Show More / Show Less button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="hoverable inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-widest uppercase border border-white/20 text-white/70 px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-all duration-300"
          >
            {showAll ? (
              <>
                Show Less
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 9l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            ) : (
              <>
                Show More
                <span className="text-accent/60">({works.length - INITIAL_COUNT} more)</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      <p className="font-mono text-[0.7rem] tracking-widest uppercase text-white/30 text-center mt-12">
        Hover each card to explore 
      </p>
    </section>
  )
}