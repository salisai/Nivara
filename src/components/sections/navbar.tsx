"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Work", href: "/#projects" },
        { name: "Services", href: "/#services" },
        { name: "About", href: "/about" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 px-6 md:px-12 lg:px-24 py-6 ${scrolled || isOpen ? "bg-background/95 backdrop-blur-xl border-b border-primary/10 py-4" : "bg-transparent"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto flex items-center justify-between relative">
                    <Link
                        href="/"
                        className={`text-2xl font-sans font-light tracking-[0.2em] uppercase transition-colors duration-500 ${scrolled || isOpen ? "text-foreground" : "text-white"
                            }`}
                    >
                        Nivara <span className="text-primary italic font-serif lowercase tracking-normal text-3xl">designs</span>
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-[11px] tracking-[0.4em] uppercase transition-colors duration-500 font-medium ${scrolled ? "text-foreground/70" : "text-white/80"
                                    } hover:text-primary`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side: Enquire Button */}
                    <div className="hidden md:flex items-center">
                        <Link href="/contact">
                            <button className="border border-primary text-primary px-8 py-3 text-[10px] tracking-[0.4em] uppercase hover:bg-primary hover:text-white transition-all duration-500 font-bold">
                                Enquire
                            </button>
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden flex flex-col gap-1.5 items-end group z-[70] transition-colors duration-500 ${scrolled || isOpen ? "text-foreground" : "text-white"
                            }`}
                        aria-label="Toggle Menu"
                    >
                        <motion.div
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-8 h-[1px] bg-current transition-transform duration-500"
                        />
                        <motion.div
                            animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                            className="w-6 h-[1px] bg-current transition-all duration-500"
                        />
                        <motion.div
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-8 h-[1px] bg-current transition-transform duration-500"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[55] bg-background flex flex-col justify-center px-10 md:px-24"
                    >
                        {/* Background branding */}
                        <div className="absolute inset-0 opacity-[0.02] select-none pointer-events-none flex items-center justify-center overflow-hidden">
                            <span className="text-[40vw] font-sans font-bold uppercase tracking-tighter text-foreground whitespace-nowrap">
                                NIVARA
                            </span>
                        </div>

                        <div className="relative z-10 flex flex-col gap-10">
                            {navLinks.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl md:text-6xl font-sans font-light tracking-widest uppercase hover:text-primary transition-colors duration-500"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="mt-12 flex flex-col gap-6"
                            >
                                <Link
                                    href="mailto:concierge@aura.design"
                                    className="text-xs tracking-[0.3em] uppercase text-foreground/50 hover:text-primary transition-colors"
                                >
                                    concierge@nivara.design
                                </Link>
                                <div className="w-12 h-[1px] bg-primary/30" />
                                <div className="flex gap-8">
                                    {["Instagram", "LinkedIn", "Twitter"].map((social) => (
                                        <Link key={social} href="#" className="text-[10px] tracking-[0.3em] uppercase text-foreground/40 hover:text-primary transition-colors font-bold">
                                            {social}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
