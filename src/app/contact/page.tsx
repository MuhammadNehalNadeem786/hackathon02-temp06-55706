import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Contact_Hero from "../components/Contact_Hero";
import Acheivement from "../components/Achievement"
import Footer from "../components/Footer"
import location from "../images/location_icon.png"
import phone from "../images/phone_icon.png"
import clock from "../images/clock_icon.png"

const ContactPage = () => {
  return (
    <div>

      {/* Contact Header Component */}

      <Header />
      <Contact_Hero />

      {/* <Section/> */}

      <div className="container mx-auto px-[24px] py-[64px] max-w-[1280px]">
        <div className="text-center space-y-4 md:w-2/3 lg:w-1/2 mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black">Get In Touch With Us</h1>
          <p className="text-gray-500 leading-relaxed">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        {/*Information about Contact*/}
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="w-full md:w-1/3 space-y-8">
            <div className="flex   items-start gap-4">
              <Image src={location} alt="icon" width={22} height={27} />
              <div>
                <h2 className="font-semibold text-gray-900 mb-2">Address</h2>
                <p className="text-black">236 5th SE Avenue,</p>
                <p className="text-black">New York NY10000, United States</p>
              </div>

            </div>


            <div className="flex items-start gap-4">
              <Image src={phone} alt="icon" width={30} height={30} />
              <div>
                <h2 className="font-semibold text-black mb-2">Phone</h2>
                <p className="text-black">Mobile: +(84) 546-678</p>
                <p className="text-black">Hotline: +(84) 546-678</p>
              </div>

            </div>


            <div className="flex items-start gap-4">
              <Image src={clock} alt="icon" width={23} height={23} />
              <div>
                <h2 className="font-semibold text-black mb-2">Working Time</h2>
                <p className="text-black">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-black">Saturday-Sunday: 9:00 - 21:00</p>
              </div>

            </div>

          </div>

          {/* Customer Support Form */}

          <div className="w-full md:w-1/2 rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="h-10 rounded-lg border-2 w-3/4"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="h-10 rounded-lg border-2 w-3/4"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="h-10 rounded-lg border-2 w-3/4"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="h-20  rounded-lg border-2 w-3/4"
                  placeholder="Your Message"
                />
              </div>

              <div className="w-full h-full relative">
                <button className="relative bg-[#B88E2F] border border-[#B88E2F] rounded-md w-[237px] h-[55px] flex items-start hover:bg-[#645128]">
                  <span className="relative text-white font-arial font-medium text-[16px] leading-[24px] w-[59.21px] h-[27.5px] left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]">
                    Submit
                  </span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>

      {/* Component Render */}

      <Acheivement />
      <Footer />

    </div>
  )
}
export default ContactPage;