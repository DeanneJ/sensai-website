import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

function DropdownLinkGroup({ label, links }) {
    return (
        <div className="group relative py-1">
            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--accent)]">
                {label}
                <ChevronDown className="size-4 transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-[calc(100%-0.4rem)] z-20 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                <div className="w-auto min-w-56 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-xl transition duration-200">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block whitespace-nowrap rounded-xl px-3 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--accent)]"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function Header({ site, navigation }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
                <nav className={`border border-[var(--border)] bg-[rgba(255,255,255,0.85)] px-3 py-3 shadow-lg backdrop-blur ${mobileMenuOpen ? "rounded-3xl" : "rounded-2xl"}`}>
                    <div className="flex items-center justify-between gap-4">
                        <a href="#home" className="flex items-center gap-3 text-[var(--foreground)]">
                            <div className="flex size-11 items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
                                <img
                                    src="/images/sens-ai-logo.jpeg"
                                    alt="Graph Ceylon logo"
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="leading-tight">
                                <p className="text-sm font-semibold tracking-[0.18em] uppercase">{site.name}</p>
                                <p className="text-[0.68rem] font-medium tracking-[0.16em] text-[var(--muted-foreground)] uppercase">Research Studio</p>
                            </div>
                        </a>

                        <div className="hidden items-center gap-2 md:flex">
                            {navigation.primaryLinks.slice(0, 1).map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-full px-3 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--accent)]"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <DropdownLinkGroup label="Domain" links={navigation.domainLinks} />
                            {navigation.primaryLinks.slice(1, 2).map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-full px-3 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--accent)]"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <DropdownLinkGroup label="Resources" links={navigation.resourceLinks} />
                            {navigation.primaryLinks.slice(2).map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-full px-3 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--accent)]"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="inline-flex size-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white text-[var(--foreground)] md:hidden"
                            onClick={() => setMobileMenuOpen((open) => !open)}
                            aria-label="Toggle navigation"
                        >
                            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                        </button>
                    </div>

                    {mobileMenuOpen ? (
                        <div className="mt-3 max-h-[70vh] space-y-1 overflow-y-auto border-t border-[var(--border)] pt-4 pb-2 md:hidden">
                            {navigation.primaryLinks.slice(0, 1).map((link) => (
                                <a
                                    key={`mobile-${link.href}`}
                                    href={link.href}
                                    className="block rounded-2xl px-4 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--accent)]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}

                            <div className="px-5 pt-3 pb-1 text-[0.7rem] font-semibold tracking-wider text-[var(--muted-foreground)] uppercase">
                                Domain
                            </div>
                            {navigation.domainLinks.map((link) => (
                                <a
                                    key={`mobile-${link.href}`}
                                    href={link.href}
                                    className="block rounded-2xl px-4 py-3 pl-8 text-sm text-[var(--foreground)] transition hover:bg-[var(--accent)]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}

                            {navigation.primaryLinks.slice(1, 2).map((link) => (
                                <a
                                    key={`mobile-${link.href}`}
                                    href={link.href}
                                    className="block rounded-2xl px-4 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--accent)]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}

                            <div className="px-5 pt-3 pb-1 text-[0.7rem] font-semibold tracking-wider text-[var(--muted-foreground)] uppercase">
                                Resources
                            </div>
                            {navigation.resourceLinks.map((link) => (
                                <a
                                    key={`mobile-${link.href}`}
                                    href={link.href}
                                    className="block rounded-2xl px-4 py-3 pl-8 text-sm text-[var(--foreground)] transition hover:bg-[var(--accent)]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}

                            {navigation.primaryLinks.slice(2).map((link) => (
                                <a
                                    key={`mobile-${link.href}`}
                                    href={link.href}
                                    className="block rounded-2xl px-4 py-3 text-sm text-[var(--foreground)] transition hover:bg-[var(--accent)]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    ) : null}
                </nav>
            </div>
        </header>
    )
}
