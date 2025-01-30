import { ICONS, IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import DetailsCard from "../DetailsCard";

const ProgrammeDetailsHero = () => {

    return (
        <div className="font-Inter mt-20">
            {/* Background Image */}
            <div className="relative w-full h-[470px]">
                <Image
                    src={IMAGES.frontendDevelopmentBgImg}
                    alt="MITR Consultancy"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 bg-neutral-50 bg-opacity-50"></div>
            </div>


            {/* Content */}
            <Container>
                <div className="absolute top-0 bottom-0 flex items-center xl:items-start justify-center flex-col text-center xl:text-start py-10 md:py-16 xl:py-24 w-full max-w-[1300px] mx-auto">
                    <div className="flex items-center justify-between w-full">
                        <div className="relative">
                            <h1 className="text-white text-xl md:text-[36px] font-bold max-w-[344px] md:max-w-[550px] xl:max-w-[660px] leading-normal">
                                <span className="text-secondary-15">Frontend Development</span>  : Building Modern Web Applications
                            </h1>
                            <p className="text-white text-sm max-w-[344px] md:max-w-[550px] xl:max-w-[660px] leading-normal mt-3 xl:mt-6">
                                Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript,
                                Node, React, PostgreSQL, Web3 and DApps
                            </p>

                            <div className="flex rounded-lg w-[796px] absolute top-[280px] shadow-course-details">
                                <div className="bg-primary-20 py-3 px-4 rounded-l-lg flex flex-col items-center justify-center">
                                    <Image src={ICONS.training} alt="training" className="size-6" />
                                    <p className="text-white font-semibold">Training</p>
                                </div>
                                <div className="bg-white py-3 px-4 rounded-r-lg flex items-center justify-between  w-[672px]">
                                    <p className="text-neutral-90 text-sm max-w-[247px]">Access this top-rated training Course, and set your carrier in web development and web application.</p>
                                    <div className="bg-neutral-65 h-full w-[1px]"></div>
                                    <div className="flex flex-col items-center gap-2">
                                        <p className="text-neutral-90 font-semibold text-[21px] leading-7">4.9</p>
                                        <Image src={ICONS.rating} alt="training" className="" />
                                        <p className="text-neutral-95 text-sm">422,249 ratings</p>
                                    </div>
                                    <div className="bg-neutral-65 h-full w-[1px]"></div>
                                    <div className="flex flex-col items-center gap-2">
                                        <Image src={ICONS.users} alt="training" className="size-6" />
                                        <p className="text-neutral-90 font-semibold text-sm">1,407,169</p>
                                        <p className="text-neutral-95 text-sm">Students Enrolled</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <DetailsCard />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProgrammeDetailsHero;
