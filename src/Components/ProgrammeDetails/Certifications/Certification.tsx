import { IMAGES } from "@/assets";
import Image from "next/image";

const Certification = () => {
    return (
        <div className="font-Inter flex flex-col gap-4 mt-20">
            <h1 className="text-neutral-10 text-[30px] font-semibold leading-[48px]">Certification</h1>
            <p className="text-neutral-90 text-sm max-w-[247px]">Upon successful completion of the program, you will receive a Full Stack Development Placement Guarantee Course certificate from MITR Consultency.</p>
            <Image src={IMAGES.certification} alt="certificate-MITR Consultancy" className="w-full md:w-[371px] h-[265px]" />
        </div>
    );
};

export default Certification;