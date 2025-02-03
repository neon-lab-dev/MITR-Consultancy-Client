import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const PrivacyPolicyHero = ({title} : {title:string}) => {
    return (
        
        <div className="font-Inter relative h-[300px] mt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <Image
                src={IMAGES.internshipProgrammeBg}
                alt="MITR Consultancy"
                layout="fill"
                objectFit="cover"
                priority
            />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-neutral-50 bg-opacity-50 z-10"></div>

        {/* Content */}
        <Container>
            <div className="flex items-center justify-center absolute top-0 bottom-0 right-0 left-0 z-20 text-center">
            <h1 className="text-white text-[48px] font-bold uppercase text-center">{title}</h1>
            </div>
        </Container>
    </div>
    );
};

export default PrivacyPolicyHero;