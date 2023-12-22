"use client";

import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between bg-gradient-to-br from-[#1C1D2C] via-blue-500 to-purple-600 h-20 border-b-2 border-gray-400">
        <div className="my-auto">
          <Link href={"/testing"}>
            {" "}
            <Image
              className="w-28 h-12 ml-2"
              src="/netvrlogotransparent.png"
              width="200"
              height="100"
              alt="image"
            />{" "}
          </Link>
        </div>
        <div className="my-auto text-lg [&>*]:ease-in-out [&>*]:duration-100 [&>*]:delay-100 hover:[&>*]:text-[#F6AF3B]">
          <Link
            href={"/ugs/store"}
            className="mx-9 text-gray-300"
          >
            Store
          </Link>
          <Link
            href={""}
            className="mx-9 text-gray-300"
          >
            Asset maker
          </Link>
          <Link
            href={"/ugs/lux"}
            className="mx-9 mt-[20px] text-gray-300"
          >
            Lux
          </Link>
        </div>
      </div>
    </div>
  );
}
