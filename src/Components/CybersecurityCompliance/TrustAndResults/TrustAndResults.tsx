import Container from "@/Components/Shared/Container/Container";
import React from "react";
import TrustAndResultCard from "./TrustAndResultCard";
import Image from "next/image";
import { IMAGES } from "@/assets";

const TrustAndResults = () => {
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
    // {
    //   title: "Efficiency Through Automation",
    //   description:
    //     "Leveraging automated systems and optimized workflows, we streamline your compliance efforts, reducing manual tasks and allowing you to concentrate on core business activities.",
    // },
    // {
    //   title: "Safeguard Data and Brand Integrity",
    //   description:
    //     "Our approaches focus on protecting your confidential data and maintaining your company’s reputation, helping you prevent breaches and strengthen customer confidence.",
    // },
    // {
    //   title: "Proactive Regulatory Compliance",
    //   description:
    //     "Regulatory landscapes evolve constantly, which can be challenging to track. MITRA Consultancy keeps you compliant with current standards and prepares you for future changes.",
    // },
    // {
    //   title: "Cost-Effective and Clear Pricing",
    //   description:
    //     "We believe compliance should be affordable and transparent. Our pricing plans are adaptable to your business size, ensuring excellent value with no unexpected fees.",
    // },
  ];

  return (
    <div className="font-Satoshi bg-[#000203] relative ">
      <Container>
        <h1
          className={`font-bold text-neutral-130 text-lg md:text-2xl xl:text-[40px] 2xl:text-[52px] leading-6 md:leading-[60px] max-w-[1125px] capitalize`}
        >
          <span className="text-primary-10">MITRA Consultancy</span> Compliance
          Solutions Built for Trust & Results
        </h1>
      </Container>

      <div className="">
        {[1, 2, 3]?.map((item, index) => (
          <div key={index} className="h-[1024px] w-full relative">
            <Image
              src={IMAGES.linnerColorBg}
              alt=""
              className="w-full h-full absolute z-0"
            />
            <Container>
              <div className=" relative">
                <section className="flex justify-between gap-6">
                  {featuresData.map((item, index) => {
                    const stagger = [
                       "translate-y-0",
                      "translate-y-32", // 2nd card → middle
                      "translate-y-0",
                      "lg:translate-y-60", // 1st card → LOWEST
                      "lg:translate-y-32", // 2nd card → middle
                      "lg:translate-y-0", // 3rd card → TOPPEST
                    ];

                    return (
                      <TrustAndResultCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        classNames={stagger[index]}
                      />
                    );
                  })}
                </section>
              </div>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustAndResults;
