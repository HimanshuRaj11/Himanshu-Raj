'use client'

import { useState } from 'react'
import { ExternalLink, Github, Briefcase, User } from 'lucide-react'

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    type: string;
    githubUrl: string;
    liveUrl: string;
}

const Projects = () => {
    const projects: Project[] = [
        {
            id: '2',
            title: 'Cross - Social Media App',
            description: 'A dynamic social media platform with all essential functionalities. Features real-time messaging, post interactions, user profiles, and modern UI/UX design.',
            technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
            type: 'personal',
            githubUrl: 'https://github.com/HimanshuRaj11/cross',
            liveUrl: 'https://cross-qgi4.onrender.com/'
        },
        {
            id: '3',
            title: 'Mahadev Studios',
            description: 'Professional website for a renowned film production house specializing in documentaries, short films, and web series. Custom CMS and portfolio showcase.',
            technologies: ['Next.js', 'TypeScript', 'CMS', 'Animation'],
            type: 'freelance',
            githubUrl: "https://github.com/HimanshuRaj11/MahadevStudios",
            liveUrl: 'https://www.mahadevstudios.com/'
        },
        {
            id: '4',
            title: 'FyBill - Invoicing App',
            description: 'A comprehensive billing and invoicing solution for businesses and freelancers. Features include invoice generation, customer management, and expense tracking.',
            technologies: ['React', 'Node.js', 'MongoDB', 'PDF Generation'],
            type: 'freelance',
            githubUrl: 'https://github.com/HimanshuRaj11/AskMind',
            liveUrl: 'https://fybill.in/'
        },
        {
            id: '5',
            title: 'AskMind - AI Interviewer Web Application',
            description: ' Developed an AI-powered web application that conducts mock interviews using Google Gemini and a voice assistant for real - time interaction.The system evaluates user responses and provides instant feedback to enhance interview preparation.',
            technologies: ["Next.js", "Firebase", "Google Gemini API", "Vapi AI", "Tailwind CSS"],
            type: 'freelance',
            githubUrl: 'https://github.com/HimanshuRaj11/FyBill',
            liveUrl: 'https://askmind.himanshurajyadav.in/'
        },
        {
            id: '6',
            title: 'International Journal of Law & Social Governance',
            description: 'International Journal of Law and Social Governance (IJLSG) — a peer-reviewed, open-access platform advancing interdisciplinary legal scholarship globally. IJLSG fosters dialogue between law and social governance, publishing cutting-edge research on legal frameworks, social justice, and governance. With a commitment to accessibility and academic excellence, IJLSG serves as a vital resource for scholars, practitioners, and policymakers worldwide.',
            technologies: ["Next.js", "TypeScript", "Supabase", "Prisma", "Tailwind CSS"],
            type: 'freelance',
            githubUrl: 'https://github.com/HimanshuRaj11/ijlsg',
            liveUrl: 'https://ijlsg.himanshurajyadav.in/'
        },
    ]


    return (
        <section id="projects" className="section-padding p-3.5">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl font-bold mb-4">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are some of the projects I{"'"}ve worked on, showcasing my skills and experience
                    </p>
                </div>



                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="glass-effect p-6 rounded-lg hover:bg-white/10 transition-all duration-300 group animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className=" mb-4 ">
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="flex items-center mt-2">

                                    <div className="flex items-center space-x-1 mr-3">
                                        {project.type === 'freelance' ? (
                                            <Briefcase size={16} className="text-green-400" />
                                        ) : (
                                            <User size={16} className="text-blue-400" />
                                        )}

                                        <p>{project.type}</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                className="p-2 glass-effect rounded-lg hover:bg-white/20 transition-colors"
                                                aria-label="GitHub"
                                            >
                                                <Github size={16} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                className="p-2 glass-effect rounded-lg hover:bg-white/20 transition-colors"
                                                aria-label="Live Demo"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech: any) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
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