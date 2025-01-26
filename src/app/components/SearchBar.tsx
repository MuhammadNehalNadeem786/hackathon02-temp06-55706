"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchIcon from "../images/search-icon.png";
import Link from "next/link";
import { fetchProducts } from "@/utils/fetch";
import { ProductType } from "@/types/product.types";

const SearchBar = () => {
    const [query, setQuery] = useState("");
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

    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setQuery(e.target.value);
    };

    return (
        <div className="bg-slate-100 flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md px-2 relative">
            {/* Input Field */}
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleInputChange}
                    className="bg-transparent text-black w-full h-[40px] outline-none px-2 text-sm sm:text-base md:text-lg"
                />
                {/* Search Icon */}
                <div className="w-[28px] h-[24px] cursor-pointer hover:scale-105 flex items-center justify-center ml-2">
                    <Image
                        src={SearchIcon}
                        alt="Search Icon"
                        className="object-contain"
                        width={28}
                        height={24}
                    />
                </div>
            </div>

            {/* Dropdown Suggestions */}
            {query && (
                <div className="absolute top-[45px] left-0 w-full bg-white shadow-lg rounded-md border border-gray-200 z-10">
                    <ul className="py-2 text-sm text-gray-700">
                        {products
                            .filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
                            .map((item, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    <Link href={`/shop/${item._id}`}>
                                    {item.title}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;