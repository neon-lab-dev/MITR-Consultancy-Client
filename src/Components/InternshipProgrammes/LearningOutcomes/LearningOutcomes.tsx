import { ICONS, IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import LearningOutcomeCard from "./LearningOutcomeCard";
import Image from "next/image";

const LearningOutcomes = () => {
    const learningOutcomes = [
        {
            icon: ICONS.industryRole,
            description: "Proficiency in project development."
        },
        {
            icon: ICONS.backendPrefociency,
            description: "Real-world project experience."
        },
        {
            icon: ICONS.realWorldProject,
            description: "Preparedness for industry roles."
        },
    ];

    return (
        <Container>
            <div className='font-Inter py-[60px] md:py-20 xl:py-[98px] flex flex-col xl:flex-row items-center gap-6'>
                <div>
                    <h1 className="section-heading text-center xl:text-start">What Will You get from the Training</h1>
                    <p className="text-neutral-55 text-sm md:text-base font-medium leading-6 mt-[18px] text-center xl:text-start">With a curriculum designed and taught by industry experts, you will get the skills and mentorship for guaranteed success.</p>

                    <div className="mt-[34px] grid grid-cols-1 md:grid-cols-3 gap-5">
                        {
                            learningOutcomes?.map((outcome, index: number) =>
                                <LearningOutcomeCard key={index} {...outcome} />
                            )
                        }
                    </div>
                </div>
                <Image src={IMAGES.learningOutcomes} alt="MITR Consultancy" className="" />
            </div>
        </Container>
    );
};

export default LearningOutcomes;