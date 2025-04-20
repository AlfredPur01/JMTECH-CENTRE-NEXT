import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function EventsSection() {
  return (
    <section id="events" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold">UPCOMING EVENTS</h2>
        <div className="mx-auto w-[200px] h-[3px] bg-[#e50000] my-2 mb-6"></div>
        <p className="text-center text-gray-600 max-w-[700px] mx-auto mb-10">
          Be a part of brainstorming sessions, build professional relationships and gain actionable insights from
          thought leaders & renowned experts.
        </p>

        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/robotics.JPG"
              alt="Robotics Workshop"
              width={830}
              height={942}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 bg-[#e50000] text-white p-8 md:p-10 flex flex-col justify-center">
            <div className="text-6xl font-bold leading-none">APRIL</div>
            <h4 className="text-2xl md:text-3xl font-semibold mt-4 mb-3">From Concept to Creation (C-2-C)</h4>
            <p className="mb-6 opacity-90">
              The Robotic Journey: From Concept to Creation (C-2-C) is an immersive, hands-on workshop designed to bring
              together tech enthusiasts, engineers, and industry leaders to explore the latest advancements in robotics,
              AI, and hardware engineering.
            </p>
            <div className="mb-2">
              Time: <strong>11:00 AM - 5:00 PM</strong>
            </div>
            <div className="mb-6">
              Venue: <strong>JMTech Centre, Ikun-Ekiti</strong>
            </div>
            <Button className="bg-white text-gray-800 hover:bg-gray-100 hover:translate-y-[-2px] transition-transform duration-300 font-semibold w-fit">
              REGISTER NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
