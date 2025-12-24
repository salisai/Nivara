"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Mail, Phone, ArrowUp } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative py-24 bg-[#0A0A0A] overflow-hidden">
            {/* Subtle Background Pattern/Gradient */}

            <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-32">
                    {/* Brand Pillar */}
                    <div className="col-span-1 lg:col-span-1">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-2xl font-sans font-light tracking-[0.3em] uppercase mb-10 text-white"
                        >
                            Nivara <span className="text-primary italic font-serif lowercase tracking-normal text-3xl">designs</span>
                        </motion.h2>
                        <p className="text-white/40 text-[10px] md:text-[11px] leading-[2] tracking-[0.2em] uppercase font-sans mb-10 max-w-xs">
                            Crafting architectural narratives that transcend time. Our practice is an intersection of art, history, and the future of living.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
                                <motion.a
                                    key={idx}
                                    href="#"
                                    whileHover={{ y: -5, color: "#D4AF37" }}
                                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/50 transition-all duration-500 hover:border-primary/50"
                                >
                                    <Icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Nav Pillar */}
                    <div>
                        <h3 className="text-primary text-[10px] tracking-[0.5em] uppercase mb-10 font-bold opacity-80">The Archive</h3>
                        <ul className="space-y-4">
                            {["Selected Works", "Philosophy", "Services", "The Journal", "Atelier"].map((item) => (
                                <li key={item} className="group flex items-center gap-3">
                                    <div className="w-1 h-1 bg-primary scale-0 group-hover:scale-100 transition-transform duration-500" />
                                    <a href="#" className="text-white/60 group-hover:text-primary transition-colors text-[10px] tracking-[0.3em] uppercase font-medium">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Pillar */}
                    <div>
                        <h3 className="text-primary text-[10px] tracking-[0.5em] uppercase mb-10 font-bold opacity-80">Inquiry</h3>
                        <ul className="space-y-6">
                            <li className="flex flex-col gap-2">
                                <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase">Private Line</span>
                                <a href="tel:+18009992872" className="text-white/80 text-[11px] tracking-[0.2em] uppercase hover:text-primary transition-colors">+1 (800) 999-NIVARA</a>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase">Digital Post</span>
                                <a href="mailto:concierge@aura.design" className="text-white/80 text-[11px] tracking-[0.2em] uppercase hover:text-primary transition-colors">concierge@nivara.designs</a>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase">Headquarters</span>
                                <span className="text-white/80 text-[11px] tracking-[0.2em] uppercase leading-relaxed">
                                    1200 Avenue of the Americas,<br />
                                    New York, NY 10036
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Journal Pillar */}
                    <div>
                        <h3 className="text-primary text-[10px] tracking-[0.5em] uppercase mb-10 font-bold opacity-80">Mailing List</h3>
                        <p className="text-white/40 text-[10px] leading-relaxed tracking-[0.2em] uppercase font-sans mb-8">
                            Receive infrequent updates on restricted projects and design insights.
                        </p>
                        <div className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL"
                                className="bg-transparent border-b border-white/10 py-3 text-[10px] tracking-[0.3em] uppercase focus:outline-none focus:border-primary w-full text-white placeholder:text-white/20 transition-colors"
                            />
                            <button className="text-primary text-[10px] tracking-[0.4em] uppercase py-2 text-left hover:translate-x-4 transition-transform font-bold group">
                                Subscribe <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-12">
                        <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase italic">
                            &copy; {currentYear} Nivara Interior Design
                        </p>
                        <div className="hidden md:flex gap-8">
                            <a href="#" className="text-white/20 text-[9px] tracking-[0.3em] uppercase hover:text-primary transition-colors">Privacy</a>
                            <a href="#" className="text-white/20 text-[9px] tracking-[0.3em] uppercase hover:text-primary transition-colors">Terms</a>
                        </div>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-4 text-white/40 hover:text-primary transition-colors"
                    >
                        <span className="text-[9px] tracking-[0.5em] uppercase font-bold">Back to Home</span>
                        <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all duration-500">
                            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-500" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Extreme Bottom Decorative Element */}
            <div className="absolute bottom-0 h-[14vw] left-0 w-full overflow-hidden leading-none opacity-[0.02] select-none pointer-events-none text-center">
                <span className="text-[20vw] font-sans font-bold uppercase tracking-tighter text-white inline-block whitespace-nowrap">
                    NIVARA
                </span>
            </div>
        </footer>
    );
}
