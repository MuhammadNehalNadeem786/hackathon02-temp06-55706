import React from 'react'
import Trophy from '@/public/assets/trophy 1.png'
import Quility from '@/public/assets/guarantee.png'
import shiping from '@/public/assets/shipping.png'
import support from '@/public/assets/customer-support.png'
import Image from 'next/image'
const Banifits = () => {
    return (
        <div>
            <div className='bg-[#FAF3EA] flex flex-col md:flex-row justify-between items-center p-5 md:p-10 my-5 md:my-10 gap-6 md:gap-0'>
                <div className='flex items-center space-x-2'>
                    <div>
                        <Image src={Trophy} width={50} height={50} alt='High Quality' />
                    </div>
                    <div>
                        <h3 className='text-lg md:text-xl font-bold'>High Quality</h3>
                        <p className='text-sm md:text-base'>crafted from top materials</p>
                    </div>
                </div>

                <div className='flex items-center space-x-2'>
                    <div>
                        <Image src={shiping} width={50} height={50} alt='High Quality' />
                    </div>
                    <div>
                        <h3 className='text-lg md:text-xl font-bold'>High Quality</h3>
                        <p className='text-sm md:text-base'>crafted from top materials</p>
                    </div>
                </div>

                <div className='flex items-center space-x-2'>
                    <div>
                        <Image src={Quility} width={50} height={50} alt='High Quality' />
                    </div>
                    <div>
                        <h3 className='text-lg md:text-xl font-bold'>High Quality</h3>
                        <p className='text-sm md:text-base'>crafted from top materials</p>
                    </div>
                </div>

                <div className='flex items-center space-x-2'>
                    <div>
                        <Image src={support} width={50} height={50} alt='High Quality' />
                    </div>
                    <div>
                        <h3 className='text-lg md:text-xl font-bold'>High Quality</h3>
                        <p className='text-sm md:text-base'>crafted from top materials</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banifits