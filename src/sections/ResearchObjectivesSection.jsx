import { Card, CardContent } from "../components/ui/card"
import { SectionHeading } from "../components/SectionHeading"
import { ShieldAlert, Users, Network, Search } from "lucide-react"

const iconMap = {
    ShieldAlert,
    Users,
    Network,
    Search
}

export function ResearchObjectivesSection({ researchObjectives }) {
    return (
        <section id="research-objectives" className="bg-[var(--brand-parchment-2)] py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading title={researchObjectives.title} centered />
                <div className="relative mx-auto mt-14 max-w-4xl">
                    <div className="absolute left-6 top-0 h-full w-px bg-[rgba(28,59,79,0.18)] md:left-1/2 md:-translate-x-1/2" />
                    <div className="space-y-10">
                        {researchObjectives.items.map((item, index) => {
                            const Icon = iconMap[item.icon] ?? Search
                            const reverse = index % 2 === 1

                            return (
                                <div
                                    key={item.title}
                                    className={`relative flex flex-col gap-4 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
                                >
                                    <div className="relative z-10 flex md:w-1/2 md:justify-center">
                                        <div className="flex size-12 items-center justify-center rounded-full bg-[var(--brand-dark-cyan)] text-[var(--brand-parchment-2)] shadow-lg shadow-[rgba(45,134,132,0.22)]">
                                            <Icon className="size-5" />
                                        </div>
                                    </div>
                                    <Card className="md:w-1/2">
                                        <CardContent className="pt-6">
                                            <h3 className="text-xl font-semibold text-[var(--brand-charcoal-blue)]">{item.title}</h3>
                                            <p className="mt-3 text-sm leading-7 text-[rgba(36,71,89,0.82)]">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
