import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/Components/Home/Hero/Hero"));
const OurServices = dynamic(() => import("@/Components/Home/OurServices/OurServices"));
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
      <OurServices />
      <OurProjects />
      <AboutSecurityService />
      <Technologies />
      {/* <SessionAnnouncement /> */}
      <Testimonials />
      <FAQ />
      <LetsTalk />
    </div>
  );
}
