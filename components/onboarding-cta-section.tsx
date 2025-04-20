import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OnboardingCtaSection() {
  return (
    <section className="mt-12 py-12 bg-[#f2f2f2]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-5/12">
            <h2 className="text-2xl font-bold">Start a training today</h2>
          </div>
          <div className="md:w-5/12">
            <p className="mb-4">
              Want to be a part of our future tech ready champions? Explore available learning paths that meet your
              needs!
            </p>
            <Link href="#">
              <Button className="bg-[#ff3131] hover:bg-[#cc0000] text-white rounded-full px-6">Apply Here</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
