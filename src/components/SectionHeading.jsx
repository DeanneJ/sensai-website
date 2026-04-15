import { Badge } from "./ui/badge"

export function SectionHeading({ eyebrow, title, description, centered = false, tone = "dark" }) {
    const titleClass = tone === "light" ? "text-[var(--brand-parchment-2)]" : "text-[var(--brand-charcoal-blue)]"
    const descriptionClass =
        tone === "light" ? "text-[rgba(240,236,231,0.78)]" : "text-[rgba(36,71,89,0.82)]"

    return (
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
            {eyebrow ? (
                <Badge variant="accent" className={centered ? "mx-auto mb-4" : "mb-4"}>
                    {eyebrow}
                </Badge>
            ) : null}
            <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${titleClass}`}>{title}</h2>
            {description ? (
                <p className={`mt-4 text-base leading-7 sm:text-lg ${descriptionClass}`}>{description}</p>
            ) : null}
        </div>
    )
}
