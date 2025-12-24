"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
    return (
        <section className="py-24 md:py-32 lg:py-48 bg-gradient-to-br from-[#FAF7F0] via-[#F5F1E8] to-[#D4AF37]/20 flex items-center justify-center">
            <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-foreground mb-8 leading-tight"
                >
                    Transform Your Space
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-foreground/70 text-lg md:text-xl font-sans tracking-wide mb-12 max-w-2xl mx-auto"
                >
                    Embark on a journey of architectural excellence. Schedule a private consultation with our master designers.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Button
                        variant="outline"
                        className="px-12 py-8 text-primary border-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm md:text-base tracking-[0.2em] uppercase rounded-none border-2"
                    >
                        Schedule Consultation
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
