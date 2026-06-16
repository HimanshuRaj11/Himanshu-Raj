// components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import { Download, Menu, X, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30)

            // Dynamic section active state tracking
            const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact']
            const scrollPosition = window.scrollY + 200 // offset for trigger

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const top = element.offsetTop
                    const height = element.offsetHeight
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section)
                    }
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        // Run once initially to set correct state
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '#home', label: 'Home', id: 'home' },
        { href: '#about', label: 'About', id: 'about' },
        { href: '#experience', label: 'Experience', id: 'experience' },
        { href: '#skills', label: 'Skills', id: 'skills' },
        { href: '#projects', label: 'Projects', id: 'projects' },
        { href: '#contact', label: 'Contact', id: 'contact' },
    ]

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-out px-4 py-4 ${
                isScrolled ? 'md:py-2' : 'md:py-6'
            }`}
        >
            <nav
                className={`mx-auto transition-all duration-500 ease-out ${
                    isScrolled 
                    ? 'max-w-4xl glass-effect px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/5' 
                    : 'max-w-7xl px-4 py-2 bg-transparent border-b border-transparent'
                }`}
            >
                <div className="flex items-center justify-between h-12">
                    {/* Brand Logo */}
                    <Link 
                        href="#home" 
                        className="text-2xl font-bold tracking-tight text-white hover:opacity-95 transition-opacity"
                    >
                        Himanshu<span className="text-blue-500">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeSection === item.id
                                    ? 'bg-blue-600/15 text-blue-400 font-semibold'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Resume Button */}
                    <div className="hidden md:block">
                        <Link 
                            href="/HimanshuRaj.pdf" 
                            target="_blank" 
                            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-blue-500/25"
                        >
                            <span>Resume</span>
                            <Download size={14} className="transition-transform group-hover:translate-y-0.5" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden glass-effect mt-3 px-4 py-5 rounded-2xl border border-white/5 animate-fade-in space-y-4">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-4 py-2 rounded-xl text-base font-medium transition-all ${
                                        activeSection === item.id
                                        ? 'bg-blue-600/20 text-blue-400'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="pt-2 border-t border-white/5">
                            <Link 
                                href="/HimanshuRaj.pdf" 
                                target="_blank" 
                                className="flex items-center justify-center gap-2 w-full rounded-xl bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span>Download Resume</span>
                                <Download size={16} />
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header

