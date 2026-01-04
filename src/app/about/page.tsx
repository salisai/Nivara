"use client";

import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* About Hero */}
            <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2600&auto=format&fit=crop"
                        alt="About Nivara"
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
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-xs md:text-sm tracking-[0.3em] uppercase opacity-80"
                    >
                        Est. 2024
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 md:py-32 bg-background">
                <div className="max-w-[1000px] mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-12 text-center"
                    >
                        <h2 className="text-primary text-sm tracking-[0.4em] uppercase">Who We Are</h2>
                        <p className="text-xl md:text-2xl font-sans font-light leading-relaxed text-foreground/80">
                            Nivara Designs is a multidisciplinary design studio dedicated to the art of living. We believe that space is not merely a container for existence, but a canvas for expression.
                        </p>
                        <div className="w-24 h-[1px] bg-foreground/10 mx-auto" />
                        <div className="grid md:grid-cols-2 gap-16 text-left">
                            <div>
                                <h3 className="text-lg font-sans uppercase tracking-widest mb-6">The Process</h3>
                                <p className="text-foreground/60 leading-loose font-sans">
                                    Our approach is rooted in dialogue. We listen to the whispers of the architecture and the desires of our clients to weave narratives that feel both inevitable and surprising. From concept to completion, every detail is considered, every material curated.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-sans uppercase tracking-widest mb-6">The Studio</h3>
                                <p className="text-foreground/60 leading-loose font-sans">
                                    Based in New York with satellite studios in Milan and Tokyo, our team comprises architects, interior designers, and artisans who share a passion for perfection. We collaborate with the world's finest craftsmen to bring our visions to life.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Image / Studio Shot */}
            <section className="py-12 bg-background px-4 md:px-12">
                <div className="max-w-[1400px] mx-auto relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1706074740295-d7a79c079562?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Design Studio"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                </div>
            </section>

            <Footer />
        </main>
    );
}
