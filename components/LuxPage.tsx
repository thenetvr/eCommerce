"use client";
import Image from 'next/Image'
import NavbarBackDrop from "@/components/NavbarBackDrop";
export default function LuxPage() {
    //mt-20
    const displayCards = () => {
        const cards = []
        for (let i = 0; i < 5; i++) {
            if (i % 2 !== 0) {
                cards.push(<div className="flex flex-col h-fit w-60 bg-[#0F1012] rounded-md mt-20 shadow-xl [&>*]:mt-6 [&>*]:ml-4 [&_img]:ml-8">
                <p className="text-[#285DFF] text-[10px]"> New </p>
                <p className={"font-bold text-xl"}>Buy 100 Lux</p>
                <Image src={"/ep_money.png"} width={"130"} height={"130"}/>
                <p className="flex justify-between text-xl mb-5 items-center">
                    <span className="hover:text-[#285DFF]">+</span>
                    <span className="bg-[#488BC1] hover:bg-gradient-to-r from-[#285DFF] to-[#361158] rounded-[6px] w-1/2 h-9 inline-flex justify-center items-center">Buy</span>
                    <span className="hover:text-[#285DFF] mr-4 text-2xl"><code>&#8212;</code></span>
                </p>
            </div>)
            }

            else {
                cards.push(<div className="flex flex-col h-fit w-60 bg-[#0F1012] rounded-md shadow-xl [&>*]:mt-6 [&>*]:ml-4 [&_img]:ml-8">
                    <p className="text-[#285DFF] text-[10px]"> New </p>
                    <p className={"font-bold text-xl"}>Buy 100 Lux</p>
                    <Image src={"/ep_money.png"} width={"130"} height={"130"}/>
                    <p className="flex justify-between mb-5 text-xl items-center">
                        <span className="hover:text-[#285DFF]">+</span>
                        <span className="bg-[#488BC1] hover:bg-gradient-to-r from-[#285DFF] to-[#361158] rounded-[6px] w-1/2 h-9 inline-flex justify-center items-center">Buy</span>
                        <span className="hover:text-[#285DFF] mr-4 text-2xl"><code>&#8212;</code></span>
                    </p>

                </div>)
            }
        }
        return cards;
    }
    return (
    <div>
        <NavbarBackDrop name={"Lux"}/>
        <div className={"pt-20 pl-8 h-fit"}>
            <div className="flex [&>*]:mr-14">
                {displayCards()}
            </div>
            <div className={"flex [&>*]:mr-14 mt-4 pb-8"}>
                {displayCards()}
            </div>
        </div>
    </div>
    );
}