"use client";

import React, { FormEvent, useReducer, useState } from "react";

// Interface for our state
interface FormState {
  fullname: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(
    (state: FormState, action: Partial<FormState>) => ({
      ...state,
      ...action,
    }),
    {
      fullname: "",
      email: "",
      message: "",
    }
  );
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fullname, email, message } = state;

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    success && dispatch({ fullname: "", email: "", message: "" });
    console.log(error);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="contactForm py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            placeholder="John Doe"
            value={state.fullname}
            onChange={(e) => dispatch({ fullname: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="john@gmail.com"
            value={state.email}
            onChange={(e) => dispatch({ email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            className="h-32"
            id="message"
            placeholder="Type your message here..."
            value={state.message}
            onChange={(e) => dispatch({ message: e.target.value })}
          />
        </div>

        <button type="submit" className="bg-green-700 p-3 text-white font-bold">
          Send
        </button>
      </form>
      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-600" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}
