import Container from "@/Components/Shared/Container/Container";
import React from "react";
import KeyFeatureCard from "../KeyFeatures/KeyFeatureCard/KeyFeatureCard";
import { ICONS } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
const features = [
  {
    title: "Industry expertise in BFSI & regulatory compliance",
  },
  {
    title: "Phishing & Tailored solutions for businesses of all sizes Protection",
  },
  {
    title: "Support across Bangalore, Mumbai, Delhi NCR, patna, and pan-India",
  },
  {
    title: "Work with leading platforms such as Microsoft, Google, Cisco, Fortinet, Mimecast, Proofpoint, more",
  },
  {
    title: "Certified cybersecurity professionals",
  },
];

const WhyUs = () => {
  return (
    <div className="py-[100px] font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-20">
          <h2 className="text-neutral-145 text-[32px] md:text-[40px] xl:text-[48px] font-semibold mb-4">
            Why Choose Mitra Consultancy?
          </h2>

          <div className="h-full w-full p-6 rounded-xl border-2 border-neutral-130 bg-primary-90 flex flex-col items-center justify-center gap-12">
            <div className="w-full grid lg:grid-cols-3 gap-6 ">
              {features.map((feature, index) => (
                <KeyFeatureCard
                  key={index}
                  icon={ICONS.tickCircleGreen}
                  title={feature.title}
                />
              ))}{" "}
            </div>{" "}
            {/* Button Section */}
            <Button
              variant="primary"
              title="Get Your Email Secure Today"
              classNames="w-[560px] h-[44px] md:h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
