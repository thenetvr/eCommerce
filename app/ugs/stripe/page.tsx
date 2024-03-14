import type { Metadata } from "next";
import "./styles.css";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Next.js + TypeScript Example",
};

export default function IndexPage(): JSX.Element {
  return (
    <ul className="card-list">
      <li>
        {/* <Link
          href="/ugs/stripe/stripe-with-embedded-checkout"
          className="card checkout-style-background"
        >
          <h2 className="bottom">Buy LuxRays with embedded checkout</h2>
          <img src="/checkout-one-time-payments.svg" />
        </Link> */}
      </li>
      <li>
        <Link
          href="/ugs/stripe/stripe-with-checkout"
          className="card checkout-style-background"
        >
          <h2 className="bottom">Buy LuxRays with Stripe checkout</h2>
          <img src="/checkout-one-time-payments.svg" />
        </Link>
      </li>
      {/* <li>
        <Link
          href="/ugs/stripe/stripe-with-elements"
          className="card elements-style-background"
        >
          <h2 className="bottom">Buy LuxRays with Elements</h2>
          <img src="/elements-card-payment.svg" />
        </Link>
      </li> */}
    </ul>
  );
}
