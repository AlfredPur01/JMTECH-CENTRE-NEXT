import Link from "next/link"
import Image from "next/image"

export default function OnboardingHeader() {
  return (
    <header className="py-3 border-b">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="logo-container">
          <Image
            src="/images/newlogo.png"
            alt="JM Tech Centre Logo"
            width={150}
            height={60}
            className="h-[60px] w-auto"
          />
        </Link>
        <Link
          href="#"
          className="border-2 border-[#ff3131] text-[#ff3131] bg-white rounded-full px-6 py-2 font-medium transition-all duration-300 hover:bg-[#ff3131] hover:text-white"
        >
          Apply Here
        </Link>
      </div>
    </header>
  )
}
