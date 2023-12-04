import Hero from "@/components/testing/hero";
import LearnMore from "@/components/testing/learnMore";
import React from "react";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LearnMore />
    </div>
  );
}
