// Partial of ./pages/api/checkout_sessions/index.ts
// ...
// Create Checkout Sessions from body params.
const params: Stripe.Checkout.SessionCreateParams = {
    submit_type: 'donate',
    payment_method_types: ['card'],
    line_items: [
      {
        name: 'Custom amount donation',
        amount: formatAmountForStripe(amount, CURRENCY),
        currency: CURRENCY,
        quantity: 1,
      },
    ],
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  };
  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);
  // ...
// "use client";
// import React, { useEffect, useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import {
//   EmbeddedCheckoutProvider,
//   EmbeddedCheckout
// } from '@stripe/react-stripe-js';
// import { headers } from "next/headers";


// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any);

// export default function EmbeddedStripe() {
//   const [clientSecret, setClientSecret] = useState('');

//   useEffect(() => {
//     console.log('test ' +JSON.parse(localStorage.getItem("signInToken") as string).userId as string);
//     var data = {
//       userId : JSON.parse(localStorage.getItem("signInToken") as string).userId as string,
//       userToken : JSON.parse(localStorage.getItem("signInToken") as string).idToken as string
//     }
//     var requestOptions = {
//       method: 'POST',
//       headers: {
//         "Content-Type" : "application/json",
//         "userId" : JSON.parse(localStorage.getItem("signInToken") as string).userId as string,
//         "userToken" : JSON.parse(localStorage.getItem("signInToken") as string).idToken as string
//       },
//       redirect: 'follow',
//       body: JSON.stringify(
//           data
//         )
//     };
//     console.log(requestOptions);
//     fetch("/api/checkout_sessions", requestOptions as any
//     // {

//     //   method: "POST",
//     //   headers: {
//     //     // Add your headers here
//     //     userId: JSON.parse(localStorage.getItem("signInToken") as string).userId as string,
//     //     userToken: JSON.parse(localStorage.getItem("signInToken") as string).idToken as string,
//     //     // Add any other headers you need
//     //     redirect: 'follow'

//     //   },
//     // }
//     )
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   return (
//     <div>
//         hi
//     <div id="checkout">
//       {clientSecret && (
//         <EmbeddedCheckoutProvider
//           stripe={stripePromise}
//           options={{clientSecret}}
//         >
//           <EmbeddedCheckout />
//         </EmbeddedCheckoutProvider>
//       )}
//     </div>
//     </div>
//   )
// }