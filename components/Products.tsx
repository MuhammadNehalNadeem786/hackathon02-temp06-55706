"use client"
import React from 'react';
import image1 from '@/public/assets/Images (1).png'
import image2 from '@/public/assets/Images.png'
import image3 from '@/public/assets/image 1.png'
import image4 from '@/public/assets/Images (2).png'
import image5 from '@/public/assets/image 6.png'
import image6 from '@/public/assets/image 8.png'
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image?: string ;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Slytherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    discount: 30,
    image: image1.src,
  },
  {
    id: 2,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 2500000,
    image: image2.src,
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 7000000,
    originalPrice: 14000000,
    discount: 50,
    image: image3.src,
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 500000,
    isNew: true,
    image: image4.src,
  },

  
  {
    id: 5,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 7000000,
    originalPrice: 14000000,
    discount: 50,
    image: image5.src,
  },
  {
    id: 6,
    name: 'Slytherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    discount: 30,
    image: image6.src,
  },
  {
    id: 7,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 2500000,
    image: image2.src,
  },
  {
    id: 8,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 500000,
    isNew: true,
    image: image3.src,
  },

  // Add other products...
];

const Products = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-10">Our Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg overflow-hidden shadow-sm relative group"
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="space-y-3 px-4">
                <Link href={`/shop/${product.id}`}>
                  <button className="w-full bg-white text-gray-900 py-2 rounded hover:bg-gray-100 transition-colors">
                    Add to cart
                  </button>
                </Link>
                
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

            <div className="relative aspect-square">
              <Image 
                src={product.image || '/placeholder.jpg'} // Add fallback image
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="w-full h-full object-cover"
              />
              {product.discount && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  -{product.discount}%
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm">
                  New
                </span>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.description}</p>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="font-semibold">
                  Rp {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">
                    Rp {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="block mx-auto px-8 py-3 border-2 border-orange-300 text-orange-500 font-medium rounded hover:bg-orange-700 hover:text-black transition-colors">
        Show More
      </button>
    </section>
  );
};

export default Products;