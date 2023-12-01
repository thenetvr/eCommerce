"use client";

import Link from "next/link";
import React, { FormEvent, useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

// Interface for our state
interface FormState {
  username: string;
  password: string;
}

export default function SignupForm() {
  const [state, dispatch] = useReducer(
    (state: FormState, action: Partial<FormState>) => ({
      ...state,
      ...action,
    }),
    {
      username: "",
      password: "",
    }
  );
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // destructure state
    const { username, password } = state;

    // error handling
    if (!username || !password) {
      setError("All fields are necessary");
      return;
    }

    axios.get("http://localhost:3000/api/ugs/signup", {
    headers :{
    'username': state.username,
    'password': state.password,
    }
  })
    .then( (response)=> {
      console.log(response.data);
      window.localStorage.setItem("signUpToken",response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(localStorage.getItem("signUpToken"));
    console.log(state);
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Username"
            value={state.username}
            onChange={(e) => dispatch({ username: e.target.value })}
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
          <Link className="text-sm mt-3 text-right" href={"/ugs/signin"}>
            Already have an account? <span className="underline">Log In</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
