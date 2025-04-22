"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, RefreshCw } from "lucide-react"

type ServiceCardProps = {
  title: string
  image: string
  features: string[]
  linkText: string
  linkHref: string
}

function ServiceCard({ title, image, features, linkText, linkHref }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  return (
    <div
      className="group relative mb-8 [perspective:1000px] w-full"
      style={{ height: "auto", minHeight: "360px" }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isTouchDevice
            ? isFlipped
              ? "rotate-y-180"
              : ""
            : "group-hover:rotate-y-180"
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full rounded-lg overflow-hidden bg-white [backface-visibility:hidden] z-20">
          <div className="flex flex-col h-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={500}
              height={300}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-4 flex-1 flex items-center justify-between relative">
              <h4 className="text-lg font-semibold text-[#0a0a2e]">{title}</h4>
              {isTouchDevice && (
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="absolute bottom-2 right-2 bg-white/80 border border-gray-300 shadow rounded-full w-8 h-8 flex items-center justify-center z-30"
                  aria-label="Flip card"
                >
                  <RefreshCw className="w-4 h-4 text-[#0a0a2e]" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full rounded-lg overflow-hidden bg-[#DBDBDB] text-[#2B3F4B] [backface-visibility:hidden] [transform:rotateY(180deg)] p-5 flex flex-col justify-center z-10">
          <h4 className="mb-4 text-[#e50000] font-semibold text-lg">{title}</h4>
          <ul className="list-none p-0 mb-5 text-left space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-[#e50000] mr-2 mt-1 flex-shrink-0 w-4 h-4" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            href={linkHref}
            className="mt-auto inline-block bg-[#e50000] text-white py-2 px-5 rounded-3xl transition-all duration-300 hover:bg-[#cc0000] hover:-translate-y-1"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-2">Our Services</h2>
        <p className="text-center mb-12">
          We provide comprehensive tech training and support to empower Africa&apos;s next generation of IT professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="International Exams"
            image="/images/services/INT_EXAMS.JPG"
            features={[
              "Certification preparation",
              "Exam center facilities",
              "Registration assistance",
              "Tutorial Enrolment",
            ]}
            linkText="Learn More"
            linkHref="/international-exams"
          />

          <ServiceCard
            title="Tech Courses"
            image="/images/services/TECH_COURSES.JPG"
            features={["Software Development", "Data Analysis", "Cyber Security", "Digital Marketing"]}
            linkText="Register"
            linkHref="#"
          />

          <ServiceCard
            title="Tech Workshop"
            image="/images/services/TECH_WORKSHOP.JPG"
            features={["Hands-on training", "Project-based learning", "Industry mentorship"]}
            linkText="See Upcoming Events"
            linkHref="#events"
          />

          <ServiceCard
            title="Consultation"
            image="/images/services/Consultation.JPG"
            features={[
              "Tailored migration strategies",
              "Visa application support",
              "Career and education planning",
            ]}
            linkText="Book a session"
            linkHref="https://docs.google.com/forms/d/e/1FAIpQLSfAV16hmLRAigJjA-f10daSJC8151MG0M7MVabEUhL9ZYGGLQ/viewform?usp=dialo"
          />
        </div>
      </div>
    </section>
  )
}
