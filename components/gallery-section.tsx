"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [countdown, setCountdown] = useState(5)
  const trackRef = useRef<HTMLDivElement>(null)

  const galleryItems = [
    { id: 1, image: "/images/gallery/Mr_Mike.png", caption: "Modern Learning Spaces" },
    { id: 2, image: "/images/gallery/Mr_Mike2.png", caption: "Industry Networking Events" },
    { id: 3, image: "/images/gallery/Prof_Bello.png", caption: "Hands-on Learning Workshops" },
    { id: 4, image: "/images/gallery/Alfred.png", caption: "Collaborative Projects" },
    { id: 5, image: "/images/gallery/Mr_Mike3.png", caption: "Tech Meetups" },
    { id: 6, image: "/images/gallery/thumbnail.png", caption: "Student Presentations" },
    { id: 7, image: "/images/gallery/team1.png", caption: "Team Building" },
    { id: 8, image: "/images/gallery/team2.png", caption: "Group Sessions" },
    { id: 9, image: "/images/gallery/goup.png", caption: "Community Events" },
  ]

  const itemWidth = 324 // width + gap
  const visibleItems = 3
  const maxIndex = Math.max(0, galleryItems.length - visibleItems)

  // Auto transition timer
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // Move to next slide when countdown reaches 0
          setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
          return 5
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(countdownInterval)
  }, [maxIndex])

  // Update gallery position when currentIndex changes
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`
    }
  }, [currentIndex, itemWidth])

  // Previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
    setCountdown(5)
  }

  // Next slide
  const nextSlide = () => {
    if (currentIndex >= maxIndex) {
      // Create a rewinding animation
      if (trackRef.current) {
        trackRef.current.style.transition = "none"
        setCurrentIndex(0)
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = "transform 0.8s ease"
          }
        }, 50)
      }
    } else {
      setCurrentIndex((prev) => prev + 1)
    }
    setCountdown(5)
  }

  // Jump to specific index
  const jumpToIndex = (index: number) => {
    setCurrentIndex(Math.min(Math.floor((index / (galleryItems.length - 1)) * maxIndex), maxIndex))
    setCountdown(5)
  }

  return (
    <section id="gallery" className="py-12 md:py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-3">Our Gallery</h2>
            <p className="text-gray-700">
              Explore our vibrant campus life, state-of-the-art facilities, and the exciting journey of our students
              through their educational experience.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <div className="bg-white/80 rounded-full px-3 py-1 text-sm text-gray-700 shadow-sm">
              Auto-transition: <span className="font-bold min-w-[15px] inline-block text-center">{countdown}</span>s
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white/80 border-none rounded-full w-12 h-12 flex items-center justify-center cursor-pointer shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg"
            onClick={prevSlide}
            aria-label="Previous gallery item"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white/80 border-none rounded-full w-12 h-12 flex items-center justify-center cursor-pointer shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg"
            onClick={nextSlide}
            aria-label="Next gallery item"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Gallery track */}
          <div ref={trackRef} className="flex gap-6 transition-transform duration-800 ease-in-out py-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex-none w-[300px] relative transform transition-all duration-300 ${index % 2 === 0 ? "animate-[galleryBounce_3s_ease-in-out_infinite]" : "animate-[galleryBounce_3.5s_ease-in-out_infinite_0.5s]"} ${index >= currentIndex && index < currentIndex + visibleItems ? "opacity-100" : "opacity-30"}`}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.caption}
                  width={300}
                  height={220}
                  className="w-full h-[220px] object-cover rounded-lg shadow-md border-3 border-white"
                />
              </div>
            ))}
          </div>

          {/* Paw print indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                className={`w-5 h-5 bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12,12c-1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13,12,12,12z M16.5,7.6c-0.5-0.7-1.3-1.1-2.2-1.1c-0.8,0-1.6,0.4-2.1,1.1c-0.5,0.7-0.5,1.6,0,2.3s1.3,1.1,2.1,1.1c0.8,0,1.6-0.4,2.1-1.1C17,9.2,17,8.3,16.5,7.6z M9.8,7.6C9.2,6.9,8.5,6.5,7.6,6.5c-0.8,0-1.6,0.4-2.1,1.1C5,8.3,5,9.2,5.5,9.9s1.3,1.1,2.1,1.1c0.8,0,1.6-0.4,2.1-1.1C10.2,9.2,10.2,8.3,9.8,7.6z M16.4,14.4c-0.5-0.7-1.3-1.1-2.1-1.1c-0.8,0-1.6,0.4-2.1,1.1c-0.5,0.7-0.5,1.6,0,2.3s1.3,1.1,2.1,1.1c0.8,0,1.6-0.4,2.1-1.1C16.9,16,16.9,15.1,16.4,14.4z M9.8,14.4c-0.5-0.7-1.3-1.1-2.1-1.1c-0.8,0-1.6,0.4-2.1,1.1c-0.5,0.7-0.5,1.6,0,2.3s1.3,1.1,2.1,1.1c0.8,0,1.6-0.4,2.1-1.1C10.2,16,10.2,15.1,9.8,14.4z' fill='${index === Math.min(Math.floor(currentIndex / (maxIndex / (galleryItems.length - 1))), galleryItems.length - 1) ? "%23333" : "%23ccc"}'/%3E%3C/svg%3E")] bg-contain cursor-pointer opacity-${index === Math.min(Math.floor(currentIndex / (maxIndex / (galleryItems.length - 1))), galleryItems.length - 1) ? "100" : "50"} transition-opacity duration-300 hover:opacity-80`}
                onClick={() => jumpToIndex(index)}
                aria-label={`Go to gallery item ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
