"use client"
import Image from 'next/image'
import React from 'react'
import diningimage from '@/public/assets/dining.png'
import livingimage from '@/public/assets/Image-living room.png'
import bedroomimage from '@/public/assets/Mask Group (1).png'

const Range = () => {
  return (
    <div className='w-full px-4 my-10 container mx-auto'>
        <div className='text-center mb-12'>
            <h1 className='text-2xl md:text-3xl font-bold mb-4'>
                Browse The Range
            </h1>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        <div className='flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8 md:justify-between'>
           <div className='flex-1 items-center text-center'>
            <Image 
                src={diningimage} 
                width={381} 
                height={480} 
                alt='Dining room furniture'
                className='w-full object-cover'
            />
            <h3 className='p-5 text-xl font-semibold'>Dining</h3>
           </div>

           <div className='flex-1 items-center text-center'>
            <Image 
                src={livingimage} 
                width={381} 
                height={480} 
                alt='Living room furniture'
                className='w-full object-cover'
            />
            <h3 className='p-5 text-xl font-semibold'>Living</h3>
           </div>

           <div className='flex-1 items-center text-center'>
            <Image 
                src={bedroomimage} 
                width={381} 
                height={480} 
                alt='Bedroom furniture'
                className='w-full object-cover'
            />
            <h3 className='p-5 text-xl font-semibold'>Bedroom</h3>
           </div>
        </div>
    </div>
  )
}

export default Range