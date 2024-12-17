import React from "react";
import ProductCard from "./Cards";

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
        image: "../assets/image1.png",
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        Discount: true,
    },
    {
        image: "../assets/image1.png",
        title: "Leviosa",
        description: "Luxury big sofa",
        price: "Rp 3.500.000",
    },
    {
        image: "@/app/assets/image3.png",
        title: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        salePrice: "Rp 6.500.000",
        MegaSale: true,
    },
    {
        image: "@/app/assets/image4.png",
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        isNew: true,
    },
    {
        image: "@/app/assets/image5.png",
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        Discount: true,
    },
    {
        image: "@/app/assets/image6.png",
        title: "Leviosa",
        description: "Luxury big sofa",
        price: "Rp 3.500.000",
    },
    {
        image: "@/app/assets/image7.png",
        title: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        salePrice: "Rp 6.500.000",
        MegaSale: true,
    },
    {
        image: "@/app/assets/image8.png",
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        isNew: true,
    },
    {
        image: "@/app/assets/image1.png",
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        Discount: true,
    },
    {
        image: "@/app/assets/image2.png",
        title: "Leviosa",
        description: "Luxury big sofa",
        price: "Rp 3.500.000",
    },
    {
        image: "@/app/assets/image3.png",
        title: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        salePrice: "Rp 6.500.000",
        MegaSale: true,
    },
    {
        image: "@/app/assets/image4.png",
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        isNew: true,
    },
    {
        image: "@/app/assets/image5.png",
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        Discount: true,
    },
    {
        image: "@/app/assets/image6.png",
        title: "Leviosa",
        description: "Luxury big sofa",
        price: "Rp 3.500.000",
    },
    {
        image: "@/app/assets/image7.png",
        title: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        salePrice: "Rp 6.500.000",
        MegaSale: true,
    },
    {
        image: "@/app/assets/image3.png",
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
