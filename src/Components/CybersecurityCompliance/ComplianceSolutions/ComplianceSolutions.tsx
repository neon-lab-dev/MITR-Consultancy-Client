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
        subTitle: "The TRUE Cost of Cyber Attacks",
        details: [
          {
            value: "$5.9 Million",
            description:
              "Is the approximate amount that finance firms lose per data breach.",
          },
          {
            value: "$4.45 Million",
            description:
              "Was the global average cost of a data breach in 2023.",
          },
          {
            value: "51%",
            description:
              "Organizations plan to increase cybersecurity spending this year.",
          },
        ],
      },
    },
    {
      icon: ICONS.healthTech,
      title: "Health Tech",
      data: {
        title: "Health Tech",
        subTitle: "A Wake-Up Call",
        details: [
          {
            value: "51%",
            description:
              "Healthcare organizations reported an increase in data breaches since 2019.",
          },
          {
            value: "337",
            description:
              "Healthcare incidents reported affected 19,992,810 individuals.",
          },
          {
            value: "36%",
            description:
              "Healthcare facilities reported an increase in medical complications owing to ransomware attacks.",
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
            value: "Business Interruption Protection",
            description:
              "Coverage for financial losses incurred due to cyberattacks or disruptions in business operations, ensuring continuity and resilience for B2B ventures.",
          },
          {
            value: "Third-Party Liability Insurance",
            description:
              "Protection against claims from clients or partners arising from data breaches, system failures, or other cyber incidents, minimising legal and financial risks.",
          },
          {
            value: "Supply Chain Security",
            description:
              "Insurance coverage for supply chain vulnerabilities, safeguarding against disruptions and losses stemming from cyberattacks targeting suppliers or vendors.",
          },
          {
            value: "Network Security Enhancement",
            description:
              "Solutions tailored to strengthen network security infrastructure, including firewalls, intrusion detection systems, and data encryption protocols, reducing the risk of cyber threats and data breaches.",
          },
          {
            value: "Data Privacy Compliance Support",
            description:
              "Coverage for legal expenses, regulatory fines, and other costs associated with privacy compliance, helping B2B companies navigate data protection regulations and mitigate financial risks.",
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
            value: "E-Commerce Protection",
            description:
              "Specialised coverage for online retailers and consumer tech companies, safeguarding against financial losses resulting from data breaches, payment fraud, and other cyber threats in the e-commerce ecosystem.",
          },
          {
            value: "Product Liability Insurance",
            description:
              "Protection against claims of product defects, malfunctions, or cyber vulnerabilities, ensuring financial security and brand reputation for consumer tech companies.",
          },
          {
            value: "Privacy Compliance Support",
            description:
              "Coverage for legal expenses, regulatory fines, and other costs associated with privacy compliance, helping consumer tech companies navigate complex data protection regulations and mitigate financial risks.",
          },
          {
            value: "Intellectual Property Protection",
            description:
              "Insurance solutions tailored to protect intellectual property assets, including patents, trademarks, and proprietary technologies, from theft, infringement, or misuse by competitors or cybercriminals.",
          },
          {
            value: "Cyber Incident Response Services",
            description:
              "Access to expert cyber incident response teams and resources, including forensic investigations, data recovery, and crisis management support, to mitigate the impact of cyberattacks and ensure swift recovery for consumer tech companies.",
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
            value: "Supply Chain Security",
            description:
              "Coverage for cyber threats targeting supply chain partners and vendors.",
          },
          {
            value: "Transportation Infrastructure Protection",
            description:
              "Protection for critical transportation systems and networks.",
          },
          {
            value: "Cargo Theft Insurance",
            description:
              "Coverage for losses incurred due to cyber-enabled cargo theft or hijacking.",
          },
          {
            value: "Business Interruption Coverage",
            description:
              "Financial assistance for losses incurred due to cyber attacks disrupting logistics operations.",
          },
          {
            value: "Reputation Management",
            description:
              "Coverage for reputation damage and media relations expenses resulting from cyber incidents.",
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
            value: "2nd",
            description:
              "Manufacturing is the second-most targeted industry for cyber attacks.",
          },
          {
            value: "86%",
            description:
              "Percentage of cyber attacks against manufacturers that are deliberate, targeted attacks.",
          },
          {
            value: "$130,000",
            description:
              "Average claim size for Coalition's SMB manufacturing policyholders.",
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
            value: "1 Billion",
            description:
              "IoT devices and sensors installed in commercial buildings by the end of 2019.",
          },
          {
            value: "$220,000",
            description:
              "Average claim size for Coalition's real estate policyholders.",
          },
          {
            value: "$125,000",
            description:
              "Average amount stolen in business email compromise and social engineering attacks against real estate firms.",
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
            value: "50%",
            description:
              "Percent of retailers that experienced a data breach in the last year.",
          },
          {
            value: "$62,000",
            description:
              "Average claim size for Coalition's SMB retail policyholders.",
          },
          {
            value: "75%",
            description:
              "Percent of cyber attacks on retailers stemming from denial of service (DDoS) and payment skimming attacks.",
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
            value: "71%",
            description:
              "Non-profits reported experiencing a cyber attack in 2020.",
          },
          {
            value: "$358,000",
            description:
              "The average cost of a successful ransomware attack on non-profits in 2020.",
          },
          {
            value: "68%",
            description:
              "Percent of non-profits that lack resources to respond to a cyber incident.",
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
            className={`font-bold text-neutral-10 text-[32px] md:text-[50px] xl:text-[64px] leading-normal md:leading-[49.68px] capitalize text-center`}
          >
            Security Solutions Across Sectors
          </h1>

          <div className="flex flex-col xl:flex-row items-center gap-6 mt-[60px]">
            {/* Compliance Solutions */}
            <div
              className="
                flex gap-[18px] w-full overflow-x-auto custom-section-scrollbar
                xl:grid xl:grid-cols-3 xl:gap-[18px] xl:w-[50%] 
                xl:overflow-visible"
            >
              {complianceSolutions?.map((item) => (
                <button
                  onClick={() => setActiveTab(item.title)}
                  key={item.title}
                  className={`min-w-[200px] min-h-[120px] flex-shrink-0 px-5 py-4 rounded-lg border flex items-center flex-col justify-center
                  ${
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
            <div className="bg-neutral-135 border border-neutral-130 rounded-xl p-6 h-full xl:h-[500px] w-full xl:w-[50%]">
              <h1 className="text-black text-2xl md:text-[36px] font-semibold text-center leading-10">
                {" "}
                <span className="text-secondary-20">
                  {activeData?.title}
                </span>{" "}
                <span className="text-neutral-25">| </span>
                {activeData?.subTitle}
              </h1>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6 mt-8 max-h-[350px] overflow-y-auto custom-section-scrollbar">
                  {activeData?.details?.map((detail, index) => (
                    <div key={index} className="flex">
                      <div className="bg-neutral-140 border border-neutral-140 rounded-l-xl p-5 flex items-center justify-center text-2xl">
                        <p>{index + 1}</p>
                      </div>
                      <div className="bg-white border border-neutral-140 rounded-r-xl p-5 w-full">
                        <h1 className="text-secondary-20 text-2xl font-extrabold text-center">
                          {detail.value}
                        </h1>
                        <p className="text-black text-sm mt-3 text-start xl:text-center">
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
