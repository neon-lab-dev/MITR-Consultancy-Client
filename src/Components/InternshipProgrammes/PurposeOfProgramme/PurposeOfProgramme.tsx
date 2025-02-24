import { ICONS, IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import ProgrammeCard from "./ProgrammeCard";

const PurposeOfProgramme = () => {
    const purposeOfProgrammeData = [
        {
            icon: ICONS.skills,
            title: "Equip students with industry-relevant skills.",
            description: "Get a Website Interface to improve user experience , maximize brand awareness, and "
        },
        {
            icon: ICONS.skills,
            title: "Equip students with industry-relevant skills.",
            description: "Get a Website Interface to improve user experience , maximize brand awareness, and "
        },
        {
            icon: ICONS.skills,
            title: "Equip students with industry-relevant skills.",
            description: "Get a Website Interface to improve user experience , maximize brand awareness, and "
        },
        {
            icon: ICONS.skills,
            title: "Equip students with industry-relevant skills.",
            description: "Get a Website Interface to improve user experience , maximize brand awareness, and "
        },
    ];
    return (
        <div className="font-Inter py-[60px] md:py-20 xl:py-[98px] bg-primary-40">
            <Container>
                <div className="flex flex-col-reverse xl:flex-row items-center gap-7">
                    <Image src={IMAGES.purposeOfProgramme} alt="MITRA Consultancy" className="" />
                    <div>
                        <h1 className="section-heading text-center xl:text-start">Purpose of <span className="text-primary-10">industry Ready</span> program </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-9">
                            {
                                purposeOfProgrammeData?.map((item, index: number) =>
                                    <ProgrammeCard key={index} {...item} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PurposeOfProgramme;