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
            "Implement data protection measures to ensure compliance with Data Protection and Privacy Regulations",
            "Secure personal data through encryption, access controls, and data minimization practices",
            "Achieve DPDP certification to demonstrate your commitment to protecting individuals' privacy rights",
            "Mitigate the risk of data breaches and penalties associated with DPDP non-compliance",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Protect personal data and privacy rights of individuals under DPDP regulations",
            "Enhance data security practices and minimize the risk of data breaches",
            "Build trust with customers and stakeholders by demonstrating DPDP compliance",
            "Stay ahead of regulatory changes and maintain a competitive edge in the market",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: ["India", "USA", "UK", "EU", "Global"],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: ["Finance", "SaaS", "Healthcare", "B2B", "All Industries"],
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
            "Ensures data is managed securely to protect the privacy of clients",
            "Covers security, availability, processing integrity, confidentiality, and privacy",
            "Required for SaaS and technology companies handling customer data",
            "Trusted assurance report for service providers",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Meet customer and partner security expectations",
            "Demonstrate operational and compliance maturity",
            "Mitigate risks associated with data processing and storage",
            "Gain competitive advantage in regulated industries",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: ["USA", "Canada", "India", "Global"],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: ["SaaS", "Cloud Providers", "Fintech", "Healthcare"],
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
            "U.S. regulation for safeguarding medical information",
            "Applies to healthcare providers, insurers, and their vendors",
            "Protects patient data from unauthorized disclosure",
            "Includes rules for breach notifications and security safeguards",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Ensure patient trust by securing health data",
            "Avoid legal liabilities and fines",
            "Streamline compliance efforts with expert support",
            "Meet insurance and vendor requirements",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: ["USA"],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: ["Healthcare", "HealthTech", "InsurTech"],
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
            "EU regulation for data protection and privacy",
            "Applies to all companies handling EU residents' data",
            "Focus on consent, transparency, and user control",
            "Strict breach notification and fine mechanisms",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Avoid penalties up to 4% of global turnover",
            "Build trust with EU-based users and clients",
            "Implement data governance best practices",
            "Simplify global privacy compliance frameworks",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: ["European Union", "UK", "Global"],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: ["All Industries", "Tech", "E-Commerce", "Marketing"],
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
            "India’s Digital Personal Data Protection Act 2023",
            "Applies to organizations processing digital personal data",
            "Emphasizes consent, purpose limitation, and data minimization",
            "Includes rules for Data Fiduciaries and Processors",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Stay compliant with the latest Indian data privacy law",
            "Avoid government fines and compliance risks",
            "Earn user trust by following best practices",
            "Prepare your tech and policy for enforcement",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: ["India"],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: ["Tech", "Startups", "Fintech", "E-Commerce", "Enterprises"],
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
            "Automate governance, risk, and compliance workflows",
            "Integrate multiple frameworks under one system",
            "Increase efficiency and reduce manual errors",
            "Enable audit readiness and reporting",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Centralize your GRC efforts",
            "Automate repetitive compliance tasks",
            "Gain real-time visibility into compliance status",
            "Prepare easily for audits",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: ["Global"],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: ["Enterprises", "Tech", "SaaS", "Finance"],
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
            "Security standard for handling credit card transactions",
            "Protects cardholder data during processing, storage, and transmission",
            "Required by all companies handling payment information",
            "Mandated by major card brands like Visa and Mastercard",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Prevent payment data breaches",
            "Avoid penalties from card networks",
            "Build customer trust in financial operations",
            "Ensure compliance with payment industry standards",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: ["USA", "Global"],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: ["Retail", "E-Commerce", "Banking", "Fintech"],
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
            "California Consumer Privacy Act",
            "Grants consumers rights over personal data collected by businesses",
            "Right to know, delete, and opt-out of data sales",
            "Applies to businesses with California consumers",
          ],
        },
        {
          title: (
            <h1 className="text-black font-semibold">Why do you need us?</h1>
          ),
          details: [
            "Avoid hefty fines from California regulators",
            "Meet customer expectations for transparency",
            "Ensure your site and policies are compliant",
            "Align with global privacy trends",
          ],
        },
        {
          title: <h1 className="text-black font-semibold">Geographies</h1>,
          details: ["California", "USA"],
        },
        {
          title: <h1 className="text-black font-semibold">Industries</h1>,
          details: ["Tech", "E-Commerce", "Marketing", "Retail"],
        },
      ],
    },
  ];

  const activeData = tabs.find((item) => item.key === activeTab)?.sections;

  console.log(activeData);

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

          <div className="flex items-center gap-6 mt-[60px] w-full overflow-x-auto text-nowrap">
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
                ISO 27001
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
