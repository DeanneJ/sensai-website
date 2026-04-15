import { Card, CardContent } from "../components/ui/card"
import { SectionHeading } from "../components/SectionHeading"

export function LiteratureSurveySection({ literatureSurvey }) {
    return (
        <section id="literature-survey" className="bg-[var(--brand-parchment-2)] py-24 sm:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
                <div>
                    <SectionHeading title={literatureSurvey.title} />
                    <div className="mt-8 space-y-5 text-base leading-8 text-[rgba(36,71,89,0.82)]">
                        {literatureSurvey.body.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <Card className="overflow-hidden border-[rgba(28,59,79,0.08)] bg-[var(--brand-parchment)] shadow-xl shadow-[rgba(28,59,79,0.08)]">
                    <div className="border-b border-[rgba(28,59,79,0.08)] bg-[linear-gradient(135deg,var(--brand-charcoal-blue),var(--brand-charcoal-blue-2)_45%,var(--brand-dark-cyan))] p-8 text-[var(--brand-parchment-2)]">
                        <p className="text-sm uppercase tracking-[0.24em] text-[rgba(240,236,231,0.82)]">Current limitations</p>
                        <h3 className="mt-4 text-3xl font-semibold">Where existing work still falls short</h3>
                    </div>
                    <CardContent className="space-y-4 pt-8">
                        {literatureSurvey.gaps.map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-[rgba(28,59,79,0.08)] bg-[var(--brand-parchment-2)] px-4 py-4 text-sm font-medium text-[var(--brand-charcoal-blue-2)]"
                            >
                                {item}
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
