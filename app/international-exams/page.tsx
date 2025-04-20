import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ExamHeroSection from "@/components/exam-hero-section"
import AboutExamsSection from "@/components/about-exams-section"
import RegistrationFeesSection from "@/components/registration-fees-section"
import TutorialFeesSection from "@/components/tutorial-fees-section"
import StudyMaterialsSection from "@/components/study-materials-section"
import FaqSection from "@/components/faq-section"
import ExamCtaSection from "@/components/exam-cta-section"

export default function InternationalExams() {
  return (
    <main>
      <Navbar />
      <ExamHeroSection />
      <AboutExamsSection />
      <RegistrationFeesSection />
      <TutorialFeesSection />
      <StudyMaterialsSection />
      <FaqSection />
      <ExamCtaSection />
      <Footer />
    </main>
  )
}
