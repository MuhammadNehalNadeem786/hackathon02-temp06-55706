import React from "react";
import Image from "next/image";
import ProductCard from "../components/Cards";

import img_1 from "@/app/images/image1.png"
import img_2 from "@/app/images/image2.png"
import img_3 from "@/app/images/image3.png"
import img_4 from "@/app/images/image4.png"
import img_5 from "@/app/images/Image5.png"
import img_6 from "@/app/images/image6.png"
import img_7 from "@/app/images/image7.png"
import img_8 from "@/app/images/image8.png"
import img_9 from "@/app/assets/image1.png"
import img_10 from "@/app/assets/image2.png"
import img_11 from "@/app/assets/image3.png"
import img_12 from "@/app/assets/image4.png"
import img_13 from "@/app/assets/Image5.png"
import img_14 from "@/app/assets/image6.png"
import img_15 from "@/app/assets/image7.png"
import img_16 from "@/app/assets/image8.png"


const products = [
    {
        img: img_1,
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        Discount: true,
    },
    {
        img: img_2,
        title: "Leviosa",
        description: "Luxury big sofa",
        price: "Rp 3.500.000",
    },
    {
        img: img_3,
        title: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        salePrice: "Rp 6.500.000",
        MegaSale: true,
    },
    {
        img: img_4,
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        isNew: true,
    },
    {
        img: img_5,
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        Discount: true,
    },
    {
        img: img_6,
        title: "Leviosa",
        description: "Luxury big sofa",
        price: "Rp 3.500.000",
    },
    {
        img: img_7,
        title: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        salePrice: "Rp 6.500.000",
        MegaSale: true,
    },
    {
        img: img_8,
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        isNew: true,
    },
    {
        img: img_1,
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        Discount: true,
    },
    {
        img: img_2,
        title: "Leviosa",
        description: "Luxury big sofa",
        price: "Rp 3.500.000",
    },
    {
        img: img_3,
        title: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        salePrice: "Rp 6.500.000",
        MegaSale: true,
    },
    {
        img: img_4,
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        isNew: true,
    },
    {
        img: img_5,
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        Discount: true,
    },
    {
        img: img_6,
        title: "Leviosa",
        description: "Luxury big sofa",
        price: "Rp 3.500.000",
    },
    {
        img: img_7,
        title: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        salePrice: "Rp 6.500.000",
        MegaSale: true,
    },
    {
        img: img_8,
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        isNew: true,
    }
];

const Product = () => {
    return (
        <div className="px-4 py-8 md:px-12">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))
                }
            </div>
            <div className="flex justify-center mt-8">
                <button className="px-6 py-2 bg-[#B88E2F] text-white rounded-md">
                    Show More
                </button>
            </div>
        </div>
    )
}

export default Product;
