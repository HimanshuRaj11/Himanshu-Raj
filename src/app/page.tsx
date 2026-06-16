
'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from "@/components/Contact"
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-blue-500 font-bold text-xl">H</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-blue-500/30">
      {/* Header is usually fixed or absolute, so it stays outside the main container */}
      <Header />

      <Hero />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 space-y-24 md:space-y-32 py-20">

        <section className="scroll-mt-20">
          <About />
        </section>

        <section className="scroll-mt-20">
          <Skills />
        </section>

        <section className="scroll-mt-20">
          <Projects />
        </section>

        {/* 
    <section className="scroll-mt-20">
      <Contact />
    </section> 
    */}

      </div>

      <Footer />
    </main>
  )
}





