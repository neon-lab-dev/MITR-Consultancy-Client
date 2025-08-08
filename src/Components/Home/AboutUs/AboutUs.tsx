/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Heading from "../../Reusable/Heading/Heading";
import Container from "../../Shared/Container/Container";
import { IMAGES } from "@/assets";
import Button from "../../Reusable/Button/Button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div id="aboutUs" className=" py-[60px] md:py-20 xl:py-[128px]">
      <Container>
        <div className="">
          <div className="relative">
            <Image
              src={IMAGES.aboutUsBg}
              alt="about -MITRA"
              className="w-full h-full hidden xl:block"
            />
            <Image
              src={IMAGES.aboutUs}
              alt="about -MITRA"
              className="max-w-full lg:max-w-w-[500px] block xl:hidden"
            />

            <div className="relative xl:absolute top-0 xl:top-28 right-0 xl:right-20 max-w-[500px] md:max-w-full xl:max-w-[500px] mt-10 xl:mt-0">
              <Heading
                align="left"
                subHeading="About MITRA"
                heading="Most trusted Business Consulting"
              />
              <p className={`text-neutral-20 mt-6 text-justify`}>
                At MITRA Consultancy, we combine innovation, practicality, and performance to empower businesses and learners in the digital world. We specialize in delivering end-to-end technology solutions, smart cybersecurity services, and affordable, hands-on tech training. 
                <br />
                <br />
                Whether you're a student preparing for your career, a startup building your online presence, or a business looking to secure and scale operations — we provide tailored support at every stage. Our approach is simple: deliver real value through development, up skilling, and robust digital protection.
              </p>

              <div className="mt-9">
                <Link href="/about-us">
                  <Button
                    variant="primary"
                    title="Learn More"
                    classNames="w-[200px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
