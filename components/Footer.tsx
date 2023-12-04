"use client";
import Image from 'next/image'
import TwitterIcon from "../public/twitter.png"
import FaceBookIcon from "../public/facebook.png"
import InstagramIcon from "../public/instagram.png"
import YoutubeIcon from "../public/youtube.png"
import DiscordIcon from "../public/discord.png"
import Link from 'next/Link'
export default function Footer() {
    const socialMedia = {"https://www.facebook.com/thenetvr":FaceBookIcon, "https://www.instagram.com/thenetvr":InstagramIcon, "https://twitter.com/thenetvr":TwitterIcon, "https://discord.com/invite/DpNy4Ur":DiscordIcon, "https://www.youtube.com/channel/UCWOD7IdEz0z6S-K3Sf6B86Q":YoutubeIcon}
    const Icons = () => {
        const formatIcons = []
        let i = 0
        for (let media in socialMedia) {
            // indigo border is faint on some icons so added white border.
            if (i % 2 !== 0 || i === Object.keys(socialMedia).length - 1) {
                formatIcons.push(
                    <Link href={media}>
                    <Image className="border h-[40px] w-[40px] mx-[20px] bg-indigo-500 rounded-full" src={socialMedia[media]}
                         alt={"can't display"}/></Link>)
            }
            else {
                formatIcons.push(
                <Link href={media}>
                <Image className="h-[40px] w-[40px] mx-[20px] bg-indigo-500 rounded-full" src={socialMedia[media]}
                     alt={"can't display"}/> </Link>)
            }
            i++
        }
        return formatIcons
    }
    return (
        <div className="flex flex-col justify-center bg-black w-full h-[480px]">
            <div className="flex justify-evenly text-white border-b border-solid border-white items-start">
                <div className="flex flex-col items-center [&>*]:mb-4 text-gray-500">
                    <p className="first:text-white">Product</p>
                    <p>Employee database</p>
                    <p>Payroll</p>
                    <p>Absences</p>
                    <p>Time tracking</p>
                    <p>Shift planner</p>
                    <p>Recruiting</p>
                </div>
                <div className="flex flex-col items-center w-40 [&>*]:mb-4 text-gray-500">
                    <p className="first:text-white"> Information</p>
                    <p>FAQ</p>
                    <p>Blog</p>
                    <p>Support</p>
                </div>
                <div className="flex flex-col items-center w-40 [&>*]:mb-4 text-gray-500">
                    <p className="first:text-white">Company</p>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Contact us</p>
                    <p>Lift Media</p>
                </div>
                <div className="flex flex-col w-[450px] h-72 bg-[#343434] rounded-[30px] mb-4 [&>*]:mb-4 [&>*]:ml-10">
                    <p className="font-bold text-lg mt-4">Subscribe</p>
                    <div className="flex w-fit">
                        <input className="rounded-l-md h-14 bg-white w-fit" type={"text"} placeholder="Email address"/>
                        <button className="rounded-r-sm bg-blue-500 h-full w-14"> <p className="font-bold"> -> </p> </button>
                    </div>
                    <p>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
                </div>
            </div>
            <div className="text-white w-full mt-10 text-center">
                <div className="w-1/5 inline-flex justify-between">
                <p>Terms</p>
                <p>Privacy</p>
                <p>Cookies</p>
                </div>
                <div className="inline-flex float-right">
                    {Icons()}
                </div>
            </div>
        </div>
    )
}