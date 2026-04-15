import { SectionHeading } from "../components/SectionHeading"
import { MemberCard } from "../components/MemberCard"

export function AboutSection({ about }) {
    const supervisors = about.members.filter((member) => member.role.includes("SUPERVISOR"))
    const teamMembers = about.members.filter((member) => member.role.includes("TEAM MEMBER"))

    return (
        <section id="about" className="bg-white py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading title={about.title} centered />
                <div className="mt-12 space-y-14">
                    <div>
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <h3 className="text-2xl font-semibold text-[var(--brand-charcoal-blue)]">Supervisors</h3>
                            <div className="h-px flex-1 bg-[rgba(28,59,79,0.12)]" />
                        </div>
                        <div className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-2">
                            {supervisors.map((member, index) => (
                                <MemberCard
                                    key={`${member.name}-${member.role}`}
                                    member={member}
                                    index={index}
                                    compact
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <h3 className="text-2xl font-semibold text-[var(--brand-charcoal-blue)]">Team Members</h3>
                            <div className="h-px flex-1 bg-[rgba(28,59,79,0.12)]" />
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            {teamMembers.map((member, index) => (
                                <MemberCard key={`${member.name}-${member.role}`} member={member} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
