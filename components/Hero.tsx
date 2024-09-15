import Image from "next/image";
import React from "react";

const Hero = () => {
    return(
        <div className="flex justify-around mt-32">
            <div className="mt-16">
                <h1 className="max-w-[400px] text-4xl font-semibold pb-4 leading-12 text-indigo-800">Wallet Syncing is the process or operation of merging.</h1>
                <p className="max-w-[520px] text-md font-medium text-gray-700">Dapp Walletnode is a decentralized protocol. Dconnect create an innovative open-source software ecosystem that is both secure and resilient and it allows developers to create new online tools.</p>
            </div>
            <div>
                <Image src="/hero-img.png" width={600} height={600} alt="Hero img" />
            </div>
        </div>
    )
}

export default Hero;