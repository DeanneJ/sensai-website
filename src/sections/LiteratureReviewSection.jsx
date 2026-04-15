import { Card, CardContent } from "../components/ui/card"
import { SectionHeading } from "../components/SectionHeading"

export function LiteratureReviewSection({ literatureReview }) {
    return (
        <section id="literature-review" className="bg-white py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading title={literatureReview.title} />
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    <Card className="border-slate-200 bg-white">
                        <CardContent className="pt-6">
                            <h3 className="text-xl font-semibold text-slate-950">
    Existing social media systems
</h3>
                            <div className="mt-6 space-y-3">
                                {literatureReview.existingSystems.map((item) => (
                                    <div key={item} className="rounded-2xl bg-slate-100 px-4 py-4 text-sm text-slate-700">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-slate-200 bg-white">
                        <CardContent className="pt-6">
                            <h3 className="text-xl font-semibold text-slate-950">
    AI-based social media systems
</h3>
                            <div className="mt-6 space-y-3">
                                {literatureReview.knowledgeGraphSystems.map((item) => (
                                    <div key={item} className="rounded-2xl bg-cyan-50 px-4 py-4 text-sm text-slate-700">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-sm leading-7 text-slate-600">{literatureReview.summary}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
