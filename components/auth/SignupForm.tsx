"use client";

import Link from "next/link";
import React, { FormEvent, useReducer, useState } from "react";
import { useRouter } from "next/navigation";

// Interface for our state
interface FormState {
  fullname: string;
  email: string;
  password: string;
}

export default function SignupForm() {
  const [state, dispatch] = useReducer(
    (state: FormState, action: Partial<FormState>) => ({
      ...state,
      ...action,
    }),
    {
      fullname: "",
      email: "",
      password: "",
    }
  );
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // destructure state
    const { fullname, email, password } = state;

    // error handling
    if (!fullname || !email || !password) {
      setError("All fields are necessary");
      return;
    }

    try {
      // change '/auth/signup' to '/api/auth/userExists' to access api
      let pathArray = window.location.pathname.split("/");
      pathArray = ["api", pathArray[1], "userExists"];
      let newPathArray = pathArray.join("/");

      // make POST request to '/api/auth/userExists'
      const resUserExists = await fetch(`/${newPathArray}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      // If user already exists (not null), show error
      const { user } = await resUserExists.json();
      if (user) {
        setError("User already exists");
        return;
      }

      // change path array's endpoint to '/api/auth/signup'
      pathArray[2] = "signup";
      newPathArray = pathArray.join("/");

      // make POST request to '/api/auth/signup' to create new DB collection instance
      const res = await fetch(`/${newPathArray}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          password,
        }),
      });

      // if user creation unsuccessful, console error
      if (!res.ok) {
        console.log("User Registration Failed");
        return;
      }

      // reset form fields & navigate back to home page
      dispatch({
        fullname: "",
        email: "",
        password: "",
      });
      router.push("/");
    } catch (err) {
      console.log("Error during registration", err);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Full Name"
            value={state.fullname}
            onChange={(e) => dispatch({ fullname: e.target.value })}
          />
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
            Sign Up
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right" href={"/auth/login"}>
            Already have an account? <span className="underline">Log In</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
