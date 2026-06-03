import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, Users, Euro, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { kurse } from "@/data/kurse"
import KursAnmeldung from "@/components/sections/KursAnmeldung"
import { cardVariants, staggerContainer } from "@/lib/motion"
import type { Kurs } from "@/types"

function formatDatum(datum: string) {
  return new Date(datum).toLocaleDateString("de-AT", {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function PlatzAnzeige({ verfuegbar, max }: { verfuegbar: number; max: number }) {
  const prozent = Math.round(((max - verfuegbar) / max) * 100)
  const wenigePlaetze = verfuegbar > 0 && verfuegbar <= 2

  return (
    <div className="mt-4">
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-[#7a3e1f]">Auslastung</span>
        <span className={`font-semibold ${wenigePlaetze ? "text-[#a0522d]" : "text-[#7a3e1f]"}`}>
          {verfuegbar === 0 ? "Ausgebucht" : `${verfuegbar} Plätze frei`}
        </span>
      </div>
      <div className="w-full bg-[#e8c9a8] rounded-full h-1.5 overflow-hidden">
        <motion.div
          className={`h-1.5 rounded-full ${
            verfuegbar === 0 ? "bg-[#7a3e1f]" : wenigePlaetze ? "bg-[#a0522d]" : "bg-[#d4956e]"
          }`}
          initial={{ width: 0 }}
          whileInView={{ width: `${prozent}%` }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  )
}

export default function Kurse() {
  const [selectedKurs, setSelectedKurs] = useState<Kurs | null>(null)

  return (
    <section id="kurse" className="py-20 sm:py-24 lg:py-32 bg-[#faebd7] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a0522d'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-6 sm:w-8 h-px bg-[#d4956e]" />
            <span className="text-[#a0522d] font-medium tracking-[0.2em] uppercase text-xs">Gemeinsam töpfern</span>
            <span className="block w-6 sm:w-8 h-px bg-[#d4956e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5c2d0e] font-serif">Aktuelle Kurse</h2>
          <p className="mt-3 sm:mt-4 text-[#7a3e1f] max-w-xl mx-auto leading-relaxed text-sm sm:text-base px-2 sm:px-0">
            Kleine Gruppen, persönliche Betreuung und jede Menge Spaß am Ton. Alle Materialien sind im Kurspreis enthalten.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {kurse.map((kurs) => {
            const istAusgebucht = kurs.verfuegbarePlaetze === 0
            const wenigePlaetze = !istAusgebucht && kurs.verfuegbarePlaetze <= 2

            return (
              <motion.div
                key={kurs.id}
                variants={cardVariants}
                whileHover={istAusgebucht ? {} : { y: -5 }}
                transition={{ type: "tween", duration: 0.2 }}
                className={`flex flex-col bg-[#fdf5ee] rounded-2xl border border-[#e8c9a8] shadow-sm overflow-hidden ${
                  istAusgebucht ? "opacity-65" : "hover:shadow-lg"
                }`}
              >
                <div className={`h-1 w-full ${
                  istAusgebucht ? "bg-[#e8c9a8]" : wenigePlaetze ? "bg-[#a0522d]" : "bg-[#d4956e]"
                }`} />

                <div className="p-4 sm:p-6 pb-3 sm:pb-4 border-b border-[#e8c9a8]">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-[#5c2d0e] font-serif text-base sm:text-lg font-bold leading-tight">{kurs.titel}</h3>
                    <div className="flex flex-col gap-1.5 items-end shrink-0">
                      <Badge
                        className={`text-[10px] sm:text-xs font-medium whitespace-nowrap ${
                          istAusgebucht ? "bg-[#7a3e1f]/15 text-[#7a3e1f] border-[#7a3e1f]/25"
                          : wenigePlaetze ? "bg-[#a0522d]/15 text-[#a0522d] border-[#a0522d]/30"
                          : "bg-[#d4956e]/20 text-[#5c2d0e] border-[#d4956e]/40"
                        }`}
                        variant="outline"
                      >
                        {istAusgebucht ? "Ausgebucht" : wenigePlaetze ? "Fast voll" : "Verfügbar"}
                      </Badge>
                      <Badge variant="outline" className="text-[10px] sm:text-xs bg-transparent text-[#a0522d] border-[#d4956e]/50">
                        {kurs.level}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-[#7a3e1f] text-xs sm:text-sm leading-relaxed">{kurs.beschreibung}</p>
                </div>

                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {[
                      { icon: Calendar, label: formatDatum(kurs.datum) },
                      { icon: Clock, label: kurs.dauer },
                      { icon: Euro, label: `${kurs.preis} € p.P.`, bold: true },
                      { icon: Users, label: `max. ${kurs.maxTeilnehmer} Pers.` },
                    ].map(({ icon: Icon, label, bold }) => (
                      <div key={label} className="flex items-center gap-1.5 sm:gap-2 text-[#7a3e1f]">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#e8c9a8] rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#a0522d]" aria-hidden="true" />
                        </div>
                        <span className={`text-[11px] sm:text-xs ${bold ? "font-semibold text-[#5c2d0e]" : ""}`}>{label}</span>
                      </div>
                    ))}
                  </div>

                  <PlatzAnzeige verfuegbar={kurs.verfuegbarePlaetze} max={kurs.maxTeilnehmer} />

                  <Button
                    onClick={() => !istAusgebucht && setSelectedKurs(kurs)}
                    disabled={istAusgebucht}
                    className={`w-full mt-4 sm:mt-5 font-medium text-sm sm:text-base transition-all duration-200 ${
                      istAusgebucht
                        ? "bg-[#e8c9a8] text-[#a0522d] cursor-not-allowed"
                        : "bg-[#a0522d] hover:bg-[#7a3e1f] text-[#faebd7] hover:shadow-md"
                    }`}
                  >
                    {istAusgebucht ? "Ausgebucht" : "Jetzt anmelden"}
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          className="text-center text-sm text-[#a0522d] mt-8 sm:mt-10 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Keine passende Zeit?{" "}
          <button
            onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="underline underline-offset-2 hover:text-[#7a3e1f] transition-colors"
          >
            Schreib mir – Sondertermine sind möglich.
          </button>
        </motion.p>
      </div>

      <KursAnmeldung kurs={selectedKurs} open={selectedKurs !== null} onClose={() => setSelectedKurs(null)} />
    </section>
  )
}
