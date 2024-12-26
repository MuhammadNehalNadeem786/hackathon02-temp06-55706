import Image from "next/image";
// import gallery from "../images/Fur-Gallery.png"
import tv from "../images/t.v.png"
import bed from "../images/bed.png"
import table from "../images/table.png"
import jug from "../images/jug.png"
import flowers from "../images/flowers.png"
import chair from "../images/Rectangle 37.png"
const Furniture = () => {
    return (
        <section className="py-16 bg-[#f9fafb]">
            {/* Header */}
            <div className="text-center mb-10 px-4">
                <h2 className="text-lg font-bold text-[#6b7280] uppercase tracking-wide">
                    Share your setup with
                </h2>
                <h3 className="text-3xl font-extrabold text-[#1f2937]">
                    #FuniroFurniture
                </h3>
            </div>

            {/* Image Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="grid gap-4">
                    <div className="h-[200px] relative">
                        <Image
                            src={tv}
                            alt="workplace-img"
                            className="object-cover"
                            fill
                        />
                    </div>
                    <div className="h-[300px] relative">
                        <Image
                            src={bed}
                            alt="rest-room-img"
                            className="object-cover"
                            fill
                        />
                    </div>
                </div>
                <div className="h-[520px] relative">
                    <Image
                        src={table}
                        alt="dinning-table-img"
                        className="object-cover"
                        fill
                    />
                </div>

                <div className="grid gap-4">
                    <div className="h-[250px] relative">
                        <Image
                            src={jug}
                            alt="image"
                            className="object-cover"
                            fill
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-[250px] relative">
                            <Image
                                src={flowers}
                                alt="decoration-img"
                                className="object-cover"
                                fill
                            />
                        </div>
                        <div className="h-[250px] relative">
                            <Image
                                src={chair}
                                alt="chair-img"
                                className="object-cover"
                                fill
                            />
                        </div> 
                    </div>
                </div>   
            </div>    
        </section >
    )
}
export default Furniture;