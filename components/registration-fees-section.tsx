export default function RegistrationFeesSection() {
  const registrationFees = [
    { exam: "TOEFL (Registration Fee)", fee: "$182" },
    { exam: "GRE (Registration Fee)", fee: "$231.30" },
    { exam: "GRE Subject Test", fee: "$189.50" },
    { exam: "GMAT", fee: "$300.00" },
    { exam: "GMAT (Home Edition)", fee: "$310.00" },
    { exam: "ACT WITHOUT ESSAY", fee: "$210.00" },
    { exam: "ACT WITH ESSAY", fee: "$230.00" },
    { exam: "SAT", fee: "$120" },
    { exam: "PTE", fee: "$170.00" },
    { exam: "PTE UKVI", fee: "$170.00" },
    { exam: "IDP IELTS", fee: "N270,000.00" },
    { exam: "IDP IELTS [UKVI]", fee: "N290,000.00" },
    { exam: "IDP IELTS [LIFE SKILL]", fee: "N255,000.00" },
    { exam: "DUOLINGO [ENGLISH]", fee: "$75.00" },
    { exam: "BRITISH COUNCIL [ IELTS]", fee: "N290,000.00" },
    { exam: "SELT [TWO SKILLS]", fee: "$200.00" },
    { exam: "SELT [FOUR SKILLS]", fee: "$260.00" },
    { exam: "IELTS UKVI", fee: "N291,000.00" },
    { exam: "IELTS LIFE SKILLS", fee: "N259,000.00" },
  ]

  return (
    <section id="registration" className="py-20 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
            Exam Registration Fees
          </h2>
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
            All registrations include free e-books and study materials
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#e50000] text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Examination/Test Name</th>
                  <th className="py-4 px-6 text-left font-semibold">Registration Fee</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {registrationFees.map((item, index) => (
                  <tr key={index} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="py-3 px-6 border-b border-gray-100">{item.exam}</td>
                    <td className="py-3 px-6 border-b border-gray-100">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
