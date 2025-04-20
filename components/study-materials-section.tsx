export default function StudyMaterialsSection() {
  const studyMaterials = [
    { material: "Latest official study guide for TOEFL iBT, Latest edition", price: "N20,000.00" },
    { material: "Latest official study guide for the new/revised GRE, Latest edition", price: "N20,000.00" },
    {
      material:
        "Official GRE Super Power Pack (Official Study Guide + Quantitative and Verbal Practice Questions & Answers)",
      price: "N20,000.00",
    },
    { material: "Latest Official Study Guide GMAT, Latest edition", price: "N20,000.00" },
    { material: "The Official SAT Study Guide 4 Practice Tests - Latest Edition", price: "N20,000.00" },
    { material: "The Official SAT Study Guide 8 Practice Tests - Latest Edition", price: "N25,000.00" },
    { material: "PTE Official Study Guide", price: "N20,000.00" },
    { material: "KAPLAN Study Guide for TOEFL, Latest Edition", price: "N15,000.00" },
    { material: "KAPLAN Study Guide for GRE, Latest Edition", price: "N15,000.00" },
    { material: "Official GRE Quantitative Reasoning, (150)Practice Questions, Latest Edition", price: "N10,000.00" },
    { material: "Official GRE Verbal Reasoning, (150)Practice Questions, Latest Edition", price: "N10,000.00" },
    { material: "BARRON IELTS STUDY GUIDE (ACADEMIC & GENERAL)", price: "N15,000.00" },
    { material: "CRACKING THE GMAT (THE PRINCETON REVIEW) Latest Edition", price: "N12,500.00" },
    { material: "CRACKING THE GRE (THE PRINCETON REVIEW) Latest Edition", price: "N12,500.00" },
  ]

  return (
    <section id="materials-section" className="py-20 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
            Study Materials
          </h2>
          <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Latest editions of official study guides and practice materials
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#e50000] text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Study Material</th>
                  <th className="py-4 px-6 text-left font-semibold">Price</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {studyMaterials.map((item, index) => (
                  <tr key={index} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="py-3 px-6 border-b border-gray-100">{item.material}</td>
                    <td className="py-3 px-6 border-b border-gray-100">{item.price}</td>
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
