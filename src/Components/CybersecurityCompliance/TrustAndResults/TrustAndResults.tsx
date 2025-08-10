import Container from "@/Components/Shared/Container/Container";
import React from "react";
import TrustAndResultCard from "./TrustAndResultCard";

const TrustAndResults = () => {
  // featuresData.ts
  const featuresData = [
  {
    title: "Comprehensive Compliance Assistance",
    description:
      "MITRA Consultancy delivers an extensive suite of compliance services covering GDPR, HIPAA, PCI DSS, ISO 27001, and more—so you can manage everything in one place without dealing with multiple providers.",
  },
  {
    title: "Customized and Simple Solutions",
    description:
      "Recognizing the uniqueness of every company, our offerings are tailored according to your business scale and sector. From startups to large corporations, we design compliance strategies that align perfectly with your needs.",
  },
  {
    title: "Experienced Compliance Professionals",
    description:
      "Our experts bring thorough knowledge of compliance frameworks combined with practical experience. They go beyond mere compliance checklists to ensure your organization gains real value and understanding.",
  },
  {
    title: "Efficiency Through Automation",
    description:
      "Leveraging automated systems and optimized workflows, we streamline your compliance efforts, reducing manual tasks and allowing you to concentrate on core business activities.",
  },
  {
    title: "Safeguard Data and Brand Integrity",
    description:
      "Our approaches focus on protecting your confidential data and maintaining your company’s reputation, helping you prevent breaches and strengthen customer confidence.",
  },
  {
    title: "Proactive Regulatory Compliance",
    description:
      "Regulatory landscapes evolve constantly, which can be challenging to track. MITRA Consultancy keeps you compliant with current standards and prepares you for future changes.",
  },
  {
    title: "Cost-Effective and Clear Pricing",
    description:
      "We believe compliance should be affordable and transparent. Our pricing plans are adaptable to your business size, ensuring excellent value with no unexpected fees.",
  },
];


  return (
    <div className="my-20">
      <Container>
        <div className="py-[100px">
          <h1
            className={`font-bold text-neutral-10 text-lg md:text-2xl xl:text-[40px] 2xl:text-[48px] leading-6 md:leading-[49.68px] capitalize text-center`}
          >
            <span className="text-secondary-20">MITRA Consultancy</span>{" "}
            Compliance: Built for Trust & Results
          </h1>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[60px]">
            {featuresData.map((item, index) => (
              <TrustAndResultCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </section>
        </div>
      </Container>
    </div>
  );
};

export default TrustAndResults;
