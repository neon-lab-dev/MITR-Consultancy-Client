/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/Components/Shared/Container/Container";
import React from "react";
import ComplienceCard from "./ComplienceCard/ComplienceCard";

type TComplianceSection = {
  heading: string;
  subHeading?: string;
  pointers?: any;
};
const ComplianceSection: React.FC<TComplianceSection> = ({
  heading,
  subHeading,
  pointers,
}) => {
  return (
    <div className="py-[120px] bg-gradient-compliance font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-20">
          <h2 className="text-neutral-145 text-[32px] md:text-[48px] 2xl:text-[64px] font-semibold text-center">
            {heading}
          </h2>

          <div className="flex flex-col gap-12">
            {subHeading && <p className="text-black text-2xl">{subHeading}</p>}
            <div className="flex flex-row gap-6 flex-wrap justify-center">
              {pointers?.map((item: any, index: number) => (
                <ComplienceCard
                  key={index}
                  title={item.title}
                  image={item?.logo || null}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComplianceSection;
