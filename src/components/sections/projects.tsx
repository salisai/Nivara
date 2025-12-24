"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        name: "Modern Minimalist Kitchen",
        location: "Zurich, Switzerland",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000",
    },
    {
        name: "The Glass Pavilion",
        location: "Malibu, California",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000",
    },
    {
        name: "Brutalist Sanctuary",
        location: "Kyoto, Japan",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
    },
    {
        name: "Neo-Classical Loft",
        location: "Milan, Italy",
        image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2000",
    },
    {
        name: "Monochrome Penthouse",
        location: "New York, USA",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000",
    },
    {
        name: "The Obsidian Villa",
        location: "Reykjavik, Iceland",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000",
    },
];

export function Projects() {
    return (
        <section className="py-24 md:py-32 lg:py-48 bg-background">
            <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24">
                <div className="flex flex-col justify-between mb-16 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-primary text-sm tracking-[0.4em] uppercase"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-foreground/50 text-sm tracking-[0.2em] uppercase max-w-sm"
                    >
                        A curated selection of our most prestigious architectural interventions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-square overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
                                <div className="absolute inset-4 border border-primary/30" />
                                <h3 className="text-foreground text-2xl font-sans font-light tracking-wide mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-primary text-xs tracking-[0.3em] uppercase">
                                    {project.location}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
