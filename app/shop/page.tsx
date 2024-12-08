import Allhero from '@/components/Allhero'
import Navbar from '@/components/Navbar'
import React from 'react'
import backgroundimage from '@/public/assets/Rectangle 1.png'
import Cards from '@/components/Cards'



import vecter1 from '@/public/assets/Vector (5).png'
import vecter2 from '@/public/assets/Vector (4).png'
import vecter3 from '@/public/assets/bi_view-list.png'


import image1 from '@/public/assets/Images (1).png'
import image2 from '@/public/assets/Images.png'
import image3 from '@/public/assets/image 1.png'
import image4 from '@/public/assets/Images (2).png'
import image5 from '@/public/assets/image 6.png'
import image6 from '@/public/assets/image 8.png'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Banifits from '@/components/Banifits'




const page = () => {

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
          {
            id: 9,
            name: 'Slytherine',
            description: 'Stylish cafe chair',
            price: 2500000,
            originalPrice: 3500000,
            discount: 30,
            image: image6.src,
          },
          {
            id: 10,
            name: 'Leviosa',
            description: 'Stylish cafe chair',
            price: 2500000,
            image: image2.src,
          },
          {
            id:11,
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 500000,
            isNew: true,
            image: image3.src,
          },
        {
          id: 12,
          name: 'Slytherine',
          description: 'Stylish cafe chair',
          price: 2500000,
          originalPrice: 3500000,
          discount: 30,
          image: image6.src,
        },
        {
          id: 13,
          name: 'Leviosa',
          description: 'Stylish cafe chair',
          price: 2500000,
          image: image2.src,
        },
        {
          id: 14,
          name: 'Respira',
          description: 'Outdoor bar table and stool',
          price: 500000,
          isNew: true,
          image: image3.src,
        },
      
      ];

  return (
    <>
    <Navbar/>
    <Allhero src={backgroundimage} page='Shop'/>

    <div className='w-full py-5 bg-[#F9F1E7] flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-1/2 px-4 md:px-10 flex flex-col md:flex-row gap-5 items-center mb-4 md:mb-0'>
            <div className='flex justify-between space-x-4'>
                <Image src={vecter1} width={15} height={15} className='object-contain' alt='filter'/>
                <p>Filter</p>
                <Image src={vecter2} width={15} height={15} className='object-contain' alt='filter'/>
                <Image src={vecter3} width={15} height={15} className='object-contain' alt='filter'/>
            </div>
            <div className='border-l-2 px-5 hidden md:block'>
                <p>Showing 1 to 16 of 32 result</p>
            </div>
        </div>

        <div className='w-full md:w-1/2 flex flex-col md:flex-row md:justify-end items-center space-y-3 md:space-y-0 md:space-x-5 px-4 md:px-10'>
            <div className='flex space-x-3'>
                <a>Show</a>
                <input type="text" className='w-20' />
            </div>
            <div className='flex space-x-3'>
                <p>Short By</p>
                <input type="text" className='w-32' />
            </div>
        </div>
    </div>

    <Cards products={products}/>

    <div className='flex justify-center space-x-3 md:space-x-6 items-center p-4 md:p-8'>
        <div className='px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-800'>1</div>
        <div className='px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-800'>2</div>
        <div className='px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-800'>3</div>
        <div className='px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-orange-800'>Next</div>
    </div>
<Banifits/>
    <Footer/>
    </>
  )
}
export default page