import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  img: string | StaticImageData;
  title: string;
  description?: string;
  price?: string;
  oldPrice?: string;
  salePrice?: string;
  MegaSale?: boolean;
  isNew?: boolean;
  Discount?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  img,
  title,
  description,
  price,
  salePrice,
  MegaSale,
  isNew,
  Discount,
}) => {
  return (
    <div className="relative group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-56">
        <Image src={img} alt={title} fill objectFit="cover" />
        {/* Sale or New Badge */}
        {MegaSale && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            50%
          </span>
        )}

        {Discount && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            30%
          </span>
        )}

        {isNew && (
          <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            New
          </span>
        )}
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity">
          <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded font-semibold text-black">
            Add to cart
          </button>

          <div className="flex justify-center gap-4 text-white mt-2">
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

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-2">
          {salePrice ? (
            <div>
              <span className="text-red-500 font-bold mr-2">{salePrice}</span>
              <span className="text-gray-400 line-through">{price}</span>
            </div>
          ) : (
            <span className="text-gray-900 font-bold">{price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
