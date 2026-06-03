import type { Kurs } from "@/types"

export const kurse: Kurs[] = [
  {
    id: "k1",
    titel: "Töpfern für Einsteiger",
    beschreibung:
      "Lerne die Grundlagen der Töpferscheibe kennen. Du formst dein erstes Stück und nimmst es nach dem Brennen mit nach Hause.",
    datum: "2026-07-05",
    dauer: "3 Stunden",
    preis: 45,
    maxTeilnehmer: 8,
    verfuegbarePlaetze: 3,
    level: "Anfänger",
  },
  {
    id: "k2",
    titel: "Aufbautechnik – Handaufbau",
    beschreibung:
      "Im Handaufbaukurs lernst du, Ton ohne Scheibe zu formen. Ideal für Schalen, Skulpturen und organische Formen.",
    datum: "2026-07-19",
    dauer: "3,5 Stunden",
    preis: 50,
    maxTeilnehmer: 8,
    verfuegbarePlaetze: 6,
    level: "Alle",
  },
  {
    id: "k3",
    titel: "Fortgeschrittene Scheibentechnik",
    beschreibung:
      "Für alle, die schon Erfahrung mit der Töpferscheibe haben. Wir arbeiten an Zentrierung, Wandstärke und komplexeren Formen.",
    datum: "2026-08-09",
    dauer: "4 Stunden",
    preis: 60,
    maxTeilnehmer: 6,
    verfuegbarePlaetze: 0,
    level: "Fortgeschritten",
  },
  {
    id: "k4",
    titel: "Glasurtag",
    beschreibung:
      "Bereits gebrannte Stücke werden glasiert und dekoriert. Du lernst verschiedene Glasurtechniken und Farbkombinationen.",
    datum: "2026-08-22",
    dauer: "2,5 Stunden",
    preis: 35,
    maxTeilnehmer: 10,
    verfuegbarePlaetze: 7,
    level: "Alle",
  },
]
