import { Card, CardContent } from "../components/ui/card"
import { SectionHeading } from "../components/SectionHeading"
import { MonitorPlay, Map, ChartNoAxesCombined, Database, Network } from "lucide-react"

const iconMap = {
    MonitorPlay,
    Map,
    ChartNoAxesCombined,
    Database,
    Network
}

export function ResearchGapSection({ researchGap }) {
    return (
        <section id="research-gap" className="bg-[var(--brand-parchment)] py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title={researchGap.title}
                   description="Social media platforms have advanced AI tools, but they still lack a unified system that combines safety, behavior analysis, and meaningful user interaction."
                />
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {researchGap.items.map((item) => {
                        const Icon = iconMap[item.icon] ?? Network

                        return (
                            <Card
                                key={item.title}
                                className="group min-h-[20rem] border-[rgba(28,59,79,0.08)] bg-[var(--brand-parchment-2)] transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-charcoal-blue)] hover:bg-[var(--brand-charcoal-blue)] hover:text-[var(--brand-parchment-2)]"
                            >
                                <CardContent className="flex h-full flex-col items-center justify-center px-8 py-10 text-center">
                                    <div className="mb-6 rounded-full bg-[rgba(28,59,79,0.06)] p-4 text-[var(--brand-charcoal-blue)] transition group-hover:bg-[rgba(240,236,231,0.12)] group-hover:text-[var(--brand-parchment)]">
                                        <Icon className="size-8" />
                                    </div>
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                    <p className="mt-4 text-sm leading-7 text-[rgba(36,71,89,0.82)] transition group-hover:text-[rgba(240,236,231,0.82)]">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
