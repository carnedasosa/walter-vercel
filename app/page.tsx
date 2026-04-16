import { LanguageProvider } from '@/context/LanguageContext'
import { Navigation } from '@/components/sections/Navigation'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { WallOfBrands } from '@/components/sections/WallOfBrands'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <WallOfBrands />
        <About />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
