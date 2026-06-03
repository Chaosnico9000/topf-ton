import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { default as CountUp } from "react-countup"
import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles } from "lucide-react"

const stats = [
  { end: 10, suffix: "+", label: "Jahre\nErfahrung" },
  { end: 500, suffix: "+", label: "Kurs-\nteilnehmer" },
  { end: 100, suffix: "%", label: "Hand-\ngemacht" },
]

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax-Hintergrund via framer-motion */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage: "url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80')",
        }}
        className="absolute inset-0 -top-16 -bottom-16 bg-cover bg-center bg-no-repeat will-change-transform"
        role="img"
        aria-label="Töpferin formt Ton auf der Töpferscheibe"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3d1a06]/75 via-[#5c2d0e]/35 to-[#faebd7]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3d1a06]/25 via-transparent to-[#3d1a06]/10" />

      {/* Grain Textur */}
      <div
        className="absolute inset-0 opacity-25 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 text-center px-5 sm:px-6 max-w-3xl mx-auto w-full"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-5 sm:mb-6"
        >
          <span className="block w-6 sm:w-8 h-px bg-[#d4956e]" />
          <span className="text-[#e8c9a8] font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[10px] sm:text-xs">
            Töpferei &amp; Keramik-Atelier · Wien
          </span>
          <span className="block w-6 sm:w-8 h-px bg-[#d4956e]" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] mb-5 sm:mb-6 font-serif"
        >
          <span className="text-[#faebd7] drop-shadow-sm">Handgemacht.</span>
          <br />
          <em className="text-[#d4956e]" style={{ fontStyle: "italic" }}>
            Mit Herz und Ton.
          </em>
        </motion.h1>

        {/* Dekoratives Trennelement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
          className="flex items-center justify-center gap-3 mb-5 sm:mb-6"
        >
          <span className="block w-10 sm:w-12 h-px bg-[#d4956e]/60" />
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#d4956e]/80" aria-hidden="true" />
          <span className="block w-10 sm:w-12 h-px bg-[#d4956e]/60" />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.7, ease: "easeOut", delay: 0.35 }}
          className="text-sm sm:text-lg text-[#f5e6d3]/90 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed px-2 sm:px-0"
        >
          Im Atelier Topf &amp; Ton entstehen einzigartige Keramikstücke und
          unvergessliche Töpfererlebnisse – für dich, als Geschenk oder beim
          gemeinsamen Kurs.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
        >
          <Button
            onClick={() => scrollTo("#kurse")}
            size="lg"
            className="bg-[#a0522d] hover:bg-[#7a3e1f] text-[#faebd7] px-6 sm:px-8 py-3 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 border border-[#d4956e]/30 w-full sm:w-auto"
          >
            Kurse entdecken
          </Button>
          <Button
            onClick={() => scrollTo("#galerie")}
            variant="outline"
            size="lg"
            className="border-2 border-[#e8c9a8]/70 text-[#faebd7] bg-white/10 hover:bg-white/20 hover:border-[#e8c9a8] px-6 sm:px-8 py-3 text-sm sm:text-base font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Galerie ansehen
          </Button>
        </motion.div>

        {/* Trust-Badges mit CountUp */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          className="flex gap-6 sm:gap-10 justify-center mt-10 sm:mt-14"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#e8c9a8] font-serif leading-none drop-shadow">
                <CountUp end={stat.end} suffix={stat.suffix} duration={2.5} enableScrollSpy scrollSpyOnce />
              </p>
              <p className="text-[10px] sm:text-xs text-[#d4956e]/90 mt-1.5 tracking-widest uppercase font-medium leading-tight whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Wellenförmiger Übergang */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-10">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 sm:h-20">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#fdf5ee" />
        </svg>
      </div>

      {/* Scroll-Indikator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        aria-label="Nach unten scrollen"
        className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 text-[#e8c9a8]/70 hover:text-[#e8c9a8] transition-colors cursor-pointer z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.button>
    </section>
  )
}
