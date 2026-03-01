import { useEffect, useState } from "react"

const navLinks = ["about", "works", "contact"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-8 lg:px-16 py-5 border-b transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-bg/95 backdrop-blur-md border-border"
            : "border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className="font-playfair text-xl text-ink flex items-center">
        <img src="/favicon.svg"></img> <span className="text-accent">.</span>Paimalan
        </a>
        

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="font-mono text-[0.7rem] tracking-widest uppercase text-muted hover:text-accent transition-colors"
              >
                {s}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="mailto:jaypaimalan@gmail.com"
          className="hidden md:block font-outfit text-sm font-semibold bg-ink text-bg px-5 py-2 rounded-full hover:bg-accent transition-colors"
        >
          Hire Me
        </a>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-[300] relative"
          aria-label="Toggle menu"
        >
          <span
            className="block h-0.5 w-6 bg-ink rounded-full transition-all duration-300"
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="block h-0.5 w-4 bg-ink rounded-full transition-all duration-300"
            style={{
              opacity: menuOpen ? 0 : 1,
              width: menuOpen ? 0 : undefined,
            }}
          />
          <span
            className="block h-0.5 w-6 bg-ink rounded-full transition-all duration-300"
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[150] bg-bg flex flex-col justify-center items-center gap-10 transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Nav links */}
        <ul className="flex flex-col items-center gap-8 list-none">
          {navLinks.map((s, i) => (
            <li
              key={s}
              className="transition-all duration-300"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
              }}
            >
              <a
                href={`#${s}`}
                onClick={closeMenu}
                className="font-playfair text-4xl font-bold text-ink hover:text-accent transition-colors capitalize"
              >
                {s}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me */}
        <a
          href="mailto:jaypaimalan@gmail.com"
          onClick={closeMenu}
          className="font-outfit text-sm font-semibold bg-ink text-bg px-8 py-3 rounded-full hover:bg-accent transition-all duration-300"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(16px)",
            transitionDelay: menuOpen ? "240ms" : "0ms",
          }}
        >
          Hire Me
        </a>

        {/* Bottom email */}
        <p className="font-mono text-[0.65rem] tracking-widest uppercase text-muted absolute bottom-10">
          jaypaimalan@gmail.com
        </p>
      </div>
    </>
  )
}
