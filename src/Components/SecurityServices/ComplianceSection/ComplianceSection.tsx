import Container from "@/Components/Shared/Container/Container";
import React from "react";
import ComplienceCard from "./ComplienceCard/ComplienceCard";

const complianceItems = [
  { title: "SEBI Cybersecurity Framework" },
  { title: "RBI IT & Cybersecurity Guidelines" },
  { title: "ISO 27001" },
  { title: "GDPR / HIPAA / PCI-DSS (for international clients)" },
];

const ComplianceSection: React.FC = () => {
  return (
    <div className="py-[120px] bg-gradient-compliance font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-20">
          <h2 className="text-neutral-145 text-[32px] md:text-[40px] xl:text-[48px] font-semibold mb-4">
            Compliance & Regulatory Alignment
          </h2>

          <div className="flex flex-col gap-12">
            <p className="text-black text-2xl">
              Our email security solutions support compliance with,
            </p>
            <div className="flex flex-row gap-6 flex-wrap justify-center">
              {complianceItems.map((item, index) => (
                <ComplienceCard key={index} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComplianceSection;
