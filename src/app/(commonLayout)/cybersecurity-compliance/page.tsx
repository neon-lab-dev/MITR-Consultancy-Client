import ComplianceSolutions from "@/Components/CybersecurityCompliance/ComplianceSolutions/ComplianceSolutions";
import CybersecurityComplianceHero from "@/Components/CybersecurityCompliance/CybersecurityComplianceHero/CybersecurityComplianceHero";
import SecureCompliance from "@/Components/CybersecurityCompliance/SecureCompliance/SecureCompliance";
import TrustAndResults from "@/Components/CybersecurityCompliance/TrustAndResults/TrustAndResults";

const CybersecurityCompliance = () => {
    return (
        <div>
            <CybersecurityComplianceHero/>
            <ComplianceSolutions/>
            <SecureCompliance/>
            <TrustAndResults/>
        </div>
    );
};

export default CybersecurityCompliance;