// components/About.tsx
'use client'

import { Code, Brain, Rocket, Users, Award, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const About = () => {
    const highlights = [
        {
            icon: Code,
            title: 'Full Stack Dev',
            description: 'Expert in Next.js, React, Node.js, and modern TypeScript architectures.',
            color: 'text-blue-400 border-blue-500/10 group-hover:border-blue-500/30'
        },
        {
            icon: Brain,
            title: 'Machine Learning',
            description: 'Passionate developer trained in data science, pandas, and predictive modeling.',
            color: 'text-purple-400 border-purple-500/10 group-hover:border-purple-500/30'
        },
        {
            icon: Rocket,
            title: 'Scalable Systems',
            description: 'Focusing on clean, modular backend services and API design optimization.',
            color: 'text-emerald-400 border-emerald-500/10 group-hover:border-emerald-500/30'
        },
        {
            icon: Users,
            title: 'Freelance & Success',
            description: 'Proven track record of delivering end-to-end full-stack solutions for clients.',
            color: 'text-pink-400 border-pink-500/10 group-hover:border-pink-500/30'
        }
    ]

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Subtle background blob */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20 animate-slide-up">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Intro & Text */}
                    <div className="lg:col-span-6 space-y-6 animate-slide-up">
                        <div className="space-y-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                                Hi, I{"'"}m <span className="text-blue-400">Himanshu Raj Yadav</span>
                            </h3>
                            <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                                <Award size={16} className="text-blue-400" /> B.Tech Undergraduate
                            </p>
                        </div>
                        
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            I am a dedicated full-stack developer and AI/ML enthusiast pursuing my B.Tech degree from the **Chandigarh Group of Colleges**. I have a deep-seated passion for constructing innovative, high-performance web systems that bridge user needs and elegant code.
                        </p>
                        
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            My developmental path centers on creating real-world production platforms—ranging from custom school CMS platforms and journals to AI-guided systems like **AskMind**. I actively combine modern frontend framework patterns with backend databases to construct secure, scalable, and responsive systems.
                        </p>

                        <div className="pt-4">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Let{"'"}s Work Together
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Key Pillars Grid */}
                    <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4 sm:gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {highlights.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className={`glass-effect p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-all duration-300 group ${item.color}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 text-blue-400 group-hover:scale-110 transition-transform">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-base sm:text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

