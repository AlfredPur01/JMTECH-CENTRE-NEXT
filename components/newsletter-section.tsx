"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to backend in real implementation
    console.log("Newsletter subscription:", formData)
    // Reset form
    setFormData({ fullName: "", email: "" })
    // Show success message
    alert("Thank you for subscribing to our newsletter!")
  }

  return (
    <section className="py-12 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-600">Stay updated with our latest courses, events, and tech insights</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <Image
                src="/images/newsletter.jpg"
                alt="Newsletter Flier"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-6">Join our community of tech enthusiasts!</h3>
              <p className="mb-4">Get exclusive access to:</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#e50000] mr-2">•</span>
                  Early bird discounts on new courses
                </li>
                <li className="flex items-start">
                  <span className="text-[#e50000] mr-2">•</span>
                  Free tech webinars and workshops
                </li>
                <li className="flex items-start">
                  <span className="text-[#e50000] mr-2">•</span>
                  Industry insights and career opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-[#e50000] mr-2">•</span>
                  Success stories from our alumni
                </li>
              </ul>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-base"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 text-base"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#e50000] hover:bg-[#cc0000] text-white py-3 text-lg">
                  Subscribe Now
                </Button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  By subscribing, you agree to receive our newsletter emails. You can unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
