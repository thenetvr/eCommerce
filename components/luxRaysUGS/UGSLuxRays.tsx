"use client";

import Link from "next/link";
import React, { FormEvent, useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

// Interface for our state
interface FormState {
  luxRays: number;
}

export default function SignupForm() {
    var myHeaders = new Headers();
    if (typeof window !== 'undefined') {
      myHeaders.append("playerId", JSON.parse(localStorage.getItem("signInToken") as string).userId as string);
      myHeaders.append("idToken", JSON.parse(localStorage.getItem("signInToken") as string).idToken as string);
    }
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
    if (typeof window !== 'undefined') {

    fetch("http://localhost:3000/api/ugs/economy/currency/currentPlayerCurrency", requestOptions as any)
    .then(response => response.text())
    .then(result => {console.log(JSON.parse(result).results[0].balance), localStorage.setItem("LUXRAYSBalance",JSON.parse(result).results[0].balance)})
    .catch(error => console.log('error', error));
    }

  var [state, setState] = useState(
    {
      luxRays: 0,
    }
  );
  if (typeof window !== 'undefined') {
    [state, setState] = useState(
      {
        luxRays: localStorage.getItem("LUXRAYSBalance") as unknown as number,
      }
    
    );
  }
  const [error, setError] = useState("luxRays");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (typeof window !== 'undefined') {

    e.preventDefault();

    // destructure state
    const { luxRays } = state;

    // error handling
    if (!luxRays) {
      setError("All fields are necessary");
      return;
    }

    axios.get("http://localhost:3000/api/ugs/signup", {
    headers :{
    'username': state.luxRays,
    }
  })
    .then( (response)=> {
      console.log(response.data);
      window.localStorage.setItem("signUpToken",JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(localStorage.getItem("signUpToken"));
    console.log(state);
  };
  };
  async function increment(currencyId: string, amount: number){
    if (typeof window !== 'undefined') {
    
    console.log("increment");
    var myHeaders = new Headers(); 
    myHeaders.append("playerId", JSON.parse(localStorage.getItem("signInToken") as string).userId as string);
    myHeaders.append("idToken", JSON.parse(localStorage.getItem("signInToken") as string).idToken as string);
    myHeaders.append("currencyId", currencyId as string);
    myHeaders.append("amount", amount as any);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      };
    fetch("http://localhost:3000/api/ugs/economy/currency/incrementPlayerCurrency", requestOptions as any)
    .then(response => response.text())
    .then(result => localStorage.setItem("LUXRAYSBalance",JSON.parse(result).balance))
    .catch(error => console.log('error', error));
    window.location.reload();
  };
  };
  function decrement(currencyId: string, amount: number){
    if (typeof window !== 'undefined') {
    console.log("decrement");
    var myHeaders = new Headers(); 
    myHeaders.append("playerId", JSON.parse(localStorage.getItem("signInToken") as string).userId as string);
    myHeaders.append("idToken", JSON.parse(localStorage.getItem("signInToken") as string).idToken as string);
    myHeaders.append("currencyId", currencyId as string);
    myHeaders.append("amount", amount as any);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      };
    fetch("http://localhost:3000/api/ugs/economy/currency/decrementPlayerCurrency", requestOptions as any)
    .then(response => response.text())
    .then(result => localStorage.setItem("LUXRAYSBalance",JSON.parse(result).balance))
    .catch(error => console.log('error', error));
    window.location.reload();

    }
  }
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <div>
            <h1>Current LuxRay: {state.luxRays}</h1>
            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2" onClick={() => increment("LUXRAYS", 100)}>Increment 100</button> <br />
            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2" onClick={() => decrement("LUXRAYS", 100)}>Decrement 100</button>
        </div>
      </div>
    </div>
  );
}