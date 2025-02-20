import Image from "next/image";
import bg_image from "../images/background-img.png"
const Hero = () => {
    return (
        <div className="relative">
            <div className="w-full">
                <Image
                    src={bg_image}
                    alt="Bg_Img"
                    width={1440}
                    height={100}
                    className="w-full h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] object-cover" />

                {/* Text */}

                <div className=" bg-[#FFF3E3]  w-[60%] max-w-[38rem] md:mx-auto ml-32 relative md:absolute md:top-[22%] md:left-[51%]   
                      rounded-[6px] p-4 md:p-[3rem] -mt-60 mb-20 md:mt-0">
                    <h6 className="font-bold text-black text-xs sm:text-sm md:text-base">New Arrival</h6>
                    <h3 className="text-[#B88E2F] font-poppins font-extrabold text-lg sm:text-2xl md:text-[3.25rem] sm:leading-tight">
                        Discover Our New Collection
                    </h3>
                    <p className="sm:leading-loose font-poppins text-gray-600 font-medium text-xs sm:text-sm md:text-[1rem] my-1 sm:my-3 md:my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                    <button className="bg-[#B88E2F]  font-semibold font-sans py-1 px-3 sm:py-3 sm:px-8 md:pt-4 md:pr-12 md:pb-4 md:pl-12 text-xs sm:text-base text-white">
                        BUY NOW
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Hero;