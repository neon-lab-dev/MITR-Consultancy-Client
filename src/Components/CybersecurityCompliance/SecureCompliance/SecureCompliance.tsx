"use client";
import { IMAGES } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import React, { useState } from "react";

const SecureCompliance = () => {
  const [activeTab, setActiveTab] = useState("ISO 27001");
  const tabButtons = [
    "ISO 27001",
    "SOC2",
    "HIPAA",
    "GDPR",
    "DPDP’23",
    "GRP Automation",
    "PCI DSS",
    "CCPA",
  ];

  const tabs = [
    {
      key: "ISO 27001",
      sections: [
        {
          title: (
            <h1 className="text-black font-semibold">
              About{" "}
              <span className="text-secondary-20 text-2xl font-extrabold">
                ISO 27001
              </span>
            </h1>
          ),
          details: [
            "Establish a robust information security management system (ISMS) to protect sensitive data",
            "Implement security controls and risk management processes aligned with ISO 27001 standards",
            "Achieve ISO 27001 certification to demonstrate your commitment to information security",
            "Enhance organizational resilience and safeguard against cyber threats and data breaches",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Ensure the confidentiality, integrity, and availability of your organisation's information assets.",
            "Mitigate risks associated with data breaches, cyber attacks, and regulatory non-compliance.",
            "Build trust and credibility with customers, partners, and stakeholders.",
            "Differentiate your organisation in the marketplace and gain a competitive advantage.",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: [
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
      key: "SOC2",
      sections: [
        {
          title: (
            <h1 className="text-black font-semibold">
              About{" "}
              <span className="text-secondary-20 text-2xl font-extrabold">
                SOC2
              </span>
            </h1>
          ),
          details: [
            "Perform frequent reviews of internal controls and workflows to maintain data protection",
            "Establish security guidelines and protocols in accordance with SOC2 standards",
            "Strengthen client and stakeholder trust by achieving SOC2 compliance",
            "Improve market standing and reliability through SOC2 certification",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Safeguard confidential data and customer details against unauthorized access",
            "Showcase your dedication to data protection and compliance with regulations",
            "Secure a competitive advantage and earn the confidence of prospective clients and partners",
            "Maintain the integrity, availability, and confidentiality of your organisation's systems and information",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: [
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
          title: (
            <h1 className="text-black font-semibold">
              About{" "}
              <span className="text-secondary-20 text-2xl font-extrabold">
                HIPAA
              </span>
            </h1>
          ),
          details: [
            "Secure protected health information (PHI) using encryption and controlled access",
            "Establish policies and protocols to comply with HIPAA standards",
            "Preserve patient privacy and keep sensitive health information confidential",
            "Reduce the risk of data breaches and avoid penalties related to HIPAA violations",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Guarantee the protection and confidentiality of patient health data",
            "Prevent expensive fines and legal issues due to HIPAA breaches",
            "Foster trust and reliability with patients and healthcare collaborators",
            "Showcase your dedication to upholding rigorous data security standards",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: [
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
          title: (
            <h1 className="text-black font-semibold">
              About{" "}
              <span className="text-secondary-20 text-2xl font-extrabold">
                GDPR
              </span>
            </h1>
          ),
          details: [
            "Apply data security practices such as encryption and pseudonymization",
            "Secure clear consent for data processing and maintain transparency in handling information",
            "Adhere to EU data protection laws to safeguard personal privacy rights",
            "Prevent significant penalties and harm to reputation caused by GDPR breaches",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Safeguard personal information and privacy rights in accordance with GDPR",
            "Strengthen data security measures to reduce the chance of breaches",
            "Foster confidence among customers and stakeholders by showing GDPR adherence",
            "Keep up with regulatory updates to retain a market advantage",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: [
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
          title: (
            <h1 className="text-black font-semibold">
              About{" "}
              <span className="text-secondary-20 text-2xl font-extrabold">
                DPDP’23
              </span>
            </h1>
          ),
          details: [
            "Adopt data security strategies to comply with Data Protection and Privacy Regulations",
            "Protect personal information using encryption, access restrictions, and data minimization",
            "Obtain DPDP certification to showcase your dedication to safeguarding privacy rights",
            "Lower the chances of data breaches and avoid penalties related to DPDP violations",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Safeguard personal information and privacy rights according to DPDP regulations",
            "Improve data protection measures to reduce the likelihood of breaches",
            "Earn trust from customers and stakeholders by proving DPDP compliance",
            "Keep pace with regulatory updates to sustain a competitive advantage",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: [
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
      key: "GRP Automation",
      sections: [
        {
          title: (
            <h1 className="text-black font-semibold">
              About{" "}
              <span className="text-secondary-20 text-2xl font-extrabold">
                GRP Automation
              </span>
            </h1>
          ),
          details: [
            "Automate governance, risk, and compliance workflows to optimize operations",
            "Deploy GRP automation solutions to maintain regulatory adherence and minimize manual tasks",
            "Increase efficiency and precision in handling governance, risk, and compliance processes",
            "Reduce risks and enhance decision-making with real-time insights from GRP automation",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Boost productivity and cut operational expenses through GRP process automation",
            "Maintain uniformity and standardization in compliance activities throughout the organisation",
            "Remain flexible and adaptive to evolving regulatory demands using GRP automation",
            "Utilize technology to proactively detect and manage risks within your business environment",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: [
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
          title: (
            <h1 className="text-black font-semibold">
              About{" "}
              <span className="text-secondary-20 text-2xl font-extrabold">
                PCI DSS
              </span>
            </h1>
          ),
          details: [
            "Protect payment card information using encryption, access restrictions, and network segmentation",
            "Adhere to PCI DSS requirements to secure sensitive cardholder data",
            "Obtain PCI DSS certification to show dedication to safe payment processing",
            "Reduce the likelihood of data breaches and financial damages caused by PCI DSS violations",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Safeguard sensitive payment card information and block unauthorized access to cardholder data",
            "Build customer trust and credibility by guaranteeing secure payment processing",
            "Prevent expensive fines, sanctions, and damage to reputation from PCI DSS breaches",
            "Maintain compliance with industry standards and uphold a competitive advantage in the market",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: [
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
          title: (
            <h1 className="text-black font-semibold">
              About{" "}
              <span className="text-secondary-20 text-2xl font-extrabold">
                CCPA
              </span>
            </h1>
          ),
          details: [
            "Safeguard consumer privacy rights and foster trust with your clientele",
            "Improve data governance and transparency in managing personal data",
            "Prevent costly fines and legal repercussions due to CCPA breaches",
            "Showcase your dedication to honoring consumer privacy and data protection laws",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Adopt data privacy practices to meet California Consumer Privacy Act (CCPA) standards",
            "Offer consumers clear visibility and control over their personal data",
            "Maintain adherence to CCPA regulations to safeguard consumer privacy",
            "Reduce the risk of legal penalties and fines stemming from CCPA violations",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: [
            "India",
            "United States of America",
            "United Kingdom",
            "European Union",
            "Global",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: [
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

  const activeData = tabs.find((item) => item.key === activeTab)?.sections;

  return (
    <div className="font-Inter relative">
      <Image
        src={IMAGES.secureCompliance}
        alt=""
        className="w-full h-full absolute z-0"
      />

      <Container>
        <div className="z-10 relative py-[100px]">
          <h1
            className={`font-bold text-neutral-10 text-[32px] md:text-[50px] xl:text-[64px] leading-normal md:leading-[49.68px] capitalize text-center`}
          >
            Secure Compliance, Simplified
          </h1>

          <div className="flex items-center justify-center gap-6 mt-[60px] w-full overflow-x-auto text-nowrap">
            {tabButtons?.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`text-primary-10 font-medium rounded-lg px-6 py-2 ${
                  activeTab === item
                    ? "bg-primary-10 text-white"
                    : "bg-white text-primary-10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="bg-neutral-135 border border-neutral-130 rounded-t-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            {activeData?.map((item, index) => (
              <div key={index}>
                {item?.title}
                <div
                  className={`${
                    index > 1
                      ? "grid grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1"
                  } gap-1`}
                >
                  {item?.details?.map((details, index2) => (
                    <div key={details} className="flex mt-4">
                      <div className="bg-neutral-140 border border-l-neutral-140 rounded-l-xl px-2 py-3 flex items-center justify-center">
                        <p>{index2 + 1}</p>
                      </div>
                      <div className=" rounded-r-xl p-2  flex items-center">
                        <p className="text-black text-sm">{details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-neutral-130 h-[100px] flex items-center justify-center rounded-b-xl">
            <Button
              variant="primary"
              title="Take Compliance Assessment"
              classNames="w-auto px-16 py-[10px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SecureCompliance;
