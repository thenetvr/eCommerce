import React from "react";

export default function TheaterCard() {
  return (
    <div className="card md:w-72 md:h-80 bg-red-800 text-white rounded-lg p-10 m-3 w-full h-48 shadow-2xl shadow-orange-800">
      <div className="flex flex-col justify-end h-full gap-5">
        <div>
          <p className="font-bold">Learn</p>
          <h3 className="font-bold text-2xl">About Theater #X</h3>
        </div>
        <p>Design & Technology</p>
      </div>
    </div>
  );
}
