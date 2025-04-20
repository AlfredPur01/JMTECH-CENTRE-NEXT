import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RegistrationSection() {
  return (
    <section id="register" className="py-12 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden">
          <div className="relative">
            {/* Background image */}
            <Image src="/images/background.jpg" alt="Training session" width={1200} height={400} className="w-full" />

            {/* Content overlay */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center text-white p-3 md:p-4 mx-2 md:mx-auto max-w-[90%]">
                <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">Register Here to join a training</h2>
                <p className="mb-2 md:mb-3 text-sm md:text-base">
                  Registration to get access to training on any of our courses is ongoing
                </p>
                <p className="mb-3 md:mb-4 text-sm md:text-base">
                  Click on the Register button below to get started with your application
                </p>
                <Link href="/international-exams">
                  <Button className="bg-[#e50000] hover:bg-[#cc0000] text-white rounded-full px-6">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
