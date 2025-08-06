import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/Components/Home/Hero/Hero"));
const Counters = dynamic(() => import("@/Components/Home/Counters/Counters"));
const AboutUs = dynamic(() => import("@/Components/Home/AboutUs/AboutUs"));
const OurServices = dynamic(() => import("@/Components/Home/OurServices/OurServices"));
const Achievements = dynamic(() => import("@/Components/Home/Achievements/Achievements"));
const AboutSecurityService = dynamic(() => import("@/Components/Home/AboutSecurityService/AboutSecurityService"));
const OurProjects = dynamic(() => import("@/Components/Home/OurProjects/OurProjects"));
const Technologies = dynamic(() => import("@/Components/Home/Technologies/Technologies"));
// const SessionAnnouncement = dynamic(() => import("@/Components/Shared/SessionAnnouncement/SessionAnnouncement"));
const Testimonials = dynamic(() => import("@/Components/Home/Testimonials/Testimonials"));
const FAQ = dynamic(() => import("@/Components/Shared/FAQ/FAQ"));
const LetsTalk = dynamic(() => import("@/Components/Home/LetsTalk/LetsTalk"));

export default function Home() {
  return (
    <div>
      <Hero />
      <Counters />
      <AboutUs />
      <OurServices />
      <Achievements />
      <AboutSecurityService />
      <OurProjects />
      <Technologies />
      {/* <SessionAnnouncement /> */}
      <Testimonials />
      <FAQ />
      <LetsTalk />
    </div>
  );
}
