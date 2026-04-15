import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { SectionHeading } from "../components/SectionHeading"
import emoback3 from "../assets/emoback-3.jpg"

export function ContactSection({ contact }) {
    return (
        <section id="contact" className="relative bg-[var(--brand-charcoal-blue)] py-24 text-[var(--brand-parchment-2)] sm:py-32 overflow-hidden shadow-[inset_0px_20px_40px_rgba(0,0,0,0.2)]">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-bottom bg-no-repeat opacity-40 mix-blend-screen"
                style={{ backgroundImage: `url(${emoback3})` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(28,59,79,1),rgba(28,59,79,0.8)_20%,rgba(36,71,89,0.7)_80%,rgba(28,59,79,0.95))] opacity-80 mix-blend-multiply" />

            <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
                <div>
                    <SectionHeading
                        eyebrow="Contact"
                        title={contact.title}
                        description={contact.description}
                        tone="light"
                    />
                    <Button
                        asChild
                        size="lg"
                        className="mt-8 rounded-full bg-[var(--brand-dark-cyan)] px-6 text-[var(--brand-parchment-2)] hover:bg-[var(--brand-charcoal-blue-2)]"
                    >
                        <a href={contact.cta.href}>{contact.cta.label}</a>
                    </Button>
                </div>
                <Card className="border-[rgba(240,236,231,0.12)] bg-[rgba(240,236,231,0.08)] text-[var(--brand-parchment-2)] backdrop-blur">
                    <CardContent className="space-y-5 pt-6">
                        {contact.details.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block rounded-2xl border border-[rgba(240,236,231,0.12)] bg-[rgba(28,59,79,0.34)] px-5 py-4 transition hover:border-[rgba(45,134,132,0.4)] hover:bg-[rgba(28,59,79,0.48)]"
                            >
                                <p className="text-xs uppercase tracking-[0.18em] text-[rgba(240,236,231,0.54)]">{item.label}</p>
                                <p className="mt-2 text-lg font-medium text-[var(--brand-parchment-2)]">{item.value}</p>
                            </a>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
