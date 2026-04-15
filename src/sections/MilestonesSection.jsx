import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { SectionHeading } from "../components/SectionHeading"
import { motion } from "framer-motion"

export function MilestonesSection({ milestones }) {
    return (
        <section id="milestones" className="bg-[var(--brand-parchment-2)] py-24 sm:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading title={milestones.title} centered />

                <div className="relative mt-16 mx-auto max-w-5xl">
                    {/* Vertical line */}
                    <div className="absolute left-[20px] top-4 bottom-4 w-[2px] rounded-full bg-gradient-to-b from-[var(--brand-dark-cyan)] via-[rgba(45,134,132,0.3)] to-[var(--brand-parchment-2)] md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-12 relative z-10">
                        {milestones.items.map((item, index) => {
                            const isEven = index % 2 === 0

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group`}
                                >
                                    <div className={`hidden md:block md:w-1/2 ${isEven ? 'order-1' : 'order-3'}`} />

                                    {/* Timeline Badge/Dot */}
                                    <div className="absolute left-[2px] md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 order-first md:order-2 z-20 flex size-10 items-center justify-center rounded-full border-4 border-[var(--brand-parchment-2)] bg-[var(--brand-dark-cyan)] text-[var(--brand-parchment-2)] shadow-[0_0_15px_rgba(45,134,132,0.4)] transition-all duration-500 group-hover:scale-125 group-hover:bg-[var(--brand-charcoal-blue)]">
                                        <span className="text-[11px] font-bold tracking-widest">{item.period}</span>
                                    </div>

                                    {/* Content Container */}
                                    <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${isEven ? 'order-2 md:pr-14 lg:pr-16 md:text-right' : 'order-2 md:pl-14 lg:pl-16 text-left'}`}>
                                        <Card className={`relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-[rgba(45,134,132,0.5)] border-[rgba(28,59,79,0.08)] bg-[var(--brand-parchment)] group-hover:shadow-[0_10px_30px_-10px_rgba(45,134,132,0.2)]`}>
                                            <CardContent className={`p-6 sm:p-8 flex flex-col ${isEven ? 'md:items-end' : 'items-start'}`}>
                                                <div className={`flex flex-wrap items-center gap-2 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                                    <Badge
                                                        variant="outline"
                                                        className="border-[rgba(45,134,132,0.3)] bg-[rgba(45,134,132,0.08)] text-[var(--brand-dark-cyan)] shadow-sm uppercase tracking-widest text-[10px]"
                                                    >
                                                        Phase {item.period}
                                                    </Badge>
                                                    {item.marks && (
                                                        <Badge
                                                            variant="accent"
                                                            className="bg-[var(--brand-charcoal-blue)] text-white shadow-[0_4px_12px_rgba(28,59,79,0.3)] text-sm sm:text-base font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wide border-2 border-white/10"
                                                        >
                                                            Marks: {item.marks}
                                                        </Badge>
                                                    )}
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--brand-charcoal-blue)] mb-3">{item.title}</h3>
                                                {item.deadline && item.deadline !== "TBD" && (
                                                    <div className={`inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-lg bg-[var(--brand-dark-cyan)] text-white shadow-[0_4px_12px_rgba(45,134,132,0.35)] font-extrabold text-sm sm:text-base border-2 border-white/10 ${isEven ? 'self-end' : 'self-start'}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                                            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                                        </svg>
                                                        <span>Deadline: {item.deadline}</span>
                                                    </div>
                                                )}
                                                <p className="text-sm sm:text-base leading-7 text-[rgba(36,71,89,0.85)]">{item.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
