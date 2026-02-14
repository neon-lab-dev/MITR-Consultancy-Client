import Image from 'next/image';
import { IMAGES } from '@/assets';
import Container from "../../shared/Container/Container";

const WhoItsFor = () => {
  const targetAudience = [
    {
      title: "Working professionals seeking upskilling",
      image: IMAGES.workingProfessionals,
    },
    {
      title: "Graduates preparing for industry roles",
      image: IMAGES.graduates,
    },
    {
      title: "Individuals transitioning into tech domains",
      image: IMAGES.individuals,
    },
    {
      title: "Organizations seeking team training",
      image: IMAGES.organizationTeam,
    },
  ];
  return (
    <div className="font-satoshi bg-neutral-190 py-14">
      <Container>
        <h2 className="font-black text-neutral-185 text-[32px] xl:text-[40px] 2xl:text-[64px] capitalize">
          Who These Programs <span className="text-primary-110">Are For</span>
        </h2>

        <p className="font-general-sans text-sm text-neutral-185 mt-3 mb-6">
          Programs are designed for learners who value structured learning and
          practical outcomes.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {targetAudience?.map((feature) => (
            <div
              key={feature?.title}
              className="rounded-xl relative h-87 w-full"
            >
              <Image src={feature?.image} alt="" className="rounded-t-xl" />
              <h3 className="font-black text-white text-[22px] capitalize absolute bottom-6 left-6 max-w-50">
                {feature?.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhoItsFor;
