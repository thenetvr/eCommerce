"use client";
import Image from 'next/Image'
export default function NavbarBackDrop(props:{name:string}) {
    return (
        <div className="bg-gradient-to-br from-[#1C1D2C] to-[#0022D4] h-72 shadow-lg drop-shadow-lg">
            <h1 className="inline-block ml-6 mt-12 text-4xl font-bold">{props.name}</h1>
            <div className="flex ml-4 mt-16 [&>*]:ml-2">
            <Image src={"/icon1.png"} width={"20"} height={"20"}></Image>
            <Image src={"/icon2.png"} width={"20"} height={"20"}></Image>
            <Image src={"/icon3.png"} width={"20"} height={"20"}></Image>
            </div>
            <p className="ml-6 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Accusamus ea iure repellat suscipit voluptatem. <br/>A aliquam, error facilis obcaecati officiis velit voluptatem. <br/>Eos illo libero modi nisi numquam officiis vel!
            </p>
        </div>
    )
}