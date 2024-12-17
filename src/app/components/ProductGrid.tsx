import React from "react";
import ProductCard from "./Cards";
import Image from "next/image";
import img_1 from "../assets/image 1.png"
import img_2 from "../assets/image 2.png"
import img_3 from "../assets/image 3.png"
import img_4 from "../assets/image 4.png"
import img_5 from "../assets/image 5.png"
import img_6 from "../assets/image 6.png"
import img_7 from "../assets/image 7.png"
import img_8 from "../assets/image 8.png"
import img_9 from "../assets/image 1.png"
import img_10 from "../assets/image 2.png"
import img_11 from "../assets/image 3.png"
import img_12 from "../assets/image 4.png"
import img_13 from "../assets/image 5.png"
import img_14 from "../assets/image 6.png"
import img_15 from "../assets/image 7.png"
import img_16 from "../assets/image 8.png"

import { StaticImageData } from "next/image";

interface ProductCardProps {
    image: string | StaticImageData; // Allow both string and StaticImageData
    title: string;
    description: string;
    price: string;
    Discount: boolean;
    salePrice?: string;
    MegaSale?: boolean;
    isNew?: boolean;
}


const products = [
    {
        image: img_1.src,
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        Discount: true,
    },
    {
        image: img_2.src,
        title: "Leviosa",
        description: "Luxury big sofa",
        price: "Rp 3.500.000",
    },
    {
        image: img_3.src,
        title: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        salePrice: "Rp 6.500.000",
        MegaSale: true,
    },
    {
        image: img_4.src,
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        isNew: true,
    },
    {
        image: img_5.src,
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        Discount: true,
    },
    {
        image: img_6.src,
        title: "Leviosa",
        description: "Luxury big sofa",
        price: "Rp 3.500.000",
    },
    {
        image: img_7.src,
        title: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        salePrice: "Rp 6.500.000",
        MegaSale: true,
    },
    {
        image: img_8.src,
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        isNew: true,
    },
    {
        image: img_9.src,
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        Discount: true,
    },
    {
        image: img_10.src,
        title: "Leviosa",
        description: "Luxury big sofa",
        price: "Rp 3.500.000",
    },
    {
        image: img_11.src,
        title: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        salePrice: "Rp 6.500.000",
        MegaSale: true,
    },
    {
        image: img_12.src,
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        isNew: true,
    },
    {
        image: img_13.src,
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        Discount: true,
    },
    {
        image: img_14.src,
        title: "Leviosa",
        description: "Luxury big sofa",
        price: "Rp 3.500.000",
    },
    {
        image: img_15.src,
        title: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        salePrice: "Rp 6.500.000",
        MegaSale: true,
    },
    {
        image: img_16.src,
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        isNew: true,
    }
]

const ProductGrid = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>

            <div className="flex justify-center space-x-3 md:space-x-6 items-center p-4 md:p-8">
                <div className="px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-[#B88E2F]">1</div>
                <div className="px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-[#B88E2F]">2</div>
                <div className="px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-[#B88E2F]">3</div>
                <div className="px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-[#B88E2F]">Next</div>
            </div>

        </div>
    )
}

export default ProductGrid;
