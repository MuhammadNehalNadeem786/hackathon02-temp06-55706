"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import delete_icon from "@/app/images/delete_icon.png";
import Header from "../components/Header";
import CartHero from "../components/CartHero";
import Acheivement from "../components/Achievement";
import Footer from "../components/Footer";
import { useCart } from "@/context/cartContext";

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { fetchProducts } from '@/utils/fetch';
import { ProductType } from '@/types/product.types';
import { product } from '@/sanity/schemaTypes/product';
import AuthGuard from '../components/AuthGuard';

const Cartpage = () => {
    const { cart, removeFromCart } = useCart();
    const [products, setProducts] = useState<ProductType[]>(cart);

    useEffect(() => {
        setProducts(cart);
    }, [cart]);

    return (
        <div className="bg-white">
            {/* Components Render */}
            <Header />
            <CartHero />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Cart Details */}
                    <div className="sm:col-span-2 md:col-span-2">
                        {/* Nav */}
                        <div className="bg-[#F9F1E7] grid grid-cols-2 sm:grid-cols-4 text-center p-4">
                            <h6 className="font-bold text-black">Product</h6>
                            <h6 className="font-bold text-black">Price</h6>
                            <h6 className="font-bold text-black">Quantity</h6>
                            <h6 className="font-bold text-black">Subtotal</h6>
                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-4 items-center text-center gap-4 bg-gray-50 p-4 rounded-md">
                            {cart.map((product) => (
                                <React.Fragment key={product._id}>
                                    {/* Product Title */}
                                    <div className="text-gray-600">
                                        <h1 className="text-sm sm:text-base">{product?.title}</h1>
                                    </div>

                                    {/* Product Price */}
                                    <div className="text-gray-600">
                                        <p className="text-sm sm:text-base">${product.price}</p>
                                    </div>

                                    {/* Product Quantity */}
                                    <div>
                                        <input
                                            type="number"
                                            value={product.quantity}
                                            className="w-16 border border-gray-300 rounded-md text-center mx-auto"
                                        />
                                    </div>

                                    {/* Subtotal */}
                                    <div className="flex items-center justify-center">
                                        <p className="text-gray-600 mr-4 text-sm sm:text-base">${product.price}</p>
                                        <button onClick={() => removeFromCart(product._id!)} className="text-[#B88E2F]">
                                            <Image
                                                src={delete_icon}
                                                alt="delete-icon"
                                                className="object-cover"
                                                width={28}
                                                height={28}
                                            />
                                        </button>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Amount Section */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <div className="w-full border border-gray-200 rounded-lg p-6 bg-[#fdf7f1]">
                            <h6 className="font-bold text-black mb-4 text-xl text-center">Cart Totals</h6>

                            <div className="flex justify-between mb-4 text-sm sm:text-base">
                                <p className="text-black">Subtotal</p>
                                <p className="text-black">
                                    {cart.reduce((sum, product) => sum + (parseFloat(product?.price!) * product.quantity), 0).toFixed(2)}
                                </p>
                            </div>

                            <div className="flex justify-between mb-6 text-sm sm:text-base">
                                <h6 className="font-bold text-black">Total</h6>
                                <h6 className="font-bold text-[#B88E2F]">
                                    {cart.reduce((sum, product) => sum + (parseFloat(product?.price!) * product.quantity), 0).toFixed(2)}
                                </h6>
                            </div>

                            <div className="flex justify-center">
                                <Link href={`checkout`}>
                                    <button className="w-full max-w-xs text-black border-2 border-black py-2 bg-white hover:bg-gray-200 rounded-md p-2">
                                        Check Out
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Component Render */}
            <Acheivement />
            <AuthGuard>
                <Footer />
            </AuthGuard>
        </div>
    );
};

export default Cartpage;
