import SecurityDetailsHero from "@/Components/DynamicSecurityDetailsPage/DynamicSecurityDetailsPage/DynamicSecurityHero/SecurityDetailsHero";
import WhySecurityMatters from "@/Components/DynamicSecurityDetailsPage/DynamicSecurityDetailsPage/WhySecurityMatters/WhySecurityMatters";
import CommonThreats from "@/Components/SecurityServices/CommonThreats/CommonThreats";
import ComplianceSection from "@/Components/SecurityServices/ComplianceSection/ComplianceSection";
import DeploymentOption from "@/Components/SecurityServices/DeploymentOption/DeploymentOption";
import KeyFeatures from "@/Components/SecurityServices/KeyFeatures/KeyFeatures";
import WhyUs from "@/Components/SecurityServices/WhyUs/WhyUs";

const EmailSecurity = () => {


  return (
   <div>
    <SecurityDetailsHero/>
    <WhySecurityMatters/>
    <CommonThreats/>
    <KeyFeatures/>
    <ComplianceSection/>
    <DeploymentOption/>
    <WhyUs/>
   </div>
  );
};

export default EmailSecurity;
