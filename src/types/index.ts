export interface Kurs {
  id: string
  titel: string
  beschreibung: string
  datum: string
  dauer: string
  preis: number
  maxTeilnehmer: number
  verfuegbarePlaetze: number
  level: "Anfänger" | "Fortgeschritten" | "Alle"
}

export interface GalerieItem {
  id: string
  src: string
  alt: string
  kategorie: "Vasen" | "Schalen" | "Tassen" | "Deko" | "Sonstiges"
}

export interface Angebot {
  id: string
  titel: string
  beschreibung: string
  icon: string
  ctaText: string
  ctaHref: string
}
