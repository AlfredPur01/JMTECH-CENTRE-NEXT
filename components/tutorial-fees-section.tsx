export default function TutorialFeesSection() {
  const tutorialFees = [
    {
      exam: "TOEFL",
      duration: "Four (4) weeks (weekday module) - 2 days per week",
      fee: "N30,000.00",
    },
    {
      exam: "GRE",
      duration: "Six (6) weeks (weekday module) - 2 days per week\nMorning and evening section",
      fee: "N40,000.00",
    },
    {
      exam: "GMAT",
      duration: "Six (6) weeks (weekday module) - 2 days per week\nMorning and evening section",
      fee: "N40,000.00",
    },
    {
      exam: "SAT",
      duration: "Six (6) weeks (weekday module) - 2 days per week\nMorning and evening section",
      fee: "N40,000.00",
    },
    {
      exam: "IELTS",
      duration: "Four (4) weeks (weekday module) - 2 days per week\nMorning and evening section",
      fee: "N30,000.00",
    },
    {
      exam: "PTE",
      duration: "Four (4) weeks (weekday module) - 2 days per week\nMorning and evening section",
      fee: "N40,000.00",
    },
  ]

  const classSchedule = [
    { day: "Monday", time: "9:00 AM–12:00 PM", class: "IELTS" },
    { day: "Monday", time: "2:00 PM–5:00 PM", class: "TOEFL" },
    { day: "Wednesday", time: "9:00 AM–12:00 PM", class: "TOEFL" },
    { day: "Wednesday", time: "2:00 PM–5:00 PM", class: "IELTS" },
    { day: "Friday", time: "9:00 AM–12:00 PM", class: "IELTS" },
    { day: "Friday", time: "2:00 PM–5:00 PM", class: "TOEFL" },
  ]

  return (
    <section id="tutorial-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
            Tutorial Fees
          </h2>
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
            All tutorials include online simulation tests
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md mb-16" data-aos="fade-up" data-aos-delay="200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#e50000] text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Examination/Test</th>
                  <th className="py-4 px-6 text-left font-semibold">Duration</th>
                  <th className="py-4 px-6 text-left font-semibold">Tutorial Fee</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {tutorialFees.map((item, index) => (
                  <tr key={index} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="py-3 px-6 border-b border-gray-100">{item.exam}</td>
                    <td className="py-3 px-6 border-b border-gray-100 whitespace-pre-line">{item.duration}</td>
                    <td className="py-3 px-6 border-b border-gray-100">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
            Class Schedule
          </h2>
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Regular weekly class timings for exam preparation
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#e50000] text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Day</th>
                  <th className="py-4 px-6 text-left font-semibold">Time Slot</th>
                  <th className="py-4 px-6 text-left font-semibold">Class</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {classSchedule.map((item, index) => (
                  <tr key={index} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="py-3 px-6 border-b border-gray-100">{item.day}</td>
                    <td className="py-3 px-6 border-b border-gray-100">{item.time}</td>
                    <td className="py-3 px-6 border-b border-gray-100">{item.class}</td>
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
