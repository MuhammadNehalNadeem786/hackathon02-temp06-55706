import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from "../components/Header"
import Acheivement from "../components/Achievement"
import Footer from "../components/Footer"
import sofa1 from "@/app/images/Sofa1.png"
import sofa2 from "@/app/images/Sofa2.png"
import ComparisonHero from '../components/ComparisonHero';

const ProductComparison = () => {
    return (
        <div>
            {/* Componenet Render */}
            <Header />
            <ComparisonHero/>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Sidebar and Header */}
                    <div className="col-span-full text-center lg:text-left">
                        <h1 className="text-lg font-bold">Go to Product page for more Products</h1>
                    </div>
                    {/* Product Cards */}
                    {products.map((product, index) => (
                        <div key={index} className="border rounded-lg shadow p-4">
                            <Image
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                            <p className="text-yellow-500">⭐ {product.rating}</p>

                            {/* Product Details */}
                            {Object.entries(product.details).map(([section, details]) => (
                                <div key={section} className="mt-4">
                                    <h3 className="font-bold text-md mb-2">{section}</h3>
                                    <ul>
                                        {details.map((detail, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <Link href={`/cart`}>
                                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                                    Add to Cart
                                </button>
                            </Link>
                        </div>
                    ))}
                    <div className="flex flex-col items-center space-y-2 md:space-y-4">
                        <h2 className="font-extrabold text-center md:text-left">
                            Add A Product
                        </h2>
                        <div className="relative w-full md:w-auto">
                            <Link href={`/shop`}>
                                <button className="w-full md:w-64 bg-yellow-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex justify-between items-center hover:bg-yellow-800">
                                    Choose a Product
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Componenet Render */}
                <Acheivement />
                <Footer />
            </div>
        </div>
    );
};

const products = [
    {
        image: sofa1,
        title: "Asgaard Sofa",
        rating: "4.5",
        details: {
            General: ["1 Additional sofa", "L-Shaped", "Synthetic Wood"],
            Product: ["Foam", "India"],
            Dimensions: ["Width: 36.0 cm", "Height: 45 cm"],
            Warranty: ["1 Year Warranty", "Covered in warranty: Manufacturing defects"]
        }
    },
    {
        image: sofa2,
        title: "Outdoor Sofa Set",
        rating: "4.8",
        details: {
            General: ["1 Three-Seater", "Synthetic Wood", "L-Shaped"],
            Product: ["Matte", "India"],
            Dimensions: ["Width: 38.0 cm", "Height: 42 cm"],
            Warranty: ["1 Year Warranty", "Covered in warranty: Manufacturing defects"]
        }
    }
];

export default ProductComparison;
