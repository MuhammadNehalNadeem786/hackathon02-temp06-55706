import React from "react";
import Image from "next/image";
import rectang_img from "../images/Rectangle 1.png"

const Blog_Hero = () => {
    return (
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
            {/* Background Image */}
            <Image
                src={rectang_img}
                alt="Shop Background"
                width={1440}
                height={316}
                className="w-full h-full object-cover"
                priority
            />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-bold text-black">Blog</h1>
                <nav className="text-sm md:text-base mt-2">
                    <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Home / Blog</span>
                </nav>
            </div>
        </div>
    )
}

export default Blog_Hero;





























