import AboutUs from "@/Components/AboutUs/AboutUs";
import Achievements from "@/Components/Achievements/Achievements";
import Hero from "@/Components/Home/Hero/Hero";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Achievements/>
      <AboutUs/>
    </div>
  );
}
