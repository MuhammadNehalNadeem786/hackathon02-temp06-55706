import Link from "next/link";
import React from "react"

const Footer = () => {
    return (
        <footer>
            <div className="px-5 py-10 flex flex-col md:flex-row justify-around gap-8 md:gap-0">
                <div className="space-y-5 text-center md:text-left">
                    <h1 className="text-2xl font-extrabold">Funiro.</h1>
                    <p className="text-gray-500">400 University Drive Suite 200 Coral Gables,</p>
                    <p className="text-gray-500 ">FL 33134 USA</p>
                </div>

                <div className="space-y-5 text-center md:text-left">
                    <p className="text-gray-400">Links</p>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>

                <div className="space-y-5 text-center md:text-left">
                    <p className="text-gray-400">Help</p>
                    <p>Payment Options</p>
                    <p>Returns</p>
                    <p>Privacy Policies</p>
                </div>

                <div className="space-y-5 text-center md:text-left">
                    <p className="text-gray-400">Newsletter</p>
                    <div className="flex flex-col md:flex-row gap-2 space-x-3 md:gap-0">
                        <input
                            type="email"
                            className=" font-sans bg-transparent border-b-2 border-black text-center md:text-left"
                            placeholder="Enter Your Email Address"/>
                        <Link href="#" className="font-semibold md:border-b-2 border-black">Subscribe</Link>
                    </div>
                </div>
            </div>

            <div className="border-t-2 px-10 py-2 text-center md:text-left">
                <p>2023 furino. All rights reserved</p>
            </div>
        </footer>
    )
}
export default Footer;