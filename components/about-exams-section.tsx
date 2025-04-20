import Image from "next/image"

type ExamCardProps = {
  title: string
  description: string
  image: string
}

function ExamCard({ title, description, image }: ExamCardProps) {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-10px] h-full"
      data-aos="fade-up"
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={200}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-6">
        <h3 className="text-[#e50000] text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default function AboutExamsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
            Why Choose Our Exam Services
          </h2>
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
            We provide complete support for your international exam journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ExamCard
            title="Certification Preparation"
            description="Comprehensive preparation courses with experienced instructors who understand the exam patterns and requirements."
            image="/images/services/certification.jpg"
          />

          <ExamCard
            title="Exam Center Facilities"
            description="State-of-the-art exam facilities that meet international standards for a comfortable testing experience."
            image="/images/services/facilitiy.jpg"
          />

          <ExamCard
            title="Registration Assistance"
            description="Expert guidance through the entire registration process, ensuring all requirements are met for your exam."
            image="/images/services/registration.jpg"
          />
        </div>
      </div>
    </section>
  )
}
