"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState("")
  const itemsPerPage = 3
  const gridRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    { id: 1, image: "/images/Testimonials/Artboard 2.jpg", alt: "Student 1" },
    { id: 2, image: "/images/Testimonials/Artboard 2 copy 2.jpg", alt: "Student 2" },
    { id: 3, image: "/images/Testimonials/Artboard 2 copy 3.jpg", alt: "Student 3" },
    { id: 4, image: "/images/Testimonials/Artboard 2 copy 4.jpg", alt: "Student 4" },
    { id: 5, image: "/images/Testimonials/Artboard 2 copy 5.jpg", alt: "Student 5" },
    { id: 6, image: "/images/Testimonials/Artboard 2 copy.jpg", alt: "Student 6" },
  ]

  const totalItems = testimonials.length
  const maxPage = Math.ceil(totalItems / itemsPerPage) - 1

  // Auto scroll functionality
  useEffect(() => {
    if (isModalOpen) return

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev >= maxPage ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [maxPage, isModalOpen])

  // Handle scroll
  const scrollTestimonials = (direction: number) => {
    setCurrentPage((prev) => {
      let newPage = prev + direction

      if (newPage < 0) {
        newPage = maxPage
      } else if (newPage > maxPage) {
        newPage = 0
      }

      return newPage
    })
  }

  // Open modal
  const openModal = (image: string) => {
    setModalImage(image)
    setIsModalOpen(true)
  }

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Handle escape key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen])

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left column: Heading and intro text */}
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold mb-4">Testimonials & Success Stories</h2>
            <p className="text-gray-700">
              Discover how our programs have transformed careers and lives. Our graduates have gone on to work at top
              companies and launch successful businesses in tech.
            </p>
          </div>

          {/* Right column: Testimonial cards */}
          <div className="md:col-span-7">
            <div className="relative overflow-hidden">
              <div
                ref={gridRef}
                className="flex transition-transform duration-600 ease-in-out gap-4"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-none w-[calc(33.333%-10px)] min-w-[calc(33.333%-10px)] rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                    onClick={() => openModal(testimonial.image)}
                  >
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.alt}
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#e50000] text-white border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-600 ease z-10 hover:bg-[#c50000]"
                onClick={() => scrollTestimonials(-1)}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#e50000] text-white border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-600 ease z-10 hover:bg-[#c50000]"
                onClick={() => scrollTestimonials(1)}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center mt-5">
              {Array.from({ length: maxPage + 1 }).map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 mx-1 rounded-full transition-colors duration-300 ${currentPage === index ? "bg-[#e50000]" : "bg-gray-300 hover:bg-gray-400"}`}
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 animate-fadeIn"
          onClick={closeModal}
        >
          <button
            className="absolute top-5 right-8 text-white text-4xl font-bold transition-colors duration-300 hover:text-[#e50000] z-[1001]"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>

          <Image
            src={modalImage || "/placeholder.svg"}
            alt="Enlarged testimonial"
            width={800}
            height={600}
            className="max-w-[70%] max-h-[70vh] object-contain relative top-1/2 transform -translate-y-1/2 animate-zoom"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
