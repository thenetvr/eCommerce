import Stripe from 'stripe';
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { NextRequest } from 'next/server';
// import { redirect } from 'next/dist/server/api-utils';
import { redirect } from 'next/navigation';
import { NextApiRequest, NextApiResponse } from 'next';


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextApiRequest) {
  // var playerId:any = req.body?.toString();
  var playerId:string = headers().get("playerId") as string;
  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        // price: 'price_1OfH2xCBuJPk3sHttklCp5EU',
        price: 'price_1OfHTgCBuJPk3sHtfpy4CbWG',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `https://localhost:3000/ugs/luxRay`,
    cancel_url: `https://example.com`,
    automatic_tax: {enabled: true},
    metadata: {
      "test": "test",
      "test1": "test2",
      "playerId" : playerId,
    },
    // metadata: {playerId: 1234},

  });
  //res.redirect(303, session.url);
  console.log("playerId: " + playerId);
  console.log(session.url);
  console.log(session);
  // redirect(session.url);
  //redirect();
  console.log(session.url);
  return NextResponse.json(session.url.replace(/"/ , ""));
  // res.status((err as any).statusCode || 500).json((err as any).message);
  // return NextResponse.json("error");
}