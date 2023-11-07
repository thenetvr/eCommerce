"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useReducer, useState } from "react";

// Interface for our state
interface FormState {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();

  const [state, dispatch] = useReducer(
    (state: FormState, action: Partial<FormState>) => ({
      ...state,
      ...action,
    }),
    {
      email: "",
      password: "",
    }
  );
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = state;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/auth/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Log In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Email"
            value={state.email}
            onChange={(e) => dispatch({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) => dispatch({ password: e.target.value })}
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Log In
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right" href={"/auth/signup"}>
            Don't have an account? <span className="underline">Sign Up</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
