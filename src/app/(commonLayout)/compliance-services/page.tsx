import { IMAGES } from "@/assets";
import ComplianceAssessment from "@/Components/CybersecurityCompliance/ComplianceAssessment/ComplianceAssessment";
import CybersecurityComplianceHero from "@/Components/CybersecurityCompliance/CybersecurityComplianceHero/CybersecurityComplianceHero";
import SecureCompliance from "@/Components/CybersecurityCompliance/SecureCompliance/SecureCompliance";
import TrustAndResults from "@/Components/CybersecurityCompliance/TrustAndResults/TrustAndResults";
import Container from "@/Components/Shared/Container/Container";
import Counters from "@/Components/Shared/Counters/Counters";
import CTA from "@/Components/Shared/CTA/CTA";
import Image from "next/image";

const CybersecurityCompliance = () => {
  const images = [
    {
      image: IMAGES.iso27001,
      size: "",
    },
    {
      image: IMAGES.soc2,
      size: "",
    },
    {
      image: IMAGES.gdpr,
      size: "",
    },
  ];
  return (
    <div>
      <CybersecurityComplianceHero />
      {/* Images */}
      <div className="w-full bg-gradient-compliance-logo py-[150px]">
        <Container>
          <div className="flex items-center justify-between">
            <h1 className="font-Inter text-white leading-8 md:leading-[48px] text-[24px] md:text-[38px] font-extrabold max-w-full md:max-w-[360px]">
              Trusted by compliance-driven organizations
            </h1>
            <div className="flex justify-between items-center gap-12 z-10">
              {images?.map((image, index) => (
                <Image
                  key={index}
                  src={image.image}
                  alt="MITRA Consultancy"
                  className={`${image.size}`}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
      <SecureCompliance />
      <TrustAndResults />
       <Counters/>
      <ComplianceAssessment />
      {/* <CyberSecurityTestimonials /> */}
      <CTA />
    </div>
  );
};

export default CybersecurityCompliance;
