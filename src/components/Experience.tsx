// components/Experience.tsx
'use client'

import { useState } from 'react'
import { Briefcase, Calendar, GraduationCap, Code, ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Experience as ExperienceType } from '@/lib/types'

const Experience = () => {
    const experiences: ExperienceType[] = [
        {
            title: 'Freelance Full Stack Developer',
            company: 'Self-Employed',
            period: '2024 - Present',
            description: 'Designed and deployed several high-traffic client web platforms from scratch. This includes building AskMind (an AI interview conduct platform powered by Gemini), International Journal of Law & Social Governance (academic review system), FyBill (billing invoice system), and Mahadev Studios. Focused on optimizing database queries, server-side caching, and responsive frontend aesthetics.',
            technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Supabase', 'Gemini API', 'Tailwind CSS']
        },
        {
            title: 'B.Tech in Computer Science',
            company: 'Chandigarh Group of Colleges',
            period: '2022 - 2026',
            description: 'Pursuing undergraduate degree in Computer Science and Engineering. Deep-diving into core concepts such as Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, and Machine Learning algorithms. Led multiple technical teams for academic projects and hackathons.',
            technologies: ['Java', 'Python', 'SQL', 'Machine Learning', 'Data Structures', 'Software Engineering']
        },
        {
            title: 'Open Source Developer',
            company: 'GitHub Community',
            period: '2023 - Present',
            description: 'Building open-source tools and social platforms. Engineered "Cross" — a full-featured custom social platform built on modern Next.js routes. Actively writing utility repositories and integrating AI automation routines in developer workflows.',
            technologies: ['React.js', 'Next.js', 'MongoDB', 'Vercel', 'Git', 'TypeScript']
        }
    ]

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20 animate-slide-up">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        Experience & <span className="gradient-text">Journey</span>
                    </h2>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>

                {/* Timeline container */}
                <div className="relative border-l border-white/10 ml-4 md:ml-32 py-2">
                    {experiences.map((exp, index) => {
                        const isEdu = exp.title.toLowerCase().includes('b.tech') || exp.title.toLowerCase().includes('student')
                        const isExpanded = expandedIndex === index

                        return (
                            <div 
                                key={index} 
                                className="mb-12 last:mb-0 relative pl-8 md:pl-12 group animate-slide-up"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {/* Timeline Node / Circle */}
                                <div className="absolute -left-3.5 top-1.5 flex items-center justify-center w-7 h-7 rounded-full bg-black border border-white/10 group-hover:border-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300">
                                    {isEdu ? (
                                        <GraduationCap size={14} className="text-purple-400 group-hover:text-blue-400 transition-colors" />
                                    ) : (
                                        <Briefcase size={12} className="text-blue-400 group-hover:text-blue-400 transition-colors" />
                                    )}
                                </div>

                                {/* Experience Card */}
                                <div 
                                    className={`glass-effect p-6 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300 cursor-pointer ${
                                        isExpanded ? 'shadow-lg shadow-blue-500/5' : ''
                                    }`}
                                    onClick={() => toggleExpand(index)}
                                >
                                    {/* Card Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                                {exp.title}
                                                <span className="text-xs font-normal text-gray-500 hidden sm:inline">|</span>
                                                <span className="text-sm font-semibold text-gray-400 sm:text-gray-300">{exp.company}</span>
                                            </h3>
                                            <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm mt-1">
                                                <Calendar size={14} />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>

                                        <button 
                                            className="self-end sm:self-center flex items-center gap-1 text-xs text-blue-400 font-medium hover:underline p-1 cursor-pointer"
                                            aria-label={isExpanded ? "Show Less" : "Show More"}
                                        >
                                            {isExpanded ? (
                                                <>
                                                    <span>Show Less</span>
                                                    <ArrowUpRight size={14} />
                                                </>
                                            ) : (
                                                <>
                                                    <span>Show Details</span>
                                                    <ArrowDownRight size={14} />
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    {/* Brief Description */}
                                    <p className={`text-gray-300 text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                                        isExpanded ? 'line-clamp-none' : 'line-clamp-2'
                                    }`}>
                                        {exp.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                                        {exp.technologies.map((tech) => (
                                            <span 
                                                key={tech}
                                                className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience
