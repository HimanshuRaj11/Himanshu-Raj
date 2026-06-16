// components/Contact.tsx
'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [focusedField, setFocusedField] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Reset form & show toast
        setFormData({ name: '', email: '', subject: '', message: '' })
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setTimeout(() => setSubmitSuccess(false), 5000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email Address',
            value: 'himanshurajyadav11@gmail.com',
            href: 'mailto:himanshurajyadav11@gmail.com',
            color: 'text-blue-400 border-blue-500/10 hover:border-blue-500/30 bg-blue-500/5'
        },
        {
            icon: Phone,
            label: 'Phone Number',
            value: '+91 73208 69391',
            href: 'tel:+917320869391',
            color: 'text-emerald-400 border-emerald-500/10 hover:border-emerald-500/30 bg-emerald-500/5'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'New Delhi, India',
            href: 'https://maps.google.com/?q=Chandigarh,India',
            color: 'text-purple-400 border-purple-500/10 hover:border-purple-500/30 bg-purple-500/5'
        }
    ]

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background glow blob */}
            <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Have a project in mind, looking to hire, or just want to chat? Shoot me a message!
                    </p>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
                </div>

                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                    {/* Left Column: Contact Cards */}
                    <div className="md:col-span-5 space-y-4 sm:space-y-6 animate-slide-up">
                        {contactInfo.map((info, index) => {
                            const IconComponent = info.icon;
                            return (
                                <a
                                    key={info.label}
                                    href={info.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`glass-effect p-6 rounded-2xl border flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] group block ${info.color}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform">
                                        <IconComponent size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                            {info.label}
                                        </h4>
                                        <p className="text-sm sm:text-base font-medium text-white mt-1 group-hover:underline">
                                            {info.value}
                                        </p>
                                    </div>
                                </a>
                            )
                        })}
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="md:col-span-7 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="glass-effect p-6 sm:p-8 rounded-3xl border border-white/5 relative">
                            {/* Success Banner */}
                            {submitSuccess && (
                                <div className="absolute inset-0 bg-[#030303]/95 rounded-3xl z-20 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                                    <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4 animate-bounce" />
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400 max-w-sm text-sm">
                                        Thank you for reaching out. I will get back to you as soon as possible.
                                    </p>
                                </div>
                            )}

                            <h3 className="text-lg sm:text-xl font-bold text-white mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all pt-6"
                                    />
                                    <label
                                        htmlFor="name"
                                        className={`absolute left-4 transition-all duration-300 pointer-events-none text-sm text-gray-500 ${focusedField === 'name' || formData.name
                                                ? 'top-2 text-[10px] text-blue-400 font-semibold'
                                                : 'top-1/2 -translate-y-1/2'
                                            }`}
                                    >
                                        Name
                                    </label>
                                </div>

                                {/* Email Input */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all pt-6"
                                    />
                                    <label
                                        htmlFor="email"
                                        className={`absolute left-4 transition-all duration-300 pointer-events-none text-sm text-gray-500 ${focusedField === 'email' || formData.email
                                                ? 'top-2 text-[10px] text-blue-400 font-semibold'
                                                : 'top-1/2 -translate-y-1/2'
                                            }`}
                                    >
                                        Email
                                    </label>
                                </div>

                                {/* Subject Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('subject')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all pt-6"
                                    />
                                    <label
                                        htmlFor="subject"
                                        className={`absolute left-4 transition-all duration-300 pointer-events-none text-sm text-gray-500 ${focusedField === 'subject' || formData.subject
                                                ? 'top-2 text-[10px] text-blue-400 font-semibold'
                                                : 'top-1/2 -translate-y-1/2'
                                            }`}
                                    >
                                        Subject
                                    </label>
                                </div>

                                {/* Message Input */}
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all pt-6 resize-none"
                                    ></textarea>
                                    <label
                                        htmlFor="message"
                                        className={`absolute left-4 transition-all duration-300 pointer-events-none text-sm text-gray-500 ${focusedField === 'message' || formData.message
                                                ? 'top-2 text-[10px] text-blue-400 font-semibold'
                                                : 'top-4'
                                            }`}
                                    >
                                        Message
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2 cursor-pointer ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                        }`}
                                >
                                    <Send className="w-4 h-4" />
                                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
