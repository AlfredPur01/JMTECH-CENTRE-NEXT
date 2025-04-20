import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ExamHeroSection() {
  return (
    <section className="py-32 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/images/services/INT_EXAMS.JPG')] bg-center bg-cover text-white text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">International Exams</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Prepare for global success with our comprehensive international exam preparation services, registration
            assistance, and study materials.
          </p>
          <Link href="https://docs.google.com/forms/d/1zlurl4ltiDzKLo200-oU5IOg15JgnqujFexC2g9WSsg/edit">
            <Button className="bg-[#e50000] hover:bg-[#cc0000] text-white rounded-full px-8 py-6 text-lg">
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
