"use client";

import Image from "next/image";
import Link from "next/link";
import AssetPage from "@/components/AssetPage";
import LuxPage from "@/components/LuxPage";
import Bundles from "@/components/Bundles";
import ItemPage from "@/components/ItemPage"
export default function Home() {
  return (
    <ItemPage image={"/shirt.png"} name={"XQC T-Shirt -1"}/>
  )
}
