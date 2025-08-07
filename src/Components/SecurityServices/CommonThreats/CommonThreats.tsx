import Container from "@/Components/Shared/Container/Container";
import Image, { StaticImageData } from "next/image";
import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

type TPointers = {
  title: string;
  description: string;
};

type TCommonThreats = {
  heading: string;
  image: StaticImageData;
  pointers: TPointers[];
};

const CommonThreats: React.FC<TCommonThreats> = ({
  heading,
  image,
  pointers,
}) => {
  return (
    <div className="py-[120px] bg-gradient-threats font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-20">
          <h1
            className={`font-bold text-neutral-10 text-lg md:text-2xl xl:text-[48px] leading-6 md:leading-[49.68px] capitalize text-center`}
          >
            {heading}
          </h1>
          <div className="relative flex flex-col lg:flex-row justify-center items-center w-full">
            <Image src={image} alt="Common Threats" className="w-full lg:w-[45%]" />
            <div className="w-full lg:w-[55%]">
              <div className="flex flex-col gap-6">
                {pointers?.map((item: TPointers, index: number) => (
                  <ServiceCard
                    key={index}
                    number={index + 1}
                    title={item.title}
                    description={item.description}
                    gradient="bg-gradient-threats-card"
                    textColor="#FC464663"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommonThreats;
