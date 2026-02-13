import Image from 'next/image';
import { IMAGES } from '@/assets';
import Container from "../../shared/Container/Container";

const ProgramStructure = () => {
  const trainingFeatures = [
    {
      title: "Instructor-led sessions",
      image: IMAGES.instructorLedSessions,
    },
    {
      title: "Online program delivery",
      image: IMAGES.onlineProgramDelivery,
    },
    {
      title: "Defined duration and learning milestones",
      image: IMAGES.definedDuration,
    },
    {
      title: "Hands-on practice",
      image: IMAGES.practice,
    },
  ];
  return (
    <Container>
      <div className="font-satoshi py-14">
        <h2 className="font-black text-white text-lg md:text-2xl xl:text-[40px] 2xl:text-[64px] capitalize">
          Program <span className="text-primary-110">Structure & Format</span>
        </h2>

        <p className="font-general-sans text-sm text-white mt-3 mb-6">
          MITRA’s training programs are structured to balance depth, clarity,
          and practical application.
        </p>

        <div className="mt-12 grid grid-cols-4 gap-6">
          {trainingFeatures?.map((feature) => (
            <div key={feature?.title} className="rounded-xl relative h-115">
              <Image
                src={feature?.image}
                alt=""
                className="rounded-t-xl absolute top-0"
              />
              <h3 className="font-black text-white text-[22px] capitalize absolute bottom-22 left-6">
                {feature?.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProgramStructure;
