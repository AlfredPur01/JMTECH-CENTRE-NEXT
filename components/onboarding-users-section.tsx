type UserGroupCardProps = {
  title: string
  description: string
}

function UserGroupCard({ title, description }: UserGroupCardProps) {
  return (
    <div className="bg-[#f9f9f9] p-5 h-full rounded-md">
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default function OnboardingUsersSection() {
  return (
    <section className="container mx-auto px-4 mt-12">
      <h2 className="text-2xl font-bold mb-4">Who is this program for?</h2>
      <p>This program is designed and made available for a wide variety of users:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <UserGroupCard
          title="Tertiary Institution (Public and Private)"
          description="Students of any discipline who have an interest in developing IT skills."
        />
        <UserGroupCard
          title="Educators (Teachers & Lecturers)"
          description="Teachers & Lecturers who want to enhance their work with relevant skills in IT could also enroll in the program."
        />
        <UserGroupCard
          title="National Youth Corps Members"
          description="Graduates who are currently serving and hope to start a career or a business with the help of technology."
        />
        <UserGroupCard
          title="Unemployed Graduates"
          description="Unemployed Graduates of any discipline who want to upskill themselves for jobs."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <UserGroupCard
          title="Secondary School (SS2 & SS3)"
          description="Students who have an interest/passion in developing IT skills could also enroll in the program and follow the track that will enhance their academics and future work."
        />
        <UserGroupCard
          title="Corporate Workers"
          description="Employees who want to build a career or switch careers in Tech."
        />
        <UserGroupCard
          title="Religious Institutions/Personnel"
          description="Religious Institutions who want to harness the advantage of Tech."
        />
      </div>
    </section>
  )
}
