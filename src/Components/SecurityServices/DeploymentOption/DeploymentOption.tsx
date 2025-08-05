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

const developmentOptions: DeploymentOptions[] = [
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
        <div className="flex flex-col justify-center items-center text-center w-full gap-16">
          <h2 className="text-neutral-145 text-[32px] md:text-[48px] 2xl:text-[64px] font-semibold text-center">
            Deployment Option
          </h2>
          <div className="relative flex flex-row justify-center items-center gap-[60px w-full">
            <div className="w-[55%]">
              <div className="flex flex-col gap-6">
                {developmentOptions.map((item) => (
                  <ServiceCard
                    key={item.number}
                    number={item.number}
                    title={item.title}
                    description={item.description}
                    gradient="bg-gradient-compliance-card"
                    textColor="#213FAC2B"
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
