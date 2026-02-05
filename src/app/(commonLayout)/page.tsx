import ComplianceAssessment from "@/Components/CybersecurityCompliance/ComplianceAssessment/ComplianceAssessment";
import WhatYouGain from "@/Components/Home/WhatYouGain/WhatYouGain";
import WhoWeAre from "@/Components/Home/WhoWeAre/WhoWeAre";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/Components/Home/Hero/Hero"));
const OurServices = dynamic(
  () => import("@/Components/Home/OurServices/OurServices"),
);
const OurProjects = dynamic(
  () => import("@/Components/Home/OurProjects/OurProjects"),
);
// const SessionAnnouncement = dynamic(() => import("@/Components/Shared/SessionAnnouncement/SessionAnnouncement"));
const Testimonials = dynamic(
  () => import("@/Components/Home/Testimonials/Testimonials"),
);
const FAQ = dynamic(() => import("@/Components/Shared/FAQ/FAQ"));
const LetsTalk = dynamic(() => import("@/Components/Home/LetsTalk/LetsTalk"));
const WhyTrustUs = dynamic(() => import("@/Components/Home/WhyTrustUs/WhyTrustUs"));
const Counters = dynamic(() => import("@/Components/Shared/Counters/Counters"));

export default function Home() {
  return (
    <div className="bg-neutral-185">
      <Hero />
      <OurServices />
      <OurProjects />
      <WhyTrustUs/>
      <Counters/>
      <WhatYouGain/>
      <Testimonials/>
      <WhoWeAre/>
      <ComplianceAssessment />
      {/* <SessionAnnouncement /> */}
      <Testimonials />
      <FAQ />
      <LetsTalk />
    </div>
  );
}
