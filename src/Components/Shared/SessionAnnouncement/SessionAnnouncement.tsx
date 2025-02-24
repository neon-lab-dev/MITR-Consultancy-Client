/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Container from "../Container/Container";
import { IMAGES } from "@/assets";
import Heading from "@/Components/Reusable/Heading/Heading";

const SessionAnnouncement = () => {
    return (
        <div id="aboutUs" className="bg-primary-40 py-[60px] md:py-20 xl:py-[128px]">
            <Container>
                <div className="flex flex-col-reverse lg:flex-row items-center gap-[54px] ">
                    <div className="w-full lg:w-[60%]">
                        <Heading
                            align="left"
                            subHeading="Our Upcoming Webinar on 1st March, 2025"
                            heading="From Chaos to clarity  : Crafting a Professional Codebase in React & Next.js"/>
                        <p className={`text-neutral-20 mt-6 text-justify`}>
                            Building a scalable and maintainable React & Next.js codebase requires structure, best practices, and efficiency. Our webinar, <strong>"From Chaos to Clarity: Crafting a Professional Codebase in React & Next.js,"</strong> will help you master modular architecture, state management, and performance optimization to transform messy projects into clean, high-quality applications with industry standards.
                            <br />
                            <br />
                            Discover key techniques like reusable components, structured folder organization, and essential tools like TypeScript, ESLint, and CI/CD to ensure code consistency and reliability.
                        </p>

                        <a href={"https://docs.google.com/forms/d/e/1FAIpQLSd_NA5uzm2tgyrTlgeMiPafy6Z0oe24rggkRrxj0pNVneTvSA/viewform"} target="_blank" className="mt-8 w-[200px] bg-primary-20 border-primary-20 text-white border px-6 py-3 font-Inter text-lg font-medium rounded items-center justify-center flex">
                            Register Now
                        </a>
                    </div>

                    <a className="w-full lg:w-[40%]" href={"https://docs.google.com/forms/d/e/1FAIpQLSd_NA5uzm2tgyrTlgeMiPafy6Z0oe24rggkRrxj0pNVneTvSA/viewform"} target="_blank">
                    <Image
                        src={IMAGES.bootcamp1}
                        alt="about -MITRA"
                        className=""
                    />
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default SessionAnnouncement;