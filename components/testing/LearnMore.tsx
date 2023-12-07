import React from "react";

export default function LearnMore() {
  return (
    <div className="flex md:flex-row md:gap-48 flex-col-reverse p-10 lg:px-40 gap-20 items-center">
      <div className="w-2/3 md:items-start md:text-left items-center text-center">
        <p>Community of Trusted Ones</p>
        <h2 className="text-3xl">Enter a new universe of connected services</h2>
        <p className="text-sm py-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam modi
          labore quaerat saepe sed recusandae consequuntur autem, atque
          excepturi cupiditate, doloribus dolore nisi. Voluptates similique
          rerum unde consequuntur. Assumenda, repellat? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Anon ipsa?
        </p>
        <button className="px-10 py-2 text-bold rounded-3xl bg-blue-500 text-white font-bold">
          Learn More
        </button>
      </div>
      <div className="w-[340px]">
        <div className="rounded-lg bg-orange-200 p-10">
          <span className="text-6xl">99%</span>
          <p className="text-2xl">Efficient than others</p>
        </div>
      </div>
    </div>
  );
}
