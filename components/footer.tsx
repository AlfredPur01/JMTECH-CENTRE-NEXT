"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Let&apos;s get in touch</h3>
            <p className="mb-4">Connect with us on our social media platforms and via our email.</p>
            <div className="flex space-x-4 mb-6">
              <Link
                href="https://www.facebook.com/jmtechcenter/"
                className="text-white hover:text-[#e50000] transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/jmtechcentre?igsh=MXN4dThrOXkwa2lpdA=="
                className="text-white hover:text-[#e50000] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/jm-tech-centre/"
                className="text-white hover:text-[#e50000] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-[#e50000] transition-colors">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Phone: +23480 6835 2353 or +23470 1314 3358</p>
            <p>Email: skillslab@jmtechcenter.org</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-[#e50000] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/international-exams" className="text-white hover:text-[#e50000] transition-colors">
                  International Exams
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white hover:text-[#e50000] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#events" className="text-white hover:text-[#e50000] transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 - JMTech Centre All Right Reserved</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center text-white hover:text-[#e50000] transition-colors mt-4 md:mt-0 cursor-pointer"
          >
            Back to top <ArrowUp className="ml-2 text-[#e50000]" />
          </button>
        </div>
      </div>
    </footer>
  )
}
