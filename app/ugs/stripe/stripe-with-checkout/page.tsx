import type { Metadata } from "next";

import CheckoutForm from "@/components/CheckoutForm";

export const metadata: Metadata = {
  title: "Buy with hosted Checkout | Next.js + TypeScript Example",
};

export default function DonatePage(): JSX.Element {
  return (
    <div className="page-container">
      <h1>Buy LuxRays with hosted Checkout</h1>
      <p>Buy LuxRays!</p>
      <CheckoutForm uiMode="hosted" />
    </div>
  );
}
