import { Github, Linkedin, Mail, ExternalLink, Heart, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/HimanshuRaj11',
            color: 'hover:text-white hover:border-white/30'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/himanshu-raj-yadav-37b185252/',
            color: 'hover:text-blue-400 hover:border-blue-400/30'
        },
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:himanshurajyadav11@gmail.com',
            color: 'hover:text-rose-400 hover:border-rose-400/30'
        }
    ];

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'himanshurajyadav11@gmail.com',
            href: 'mailto:himanshurajyadav11@gmail.com'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 73208 69391',
            href: 'tel:+917320869391'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Chandigarh, India',
            href: 'https://maps.google.com/?q=Chandigarh,India'
        }
    ];

    return (
        <footer className="relative bg-[#050505] text-white border-t border-white/5 overflow-hidden">
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tight">
                            Himanshu<span className="text-blue-500">.</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Full-stack engineer building production-grade web systems and custom AI configurations that bridge complexity and user needs.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-3 pt-2">
                            {socialLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2.5 rounded-full border border-white/5 bg-white/5 text-gray-400 transition-all duration-300 ${link.color} hover:bg-white/10 hover:scale-110`}
                                        aria-label={link.name}
                                    >
                                        <IconComponent size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm font-medium"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {link.name}
                                        </span>
                                        <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-500" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Get In Touch</h4>
                        <div className="space-y-3">
                            {contactInfo.map((info, i) => {
                                const IconComponent = info.icon;
                                return (
                                    <div className="flex items-center gap-3 text-gray-400" key={i}>
                                        <div className="p-2 rounded-lg bg-white/5 text-blue-400 shrink-0">
                                            <IconComponent size={14} />
                                        </div>
                                        <div className="text-xs sm:text-sm">
                                            <span className="text-[10px] uppercase font-bold text-gray-500 block">
                                                {info.label}
                                            </span>
                                            <a
                                                href={info.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-blue-400 font-medium transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 bg-black/40">
                <div className="max-w-6xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
                        <div suppressHydrationWarning>
                            © {currentYear} Himanshu Raj Yadav. All rights reserved.
                        </div>

                        <div className="flex items-center gap-1">
                            <span>Crafted with</span>
                            <Heart size={12} className="text-rose-500 fill-rose-500/30 animate-pulse" />
                            <span>using Next.js & Tailwind CSS v4</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}