import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faebd7]">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/">
            <Button
              variant="ghost"
              className="mb-8 text-[#a0522d] hover:text-[#7a3e1f] -ml-2"
            >
              <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
              Zurück zur Startseite
            </Button>
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#5c2d0e] font-serif mb-8">
            Impressum
          </h1>

          <div className="prose prose-stone max-w-none space-y-6 text-[#7a3e1f]">
            <section>
              <h2 className="text-xl font-bold text-[#5c2d0e] font-serif mb-3">
                Angaben gemäß § 5 ECG
              </h2>
              <p>
                <strong>Topf &amp; Ton</strong>
                <br />
                Maria Mustermann
                <br />
                Töpfergasse 12
                <br />
                1010 Wien
                <br />
                Österreich
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#5c2d0e] font-serif mb-3">
                Kontakt
              </h2>
              <p>
                Telefon:{" "}
                <a
                  href="tel:+4312345678"
                  className="text-[#a0522d] underline underline-offset-2 hover:text-[#7a3e1f]"
                >
                  +43 1 234 56 78
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:hallo@topf-und-ton.at"
                  className="text-[#a0522d] underline underline-offset-2 hover:text-[#7a3e1f]"
                >
                  hallo@topf-und-ton.at
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#5c2d0e] font-serif mb-3">
                Unternehmensgegenstand
              </h2>
              <p>
                Herstellung und Verkauf von handgefertigter Keramik sowie
                Durchführung von Töpferkursen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#5c2d0e] font-serif mb-3">
                Haftungsausschluss
              </h2>
              <p>
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
                erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                der Inhalte kann jedoch keine Gewähr übernommen werden.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
