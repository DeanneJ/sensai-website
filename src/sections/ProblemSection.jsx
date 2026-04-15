import { motion } from "framer-motion"
import { XCircle, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

/* Animation Variants */
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
}

const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

export function ProblemSection({ problem, solution }) {
    return (
        <section id="problem" className="relative bg-[var(--brand-parchment-2)] py-24 sm:py-32 overflow-hidden">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid gap-8 lg:grid-cols-2 lg:gap-12"
                >
                    {/* The Problem Card */}
                    <motion.div variants={cardVariants} className="h-full">
                        <Card className="flex flex-col h-full border-[rgba(28,59,79,0.08)] bg-[var(--brand-parchment)] shadow-xl shadow-[rgba(28,59,79,0.04)] transition-all hover:shadow-2xl hover:-translate-y-1 duration-500">
                            <CardHeader className="pb-4 pt-8 px-6 sm:px-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-xl bg-red-500/10 text-red-600 border border-red-500/20 shadow-sm">
                                        <AlertTriangle className="size-6" />
                                    </div>
                                    <CardTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--brand-charcoal-blue)]">
                                        {problem.title}
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col px-6 sm:px-8 pb-8">
                                <motion.ul className="space-y-3.5 mb-8 flex-1" variants={containerVariants}>
                                    {problem.items.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            variants={itemVariants}
                                            className="flex items-start gap-3.5 rounded-2xl bg-white/40 p-4 transition-colors hover:bg-white/70 border border-white/60 hover:border-red-500/15 group"
                                        >
                                            <XCircle className="mt-0.5 size-5 shrink-0 text-red-500/70 transition-transform group-hover:scale-110" />
                                            <span className="text-[15px] leading-relaxed text-[var(--brand-charcoal-blue-2)] font-medium">
                                                {item}
                                            </span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                                {problem.summary && (
                                    <motion.div variants={itemVariants} className="mt-auto">
                                        <p className="rounded-xl bg-red-500/5 p-4.5 text-[15px] font-semibold italic leading-relaxed text-[var(--brand-charcoal-blue)] border-l-4 border-red-400/80 shadow-sm">
                                            {problem.summary}
                                        </p>
                                    </motion.div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Our Solution Card */}
                    <motion.div variants={cardVariants} className="h-full">
                        <Card className="relative flex flex-col h-full overflow-hidden border border-transparent bg-gradient-to-br from-[var(--brand-charcoal-blue)] via-[var(--brand-charcoal-blue-2)] to-[var(--brand-dark-cyan)] shadow-2xl shadow-[var(--brand-charcoal-blue)]/20 transition-all hover:shadow-[var(--brand-dark-cyan)]/30 hover:-translate-y-1 duration-500 group">

                            {/* Decorative background glows */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 size-64 rounded-full bg-white/5 blur-3xl pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50" />
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-72 rounded-full bg-[var(--brand-dark-cyan)]/50 blur-3xl pointer-events-none mix-blend-screen" />

                            <CardHeader className="pb-4 pt-8 px-6 sm:px-8 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-xl bg-white/10 text-white backdrop-blur-md shadow-sm border border-white/20">
                                        <Lightbulb className="size-6" />
                                    </div>
                                    <CardTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
                                        {solution.title}
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col px-6 sm:px-8 pb-8 relative z-10">
                                <motion.ul className="space-y-3.5 flex-1" variants={containerVariants}>
                                    {solution.items.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            variants={itemVariants}
                                            className="flex items-start gap-3.5 rounded-2xl bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10 border border-white/5 hover:border-white/20 shadow-sm group/item"
                                        >
                                            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#a3e635] drop-shadow-[0_0_8px_rgba(163,230,53,0.4)] transition-transform group-hover/item:scale-110 group-hover/item:rotate-3" />
                                            <span className="text-[15px] leading-relaxed text-[var(--brand-parchment-2)] font-medium">
                                                {item}
                                            </span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}
