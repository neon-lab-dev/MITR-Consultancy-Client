import { IMAGES } from "@/assets";
import ComplianceAssessment from "@/Components/CybersecurityCompliance/ComplianceAssessment/ComplianceAssessment";
import ComplianceSolutions from "@/Components/CybersecurityCompliance/ComplianceSolutions/ComplianceSolutions";
import CybersecurityComplianceHero from "@/Components/CybersecurityCompliance/CybersecurityComplianceHero/CybersecurityComplianceHero";
import CyberSecurityTestimonials from "@/Components/CybersecurityCompliance/CyberSecurityTestimonials/CyberSecurityTestimonials";
import SecureCompliance from "@/Components/CybersecurityCompliance/SecureCompliance/SecureCompliance";
import TrustAndResults from "@/Components/CybersecurityCompliance/TrustAndResults/TrustAndResults";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const CybersecurityCompliance = () => {
  const images = [
    {
      image: IMAGES.iso27001,
      size: "w-16 md:w-[120px] lg:w-48 xl:w-52",
    },
    {
      image: IMAGES.soc2,
      size: "w-16 md:w-[120px] lg:w-48 xl:w-64",
    },
    {
      image: IMAGES.hippa,
      size: "w-16 md:w-[120px] lg:w-48 xl:w-72",
    },
    {
      image: IMAGES.gdpr,
      size: "w-16 md:w-[120px] lg:w-48 xl:w-64",
    },
  ];
  return (
    <div>
      <CybersecurityComplianceHero />
      {/* Images */}
      <div className="w-full  mt-10 border-b pb-8">
        <Container>
          <div className="flex justify-between items-center gap-4 z-10">
            {images?.map((image, index) => (
              <Image
                key={index}
                src={image.image}
                alt="MITRA Consultancy"
                className={`${image.size}`}
              />
            ))}
          </div>
        </Container>
      </div>
      <ComplianceSolutions />
      <SecureCompliance />
      <TrustAndResults />
      <ComplianceAssessment />
      <CyberSecurityTestimonials />
    </div>
  );
};

export default CybersecurityCompliance;
