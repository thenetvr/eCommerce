"use client";

import Image from 'next/image'
import Link from 'next/Link'
export default function Navbar() {
    return (
        <div className="sticky top-0 z-50">
            <div className="flex justify-between bg-gradient-to-r from-[#62474E] to-[#202369] h-20">
                <div className="hover:bg-gray-700 hover:text-white my-auto">
                    <Link href{""}> <Image className="w-20 h-12 ml-16" src="/netvrlogo.png"/> </Link>
                </div>
                <div className="my-auto text-lg">
                    <Link href={""} className="mx-9 text-gray-300 hover:bg-gray-700 hover:text-white">Store</Link>
                    <Link href={""} className="mx-9 text-gray-300 hover:bg-gray-700 hover:text-white">Asset maker</Link>
                    <Link href={""} className="mx-9 mt-[20px] text-gray-300 hover:bg-gray-700 hover:text-white">Player search</Link>
                </div>
            </div>
        </div>
    )
}