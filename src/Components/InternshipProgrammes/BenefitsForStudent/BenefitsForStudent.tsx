import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const BenefitsForStudent = () => {
    const benefitsForStudents = [
        {
            title : "AI-driven practice interviews",
            description : "Elevate your resume and get personalized 1:1 resume vetting sessions."
        },
        {
            title : "AI-driven practice interviews",
            description : "Elevate your resume and get personalized 1:1 resume vetting sessions."
        },
        {
            title : "AI-driven practice interviews",
            description : "Elevate your resume and get personalized 1:1 resume vetting sessions."
        },
        {
            title : "AI-driven practice interviews",
            description : "Elevate your resume and get personalized 1:1 resume vetting sessions."
        },
    ];
    
    return (
        <div className="font-Inter py-[60px] md:py-20 xl:py-[98px] bg-primary-40">
            <Container>
                <div className="flex flex-col xl:flex-row items-center gap-8">
                    <div>
                        <h1 className="text-neutral-10 text-[36px] font-bold leading-[57px] capitalize">Benefits for Students</h1>
                        <div className="flex flex-col gap-5 mt-9">
                            {
                                benefitsForStudents?.map((benefit) =>
                                    <div key={benefit?.title} className="px-7 py-5 border-l-4 border-primary-10 rounded-r-xl bg-white">
                                        <h1 className={`text-neutral-10 text-xl font-semibold leading-[27px]`}>{benefit?.title}</h1>
                                        <p className={`text-neutral-20 font-medium leading-6 mt-[14px]`}>{benefit?.description}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <Image src={IMAGES.benefits} alt="MITR Consultancy" className="" />
                </div>
            </Container>
        </div>
    );
};

export default BenefitsForStudent;