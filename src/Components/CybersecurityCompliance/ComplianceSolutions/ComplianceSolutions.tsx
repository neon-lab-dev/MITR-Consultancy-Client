"use client";
import { ICONS } from "@/assets";
import StyledHeading from "@/Components/Reusable/StyledHeading/StyledHeading";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const ComplianceSolutions = () => {
  const complianceSolutions = [
    {
      icon: ICONS.fintech,
      title: "Fintech",
    },
    {
      icon: ICONS.healthTech,
      title: "Health",
    },
    {
      icon: ICONS.b2b,
      title: "B2B",
    },
    {
      icon: ICONS.consumerTech,
      title: "Consumer Tech",
    },
    {
      icon: ICONS.logistics,
      title: "Logistics",
    },
    {
      icon: ICONS.manufacturing,
      title: "Manufacturing",
    },
    {
      icon: ICONS.marketplace,
      title: "Marketplace",
    },
    {
      icon: ICONS.b2c,
      title: "B2C",
    },
    {
      icon: ICONS.d2c,
      title: "D2C",
    },
    {
      icon: ICONS.realEstate,
      title: "Real Estate",
    },
    {
      icon: ICONS.retailEcom,
      title: "Retail & E-com",
    },
    {
      icon: ICONS.nonProfits,
      title: "Non Profits & Public",
    },
  ];

  return (
    <div className="py-[100px] font-Inter bg-neutral-185">
      <Container>
        <div>
          <StyledHeading
            heading="Compliance Solutions Across"
            stylesHeading="Sectors"
          />

          <div className="flex gap-5 mt-[60px]">
            {complianceSolutions?.slice(0,6)?.map((item) => (
              <div
                key={item.title}
                className={`min-w-[200px] min-h-[120px] flex-shrink-0 px-5 py-4 rounded-[35px] border flex items-center flex-col justify-center bg-white border-neutral-125`}
              >
                <div className="flex items-center justify-center size-10 bg-neutral-120 rounded-full">
                  <Image src={item.icon} alt="fintech" className="size-8" />
                </div>
                <h1 className="text-black mt-[13px]">{item.title}</h1>
              </div>
            ))}
          </div>

          <div className="flex gap-5 mt-5">
            {complianceSolutions?.slice(6,12)?.map((item) => (
              <div
                key={item.title}
                className={`min-w-[200px] min-h-[120px] flex-shrink-0 px-5 py-4 rounded-[35px] border flex items-center flex-col justify-center bg-white border-neutral-125`}
              >
                <div className="flex items-center justify-center size-10 bg-neutral-120 rounded-full">
                  <Image src={item.icon} alt="fintech" className="size-8" />
                </div>
                <h1 className="text-black mt-[13px]">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </Container>{" "}
    </div>
  );
};

export default ComplianceSolutions;
