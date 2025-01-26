import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Blog_Hero from "../components/Blog_Hero";
import Acheivement from "../components/Achievement"
import Footer from "../components/Footer"

import blog_image_1 from "../images/blog_img 1.png"
import blog_image_2 from "../images/blog_img 2.png"
import blog_image_3 from "../images/blog_img 3.png"
import search_icon from "../images/search-icon.png"

import post1 from "../images/Post 1.png"
import post2 from "../images/Post 2.png"
import post3 from "../images/Post 3.png"
import post4 from "../images/Post 4.png"
import post5 from "../images/Post 5.png"

const BlogPage = () => {
  return (
    <div>

      {/* Contact Header Component */}
      <Header />
      <Blog_Hero />

      {/* Main Blog Content */}

      <div className="flex flex-col lg:flex-row gap-6 p-6">
        <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg">
          <Image
            src={blog_image_1}
            alt="Blog Post"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <div className="flex gap-4 text-gray-500 text-sm mb-2">
              <span>👤 Admin</span>
              <span>📅 14 Oct 2022</span>
              <span>📂 Wood</span>
            </div>
            <h2 className="text-xl font-bold mb-2">
              Going all-in with millennial design
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
              sollicitudin aliquam ultrices.
            </p>
            <a href="#" className="text-blue-500 font-medium">
              Read more →
            </a>
          </div>

          {/* Blog 2 */}

          <Image
            src={blog_image_2}
            alt="Blog Post"
            width={817}
            height={500}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <div className="flex gap-4 text-gray-500 text-sm mb-2">
              <span>👤 Admin</span>
              <span>📅 14 Oct 2022</span>
              <span>📂 Wood</span>
            </div>
            <h2 className="text-xl font-bold mb-2">
              Exploring new ways of decorating
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
              sollicitudin aliquam ultrices.
            </p>
            <a href="#" className="text-blue-500 font-medium">
              Read more →
            </a>
          </div>

          {/* Blog 3 */}

          <Image
            src={blog_image_3}
            alt="Blog Post"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <div className="flex gap-4 text-gray-500 text-sm mb-2">
              <span>👤 Admin</span>
              <span>📅 14 Oct 2022</span>
              <span>📂 Wood</span>
            </div>
            <h2 className="text-xl font-bold mb-2">
              Handmade pieces that took time to make
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
              sollicitudin aliquam ultrices.
            </p>
            <a href="#" className="text-blue-500 font-medium">
              Read more →
            </a>
          </div>
        </div>

        {/* Sidebar */}

        <aside className="w-full lg:w-1/3">
          <div className="flex items-center justify-center p-4">
            <div className="bg-slate-100 flex items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md px-2 relative">
              {/* Input Field */}
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-black w-full h-[40px] outline-none px-2 text-sm sm:text-base md:text-lg"
                />
              {/*  */}
              <div className="w-[28px] h-[24px] cursor-pointer hover:scale-105 flex items-center justify-center ml-2">
                <Image
                  src={search_icon}
                  alt="Search Icon"
                  className="object-contain"
                  width={28}
                  height={24}
                />
              </div>
            </div>
          </div> 

          {/* Categories */}
          
          <div className="bg-white p-4 shadow-md rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between">
                <span>Crafts</span> <span>2</span>
              </li>
              <li className="flex justify-between">
                <span>Design</span> <span>8</span>
              </li>
              <li className="flex justify-between">
                <span>Handmade</span> <span>7</span>
              </li>
              <li className="flex justify-between">
                <span>Interior</span> <span>1</span>
              </li>
              <li className="flex justify-between">
                <span>Wood</span> <span>5</span>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}

          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Image
                  src={post1}
                  alt="Post"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-gray-700 font-medium text-sm">
                    Going all-in with millennial design
                  </h4>
                  <p className="text-gray-500 text-xs">14 Oct 2022</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Image
                  src={post2}
                  alt="Post"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-gray-700 font-medium text-sm">
                    Exploring new ways of decorating
                  </h4>
                  <p className="text-gray-500 text-xs">03 Aug 2022</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Image
                  src={post3}
                  alt="Post"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-gray-700 font-medium text-sm">
                    Handmade pieces that took time to make
                  </h4>
                  <p className="text-gray-500 text-xs">26 Jul 2022</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Image
                  src={post4}
                  alt="Post"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-gray-700 font-medium text-sm">
                    Going all-in with millennial design
                  </h4>
                  <p className="text-gray-500 text-xs">14 Oct 2022</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <Image
                  src={post5}
                  alt="Post"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-gray-700 font-medium text-sm">
                    Exploring new ways of decorating
                  </h4>
                  <p className="text-gray-500 text-xs">03 Aug 2022</p>
                </div>
              </li>

            </ul>
          </div>
        </aside>

      </div>

      {/* Navigate Numbers */}
      
      <div className="flex justify-center space-x-3 md:space-x-6 items-center p-4 md:p-8">
        <div className="px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-[#B88E2F]">1</div>
        <div className="px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-[#B88E2F]">2</div>
        <div className="px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-[#B88E2F]">3</div>
        <div className="px-3 md:px-4 py-2 cursor-pointer bg-[#FAF3EA] rounded-lg hover:bg-[#B88E2F]">Next</div>
      </div>


      {/* Component Render */}

      <Acheivement />
      <Footer />

    </div>
  )
}
export default BlogPage;