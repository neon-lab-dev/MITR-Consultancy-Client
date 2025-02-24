"use client"
import { IMAGES } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const InternshipProgrammesHero = () => {

    return (
        <div className="font-Inter relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={IMAGES.internshipProgrammeBg}
                    alt="MITRA Consultancy"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-neutral-50 bg-opacity-50 z-10"></div>

            {/* Content */}
            <Container>
                <div className="flex items-center xl:items-start justify-center absolute top-0 bottom-0 flex-col z-20 text-center xl:text-start">
                    <h1 className="text-white leading-6 md:leading-[40px] xl:leading-[80px] text-xl md:text-[32px] xl:text-[68px] font-bold max-w-[344px] md:max-w-[550px] xl:max-w-[1071px]">
                        Industry Ready Training Program By{" "}
                        <span className="text-primary-20">MITRA Consultancy</span>
                    </h1>
                    <p className="text-white text-[11px] md:text-sm xl:text-lg leading-[18px] xl:leading-7 max-w-[1071px] mt-3 xl:mt-6">
                        We are a team of passionate professionals dedicated to transforming ideas into impactful digital solutions. With expertise spanning UI/UX design, app development, back-end systems, software development, and front-end technologies, we craft products that are innovative, reliable, and tailored to your unique needs.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-start gap-4 xl:gap-6 mt-4 md:mt-9 xl:mt-[62px]">
                        <Button handleClick={() =>
                            document
                                .getElementById("programmes")
                                ?.scrollIntoView({ behavior: "smooth" })} variant="primary" title="View Programmes" classNames="w-[220px]" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default InternshipProgrammesHero;