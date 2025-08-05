import AboutUs from "@/Components/Home/AboutUs/AboutUs";
import Achievements from "@/Components/Home/Achievements/Achievements";
import FAQ from "@/Components/Shared/FAQ/FAQ";
import Hero from "@/Components/Home/Hero/Hero";
import LetsTalk from "@/Components/Home/LetsTalk/LetsTalk";
import OurServices from "@/Components/Home/OurServices/OurServices";
import Technologies from "@/Components/Home/Technologies/Technologies";
import Testimonials from "@/Components/Home/Testimonials/Testimonials";
import OurProjects from './../../Components/Home/OurProjects/OurProjects';
import AboutSecurityService from "@/Components/Home/AboutSecurityService/AboutSecurityService";
import Counters from "@/Components/Home/Counters/Counters";
import ComplianceSection from "@/Components/SecurityServices/ComplianceSection/ComplianceSection";
// import SessionAnnouncement from "@/Components/Shared/SessionAnnouncement/SessionAnnouncement";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Counters/>
      <AboutUs/>
      <OurServices/>
      <Achievements/>
      <AboutSecurityService/>
      <OurProjects/>
      <Technologies/>
      {/* <SessionAnnouncement/> */}
      <Testimonials/>
      <FAQ/>
      <LetsTalk/>
     <ComplianceSection/>
    </div>
  );
}
