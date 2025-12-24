"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    {
        title: "Residential Curation",
        description: "Tailoring private estates to the unique narrative of their inhabitants.",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000",
    },
    {
        title: "Corporate Identity",
        description: "Designing flagship environments that communicate institutional excellence.",
        image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Heritage Restoration",
        description: "Preserving historical integrity through modern architectural interventions.",
        image: "https://images.unsplash.com/photo-1664711942326-2c3351e215e6?q=80&w=817&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Bespoke Artifacts",
        description: "Custom commissioned furniture pieces, hand-crafted for singular spaces.",
        image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2000",
    },
    {
        title: "Lighting Scenography",
        description: "Sculpting atmosphere through advanced photonic layout and design.",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Interior Architecture",
        description: "Defining structural rhythm and spatial flow in landmark developments.",
        image: "https://images.unsplash.com/photo-1632583824020-937ae9564495?q=80&w=658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 md:py-32 lg:py-48 bg-background">
            <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-primary text-sm tracking-[0.5em] uppercase mb-4"
                    >
                        Strategic Expertise
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-sans font-extralight uppercase tracking-widest text-foreground"
                    >
                        Our Offerings
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-square overflow-hidden mb-8 shadow-2xl">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-8 bottom-8 h-[1px] bg-white/30 group-hover:bg-primary transition-colors duration-500" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-sans font-light tracking-[0.1em] text-foreground mb-4 uppercase">
                                {service.title}
                            </h3>
                            <p className="text-foreground/50 text-xs md:text-sm leading-relaxed tracking-[0.1em] font-sans uppercase">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
