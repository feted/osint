'use client'

import { Shield, Lock, CheckCircle, Award } from 'lucide-react'

export default function Trust() {
  const certifications = [
    {
      icon: Shield,
      title: 'FIPS 140-2 Certified',
      description: 'Military-grade encryption standards'
    },
    {
      icon: Lock,
      title: 'SOC 2 Type II',
      description: 'Security audit compliance verified'
    },
    {
      icon: CheckCircle,
      title: 'ISO 27001',
      description: 'Information security management'
    },
    {
      icon: Award,
      title: 'FedRAMP Authorized',
      description: 'Federal authorization for agencies'
    }
  ]

  const agencies = [
    'FBI', 'DHS', 'NSA', 'CISA', 'DOD', 'Treasury',
    'State Department', 'ATF', 'ICE', 'CBP'
  ]

  return (
    <section className="py-20 md:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Trusted by U.S. Government Agencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade security and compliance for mission-critical intelligence operations
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon
            return (
              <div key={idx} className="p-6 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 transition-colors">
                <Icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            )
          })}
        </div>

        {/* Agency Trust Logos */}
        <div className="border-t border-border pt-16">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wide">
            Deployed across federal agencies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {agencies.map((agency, idx) => (
              <div key={idx} className="text-sm font-semibold text-foreground/60 hover:text-primary transition-colors">
                {agency}
              </div>
            ))}
          </div>
        </div>

        {/* Key Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.99%</div>
            <p className="text-muted-foreground">Enterprise SLA Uptime</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Dedicated Security Operations</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Zero</div>
            <p className="text-muted-foreground">Security Incidents in 5 Years</p>
          </div>
        </div>
      </div>
    </section>
  )
}
