import React from "react";
import TheaterCard from "./TheaterCard";

export default function CustomizeTheater() {
  return (
    <div className="px-12 py-6">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-3xl p-3">Customize Your Theater!</h2>
        <p className="w-96 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          laudantium? Est ha
        </p>
      </div>
      <div className="py-10 gap-8 md:flex md:items-center md:justify-center">
        {[1, 2, 3].map((item) => (
          <TheaterCard />
        ))}
      </div>
    </div>
  );
}
