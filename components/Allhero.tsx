import Image from 'next/image'
import React from 'react'

const Allhero = ({ src, page }: { src: { src: string }; page: string }) => {
  return (
    <div className="relative w-full h-[316px]">
      <div className="w-full h-full">
        <Image 
          src={src.src} 
          alt='background image' 
          width={1440} 
          height={316}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className='absolute inset-0 flex flex-col space-y-2 items-center justify-center'>
        <h1 className='text-4xl font-bold'>{page}</h1>
        <p>Home / {page}</p>
      </div>
    </div>
  )
}

export default Allhero