import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { galerieItems } from "@/data/galerie"
import type { GalerieItem } from "@/types"

const kategorien = ["Alle", "Vasen", "Schalen", "Tassen", "Deko", "Sonstiges"] as const

export default function Galerie() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [aktiveKategorie, setAktiveKategorie] = useState<string>("Alle")

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })

  const gefilterteItems =
    aktiveKategorie === "Alle"
      ? galerieItems
      : galerieItems.filter((item) => item.kategorie === aktiveKategorie)

  const selectedItem: GalerieItem | null =
    selectedIndex !== null ? gefilterteItems[selectedIndex] : null

  const handlePrev = useCallback(() => {
    setSelectedIndex((i) =>
      i !== null ? (i - 1 + gefilterteItems.length) % gefilterteItems.length : null
    )
  }, [gefilterteItems.length])

  const handleNext = useCallback(() => {
    setSelectedIndex((i) =>
      i !== null ? (i + 1) % gefilterteItems.length : null
    )
  }, [gefilterteItems.length])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    },
    [handlePrev, handleNext]
  )

  return (
    <section
      id="galerie"
      className="py-20 sm:py-24 lg:py-32 bg-[#fdf5ee] relative overflow-hidden"
    >
      {/* Subtiles Punktraster */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #a0522d 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-6 sm:w-8 h-px bg-[#d4956e]" />
            <span className="text-[#a0522d] font-medium tracking-[0.2em] uppercase text-xs">Meine Arbeiten</span>
            <span className="block w-6 sm:w-8 h-px bg-[#d4956e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5c2d0e] font-serif">Galerie</h2>
          <p className="mt-3 sm:mt-4 text-[#7a3e1f] max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Eine Auswahl meiner handgefertigten Keramikstücke. Jedes Stück ist ein Unikat.
          </p>
        </motion.div>

        {/* Kategorie-Filter */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {kategorien.map((kat) => (
            <motion.button
              key={kat}
              onClick={() => setAktiveKategorie(kat)}
              whileTap={{ scale: 0.95 }}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                aktiveKategorie === kat
                  ? "bg-[#a0522d] text-[#faebd7] shadow-md"
                  : "bg-[#e8c9a8] text-[#7a3e1f] hover:bg-[#d4956e] hover:text-[#faebd7]"
              }`}
            >
              {kat}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile: Embla Carousel */}
        <div className="block sm:hidden mb-4">
          <div ref={emblaRef} className="overflow-hidden rounded-xl">
            <div className="flex gap-3">
              {gefilterteItems.map((item, index) => (
                <div
                  key={item.id}
                  className="flex-none w-[78vw] cursor-pointer"
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md group">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-60 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#5c2d0e]/0 group-active:bg-[#5c2d0e]/30 transition-colors flex items-center justify-center">
                      <ZoomIn className="h-6 w-6 text-white opacity-0 group-active:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <p className="text-xs text-[#a0522d] mt-2 px-1 font-medium">{item.alt}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Carousel Nav */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-8 h-8 rounded-full bg-[#e8c9a8] flex items-center justify-center text-[#7a3e1f] hover:bg-[#d4956e] hover:text-[#faebd7] transition-colors"
              aria-label="Zurück"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-8 h-8 rounded-full bg-[#e8c9a8] flex items-center justify-center text-[#7a3e1f] hover:bg-[#d4956e] hover:text-[#faebd7] transition-colors"
              aria-label="Weiter"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Desktop: Masonry Grid */}
        <motion.div
          className="hidden sm:block columns-2 lg:columns-3 gap-4 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <AnimatePresence mode="wait">
            {gefilterteItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <motion.img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.45 }}
                  />
                  <div className="absolute inset-0 bg-[#5c2d0e]/0 group-hover:bg-[#5c2d0e]/40 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      className="flex flex-col items-center gap-2 text-[#faebd7]"
                      initial={{ opacity: 0, y: 6 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      <ZoomIn className="h-6 w-6" />
                      <span className="text-xs font-medium bg-[#5c2d0e]/50 px-3 py-1 rounded-full">
                        Vergrößern
                      </span>
                    </motion.div>
                  </div>
                </div>
                <p className="text-xs text-[#a0522d] mt-2 px-1 font-medium">{item.alt}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent
          className="max-w-4xl w-[95vw] bg-[#1a0a04]/95 border-[#5c2d0e] p-0 overflow-hidden"
          onKeyDown={handleKeyDown}
        >
          <DialogTitle className="sr-only">{selectedItem?.alt ?? "Galerie Bild"}</DialogTitle>

          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute right-3 top-3 z-20 bg-[#5c2d0e]/80 text-[#faebd7] rounded-full p-1.5 hover:bg-[#5c2d0e] transition-colors"
            aria-label="Schließen"
          >
            <X className="h-4 w-4" />
          </button>

          {gefilterteItems.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 bg-[#5c2d0e]/70 text-[#faebd7] rounded-full p-1.5 sm:p-2 hover:bg-[#5c2d0e] transition-colors"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 bg-[#5c2d0e]/70 text-[#faebd7] rounded-full p-1.5 sm:p-2 hover:bg-[#5c2d0e] transition-colors"
                aria-label="Nächstes Bild"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </>
          )}

          {selectedItem && (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="w-full object-contain max-h-[75vh] sm:max-h-[80vh]"
                />
                <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                  <p className="text-[#e8c9a8] text-xs sm:text-sm">{selectedItem.alt}</p>
                  {selectedIndex !== null && (
                    <p className="text-[#a0522d] text-xs font-medium">
                      {selectedIndex + 1} / {gefilterteItems.length}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
