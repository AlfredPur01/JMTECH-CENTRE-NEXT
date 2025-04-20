import OnboardingHeader from "@/components/onboarding-header"
import OnboardingAboutSection from "@/components/onboarding-about-section"
import OnboardingUsersSection from "@/components/onboarding-users-section"
import OnboardingCoursesSection from "@/components/onboarding-courses-section"
import OnboardingBenefitsSection from "@/components/onboarding-benefits-section"
import OnboardingCtaSection from "@/components/onboarding-cta-section"
import OnboardingFooter from "@/components/onboarding-footer"

export default function Onboarding() {
  return (
    <main>
      <OnboardingHeader />
      <OnboardingAboutSection />
      <OnboardingUsersSection />
      <OnboardingCoursesSection />
      <OnboardingBenefitsSection />
      <OnboardingCtaSection />
      <OnboardingFooter />
    </main>
  )
}
