import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { Quote } from "lucide-react"
import { fadeUp, fadeRight, staggerContainer, smoothTransition } from "@/lib/motion"

function AnimatedNumber({ end, suffix }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = duration / end
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [isInView, end])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { end: 10, suffix: "+", label: "Jahre Erfahrung" },
  { end: 500, suffix: "+", label: "Kursteilnehmer" },
  { value: "∞", label: "Einzigartige Stücke" },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-[#fdf5ee] relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #d4956e 0%, transparent 70%)" }} />
      <div className="absolute -bottom-24 -left-24 w-56 sm:w-72 h-56 sm:h-72 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #a0522d 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

          {/* Bild */}
          <motion.div
            className="order-first lg:order-last"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#d4956e]/40 rounded-2xl" />
              <div className="absolute -top-8 -right-8 w-full h-full border border-[#e8c9a8]/60 rounded-2xl hidden sm:block" />

              <motion.img
                src="https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=700&q=80"
                alt="Töpferin bei der Arbeit an der Töpferscheibe"
                className="relative rounded-2xl w-full object-cover shadow-2xl aspect-4/5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="absolute -bottom-5 -left-5 bg-[#a0522d] text-[#faebd7] rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring", bounce: 0.3 }}
              >
                <p className="text-xl sm:text-2xl font-bold font-serif leading-none">10+</p>
                <p className="text-xs mt-1 text-[#f5e6d3] tracking-wide">Jahre Erfahrung</p>
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-4 bg-[#faebd7] border border-[#e8c9a8] text-[#5c2d0e] rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg hidden sm:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.5, type: "spring", bounce: 0.3 }}
              >
                <p className="text-xs font-semibold tracking-wider uppercase text-[#a0522d]">100%</p>
                <p className="text-xs text-[#7a3e1f] mt-0.5">Handgemacht</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="order-last lg:order-first space-y-5 sm:space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-6 h-px bg-[#d4956e]" />
                <span className="text-[#a0522d] font-medium tracking-[0.2em] uppercase text-xs">Über mich</span>
                <span className="block w-6 h-px bg-[#d4956e]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#5c2d0e] font-serif leading-tight">
                Vom Rohton zum<br />
                <em className="text-[#a0522d]">einzigartigen Stück</em>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-[#7a3e1f] leading-relaxed text-sm sm:text-base">
              Ich bin Maria, Töpferin aus Leidenschaft. Seit über zehn Jahren forme ich Ton zu
              Gebrauchskeramik und Kunstobjekten – jedes Stück ein Unikat, jedes mit einer eigenen Geschichte.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="relative pl-5 border-l-2 border-[#d4956e] bg-[#faebd7]/80 rounded-r-xl py-3 sm:py-4 pr-4 sm:pr-5"
            >
              <Quote className="absolute -top-2 -left-3 h-5 w-5 sm:h-6 sm:w-6 text-[#d4956e] bg-[#fdf5ee] rounded-full p-0.5" aria-hidden="true" />
              <p className="text-[#5c2d0e] font-serif italic text-sm sm:text-base leading-relaxed">
                „Ton hat Gedächtnis – er behält die Form, die du ihm gibst, für immer."
              </p>
            </motion.div>

            <motion.p variants={fadeUp} className="text-[#7a3e1f] leading-relaxed text-sm sm:text-base">
              In meinem kleinen Atelier in Wien verbinde ich traditionelle Handwerkstechnik mit modernem Design.
              Ob Anfänger oder Fortgeschrittene – hier bist du willkommen.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-2 sm:gap-3 pt-5 sm:pt-6 border-t border-[#e8c9a8]">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-3 sm:p-4 rounded-xl bg-linear-to-b from-[#faebd7] to-[#f5e6d3] border border-[#e8c9a8]/60 shadow-sm"
                  whileHover={{ y: -3 }}
                  transition={smoothTransition}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-[#a0522d] font-serif leading-none">
                    {"end" in stat ? (
                      <AnimatedNumber end={stat.end!} suffix={stat.suffix} />
                    ) : stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#7a3e1f] mt-1.5 sm:mt-2 leading-tight font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <button
                onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 text-[#a0522d] font-medium hover:text-[#7a3e1f] transition-colors text-sm sm:text-base"
              >
                <span className="underline underline-offset-4">Schreib mir eine Nachricht</span>
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>→</motion.span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
