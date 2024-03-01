"use client";

import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="sticky top-0 z-50">
        <div className="flex items-center bg-[#1E293B] h-20 border-b-2 border-gray-400 text-lg [&_.logo]:text-2xl [&_.sign]:text[#b87508]">
          <div className={"flex justify-around w-1/3 [&>*]:ease-in-out [&>*]:duration-100 [&>*]:delay-100 hover:[&>*]:text-[#F6AF3B] "}>
              <Link
                href={"/ugs/store"}
                className="text-gray-300"
              >
                Store
              </Link>
              <Link
                href={"/"}
                className="text-gray-300"
              >
                Asset
              </Link>
              <Link
                href={"/ugs/lux"}
                className="text-gray-300"
              >
                Lux
              </Link>
          </div>

          <div className={"w-1/3 flex justify-center [&>*]:ease-in-out [&>*]:duration-100 [&>*]:delay-100 hover:[&>*]:text-[#F6AF3B]"}>
              <Link href={"/"} className={"logo text-gray-300"}>
                THE NET VR
              </Link>
          </div>

          <div className={"w-1/3 flex justify-around [&>*]:ease-in-out [&>*]:duration-100 [&>*]:delay-100"}>
              <Link href={""} className={"flex text-gray-300 hover:text-[#F6AF3B]"}>
                  User profile <Image alt={"test"} src={"/chevron-down.png"} width={20} height={20} className={"ml-2"}/>
              </Link>
              <Link href={""} className={"text-gray-300 hover:text-[#F6AF3B]"}>
                  Cart(0)
              </Link>
              <Link href={""} className={"text-gray-300 hover:text-[#e6950e]"}>
                  <span className={"sign bg-[#488BC1] rounded-lg px-2 py-2"}>Sign Up </span>
              </Link>
          </div>
      </div>
    </div>
  );
}
