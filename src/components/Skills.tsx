// components/Skills.tsx
'use client'

import { useState } from 'react'
import { Search, Brain, Code, Cpu, Database, Settings, MessageSquare, Terminal } from 'lucide-react'

interface Skill {
    name: string;
    level: number;
    category: 'language' | 'frontend' | 'backend' | 'database' | 'ml' | 'tools';
}

const Skills = () => {
    const skills: Skill[] = [
        { name: 'Javascript', level: 90, category: 'language' },
        { name: 'Java', level: 70, category: 'language' },
        { name: 'Python', level: 80, category: 'language' },
        { name: 'TypeScript', level: 85, category: 'frontend' },
        { name: 'React.js', level: 90, category: 'frontend' },
        { name: 'Next.js', level: 85, category: 'frontend' },
        { name: 'Tailwind CSS', level: 90, category: 'frontend' },
        { name: 'Node.js', level: 80, category: 'backend' },
        { name: 'Express.js', level: 75, category: 'backend' },
        { name: 'Python (DRF)', level: 80, category: 'backend' },
        { name: 'MongoDB', level: 85, category: 'database' },
        { name: 'MySQL', level: 70, category: 'database' },
        { name: 'Machine Learning', level: 75, category: 'ml' },
        { name: 'TensorFlow', level: 65, category: 'ml' },
        { name: 'Pandas', level: 70, category: 'ml' },
        { name: 'Numpy', level: 60, category: 'ml' },
        { name: 'Git', level: 85, category: 'tools' },
        { name: 'Hostinger', level: 50, category: 'tools' },
        { name: 'Vercel', level: 75, category: 'tools' },
    ];

    const categories = {
        all: 'All',
        language: 'Languages',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        ml: 'Machine Learning',
        tools: 'Tools & DevOps',
    };

    const categoryIcons = {
        language: Code,
        frontend: Terminal,
        backend: Settings,
        database: Database,
        ml: Brain,
        tools: Cpu
    }

    const categoryStyles = {
        frontend: { text: 'text-blue-400', border: 'border-blue-500/10 hover:border-blue-500/30', bg: 'bg-blue-500/5', progress: 'bg-blue-500 shadow-blue-500/20' },
        backend: { text: 'text-emerald-400', border: 'border-emerald-500/10 hover:border-emerald-500/30', bg: 'bg-emerald-500/5', progress: 'bg-emerald-500 shadow-emerald-500/20' },
        database: { text: 'text-orange-400', border: 'border-orange-500/10 hover:border-orange-500/30', bg: 'bg-orange-500/5', progress: 'bg-orange-500 shadow-orange-500/20' },
        ml: { text: 'text-purple-400', border: 'border-purple-500/10 hover:border-purple-500/30', bg: 'bg-purple-500/5', progress: 'bg-purple-500 shadow-purple-500/20' },
        tools: { text: 'text-yellow-400', border: 'border-yellow-500/10 hover:border-yellow-500/30', bg: 'bg-yellow-500/5', progress: 'bg-yellow-500 shadow-yellow-500/20' },
        language: { text: 'text-rose-400', border: 'border-rose-500/10 hover:border-rose-500/30', bg: 'bg-rose-500/5', progress: 'bg-rose-500 shadow-rose-500/20' }
    };

    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof categories>('all')

    const filteredSkills = skills.filter(skill => {
        const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background glowing blob */}
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        Technical <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        An optimized set of web frameworks, core languages, databases, and AI libraries.
                    </p>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
                </div>

                {/* Filters and Search Bar */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {/* Search Field */}
                    <div className="relative w-full md:w-80">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
                            <Search size={16} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search skills (e.g. React)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        />
                    </div>

                    {/* Category Buttons */}
                    <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
                        {Object.entries(categories).map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedCategory(key as keyof typeof categories)}
                                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                    selectedCategory === key
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                                    : 'bg-white/5 text-gray-400 border border-white/5 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    {filteredSkills.map((skill, index) => {
                        const style = categoryStyles[skill.category];
                        const IconComponent = categoryIcons[skill.category];
                        return (
                            <div
                                key={skill.name}
                                className={`glass-effect p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] flex items-center gap-4 group ${style.border}`}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {/* Category Icon wrapper */}
                                <div className={`p-3 rounded-xl ${style.bg} ${style.text} group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent size={20} />
                                </div>

                                {/* Title and Progress bar */}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-bold text-sm sm:text-base text-white">{skill.name}</span>
                                        <span className="font-mono text-xs text-gray-400">{skill.level}%</span>
                                    </div>

                                    {/* Progress track */}
                                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full transition-all duration-1000 ease-out ${style.progress} shadow-[0_0_8px_rgba(255,255,255,0.1)]`}
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Empty State */}
                {filteredSkills.length === 0 && (
                    <div className="text-center py-12 text-gray-500 animate-fade-in">
                        No skills found matching &ldquo;{searchQuery}&rdquo;.
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;