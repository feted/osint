# OSINT Pro - Government Intelligence Platform Landing Page

A professional, fully responsive landing page for a government OSINT (Open-Source Intelligence) lookup application featuring 4 tiered pricing plans (Bronze, Silver, Gold, Platinum) with Cryptomus payment integration.

## 🎨 Design Features

### Visual Design
- **Black Background with Red Gradient**: Premium dark theme with striking red accent colors (#dc2626 primary, #991b1b accent)
- **Professional Aesthetic**: Government-grade design suitable for enterprise deployments
- **Fully Responsive**: Mobile-first design that adapts seamlessly from mobile to desktop
- **Red Gradient Accents**: Subtle gradient elements throughout for visual depth
- **Government Logo Integration**: US Federal Government seal icon using theSVG

### Color Palette
- **Background**: #0a0a0a (Deep black)
- **Foreground**: #ffffff (White text)
- **Primary**: #dc2626 (Vibrant red)
- **Primary Light**: #ef4444 (Bright red)
- **Accent**: #991b1b (Dark red)
- **Border**: #262626 (Subtle gray)
- **Muted**: #404040 (Medium gray)

## 📱 Responsive Design

The landing page is built mobile-first and includes:
- **Mobile**: Optimized layout for 320px+ devices
- **Tablet**: Enhanced spacing and grid layouts
- **Desktop**: Full-width with 4-column pricing grid

## 🏗️ Project Structure

```
/components
  ├── navbar.tsx          # Navigation bar with logo and CTAs
  ├── hero.tsx            # Hero section with headline and stats
  ├── features.tsx        # Enterprise features grid
  ├── pricing-plans.tsx   # 4-tier pricing comparison cards
  ├── cta.tsx             # Call-to-action section
  └── footer.tsx          # Footer with company links
/app
  ├── layout.tsx          # Root layout with metadata
  ├── page.tsx            # Main landing page
  └── globals.css         # Global styles and design tokens
```

## 💳 Pricing Tiers

### 1. **Bronze** - $99/month
For Individual Researchers
- 1,000 daily queries
- Basic data aggregation
- Email support
- Single user account
- Basic API access
- CSV export
- 30-day retention

### 2. **Silver** - $299/month
For Small Teams
- 10,000 daily queries
- Advanced analytics
- Priority support
- 5 user accounts
- Full API with webhooks
- All export formats
- 90-day retention
- Custom alerts

### 3. **Gold** - $999/month ⭐ RECOMMENDED
For Government Agencies
- Unlimited daily queries
- Machine learning analysis
- 24/7 dedicated support
- 25 user accounts
- Advanced API integration
- Direct DB access
- 1-year retention
- Threat intelligence feeds
- Team collaboration

### 4. **Platinum** - $2,999/month
For Enterprise Operations
- Unlimited queries & processing
- AI-powered threat detection
- Dedicated 24/7 support team
- Unlimited user accounts
- White-label API
- Real-time data warehouse
- Unlimited retention
- Custom training programs
- SLA guarantees

## 🔐 Security & Compliance

The platform includes:
- ✓ SOC 2 Certified
- ✓ FIPS 140-2 Compliant
- ✓ End-to-End Encryption
- ✓ SSL/TLS Encryption
- ✓ 99.9% Uptime SLA
- ✓ Military-grade Security
- ✓ Audit Trail Logging

## 💳 Payment Integration

**Cryptomus Integration Ready**: The landing page is built to support Cryptomus payment processing for both cryptocurrency and traditional payment methods. CTA buttons are in place for initiating payments on each pricing tier.

## 🚀 Getting Started

### Installation

1. Clone and install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React + theSVG for logos
- **Font**: Geist (system-ui fallback)

## 📊 Features Section

Six enterprise intelligence features highlighted:
- 🔍 Real-Time Data Aggregation
- 📊 Advanced Analytics
- 🔒 Military-Grade Security
- ⚙️ API & Integration
- 📝 Audit Trail Logging
- 🎯 24/7 Support

## 🌐 Navigation

- **Navbar**: Sticky navigation with logo, menu links, and CTA buttons
- **Hero**: Attention-grabbing headline with badge and stats
- **Features**: Grid of 6 key capabilities
- **Pricing**: 4-column responsive pricing table
- **CTA**: Final conversion section
- **Footer**: Company info and links

## 🎯 Key Selling Points

- 50,000+ Active Intelligence Feeds
- 99.9% Uptime Guarantee
- 1000+ Government Agencies
- Zero credit card required for trial
- 14-day free trial period
- Full feature access during trial

## 🔄 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

All typography, spacing, and layouts adapt smoothly across these breakpoints.

## 📝 SEO Optimization

- ✓ Dynamic metadata with title and description
- ✓ Semantic HTML structure
- ✓ Accessible color contrast
- ✓ ARIA labels and roles
- ✓ Mobile-friendly viewport
- ✓ Dark theme color scheme declaration

## 🎨 Customization

To customize colors, edit the theme variables in `/app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --primary: #dc2626;
  --accent: #991b1b;
  /* ... other variables */
}
```

## 📦 Dependencies

- `next`: 16+
- `react`: 19+
- `tailwindcss`: 4+
- `lucide-react`: Latest
- `axios`: For API calls (if needed)

## 🚢 Deployment

Ready to deploy on Vercel:

```bash
vercel deploy
```

Or build and run locally:

```bash
pnpm build
pnpm start
```

## 📄 License

This landing page is ready for production deployment with government agencies and enterprise organizations.

---

**Built with v0** - Professional landing page for OSINT intelligence platform with enterprise-grade design and security focus.
