import Layout from "@/components/layout/Layout"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Angebote from "@/components/sections/Angebote"
import Galerie from "@/components/sections/Galerie"
import Kurse from "@/components/sections/Kurse"
import Kontakt from "@/components/sections/Kontakt"

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Angebote />
      <Galerie />
      <Kurse />
      <Kontakt />
    </Layout>
  )
}
