"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section id="work" className="relative h-screen w-full overflow-hidden flex items-center justify-center">

            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2600&auto=format&fit=crop"
                    alt="Luxury Interior Full Page"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Cinematic Overlay - darker on top/bottom for nav/text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1400px] w-full px-6 md:px-12 lg:px-24 text-center text-white pt-20 md:pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.98, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-sans font-light tracking-tight md:tracking-[0.05em] uppercase mb-8 md:mb-10 leading-[1.1]"
                    >
                        Grandeur <br />
                        <span className="italic font-serif normal-case tracking-normal text-primary">Redefined</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-white/70 text-xs md:text-sm lg:text-base tracking-[0.3em] uppercase mb-12 md:mb-16 max-w-xl md:max-w-2xl font-sans font-medium px-4"
                    >
                        Bespoke environments for the discerning modernist.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <Link href="/#projects">
                            <Button
                                variant="outline"
                                className="px-10 md:px-14 py-6 md:py-8 text-black border-white/20 hover:bg-white hover:text-primary transition-all duration-500 text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase rounded-none border-[1px] backdrop-blur-md"
                            >
                                Explore Portfolio
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
