
'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import AIChatbot from '@/components/AIChatbot'
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Slightly faster load for better UX

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#030303] text-white overflow-hidden relative">
        {/* Glow backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600/10 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>

        <div className="relative flex flex-col items-center gap-6 z-10">
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Spinning gradient border */}
            <div className="absolute inset-0 rounded-full border-2 border-white/5 border-t-blue-500 border-r-purple-500 animate-spin" style={{ animationDuration: '1.2s' }}></div>
            <div className="absolute inset-2 rounded-full border border-white/5 bg-black/40 backdrop-blur-md flex items-center justify-center shadow-inner">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">H</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Loading Portfolio</h3>
            <div className="w-24 h-[3px] rounded-full bg-white/5 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-[shimmer_1.5s_infinite]" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#030303] text-gray-100 selection:bg-blue-600/30 overflow-hidden relative">
      {/* Header element */}
      <Header />

      {/* Hero section */}
      <Hero />

      {/* Main container with padding adjustments */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 relative">
        <section className="scroll-mt-24">
          <About />
        </section>

        <section className="scroll-mt-24">
          <Experience />
        </section>

        <section className="scroll-mt-24">
          <Skills />
        </section>

        <section className="scroll-mt-24">
          <Projects />
        </section>

        <section className="scroll-mt-24">
          <Contact />
        </section>
      </div>

      {/* Footer element */}
      <Footer />

      {/* Floating AI Agent widget */}
      <AIChatbot />
    </main>
  )
}






