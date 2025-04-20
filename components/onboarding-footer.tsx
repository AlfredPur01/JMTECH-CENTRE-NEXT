"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function OnboardingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl mb-3">Let&apos;s get in touch</h2>
        <p className="mb-4">Connect with us on our social media platforms and via our email.</p>

        <div className="flex space-x-4 mb-10">
          <Link
            href="#"
            className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-700"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-700"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-700"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
            <p className="mb-1">Phone: +234 806 039 5407</p>
            <p>Email: skillslab@jmtechcenter.org</p>
          </div>
          <div className="md:text-right">
            <p>
              © 2025 - <span className="text-[#ff3131]">JMTech Centre</span> All Right Reserved
            </p>
            <button onClick={scrollToTop} className="cursor-pointer mt-2 hover:text-[#ff3131] transition-colors">
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
