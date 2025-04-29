"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/globals.css";

export default function Home() {
    const [showCV, setShowCV] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    // Handle escape key press to close modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent): void => {
            if (e.key === "Escape" && showCV) {
            setShowCV(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        // If modal is open, prevent body scrolling
        if (showCV) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [showCV]);

    // Handle clicking outside the modal to close it
    const handleOutsideClick = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setShowCV(false);
        }
    };

    return (
        <div className="flex flex-col max-h-screen">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Muhammad Adhil</h1>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                                <p className="text-xl text-muted-foreground md:text-2xl">
                                    <AnimatedText text="MERN Stack Developer" />
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="max-w-[700px] text-muted-foreground md:text-xl"
                            >
                                <p>I'm a passionate full-stack developer specializing in building robust web applications using MongoDB, Express.js, React, and Node.js.</p>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="space-x-4">
                                <Button className="group" onClick={() => setShowCV(true)}>
                                    Preview My CV
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </motion.div>

                            {/* CV Modal */}
                            <AnimatePresence>
                                {showCV && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
                                        onClick={handleOutsideClick}
                                    >
                                        <motion.div
                                            ref={modalRef}
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.9, opacity: 0 }}
                                            transition={{ type: "spring", damping: 15 }}
                                            className="relative bg-background rounded-lg shadow-lg w-full max-w-5xl overflow-hidden"
                                        >
                                            <div className="flex items-center justify-end p-4 border-b">
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setShowCV(false);
                                                        }}
                                                        className="rounded-full h-8 w-8"
                                                    >
                                                        <X className="h-4 w-4" />
                                                        <span className="sr-only">Close</span>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="p-1 md:p-2 bg-muted">
                                                <iframe src="cv/cv_muhammdadhil_br.pdf" className="w-full h-[70vh] border rounded-md bg-white" title="CV Preview"></iframe>
                                            </div>
                                            <div className="p-4 border-t flex justify-end">
                                                <Button
                                                    variant="outline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setShowCV(false);
                                                    }}
                                                >
                                                    Close
                                                </Button>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
