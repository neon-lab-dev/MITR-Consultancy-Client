"use client"
import { IMAGES } from "@/assets";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { useState } from "react";


const Hero = () => {
    const [isContactUsModalOpen, setIsContactUsModalOpen] = useState<boolean>(false);
    return (
        <div className="font-Inter relative h-[600px] xl:h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={IMAGES.heroImg}
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
                        Bring your thoughts to reality with{" "}
                        <span className="text-primary-20">MITRA Consultancy</span>
                    </h1>
                    <p className="text-white text-[11px] md:text-sm xl:text-lg leading-[18px] xl:leading-7 max-w-[1071px] mt-3 xl:mt-6 px-4 2xl:px-0">
                        Welcome to MITRA Consulting – where innovation and excellence converge. We provide tailored digital solutions designed to bring your ideas to life and drive your business success.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-start gap-4 xl:gap-6 mt-4 md:mt-9 xl:mt-[62px]">
                        <Button handleClick={() => setIsContactUsModalOpen(true)} variant="primary" title="Start a Project" classNames="w-[200px]" />
                        <Button handleClick={() =>
                            document
                                .getElementById("portfolio")
                                ?.scrollIntoView({ behavior: "smooth" })} variant="secondary" title="View Our Works" classNames="w-[200px]" />
                    </div>
                </div>
            </Container>
            <ContactUs
                isContactUsModalOpen={isContactUsModalOpen}
                setIsContactUsModalOpen={setIsContactUsModalOpen}
            />
        </div>
    );
};

export default Hero;
