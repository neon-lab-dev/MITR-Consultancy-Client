import AboutUs from '@/Components/Home/AboutUs/AboutUs';
import AboutUsHero from './../../../Components/AboutUs/AboutUsHero/AboutUsHero';
import Technologies from '@/Components/Home/Technologies/Technologies';
import Testimonials from '@/Components/Home/Testimonials/Testimonials';
import FAQ from '@/Components/Shared/FAQ/FAQ';

const AboutUsPage = () => {
    return (
        <div>
            <AboutUsHero/>
            <AboutUs/>
            <Technologies/>
            <Testimonials/>
            <FAQ/>
        </div>
    );
};

export default AboutUsPage;