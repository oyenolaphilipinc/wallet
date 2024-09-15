import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return(
        <div className="flex justify-around mt-2">
            <div className="flex gap-1">
                <Image src="/logo.png" width={40} height={40} alt="logo" />
                <span className="text-3xl mt-0.5 text-blue-800 font-semibold">Wallet Validation</span>
            </div>
            <div className="mt-2">
                <Link href="/" className="mr-2 text-md border border-white px-4 py-2 rounded-md bg-blue-600 text-white font-semibold">Synchronize Wallet</Link>
                <Link href="/" className="text-md border border-white px-4 py-2 rounded-md bg-blue-600 text-white font-semibold">Validate Wallet</Link>
            </div>
        </div>
    )
}

export default Navbar;