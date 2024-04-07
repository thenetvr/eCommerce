"use client";
import Image from 'next/image'
import NavbarBackDrop from "@/components/NavbarBackDrop";
import Category from './ui/category';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { FormEvent } from 'react'
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  );
function generateStripePaymentLink() {

    // const baseUrl = 'https://buy.stripe.com/3cs28Q36fco06T64gg';
    const baseUrl = 'https://buy.stripe.com/test_5kA4hadfL0T3bxC6oo';
    const queryParams = new URLSearchParams();
    // if (global?.window !== undefined) {
        // queryParams.append('utm_content', 
        //     JSON.parse(window.localStorage.getItem("signInToken") as string).userId as string+"-100");
    //}
    return `${baseUrl}?${queryParams.toString()}`;
};
var playerId:any;
var paymentLink: any;
if (typeof window !== "undefined") {
    playerId = JSON.parse(localStorage.getItem("signInToken") as string).userId as string | null;
} else{
    // nothing
}
paymentLink = generateStripePaymentLink();
// const form = document.getElementById('lux100');
// if (form != null){
// document.getElementById('lux100').addEventListener('submit', function(event) {
//     event.preventDefault(); // Stop the form from submitting normally

//     // Assuming you have the playerId available here

//     fetch('https://localhost:3000/api/stripe/checkoutSessions', {
//         method: 'POST',
//         headers: {
//             // Include the playerId in the request headers
//             'Content-Type': 'application/json',
//             'playerId': playerId,
//         },
//         // You might still want to send an empty JSON body if your endpoint expects a JSON payload
//         body: JSON.stringify({}),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//         // Handle success, e.g., redirecting to another page
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         // Handle errors, e.g., showing an error message
//     });
// });
// }
async function checkout(currencyId: string, amount: number){
    if (typeof window !== 'undefined') {
        if(currencyId == "LUXRAYS"){
            if(amount == 100){
                console.log("checkout LUXRAYS 100");
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
                fetch("https://localhost:3000/api/stripe/checkoutSessions", requestOptions as any)
                .then(response => response.text())
                // .then(result => localStorage.setItem("LUXRAYSBalance",JSON.parse(result).balance))
                .then(result => window.location.href = result.replace(/"/gm, ""))
                .catch(error => console.log('error', error));
                // window.location.reload();
            };
        };
    };
};

export default function LuxPage() {
    React.useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
        }
    
        if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
      }, []);
    //mt-20
    const displayCards = () => {
        const cards = []
        for (let i = 0; i < 5; i++) {
            if (i % 2 !== 0) {
                cards.push(<div className="flex flex-col h-fit w-60 bg-[#0F1012] rounded-md mt-20 shadow-xl [&>*]:mt-6 [&>*]:ml-4 [&_img]:ml-8">
                    <p className="text-[#285DFF] text-[10px]"> New </p>
                    <p className={"font-bold text-xl"}>Buy 100 Lux</p>
                    <Image src={"/ep_money.png"} width={"130"} height={"130"} alt={''} />
                    <p className="flex justify-between text-xl mb-5 items-center [&>*]:ease-in-out [&>*]:duration-100 [&>*]:delay-100">
                        <span className="hover:text-[#285DFF]">+</span>
                        {/* <a href={paymentLink} target="_blank" rel="noopener noreferrer"> */}
                        <span className="bg-[#488BC1] hover:bg-gradient-to-r from-[#285DFF] to-[#361158] rounded-[6px] w-1/2 h-9 inline-flex justify-center items-center">Buy</span>
                        {/* </a> */}
                        <span className="hover:text-[#285DFF] mr-4 text-2xl"><code>&#8212;</code></span>
                    </p>
                </div>)
            }

            else {
                cards.push(<div className="flex flex-col h-fit w-60 bg-[#0F1012] rounded-md shadow-xl [&>*]:mt-6 [&>*]:ml-4 [&_img]:ml-8">
                    <p className="text-[#285DFF] text-[10px]"> New </p>
                    <p className={"font-bold text-xl"}>Buy 100 Lux</p>
                    <Image src={"/ep_money.png"} width={"130"} height={"130"} alt={''} />
                    <p className="flex justify-between mb-5 text-xl items-center [&>*]:ease-in-out [&>*]:duration-100 [&>*]:delay-100">
                        <span className="hover:text-[#285DFF]">+</span>
                        <span className="bg-[#488BC1] hover:bg-gradient-to-r from-[#285DFF] to-[#361158] rounded-[6px] w-1/2 h-9 inline-flex justify-center items-center">Buy</span>
                        <span className="hover:text-[#285DFF] mr-4 text-2xl"><code>&#8212;</code></span>
                    </p>

                </div>)
            }
        }
        return cards;
    }
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        fetch('https://localhost:3000/api/stripe/checkoutSessions', {
          method: 'POST',
          body: formData,
        })
        console.log(formData);

        // Handle response if necessary
        // const data = await response.json()
        // ...
      }
    return (
        <div>
            <NavbarBackDrop name={"Lux"} />

            <div className={"pt-20 pl-8 h-fit"}>

                <div className="flex [&>*]:mr-14">
                    <Category />
                    <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2" 
                        onClick={() => checkout("LUXRAYS", 100)}>
                            Buy 100 LuxRays
                    </button> <br />
                    {displayCards()}
                </div>
                <div className={"flex [&>*]:mr-14 mt-4 pb-8"}>
                    {displayCards()}
                </div>
            </div>
        </div>
    );
}