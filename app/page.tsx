import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Trust from '@/components/trust'
import PricingPlans from '@/components/pricing-plans'
import Features from '@/components/features'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <PricingPlans />
      <CTA />
      <Footer />
    </main>
  )
}
