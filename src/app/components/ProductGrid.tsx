"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProductCard from "../components/Cards";
import { fetchProducts } from "@/utils/fetch";
import { ProductType } from "@/types/product.types";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);// End loading
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true); // Start loading when fetching starts
            try {
                const data = await fetchProducts(); // Call the utility function
                setProducts(data); // Set products in the state
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);
    return (
        <div className="px-4 py-8 md:px-12">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Products</h1>

            {/* Flex container for the cards */}
            <div className="grid grid-cols-3 justify-center"> {/* Use flex-wrap and justify-center for wrapping and centering the cards */}
                {products.map((product: ProductType, index: React.Key | null | undefined) => (
                    <div key={index} className="p-2">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <button className="px-6 py-2 bg-[#B88E2F] text-white rounded-md">
                    Show More
                </button>
            </div>
        </div>

    );
};

export default Product;