'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Image src="/logo.png" width={40} height={40} alt="logo" />
                        <span className="ml-2 text-xl font-semibold text-blue-700">Wallet Validation</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/wallet" className="px-3 py-2 rounded-md text-sm font-medium bg-blue-700 hover:bg-blue-600 transition-colors">
                                Synchronize Wallet
                            </Link>
                            <Link href="/wallet" className="px-3 py-2 rounded-md text-sm font-medium bg-blue-700 hover:bg-blue-600 transition-colors">
                                Validate Wallet
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/wallet" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-700 hover:bg-blue-600 transition-colors">
                            Synchronize Wallet
                        </Link>
                        <Link href="/wallet" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-700 hover:bg-blue-600 transition-colors">
                            Validate Wallet
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}