"use client"
import { IMAGES } from "@/assets";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Heading from "../Reusable/Heading/Heading";
import Container from "../Shared/Container/Container";
const Technologies = () => {
    const technologies1 = [IMAGES.angular, IMAGES.aws, IMAGES.docker, IMAGES.flutter];
    const technologies2 = [IMAGES.nodejs, IMAGES.java, IMAGES.nextjs, IMAGES.reactJs, IMAGES.reactNative];
    return (
        <div className="bg-white py-[60px] md:py-20 xl:py-[128px]">
            <Container>
                <Heading
                    align='center'
                    subHeading='Technologies'
                    heading='Tools and Technologies We Leverage'
                />
                <Marquee className="mt-16" speed={70}>
                    {technologies1.map((tech, index) => (
                        <Image key={index} src={tech} alt={''} className="mr-16" />
                    ))}
                </Marquee>

                <Marquee className="mt-16" direction="right">
                    {technologies2.map((tech, index) => (
                        <Image key={index} src={tech} alt={''} className="mr-16" />
                    ))}
                </Marquee>
            </Container>
        </div>
    );
};

export default Technologies;