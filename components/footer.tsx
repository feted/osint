'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/us-federal-government/default.svg" 
                alt="OSINT Pro" 
                className="h-6 w-6"
              />
              <span className="font-bold text-foreground">OSINT Pro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Government-grade open-source intelligence platform for secure investigations.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Features</Link></li>
              <li><Link href="#pricing" className="text-muted-foreground hover:text-foreground transition">Pricing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Security</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">API Docs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">About</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Careers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Privacy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Terms</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Compliance</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Certifications</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Twitter</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">LinkedIn</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">GitHub</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 OSINT Pro. All rights reserved. Government intelligence made accessible.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-muted-foreground">🔒 SOC 2 Certified</span>
            <span className="text-muted-foreground">✓ FIPS 140-2</span>
            <span className="text-muted-foreground">🛡️ End-to-End Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
