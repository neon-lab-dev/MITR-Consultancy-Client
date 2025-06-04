import ComplianceSolutions from "@/Components/CybersecurityCompliance/ComplianceSolutions/ComplianceSolutions";
import SecurityHero from "@/Components/Security/SecurityHero/SecurityHero";
import SecurityService from "@/Components/Security/SecurityService/SecurityService";


const SecurityPage = () => {
    return (
        <div>
            <SecurityHero/>
            <ComplianceSolutions />
            <SecurityService/>
        </div>
    );
};

export default SecurityPage;