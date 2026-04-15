import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { SectionHeading } from "../components/SectionHeading"
import { SiCanva } from "react-icons/si"

export function PresentationsSection({ presentations }) {
    return (
        <section id="presentations" className="bg-[var(--brand-parchment-2)] py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading title={presentations.title} />
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {presentations.items.map((item) => (
                        <Card key={item.label} className="flex h-full flex-col border-[rgba(28,59,79,0.08)] bg-[var(--brand-parchment)] transition-all hover:-translate-y-1 hover:shadow-md">
                            <CardContent className="flex flex-1 flex-col p-4">
                                <div className="flex items-start gap-2.5">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00C4CC] shadow-sm">
                                        <SiCanva className="text-lg text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="truncate text-base font-semibold leading-tight tracking-tight text-[var(--brand-charcoal-blue)]" title={item.label}>
                                            {item.label}
                                        </h3>
                                        <p className="mt-1 text-[0.75rem] text-[rgba(36,71,89,0.82)]">
                                            {item.date && `Presented on ${item.date}`}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-auto pt-4">
                                    <div className="flex items-center justify-between border-t border-[rgba(28,59,79,0.06)] pt-3">
                                        <span className="text-xs font-medium text-[rgba(36,71,89,0.62)]">{item.type}</span>
                                        <Button asChild variant="outline" size="sm" className="h-7 rounded-full border-[rgba(28,59,79,0.1)] px-3 text-xs text-[var(--brand-charcoal-blue)] hover:bg-[var(--brand-charcoal-blue)] hover:text-white">
                                            <a href={item.href} target="_blank" rel="noopener noreferrer">View</a>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
