import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Master International Exams: Complete Preparation Guide",
      excerpt: "Comprehensive strategies and expert tips to excel in IELTS, SAT, TOEFL, and GRE exams...",
      image: "/images/services/INT_EXAMS.JPG",
    },
    {
      id: 2,
      title: "Career Guide: Paths in Tech",
      excerpt: "Explore different career paths in the technology sector and find what suits you.",
      image: "/images/services/TECH_WORKSHOP.JPG",
    },
    {
      id: 3,
      title: "Latest Tech Trends in 2025",
      excerpt: "Stay updated with the latest technologies shaping our digital future.",
      image: "/images/services/TALENT_RECRUITMENT.JPG",
    },
  ]

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">Recent Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:translate-y-[-5px] h-full flex flex-col"
            >
              <div className="h-[180px] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={180}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                <Link href="#" className="mt-auto">
                  <Button variant="default" size="sm">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="#">
            <Button>View All Posts</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
