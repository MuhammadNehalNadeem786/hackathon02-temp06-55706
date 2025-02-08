"use client"
import React from "react";
import Image, { StaticImageData } from "next/image";
import Product from "../components/ProductGrid";
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../sanity/lib/client'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ProductType } from "@/types/product.types";
import { useCart } from "@/context/cartContext";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: ProductType
}

const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  const builder = imageUrlBuilder(client)
  function urlFor(source: SanityImageSource) {
    return builder.image(source)
  }
  const { addToCart, cart } = useCart();
  console.log("Product card: ", product)

  return (
    <div className="relative group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src={urlFor(product?.productImage!).url()}
          alt={product.title}
          fill
          className="object-cover"
        />

        {/* Hover Overlay */}

        <Link href={`/shop/${product._id}`}>

          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
            <div className="flex justify-center gap-4 text-white mt-2">
              <button className="flex items-center gap-1 hover:text-gray-200">
                <span>Share</span>
              </button>
              <Link href={`/comparison`}>
                <button className="flex items-center gap-1 hover:text-gray-200">
                  <span>Compare</span>
                </button>
              </Link>
              <button className="flex items-center gap-1 hover:text-gray-200">
                <span>Like</span>
              </button>
            </div>
          </div>
          
        </Link>

      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
        <h3 className="text-lg font-semibold text-gray-900">{product.tags}</h3>

        <div className="mt-2">
          {product.salePrice ?(
            <div>
              <span className="text-red-500 font-bold mr-2">{product.salePrice}</span>
              <span className="text-gray-400 line-through"> ${product.price}</span>
            </div>
          ) : (
            <span className="text-gray-900 font-bold"> ${product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
