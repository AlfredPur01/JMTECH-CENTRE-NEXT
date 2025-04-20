"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "Which exam should I choose to meet my academic or migration goals?",
      answer:
        "Choose the exam that matches the requirements of your target institution or visa authority. For instance, IELTS, TOEFL, or UK SELT are essential for English proficiency, while GRE or SAT is used for academic admissions. Your specific goal—whether it's studying abroad, securing a job, or migrating—will dictate the best choice.",
    },
    {
      question: "What are the differences between IELTS, TOEFL, GRE, SAT, and UK SELT?",
      answer:
        "IELTS, TOEFL, and UK SELT assess English language skills for academic, migration, or professional purposes. The GRE evaluates graduate-level readiness in verbal, quantitative, and analytical writing skills, and the SAT is used primarily for undergraduate admissions. Each test has its own format, scoring system, and target audience.",
    },
    {
      question: "Which materials or resources should I use for exam preparation?",
      answer:
        "Use official study guides and practice tests provided by the exam organizers, reputable online courses, textbooks, and consider joining our preparatory classes to get additional insights and tips.",
    },
    {
      question: "Do you offer preparatory classes or lectures before the exam?",
      answer: "Yes.",
    },
    {
      question: "What is the validity period for the exam scores?",
      answer:
        "Generally, IELTS and TOEFL scores are valid for two years, while GRE scores are valid for five years. Always verify with the official exam provider, as validity can affect your application timeline.",
    },
    {
      question: "Can I prepare for these exams while working full-time?",
      answer: "Absolutely.",
    },
    {
      question: "What strategies can help me excel in the writing and speaking sections?",
      answer:
        "Practice consistently by writing essays and recording your spoken responses. Use sample questions, seek feedback from tutors, and familiarize yourself with the test's format. Focus on clarity, structure, and fluency.",
    },
    {
      question: "What is the format and structure of the GRE or SAT exams?",
      answer:
        "The GRE comprises verbal reasoning, quantitative reasoning, and analytical writing sections. The SAT includes evidence-based reading, writing and language, and mathematics.",
    },
    {
      question: "Can I schedule a consultation to discuss my exam choice and preparation plan?",
      answer: "Yes.",
    },
  ]

  return (
    <section id="faq-section" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Get answers to commonly asked questions about our international exam services
          </p>
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline data-[state=open]:bg-[#e50000] data-[state=open]:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
