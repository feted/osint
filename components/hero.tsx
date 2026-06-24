'use client'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl opacity-40 z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-block">
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 flex items-center gap-2">
              <span className="text-xs font-semibold text-primary">🚀 NEW</span>
              <span className="text-sm text-foreground">Advanced OSINT Intelligence Platform</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
            Government OSINT
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              {' '}Intelligence Platform
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Access comprehensive open-source intelligence data with military-grade security. Uncover insights across public records, social networks, and government databases in real-time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary-light text-foreground px-8 h-12 text-base">
              View Pricing & Plans
            </Button>
            <Button 
              variant="outline"
              className="w-full sm:w-auto border-border hover:bg-secondary text-foreground px-8 h-12 text-base"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 p-6 rounded-lg bg-secondary/20 border border-border/50 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">Enterprise Security Certifications:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary">FIPS 140-2</span>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary">SOC 2 Type II</span>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary">FedRAMP Authorized</span>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary">ISO 27001</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Active Intelligence Feeds</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.99%</div>
              <p className="text-muted-foreground">Enterprise SLA Uptime</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground">Government Agencies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
