import { ICONS } from "@/assets";
import Heading from "@/Components/Reusable/Heading/Heading";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const Counters = () => {
  const counterData = [
    {
      icon: ICONS.experience,
      title: "Years in business",
      value: 2,
    },
    {
      icon: ICONS.partners,
      title: "Global Partners",
      value: 10,
    },
    {
      icon: ICONS.secured,
      title: "Systems Secured",
      value: 800,
    },
    {
      icon: ICONS.projects,
      title: "Ongoing Projects",
      value: 15,
    },
  ];
  return (
    <div className="bg-gradient-counters py-[64px] font-Inter">
      <Container>
        <div>
          <Heading heading="Our Numbers Speak for Themselves" align="center" />

          <div className="flex items-center justify-between mt-[72px]">
            {counterData?.map((data, index) => (
              <div key={index} className="flex items-center gap-9">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={data?.icon}
                    alt="experience"
                    className="size-10"
                  />
                  <h1 className="font-extrabold text-neutral-10 text-[52px] mt-6">
                    {data?.value}+
                  </h1>
                  <p className=" text-neutral-160 text-2xl mt-1">
                    {data?.title}
                  </p>
                </div>
                {index < counterData.length - 1 && (
                  <div className="w-1 h-16 bg-primary-85"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Counters;
