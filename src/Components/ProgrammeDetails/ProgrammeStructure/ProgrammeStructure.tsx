"use client"
import { ICONS } from "@/assets";
import Image from "next/image";
import { useState } from "react";

const ProgrammeStructure = () => {
    const accordingData = [
        {
            title: "What is the purpose of wireframing in design?",
            description:
                "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
        },
        {
            title: "Why is user-centered design important?",
            description:
                "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
        },
        {
            title: "What role does contrast play in graphic design?",
            description:
                "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
        },

        {
            title: `Define the term "responsive design" in web development.`,
            description:
                "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
        },

        {
            title: "What is the significance of color theory in design?",
            description:
                "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
        },
    ];

    const [isAccordingOpen, setIsAccordingOpen] = useState(0);

    const handleClick = (index) =>
        setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));
    return (
        <div className="mt-[64px]">
            <h1 className="text-neutral-10 text-[30px] font-semibold leading-[48px]">Program Structure</h1>
            {/* Phases */}
            <div className="flex flex-col gap-6 mt-[30px]">
                <h1 className="text-neutral-10 text-[28px] leading-[48px]"><span className="font-bold">Phase 1</span> : Technical Foundation (4 Weeks)</h1>

                <div className="flex gap-3 flex-col w-full">
                    {accordingData?.map((according, index) => (
                        <article
                            key={index}
                            className={`shadow-course-details bg-white`}
                        >
                            <div
                                className={`flex justify-between cursor-pointer items-center w-full px-4 pt-4 rounded-md ${isAccordingOpen === index ? "bg-primary-20 pb-4" : "bg-white pb-0"}`}
                                onClick={() => handleClick(index)}>
                                <div className="flex gap-3">
                                    <Image
                                        alt=""
                                        src={isAccordingOpen === index ? ICONS.downArrowWhite : ICONS.downArrow2}
                                        className={`size-6 duration-300 ${isAccordingOpen === index &&
                                            "rotate-[180deg]"
                                            }`}
                                    />
                                    <h2 className={`font-medium leading-6 ${isAccordingOpen === index ? "text-white" : "text-black"}`}>
                                        {according.title}
                                    </h2>
                                </div>
                                <h2 className={`font-medium text-xl leading-8 pr-3 ${isAccordingOpen === index ? "text-white" : "text-neutral-90"}`}>
                                    Week 1
                                </h2>
                            </div>
                            <div
                                className={`px-5 pb-5 grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordingOpen === index
                                    ? "grid-rows-[1fr] opacity-100 mt-4 border-x border-b rounded-b-lg"
                                    : "grid-rows-[0fr] opacity-0"
                                    }`}>
                                <div className={`flex flex-col gap-5 ${isAccordingOpen === index ? "h-full" : "h-0"} `}>
                                    <div className="flex gap-3">
                                        <Image src={ICONS.checkCircle} alt="check-circle" className="size-5" />
                                        <li className="text-black font-medium leading-6">HTML Fundamentals:
                                            <br />
                                            <p className="ml-7">a. Semantic HTML and web structure.</p>
                                            <p className="ml-7">b. Accessibility and best practices.</p>
                                        </li>
                                    </div>
                                    <div className="flex gap-3">
                                        <Image src={ICONS.checkCircle} alt="check-circle" className="size-5" />
                                        <li className="text-black font-medium leading-6">HTML Fundamentals:
                                            <br />
                                            <p className="ml-7">a. Semantic HTML and web structure.</p>
                                            <p className="ml-7">b. Accessibility and best practices.</p>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgrammeStructure;