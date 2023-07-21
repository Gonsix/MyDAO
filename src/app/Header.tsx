"use client"
import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";
export default function Header() {
    return (
        <div>
        <div className="flex flex-wrap justify-between  p-10">
            <p></p>
            <ConnectWallet theme="dark" />
        </div>
        </div>

    )
}
