import type React from "react"
import { Check } from "lucide-react"

type BenefitItemProps = {
  children: React.ReactNode
}

function BenefitItem({ children }: BenefitItemProps) {
  return (
    <div className="flex items-start mb-5">
      <div className="text-[#00b96f] mr-3 flex-shrink-0 mt-1">
        <Check className="w-5 h-5" />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default function OnboardingBenefitsSection() {
  return (
    <section className="container mx-auto px-4 mt-12">
      <h2 className="text-2xl font-bold mb-8">Benefits</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <BenefitItem>
            Development of the right tech skillset that makes you employable immediately after graduation through a
            well-coordinated learning program path.
          </BenefitItem>

          <BenefitItem>
            Microsoft Certification through completion of learning resources allocated to this program, to boost your
            knowledge and skill.
          </BenefitItem>

          <BenefitItem>One (1) complimentary voucher for your certification examination.</BenefitItem>

          <BenefitItem>
            Accelerate Digital Transformation, Good Practices for Developing and Driving IT Centric Innovations
          </BenefitItem>

          <BenefitItem>
            Access to the JM Tech Centre Facility after the program for more engaging and immersive learning.
          </BenefitItem>

          <BenefitItem>Opportunity to work on practical projects to develop expertise.</BenefitItem>

          <BenefitItem>
            Access to mentors and periodic seminars from successful industry professionals and top-ranking citizens.
          </BenefitItem>
        </div>

        <div>
          <BenefitItem>24/7 Access to the learning platform to learn at your pace.</BenefitItem>

          <BenefitItem>
            A very good way to engage yourself during holidays and unforeseen closure of schools.
          </BenefitItem>

          <BenefitItem>
            Connect with other students (globally) who share the same passion with you in focused Leagues and use tech
            to solve real-world challenges together.
          </BenefitItem>

          <BenefitItem>
            Take your creativity to the world stage through the opportunity of participating in the Microsoft Imagine
            Cup.
          </BenefitItem>

          <BenefitItem>
            As an educator (teacher or lecturer), you will get resources and training to enhance the classroom
            experience by delivering cutting-edge technology instructions.
          </BenefitItem>

          <BenefitItem>
            As a tertiary institution, you will be equipped with a high-quality curriculum that is easy to administer
            and adds value to your students with certification.
          </BenefitItem>
        </div>
      </div>
    </section>
  )
}
