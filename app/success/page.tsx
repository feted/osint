import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Payment Successful - OSINT Pro',
  description: 'Your subscription has been activated successfully',
}

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-16 w-16 text-primary" />
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-3">
          Payment Successful!
        </h1>

        <p className="text-muted-foreground mb-2">
          Thank you for subscribing to OSINT Pro.
        </p>

        <p className="text-muted-foreground mb-8">
          Your subscription is now active. A confirmation email has been sent to your inbox with your account details and access credentials.
        </p>

        <div className="space-y-3">
          <p className="text-sm text-foreground font-semibold">
            What's next?
          </p>
          <ul className="text-sm text-muted-foreground text-left space-y-2">
            <li>✓ Check your email for login credentials</li>
            <li>✓ Access your dashboard immediately</li>
            <li>✓ 24/7 support is available</li>
          </ul>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <Link href="/">
            <Button className="w-full bg-primary hover:bg-primary-light text-foreground">
              Return to Home
            </Button>
          </Link>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Questions? Contact our support team at support@osintpro.gov
        </p>
      </div>
    </main>
  )
}
