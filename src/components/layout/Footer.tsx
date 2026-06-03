import { Mail, Phone, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

const footerLinks = [
  { label: "Töpferkurse", href: "#kurse" },
  { label: "Galerie", href: "#galerie" },
  { label: "Über mich", href: "#about" },
  { label: "Kontakt", href: "#kontakt" },
]

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#3d1a06] text-[#faebd7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Branding */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="Topf &amp; Ton Logo"
                className="h-10 w-auto brightness-0 invert opacity-90"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.display = "none"
                }}
              />
              <span className="text-xl font-bold font-serif text-[#faebd7]">
                Topf &amp; Ton
              </span>
            </div>
            <p className="text-sm text-[#c8a882] leading-relaxed mb-5">
              Handgemachte Keramik aus dem Herzen Österreichs. Mit Liebe
              geformt, mit Feuer gebrannt.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Topf & Ton auf Instagram"
                className="w-9 h-9 bg-[#5c2d0e] hover:bg-[#a0522d] rounded-lg flex items-center justify-center text-[#e8c9a8] hover:text-[#faebd7] transition-all duration-200"
              >
                {/* Instagram icon */}
                <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Topf & Ton auf Facebook"
                className="w-9 h-9 bg-[#5c2d0e] hover:bg-[#a0522d] rounded-lg flex items-center justify-center text-[#e8c9a8] hover:text-[#faebd7] transition-all duration-200"
              >
                {/* Facebook icon */}
                <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-[#f5e6d3] mb-4 font-serif text-sm tracking-wider uppercase">
              Atelier
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-[#c8a882] hover:text-[#faebd7] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-[#f5e6d3] mb-4 font-serif text-sm tracking-wider uppercase">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-[#c8a882]">
                <MapPin className="h-4 w-4 text-[#d4956e] mt-0.5 shrink-0" aria-hidden="true" />
                <span>Töpfergasse 12, 1010 Wien</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#d4956e] shrink-0" aria-hidden="true" />
                <a
                  href="mailto:hallo@topf-und-ton.at"
                  className="text-sm text-[#c8a882] hover:text-[#faebd7] transition-colors"
                >
                  hallo@topf-und-ton.at
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#d4956e] shrink-0" aria-hidden="true" />
                <a
                  href="tel:+4312345678"
                  className="text-sm text-[#c8a882] hover:text-[#faebd7] transition-colors"
                >
                  +43 1 234 56 78
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-5 border-t border-[#5c2d0e]">
              <p className="text-xs text-[#c8a882] font-semibold mb-1">Öffnungszeiten</p>
              <p className="text-xs text-[#c8a882]">Di – Fr: 10:00 – 18:00 Uhr</p>
              <p className="text-xs text-[#c8a882]">Sa: 10:00 – 14:00 Uhr</p>
            </div>
          </div>
        </div>

        <Separator className="bg-[#5c2d0e] mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#c8a882]">
          <p>© {currentYear} Topf &amp; Ton · Handgemachte Keramik Wien</p>
          <div className="flex gap-5">
            <Link
              to="/impressum"
              className="hover:text-[#faebd7] transition-colors"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="hover:text-[#faebd7] transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
