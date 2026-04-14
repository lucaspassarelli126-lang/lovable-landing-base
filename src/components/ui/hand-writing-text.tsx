"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HandWrittenTitleProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

function HandWrittenTitle({
    title = "Hand Written",
    subtitle = "Optional subtitle",
    className,
}: HandWrittenTitleProps) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 0.5 },
            },
        },
    };

    return (
        <div className={cn("relative w-full max-w-4xl py-8", className)}>
            <div className="absolute inset-0 pointer-events-none">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 600"
                    initial="hidden"
                    animate="visible"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                >
                    <title>Handwritten Path</title>
                    <motion.path
                        d="M 950 90 
                           C 1250 300, 1050 480, 600 520
                           C 250 520, 150 480, 150 300
                           C 150 120, 350 80, 600 80
                           C 850 80, 950 180, 950 180"
                        fill="none"
                        strokeWidth="12"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={draw}
                        className="text-primary opacity-80"
                    />
                </motion.svg>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center lg:items-start lg:justify-start">
                <motion.h2
                    className="text-2xl md:text-3xl text-foreground tracking-tighter flex items-center gap-2 mb-2 lg:text-left text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {title}
                </motion.h2>
                {subtitle && (
                    <motion.p
                        className="text-lg text-muted-foreground lg:text-left text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
}

export { HandWrittenTitle }
