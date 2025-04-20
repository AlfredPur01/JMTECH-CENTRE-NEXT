import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ExamCtaSection() {
  return (
    <section className="py-24 bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/images/services/INT_EXAMS.JPG')] bg-center bg-cover text-white text-center">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">Ready to Excel in Your International Exams?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Join thousands of successful students who have achieved their target scores through our comprehensive exam
            preparation services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://docs.google.com/forms/d/1zlurl4ltiDzKLo200-oU5IOg15JgnqujFexC2g9WSsg/edit">
              <Button className="bg-[#e50000] hover:bg-[#cc0000] text-white rounded-full px-8 py-6 text-lg">
                Register for an Exam
              </Button>
            </Link>
            <Link href="https://docs.google.com/forms/d/1zlurl4ltiDzKLo200-oU5IOg15JgnqujFexC2g9WSsg/edit">
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg"
              >
                Enroll in a Tutorial Class
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
