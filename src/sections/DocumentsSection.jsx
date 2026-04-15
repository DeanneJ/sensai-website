import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { SectionHeading } from "../components/SectionHeading"
import { FaFilePdf } from "react-icons/fa6"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog"

import topicAssessmentPdf from "../assets/documents/taf/TAF_25-26J-137.pdf"
import researchPaperPdf from "../assets/documents/Research_paper.pdf"
import prop1 from "../assets/documents/proposal-reports/IT22318152.pdf"
import prop2 from "../assets/documents/proposal-reports/IT22335364.pdf"
import prop3 from "../assets/documents/proposal-reports/IT22556202.pdf"
import prop4 from "../assets/documents/proposal-reports/IT22850232.pdf"


const PROPOSALS = [
    { id: "IT22318152", href: prop1 },
    { id: "IT22335364", href: prop2 },
    { id: "IT22556202", href: prop3 },
    { id: "IT22850232", href: prop4 },
]

export function DocumentsSection({ documents }) {
    return (
        <section id="documents" className="bg-[var(--brand-parchment-2)] py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading title={documents.title} />
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {documents.items.map((item) => {
                        let resolvedHref = item.href;
                        if (item.label === "Topic Assessment") {
                            resolvedHref = topicAssessmentPdf;
                        } else if (item.label === "Research Papers") {
                            resolvedHref = researchPaperPdf;
                        }

                        return (
                            <Card key={item.label} className="flex h-full flex-col border-[rgba(28,59,79,0.08)] bg-[var(--brand-parchment)] transition-all hover:-translate-y-1 hover:shadow-md">
                                <CardContent className="flex flex-1 flex-col p-4">
                                    <div className="flex items-start gap-2.5">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center text-red-500">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path></svg>
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="truncate text-base font-semibold leading-tight tracking-tight text-[var(--brand-charcoal-blue)]" title={item.label}>
                                                {item.label}
                                            </h3>
                                            <p className="mt-1 text-[0.75rem] text-[rgba(36,71,89,0.82)]">
                                                {item.date && `Submitted on ${item.date}`}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-auto pt-4">
                                        <div className="flex items-center justify-between border-t border-[rgba(28,59,79,0.06)] pt-3">
                                            <span className="text-xs font-medium text-[rgba(36,71,89,0.62)]">{item.type}</span>
                                            {item.label === "Project Proposal" ? (
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button variant="link" className="h-auto p-0 text-xs font-semibold text-blue-500 hover:text-blue-700 hover:no-underline">
                                                            Download
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="sm:max-w-md">
                                                        <DialogHeader>
                                                            <DialogTitle className="text-[var(--brand-charcoal-blue)]">Select Proposal to Download</DialogTitle>
                                                            <DialogDescription>
                                                                Please select a team member's project proposal report below.
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        <div className="grid gap-3 pt-4">
                                                            {PROPOSALS.map((prop) => (
                                                                <Button key={prop.id} variant="outline" asChild className="justify-start gap-3 border-[rgba(28,59,79,0.1)] text-[var(--brand-charcoal-blue)] hover:bg-[var(--brand-charcoal-blue)] hover:text-white">
                                                                    <a href={prop.href} target="_blank" rel="noopener noreferrer">
                                                                        <FaFilePdf className="text-red-500" />
                                                                        Proposal Report - {prop.id}
                                                                    </a>
                                                                </Button>
                                                            ))}
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            ) : (
                                                <Button asChild variant="link" className="h-auto p-0 text-xs font-semibold text-blue-500 hover:text-blue-700 hover:no-underline">
                                                    <a href={resolvedHref} target="_blank" rel="noopener noreferrer">Download</a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
