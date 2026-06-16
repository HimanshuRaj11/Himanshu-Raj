// components/Projects.tsx
'use client'

import { useState } from 'react'
import { ExternalLink, Github, Briefcase, User, Folder } from 'lucide-react'

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    type: 'personal' | 'freelance';
    githubUrl: string;
    liveUrl: string;
}

const Projects = () => {
    const projects: Project[] = [
        {
            id: '6',
            title: 'Journal of Law & Social Governance',
            description: 'An open-access, peer-reviewed international digital journal. Designed with a custom scholarly publishing workflow, article indexing, and secure role-based permissions.',
            technologies: ["Next.js", "TypeScript", "Supabase", "Prisma", "Tailwind CSS"],
            type: 'freelance',
            githubUrl: 'https://github.com/HimanshuRaj11/ijlsg',
            liveUrl: 'https://ijlsg.himanshurajyadav.in/'
        },
        {
            id: '3',
            title: 'Mahadev Studios',
            description: 'A professional and fast digital home for a filmmaking studio specializing in short films, documentaries, and series. Features a highly optimized media and work showcase.',
            technologies: ['Next.js', 'TypeScript', 'Custom CMS', 'Framer Motion'],
            type: 'freelance',
            githubUrl: "https://github.com/HimanshuRaj11/MahadevStudios",
            liveUrl: 'https://www.mahadevstudios.com/'
        },
        {
            id: '4',
            title: 'Aarna Indian Food– Restaurant Billing POS Web Application',
            description: 'A full-featured invoice management dashboard for SMEs and freelancers. Built to automate billing calculations, client tracking, PDF creation, and invoice history.',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'PDF Generation', 'Express'],
            type: 'freelance',
            githubUrl: 'https://github.com/HimanshuRaj11/Aarna_indian_food',
            liveUrl: 'https://aarnaindianfood.com/'
        },
        {
            id: '5',
            title: 'AskMind - AI Interviewer',
            description: 'An intelligent platform conducting simulated mock interviews using the Gemini LLM. Combines a smart voice synthesis pipeline to evaluate users and provide instantaneous grading feedback.',
            technologies: ["Next.js", "Firebase", "Google Gemini API", "Vapi AI", "Tailwind CSS"],
            type: 'freelance',
            githubUrl: 'https://github.com/HimanshuRaj11/AskMind',
            liveUrl: 'https://askmind.himanshurajyadav.in/'
        },

    ]

    const [activeTab, setActiveTab] = useState<'all' | 'personal' | 'freelance'>('all')

    const filteredProjects = projects.filter(project => {
        if (activeTab === 'all') return true
        return project.type === activeTab
    })

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background glowing blob */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[130px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        A collection of digital tools, open-source platforms, and client solutions.
                    </p>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-2 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {(['all', 'personal', 'freelance'] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeTab === tab
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                                : 'bg-white/5 text-gray-400 border border-white/5 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="glass-effect p-6 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300 group flex flex-col justify-between hover:shadow-lg hover:shadow-blue-500/5"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div>
                                {/* Header (Title & Meta) */}
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-xl bg-white/5 text-blue-400 group-hover:scale-110 transition-transform">
                                            <Folder size={20} />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex items-center gap-2">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                                aria-label="GitHub"
                                            >
                                                <Github size={16} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                                aria-label="Live Demo"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Tag */}
                                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/5 border border-white/10 mb-4">
                                    {project.type === 'freelance' ? (
                                        <>
                                            <Briefcase size={10} className="text-emerald-400" />
                                            <span className="text-emerald-400">{project.type}</span>
                                        </>
                                    ) : (
                                        <>
                                            <User size={10} className="text-blue-400" />
                                            <span className="text-blue-400">{project.type}</span>
                                        </>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 text-xs rounded-lg bg-blue-500/5 text-blue-300 border border-blue-500/10"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
