import Container from "@/Components/Shared/Container/Container";
import React from "react";
import KeyFeatureCard from "./KeyFeatureCard/KeyFeatureCard";
import { ICONS } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
const features = [
  {
    title: "Email Gateway Protection",
    points: [
      "Filters out spam, malware, and malicious links before reaching inboxes",
      "Advanced threat detection (sandboxing, heuristics)",
    ],
  },
  {
    title: "Phishing & Impersonation Protection",
    points: [
      "AI-powered detection of spoofed domains and fake senders",
      "Real-time alerts for suspicious activity",
    ],
  },
  {
    title: "Email Encryption",
    points: [
      "End-to-end encryption for sensitive content",
      "Supports compliance with SEBI, RBI, GDPR, HIPAA, etc.",
    ],
  },
  {
    title: "Data Loss Prevention (DLP)",
    points: [
      "Prevents sending confidential information outside the organization",
      "Custom policies (PAN, Aadhaar, financial data, etc.)",
    ],
  },
  {
    title: "User Awareness & Training",
    points: [
      "Regular phishing simulation campaigns",
      "Employee cybersecurity training modules",
    ],
  },
  {
    title: "Email Backup & Archiving",
    points: [
      "Secure and searchable cloud-based email storage",
      "Ensures business continuity and compliance",
    ],
  },
];
const KeyFeatures = () => {
  return (
    <div className="py-[120px] bg-gradient-key-features font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-20">
          <h2 className="text-neutral-145 text-[32px] md:text-[40px] xl:text-[48px] font-semibold mb-4">
            Key Features of Email Security Services
          </h2>
          <div className="h-full w-full p-6 rounded-xl border-2 border-neutral-130 bg-white flex flex-col items-center justify-center gap-12">
            <div className=" grid lg:grid-cols-4 gap-6 ">
              {features.map((feature, index) => (
                <KeyFeatureCard
                  key={index}
                  icon={ICONS.verified}
                  title={feature.title}
                  points={feature.points}
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

export default KeyFeatures;
