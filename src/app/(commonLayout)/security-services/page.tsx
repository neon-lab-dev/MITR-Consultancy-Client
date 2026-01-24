import ComplianceAssessment from "@/Components/CybersecurityCompliance/ComplianceAssessment/ComplianceAssessment";
import ComplianceSolutions from "@/Components/CybersecurityCompliance/ComplianceSolutions/ComplianceSolutions";
import MitrasEdge from "@/Components/Security/MitrasEdge/MitrasEdge";
import SecurityFaq from "@/Components/Security/SecurityFaq/SecurityFaq";
import SecurityHero from "@/Components/Security/SecurityHero/SecurityHero";
import ManagedSecurityServices from "@/Components/SecurityServices/ManagedSecurityServices/ManagedSecurityServices";
import CTA from "@/Components/Shared/CTA/CTA";

const SecurityPage = () => {
  return (
    <div>
      <SecurityHero />
      <ComplianceSolutions />
      <ManagedSecurityServices />
      <ComplianceAssessment />
      <MitrasEdge />
      <SecurityFaq />
      <CTA />
    </div>
  );
};

export default SecurityPage;
