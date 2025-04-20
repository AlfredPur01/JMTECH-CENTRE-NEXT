"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 bg-white py-4 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/newlogo.png"
            alt="JM Tech Centre Logo"
            width={150}
            height={70}
            className="h-[70px] w-auto"
          />
        </Link>

        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <div
          className={`lg:flex items-center ${isMenuOpen ? "absolute top-full left-0 right-0 flex flex-col bg-white shadow-md p-4" : "hidden"}`}
        >
          <ul className={`flex ${isMenuOpen ? "flex-col w-full" : "flex-row"} items-center space-x-0 lg:space-x-6`}>
            <li className="py-2 lg:py-0">
              <Link
                href="/#home"
                className="font-semibold relative px-2 py-1 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 text-black hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                href="/#about"
                className="font-semibold relative px-2 py-1 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 text-black hover:text-primary"
              >
                About
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                href="/#services"
                className="font-semibold relative px-2 py-1 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 text-black hover:text-primary"
              >
                Our Services
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                href="/#testimonials"
                className="font-semibold relative px-2 py-1 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 text-black hover:text-primary"
              >
                Testimonials
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                href="/#blog"
                className="font-semibold relative px-2 py-1 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 text-black hover:text-primary"
              >
                Blog
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                href="/#contact"
                className="font-semibold relative px-2 py-1 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 text-black hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link href="/international-exams" className="mt-4 lg:mt-0 lg:ml-4">
            <Button
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
