// components/Hero.tsx
'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail, Code, Terminal, Award, Cpu } from 'lucide-react'
import Link from 'next/link'

const titles = [
    "Full Stack Developer",
    "ML & AI Specialist",
    "Freelance Web Developer",
    "Creative Problem Solver"
]

const Hero = () => {
    const stats = [
        { label: 'Experience', value: 'Fresher', icon: Terminal, color: 'text-blue-400 hover:border-blue-500/30' },
        { label: 'Projects Completed', value: '8+', icon: Code, color: 'text-emerald-400 hover:border-emerald-500/30' },
        { label: 'Technologies', value: '15+', icon: Cpu, color: 'text-purple-400 hover:border-purple-500/30' },
        { label: 'Code Commits', value: '500+', icon: Award, color: 'text-amber-400 hover:border-amber-500/30' },
    ]

    const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(150)

    useEffect(() => {
        let timer: NodeJS.Timeout
        const handleType = () => {
            const fullTitle = titles[currentTitleIndex]
            if (!isDeleting) {
                setCurrentText(fullTitle.substring(0, currentText.length + 1))
                setTypingSpeed(100)

                if (currentText === fullTitle) {
                    // Pause before deleting
                    timer = setTimeout(() => setIsDeleting(true), 2500)
                    return
                }
            } else {
                setCurrentText(fullTitle.substring(0, currentText.length - 1))
                setTypingSpeed(50)

                if (currentText === '') {
                    setIsDeleting(false)
                    setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
                }
            }

            timer = setTimeout(handleType, typingSpeed)
        }

        timer = setTimeout(handleType, typingSpeed)
        return () => clearTimeout(timer)
    }, [currentText, isDeleting, currentTitleIndex, typingSpeed])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Nebula Mesh Background Blobs */}
            <div className="absolute inset-0 bg-[#030303]"></div>
            
            {/* Glowing mesh blobs */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: '-3s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pink-500/5 rounded-full blur-[150px] animate-float" style={{ animationDuration: '10s' }}></div>

            {/* Background grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
                <div className="text-center max-w-4xl">
                    {/* Welcome Tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8 animate-fade-in">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                        Available for Work
                    </div>

                    {/* Main Title */}
                    <div className="mb-6 animate-slide-up">
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 text-white">
                            Hi, I{"'"}m <span className="gradient-text">Himanshu</span>
                        </h1>
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-300 h-16 sm:h-20 flex items-center justify-center">
                            <span className="border-r-2 border-blue-500 pr-1 animate-pulse">
                                {currentText}
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mt-4">
                            B.Tech Graduate from Chandigarh Group of Colleges. Designing full-stack web architectures and intelligent models that turn complexity into clean digital elegance.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <Link
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-3.5 border border-white/10 hover:border-white/20 bg-white/5 text-white font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 text-center"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        {[
                            { icon: Github, href: 'https://github.com/HimanshuRaj11', label: 'GitHub', color: 'hover:text-white hover:border-white/30' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/himanshu-raj-yadav-37b185252/', label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/30' },
                            { icon: Mail, href: 'mailto:himanshurajyadav11@gmail.com', label: 'Email', color: 'hover:text-rose-400 hover:border-rose-400/30' },
                        ].map(({ icon: Icon, href, label, color }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 rounded-full border border-white/5 bg-white/5 text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${color}`}
                                aria-label={label}
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    className={`glass-effect p-6 rounded-2xl text-center border border-white/5 transition-all duration-300 hover:scale-[1.03] group ${stat.color}`}
                                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                                >
                                    <div className="flex justify-center mb-3">
                                        <IconComponent size={24} className="opacity-80 group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Smooth Scroll Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                    <Link href="#about" aria-label="Scroll down">
                        <ChevronDown size={28} className="text-white hover:text-blue-500 transition-colors" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero