// components/AIChatbot.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react'

interface Message {
    sender: 'user' | 'bot'
    text: string
    time: string
}

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: 'bot',
            text: "Hi there! I'm Himanshu's AI clone. Ask me anything about his projects, technical skills, college background, or hiring options!",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const quickReplies = [
        { label: 'Featured Projects 🚀', query: 'Tell me about your projects' },
        { label: 'Core Skills 💻', query: 'What are your technical skills?' },
        { label: 'Education 🎓', query: 'Where do you study?' },
        { label: 'Freelance & Hire 💼', query: 'Are you available for freelance work?' }
    ]

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isTyping])

    const getBotResponse = (query: string): string => {
        const q = query.toLowerCase()

        if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('askmind') || q.includes('cross') || q.includes('studios') || q.includes('fybill')) {
            return "Himanshu has built several notable platforms:\n\n• **AskMind**: An AI-powered mock interviewer conducting verbal sessions via Google Gemini LLM.\n• **Cross**: A full-featured custom real-time social platform.\n• **Mahadev Studios**: A fast media streaming production house portal.\n• **FyBill**: An automated SME billing and PDF generator.\n• **IJLSG Journal**: A custom scholarly open-access journal dashboard."
        }

        if (q.includes('skill') || q.includes('tech') || q.includes('react') || q.includes('next') || q.includes('backend') || q.includes('python') || q.includes('javascript') || q.includes('ml')) {
            return "His tech stack includes:\n\n• **Languages**: JavaScript, TypeScript, Python, Java, SQL\n• **Frontend**: React.js, Next.js, Tailwind CSS\n• **Backend**: Node.js, Express.js, Django/DRF\n• **Database**: MongoDB, MySQL, Supabase, Prisma\n• **AI/ML**: TensorFlow, Pandas, NumPy, Google Gemini integrations\n• **DevOps**: Vercel, Hostinger, Git"
        }

        if (q.includes('study') || q.includes('education') || q.includes('college') || q.includes('cgc') || q.includes('school')) {
            return "Himanshu is currently pursuing a **B.Tech in Computer Science and Engineering** at the **Chandigarh Group of Colleges (CGC)**, graduating in 2026. He maintains excellent academics and applies computer science concepts to production-grade software."
        }

        if (q.includes('hire') || q.includes('freelance') || q.includes('job') || q.includes('contract') || q.includes('available')) {
            return "Yes! Himanshu is actively available for freelance contracts, full-stack projects, and engineering roles. You can contact him at **himanshurajyadav11@gmail.com** or call **+91 73208 69391** to discuss terms."
        }

        if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
            return "Hello there! How can I help you today? Ask me about Himanshu's skills, project list, or contact information."
        }

        return "I'm Himanshu's custom chatbot! I can answer questions about his skills, project details, college engineering studies, or freelance hiring. For other topics, reach Himanshu directly at himanshurajyadav11@gmail.com!"
    }

    const handleSend = (text: string) => {
        if (!text.trim()) return

        const userMessage: Message = {
            sender: 'user',
            text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }

        setMessages(prev => [...prev, userMessage])
        setInputValue('')
        setIsTyping(true)

        // Simulate typing delay
        setTimeout(() => {
            const botMessage: Message = {
                sender: 'bot',
                text: getBotResponse(text),
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
            setMessages(prev => [...prev, botMessage])
            setIsTyping(false)
        }, 1000)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
                    aria-label="Open Chat Assistant"
                >
                    <Sparkles className="w-6 h-6 animate-pulse" />
                    {/* Ring glow */}
                    <span className="absolute inset-0 rounded-full border border-blue-500/40 animate-ping pointer-events-none"></span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="w-[340px] sm:w-[380px] h-[500px] rounded-3xl glass-effect border border-white/10 flex flex-col overflow-hidden shadow-2xl shadow-black/80 animate-fade-in">
                    {/* Chat Header */}
                    <div className="px-5 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm flex items-center gap-1.5">
                                    Himanshu AI 
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                                </h3>
                                <p className="text-[10px] text-gray-500 font-medium">Assistant Clone</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
                            aria-label="Close Chat"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, index) => {
                            const isBot = msg.sender === 'bot'
                            return (
                                <div
                                    key={index}
                                    className={`flex gap-2.5 max-w-[85%] ${
                                        isBot ? 'self-start' : 'self-end flex-row-reverse ml-auto'
                                    }`}
                                >
                                    {/* Icon */}
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/5 text-xs font-semibold ${
                                        isBot ? 'bg-blue-500/10 text-blue-400' : 'bg-white/5 text-white'
                                    }`}>
                                        {isBot ? <Bot size={14} /> : <User size={14} />}
                                    </div>
                                    {/* Bubble */}
                                    <div>
                                        <div className={`p-3 rounded-2xl text-xs leading-relaxed whitespace-pre-line border border-white/5 ${
                                            isBot ? 'bg-white/5 text-gray-300' : 'bg-blue-600 text-white'
                                        }`}>
                                            {msg.text}
                                        </div>
                                        <span className="text-[9px] text-gray-600 mt-1 block px-1">
                                            {msg.time}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}

                        {/* Typing Loader */}
                        {isTyping && (
                            <div className="flex gap-2.5 max-w-[85%]">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/5 bg-blue-500/10 text-blue-400">
                                    <Bot size={14} />
                                </div>
                                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-gray-500 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Reply Suggestions */}
                    <div className="p-3 border-t border-white/5 space-y-2 bg-black/10">
                        <p className="text-[10px] text-gray-500 font-semibold px-1">Suggested Questions:</p>
                        <div className="flex flex-wrap gap-1.5">
                            {quickReplies.map((qr) => (
                                <button
                                    key={qr.label}
                                    onClick={() => handleSend(qr.query)}
                                    className="px-2.5 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 hover:border-blue-500/20 text-[10px] font-semibold text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    {qr.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Chat Input */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSend(inputValue)
                        }}
                        className="p-3 bg-black/20 border-t border-white/5 flex gap-2"
                    >
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            disabled={isTyping}
                            className="flex-1 bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={isTyping || !inputValue.trim()}
                            className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/30 text-white transition-colors cursor-pointer flex items-center justify-center shrink-0"
                            aria-label="Send message"
                        >
                            <Send size={14} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default AIChatbot
