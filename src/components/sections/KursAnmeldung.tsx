import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CheckCircle2 } from "lucide-react"
import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Kurs } from "@/types"

const schema = z.object({
  vorname: z.string().min(2, "Bitte gib deinen Vornamen ein."),
  nachname: z.string().min(2, "Bitte gib deinen Nachnamen ein."),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
  telefon: z.string().optional(),
  nachricht: z.string().optional(),
})

type FormData = z.infer<typeof schema>

interface Props {
  kurs: Kurs | null
  open: boolean
  onClose: () => void
}

function formatDatum(datum: string) {
  return new Date(datum).toLocaleDateString("de-AT", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export default function KursAnmeldung({ kurs, open, onClose }: Props) {
  const [gesendet, setGesendet] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  function handleClose() {
    onClose()
    setTimeout(() => {
      reset()
      setGesendet(false)
    }, 300)
  }

  function onSubmit(data: FormData) {
    const subject = encodeURIComponent(`Kursanmeldung: ${kurs?.titel}`)
    const body = encodeURIComponent(
      `Kursanmeldung\n` +
        `══════════════════════\n` +
        `Kurs:     ${kurs?.titel}\n` +
        `Datum:    ${kurs ? formatDatum(kurs.datum) : ""}\n` +
        `══════════════════════\n\n` +
        `Name:     ${data.vorname} ${data.nachname}\n` +
        `E-Mail:   ${data.email}\n` +
        (data.telefon ? `Telefon:  ${data.telefon}\n` : "") +
        (data.nachricht ? `\nNachricht:\n${data.nachricht}\n` : "") +
        `\nViele Grüße,\n${data.vorname} ${data.nachname}`
    )
    window.location.href = `mailto:hallo@topf-und-ton.at?subject=${subject}&body=${body}`
    setGesendet(true)
  }

  if (!kurs) return null

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-[#fdf5ee] border-[#e8c9a8]">
        <DialogHeader>
          <DialogTitle className="font-serif text-[#5c2d0e] text-xl">
            {gesendet ? "Fast geschafft!" : "Kursanmeldung"}
          </DialogTitle>
          <DialogDescription className="text-[#7a3e1f]">
            {gesendet
              ? "Deine E-Mail-App sollte sich jetzt öffnen. Sende die vorausgefüllte Mail ab – wir melden uns bald bei dir."
              : `${kurs.titel} · ${formatDatum(kurs.datum)}`}
          </DialogDescription>
        </DialogHeader>

        {gesendet ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <CheckCircle2 className="h-12 w-12 text-[#a0522d]" aria-hidden="true" />
            <p className="text-sm text-[#7a3e1f] leading-relaxed max-w-xs">
              Überprüfe bitte dein E-Mail-Programm und schicke die Nachricht ab. Wir freuen uns auf dich!
            </p>
            <Button
              onClick={handleClose}
              className="bg-[#a0522d] hover:bg-[#7a3e1f] text-[#faebd7] mt-2"
            >
              Schließen
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 pt-1">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="vorname" className="text-[#5c2d0e] text-sm font-medium">
                  Vorname <span aria-hidden="true" className="text-[#a0522d]">*</span>
                </Label>
                <Input
                  id="vorname"
                  {...register("vorname")}
                  placeholder="Maria"
                  className="border-[#d4956e]/50 bg-white focus-visible:ring-[#a0522d] placeholder:text-[#d4956e]/60"
                  aria-invalid={!!errors.vorname}
                />
                {errors.vorname && (
                  <p className="text-xs text-[#a0522d]">{errors.vorname.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="nachname" className="text-[#5c2d0e] text-sm font-medium">
                  Nachname <span aria-hidden="true" className="text-[#a0522d]">*</span>
                </Label>
                <Input
                  id="nachname"
                  {...register("nachname")}
                  placeholder="Muster"
                  className="border-[#d4956e]/50 bg-white focus-visible:ring-[#a0522d] placeholder:text-[#d4956e]/60"
                  aria-invalid={!!errors.nachname}
                />
                {errors.nachname && (
                  <p className="text-xs text-[#a0522d]">{errors.nachname.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-[#5c2d0e] text-sm font-medium">
                E-Mail <span aria-hidden="true" className="text-[#a0522d]">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="maria@beispiel.at"
                className="border-[#d4956e]/50 bg-white focus-visible:ring-[#a0522d] placeholder:text-[#d4956e]/60"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-xs text-[#a0522d]">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="telefon" className="text-[#5c2d0e] text-sm font-medium">
                Telefon <span className="text-[#a0522d]/60 font-normal">(optional)</span>
              </Label>
              <Input
                id="telefon"
                type="tel"
                {...register("telefon")}
                placeholder="+43 660 123 456"
                className="border-[#d4956e]/50 bg-white focus-visible:ring-[#a0522d] placeholder:text-[#d4956e]/60"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="nachricht" className="text-[#5c2d0e] text-sm font-medium">
                Nachricht <span className="text-[#a0522d]/60 font-normal">(optional)</span>
              </Label>
              <Textarea
                id="nachricht"
                {...register("nachricht")}
                placeholder="Fragen, Besonderheiten, Vorerfahrungen …"
                rows={3}
                className="border-[#d4956e]/50 bg-white focus-visible:ring-[#a0522d] placeholder:text-[#d4956e]/60 resize-none"
              />
            </div>

            <div className="flex gap-3 pt-1">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1 border-[#d4956e]/50 text-[#7a3e1f] hover:bg-[#f5e6d3]"
              >
                Abbrechen
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#a0522d] hover:bg-[#7a3e1f] text-[#faebd7]"
              >
                Anmeldung senden
              </Button>
            </div>

            <p className="text-xs text-[#a0522d]/70 text-center">
              * Pflichtfelder. Die Anmeldung öffnet deine E-Mail-App.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
