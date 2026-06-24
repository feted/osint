'use client'

import { Button } from '@/components/ui/button'

export default function CTA() {
  const handleViewPricing = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleRequestConsultation = () => {
    window.location.href = 'mailto:sales@osintpro.gov?subject=Consultation%20Request'
  }

  return (
    <section className="py-20 md:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/5 overflow-hidden p-8 md:p-16">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl opacity-20" />

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                Ready to Transform Your Intelligence Operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join 1000+ government agencies using OSINT Pro to access real-time intelligence and make informed decisions faster than ever before.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleViewPricing}
                  className="bg-primary hover:bg-primary-light text-foreground px-8 h-12 text-base"
                >
                  View Pricing Plans
                </Button>
                <Button 
                  onClick={handleRequestConsultation}
                  variant="outline"
                  className="border-primary/50 text-foreground hover:bg-primary/10 px-8 h-12 text-base"
                >
                  Request Consultation
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-8">
                ✓ Enterprise-grade security • ✓ 24/7 dedicated support • ✓ FedRAMP certified
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
