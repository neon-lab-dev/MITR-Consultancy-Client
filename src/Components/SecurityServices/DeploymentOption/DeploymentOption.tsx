import Container from "@/Components/Shared/Container/Container";
import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import Image, { StaticImageData } from "next/image";

type TPointers = {
  title: string;
  description: string;
};

type TDeploymentOption = {
  heading: string;
  image: StaticImageData;
  pointers: TPointers[];
};

const DeploymentOption: React.FC<TDeploymentOption> = ({
  heading,
  image,
  pointers,
}) => {
  return (
    <div className="py-[120px] bg-gradient-compliance font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-16">
          <h2 className="text-neutral-145 text-[32px] md:text-[48px] 2xl:text-[64px] font-semibold text-center">
            {heading}
          </h2>
          <div className="relative flex flex-row justify-center items-center gap-[60px w-full">
            <div className="w-[55%]">
              <div className="flex flex-col gap-6">
                {pointers?.map((item, index: number) => (
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
            <Image src={image} alt="Common Threats" className="w-[45%]" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DeploymentOption;
