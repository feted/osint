'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function PricingPlans() {
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubscribe = async (planName: string, planPrice: string) => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planName,
          planPrice,
          userEmail: 'user@example.com',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create payment')
      }

      const data = await response.json()
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl
      } else {
        alert('Payment service unavailable. Please contact support.')
      }
    } catch (error) {
      console.error('[v0] Payment error:', error)
      alert('Failed to process payment. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleContactSales = () => {
    window.location.href = 'mailto:sales@osintpro.gov?subject=Enterprise%20Plan%20Inquiry'
  }

  const plans = [
    {
      name: 'Bronze',
      subtitle: 'For Individual Researchers',
      price: '$99',
      period: '/month',
      description: 'Essential OSINT capabilities for independent investigations',
      features: [
        'Up to 1,000 daily queries',
        'Basic data aggregation',
        'Email support',
        'Single user account',
        'Basic API access',
        'Data export (CSV)',
        '30-day data retention'
      ],
      cta: 'Subscribe Now',
      highlighted: false,
      gradient: 'from-orange-600 to-orange-900'
    },
    {
      name: 'Silver',
      subtitle: 'For Small Teams',
      price: '$299',
      period: '/month',
      description: 'Advanced analytics for coordinated investigations',
      features: [
        'Up to 10,000 daily queries',
        'Advanced analytics',
        'Priority email & chat support',
        'Up to 5 user accounts',
        'Full API access with webhooks',
        'Data export (all formats)',
        '90-day data retention',
        'Custom alerts and monitoring'
      ],
      cta: 'Subscribe Now',
      highlighted: false,
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Gold',
      subtitle: 'For Government Agencies',
      price: '$999',
      period: '/month',
      description: 'Professional-grade intelligence with advanced features',
      features: [
        'Unlimited daily queries',
        'Machine learning analysis',
        '24/7 phone & dedicated support',
        'Up to 25 user accounts',
        'Advanced API with custom integrations',
        'All export formats + direct DB access',
        '1-year data retention',
        'Custom alerts and threat intelligence',
        'Team collaboration tools',
        'Compliance reporting'
      ],
      cta: 'Contact Sales',
      highlighted: true,
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'Platinum',
      subtitle: 'For Enterprise Operations',
      price: '$2,999',
      period: '/month',
      description: 'Complete intelligence infrastructure with dedicated support',
      features: [
        'Unlimited queries & processing',
        'AI-powered threat detection',
        'Dedicated 24/7 support team',
        'Unlimited user accounts',
        'White-label API solutions',
        'Real-time data warehouse access',
        'Unlimited data retention',
        'Advanced threat intelligence feeds',
        'Integrated collaboration suite',
        'Compliance & audit automation',
        'Custom training programs',
        'SLA guarantees & priority processing'
      ],
      cta: 'Contact Enterprise',
      highlighted: false,
      gradient: 'from-gray-100 to-gray-300'
    }
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Pricing Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible pricing for organizations of all sizes. All plans include SSL/TLS encryption, FIPS compliance, and 99.9% uptime SLA.
          </p>
          
          {/* Cryptomus Payment Note */}
          <div className="inline-block px-4 py-3 rounded-lg bg-primary/10 border border-primary/30">
            <p className="text-sm text-foreground">
              💳 Secure payments powered by <span className="font-semibold">Cryptomus</span> - Accept crypto and traditional payments
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl border transition-all duration-300 overflow-hidden group h-full flex flex-col ${
                plan.highlighted
                  ? 'border-primary bg-secondary/40 shadow-2xl shadow-primary/20 md:scale-105'
                  : 'border-border bg-secondary/20 hover:border-primary/50 hover:bg-secondary/30'
              }`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative p-8 flex flex-col flex-1">
                {/* Highlight Badge */}
                {plan.highlighted && (
                  <div className="mb-4 inline-block w-fit">
                    <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/50">
                      <span className="text-xs font-semibold text-primary">⭐ RECOMMENDED</span>
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => {
                    if (plan.cta === 'Contact Sales' || plan.cta === 'Contact Enterprise') {
                      handleContactSales()
                    } else {
                      handleSubscribe(plan.name, plan.price)
                    }
                  }}
                  disabled={isLoading}
                  className={`w-full mb-8 h-10 font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary-light text-foreground disabled:opacity-50'
                      : 'border border-primary/50 bg-transparent text-foreground hover:bg-primary/10 disabled:opacity-50'
                  }`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  {isLoading ? 'Processing...' : plan.cta}
                </Button>

                {/* Features List */}
                <div className="space-y-3 flex-1">
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Info */}
        <div className="mt-16 p-8 rounded-lg border border-border bg-secondary/20">
          <h3 className="text-xl font-semibold text-foreground mb-2">Need a Custom Plan?</h3>
          <p className="text-muted-foreground mb-4">
            Our enterprise team can create tailored solutions for large-scale government deployments with custom features, dedicated infrastructure, and specialized support.
          </p>
          <Button 
            onClick={handleContactSales}
            className="bg-primary hover:bg-primary-light text-foreground"
          >
            Schedule Enterprise Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
