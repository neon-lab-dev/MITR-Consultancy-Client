import ServiceCard from "@/Components/SecurityServices/ServiceCard/ServiceCard";
import Container from "@/Components/Shared/Container/Container";
import Image, { StaticImageData } from "next/image";

type TPointers = {
  title: string;
  description: string;
};
type TWhySecurityMatters = {
  heading: string;
  image: StaticImageData;
  pointers: TPointers[];
};

const WhySecurityMatters: React.FC<TWhySecurityMatters> = ({
  heading,
  image,
  pointers,
}) => {
  return (
    <div className="pb-[120px] bg-primary-95 font-Inter">
      <div className="w-full h-[75px] bg-neutral-170 blur-[50px]"></div>

      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-16 mt-10">
          <h1
            className={`font-bold text-neutral-10 text-lg md:text-2xl xl:text-[48px] leading-6 md:leading-[49.68px] capitalize text-center`}
          >
            {heading}
          </h1>
          <div className="relative flex flex-col lg:flex-row justify-center gap-[60px] items-center w-full">
            <div className="w-full lg:w-[55%]">
              <div className="flex flex-col gap-6">
                {pointers.map((item: TPointers, index: number) => (
                  <ServiceCard
                    key={index}
                    number={index + 1}
                    title={item.title}
                    description={item.description}
                    gradient="bg-gradient-compliance-card"
                    textColor="#213FAC2B"
                  />
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[45%] h-full">
              <Image src={image} alt="Common Threats" className="h-full" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhySecurityMatters;
