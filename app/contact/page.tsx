import ContactData from "@/components/ContactData";
import ContactForm from "@/components/ContactForm";
import React from "react";

export default function page() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Please fill in the form</p>
      <ContactForm />
      <ContactData />
    </div>
  );
}
