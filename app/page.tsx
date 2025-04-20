import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StatementSection from "@/components/statement-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import GallerySection from "@/components/gallery-section"
import PartnersSection from "@/components/partners-section"
import EventsSection from "@/components/events-section"
import BlogSection from "@/components/blog-section"
import RegistrationSection from "@/components/registration-section"
import NewsletterSection from "@/components/newsletter-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatementSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <PartnersSection />
      <EventsSection />
      <BlogSection />
      <RegistrationSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
