import { ICONS, IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import ProgrammeCard from "./ProgrammeCard";

const PurposeOfProgramme = () => {
  const purposeOfProgrammeData = [
    {
      icon: ICONS.skills,
      title: "Equip Students With Industry-Relevant Skills.",
      description:
        "Gain hands-on experience through real-world projects that reflect current industry needs and technologies.",
    },
    {
      icon: ICONS.skills,
      title: "Bridge the Gap Between Academia & Industry.",
      description:
        "Learn practical applications of theoretical knowledge to meet the expectations of modern employers.",
    },
    {
      icon: ICONS.skills,
      title: "Enhance Problem-Solving & Collaboration.",
      description:
        "Participate in collaborative projects that strengthen communication, teamwork, and critical thinking.",
    },
    {
      icon: ICONS.skills,
      title: "Build Confidence Through Practical Exposure.",
      description:
        "Engage in simulated work environments to build confidence and prepare for job interviews and internships.",
    },
  ];

  return (
    <div className="font-Inter py-[60px] md:py-20 xl:py-[98px] bg-primary-40">
      <Container>
        <div className="flex flex-col-reverse 2xl:flex-row items-center gap-7">
          <Image
            src={IMAGES.purposeOfProgramme}
            alt="MITRA Consultancy"
            className=""
          />
          <div>
            <h1 className="section-heading text-center xl:text-start">
              Purpose of <span className="text-primary-10">industry Ready</span>{" "}
              program{" "}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-9">
              {purposeOfProgrammeData?.map((item, index: number) => (
                <ProgrammeCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PurposeOfProgramme;
