"use client";

import { motion } from "framer-motion";

export function Vision() {
    return (
        <section id="philosophy" className="py-4 md:py-16 lg:py-24 bg-background flex items-center justify-center">
            <div className="max-w-[1400px] w-full px-4 md:px-12 lg:px-24">
                <div className="max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-primary text-sm tracking-[0.4em] uppercase mb-8"
                    >
                        Design Philosophy
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-foreground mb-12 leading-tight"
                    >
                        Transforming spaces into timeless masterpieces of light and form.
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-foreground/70 text-lg md:text-xl font-sans leading-relaxed max-w-2xl tracking-wide"
                    >
                        We believe that true luxury lies in the unseen details. Our vision is to create environments that breathe, inspire, and elevate the human experience through meticulous craftsmanship and avant-garde architectural principles.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
