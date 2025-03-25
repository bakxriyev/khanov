"use client"

import { useState, useEffect, useRef } from "react"
import Hero from "@/components/hero"
import Features from "@/components/features"
import WhyThisCourse from "@/components/nima-uchun"
import WhoIsThisFor from "@/components/kim-uchun"
import CourseModules from "@/components/course-module"
import Instructor from "@/components/instructor"
import CallToAction from "@/components/call-to"
import Footer from "@/components/footer"
import BookLanding from "@/components/aynan-men"
import KursdanKeyin from "@/components/kursdan_keyin"
import SotuvMutaxassis from "@/components/sotuv-mutaxasisi"
import TarifRejalari from "@/components/tariflar"
import Bonuslar from "@/components/bonus"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobile, setIsMobile] = useState(false)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) return
    
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [isMobile])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen ">
      {/* To'liq navbar kodi qaytarildi */}
      <header className="sticky top-0 z-40 w-full bg-black backdrop-blur-sm">
  <nav className="container mx-auto px-4 py-4 flex justify-between items-center"> {/* Increased py-3 to py-4 */}
    <div className="text-white font-bold text-2xl">BEKZOD | KHANOV</div> {/* Increased text-xl to text-2xl */}
    
    {isMobile ? (
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white focus:outline-none"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* Increased w-6/h-6 to w-8/h-8 */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" /> {/* Increased strokeWidth from 2 to 3 */}
        </svg>
      </button>
    ) : (
      <div className="hidden md:flex space-x-8"> {/* Increased space-x-6 to space-x-8 */}
        <button
          onClick={() => scrollToSection("kurs-vazifasi")}
          className={`text-white hover:text-green-400 text-lg ${ /* Added text-lg */
            activeSection === "kurs-vazifasi" ? "text-green-400 font-semibold" : "" /* Added font-semibold */
          }`}
        >
          KURS VAZIFASI
        </button>
        <button
          onClick={() => scrollToSection("kim-uchun")}
          className={`text-white hover:text-green-400 text-lg ${
            activeSection === "kim-uchun" ? "text-green-400 font-semibold" : ""
          }`}
        >
          KURS KIMLAR UCHUN
        </button>
        <button
          onClick={() => scrollToSection("kurs-dasturi")}
          className={`text-white hover:text-green-400 text-lg ${
            activeSection === "kurs-dasturi" ? "text-green-400 font-semibold" : ""
          }`}
        >
          KURS DASTURI
        </button>
        <button
          onClick={() => scrollToSection("muallif")}
          className={`text-white hover:text-green-400 text-lg ${
            activeSection === "muallif" ? "text-green-400 font-semibold" : ""
          }`}
        >
          KURS MUALLIFI
        </button>
        <button
          onClick={() => scrollToSection("narx")}
          className={`text-white hover:text-green-400 text-lg ${
            activeSection === "narx" ? "text-green-400 font-semibold" : ""
          }`}
        >
          NARXLAR
        </button>
      </div>
    )}
  </nav>

  {/* Mobile menu - also made larger */}
  {isMobile && isMenuOpen && (
    <div className="md:hidden bg-black py-3"> {/* Added py-3 */}
      <div className="px-4 pt-3 pb-4 space-y-3"> {/* Increased padding and spacing */}
        <button
          onClick={() => scrollToSection("kurs-vazifasi")}
          className={`block w-full text-left px-4 py-3 text-lg text-white ${ /* Added text-lg, increased padding */
            activeSection === "kurs-vazifasi" ? "text-green-400 font-semibold" : ""
          }`}
        >
          KURS VAZIFASI
        </button>
        <button
          onClick={() => scrollToSection("kim-uchun")}
          className={`block w-full text-left px-4 py-3 text-lg text-white ${
            activeSection === "kim-uchun" ? "text-green-400 font-semibold" : ""
          }`}
        >
          KURS KIMLAR UCHUN
        </button>
        <button
          onClick={() => scrollToSection("kurs-dasturi")}
          className={`block w-full text-left px-4 py-3 text-lg text-white ${
            activeSection === "kurs-dasturi" ? "text-green-400 font-semibold" : ""
          }`}
        >
          KURS DASTURI
        </button>
        <button
          onClick={() => scrollToSection("muallif")}
          className={`block w-full text-left px-4 py-3 text-lg text-white ${
            activeSection === "muallif" ? "text-green-400 font-semibold" : ""
          }`}
        >
          KURS MUALLIFI
        </button>
        <button
          onClick={() => scrollToSection("narx")}
          className={`block w-full text-left px-4 py-3 text-lg text-white ${
            activeSection === "narx" ? "text-green-400 font-semibold" : ""
          }`}
        >
          NARXLAR
        </button>
      </div>
    </div>
  )}
</header>

      <div
        className="min-h-screen"
        style={{
          backgroundImage: "url('/background.webp')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <main className={isMobile ? "" : "snap-y snap-mandatory h-screen overflow-y-scroll"}>
          {[
            { id: "hero", Component: Hero },
            { id: "kurs-vazifasi", Component: Features },
            { id: "why", Component: WhyThisCourse },
            { id: "who", Component: BookLanding },
            { id: "kim-uchun", Component: WhoIsThisFor },
            { id: "kursdan-keyin", Component: KursdanKeyin },
            { id: "kurs-dasturi", Component: CourseModules },
            { id: "muallif", Component: Instructor },
            { id: "narx", Component: TarifRejalari },
            { id: "sotuv-mutaxassisi", Component: SotuvMutaxassis },
            { id: "bonuslar", Component: Bonuslar },
            { id: "boglanish", Component: CallToAction },
          ].map(({ id, Component }, index) => (
            <section
              key={id}
              id={id}
              ref={(el) => { if (sectionRefs.current) sectionRefs.current[index] = el }}
              className={isMobile ? "" : "h-screen snap-center"}
            >
              <Component />
            </section>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  )
}