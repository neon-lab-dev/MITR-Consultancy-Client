"use client";
import { ICONS } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import React, { useState } from "react";

const ComplianceSolutions = () => {
  const [activeTab, setActiveTab] = useState("Fintech");

  const complianceSolutions = [
    {
      icon: ICONS.fintech,
      title: "Fintech",
      data: {
        title: "Fintech",
        subTitle: "Cyber Mitigation Analysis",
        details: [
          {
            value: "$30000",
            description:
              "Is the approximate amount that finance firms lose per data breach.",
          },
          {
            value: "72%",
            description:
              "Of fintech companies experienced a cyber incident in the past year.",
          },
        ],
      },
    },
    {
      icon: ICONS.healthTech,
      title: "Health Tech",
      data: {
        title: "Health Tech",
        subTitle: "Patient Data Protection",
        details: [
          {
            value: "$250000",
            description:
              "Average penalty for HIPAA violations in healthcare data breaches.",
          },
          {
            value: "93%",
            description: "Of healthcare orgs faced a cyber attack in 2023.",
          },
        ],
      },
    },
    {
      icon: ICONS.b2b,
      title: "B2B",
      data: {
        title: "B2B",
        subTitle: "Supply Chain Risk",
        details: [
          {
            value: "60%",
            description:
              "Of B2B businesses faced vendor-related compliance risks.",
          },
        ],
      },
    },
    {
      icon: ICONS.consumerTech,
      title: "Consumer Tech",
      data: {
        title: "Consumer Tech",
        subTitle: "Privacy Risk Insights",
        details: [
          {
            value: "$50000",
            description:
              "Was the average fine for consumer data misuse in 2024.",
          },
        ],
      },
    },
    {
      icon: ICONS.logistics,
      title: "Logistics",
      data: {
        title: "Logistics",
        subTitle: "Operational Compliance",
        details: [
          {
            value: "85%",
            description:
              "Of logistics companies lack full compliance automation.",
          },
        ],
      },
    },
    {
      icon: ICONS.manufacturing,
      title: "Manufacturing",
      data: {
        title: "Manufacturing",
        subTitle: "Safety and Quality Compliance",
        details: [
          {
            value: "$120K",
            description:
              "Was the median cost of safety-related shutdowns in 2024.",
          },
        ],
      },
    },
    {
      icon: ICONS.marketplace,
      title: "Marketplace",
      data: {
        title: "Marketplace",
        subTitle: "Regulatory Monitoring",
        details: [
          {
            value: "45%",
            description: "Of platforms faced policy violations from sellers.",
          },
        ],
      },
    },
    {
      icon: ICONS.b2c,
      title: "B2C",
      data: {
        title: "B2C",
        subTitle: "Customer Protection Compliance",
        details: [
          {
            value: "$30M",
            description: "Lost globally due to fake product listings.",
          },
        ],
      },
    },
    {
      icon: ICONS.d2c,
      title: "D2C",
      data: {
        title: "D2C",
        subTitle: "Consumer Privacy Enforcement",
        details: [
          {
            value: "78%",
            description:
              "Of D2C companies were warned about cookie violations.",
          },
        ],
      },
    },
    {
      icon: ICONS.realEstate,
      title: "Real Estate",
      data: {
        title: "Real Estate",
        subTitle: "Legal Compliance Audits",
        details: [
          {
            value: "$15K",
            description: "Average fine for lease document non-compliance.",
          },
        ],
      },
    },
    {
      icon: ICONS.retailEcom,
      title: "Retail & E-com",
      data: {
        title: "Retail & E-com",
        subTitle: "Data Leak Management",
        details: [
          {
            value: "$500K",
            description:
              "Cost of a single data leak for large online retailers.",
          },
        ],
      },
    },
    {
      icon: ICONS.nonProfits,
      title: "Non Profits & Public",
      data: {
        title: "Non Profits & Public",
        subTitle: "Public Trust Compliance",
        details: [
          {
            value: "62%",
            description: "Of NGOs struggled with regulatory filings in 2024.",
          },
        ],
      },
    },
  ];

  const activeData = complianceSolutions.find(
    (item) => item.title === activeTab
  )?.data;

  return (
    <div className="py-[100px] font-Inter">
      <Container>
        <div>
          <h1
            className={`font-bold text-neutral-10 text-lg md:text-2xl xl:text-[64px] leading-6 md:leading-[49.68px] capitalize text-center`}
          >
            Compliance Solutions Across Sectors
          </h1>

          <div className="flex items-center gap-6 mt-[60px]">
            {/* Compliance Solutions */}
            <div className="grid grid-cols-3 gap-[18px] w-[50%]">
              {complianceSolutions?.map((item) => (
                <button
                  onClick={() => setActiveTab(item.title)}
                  key={item.title}
                  className={`px-5 py-4 rounded-lg border flex items-center flex-col justify-center ${
                    activeTab === item.title
                      ? "bg-primary-75 border-primary-10"
                      : "bg-white border-neutral-125"
                  }`}
                >
                  <div className="flex items-center justify-center size-10 bg-neutral-120 rounded-full">
                    <Image src={item.icon} alt="fintech" className="size-8" />
                  </div>
                  <h1 className="text-black mt-[13px]">{item.title}</h1>
                </button>
              ))}
            </div>

            {/* Data */}
            <div className="bg-neutral-135 border border-neutral-130 rounded-xl p-6 h-[500px] w-[50%]">
              <h1 className="text-black text-[36px] font-semibold text-center">
                {" "}
                <span className="text-secondary-20">
                  {activeData?.title}
                </span>{" "}
                <span className="text-neutral-25">| </span>
                {activeData?.subTitle}
              </h1>

              <div className="flex flex-col gap-6 mt-8">
                <div className="flex flex-col gap-6 mt-8">
                  {activeData?.details?.map((detail, index) => (
                    <div key={index} className="flex">
                      <div className="bg-neutral-140 border border-neutral-140 rounded-l-xl p-5 flex items-center justify-center text-2xl">
                        <p>{index + 1}</p>
                      </div>
                      <div className="bg-white border border-neutral-140 rounded-r-xl p-5 w-full">
                        <h1 className="text-secondary-20 text-2xl font-extrabold text-center">
                          {detail.value}
                        </h1>
                        <p className="text-black text-sm mt-3 text-center">
                          {detail.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>{" "}
    </div>
  );
};

export default ComplianceSolutions;
