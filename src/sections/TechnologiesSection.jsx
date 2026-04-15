import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { SectionHeading } from "../components/SectionHeading"
import { motion } from "framer-motion"

import {
    SiPython,
    SiFastapi,
    SiReact
} from "react-icons/si"

import { FaBrain } from "react-icons/fa"
import { MdOutlineImage, MdTextFields } from "react-icons/md"
import { GiArtificialIntelligence } from "react-icons/gi"
import { BsRobot } from "react-icons/bs"

const iconMap = {
    "Python": { Icon: SiPython, color: "#3776AB" },
    "FastAPI": { Icon: SiFastapi, color: "#009688" },
    "React": { Icon: SiReact, color: "#61DAFB" },

    "DistilBERT": { Icon: FaBrain, color: "#8E44AD" },
    "CLIP": { Icon: MdOutlineImage, color: "#E67E22" },
    "XGBoost": { Icon: BsRobot, color: "#2ECC71" },
    "SBERT": { Icon: GiArtificialIntelligence, color: "#9B59B6" },
    "EasyOCR": { Icon: MdTextFields, color: "#34495E" }
}

export function TechnologiesSection({ technologies }) {
    return (
        <section
            id="technologies-used"
            className="bg-[var(--brand-charcoal-blue)] py-16 text-[var(--brand-parchment-2)] sm:py-16"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Stack"
                    title={technologies.title}
                    description="Technologies and models used to build the SensAI system."
                    tone="light"
                />

                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {technologies.items.map((item) => {
                        const iconEntry = iconMap[item.name]
                        const Icon = iconEntry?.Icon

                        return (
                            <motion.div
                                key={item.name}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <Card className="group overflow-hidden border-[rgba(240,236,231,0.12)] bg-[rgba(240,236,231,0.08)] text-[var(--brand-parchment-2)] backdrop-blur transition-all hover:border-[rgba(45,134,132,0.45)] hover:bg-[rgba(240,236,231,0.12)] hover:shadow-xl hover:shadow-[rgba(45,134,132,0.15)]">
                                    
                                    <CardContent className="flex flex-col items-center justify-center p-5 text-center">
                                        
                                        <motion.div
                                            className="mb-4 flex size-14 items-center justify-center rounded-xl bg-[rgba(240,236,231,0.12)] transition-colors duration-300 group-hover:bg-[rgba(240,236,231,0.22)]"
                                            whileHover={{ rotate: [0, -6, 6, 0], scale: 1.12 }}
                                            transition={{ duration: 0.45 }}
                                        >
                                            {Icon ? (
                                                <Icon
                                                    className="size-8 drop-shadow-md"
                                                    style={{ color: iconEntry.color }}
                                                />
                                            ) : null}
                                        </motion.div>

                                        <Badge
                                            variant="outline"
                                            className="border-[rgba(240,236,231,0.14)] bg-[rgba(240,236,231,0.08)] text-[rgba(240,236,231,0.84)] group-hover:bg-[var(--brand-parchment)] group-hover:text-[var(--brand-charcoal-blue)] text-[0.65rem] uppercase tracking-widest transition-colors duration-300"
                                        >
                                            {item.category}
                                        </Badge>

                                        <h3 className="mt-3 text-base font-semibold tracking-tight">
                                            {item.name}
                                        </h3>

                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}