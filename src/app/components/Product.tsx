import React from "react";
import Image from "next/image";

import img_1 from "@/app/images/image1.png"
import img_2 from "@/app/images/image2.png"
import img_3 from "@/app/images/image3.png"
import img_4 from "@/app/images/image4.png"
import img_5 from "@/app/images/Image5.png"
import img_6 from "@/app/images/image6.png"
import img_7 from "@/app/images/image7.png"
import img_8 from "@/app/images/image8.png"

const products = [
    { title: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", discount: "30%", img: img_1 },
    { title: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", img: img_2 },
    { title: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "50%", img: img_3 },
    { title: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", new: true, img: img_4 },
    { title: "Grifo", description: "Night lamp", price: "Rp 1.500.000", img: img_5 },
    { title: "Muggo", description: "Small mug", price: "Rp 150.000", new: true, img: img_6 },
    { title: "Pingky", description: "Cute bed set", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "50%", img: img_7 },
    { title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", new: true, img: img_8 },
];

const Product = () => {
    return (
        <div className="px-4 py-8 md:px-12">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="relative bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg group"
                    >
                        {product.discount && (
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                                -{product.discount}
                            </span>
                        )}
                        {product.new && (
                            <span className="absolute top-2 right-2 bg-green-500 text-white text-sm px-2 py-1 rounded-full">
                                New
                            </span>
                        )}

                        <div className="h-48 flex justify-center items-center relative">
                            <Image
                                src={product.img}
                                alt={product.title}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <div className="space-y-3 px-4">
                                    <button className="w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition-colors">
                                        Add to cart
                                    </button>

                                    <div className="flex justify-center gap-6 text-white">
                                        <button className="flex items-center gap-1 hover:text-gray-200">
                                            <span>Share</span>
                                        </button>
                                        <button className="flex items-center gap-1 hover:text-gray-200">
                                            <span>Compare</span>
                                        </button>
                                        <button className="flex items-center gap-1 hover:text-gray-200">
                                            <span>Like</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4">
                            <h2 className="font-bold text-lg truncate">{product.title}</h2>
                            <p className="text-sm text-gray-600 truncate">{product.description}</p>
                            <div className="mt-2">
                                <span className="text-lg font-semibold text-black">{product.price}</span>
                                {product.oldPrice && (
                                    <span className="text-sm text-gray-500 line-through ml-2">
                                        {product.oldPrice}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
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
