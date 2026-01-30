/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ICONS } from "@/assets";
import StyledHeading from "@/Components/Reusable/StyledHeading/StyledHeading";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const complianceSolutions = [
  { icon: ICONS.fintech, title: "Fintech" },
  { icon: ICONS.healthTech, title: "Health" },
  { icon: ICONS.b2b, title: "B2B" },
  { icon: ICONS.consumerTech, title: "Consumer Tech" },
  { icon: ICONS.logistics, title: "Logistics" },
  { icon: ICONS.manufacturing, title: "Manufacturing" },
  { icon: ICONS.marketplace, title: "Marketplace" },
  { icon: ICONS.b2c, title: "B2C" },  
  { icon: ICONS.d2c, title: "D2C" },
  { icon: ICONS.realEstate, title: "Real Estate" },
  { icon: ICONS.retailEcom, title: "Retail & E-com" },
  { icon: ICONS.nonProfits, title: "Non Profits & Public" },
];

const Card = ({ icon, title }: { icon: any; title: string }) => (
  <div className="min-w-[200px] min-h-[120px] px-5 py-4 rounded-[35px] border flex items-center flex-col justify-center bg-white border-neutral-125">
    <div className="flex items-center justify-center size-10 bg-neutral-120 rounded-full">
      <Image src={icon} alt={title} className="size-8" />
    </div>
    <h1 className="text-black mt-[13px]">{title}</h1>
  </div>
);

const ComplianceSolutions = () => {
  const firstRow = complianceSolutions.slice(0, 6);
  const secondRow = complianceSolutions.slice(6, 12);

  return (
    <div className="py-[100px] font-Inter bg-neutral-185 overflow-hidden">
      <Container>
        <StyledHeading
          heading="Compliance Solutions Across"
          stylesHeading="Sectors"
        />
      </Container>

      {/* ROW 1 → RIGHT */}
      <div className="mt-[60px] overflow-hidden">
        <div className="flex gap-5 w-max marquee-right">
          {[...firstRow, ...firstRow].map((item, index) => (
            <Card key={`row1-${index}`} {...item} />
          ))}
        </div>
      </div>

      {/* ROW 2 ← LEFT */}
      <div className="mt-5 overflow-hidden">
        <div className="flex gap-5 w-max marquee-left">
          {[...secondRow, ...secondRow].map((item, index) => (
            <Card key={`row2-${index}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplianceSolutions;
