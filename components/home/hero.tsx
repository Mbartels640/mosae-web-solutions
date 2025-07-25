"use client"

import { motion } from "framer-motion"
import { fadeInLeft, staggerContainer } from "@/lib/framer-variants"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"

export function Hero() {
    const { lang } = useLanguage()
    const currentContent = content[lang]

    return (
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left side - Content */}
                    <motion.div
                        className="flex flex-col justify-center space-y-6 relative"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        {/* Floating decorative circles - now behind text with z-0 */}
                        <motion.div
                            className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-mosae-orange/20 to-mosae-orange/30 backdrop-blur-sm border border-mosae-orange/20 z-0"
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                                y: [-10, 10, -10],
                                x: [-5, 5, -5],
                            }}
                            transition={{
                                opacity: { delay: 1.5, duration: 0.8 },
                                scale: { delay: 1.5, duration: 0.8 },
                                rotate: { delay: 1.5, duration: 0.8 },
                                y: {
                                    delay: 2.5,
                                    duration: 8,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                },
                                x: {
                                    delay: 2.5,
                                    duration: 8,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                },
                            }}
                        />
                        <motion.div
                            className="absolute top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-mosae-orange/15 to-mosae-orange/25 backdrop-blur-sm border border-mosae-orange/20 z-0"
                            initial={{ opacity: 0, scale: 0, rotate: 180 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                                y: [15, -15, 15],
                                x: [8, -8, 8],
                            }}
                            transition={{
                                opacity: { delay: 2, duration: 0.8 },
                                scale: { delay: 2, duration: 0.8 },
                                rotate: { delay: 2, duration: 0.8 },
                                y: {
                                    delay: 3,
                                    duration: 10,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                },
                                x: {
                                    delay: 3,
                                    duration: 10,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                },
                            }}
                        />

                        {/* Additional floating particles - also behind text */}
                        <motion.div
                            className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-mosae-orange/40 z-0"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.4, 0.8, 0.4],
                                scale: [0, 0.8, 1.2, 0.8],
                                y: [-20, 20, -20],
                            }}
                            transition={{
                                opacity: { delay: 2.5, duration: 0.5 },
                                scale: { delay: 2.5, duration: 0.5 },
                                y: {
                                    delay: 3.5,
                                    duration: 6,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                },
                            }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-mosae-orange/50 z-0"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.3, 0.7, 0.3],
                                scale: [0, 0.6, 1, 0.6],
                                y: [10, -10, 10],
                                x: [-5, 5, -5],
                            }}
                            transition={{
                                opacity: { delay: 3, duration: 0.5 },
                                scale: { delay: 3, duration: 0.5 },
                                y: {
                                    delay: 4,
                                    duration: 7,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                },
                                x: {
                                    delay: 4,
                                    duration: 7,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                },
                            }}
                        />

                        {/* Text content - now with higher z-index */}
                        <div className="space-y-4 relative z-10">
                            <motion.h1
                                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-foreground via-foreground/80 to-mosae-orange bg-clip-text text-transparent mosae-heading"
                                variants={fadeInLeft}
                            >
                                {currentContent.hero.title}
                            </motion.h1>
                            <motion.p
                                className="text-lg text-muted-foreground md:text-xl mosae-body"
                                variants={fadeInLeft}
                                transition={{ delay: 0.2 }}
                            >
                                {currentContent.hero.subtitle}
                            </motion.p>
                            <motion.p className="text-base text-muted-foreground mosae-body" variants={fadeInLeft} transition={{ delay: 0.3 }}>
                                {currentContent.hero.body}
                            </motion.p>
                        </div>
                        <motion.div
                            className="flex flex-col gap-2 min-[400px]:flex-row relative z-10"
                            variants={fadeInLeft}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-mosae-orange to-mosae-red hover:from-mosae-red hover:to-red-800 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 border-0"
                                >
                                    <Link href="#contact">{currentContent.hero.cta}</Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Image */}
                    <motion.div
                        className="flex justify-center lg:justify-end relative z-10"
                        initial={{ opacity: 0, x: 60, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        {/* Background glow for image */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-mosae-orange/10 to-transparent rounded-3xl blur-3xl"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 0.3, 0.6, 0.3],
                                scale: [0.8, 1.1, 0.8],
                            }}
                            transition={{
                                opacity: { delay: 1, duration: 1 },
                                scale: {
                                    delay: 2,
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                },
                            }}
                        />

                        <motion.div
                            className="relative w-full max-w-2xl"
                            whileHover={{ scale: 1.02, rotateY: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1631107452534-b8f9868a8b20?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Modern web development workspace"
                                width={800}
                                height={600}
                                className="rounded-3xl object-cover shadow-2xl w-full h-auto relative z-10"
                                unoptimized={true}
                            />

                            {/* Image border glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-mosae-orange/20 via-transparent to-mosae-orange/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Background ambient circles */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-radial from-mosae-orange/5 to-transparent dark:from-mosae-orange/10 blur-3xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: [0, 0.3, 0.6, 0.3],
                    scale: [0.5, 1, 1.2, 1],
                }}
                transition={{
                    opacity: { delay: 3.5, duration: 1 },
                    scale: {
                        delay: 4,
                        duration: 12,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    },
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-radial from-mosae-orange/5 to-transparent dark:from-mosae-orange/10 blur-2xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: [0, 0.2, 0.5, 0.2],
                    scale: [0.5, 1.2, 1, 1.2],
                }}
                transition={{
                    opacity: { delay: 4, duration: 1 },
                    scale: {
                        delay: 4.5,
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    },
                }}
            />
        </section>
    )
}