"use client"
import React, { useState } from 'react'
import acounticon from '@/public/assets/mdi_account-alert.png'
import searchicon from '@/public/assets/akar-icons_search.png'
import hearticon from '@/public/assets/akar-icons_heart.png'
import carticon from '@/public/assets/ant-design_shopping-cart-outlined.png'
import logo from '@/public/assets/Frame 168.png'
import { FiAlignRight } from "react-icons/fi";

import Image from 'next/image';
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [heartCount, setHeartCount] = useState(0);

  return (
    <nav>
      <div className='p-5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-5'>
        <div className='w-full  md:w-1/3 flex justify-between items-center md:justify-start px-4'>
          <Image src={logo} width={150} height={200} alt='logo'/>
          <button 
            className='flex sm:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiAlignRight className='text-xl'/>
          </button>
        </div>

        <div className={`${isMenuOpen ? 'flex  bg-zinc-300 p-2  rounded-lg shadow-lg' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-2/3 justify-around px-10 gap-4 md:gap-0`}>
          <Link href="/" className='hover:underline-offset-4  hover:underline  hover:scale-105'>Home</Link>
          <Link href="/shop" className='hover:underline-offset-4  hover:underline hover:scale-105 '>Shop</Link>
          <Link href="/blog" className='hover:underline-offset-4  hover:underline hover:scale-105'>Blog</Link>
          <Link href="/contact" className='hover:underline-offset-4  hover:underline hover:scale-105'>Contact</Link>
        </div>
       

        <div className='flex justify-center md:justify-between w-full md:w-1/3 px-4 md:px-10 gap-6 md:gap-0'>
          <div>
            <Image src={acounticon} className='cursor-pointer hover:scale-105' width={25} height={30} alt='account'/>
          </div>
          <div className="relative">
            <Image 
              src={searchicon} 
              className='cursor-pointer hover:scale-105' 
              width={25} 
              height={30} 
              alt='search'
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            {isSearchOpen && (
              <div className="absolute z-10 right-0 mt-2 w-64">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full p-2 border rounded-md shadow-lg"
                />
              </div>
            )}
          </div>
          <div className="relative">
            <Image 
              src={hearticon} 
              className='cursor-pointer hover:scale-105' 
              width={25} 
              height={30} 
              alt='favorites'
              onClick={() => setHeartCount(prev => prev + 1)}
            />
            {heartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {heartCount}
              </span>
            )}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <div>
                <Image src={carticon} className='cursor-pointer hover:scale-105' width={25} height={30} alt='cart'/>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
              </SheetHeader>
              <div className="mt-4">

                <p>Your cart is empty</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar