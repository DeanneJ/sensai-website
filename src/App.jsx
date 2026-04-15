import siteContent from "./content/site-content.json"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { HeroSection } from "./sections/HeroSection"
import { ProblemSection } from "./sections/ProblemSection"
import { DomainSection } from "./sections/DomainSection"
import { LiteratureSurveySection } from "./sections/LiteratureSurveySection"
import { LiteratureReviewSection } from "./sections/LiteratureReviewSection"
import { ResearchGapSection } from "./sections/ResearchGapSection"
import { ProblemSolutionSection } from "./sections/ProblemSolutionSection"
import { ResearchObjectivesSection } from "./sections/ResearchObjectivesSection"
import { MethodologySection } from "./sections/MethodologySection"
import { TechnologiesSection } from "./sections/TechnologiesSection"
import { MilestonesSection } from "./sections/MilestonesSection"
import { DocumentsSection } from "./sections/DocumentsSection"
import { PresentationsSection } from "./sections/PresentationsSection"
import { AboutSection } from "./sections/AboutSection"
import { ContactSection } from "./sections/ContactSection"

function App() {
  const {
    site,
    navigation,
    hero,
    problem,
    solution,
    domain,
    literatureSurvey,
    literatureReview,
    researchGap,
    problemSolution,
    researchObjectives,
    methodology,
    technologies,
    milestones,
    documents,
    presentations,
    about,
    contact,
    footer,
  } = siteContent

  return (
    <div className="bg-background text-foreground relative">
      <Header site={site} navigation={navigation} />

      <main>
        <HeroSection hero={hero} site={site} />
        <ProblemSection problem={problem} solution={solution} />
        <DomainSection domain={domain} />
        <LiteratureSurveySection literatureSurvey={literatureSurvey} />
        <LiteratureReviewSection literatureReview={literatureReview} />
        <ResearchGapSection researchGap={researchGap} />
        <ProblemSolutionSection problemSolution={problemSolution} />
        <ResearchObjectivesSection researchObjectives={researchObjectives} />
        <MethodologySection methodology={methodology} />
        <TechnologiesSection technologies={technologies} />
        <MilestonesSection milestones={milestones} />
        <DocumentsSection documents={documents} />
        <PresentationsSection presentations={presentations} />
        <AboutSection about={about} />
        <ContactSection contact={contact} />
      </main>

      <Footer site={site} footer={footer} />
    </div>
  )
}

export default App
