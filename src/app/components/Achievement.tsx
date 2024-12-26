import React from 'react'
import Trophy from '../images/trophy 1.png'
import Quility from '../images/guarantee.png'
import shiping from '../images/shipping.png'
import support from '../images/customer-support.png'
import Image from 'next/image'
const Acheivement = () => {
    return (
        <div className="bg-[#FAF3EA]">
            <div className="flex flex-col md:flex-row justify-between items-center p-5 md:p-10 my-5 md:my-10 gap-6 md:gap-0">
                <div className="flex items-center space-x-2">
                    <div>
                        <Image src={Trophy} width={50} height={50} alt="alternate_text" />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold">High Quality</h3>
                        <p className="text-sm md:text-base">crafted from top materials</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div>
                        <Image src={Quility} width={50} height={50} alt="alternate_text" />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold">Waranty Protection</h3>
                        <p className="text-sm md:text-base">Over 2 years</p>
                    </div>
                </div>


                <div className="flex items-center space-x-2">
                    <div>
                        <Image src={shiping} width={50} height={50} alt="alternate_text" />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold">Free Shipping</h3>
                        <p className="text-sm md:text-base">Order over 150 $</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div>
                        <Image src={support} width={50} height={50} alt="High Quality" />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold">24 / 7 Support</h3>
                        <p className="text-sm md:text-base">Dedicated Support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acheivement;