import Image from "next/image";
import dinning from "../images/dinning.png"
import living from "../images/living.png"
import bedroom from "../images/bedroom.png"

const BrowseTheRange = () => {
    return (
        <div className="py-16 bg-gray-50">
            {/*Title*/}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Browse The Range</h2>
                <p className="text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            {/* Images*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-20">
                {/* Image 1 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image
                        src={dinning}
                        alt="image"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover" />
                    
                    {/* Text */}

                    <div className="p-4 text-center">
                        <h3 className="font-semibold text-lg">Dining</h3>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image
                        src={living}
                        alt="image"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover" />
                    
                    {/* Text */}

                    <div className="p-4 text-center">
                        <h3 className="font-semibold text-lg">Living</h3>
                    </div>
                </div>

                {/* Image 3 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image
                        src={bedroom}
                        alt="image"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover" />
                    
                    {/* Text */}

                    <div className="p-4 text-center">
                        <h3 className="font-semibold text-lg">Bedroom</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BrowseTheRange;