import { useEffect, useRef, useState } from "react"

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      // Dot follows instantly — no lag
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px"
        dotRef.current.style.top = e.clientY + "px"
      }
    }

    const animate = () => {
      // Higher value = faster ring (0.25 feels snappy but still smooth)
      ring.current.x += (mouse.current.x - ring.current.x) * 0.25
      ring.current.y += (mouse.current.y - ring.current.y) * 0.25

      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px"
        ringRef.current.style.top = ring.current.y + "px"
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)

    document.addEventListener("mousemove", onMove)

    // Re-query interactable elements after mount
    const interactables = document.querySelectorAll("a, button, .hoverable")
    interactables.forEach(el => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafRef.current)
      interactables.forEach(el => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Dot — instant, no transition */}
      <div
        ref={dotRef}
        className={`fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent pointer-events-none ${hovered ? "w-4 h-4" : "w-2.5 h-2.5"}`}
        style={{ transition: "width .15s, height .15s" }}
      />
      {/* Ring — slight lerp for smoothness */}
      <div
        ref={ringRef}
        className={`fixed z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/50 pointer-events-none ${hovered ? "w-12 h-12" : "w-8 h-8"}`}
        style={{ transition: "width .2s, height .2s" }}
      />
    </>
  )
}