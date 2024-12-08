"use client"
import React from 'react'
import Image from 'next/image'
import image1 from '@/public/assets/Rectangle 37.png'
import image2 from '@/public/assets/Rectangle 38.png'
import image3 from '@/public/assets/Rectangle 39.png'
import image4 from '@/public/assets/Rectangle 40.png'
import image5 from '@/public/assets/Rectangle 43.png'
import image6 from '@/public/assets/Rectangle 45.png'

const FuniroFurniture = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <p className="text-gray-600">Share your setup with</p>
        <h2 className="text-3xl font-bold">#FuniroFurniture</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="grid gap-4">
          <div className="h-[300px] relative">
            <Image 
              src={image5} 
              alt="Modern workspace setup"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="h-[200px] relative">
            <Image 
              src={image2} 
              alt="Vintage chair"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="h-[520px] relative">
          <Image 
            src={image6} 
            alt="Dining room"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="grid gap-4">
          <div className="h-[250px] relative">
            <Image 
              src={image4} 
              alt="Modern bedroom"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-[250px] relative">
              <Image 
                src={image3} 
                alt="Home decor"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="h-[250px] relative">
              <Image 
                src={image1} 
                alt="Kitchen setup"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FuniroFurniture