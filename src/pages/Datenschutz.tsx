import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function Datenschutz() {
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
            Datenschutzerklärung
          </h1>

          <div className="space-y-6 text-[#7a3e1f]">
            <section>
              <h2 className="text-xl font-bold text-[#5c2d0e] font-serif mb-3">
                1. Datenschutz auf einen Blick
              </h2>
              <p className="leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#5c2d0e] font-serif mb-3">
                2. Verantwortliche Stelle
              </h2>
              <p className="leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                <br />
                <br />
                <strong>Topf &amp; Ton – Maria Mustermann</strong>
                <br />
                Töpfergasse 12, 1010 Wien
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
                3. Datenerfassung auf dieser Website
              </h2>
              <p className="leading-relaxed">
                Diese Website verwendet keine Cookies und erhebt keine
                personenbezogenen Daten automatisch. Das Kontaktformular öffnet
                Ihr lokales E-Mail-Programm – die Daten werden nicht über
                unsere Server verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#5c2d0e] font-serif mb-3">
                4. Google Fonts
              </h2>
              <p className="leading-relaxed">
                Diese Website verwendet Google Fonts. Beim Laden der Seite wird
                eine Verbindung zu Googles Servern hergestellt. Dabei kann Ihre
                IP-Adresse an Google übertragen werden. Rechtsgrundlage ist Art.
                6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
                einheitlichen Darstellung).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#5c2d0e] font-serif mb-3">
                5. Ihre Rechte
              </h2>
              <p className="leading-relaxed">
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
                Löschung, Einschränkung der Verarbeitung sowie
                Datenübertragbarkeit Ihrer personenbezogenen Daten. Wenden Sie
                sich dazu an die oben genannte E-Mail-Adresse.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
