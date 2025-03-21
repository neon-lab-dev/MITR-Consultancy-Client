import { IMAGES } from "@/assets";
import Image from "next/image";

const MyProfileHero = ({ name }: { name: string }) => {
    return (
        <div className="font-Inter mt-20">
            {/* Background Image */}
            <div className="relative w-full h-[265px]">
                <Image
                    src={IMAGES.myProfileBg}
                    alt="MITRA Consultancy"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 bg-neutral-50 bg-opacity-50"></div>
                <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center h-[265px]">
                    <h1 className="text-white text-2xl md:text-[36px] lg:text-[48px] font-bold uppercase text-center">{name ? name : "Your Name"}</h1>
                </div>
            </div>
        </div>
    );
};

export default MyProfileHero;