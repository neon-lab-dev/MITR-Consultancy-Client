"use client";
import {
  allSecurityData,
  SecuritySlug,
} from "@/data/securityPageDynamicData/securityPageDynamicData";
import { useParams } from "next/navigation";
import React from "react";
import SecurityDetailsHero from "./DynamicSecurityDetailsPage/DynamicSecurityHero/SecurityDetailsHero";
import WhySecurityMatters from "./DynamicSecurityDetailsPage/WhySecurityMatters/WhySecurityMatters";
import CommonThreats from "../SecurityServices/CommonThreats/CommonThreats";
import KeyFeatures from "../SecurityServices/KeyFeatures/KeyFeatures";
import ComplianceSection from "../SecurityServices/ComplianceSection/ComplianceSection";
import DeploymentOption from "../SecurityServices/DeploymentOption/DeploymentOption";
import WhyUs from "../SecurityServices/WhyUs/WhyUs";
import LetsTalk from "../Home/LetsTalk/LetsTalk";

const DynamicSecurityPage = () => {
  const params = useParams();
  const slugParam = params?.slug;

  const content = allSecurityData[slugParam as SecuritySlug];

//   if (!content) {
//     return <div>Page Not Found</div>;
//   }
  return (
    <div>
      <SecurityDetailsHero {...content.heroDetails} />
      <WhySecurityMatters {...content.whySecurityMatters} />
      <CommonThreats {...content.commonSecurityThreats} />
      <KeyFeatures {...content.keyFeatures} />
      <ComplianceSection {...content.complianceAndRegulatoryAlignment} />
      <DeploymentOption {...content.deploymentOptions} />
      <WhyUs {...content.whyChooseMITRAConsultancy} />
      <LetsTalk />
    </div>
  );
};

export default DynamicSecurityPage;
