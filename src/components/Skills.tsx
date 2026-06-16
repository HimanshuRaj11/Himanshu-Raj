'use client'

interface Skill {
    name: string;
    level: number;
    category: string;
}

const Skills = () => {
    const skills: Skill[] = [
        { name: 'Javascript', level: 80, category: 'language' },
        { name: 'Java', level: 50, category: 'language' },
        { name: 'Python', level: 60, category: 'language' },
        { name: 'React.js', level: 90, category: 'frontend' },
        { name: 'Next.js', level: 85, category: 'frontend' },
        { name: 'TypeScript', level: 80, category: 'frontend' },
        { name: 'Tailwind CSS', level: 85, category: 'frontend' },
        { name: 'Node.js', level: 80, category: 'backend' },
        { name: 'Express.js', level: 75, category: 'backend' },
        { name: 'Python (DRF)', level: 85, category: 'backend' },
        { name: 'MongoDB', level: 80, category: 'database' },
        { name: 'MySQL', level: 60, category: 'database' },
        { name: 'Machine Learning', level: 75, category: 'ml' },
        { name: 'TensorFlow', level: 70, category: 'ml' },
        { name: 'Pandas', level: 70, category: 'ml' },
        { name: 'Numpy', level: 60, category: 'ml' },
        { name: 'Git', level: 85, category: 'tools' },
        { name: 'Hostinger', level: 40, category: 'tools' },
        { name: 'Vercel', level: 70, category: 'tools' },
    ];

    const categories = {
        language: "Languages",
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        ml: 'Machine Learning',
        tools: 'Tools & DevOps',
    };

    const categoryStyles = {
        frontend: 'text-blue-400 border-blue-500/20 bg-blue-500/5',
        backend: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
        database: 'text-orange-400 border-orange-500/20 bg-orange-500/5',
        ml: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
        tools: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/5',
        language: 'text-rose-400 border-rose-500/20 bg-rose-500/5'
    };

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Technical <span className="text-blue-500">Expertise</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl">
                        A specialized stack focused on performance, scalability, and clean user interfaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(categories).map(([key, title]) => {
                        const categorySkills = skills.filter(skill => skill.category === key);
                        const style = categoryStyles[key as keyof typeof categoryStyles];

                        return (
                            <div key={key} className="group">
                                <h3 className={`text-sm font-bold uppercase tracking-widest mb-6 ${style.split(' ')[0]}`}>
                                    {title}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {categorySkills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className={`px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${style}`}
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                                                <span className="text-[10px] opacity-50 font-mono">{skill.level}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;