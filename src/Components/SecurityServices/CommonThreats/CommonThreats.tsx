import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
interface Threat {
  number: string;
  title: string;
  description: string;
}

const threats: Threat[] = [
  {
    number: "1",
    title: "Phishing",
    description: "Deceptive emails tricking users into revealing sensitive data"
  },
  {
    number: "2",
    title: "Spear Phishing",
    description: "Targeted phishing attacks aimed at specific individuals (e.g., CFOs)"
  },
  {
    number: "3",
    title: "Business Email Compromise (BEC)",
    description: "Attackers impersonate executives or vendors to request fund transfers"
  },
  {
    number: "4",
    title: "Malware/Ransomware",
    description: "Malicious attachments or links that infect systems"
  },
  {
    number: "5",
    title: "Spoofing & Email Forgery",
    description: "Fake sender identities to gain trust or impersonate internal contacts"
  },
  {
    number: "6",
    title: "Data Leakage",
    description: "Accidental or malicious exposure of confidential information via email"
  }
];

const CommonThreats = () => {
  return (
    <div className="py-[120px] bg-gradient-threats font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-20">
          <h2 className="text-neutral-145 text-[32px] md:text-[40px] xl:text-[48px] font-semibold mb-4">
            Common Email Threats
          </h2>
          <div className="relative flex flex-row justify-center items-center w-full">
            {/* <Image
              src={IMAGES.emailCommonThreats}
              alt="Common Threats"
              className="absolute left-0 top-0 bottom-0 w-[45%]"
            /> */}
            <Image
              src={IMAGES.emailCommonThreats}
              alt="Common Threats"
              className="w-[45%]"
            />
            <div className="w-[55%]">
               <div className="flex flex-col gap-6">
      {threats.map((item) => (
        <ServiceCard
          key={item.number}
          number={item.number}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommonThreats;
