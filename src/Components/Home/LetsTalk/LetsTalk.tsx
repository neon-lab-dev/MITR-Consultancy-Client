"use client"
import { IMAGES } from "@/assets";
import Image from "next/image";
import Container from "../../Shared/Container/Container";
import Button from "../../Reusable/Button/Button";
import { useState } from "react";
import ContactUs from "../ContactUs/ContactUs";

const LetsTalk = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  return (
    <div className="relative font-Inter overflow-hidden">
      {/* Background Container */}
      <Container>
        <div className="relative h-[235px] md:h-[400px] xl:h-[450px] rounded-xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={IMAGES.letsTalkBgImg}
            alt="MITRA Consultancy"
            className="w-full h-full object-cover"
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center xl:justify-between gap-10 lg:gap-0 px-4 py-4 xl:px-[96px] max-w-[1300px] mx-auto z-20">
            {/* Text Section */}
            <div className="text-center lg:text-left flex flex-col gap-4 md:gap-8 w-full lg:w-[70%]">
              <h1 className="text-white text-lg md:text-[32px] font-bold leading-7 md:leading-[45px]">
                From Code to Compliance — Where Innovation Meets Security.
              </h1>
              <p className="text-white text-xs md:text-lg md:leading-7 leading-5 max-w-full md:max-w-[475px] mx-auto lg:mx-0">
             Whether it’s compliance, cybersecurity, or digital transformation, our experts turn your vision into reality — securely and efficiently.
              </p>
            </div>

            {/* Button Section */}
            <Button  handleClick={()=>setIsContactUsModalOpen(true)} variant="primary" title="Contact Us" classNames="w-[200px] h-[44px] md:h-auto" />
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

export default LetsTalk;
