import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6"

const socialIconMap = {
    LinkedIn: FaLinkedinIn,
    GitHub: FaGithub,
    X: FaXTwitter,
}

export function Footer({ site, footer }) {
    return (
        <footer className="bg-[var(--background)] pt-6 text-[var(--foreground)]">
            <div className="mx-auto max-w-7xl rounded-t-[2rem] border border-b-0 border-[var(--border)] bg-[var(--card)] px-5 py-4 shadow-sm sm:px-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm">
                            <img
                                src="/images/sens-ai-logo.jpeg"
                                alt="Graph Ceylon logo"
                                className="size-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-bold tracking-wide">{site.name}</p>
                            <p className="text-[0.65rem] font-medium tracking-[0.16em] text-[var(--muted-foreground)] uppercase">Simple ideas. Smart research.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6 lg:flex-1 lg:justify-end">
                        <p className="max-w-xl text-sm leading-6 text-[var(--muted-foreground)]">
                            {footer.description}
                        </p>
                        <div className="flex items-center gap-3">
                            {footer.socials.map((social) => {
                                const Icon = socialIconMap[social.label]

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--muted-foreground)] transition-all hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                                        aria-label={social.label}
                                    >
                                        {Icon ? <Icon className="size-4" /> : social.label.slice(0, 1)}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-4 border-t border-[var(--border)] pt-3 text-center text-xs font-medium tracking-wide text-[var(--muted-foreground)]">
                    {site.copyright}
                </div>
            </div>
        </footer>
    )
}
