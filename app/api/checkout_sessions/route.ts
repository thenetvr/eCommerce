import { userAgent } from "next/server";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stringify } from "querystring";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: any, res: any) {

  // var userId = headers().get("userId") as any;
  // console.log('\ntest ' + userId);
  // const headersList = headers();
  // var userId = headersList.get("userId");

  console.log('\ntest ' + req.body.userId);
  console.log('\ntest ' + JSON.stringify(req.headers));

  switch (req.method) {
    case "POST":
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          ui_mode: 'embedded',
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of
              // the product you want to sell
              price: 'price_1OfHTgCBuJPk3sHtfpy4CbWG',
              quantity: 1,
            },
          ],
          mode: 'payment',
          return_url:
            `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
          automatic_tax: {enabled: true},
          metadata : {
            userId: req.body.userId,
            userToken1: req.body.userToken.slice(0,400),
            userToken2: req.body.userToken.slice(400,800),
            userToken3: req.body.userToken.slice(800,1200)
          }
        });

        res.send({clientSecret: session.client_secret});
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;
    case "GET":
      try {
        const session =
          await stripe.checkout.sessions.retrieve(req.query.session_id);

        res.send({
          status: session.status,
          customer_email: session.customer_details.email
        });
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;
    default:
      res.setHeader('Allow', req.method);
      res.status(405).end('Method Not Allowed');
  }
}