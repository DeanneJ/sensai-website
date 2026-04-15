import { SectionHeading } from "../components/SectionHeading"
import emoBack from "../assets/emoback-2.jpg"

export function ProblemSolutionSection({ problemSolution }) {
    return (
        <section
            id="research-problem"
            className="relative overflow-hidden bg-[var(--brand-charcoal-blue)] py-24 text-[var(--brand-parchment-2)] sm:py-32 shadow-[inset_0px_20px_40px_rgba(0,0,0,0.3)]"
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat opacity-50 mix-blend-screen"
                style={{ backgroundImage: `url(${emoBack})` }}
            />

            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(28,59,79,0.94),rgba(36,71,89,0.85)),radial-gradient(circle_at_85%_35%,rgba(45,134,132,0.3),transparent_35%)] opacity-80 mix-blend-multiply" />

            {/* CONTENT */}
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                
                {/* CENTERED TITLE */}
                <SectionHeading
                    eyebrow="Framing"
                    title={problemSolution.title}
                    tone="light"
                    className="text-center mx-auto"
                />

                {/* TWO COLUMNS */}
                <div className="mt-12 grid gap-10 md:grid-cols-2 items-start">
                    
                    {/* LEFT - PROBLEM */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-parchment)] text-left">
                            Problem
                        </p>

                        <div className="mt-4 space-y-3">
                            {problemSolution.problemPoints.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-[rgba(240,236,231,0.12)] bg-[rgba(240,236,231,0.08)] px-4 py-4 text-sm text-[rgba(240,236,231,0.88)]"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT - SOLUTION */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-parchment)] text-left">
                            Solution
                        </p>

                        <div className="mt-4 space-y-3">
                            {problemSolution.solutionPoints.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-[rgba(45,134,132,0.26)] bg-[rgba(45,134,132,0.18)] px-4 py-4 text-sm text-[var(--brand-parchment-2)]"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}