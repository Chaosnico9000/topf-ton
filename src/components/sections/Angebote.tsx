import { ShoppingBag, GraduationCap, Gift, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cardVariants, staggerContainer } from "@/lib/motion"

const angebote = [
  {
    id: "a1",
    icon: ShoppingBag,
    titel: "Einzelstücke",
    beschreibung:
      "Jedes Stück aus meinem Atelier ist ein Unikat – handgedreht oder aufgebaut, glasiert und gebrannt mit Liebe zum Detail.",
    ctaText: "Kontakt aufnehmen",
    ctaHref: "#kontakt",
    iconBg: "from-[#f5e6d3] to-[#e8c9a8]",
    iconColor: "text-[#a0522d]",
    iconCardBg: "bg-white/70",
  },
  {
    id: "a2",
    icon: GraduationCap,
    titel: "Töpferkurse",
    beschreibung:
      "Von Einsteiger bis Fortgeschrittene – kleine Gruppen, persönliche Betreuung. Dein erstes selbst geformtes Stück nimmst du mit nach Hause.",
    ctaText: "Kurse ansehen",
    ctaHref: "#kurse",
    iconBg: "from-[#d4956e] to-[#c07850]",
    iconColor: "text-[#faebd7]",
    iconCardBg: "bg-[#a0522d]",
    highlight: true,
  },
  {
    id: "a3",
    icon: Gift,
    titel: "Geschenkgutscheine",
    beschreibung:
      "Verschenke ein besonderes Erlebnis! Gutscheine für Töpferkurse oder für ein selbst ausgesuchtes Keramikstück – individuell und unvergesslich.",
    ctaText: "Gutschein anfragen",
    ctaHref: "#kontakt",
    iconBg: "from-[#f5e6d3] to-[#e8c9a8]",
    iconColor: "text-[#a0522d]",
    iconCardBg: "bg-white/70",
  },
]

export default function Angebote() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="angebote"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #a0522d 0%, #7a3e1f 50%, #5c2d0e 100%)" }}
    >
      <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }} />
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #e8c9a8 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 sm:h-16">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,0 L0,0 Z" fill="#fdf5ee" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 sm:h-16">
          <path d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,45 1440,30 L1440,60 L0,60 Z" fill="#fdf5ee" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-6 sm:w-8 h-px bg-[#d4956e]" />
            <span className="text-[#d4956e] font-medium tracking-[0.2em] uppercase text-xs">Was ich anbiete</span>
            <span className="block w-6 sm:w-8 h-px bg-[#d4956e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#faebd7] font-serif">Meine Angebote</h2>
          <p className="mt-3 sm:mt-4 text-[#e8c9a8]/80 max-w-xl mx-auto leading-relaxed text-sm sm:text-base px-2 sm:px-0">
            Ob du ein Unikat suchst, selbst töpfern möchtest oder ein besonderes Geschenk planst.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {angebote.map((angebot) => {
            const Icon = angebot.icon
            return (
              <motion.div
                key={angebot.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "tween", duration: 0.25 }}
                className={`group relative flex flex-col rounded-2xl overflow-hidden transition-shadow duration-300 ${
                  angebot.highlight
                    ? "bg-[#faebd7] shadow-2xl ring-2 ring-[#e8c9a8]/60"
                    : "bg-[#fdf5ee]/95 shadow-lg hover:shadow-2xl"
                }`}
              >
                {angebot.highlight && <div className="absolute top-0 left-0 right-0 h-1 shimmer-border" />}

                <div className={`bg-linear-to-br ${angebot.iconBg} p-6 sm:p-8 flex items-center justify-center`}>
                  <motion.div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-md ${angebot.iconCardBg}`}
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${angebot.iconColor}`} aria-hidden="true" />
                  </motion.div>
                </div>

                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  {angebot.highlight && (
                    <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-[#a0522d] bg-[#e8c9a8]/60 rounded-full px-2.5 py-1 mb-3 self-start">Beliebt</span>
                  )}
                  <h3 className="text-[#5c2d0e] font-serif text-lg sm:text-xl font-bold mb-2 sm:mb-3">{angebot.titel}</h3>
                  <p className="text-[#7a3e1f] leading-relaxed text-sm flex-1">{angebot.beschreibung}</p>
                  <button
                    onClick={() => handleClick(angebot.ctaHref)}
                    className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-[#a0522d] font-semibold text-sm hover:text-[#7a3e1f] transition-colors group/btn"
                  >
                    {angebot.ctaText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1.5" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
