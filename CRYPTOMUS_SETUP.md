# Cryptomus Payment Integration Setup Guide

## Step 1: Get Your Cryptomus Credentials

1. Go to [Cryptomus Dashboard](https://admin.cryptomus.com)
2. Sign up or log in
3. Navigate to **Settings** → **API Keys**
4. Create new API key and copy:
   - **Merchant ID** (Public)
   - **API Key** (Secret - keep safe!)

## Step 2: Local Development Setup

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_CRYPTOMUS_MERCHANT_ID=your_merchant_id_here
CRYPTOMUS_API_KEY=your_secret_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Important:**
- `NEXT_PUBLIC_` = visible to browser (public)
- No prefix = secret, server-only (never expose to client)

## Step 3: Production Deployment (Vercel)

1. Go to your **Vercel Project** → **Settings** → **Environment Variables**
2. Add the same variables:
   - `NEXT_PUBLIC_CRYPTOMUS_MERCHANT_ID`
   - `CRYPTOMUS_API_KEY`
   - `NEXT_PUBLIC_APP_URL` (your production domain)

## Step 4: Configure Webhook in Cryptomus Dashboard

1. Cryptomus Dashboard → **Webhooks**
2. Add new webhook with URL:
   ```
   https://yourdomain.com/api/webhook/cryptomus
   ```
   (For local testing, use ngrok: `ngrok http 3000`)

3. Subscribe to events:
   - `payment.paid`
   - `payment.failed`
   - `payment.expired`

## How It Works

### Payment Flow:
1. User clicks "Subscribe Now" → Button triggers `handleSubscribe()`
2. Frontend sends POST to `/api/checkout` with plan details
3. Backend creates signature & calls Cryptomus API
4. Cryptomus returns checkout URL
5. Frontend redirects user to Cryptomus payment page

### Webhook Flow:
1. User completes payment on Cryptomus
2. Cryptomus sends POST to `/api/webhook/cryptomus`
3. Backend verifies signature (prevents fraud)
4. Backend updates database with payment status
5. Backend sends confirmation email to user

## Testing Locally

```bash
# Install ngrok for webhook testing
npm install -g ngrok

# In one terminal, start your app
npm run dev

# In another terminal, expose your app
ngrok http 3000

# Use ngrok URL as webhook in Cryptomus dashboard
# https://abc123.ngrok.io/api/webhook/cryptomus
```

## File Locations

- **Checkout API**: `/app/api/checkout/route.ts`
- **Webhook Handler**: `/app/api/webhook/cryptomus/route.ts`
- **Pricing Component**: `/components/pricing-plans.tsx`
- **Environment Config**: `.env.local` (not committed)

## Troubleshooting

**"Payment service not configured"**
- Check `.env.local` has both variables set
- Restart dev server after changing env vars

**"Failed to create payment"**
- Verify Merchant ID is correct (public)
- Check API Key is correct (secret)
- Ensure credentials match Cryptomus account

**Webhook not receiving payments**
- Verify webhook URL is public/accessible
- Check signature verification passes
- Review Cryptomus webhook logs

## Next Steps

After receiving webhook confirmation, you should:
1. Update database with subscription status
2. Generate API credentials for user
3. Send confirmation email
4. Activate user account

See TODO comments in `/app/api/webhook/cryptomus/route.ts`
