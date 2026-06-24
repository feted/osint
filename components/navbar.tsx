'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://images.squarespace-cdn.com/content/5f36d14c1f72076cfa6b46fb/1681154931981-D16LRXM3D23PD5VB0ZAA/OSINT_MAINICONB_FINAL_LORES-01.png" 
              alt="Government OSINT" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-foreground">OSINT Pro</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition">
              Features
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition">
              Pricing
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition">
              Documentation
            </Link>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border-border hover:bg-secondary"
            >
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary-light text-foreground">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
