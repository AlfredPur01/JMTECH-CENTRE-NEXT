import Image from "next/image"
import Link from "next/link"

type CourseCardProps = {
  title: string
  description: string
  image: string
}

function CourseCard({ title, description, image }: CourseCardProps) {
  return (
    <div className="text-center mb-6">
      <div className="mb-4 rounded-md overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={title} width={250} height={180} className="w-full h-auto" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

export default function OnboardingCoursesSection() {
  return (
    <section className="container mx-auto px-4 mt-12">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <p className="mb-8">
        Each learning path consists of step-by-step tutorials that allow participants track progress, check knowledge,
        and validate deployments to earn points, levels, achievements and trophies, exciting right? To get started on
        the right learning path,{" "}
        <Link href="#" className="text-[#ff3131] no-underline">
          apply here
        </Link>
        .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CourseCard
          title="Computer Science"
          description="Coding skills (Frontend and Backend) based on the latest tools and techniques."
          image="/images/courses/computer-science.jpg"
        />
        <CourseCard
          title="IT Infrastructure"
          description="Skills in IT administration and cloud platform solutions."
          image="/images/courses/it-infrastructure.jpg"
        />
        <CourseCard
          title="Data Science"
          description="Introduction to data science concepts and tools."
          image="/images/courses/data-science.jpg"
        />
        <CourseCard
          title="Office Productivity Applications"
          description="Mastery of the productivity applications broadly used in business"
          image="/images/courses/office-productivity.jpg"
        />
      </div>
    </section>
  )
}
