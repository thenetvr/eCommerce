import Image from 'next/image'
export default function Bundles() {
    let images = ["/roblox1.png", "/roblox2.png", "/roblox3.png", "/roblox4.png"]
    let creatorNames = ["XQC", "Pokimane", "Roblox"]
    const displayItemCards = () => {
        let colCards = []
        for (let i = 0; i < 3; i++) {
            let rowCards = []
            for (let j = 0; j < 8; j++) {
                let imageIndex = j % images.length
                let creatorIndex = j % creatorNames.length
                    rowCards.push(<div>
                        <div className="bg-gray-600 w-36 h-[133px] rounded-lg mx-4">
                            <Image src={images[imageIndex]} width={"130"} height={"130"} className={"ml-1 mt-4"}/>
                        </div>
                        <div className="mx-4 mt-2 mb-4">
                            <p> Pop Queen <br/> Superstar</p>
                            <p className="text-xs">By:{creatorNames[creatorIndex]}</p>
                        </div>
                    </div>)
            }
            colCards.push(<div className="flex mx-4">{rowCards}</div>)
        }
        return (
            <div>
                {colCards}
            </div>
        )
    }
    return (
        <div>
            <div className="flex justify-between w-[1420px]">
                <h1 className="text-3xl mt-4 ml-4">Bundles</h1>
                <h2 className="bg-[#488BC1] rounded-md mt-4 px-5 inline-flex items-center">Get More</h2>
            </div>
            {displayItemCards()}
        </div>
    )
}