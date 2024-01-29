"use client";
import Image from 'next/image'
import {useState} from "react";
export default function NavbarBackDrop(props:{image:string, name:string}) {
    const categoryDescriptions = [{name:"Description", "content":"test", clicked:true}, {
        name:"Customer Reviews", "content":"Lorem ipsum dolor sit amet consectetur. Maecenas nullam eu et purus ultrices. Tempus maecenas massa venenatis ridiculus elementum dui tempus at.Lorem ipsum dolor sit amet consectetur. Maecenas nullam eu et purus ultrices. Tempus maecenas massa venenatis ridiculus elementum dui tempus at. Lorem ipsum dolor sit amet consectetur. " +
            "Maecenas nullam eu et purus ultrices. Tempus maecenas massa venenatis ridiculus elementum dui tempus at.", clicked:false},
            {name:"Write Reviews", "content":"Another test", clicked:false}]
    const [count, setCount] = useState(1)
    const [content, setContent] = useState("test")
    const [categoryList, setCategoryList] = useState(categoryDescriptions)

    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const displayStars = () => {
        const stars = []
        for (let i = 0; i < 5; i++) {
            stars.push(<Image src={"/yellowstar.png"} width={"15"} height={"10"}/>)
        }
        return stars
    }
    const displayShirts = () => {
        const shirts = []

        for (let i = 0; i < 4; i++) {
            shirts.push(<div className="bg-[#3F485C] ml-[10px] w-[320px] border-2 rounded-lg h-[350px] flex flex-col justify-center">
                    <div className={"flex border w-8 h-8 ml-2 rounded-2xl bg-[#01162F]"}>
                    <Image className="mx-auto my-auto mt-[10px]" src={"/heart.png"} width={"16"} height={"30"}/>
                    </div>
                    <Image className="mb-[10px] mt-[10px] mx-auto" src={"/shirt.png"} width={"260"} height={"100"}/>
                    <div className={"flex justify-between"}>
                        <div>
                        <p className="ml-[10px]">{props.name}</p>
                        <p className="ml-[10px]">10 LUX</p>
                            <div className={"flex ml-[10px]"}>
                            {displayStars()}
                            </div>
                        </div>
                        <div className={"border w-8 h-8 rounded-2xl bg-white mr-3"}>
                            <Image className="mx-auto mt-2" src={"/bx_cart.png"} width={"16"} height={"16"} />
                        </div>
                    </div>
                </div>)
        }
        return shirts
    }

    // handles changing "about products" text and determines which is clicked.
    const updateCategory = (name) => {
        setCategoryList(
            categoryList.map((category) => {
                if (category.name === name ) {
                    setContent(category.content)
                    return {...category, clicked:true}
                } else {
                    return {...category, clicked:false}
                }
            })
        )
    }

    return (
        <div>
            <script src="https://cdn.tailwindcss.com/3.3.3"></script>
            <div className="flex pt-20 pb-32 justify-center">
                <div className="w-[355px] h-[355px] ml-14 mr-20 border-2 flex justify-center items-center rounded-lg">
                    <Image src={props.image} width={"300"} height={"300"} className={""}/>
                </div>

                <div>
                    <h1 className="text-2xl">{props.name}</h1>
                    <div className={"flex h-4 mt-2"}>
                        {displayStars()}
                        <p className={"ml-4 text-xs"}>(Customer reviews)</p>
                    </div>
                    <p className="mt-6 text-xl">10 Lux</p>
                    <p className="mt-6">Lorem ipsum dolor sit amet consectetur. Maecenas nullam eu et purus ultrices. <br/> Tempus maecenas massa venenatis ridiculus elementum dui tempus at.</p>
                    <div className="flex mt-8 [&>*]:w-6 [&>*]:bg-gray-500 [&>*]:border [&>*]:ml-2 hover:[&>*]:bg-[#83B6E6] hover:[&>*]:text-black">
                        <button className="first:ml-0" onClick={incrementCount}>+</button>
                        <button className={"text-sm"}>{count}</button>
                        <button onClick={decrementCount}>-</button>
                    </div>
                    <div className="flex mt-8 [&>*]:border [&>*]:border-[#488BC1] hover:[&>*]:bg-[#488BC1] [&>*]:rounded-md [&>*]:w-28 [&>*]:h-8">
                        <button className="">Add to cart</button>
                        <button className="ml-8">Buy now</button>
                    </div>
                    <div className="flex [&>*]:ml-2 mt-10 [&>*]:bg-indigo-500 [&>*]:rounded-full [&>*:nth-child(2)]:ml-4 [&>*:nth-child(2)]:border [&>*:nth-child(2)]:border-indigo-500">
                        <p className="first:ml-0 first:bg-transparent">share to socials</p>
                        <Image className="" src={"/instagram.png"} width={25} height={15}/>
                        <Image src={"/facebook.png"} width={25} height={15}/>
                        <Image src={"/twitter.png"} width={25} height={15}/>
                    </div>
                </div>
            </div>

            <div className={"text-2xl flex font-bold justify-center pb-10"}>
                <h1>About Products</h1>
            </div>

            <div>
                <div className={"flex text-lg hover:[&>*]:border-indigo-500 hover:[&>*]:text-[#62B9FF] [&>*]:ease-in-out [&>*]:duration-100 [&>*]:delay-100"}>
                    <h1 className={`border-b-[6px] w-44 pb-2 ${categoryList[0].clicked ? 'border-indigo-500 text-[#62B9FF]' : 'border-gray-700'}` } onClick={() => updateCategory("Description")}>Description</h1>
                    <h1 className={`relative border-b-[6px] w-60 pl-8 ${categoryList[1].clicked ? 'border-indigo-500 text-[#62B9FF]' : 'border-gray-700'}`} onClick={() => updateCategory("Customer Reviews")}>Customer Reviews</h1>
                    <h1 className={`relative border-b-[6px] pl-14 w-4/5 ${categoryList[2].clicked ? 'border-indigo-500 text-[#62B9FF]' : 'border-gray-700'}`} onClick={() => updateCategory("Write Reviews")}>Write Reviews</h1>
                </div>
                <p> {content} </p>
            </div>

            <div className={"mt-20 text-2xl flex justify-center mb-12"}>
                <p>Related Products</p>
            </div>

            <div className={"flex [&>*]:mr-8 pb-20"}>
                {displayShirts()}
            </div>
        </div>
    );
}