/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image";
import Heading from "../Reusable/Heading/Heading";
import Container from "../Shared/Container/Container";
import { IMAGES } from "@/assets";
import Button from "../Reusable/Button/Button";
import ContactUs from "../ContactUs/ContactUs";
import { useState } from "react";

const AboutUs = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  return (
    <div id="aboutUs" className="bg-primary-40 py-[60px] md:py-20 xl:py-[128px]">
      <Container>
        <div className="flex flex-col-reverse  lg:flex-row items-center gap-[54px] ">
          
        <Image
            src={IMAGES.aboutUs}
            alt="about -MITR"
            className="w-full h-full"
          />
          <div className="">
            <Heading
              align="left"
              subHeading="About MITR"
              heading="Most trusted Business Consulting"
            />
            <p className={`text-neutral-20 mt-6 text-justify`}>
              At MITR Consulting, we are a team of passionate professionals
              dedicated to transforming ideas into impactful digital solutions.
              With expertise spanning UI/UX design, app development, back-end
              systems, software development, and front-end technologies, we
              craft products that are innovative, reliable, and tailored to your
              unique needs.
              <br />
              <br />
              Our mission is to empower businesses with seamless and scalable
              digital experiences, combining technical excellence with creative
              problem-solving. Whether you're a startup or an established
              enterprise, we partner with you to drive success through
              technology.
            </p>

            <div className="mt-[68px]">
              <Button
                handleClick={()=>setIsContactUsModalOpen(true)}
                variant="primary"
                title="Start A Project"
                classNames="w-[200px]"
              />
            </div>
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

export default AboutUs;
