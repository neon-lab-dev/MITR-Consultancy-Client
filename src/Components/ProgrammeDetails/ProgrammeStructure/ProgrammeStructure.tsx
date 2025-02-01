"use client"
import { ICONS } from "@/assets";
import Image from "next/image";
import { useState } from "react";

const ProgrammeStructure = ({phases}) => {

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
                    {phases?.map((phase, index) => (
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
                                        {phase?.title}
                                    </h2>
                                </div>
                                <h2 className={`font-medium text-xl leading-8 pr-3 ${isAccordingOpen === index ? "text-white" : "text-neutral-90"}`}>
                                    {phase?.phaseDuration}
                                </h2>
                            </div>
                            <div
                                className={`px-5 pb-5 grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordingOpen === index
                                    ? "grid-rows-[1fr] opacity-100 mt-4 border-x border-b rounded-b-lg"
                                    : "grid-rows-[0fr] opacity-0"
                                    }`}>
                                {
                                    phase?.modules?.map(module => 
                                        <div key={module?.title} className={`flex flex-col gap-5 ${isAccordingOpen === index ? "h-full" : "h-0"} `}>
                                    {
                                        module?.topics?.map(topic => 
                                            <div key={topic?.title} className="flex gap-3">
                                        <Image src={ICONS.checkCircle} alt="check-circle" className="size-5" />
                                        <li className="text-black font-medium leading-6">{topic?.title}:
                                            <br />
                                            {
                                                topic?.contents?.map((content:string) => 
                                                    <p key={content} className="ml-7">{content}</p>
                                                )
                                            }
                                        </li>
                                    </div>
                                        )
                                    }
                                </div>
                                    )
                                }
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgrammeStructure;