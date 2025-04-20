export default function StatementSection() {
  return (
    <section id="about" className="py-16 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">The JM Tech Centre Statement</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black text-white p-8 rounded-lg relative h-full">
            <div className="text-[#e50000] text-4xl font-bold absolute top-4 left-4">&quot;</div>
            <p className="mt-10">To raise IT innovators for the development of Africa.</p>
            <h5 className="text-[#f8a100] absolute bottom-5 right-5 font-semibold">Vision</h5>
          </div>

          <div className="bg-black text-white p-8 rounded-lg relative h-full">
            <div className="text-[#e50000] text-4xl font-bold absolute top-4 left-4">&quot;</div>
            <p className="mt-10">
              Collaborate with Multinational IT Companies, Institutions, Entrepreneurs and Government for the training
              and development of young people to achieve their dreams through innovations in IT.
            </p>
            <h5 className="text-[#f8a100] absolute bottom-5 right-5 font-semibold">Mission</h5>
          </div>

          <div className="bg-black text-white p-8 rounded-lg relative h-full">
            <div className="text-[#e50000] text-4xl font-bold absolute top-4 left-4">&quot;</div>
            <p className="mt-10">
              The vision to develop JM Tech Centre of Excellence was borne out of a crucial desire to reduce poverty
              particularly in Nigeria and Africa in general.
            </p>
            <h5 className="text-[#f8a100] absolute bottom-5 right-5 font-semibold">Motivation</h5>
          </div>
        </div>
      </div>
    </section>
  )
}
