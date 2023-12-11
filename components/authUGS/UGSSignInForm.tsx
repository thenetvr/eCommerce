"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useReducer, useState } from "react";
import axios from "axios";

// Interface for our state
interface FormState {
  username: string;
  password: string;
}

export default function UGSSignInForm() {
  const router = useRouter();

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { username, password } = state;
    // try {
    //   // use built-in 'signIn' function with 'next-auth'
    //   // pass 'credentials' provider found in 'api/auth/[...nextauth]/route.ts'
    //   const res:any = await signIn("credentials", {
    //     username,
    //     password,
    //     redirect: false,
    //   });

    //   if (res.error) {
    //     setError("Invalid Credentials");
    //     return;
    //   }

    //   // re-route to dashboard if login successful
    //   router.replace("/auth/dashboard");
    // } catch (err) {
    //   console.log(err);
    // }
    // check if all fields are entered
    //  for (const key in state) {
    //     if (state[key as string] === "") {
    //       console.log("please fill in the username and password fields");
    //       return;
    //     }
    //   }
    let configHeaders = {
      headers: {
        username: state.username,
        password: state.password,
      },
    };

    axios
      .get("http://localhost:3000/api/ugs/signin", {
        headers: {
          username: state.username,
          password: state.password,
        },
      })
      .then((response) => {
        console.log(response.data);
        window.localStorage.setItem(
          "signInToken",
          JSON.stringify(response.data)
        );
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(localStorage.getItem("signInToken"));
    console.log(state);
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Log In</h1>
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
            Log In
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right" href={"/ugs/signup"}>
            Dont have an account? <span className="underline">Sign Up</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
