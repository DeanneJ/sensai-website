import { ArrowRight, MessageSquare, Mic, Globe, Layers } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import heroBackgroundImageSecondary from "../assets/heroo-back.jpg"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function HeroSection({ hero, site }) {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-[var(--background)] pt-32 text-[var(--foreground)]"
        >
            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBackgroundImageSecondary})` }}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 0.92, scale: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/68 via-black/50 to-black/36" />
            <motion.div
                className="absolute -top-16 left-0 h-56 w-56 rounded-full bg-[var(--primary)]/14 blur-3xl"
                animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

            <motion.div
                className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-3xl rounded-3xl bg-white/68 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.25)] backdrop-blur-md ring-1 ring-white/30 sm:p-8">
                    <motion.div variants={itemVariants}>
                        <Badge variant="outline" className="border-white/35 bg-white/35 text-[var(--foreground)] backdrop-blur">
                            {hero.eyebrow}
                        </Badge>
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
                        {hero.title}
                    </motion.h1>
                    <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
                        {hero.subtitle}
                    </motion.p>
                    <motion.p variants={itemVariants} className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
                        {site.description}
                    </motion.p>
                    <motion.div variants={itemVariants} className="mt-9 flex flex-col gap-4 sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full bg-[var(--primary)] px-6 text-white hover:bg-[var(--secondary)]"
                        >
                            <a href={hero.primaryCta.href}>
                                {hero.primaryCta.label}
                                <ArrowRight className="size-4" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="rounded-full border-white/40 bg-white/45 px-6 text-[var(--foreground)] backdrop-blur hover:bg-white/60 hover:text-[var(--foreground)]"
                        >
                            <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
                        </Button>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="flex items-center">
                    <Card className="w-full overflow-hidden border-0 bg-white/58 text-[var(--foreground)] shadow-[0_14px_40px_rgba(0,0,0,0.24)] backdrop-blur-md ring-1 ring-white/30">
                        <CardHeader className="border-b border-white/30 pb-5">
                            <CardDescription className="text-[var(--muted-foreground)]">Live structure preview</CardDescription>
                            <CardTitle className="text-2xl">{site.tagline}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-5">
                            {hero.stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, x: 16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.35 + index * 0.1, duration: 0.45 }}
                                    className="flex items-center justify-between rounded-2xl border border-white/35 bg-white/55 px-4 py-4 backdrop-blur"
                                >
                                    <span className="text-sm text-[var(--muted-foreground)]">{stat.label}</span>
                                    <span className="flex items-center gap-3 text-xl font-semibold text-[var(--foreground)]">
                                        {stat.value === "Text + Voice" && (
                                            <motion.div
                                                className="flex gap-1 text-[var(--primary)]"
                                                animate={{ y: [0, -2, 0] }}
                                                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                                            >
                                                <MessageSquare className="size-5" />
                                                <Mic className="size-5" />
                                            </motion.div>
                                        )}
                                        {stat.value === "Sinhala + English" && (
                                            <motion.div
                                                animate={{ rotate: [0, 6, -6, 0] }}
                                                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                                                className="text-[var(--primary)]"
                                            >
                                                <Globe className="size-5" />
                                            </motion.div>
                                        )}
                                        {stat.value === "4" && (
                                            <motion.div
                                                animate={{ scale: [1, 1.08, 1] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                className="text-[var(--primary)]"
                                            >
                                                <Layers className="size-5" />
                                            </motion.div>
                                        )}
                                        {stat.value}
                                    </span>
                                </motion.div>
                            ))}
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>

        </section>
    )
}
