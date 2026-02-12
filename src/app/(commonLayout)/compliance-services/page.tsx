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
      <div className="w-full relative py-[150px]">
        {/* Background */}
      <Image
        src={IMAGES.counters}
        alt="Counters background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between z-10">
            <h1 className="font-satoshi text-white text-[32px] lg:text-[64px] font-extrabold max-w-full lg:max-w-[628px] z-10">
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
