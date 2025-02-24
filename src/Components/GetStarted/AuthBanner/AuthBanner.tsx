import { IMAGES } from "@/assets";
import Image from "next/image";


const AuthBanner = () => {
    return (
        <div className="relative h-full w-full xl:w-[45%] hidden xl:flex flex-col items-center justify-center">
            <Image src={IMAGES.contactUsBgImg} alt="MITRA Consultancy" className="rounded-xl h-full w-full" />
            <div className="flex flex-col items-center justify-center w-full absolute top-0 bottom-0 right-0 left-0 z-20 px-8">
                <Image src={IMAGES.MITRConsoltancyLogo} alt="MITRA Consultancy" className="w-[164px] h-[64px]" />
                <h1 className="text-white text-[25px] xl:text-[36px] text-center font-bold mt-8 uppercase">Start Your Journey With MITRA Consultancy</h1>
                <p className="text-white text-[10px] text-center md:text-base leading-7 mt-3">Unlock new opportunities, connect with experts, and enhance your skills for a brighter future with us. 🚀</p>
            </div>
        </div>
    );
};

export default AuthBanner;