import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Über uns", href: "#about" },
  { label: "Angebote", href: "#angebote" },
  { label: "Galerie", href: "#galerie" },
  { label: "Kurse", href: "#kurse" },
  { label: "Kontakt", href: "#kontakt" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: "-40% 0px -55% 0px" }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faebd7]/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero") }}
            className="flex items-center group"
          >
            <img
              src="/logo.png"
              alt="Topf &amp; Ton Logo"
              className="h-11 w-auto"
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = "none"
              }}
            />
            <span
              className={`ml-2 text-xl font-bold font-serif transition-colors duration-300 ${
                scrolled ? "text-[#5c2d0e]" : "text-[#3d1a06]"
              } group-hover:text-[#a0522d]`}
            >
              Topf &amp; Ton
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md ${
                      isActive
                        ? "text-[#a0522d]"
                        : scrolled
                        ? "text-[#7a3e1f] hover:text-[#a0522d]"
                        : "text-[#3d1a06] hover:text-[#a0522d]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#a0522d] rounded-full" />
                    )}
                  </button>
                </li>
              )
            })}
            <li className="ml-3">
              <Button
                onClick={() => handleNavClick("#kontakt")}
                size="sm"
                className="bg-[#a0522d] hover:bg-[#7a3e1f] text-[#faebd7] font-medium shadow-sm"
              >
                Kontakt
              </Button>
            </li>
          </ul>

          {/* Mobile: Hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menü öffnen"
                className={`${scrolled ? "text-[#5c2d0e]" : "text-[#3d1a06]"} hover:bg-[#e8c9a8]/50`}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#fdf5ee] border-l border-[#e8c9a8] w-72"
            >
              <SheetTitle className="text-[#5c2d0e] font-serif text-xl mb-2">
                Topf &amp; Ton
              </SheetTitle>
              <p className="text-xs text-[#a0522d] tracking-widest uppercase mb-6">
                Töpferei &amp; Keramik-Atelier
              </p>
              <nav aria-label="Mobile Navigation">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.slice(1)
                    return (
                      <li key={link.href}>
                        <button
                          onClick={() => handleNavClick(link.href)}
                          className={`w-full text-left px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                            isActive
                              ? "bg-[#e8c9a8] text-[#5c2d0e]"
                              : "text-[#7a3e1f] hover:bg-[#e8c9a8]/60 hover:text-[#5c2d0e]"
                          }`}
                        >
                          {link.label}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </nav>
              <div className="mt-6 pt-6 border-t border-[#e8c9a8]">
                <Button
                  onClick={() => handleNavClick("#kontakt")}
                  className="w-full bg-[#a0522d] hover:bg-[#7a3e1f] text-[#faebd7]"
                >
                  Jetzt Kontakt aufnehmen
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
