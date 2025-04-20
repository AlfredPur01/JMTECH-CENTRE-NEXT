import Image from "next/image"

export default function PartnersSection() {
  const partners = [
    { id: 1, name: "XDEPUTY", logo: "/images/partners/XDEPUTY.png" },
    { id: 2, name: "SIDMACH", logo: "/images/partners/SIDMACH.png" },
    { id: 3, name: "HERA MARKETING", logo: "/images/partners/HERA_MARKETING.png" },
    { id: 4, name: "DEVFEST", logo: "/images/partners/DEVFEST.png" },
    { id: 5, name: "SPECTRUM", logo: "/images/partners/SPECTRUM.png" },
    { id: 6, name: "WTM", logo: "/images/partners/WTM.png" },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">Our Partners</h2>

        <div className="overflow-hidden mb-10">
          <div className="flex animate-[slide_20s_linear_infinite]">
            {/* First row of logos */}
            {partners.map((partner) => (
              <Image
                key={partner.id}
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={180}
                height={90}
                className="mx-5 h-[90px] w-[180px] object-contain"
              />
            ))}

            {/* Duplicate for seamless scroll */}
            {partners.map((partner) => (
              <Image
                key={`dup1-${partner.id}`}
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={180}
                height={90}
                className="mx-5 h-[90px] w-[180px] object-contain"
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-[slide_20s_linear_infinite_reverse]">
            {/* Second row of logos in reverse */}
            {[...partners].reverse().map((partner) => (
              <Image
                key={`rev-${partner.id}`}
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={180}
                height={90}
                className="mx-5 h-[90px] w-[180px] object-contain"
              />
            ))}

            {/* Duplicate for seamless scroll */}
            {[...partners].reverse().map((partner) => (
              <Image
                key={`dup2-${partner.id}`}
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={180}
                height={90}
                className="mx-5 h-[90px] w-[180px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
