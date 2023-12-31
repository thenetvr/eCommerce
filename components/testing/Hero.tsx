import React from "react";

export default function Hero() {
  return (
    <div className="h-96 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-shadow shadow-cyan-500 text-4xl text-center w-full font-bold p-2">
          The Net VR
        </h1>
        <h1 className="text-shadow shadow-cyan-500 text-4xl text-center w-full font-bold p-2">
          E-Commerce Platform
        </h1>
        <p className="p-2 sm:w-96 w-full">
          Build a blockchain using the best-in-class open source libraries and
          services
        </p>
      </div>
    </div>
  );
}
