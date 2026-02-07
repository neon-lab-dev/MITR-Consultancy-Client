"use client";
import { ICONS, IMAGES } from "@/assets";
import StyledHeading from "@/Components/Reusable/StyledHeading/StyledHeading";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import React, { useState } from "react";

const StyledTitle = ({
  title,
  stylesTitle,
}: {
  title: string;
  stylesTitle: string;
}) => {
  return (
    <h2 className="font-Satoshi text-neutral-185 font-extrabold text-lg">
      {title} <span className="text-primary-10">{stylesTitle}</span>
    </h2>
  );
};
const SecureCompliance = () => {
  const [activeTab, setActiveTab] = useState("ISO 27001");
  const tabButtons = [
    "ISO 27001",
    "SOC2",
    "HIPAA",
    "GDPR",
    "DPDP’23",
    "GRC Automation",
    "PCI DSS",
    "CCPA",
  ];

  const tabs = [
    {
      key: "ISO 27001",
      sections: [
        {
          title: {
            normal: "About",
            highlight: "ISO 27001",
          },
          details: [
            "Establish a robust information security management system (ISMS) to protect sensitive data",
            "Implement security controls and risk management processes aligned with ISO 27001 standards",
            "Achieve ISO 27001 certification to demonstrate your commitment to information security",
            "Enhance organizational resilience and safeguard against cyber threats and data breaches",
          ],
        },

        {
          title: {
            normal: "How We Strengthen Your",
            highlight: "Security & Compliance Posture?",
          },
          details: [
            "Ensure the confidentiality, integrity, and availability of your organisation's information assets.",
            "Mitigate risks associated with data breaches, cyber attacks, and regulatory non-compliance.",
            "Build trust and credibility with customers, partners, and stakeholders.",
            "Differentiate your organisation in the marketplace and gain a competitive advantage.",
          ],
        },
      ],

      industriesAndGeographies: [
        {
          title: "Industries",
          pointers: [
            "Finance Industries",
            "SaaS Industries",
            "Healthcare Industries",
            "B2B Industries",
            "All Industries",
          ],
        },
        {
          title: "Geographies",
          pointers: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
      ],
    },
    {
      key: "SOC2",
      sections: [
        {
          title: {
            normal: "About",
            highlight: "SOC2",
          },
          details: [
            "Implement a system of controls to manage and protect sensitive data",
            "Ensure security, availability, processing integrity, confidentiality, and privacy of information",
            "Obtain SOC2 certification to demonstrate adherence to industry-standard practices",
            "Reduce the risk of data breaches and maintain trust with clients and partners",
          ],
        },
        {
          title: {
            normal: "Why do you need",
            highlight: "us?",
          },
          details: [
            "Ensure your organization meets rigorous security and compliance standards",
            "Build credibility and trust with clients by demonstrating control effectiveness",
            "Mitigate risks associated with data breaches, unauthorized access, and operational failures",
            "Maintain a competitive advantage by showcasing strong internal controls",
          ],
        },
      ],
      industriesAndGeographies: [
        {
          title: "Geographies",
          pointers: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: "Industries",
          pointers: [
            "Finance Industries",
            "SaaS Industries",
            "Healthcare Industries",
            "B2B Industries",
            "All Industries",
          ],
        },
      ],
    },
    {
      key: "HIPAA",
      sections: [
        {
          title: {
            normal: "About",
            highlight: "HIPAA",
          },
          details: [
            "Secure protected health information (PHI) using encryption and controlled access",
            "Establish policies and protocols to comply with HIPAA standards",
            "Preserve patient privacy and keep sensitive health information confidential",
            "Reduce the risk of data breaches and avoid penalties related to HIPAA violations",
          ],
        },
        {
          title: {
            normal: "Why do you need",
            highlight: "us?",
          },
          details: [
            "Guarantee the protection and confidentiality of patient health data",
            "Prevent expensive fines and legal issues due to HIPAA breaches",
            "Foster trust and reliability with patients and healthcare collaborators",
            "Showcase your dedication to upholding rigorous data security standards",
          ],
        },
      ],
      industriesAndGeographies: [
        {
          title: "Geographies",
          pointers: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: "Industries",
          pointers: [
            "Finance Industries",
            "SaaS Industries",
            "Healthcare Industries",
            "B2B Industries",
            "All Industries",
          ],
        },
      ],
    },
    {
      key: "GDPR",
      sections: [
        {
          title: {
            normal: "About",
            highlight: "GDPR",
          },
          details: [
            "Apply data security practices such as encryption and pseudonymization",
            "Secure clear consent for data processing and maintain transparency in handling information",
            "Adhere to EU data protection laws to safeguard personal privacy rights",
            "Prevent significant penalties and harm to reputation caused by GDPR breaches",
          ],
        },
        {
          title: {
            normal: "Why do you need",
            highlight: "us?",
          },
          details: [
            "Safeguard personal information and privacy rights in accordance with GDPR",
            "Strengthen data security measures to reduce the chance of breaches",
            "Foster confidence among customers and stakeholders by showing GDPR adherence",
            "Keep up with regulatory updates to retain a market advantage",
          ],
        },
      ],
      industriesAndGeographies: [
        {
          title: "Geographies",
          pointers: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: "Industries",
          pointers: [
            "Finance Industries",
            "SaaS Industries",
            "Healthcare Industries",
            "B2B Industries",
            "All Industries",
          ],
        },
      ],
    },
    {
      key: "DPDP’23",
      sections: [
        {
          title: {
            normal: "About",
            highlight: "DPDP’23",
          },
          details: [
            "Adopt data security strategies to comply with Data Protection and Privacy Regulations",
            "Protect personal information using encryption, access restrictions, and data minimization",
            "Obtain DPDP certification to showcase your dedication to safeguarding privacy rights",
            "Lower the chances of data breaches and avoid penalties related to DPDP violations",
          ],
        },
        {
          title: {
            normal: "Why do you need",
            highlight: "us?",
          },
          details: [
            "Safeguard personal information and privacy rights according to DPDP regulations",
            "Improve data protection measures to reduce the likelihood of breaches",
            "Earn trust from customers and stakeholders by proving DPDP compliance",
            "Keep pace with regulatory updates to sustain a competitive advantage",
          ],
        },
      ],
      industriesAndGeographies: [
        {
          title: "Geographies",
          pointers: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: "Industries",
          pointers: [
            "Finance Industries",
            "SaaS Industries",
            "Healthcare Industries",
            "B2B Industries",
            "All Industries",
          ],
        },
      ],
    },
    {
      key: "GRC Automation",
      sections: [
        {
          title: {
            normal: "About",
            highlight: "GRC Automation",
          },
          details: [
            "Automate governance, risk, and compliance workflows to optimize operations",
            "Deploy GRC Automation solutions to maintain regulatory adherence and minimize manual tasks",
            "Increase efficiency and precision in handling governance, risk, and compliance processes",
            "Reduce risks and enhance decision-making with real-time insights from GRC Automation",
          ],
        },
        {
          title: {
            normal: "Why do you need",
            highlight: "us?",
          },
          details: [
            "Boost productivity and cut operational expenses through GRP process automation",
            "Maintain uniformity and standardization in compliance activities throughout the organisation",
            "Remain flexible and adaptive to evolving regulatory demands using GRC Automation",
            "Utilize technology to proactively detect and manage risks within your business environment",
          ],
        },
      ],
      industriesAndGeographies: [
        {
          title: "Geographies",
          pointers: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: "Industries",
          pointers: [
            "Finance Industries",
            "SaaS Industries",
            "Healthcare Industries",
            "B2B Industries",
            "All Industries",
          ],
        },
      ],
    },
    {
      key: "PCI DSS",
      sections: [
        {
          title: {
            normal: "About",
            highlight: "PCI DSS",
          },
          details: [
            "Protect payment card information using encryption, access restrictions, and network segmentation",
            "Adhere to PCI DSS requirements to secure sensitive cardholder data",
            "Obtain PCI DSS certification to show dedication to safe payment processing",
            "Reduce the likelihood of data breaches and financial damages caused by PCI DSS violations",
          ],
        },
        {
          title: {
            normal: "Why do you need",
            highlight: "us?",
          },
          details: [
            "Safeguard sensitive payment card information and block unauthorized access to cardholder data",
            "Build customer trust and credibility by guaranteeing secure payment processing",
            "Prevent expensive fines, sanctions, and damage to reputation from PCI DSS breaches",
            "Maintain compliance with industry standards and uphold a competitive advantage in the market",
          ],
        },
      ],
      industriesAndGeographies: [
        {
          title: "Geographies",
          pointers: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: "Industries",
          pointers: [
            "Finance Industries",
            "SaaS Industries",
            "Healthcare Industries",
            "B2B Industries",
            "All Industries",
          ],
        },
      ],
    },
    {
      key: "CCPA",
      sections: [
        {
          title: {
            normal: "About",
            highlight: "CCPA",
          },
          details: [
            "Safeguard consumer privacy rights and foster trust with your clientele",
            "Improve data governance and transparency in managing personal data",
            "Prevent costly fines and legal repercussions due to CCPA breaches",
            "Showcase your dedication to honoring consumer privacy and data protection laws",
          ],
        },
        {
          title: {
            normal: "Why do you need",
            highlight: "us?",
          },
          details: [
            "Adopt data privacy practices to meet California Consumer Privacy Act (CCPA) standards",
            "Offer consumers clear visibility and control over their personal data",
            "Maintain adherence to CCPA regulations to safeguard consumer privacy",
            "Reduce the risk of legal penalties and fines stemming from CCPA violations",
          ],
        },
      ],
      industriesAndGeographies: [
        {
          title: "Geographies",
          pointers: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: "Industries",
          pointers: [
            "Finance Industries",
            "SaaS Industries",
            "Healthcare Industries",
            "B2B Industries",
            "All Industries",
          ],
        },
      ],
    },
  ];

  const activeData = tabs.filter((item) => item.key === activeTab);

  return (
    <div className="font-Inter relative">
      <Image
        src={IMAGES.secureCompliance}
        alt=""
        className="w-full h-full absolute z-0"
      />

      <Container>
        <div className="z-10 relative py-[100px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 w-full">
            {/* Left side */}
            <div className="w-full lg:w-[40%]">
              <div className="max-w-[300px]">
                <StyledHeading
                  align="left"
                  heading="Secure Compliance,"
                  stylesHeading="Simplified"
                />
              </div>
              <div className="flex flex-row flex-wrap lg:flex-col items-start gap-8 lg:gap-12 mt-12">
                {tabButtons?.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item)}
                    className={`text-neutral-130 font-bold text-lg`}
                  >
                    {item}
                    {activeTab === item && (
                      <div className="w-[54px] h-1 bg-primary-100 rounded-3xl"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-neutral-190 border border-neutral-130 pl-5 lg:pl-14 pt-5 lg:pt-14 pb-6 lg:pb-[143px] flex flex-col gap-12 w-full lg:w-[60%]">
              {activeData?.map((item, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <div>
                    <h1 className="text-neutral-185 text-[38px] font-Satoshi font-extrabold">
                      {item?.key}
                    </h1>
                    <div className="w-[124px] h-1 bg-primary-10 rounded-3xl"></div>
                  </div>

                  <div className="flex flex-col gap-12">
                    {item?.sections?.map((section, index) => (
                      <div key={index}>
                        <StyledTitle
                          title={section.title.normal}
                          stylesTitle={section.title.highlight}
                        />

                        <div className="space-y-3 mt-3">
                          {section?.details?.map((pointer) => (
                            <div key={pointer} className="flex gap-2">
                              <Image
                                src={ICONS.tickMarkBlue}
                                alt="blue-tick-mark"
                              />
                              <p className="text-black text-sm">{pointer}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Industries & Geographies */}

                  <div className="flex gap-20">
                    {item?.industriesAndGeographies?.map((info, idx) => (
                      <div key={idx}>
                        <h2 className="font-Satoshi text-neutral-185 font-extrabold text-lg">
                          {info?.title}
                        </h2>
                        <div className="space-y-3 mt-3">
                          {info?.pointers?.map((pointer) => (
                            <p key={pointer} className="text-black text-sm">
                              {pointer}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SecureCompliance;
