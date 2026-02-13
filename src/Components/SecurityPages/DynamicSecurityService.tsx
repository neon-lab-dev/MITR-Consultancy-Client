"use client";

import { useParams, notFound } from "next/navigation";
import React from "react";
import DynamicHero from "./DynamicHero/DynamicHero";
import { allSecurityData, SecuritySlug } from "@/data/securityServicePageDynamicData/securityServicePageDynamicData";
import DynamicAbout from "./DynamicAboutSection/DynamicAboutSection";
import CTA from "../Shared/CTA/CTA";
import DynamicReasonsGrid from "./DynamicReasonsGrid/DynamicReasonsGrid";
import DynamicCoreFeatures from "./DynamicCoreFeatures/DynamicCoreFeatures";
import DynamicProtectsGrid from "./DynamicProtectsGrid/DynamicProtectsGrid";

const DynamicSecurityServicePage = () => {
  const params = useParams<{ slug: string }>();

  const slug = params?.slug as SecuritySlug | undefined;

  const content = slug ? allSecurityData[slug] : undefined;

  if (!content) {
    notFound();
  }

  return (
    <div>
      <DynamicHero {...content.heroDetails} />
      <DynamicAbout {...content.aboutService} />
      <DynamicReasonsGrid {...content.reasonsSection}/>
      <DynamicCoreFeatures {...content.coreFeaturesSection}/>
      <DynamicProtectsGrid {...content.protectionSection}/>
      <CTA />
    </div>
  );
};

export default DynamicSecurityServicePage;
