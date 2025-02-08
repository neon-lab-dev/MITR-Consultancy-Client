import { ICONS } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const ProgramHighlights = () => {
    const programmeHighlights = [
        {
            title: "Course Duration :",
            description: "3 Months (12 Weeks )"
        },
        {
            title: "Target Audience :",
            description: "5th to 7th Semester Students."
        },
        {
            title: "Unique Selling Points (USPs) :",
            description: "Work in Live Projects with industry experts, Practice Session and Certifications."
        },
    ];

    return (
        <div className="font-Inter py-10 bg-primary-40">
            <Container>
                <div>
                    <h1 className="section-heading">Program Highlights</h1>
                    <div className="bg-white rounded-2xl border border-primary-60 p-5 md:p-8 flex flex-col gap-6 mt-6">
                        {
                            programmeHighlights?.map((item) =>
                                <div key={item?.title} className="flex items-start lg:items-center gap-4">
                                    <Image src={ICONS.tickCircle} alt="tick-mark" className="size-6" />
                                    <h1 className={`font-bold text-sm md:text-base text-neutral-10 leading-6`}>{item?.title} <span className="font-normal">{item?.description}</span></h1>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProgramHighlights;