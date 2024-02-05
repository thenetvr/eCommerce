import { NextRequest, NextResponse } from "next/server";
// import { stripe } from '@utils/stripe';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
    try {
        console.log('Endpoint hit');
        /*
        const rawBody = await request.text();
        console.log('RAW BODY:', rawBody);
        const sig = request.headers.get('stripe-signature') || '';
        console.log('SIGNATURE', sig);
    
        let event: Stripe.Event;
        try {
          event = stripe.webhooks.constructEvent(
            rawBody,
            sig,
            'whsec_5e..'
          );
        } catch (err) {
          console.log(
            `Webhook signature verification failed.`
          );
          return NextResponse.json({ received: false }, { status: 400 });
        }
    
        switch (event.type) {
          case 'customer.subscription.created':
            console.log('case sub created');
            break;
          case 'payment_intent.succeeded':
            console.log('PAYMENT INTENT EVENT');
            break;
    
          default:
            // Unexpected event type
            console.warn(`Unhandled event type: ${event.type}`);
            break;
        }
    
        */
        // Return a 200 response to acknowledge receipt of the event
        return NextResponse.json({ received: true }, { status: 200 });
      } catch (e) {
        console.log('Error in POST function:', e);
        return NextResponse.json({ received: false }, { status: 500 });
      }
}