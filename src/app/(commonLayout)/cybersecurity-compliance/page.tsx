import ComplianceAssessment from "@/Components/CybersecurityCompliance/ComplianceAssessment/ComplianceAssessment";
import ComplianceSolutions from "@/Components/CybersecurityCompliance/ComplianceSolutions/ComplianceSolutions";
import CybersecurityComplianceHero from "@/Components/CybersecurityCompliance/CybersecurityComplianceHero/CybersecurityComplianceHero";
import SecureCompliance from "@/Components/CybersecurityCompliance/SecureCompliance/SecureCompliance";
import TrustAndResults from "@/Components/CybersecurityCompliance/TrustAndResults/TrustAndResults";

const CybersecurityCompliance = () => {
  return (
    <div>
      <CybersecurityComplianceHero />
      <ComplianceSolutions />
      <SecureCompliance />
      <TrustAndResults />
      <ComplianceAssessment />
    </div>
  );
};

export default CybersecurityCompliance;
