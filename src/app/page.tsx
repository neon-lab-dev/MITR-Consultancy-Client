import AboutUs from "@/Components/AboutUs/AboutUs";
import Achievements from "@/Components/Achievements/Achievements";
import FAQ from "@/Components/FAQ/FAQ";
import Hero from "@/Components/Home/Hero/Hero";
import LetsTalk from "@/Components/LetsTalk/LetsTalk";
import OurProjects from "@/Components/OurProjects/OurProjects";
import OurServices from "@/Components/OurServices/OurServices";
import Testimonials from "@/Components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Achievements/>
      <AboutUs/>
      <OurServices/>
      <OurProjects/>
      <Testimonials/>
      <FAQ/>
      <LetsTalk/>
    </div>
  );
}
