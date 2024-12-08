"use client"
import bedroomimage1 from '@/public/assets/Rectangle 24.png'
import bedroomimage2 from '@/public/assets/Rectangle 25.png'
import Image from 'next/image';
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

const RoomIspirations = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row bg-[#FCF8F3] gap-4 md:gap-8 p-4 md:p-6 lg:p-12 my-8 rounded-xl">
        <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center lg:text-left ">
            50+ Beautiful rooms for inspiration
          </h2>
          <p className="text-gray-500 text-base lg:text-lg text-center lg:text-left">
            Our designer already made a prototype of rooms that inspire you
          </p>
          <div className="text-center lg:text-left">
            <button className="px-8 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all duration-300 text-base font-semibold shadow-lg hover:shadow-xl">
              Explore More
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 lg:flex-grow">
          <div className="w-full hidden md:flex sm:w-1/2">
            <Image 
              src={bedroomimage1} 
              className='rounded-xl w-full h-[400px] sm:h-[500px] object-cover shadow-lg' 
              alt='Luxurious bedroom design inspiration' 
              width={404} 
              height={582}
              priority
            />
          </div>
          
          <div className="w-full sm:w-1/2 space-y-6">
            <Image 
              src={bedroomimage2} 
              className='rounded-xl w-full h-[300px] sm:h-[400px] object-cover shadow-lg' 
              alt='Modern bedroom interior design' 
              width={404} 
              height={370}
              />
            <div className='flex items-center justify-center space-x-6 py-4'>
              <FaCircleArrowLeft className="text-2xl cursor-pointer hover:text-amber-500 transition-colors"/>
              <div className="flex space-x-3">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-amber-500' : 'bg-gray-300'} transition-colors`}
                  />
                ))}
              </div>
              <FaCircleArrowRight className="text-2xl cursor-pointer hover:text-amber-500 transition-colors"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomIspirations