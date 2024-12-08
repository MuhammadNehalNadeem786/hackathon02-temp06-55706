'use client';
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import image1 from '@/public/assets/Images (1).png'
import image2 from '@/public/assets/Images.png'
import image3 from '@/public/assets/image 1.png'
import image4 from '@/public/assets/Images (2).png'
import image5 from '@/public/assets/image 6.png'
import image6 from '@/public/assets/image 8.png'
import Navbar from '@/components/Navbar';
import Banifits from '@/components/Banifits';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Cards from '@/components/Cards';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

const SingleProduct = () => {

    interface Review {
        user: string;          // Name of the reviewer
        rating: number;            // Rating given by the reviewer (e.g., out of 5)
        comment: string;           // Optional comment from the reviewer
      }
    interface Product {
        id: number;                // Unique identifier for the product
        name: string;              // Name of the product
        description: string;       // Description of the product
        price: number;             // Current price of the product
        originalPrice?: number;    // (Optional) Original price before discount
        discount?: number;         // (Optional) Discount percentage
        image?: string;            // (Optional) URL or path of the product image
        isNew?: boolean;           // (Optional) Indicates if the product is new
        additionalInfo?: string;   // (Optional) Additional details about the product
        category?: string;         // (Optional) Product category (e.g., "Furniture > Chairs")
        tags?: string[];           // (Optional) Array of tags for product classification
        reviews?: Review[];        // (Optional) Array of reviews for the product
      }
      const products: Product[] = [
        {
          id: 1,
          name: 'Slytherine',
          description: 'A stylish and comfortable cafe chair, perfect for modern interiors.',
          price: 2500000,
          originalPrice: 3500000,
          discount: 30,
          image: image1.src,
          reviews: [
            { user: 'John Doe', rating: 4.5, comment: 'Very stylish and sturdy!' },
            { user: 'Jane Smith', rating: 4, comment: 'Great value for money.' }
          ],
          additionalInfo: 'Made with premium oak wood and eco-friendly paint. Weight capacity: 120kg.',
          category: 'Furniture > Chairs',
          tags: ['Cafe', 'Stylish', 'Modern', 'Durable']
        },
        {
          id: 2,
          name: 'Leviosa',
          description: 'A sleek and modern cafe chair to enhance your decor.',
          price: 2500000,
          image: image2.src,
          reviews: [
            { user: 'Emily Clark', rating: 4, comment: 'Good chair, but the price could be lower.' },
            { user: 'Mark Johnson', rating: 4.2, comment: 'Stylish and comfortable.' }
          ],
          additionalInfo: 'Ergonomic design with cushioned seat. Lightweight and easy to move.',
          category: 'Furniture > Chairs',
          tags: ['Cafe', 'Sleek', 'Comfortable']
        },
        {
          id: 3,
          name: 'Lolito',
          description: 'A luxury big sofa designed for ultimate comfort and elegance.',
          price: 7000000,
          originalPrice: 14000000,
          discount: 50,
          image: image3.src,
          reviews: [
            { user: 'Sophia Wilson', rating: 5, comment: 'Absolutely love this sofa, worth every penny!' },
            { user: 'Michael Brown', rating: 4.8, comment: 'Spacious and comfortable, fits perfectly in my living room.' }
          ],
          additionalInfo: 'Premium leather upholstery with a solid wood frame. Seats up to 5 people.',
          category: 'Furniture > Sofas',
          tags: ['Luxury', 'Comfort', 'Elegant', 'Spacious']
        },
        {
          id: 4,
          name: 'Respira',
          description: 'Outdoor bar table and stool set for relaxing outdoor evenings.',
          price: 500000,
          isNew: true,
          image: image4.src,
          reviews: [
            { user: 'Chris Evans', rating: 4.6, comment: 'Great for my patio!' },
            { user: 'Sarah Lee', rating: 4.7, comment: 'Compact and stylish.' }
          ],
          additionalInfo: 'Weather-resistant materials, suitable for patios and gardens. Includes a table and two stools.',
          category: 'Furniture > Outdoor',
          tags: ['Outdoor', 'Bar', 'Stylish', 'Durable']
        },
        {
          id: 5,
          name: 'Lolito',
          description: 'A luxury big sofa designed for ultimate comfort and elegance.',
          price: 7000000,
          originalPrice: 14000000,
          discount: 50,
          image: image5.src,
          reviews: [
            { user: 'Sophia Wilson', rating: 5, comment: 'Absolutely love this sofa, worth every penny!' },
            { user: 'Michael Brown', rating: 4.8, comment: 'Spacious and comfortable, fits perfectly in my living room.' }
          ],
          additionalInfo: 'Premium leather upholstery with a solid wood frame. Seats up to 5 people.',
          category: 'Furniture > Sofas',
          tags: ['Luxury', 'Comfort', 'Elegant', 'Spacious']
        },
        {
          id: 6,
          name: 'Slytherine',
          description: 'A stylish and comfortable cafe chair, perfect for modern interiors.',
          price: 2500000,
          originalPrice: 3500000,
          discount: 30,
          image: image6.src,
          reviews: [
            { user: 'John Doe', rating: 4.5, comment: 'Very stylish and sturdy!' },
            { user: 'Jane Smith', rating: 4, comment: 'Great value for money.' }
          ],
          additionalInfo: 'Made with premium oak wood and eco-friendly paint. Weight capacity: 120kg.',
          category: 'Furniture > Chairs',
          tags: ['Cafe', 'Stylish', 'Modern', 'Durable']
        },
        {
          id: 7,
          name: 'Leviosa',
          description: 'A sleek and modern cafe chair to enhance your decor.',
          price: 2500000,
          image: image2.src,
          reviews: [
            { user: 'Emily Clark', rating: 4, comment: 'Good chair, but the price could be lower.' },
            { user: 'Mark Johnson', rating: 4.2, comment: 'Stylish and comfortable.' }
          ],
          additionalInfo: 'Ergonomic design with cushioned seat. Lightweight and easy to move.',
          category: 'Furniture > Chairs',
          tags: ['Cafe', 'Sleek', 'Comfortable']
        },
        {
          id: 8,
          name: 'Respira',
          description: 'Outdoor bar table and stool set for relaxing outdoor evenings.',
          price: 500000,
          isNew: true,
          image: image3.src,
          reviews: [
            { user: 'Chris Evans', rating: 4.6, comment: 'Great for my patio!' },
            { user: 'Sarah Lee', rating: 4.7, comment: 'Compact and stylish.' }
          ],
          additionalInfo: 'Weather-resistant materials, suitable for patios and gardens. Includes a table and two stools.',
          category: 'Furniture > Outdoor',
          tags: ['Outdoor', 'Bar', 'Stylish', 'Durable']
        },
        {
          id: 9,
          name: 'Slytherine',
          description: 'A stylish and comfortable cafe chair, perfect for modern interiors.',
          price: 2500000,
          originalPrice: 3500000,
          discount: 30,
          image: image6.src,
          reviews: [
            { user: 'John Doe', rating: 4.5, comment: 'Very stylish and sturdy!' },
            { user: 'Jane Smith', rating: 4, comment: 'Great value for money.' }
          ],
          additionalInfo: 'Made with premium oak wood and eco-friendly paint. Weight capacity: 120kg.',
          category: 'Furniture > Chairs',
          tags: ['Cafe', 'Stylish', 'Modern', 'Durable']
        },
        {
          id: 10,
          name: 'Leviosa',
          description: 'A sleek and modern cafe chair to enhance your decor.',
          price: 2500000,
          image: image2.src,
          reviews: [
            { user: 'Emily Clark', rating: 4, comment: 'Good chair, but the price could be lower.' },
            { user: 'Mark Johnson', rating: 4.2, comment: 'Stylish and comfortable.' }
          ],
          additionalInfo: 'Ergonomic design with cushioned seat. Lightweight and easy to move.',
          category: 'Furniture > Chairs',
          tags: ['Cafe', 'Sleek', 'Comfortable']
        },
        {
          id: 11,
          name: 'Respira',
          description: 'Outdoor bar table and stool set for relaxing outdoor evenings.',
          price: 500000,
          isNew: true,
          image: image3.src,
          reviews: [
            { user: 'Chris Evans', rating: 4.6, comment: 'Great for my patio!' },
            { user: 'Sarah Lee', rating: 4.7, comment: 'Compact and stylish.' }
          ],
          additionalInfo: 'Weather-resistant materials, suitable for patios and gardens. Includes a table and two stools.',
          category: 'Furniture > Outdoor',
          tags: ['Outdoor', 'Bar', 'Stylish', 'Durable']
        },
        {
          id: 12,
          name: 'Slytherine',
          description: 'A stylish and comfortable cafe chair, perfect for modern interiors.',
          price: 2500000,
          originalPrice: 3500000,
          discount: 30,
          image: image6.src,
          reviews: [
            { user: 'John Doe', rating: 4.5, comment: 'Very stylish and sturdy!' },
            { user: 'Jane Smith', rating: 4, comment: 'Great value for money.' }
          ],
          additionalInfo: 'Made with premium oak wood and eco-friendly paint. Weight capacity: 120kg.',
          category: 'Furniture > Chairs',
          tags: ['Cafe', 'Stylish', 'Modern', 'Durable']
        },
        {
          id: 13,
          name: 'Leviosa',
          description: 'A sleek and modern cafe chair to enhance your decor.',
          price: 2500000,
          image: image2.src,
          reviews: [
            { user: 'Emily Clark', rating: 4, comment: 'Good chair, but the price could be lower.' },
            { user: 'Mark Johnson', rating: 4.2, comment: 'Stylish and comfortable.' }
          ],
          additionalInfo: 'Ergonomic design with cushioned seat. Lightweight and easy to move.',
          category: 'Furniture > Chairs',
          tags: ['Cafe', 'Sleek', 'Comfortable']
        },
    ]
      



  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  // Add color and size options
  const colorOptions = ['#6B7FB7', '#986B9C', '#A48D6B'];
  const sizeOptions = ['L', 'XL', 'XS'];

  // Add state for quantity
  const [quantity, setQuantity] = React.useState(1);

  // Add to cart handler
  const handleAddToCart = () => {
    console.log("click buton");
    
    toast.success(`Added ${quantity} ${product?.name} to cart`, {
      description: `Quantity: ${quantity}`,
      action: {
        label: "View Cart",
        onClick: () => console.log("View cart clicked"),
      },
    });
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="text-center py-12">Product not found</div>
        <Banifits/>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/" className="text-gray-600 hover:text-orange-500">Home</Link>
          <span className="text-gray-400">/</span>
          <Link href="/shop" className="text-gray-600 hover:text-orange-500">Shop</Link>
          <span className="text-gray-400">/</span>
          <span className="text-orange-500 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={product.image || '/placeholder.jpg'}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
            />
            {product.discount && (
              <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                -{product.discount}% OFF
              </span>
            )}
            {product.isNew && (
              <span className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                New Arrival
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-400 text-lg">
                  {'★'.repeat(4)}{'☆'.repeat(1)}
                </div>
                <span className="text-gray-500 text-sm">({product.reviews?.length || 0} Customer Reviews)</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-orange-500">
                  Rp {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    Rp {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            <div className="space-y-3">
              <span className="text-sm font-medium text-gray-700">Select Size</span>
              <div className="flex gap-3">
                {sizeOptions.map((size) => (
                  <button 
                    key={size} 
                    className="w-12 h-12 border-2 rounded-lg flex items-center justify-center
                    hover:border-orange-500 hover:text-orange-500 transition-colors
                    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-medium text-gray-700">Select Color</span>
              <div className="flex gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    className="w-10 h-10 rounded-full border-2 border-white ring-2 ring-gray-200
                    hover:ring-orange-500 transition-colors focus:outline-none focus:ring-offset-2"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex- sm: items-stretch sm:items-center gap-4">
              <div className="flex  border-2 rounded-lg overflow-hidden">
                <button 
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input 
                  type="text" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="md:w-16 w-10 text-center border-x-2" 
                />
                <button 
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <Button  
      variant="outline"
      onClick={handleAddToCart}
                className="flex-1 bg-orange-500 text-white py-6 px-6 rounded-lg
                  hover:bg-orange-600 transition-colors font-medium"
              >
                Add To Cart
              </Button>
              <button className="px-4 py-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
                ♡
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6 border-t">
              <span className="text-sm font-medium text-gray-700">Share:</span>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                  <div className='flex items-center justify-center gap-1' key={social}>
                    <button  
                    className="w-5 h-5 rounded-full  bg-gray-700 
                    hover:bg-blue-500 transition-colors">                 </button><p >{social}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="border-b flex flex-wrap gap-4 sm:gap-8">
            <button className="px-6 py-3 border-b-2 border-orange-500 font-medium text-orange-500">
              Description
            </button>
            <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
              Additional Information
            </button>
            <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
              Reviews ({product.reviews?.length || 0})
            </button>
          </div>
          <div className="py-8 pb-20 border-b-2">
            <p className="text-gray-600 leading-relaxed">
              {product.additionalInfo}
            </p>
          </div>
        </div>
      </div>
      <div className='m-4 sm:m-10 text-center'>
        
       <h1 className='text-3xl m-10 font-bold'>
        
         Most Selling Products
        </h1>

      <Cards products={products}/>
      </div>
      <Banifits />
      <Footer />
    </>
  );
};

export default SingleProduct; 