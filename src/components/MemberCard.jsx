import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { FaEnvelope, FaLinkedin } from "react-icons/fa"

export function MemberCard({ member, index, compact = false }) {
    const wrapperClass = compact ? "p-5 pb-3" : "p-6 pb-4"
    const mediaRadiusClass = compact ? "rounded-[1.4rem]" : "rounded-[1.75rem]"
    const titleClass = compact
        ? "text-lg font-semibold leading-tight text-[var(--brand-charcoal-blue)]"
        : "text-xl font-semibold leading-tight text-[var(--brand-charcoal-blue)]"
    const bodyClass = compact ? "flex flex-1 flex-col space-y-3 pt-1" : "flex flex-1 flex-col space-y-4 pt-2"

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="flex h-full"
        >
            <Card className="flex h-full w-full overflow-hidden border-[rgba(28,59,79,0.08)] bg-[var(--brand-parchment)] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgba(28,59,79,0.1)]">
                <div className={`${wrapperClass} w-full text-[var(--brand-parchment-2)]`}>
                {member.image ? (
                    <div className={`aspect-square w-full overflow-hidden border border-[rgba(28,59,79,0.08)] bg-[var(--brand-parchment-2)] ${mediaRadiusClass}`}>
                        <img
                            src={member.image}
                            alt={member.name}
                            className="size-full object-cover object-center"
                        />
                    </div>
                ) : (
                    <div className={`flex aspect-square w-full items-end border border-[rgba(240,236,231,0.22)] bg-[linear-gradient(135deg,var(--brand-charcoal-blue),var(--brand-charcoal-blue-2)_52%,var(--brand-dark-cyan))] p-4 backdrop-blur ${mediaRadiusClass}`}>
                        <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-[rgba(240,236,231,0.82)]">
                                Member {String(index + 1).padStart(2, "0")}
                            </p>
                            <p className="mt-2 text-2xl font-semibold">{member.name}</p>
                        </div>
                    </div>
                )}
            </div>
            <CardContent className={bodyClass}>
                <div>
                    <h4 className={titleClass}>
                        {member.name}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(36,71,89,0.62)]">
                        {member.position}
                    </p>
                </div>
                <div className="space-y-1 text-sm text-[rgba(36,71,89,0.82)]">
                    <p>{member.organization}</p>
                    <p>{member.location}</p>
                </div>
                <div className="mt-auto min-h-10 border-t border-[rgba(28,59,79,0.08)] pt-4">
                    <div className="flex flex-wrap gap-3">
                        {member.links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.18em] text-[var(--brand-dark-cyan)] transition hover:text-[var(--brand-charcoal-blue)]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.label.toLowerCase() === 'email' ? <FaEnvelope className="text-sm" /> : link.label.toLowerCase() === 'linkedin' ? <FaLinkedin className="text-sm" /> : null}
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </CardContent>
            </Card>
        </motion.div>
    )
}
