import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-bg min-h-screen font-outfit">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}