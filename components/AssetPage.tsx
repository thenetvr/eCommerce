"use client";
import Image from 'next/Image'
import NavbarBackDrop from "@/components/NavbarBackDrop";
export default function AssetPage() {

    const displayShirts = () => {
        const formatShirts = []
        for (let i = 0; i < 5; i++) {
            formatShirts.push(<div className="ml-[10px] w-[280px] border-2 rounded-lg h-80 flex flex-col justify-center">
            <div> <Image className="inline-flex float-right mr-[15px] mt-[10px] mb-[5px]" src={"/heart.png"} width={"25"} height={"20"}/> </div>
            <Image className="mb-[10px] mt-[10px] mx-auto" src={"/shirt.png"} width={"260"} height={"100"}/>
            <p className="ml-[10px]">XQC T-shirt-1</p>
            <p className="ml-[10px]">10 LUX</p>
        </div>)
        }
        return formatShirts;
    }
    const productSections = ["Featured Products", "Newest Product", "Upcoming Products"]
    const formatProducts = []
    const showProducts = () => {
        for (let i = 0; i < productSections.length; i++) {
            formatProducts.push(
                <div className="mb-[40px]">
                    <h1 className="text-xl mt-[20px] ml-[10px] mb-[20px]"> {productSections[i]} </h1>
                    <div className="flex justify-between">
                        {displayShirts()}
                    </div>
                </div>
            )
        }
        return formatProducts
    }
    return(
    <div>
        <NavbarBackDrop name={"The Net VR Assets"}/>
        <div className="relative h-fit w-fit">
        <input type="text" className="bg-[length:30px_20px] bg-no-repeat bg-magnifyingGlass ml-[10px] pl-[40px] mt-[40px] mb-[20px] bg-[#3E6389] placeholder-white w-80 h-6 border-2 rounded" placeholder="Search"/>
        </div>

        {showProducts()}

        <br/>
    </div>);
}