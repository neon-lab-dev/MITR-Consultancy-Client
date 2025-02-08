import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const BenefitsForStudent = () => {
    const benefitsForStudents = [
        {
            title: "Learn from the experts",
            description: "Follow a well-designed roadmap created by experts to enhance your skills and stay ahead in your field."
        },
        {
            title: "Comprehensive career guidance",
            description: "Receive expert advice on job search strategies, career growth, and interview techniques."
        },
        {
            title: "Personalized learning pathways",
            description: "Access curated learning resources and skill assessments tailored to your career goals."
        },
        {
            title: "Real-world project experience",
            description: "Work on industry-level projects to build a strong portfolio and gain practical experience."
        },
    ];

    return (
        <div className="font-Inter py-[60px] md:py-20 xl:py-[98px] bg-primary-40">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div>
                        <h1 className="section-heading text-center xl:text-start">Benefits for Students</h1>
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