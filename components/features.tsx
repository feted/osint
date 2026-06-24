'use client'

export default function Features() {
  const features = [
    {
      title: 'Real-Time Data Aggregation',
      description: 'Access live feeds from 50,000+ intelligence sources with millisecond latency',
      icon: '🔍'
    },
    {
      title: 'Advanced Analytics',
      description: 'AI-powered pattern recognition and threat assessment algorithms',
      icon: '📊'
    },
    {
      title: 'Military-Grade Security',
      description: 'End-to-end encryption with FIPS 140-2 certification and SOC 2 compliance',
      icon: '🔒'
    },
    {
      title: 'API & Integration',
      description: 'RESTful API with webhook support for seamless system integration',
      icon: '⚙️'
    },
    {
      title: 'Audit Trail Logging',
      description: 'Complete audit logs for compliance and investigative purposes',
      icon: '📝'
    },
    {
      title: '24/7 Support',
      description: 'Dedicated support team with 15-minute response time SLA',
      icon: '🎯'
    }
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Enterprise Intelligence Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for government agencies and organizations that demand the highest standards of security and reliability
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 hover:border-primary/50"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
