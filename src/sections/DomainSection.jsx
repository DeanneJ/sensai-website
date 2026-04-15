import { Card, CardContent } from "../components/ui/card"
import { SectionHeading } from "../components/SectionHeading"
import { motion } from "framer-motion"

export function DomainSection({ domain }) {
    return (
        <section id="domain" className="bg-[var(--brand-parchment)] py-24 sm:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
                <div>
                    <SectionHeading title={domain.title} />
                    <p className="mt-8 text-base leading-8 text-[rgba(36,71,89,0.82)]">{domain.intro}</p>
                    <p className="mt-6 text-base leading-8 text-[rgba(36,71,89,0.82)]">{domain.summary}</p>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                <Card className="overflow-hidden border-[rgba(28,59,79,0.08)] bg-[var(--brand-parchment-2)] shadow-xl shadow-[rgba(28,59,79,0.08)] h-full">
                    <div className="border-b border-[rgba(28,59,79,0.08)] bg-[linear-gradient(135deg,var(--brand-charcoal-blue),var(--brand-charcoal-blue-2)_45%,var(--brand-dark-cyan))] p-8 text-[var(--brand-parchment-2)]">
                       <p className="text-sm uppercase tracking-[0.24em] text-[rgba(240,236,231,0.82)]">
    Modern social media suffers from
</p>
<h3 className="mt-4 text-3xl font-semibold">
    Unsafe and fragmented systems
</h3>
                    </div>
                    <CardContent className="space-y-4 pt-8">
                        {domain.sources.map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-[rgba(28,59,79,0.08)] bg-[var(--brand-parchment)] px-4 py-4 text-sm font-medium text-[var(--brand-charcoal-blue-2)]"
                            >
                                {item}
                            </div>
                        ))}
                    </CardContent>
                </Card>
                </motion.div>
            </div>
        </section>
    )
}
