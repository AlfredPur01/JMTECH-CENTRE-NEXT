import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column with text content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a0a2e] mb-6 leading-tight">
              From Tech Solutions to International Impact!
            </h1>
            <p className="text-lg mb-8">
              Learn tech, explore top courses, land internships, and ace global exams like IELTS, SAT, TOEFL, and GRE
              with expert guidance.
              <br />
              <br />
              Want to ace your IELTS, SAT, TOEFL, or GRE?
            </p>
            <Link href="#register">
              <Button className="rounded-full text-base px-8 py-6">Register now</Button>
            </Link>
          </div>

          {/* Right column with image */}
          <div>
            {/* Hero image structure with dotted pattern */}
            <div className="relative mt-8 pr-10 pb-10">
              {/* Dotted pattern that extends beyond the image */}
              <div className="absolute bottom-0 right-0 w-4/5 h-4/5 bg-[radial-gradient(#d3d3d3_2px,transparent_2px)] bg-[length:15px_15px] z-10 rounded-lg"></div>

              {/* Hero image */}
              <div className="relative z-20 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Homebg.png"
                  alt="Students working on computers"
                  width={600}
                  height={400}
                  className="rounded-lg w-full"
                />

                {/* Quote box positioned on the image */}
                <div className="absolute bottom-5 right-5 bg-black text-white p-5 rounded-md max-w-[80%] z-30 shadow-md">
                  <p className="relative pl-5 mb-2">
                    <span className="absolute top-[-15px] left-[-5px] text-[#e50000] text-4xl font-bold">&quot;</span>
                    Dreams don&apos;t work unless you take action. The surest way to make your dreams come true is to
                    live them.
                  </p>
                  <p className="text-right font-bold mb-0 text-[#ffc107]">Roy T. Bennet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
