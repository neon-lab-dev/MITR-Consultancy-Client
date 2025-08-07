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
        <div className="flex flex-col-reverse xl:flex-row items-center gap-[54px] ">
          <div className="relative">
            <Image
              src={IMAGES.aboutUsBg}
              alt="about -MITRA"
              className="w-full h-full hidden xl:block"
            />
            <Image
              src={IMAGES.aboutUs}
              alt="about -MITRA"
              className="w-full h-full"
            />

            <div className="relative xl:absolute top-0 xl:top-28 right-0 xl:right-20 max-w-[500px] mt-10 xl:mt-0">
              <Heading
                align="left"
                subHeading="About MITRA"
                heading="Most trusted Business Consulting"
              />
              <p className={`text-neutral-20 mt-6 text-justify`}>
                At MITRA Consulting, we are a team of passionate professionals
                dedicated to transforming ideas into impactful digital
                solutions. With expertise spanning UI/UX design, app
                development, back-end systems, software development, and
                front-end technologies, we craft products that are innovative,
                reliable, and tailored to your unique needs.
                <br />
                <br />
                Our mission is to empower businesses with seamless and scalable
                digital experiences, combining technical excellence with
                creative problem-solving. Whether you're a startup or an
                established enterprise, we partner with you to drive success
                through technology.
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
