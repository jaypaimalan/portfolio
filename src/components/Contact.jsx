import { useState } from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"

const details = [
  { icon: "✉", label: "Email", value: "jaypaimalan@gmail.com" },
  { icon: "📞", label: "Phone", value: "+63 946 261 8278" },
  { icon: "📍", label: "Location", value: "Basak, Lapu-Lapu City, 6015 Cebu, PH" },
//   { icon: "🌐", label: "Portfolio", value: "fjpaimalan-portfolio.vercel.app" },
]

export default function Contact() {
  const [status, setStatus] = useState("idle") // idle | loading | success | error
  const ref = useScrollReveal()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData(e.target)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()

      if (data.success) {
        setStatus("success")
        e.target.reset()
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-28 px-8 lg:px-16 border-t border-border">
      <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-accent mb-4">03 — Contact</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="font-playfair text-4xl lg:text-5xl leading-tight tracking-tight mb-10">
            Let's work<br /><em className="text-accent">together.</em>
          </h2>
          <p className="text-muted leading-relaxed mb-10">
            Got a website to build or improve? I'm currently open to freelance and full-time opportunities. Let's build something great.
          </p>
          <div className="flex flex-col gap-4">
            {details.map(d => (
              <div key={d.label} className="flex items-center gap-4">
                <div className="w-10 h-10 border border-border rounded-xl flex items-center justify-center bg-card text-base flex-shrink-0">{d.icon}</div>
                <div className="font-mono text-sm text-muted">
                  <strong className="block text-ink font-semibold text-[0.78rem] mb-0.5">{d.label}</strong>
                  {d.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700 delay-100">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Web3Forms access key — hidden */}
            <input type="hidden" name="access_key" value="06255824-27ea-48e6-8e63-3e243e3c3c5c" />
            <input type="hidden" name="subject" value="Portfolio Contact from fjpaimalan.dev" />
            <input type="hidden" name="from_name" value="FJ Paimalan Portfolio" />

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="bg-card border border-border rounded-xl px-4 py-3 text-ink text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all placeholder:text-muted"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="bg-card border border-border rounded-xl px-4 py-3 text-ink text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all placeholder:text-muted"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                className="bg-card border border-border rounded-xl px-4 py-3 text-ink text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all placeholder:text-muted"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted">Message</label>
              <textarea
                name="message"
                required
                placeholder="Tell me about your project..."
                rows={5}
                className="bg-card border border-border rounded-xl px-4 py-3 text-ink text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none placeholder:text-muted"
              />
            </div>

            {/* Honeypot spam prevention */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <button
              type="submit"
              disabled={status === "loading"}
              className="hoverable inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold text-sm px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Sending...
                </>
              ) : "Send Message →"}
            </button>

            {status === "success" && (
              <p className="font-mono text-sm text-emerald-500">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-sm text-red-400">
                ✗ Something went wrong. Please try again or email me directly.
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  )
}