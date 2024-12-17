import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png"
import Account from "../assets/account.png"
import Search from "../assets/search-icon.png"
import Heart from "../assets/heart-icon.png"
import Cart from "../assets/shopping-cart.png"

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="p-5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-5">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Image src={Logo} alt="logo" width={50} height={32} />
                    <h1 className="text-[24px] lg:text-[34px] font-bold text-black ml-2">Furniro</h1>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8 text-gray-700">
                    <Link href="/" className="hover:text-yellow-500">
                        Home
                    </Link>
                    <Link href="/shop" className="hover:text-yellow-500">
                        Shop
                    </Link>
                    <Link href="/blog" className="hover:text-yellow-500">
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:text-yellow-500">
                        Contact
                    </Link>
                </nav>

                {/* Icons Section */}
                <div className="items-center space-x-4 text-gray-700 flex justify-center md:justify-between w-full md:w-1/3 px-4 md:px-16 gap-4 md:gap-0">
                    <div className="hover:text-yellow-500">
                        <span className="sr-only">User Account</span>
                        <Image src={Account} alt="User Account" width={28} height={28} className="cursor-pointer hover:scale-105" />
                    </div>
                    <div className="hover:text-yellow-500">
                        <span className="sr-only">Search</span>
                        <Image src={Search} alt="Search" width={28} height={28} className="cursor-pointer hover:scale-105" />
                    </div>
                    <div className="hover:text-yellow-500">
                        <span className="sr-only">Favorites</span>
                        <Image src={Heart} alt="Favorites" width={28} height={28} className="cursor-pointer hover:scale-105" />
                    </div>
                    <div className="hover:text-yellow-500">
                        <span className="sr-only">Cart</span>
                        <Image src={Cart} alt="Cart" width={28} height={28} className="cursor-pointer hover:scale-105" />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="md:hidden bg-gray-100 py-2">
                <div className="flex justify-around text-gray-700">
                    <Link href="/home" className="hover:text-yellow-500">
                        Home
                    </Link>
                    <Link href="/shop" className="hover:text-yellow-500">
                        Shop
                    </Link>
                    <Link href="/blog" className="hover:text-yellow-500">
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:text-yellow-500">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
