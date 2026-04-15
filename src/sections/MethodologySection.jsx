import { Card, CardContent } from "../components/ui/card"
import { SectionHeading } from "../components/SectionHeading"
import { Shield, Activity, Heart, Users } from "lucide-react"

const iconMap = {
    Shield,
    Activity,
    Heart,
    Users
}

export function MethodologySection({ methodology }) {
    return (
        <section id="methodology" className="bg-[var(--brand-parchment)] py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading title={methodology.title} description={methodology.intro} />

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {methodology.services.map((item) => {
                        const Icon = iconMap[item.icon] ?? Shield

                        return (
                            <Card
                                key={item.title}
                                className="border-[rgba(28,59,79,0.08)] bg-[var(--brand-parchment-2)] shadow-lg shadow-[rgba(28,59,79,0.06)]"
                            >
                                <CardContent className="pt-6">
                                    
                                    <div className="mb-5 inline-flex rounded-2xl bg-[rgba(45,134,132,0.12)] p-3 text-[var(--brand-dark-cyan)]">
                                        <Icon className="size-6" />
                                    </div>

                                    <h3 className="text-xl font-semibold text-[var(--brand-charcoal-blue)]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-dark-cyan)]">
                                        {item.subtitle}
                                    </p>

                                    <p className="mt-4 text-sm leading-7 text-[rgba(36,71,89,0.82)]">
                                        {item.description}
                                    </p>

                                    <div className="mt-6 space-y-3">
                                        {item.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="rounded-2xl bg-[rgba(28,59,79,0.06)] px-4 py-4 text-sm text-[var(--brand-charcoal-blue-2)]"
                                            >
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-sm font-semibold text-[var(--brand-charcoal-blue)]">
                                            {item.extrasTitle}
                                        </p>

                                        <div className="mt-3 space-y-3">
                                            {item.extras.map((extra) => (
                                                <div
                                                    key={extra}
                                                    className="rounded-2xl bg-[rgba(45,134,132,0.1)] px-4 py-4 text-sm text-[var(--brand-charcoal-blue-2)]"
                                                >
                                                    {extra}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {item.limitation ? (
                                        <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-7 text-amber-900">
                                            {item.limitation}
                                        </p>
                                    ) : null}

                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}