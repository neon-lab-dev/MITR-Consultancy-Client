import ComplianceAssessment from "@/Components/CybersecurityCompliance/ComplianceAssessment/ComplianceAssessment";
import ComplianceSolutions from "@/Components/CybersecurityCompliance/ComplianceSolutions/ComplianceSolutions";
import MitrasEdge from "@/Components/Security/MitrasEdge/MitrasEdge";
import SecurityHero from "@/Components/Security/SecurityHero/SecurityHero";
import SecurityService from "@/Components/Security/SecurityService/SecurityService";


const SecurityPage = () => {
    return (
        <div>
            <SecurityHero/>
            <ComplianceSolutions />
            <SecurityService/>
            <ComplianceAssessment />
            <MitrasEdge/>
        </div>
    );
};

export default SecurityPage;