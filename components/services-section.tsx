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
    <div className="perspective-1000 h-[300px] mb-8">
      <div
        className={`relative w-full h-full text-center transition-transform duration-600 transform-style-preserve-3d shadow-md rounded-lg ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden">
          <div className="bg-white h-full flex flex-col">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={400}
              height={200}
              className="w-full h-[200px] object-cover"
            />
            <h4 className="py-4 px-2 m-0 bg-white text-[#0a0a2e] font-semibold">{title}</h4>

            {isTouchDevice && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsFlipped(!isFlipped)
                }}
                className="absolute bottom-2 right-2 bg-white/70 border-none rounded-full w-8 h-8 flex items-center justify-center z-10 cursor-pointer"
                aria-label="Flip card"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden bg-[#DBDBDB] text-[#2B3F4B] rotate-y-180 p-5 flex flex-col justify-center">
          <h4 className="mb-5 text-[#e50000] font-semibold">{title}</h4>
          <ul className="list-none p-0 mb-5 text-left">
            {features.map((feature, index) => (
              <li key={index} className="mb-2 flex items-start">
                <CheckCircle className="text-[#e50000] mr-2 mt-1 flex-shrink-0 w-4 h-4" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            href={linkHref}
            className="mt-auto inline-block bg-[#e50000] text-white border-none py-2 px-5 rounded-3xl transition-all duration-300 hover:bg-[#cc0000] hover:text-white hover:translate-y-[-3px]"
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
          We provide comprehensive tech training and support to empower Africa&apos;s next generation of IT
          professionals
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
            features={["Tailored migration strategies", "Visa application support", "Career and education planning"]}
            linkText="Book a session"
            linkHref="https://docs.google.com/forms/d/e/1FAIpQLSfAV16hmLRAigJjA-f10daSJC8151MG0M7MVabEUhL9ZYGGLQ/viewform?usp=dialo"
          />
        </div>
      </div>
    </section>
  )
}
