import React from "react";
import Image from "next/image";
import ShopHeader from "../components/Shop-hero"
import Header from "../components/Header";
import Acheivement from "../components/Achievement"
import Footer from "../components/Footer"
import Cards from "../components/Cards"
import ProductGrid from "../components/ProductGrid"

import vector_1 from "../assets/vector 1.png"
import vector_2 from "../assets/vector 2.png"
import vector_3 from "../assets/vector 3.png"

const ShopPage = () => {
    return (
        <div>
            {/* Shop Header Component */}
            <Header/>
            <ShopHeader />


            {/* <Cards /> */}

            <div className='w-full py-5 bg-[#F9F1E7] flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-1/2 px-4 md:px-10 flex flex-col md:flex-row gap-5 items-center mb-4 md:mb-0'>
                    <div className='flex justify-between space-x-4'>
                        <Image src={vector_1} width={15} height={15} className="object-contain" alt="image"/>
                        <p>Filter</p>
                        <Image src={vector_2} width={15} height={15} className="object-contain" alt="image" />
                        <Image src={vector_3} width={15} height={15} className="object-contain" alt="image" />
                    </div>
                    <div className='border-l-2 px-5 hidden md:block'>
                        <p>Showing 1 to 16 of 32 result</p>
                    </div>
                </div>

                <div className='w-full md:w-1/2 flex flex-col md:flex-row md:justify-end items-center space-y-3 md:space-y-0 md:space-x-5 px-4 md:px-10'>
                    <div className='flex space-x-3'>
                        <p>Show</p>
                        <input type="text" className='w-20' />
                    </div>
                    <div className='flex space-x-3'>
                        <p>Short By</p>
                        <input type="text" className='w-32' />
                    </div>
                </div>
            </div>

            {/* Component Render */}
            <ProductGrid />
            <Acheivement />
            <Footer/>

        </div>
    )
}

export default ShopPage;
