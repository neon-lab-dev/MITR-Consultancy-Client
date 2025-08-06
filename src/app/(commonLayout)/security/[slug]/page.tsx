"use client";
import SecurityDetailsHero from "@/Components/DynamicSecurityDetailsPage/DynamicSecurityDetailsPage/DynamicSecurityHero/SecurityDetailsHero";
import WhySecurityMatters from "@/Components/DynamicSecurityDetailsPage/DynamicSecurityDetailsPage/WhySecurityMatters/WhySecurityMatters";
import CommonThreats from "@/Components/SecurityServices/CommonThreats/CommonThreats";
import ComplianceSection from "@/Components/SecurityServices/ComplianceSection/ComplianceSection";
import DeploymentOption from "@/Components/SecurityServices/DeploymentOption/DeploymentOption";
import KeyFeatures from "@/Components/SecurityServices/KeyFeatures/KeyFeatures";
import WhyUs from "@/Components/SecurityServices/WhyUs/WhyUs";
import {
  allSecurityData,
  SecuritySlug,
} from "@/data/securityPageDynamicData/securityPageDynamicData";
import { useParams } from "next/navigation";

const EmailSecurity = () => {
  const params = useParams();
  const slugParam = params?.slug;

  const content = allSecurityData[slugParam as SecuritySlug];

  if (!content) {
    return <div>Page Not Found</div>;
  }

  return (
    <div>
      <SecurityDetailsHero {...content.heroDetails} />
      <WhySecurityMatters {...content.whySecurityMatters} />
      <CommonThreats {...content.commonSecurityThreats} />
      <KeyFeatures {...content.keyFeatures} />
      <ComplianceSection {...content.complianceAndRegulatoryAlignment} />  
      <DeploymentOption {...content.deploymentOptions} />
      <WhyUs {...content.whyChooseMITRAConsultancy} />
    </div>
  );
};

export default EmailSecurity;
