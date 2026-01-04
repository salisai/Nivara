"use client";

import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Contact Hero */}
            <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop"
                        alt="Contact Nivara"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-sans font-light tracking-widest uppercase mb-4"
                    >
                        Contact Us
                    </motion.h1>
                </div>
            </section>

            <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-24">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-2xl md:text-3xl font-sans font-light uppercase tracking-tight mb-12">Get in Touch</h1>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-primary text-xs tracking-[0.4em] uppercase mb-4">Studio</h3>
                                <p className="text-foreground text-lg font-light tracking-wide">
                                    1200 Avenue of the Americas<br />
                                    New York, NY 10036
                                </p>
                            </div>

                            <div>
                                <h3 className="text-primary text-xs tracking-[0.4em] uppercase mb-4">Contact</h3>
                                <p className="text-foreground text-lg font-light tracking-wide mb-2">
                                    <a href="tel:+18009992872" className="hover:text-primary transition-colors">+1 (800) 999-NIVARA</a>
                                </p>
                                <p className="text-foreground text-lg font-light tracking-wide">
                                    <a href="mailto:concierge@nivara.design" className="hover:text-primary transition-colors">concierge@nivara.design</a>
                                </p>
                            </div>

                            <div>
                                <h3 className="text-primary text-xs tracking-[0.4em] uppercase mb-4">Press</h3>
                                <p className="text-foreground text-lg font-light tracking-wide">
                                    <a href="mailto:press@nivara.design" className="hover:text-primary transition-colors">press@nivara.design</a>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#F5F5F5] dark:bg-white/5 p-10 md:p-16"
                    >
                        <h3 className="text-xl font-sans uppercase tracking-widest mb-8">Inquiry Form</h3>
                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">First Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Last Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-primary transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Email Address</label>
                                <input type="email" className="w-full bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-primary transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Subject</label>
                                <select className="w-full bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-primary transition-colors text-foreground/80 rounded-none">
                                    <option>Residential Inquiry</option>
                                    <option>Commercial Inquiry</option>
                                    <option>Press & Media</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Message</label>
                                <textarea rows={4} className="w-full bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                            </div>

                            <Button className="w-full bg-black text-white hover:bg-primary hover:text-white rounded-none uppercase tracking-[0.2em] py-6 text-xs transition-all duration-500">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
