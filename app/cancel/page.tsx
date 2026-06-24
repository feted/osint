import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { XCircle } from 'lucide-react'

export const metadata = {
  title: 'Payment Cancelled - OSINT Pro',
  description: 'Your payment was cancelled',
}

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <XCircle className="h-16 w-16 text-primary" />
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-3">
          Payment Cancelled
        </h1>

        <p className="text-muted-foreground mb-6">
          Your payment was not processed. Your subscription has not been activated.
        </p>

        <div className="bg-secondary/20 border border-border rounded-lg p-4 mb-8">
          <p className="text-sm text-foreground font-semibold mb-2">
            What can you do?
          </p>
          <ul className="text-sm text-muted-foreground text-left space-y-2">
            <li>• Try the payment process again</li>
            <li>• Use a different payment method</li>
            <li>• Contact support for assistance</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link href="/#pricing" className="block">
            <Button className="w-full bg-primary hover:bg-primary-light text-foreground">
              Return to Pricing
            </Button>
          </Link>
          <a href="mailto:support@osintpro.gov" className="block">
            <Button 
              variant="outline"
              className="w-full border-primary/50 text-foreground hover:bg-primary/10"
            >
              Contact Support
            </Button>
          </a>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Need help? Email us at support@osintpro.gov
        </p>
      </div>
    </main>
  )
}
