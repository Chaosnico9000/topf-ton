import { type FormEvent, useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { MapPin, Clock, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const oeffnungszeiten = [
  { tag: "Montag", zeit: "Geschlossen" },
  { tag: "Di – Fr", zeit: "10:00 – 18:00 Uhr" },
  { tag: "Samstag", zeit: "10:00 – 14:00 Uhr" },
  { tag: "Sonntag", zeit: "Geschlossen" },
]


export default function Kontakt() {
  const [formData, setFormData] = useState({ name: "", email: "", betreff: "", nachricht: "" })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.nachricht) {
      toast.error("Bitte fülle alle Pflichtfelder aus.")
      return
    }
    const subject = encodeURIComponent(formData.betreff || "Nachricht über Website")
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\n\n${formData.nachricht}`
    )
    window.location.href = `mailto:hallo@topf-und-ton.at?subject=${subject}&body=${body}`
    toast.success("E-Mail-Programm geöffnet – bitte sende die Nachricht ab!", {
      description: "Ich melde mich so bald wie möglich bei dir.",
      duration: 5000,
    })
    setFormData({ name: "", email: "", betreff: "", nachricht: "" })
  }

  return (
    <section id="kontakt" className="py-20 sm:py-24 lg:py-28 bg-[#fdf5ee] relative overflow-hidden">
      {/* Dekorativer Kreis oben rechts */}
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #a0522d 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-6 sm:w-8 h-px bg-[#d4956e]" />
            <span className="text-[#a0522d] font-medium tracking-[0.2em] uppercase text-xs">Schreib mir</span>
            <span className="block w-6 sm:w-8 h-px bg-[#d4956e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5c2d0e] font-serif">Kontakt</h2>
          <p className="mt-3 sm:mt-4 text-[#7a3e1f] max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Fragen zu Kursen, Bestellungen oder Kooperationen? Ich freue mich von dir zu hören!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">

          {/* Formular */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl border border-[#e8c9a8] p-5 sm:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#5c2d0e] font-medium text-sm">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="Dein Name"
                      value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      className="bg-[#fdf5ee] border-[#e8c9a8] text-[#5c2d0e] placeholder:text-[#a0522d]/40 focus-visible:ring-[#a0522d] focus-visible:border-[#a0522d] h-10 sm:h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#5c2d0e] font-medium text-sm">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="deine@email.at"
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      className="bg-[#fdf5ee] border-[#e8c9a8] text-[#5c2d0e] placeholder:text-[#a0522d]/40 focus-visible:ring-[#a0522d] focus-visible:border-[#a0522d] h-10 sm:h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="betreff" className="text-[#5c2d0e] font-medium text-sm">Betreff</Label>
                  <Input
                    id="betreff"
                    type="text"
                    placeholder="z.B. Frage zu Töpferkursen"
                    value={formData.betreff}
                    onChange={(e) => setFormData((p) => ({ ...p, betreff: e.target.value }))}
                    className="bg-[#fdf5ee] border-[#e8c9a8] text-[#5c2d0e] placeholder:text-[#a0522d]/40 focus-visible:ring-[#a0522d] focus-visible:border-[#a0522d] h-10 sm:h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nachricht" className="text-[#5c2d0e] font-medium text-sm">Nachricht *</Label>
                  <Textarea
                    id="nachricht"
                    required
                    placeholder="Womit kann ich dir helfen?"
                    rows={5}
                    value={formData.nachricht}
                    onChange={(e) => setFormData((p) => ({ ...p, nachricht: e.target.value }))}
                    className="bg-[#fdf5ee] border-[#e8c9a8] text-[#5c2d0e] placeholder:text-[#a0522d]/40 focus-visible:ring-[#a0522d] focus-visible:border-[#a0522d] resize-none"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Button
                    type="submit"
                    className="w-full bg-[#a0522d] hover:bg-[#7a3e1f] text-[#faebd7] py-2.5 sm:py-3 font-medium text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    Nachricht senden
                  </Button>
                </motion.div>
                <p className="text-xs text-[#a0522d]/70 text-center">
                  Das Formular öffnet dein E-Mail-Programm mit vorausgefüllter Nachricht.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Info-Spalte */}
          <motion.div
            className="lg:col-span-2 space-y-4 sm:space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Adresse & Kontakt */}
            <motion.div variants={fadeUp} className="bg-[#faebd7] rounded-2xl p-5 sm:p-6 border border-[#e8c9a8]">
              <h3 className="text-base font-bold text-[#5c2d0e] font-serif mb-4">Atelier &amp; Kontakt</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: MapPin, title: "Adresse", lines: ["Töpfergasse 12", "1010 Wien, Österreich"] },
                  { icon: Mail, title: "E-Mail", href: "mailto:hallo@topf-und-ton.at", link: "hallo@topf-und-ton.at" },
                  { icon: Phone, title: "Telefon", href: "tel:+4312345678", link: "+43 1 234 56 78" },
                ].map(({ icon: Icon, title, lines, href, link }) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#e8c9a8] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#a0522d]" aria-hidden="true" />
                    </div>
                    <div className="text-[#7a3e1f] text-sm">
                      <p className="font-semibold text-[#5c2d0e] text-xs sm:text-sm">{title}</p>
                      {lines ? lines.map((l) => <p key={l} className="text-xs sm:text-sm">{l}</p>) : (
                        <a href={href} className="hover:text-[#a0522d] transition-colors underline underline-offset-2 text-xs sm:text-sm break-all">
                          {link}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Öffnungszeiten */}
            <motion.div variants={fadeUp} className="bg-[#faebd7] rounded-2xl p-5 sm:p-6 border border-[#e8c9a8]">
              <h3 className="text-base font-bold text-[#5c2d0e] font-serif mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#a0522d]" aria-hidden="true" />
                Öffnungszeiten
              </h3>
              <ul className="space-y-2">
                {oeffnungszeiten.map(({ tag, zeit }) => (
                  <li key={tag} className="flex justify-between text-xs sm:text-sm gap-2">
                    <span className="text-[#7a3e1f]">{tag}</span>
                    <span className={`font-medium ${zeit === "Geschlossen" ? "text-[#a0522d]/60" : "text-[#5c2d0e]"}`}>
                      {zeit}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Karten-Placeholder */}
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-[#e8c9a8] shadow-sm">
              <div
                className="w-full h-36 sm:h-44 bg-[#e8c9a8] flex items-center justify-center"
                role="img"
                aria-label="Kartenansicht Töpfergasse 12, 1010 Wien"
              >
                <div className="text-center">
                  <MapPin className="h-7 w-7 sm:h-8 sm:w-8 mx-auto mb-2 text-[#a0522d]" aria-hidden="true" />
                  <p className="font-semibold text-[#5c2d0e] text-sm">Töpfergasse 12</p>
                  <p className="text-[#7a3e1f] text-xs">1010 Wien</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
