import Image from "next/image";
import room1 from "../assets/room1.png"
import room2 from "../assets/room2.png"
import indicator from "../assets/Indicator.png"
const RoomIspirations = () => {
    return (
        <div>
            <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row bg-[#FCF8F3] gap-4 md:gap-8 p-4 md:p-6 lg:p-12 my-8">
                <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6">
                    <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-[#3A3A3A] text-center lg:text-left ">
                        50+ Beautiful rooms inspiration
                    </h2>
                    <p className="text-gray-500 text-base lg:text-lg text-center lg:text-left">
                        Our designer already made a prototype of rooms that inspire you
                    </p>
                    <div className="text-center lg:text-left">
                        <button className="px-8 py-3 bg-[#B88E2F] text-white rounded-lg text-base font-semibold shadow-lg hover:shadow-xl">
                            Explore More
                        </button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 lg:flex-grow">
                    <div className="w-full hidden md:flex sm:w-1/2">
                        <Image
                            src={room1}
                            className="w-full h-[400px] sm:h-[500px] object-cover shadow-lg"
                            alt="decor-img"
                            width={404}
                            height={582}
                            priority
                        />
                    </div>

                    <div className="w-full sm:w-1/2 space-y-6">
                        <Image
                            src={room2}
                            className="w-full h-[300px] sm:h-[400px] object-cover shadow-lg"
                            alt="decor-img"
                            width={404}
                            height={370}
                        />
                        <Image src={indicator} alt="logo" width={70} height={32} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomIspirations;