/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ICONS } from "@/assets";
import Image from "next/image";
import { useState } from "react";

const ProgrammeStructure = ({ phases }: { phases: any[] }) => {
    console.log(phases);

    const [isAccordingOpen, setIsAccordingOpen] = useState("");

    const handleClick = (index: any) =>
        setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

    return (
        <div className="mt-[64px]">
            <h1 className="text-neutral-10 text-[30px] font-semibold leading-[48px]">Program Structure</h1>
            {/* Phases */}
            <div className="flex flex-col gap-6">
                {/* Phases */}
                {
                    phases?.map((phase, index) =>
                        <div key={phase?._id} className="flex flex-col gap-6 mt-[30px]">
                            {/* Phase title */}
                            <h1 className="text-neutral-10 text-[28px] leading-[48px]"><span className="font-bold">Phase {index + 1}</span> : {phase?.title}</h1>
                            {/* Modules */}
                            {
                                phase?.modules?.map((module:any) =>
                                    <div key={module?._id} className="flex gap-3 flex-col w-full">
                                        <article
                                            className={`shadow-course-details bg-white`}
                                        >
                                            {/* Module header (Blue) */}
                                            <div
                                                className={`flex justify-between cursor-pointer items-center w-full px-4 pt-4 rounded-md ${isAccordingOpen === module?._id ? "bg-primary-20 pb-4" : "bg-white pb-0"}`}
                                                onClick={() => handleClick(module?._id)}>
                                                <div className="flex gap-3">
                                                    <Image
                                                        alt=""
                                                        src={isAccordingOpen === module?._id ? ICONS.downArrowWhite : ICONS.downArrow2}
                                                        className={`size-6 duration-300 ${isAccordingOpen === module?._id &&
                                                            "rotate-[180deg]"
                                                            }`}
                                                    />
                                                    <h2 className={`font-medium leading-6 ${isAccordingOpen === module?._id ? "text-white" : "text-black"}`}>
                                                        {module?.title}
                                                    </h2>
                                                </div>
                                                <h2 className={`font-medium text-xl leading-8 pr-3 ${isAccordingOpen === module?._id ? "text-white" : "text-neutral-90"}`}>
                                                    {module?.duration}
                                                </h2>
                                            </div>

                                            {/* Module inner container (white) */}
                                            <div
                                                className={`px-5 pb-5 grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordingOpen === module?._id
                                                    ? "grid-rows-[1fr] opacity-100 mt-4 border-x border-b rounded-b-lg"
                                                    : "grid-rows-[0fr] opacity-0"
                                                    }`}>
                                                <div className={`flex flex-col gap-5 ${isAccordingOpen === module?._id ? "h-full" : "h-0"}`}>
                                                    {
                                                        module?.topics?.map((topic: any) =>
                                                            <div key={topic?._id} className={`flex flex-col gap-5 ${isAccordingOpen === module?._id ? "h-full" : "h-0"} `}>
                                                                <div className="flex gap-3">
                                                                    <Image src={ICONS.checkCircle} alt="check-circle" className="size-5 mt-[2px]" />
                                                                    <div className="text-black font-medium leading-6">{topic?.title}
                                                                        <br />
                                                                        {
                                                                            topic?.contents?.map((content: string, index: number) => (
                                                                                <p key={content} className="ml-7 font-normal">
                                                                                    {String.fromCharCode(97 + index)}. {content}
                                                                                </p>
                                                                            ))
                                                                        }

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ProgrammeStructure;