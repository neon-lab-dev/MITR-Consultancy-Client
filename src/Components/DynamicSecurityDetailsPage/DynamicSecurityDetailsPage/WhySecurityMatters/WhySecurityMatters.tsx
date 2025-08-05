import { IMAGES } from "@/assets";
import ServiceCard from "@/Components/SecurityServices/ServiceCard/ServiceCard";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

interface SecurityReasons {
  number: string;
  title: string;
  description: string;
}

const securityReasons: SecurityReasons[] = [
  {
    number: "1",
    title: "Cloud-Based Security",
    description: "(e.g., Microsoft 365, Google Workspace)",
  },
  {
    number: "2",
    title: " On-Premise / Hybrid Setups",
    description: "Complete Enterprise level solutioning",
  },
  {
    number: "3",
    title: "Integration with Existing Mail Servers",
    description: "End to end integration service",
  },
  {
    number: "4",
    title: "Integration with Existing Mail Servers",
    description: "End to end integration service",
  },
];
const WhySecurityMatters = () => {
  return (
    <div className="pb-[120px] bg-primary-95 font-Inter">
  <div className="w-full h-[75px] bg-neutral-170 blur-[50px]"></div>

  <Container>
    <div className="flex flex-col justify-center items-center text-center w-full gap-16 mt-10">
      <h2 className="text-neutral-145 text-[32px] md:text-[48px] 2xl:text-[64px] font-semibold text-center">
        Why Email Security Matters?
      </h2>
      <div className="relative flex flex-row justify-center gap-[60px] items-center w-full">
        <div className="w-[55%]">
          <div className="flex flex-col gap-6">
            {securityReasons.map((item) => (
              <ServiceCard
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
                gradient="bg-gradient-compliance-card"
                textColor="#213FAC2B"
              />
            ))}
          </div>
        </div>
        <div className="w-[45%] h-full">
        <Image
          src={IMAGES.emailSecurityImportance}
          alt="Common Threats"
          className="h-full"
        />
        </div>
      </div>
    </div>
  </Container>
</div>

  );
};

export default WhySecurityMatters;
