'use client';
import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Labs from '@/components/Labs'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Labs />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
