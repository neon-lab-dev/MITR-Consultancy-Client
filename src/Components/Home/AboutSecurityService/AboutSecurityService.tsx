"use client";
import { IMAGES } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
import Heading from "@/Components/Reusable/Heading/Heading";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import ContactUs from "../ContactUs/ContactUs";
import { useState } from "react";

const AboutSecurityService = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);
  return (
    <div
      id="aboutUs"
      className="bg-primary-40 py-[60px] md:py-20 xl:py-[128px]"
    >
      <Container>
        <div className="flex flex-col-reverse xl:flex-row items-center gap-[54px] ">
          <div className="w-full xl:w-[50%]">
            <Heading
              align="left"
              subHeading="Secure Your Future with MITRA Consultancy"
              heading="Protecting Modern Businesses with Trusted Solutions"
            />
            <p className={`text-neutral-20 mt-6 text-justify`}>
              At MITRA Consultancy, we specialize in delivering cutting-edge
              cybersecurity and security compliance services tailored to the
              evolving needs of today’s digital enterprises. With a deep
              understanding of industry standards and regulatory frameworks, we
              help businesses of all sizes strengthen their security posture
              while meeting critical compliance requirements.
              <br />
              <br />
              From risk assessments and data protection strategies to full-scale
              regulatory compliance like GDPR, HIPAA, and ISO 27001, our expert
              team provides end-to-end guidance and implementation. Partner with
              us to safeguard your assets, ensure operational continuity, and
              build long-term trust in an ever-changing threat landscape.
            </p>

            <div className="mt-7">
              <Button
                handleClick={() => setIsContactUsModalOpen(true)}
                variant="primary"
                title="Book Free Consultation"
                classNames="w-fit"
              />
            </div>
          </div>

          <Image
            src={IMAGES.cybersecurityBanner}
            alt="about -MITRA"
            className="w-full xl:w-[50%]"
          />
        </div>
      </Container>
      <ContactUs
        isContactUsModalOpen={isContactUsModalOpen}
        setIsContactUsModalOpen={setIsContactUsModalOpen}
      />
    </div>
  );
};

export default AboutSecurityService;
