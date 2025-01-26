"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import Header from "../../components/Header"
import Acheivement from "../../components/Achievement"
import Footer from "../../components/Footer"

import { useParams } from "next/navigation";
import ProductGrid from "@/app/components/ProductGrid";
import { fetchProducts } from "@/utils/fetch";
import { CartItem, ProductType } from "@/types/product.types";
import { useCart } from "@/context/cartContext";



const ProductPage = () => {
    const { addToCart, cart, updateQuantity } = useCart();

    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true); // Start loading when fetching starts
            try {
                const data = await fetchProducts(); // Call the utility function
                setProducts(data); // Set products in the state
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false); // End loading
            }
        };

        getProducts();
    }, []);

    const { id } = useParams(); // id= 2
    const product = products.find(p => p._id === id);
    const [count, setCount] = useState(1);

    
    const cartProduct = cart.find((item) => item._id === product?._id);
    const quantity = cartProduct ? cartProduct.quantity : 0;

    const handleAddtoCart = () => {

        addToCart(product!, count)
        console.log(count)
        alert("product Added")

    }

    const increment = (p0: string, p1: number) => {
        setCount(prevCount => prevCount + 1);
         updateQuantity(product?._id!, count + 1); 
    };

    // Function to handle decrement
    const decrement = (p0: string, p1: number) => {
        setCount(prevCount => prevCount - 1);
        updateQuantity(product?._id!, count - 1); 
    };



    return (
        <div>
            <Header />
            <div className="container mx-auto p-4">
                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-4">
                    <a href="/" className="hover:underline">Home</a> / <a href="/shop" className="hover:underline">Shop</a> / <span>{product?.title}</span>
                </nav>

                {/* Product Details Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Product Images */}
                    {product?.productImage && (
                        <div>
                            <Image
                                src={product.productImage}
                                alt={product.title || "Product Image"}
                                width={500}
                                height={500}
                                className="rounded-md"
                            />
                        </div>
                    )}

                    {/* Product Info */}
                    <div>
                        <h1 className="text-2xl font-bold mb-2">{product?.title}</h1>
                        <div className="text-yellow-500 flex space-x-1 mb-4">
                            <span>⭐⭐⭐⭐⭐</span>
                            <span className="text-gray-500">(23 Reviews)</span>
                        </div>
                        <div>
                            <p className="text-2xl text-gray-800 font-semibold mb-4"> ${product?.price}</p>
                        </div>

                        {/* Options */}
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Color:</h3>
                            <div className="flex space-x-2">
                                <button className="w-6 h-6 rounded-full bg-gray-500 border-2 hover:border-black"></button>
                                <button className="w-6 h-6 rounded-full bg-blue-500 border-2 hover:border-black"></button>
                                <button className="w-6 h-6 rounded-full bg-yellow-500 border-2 hover:border-black"></button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Size:</h3>
                            <select className="border p-2 rounded-md">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select>
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-4">
                            <div className="flex items-center border border-gray-300 rounded-md w-fit">
                                <button className="px-4 py-2" onClick={() => {decrement(product?._id!, count - 1) }}>-</button>
                                <input
                                    type="text"
                                    value={count}
                                    className="w-[50px] text-center"
                                    readOnly
                                />
                                <button className="px-4 py-2" onClick={() => {increment(product?._id!, count + 1) }}>+</button>
                            </div>


                            <button onClick={handleAddtoCart} className="px-4 py-2 bg-blue-500 text-white rounded-md">Add to Cart</button>


                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md">Compare</button>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mt-12">
                    <div className="border-b mb-4">
                        <button className="pb-2 border-b-2 border-blue-500 text-blue-500 font-semibold mr-4">Description</button>
                        <button className="pb-2 text-gray-500 hover:text-blue-500">Additional Information</button>
                        <button className="pb-2 text-gray-500 hover:text-blue-500 ml-4">Reviews (0)</button>
                    </div>
                    <p className="text-gray-700">{product?.description}</p>
                </div>

                {/* Related Products */}
                <div className="mt-16">
                    <ProductGrid />
                </div>
                <Acheivement />
                <Footer />
            </div>
        </div>
    );
};

export default ProductPage;
