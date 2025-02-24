import { IMAGES } from "@/assets";
import Image from "next/image";

const Certification = () => {
    return (
        <div className="font-Inter flex flex-col gap-4 mt-20">
            <h1 className="details-section-heading">Certification</h1>
            <p className="details-section-paragraph w-full max-w-[832px]">Upon successful completion of the program, you will receive a Full Stack Development Placement Guarantee Course certificate from MITRA Consultency.</p>
            <Image src={IMAGES.certification} alt="certificate-MITRA Consultancy" className="w-full md:w-[371px] h-[265px]" />
        </div>
    );
};

export default Certification;