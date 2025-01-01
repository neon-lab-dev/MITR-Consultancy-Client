import AboutUs from "@/Components/AboutUs/AboutUs";
import Achievements from "@/Components/Achievements/Achievements";
import Hero from "@/Components/Home/Hero/Hero";
import OurProjects from "@/Components/OurProjects/OurProjects";
import OurServices from "@/Components/OurServices/OurServices";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Achievements/>
      <AboutUs/>
      <OurServices/>
      <OurProjects/>
    </div>
  );
}
