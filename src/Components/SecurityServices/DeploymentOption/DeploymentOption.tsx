import Container from "@/Components/Shared/Container/Container";
import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import Image from "next/image";
import { IMAGES } from "@/assets";
interface DeploymentOptions {
  number: string;
  title: string;
  description: string;
}

const threats: DeploymentOptions[] = [
  {
    number: "1",
    title: "Cloud-Based Security",
    description: "(e.g., Microsoft 365, Google Workspace)",
  },
  {
    number: "2",
    title: " On-Premise / Hybrid Setups",
    description: "Complete Enterprise level solutioning",
  },
  {
    number: "3",
    title: "Integration with Existing Mail Servers",
    description: "End to end integration service",
  },
];
const DeploymentOption = () => {
  return (
    <div className="py-[120px] bg-gradient-compliance font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-20">
          <h2 className="text-neutral-145 text-[32px] md:text-[40px] xl:text-[48px] font-semibold mb-4">
            Compliance & Regulatory Alignment
          </h2>
          <div className="relative flex flex-row justify-center items-center w-full">
            {/* <Image
              src={IMAGES.emailCommonThreats}
              alt="Common Threats"
              className="absolute left-0 top-0 bottom-0 w-[45%]"
            /> */}
            <div className="w-[55%]">
              <div className="flex flex-col gap-6">
                {threats.map((item) => (
                  <ServiceCard
                    key={item.number}
                    number={item.number}
                    title={item.title}
                    description={item.description}
                    gradient="bg-gradient-compliance-card"
                  />
                ))}
              </div>
            </div>
            <Image
              src={IMAGES.developmentSection}
              alt="Common Threats"
              className="w-[45%]"
            />
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DeploymentOption;
