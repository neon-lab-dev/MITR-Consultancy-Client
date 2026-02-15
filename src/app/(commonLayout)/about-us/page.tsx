import AboutUsHero from './../../../Components/AboutUs/AboutUsHero/AboutUsHero';
// import FAQ from '@/Components/Shared/FAQ/FAQ';
import AllAboutMitra from '@/Components/AboutUs/AllAboutMitra/AllAboutMitra';
import Services from '@/Components/AboutUs/Services/Services';
import CTA from '@/Components/Shared/CTA/CTA';

const AboutUsPage = () => {
    return (
        <div>
            <AboutUsHero/>
            <AllAboutMitra/>
            <Services/>
            {/* <FAQ/> */}
            <CTA/>
        </div>
    );
};

export default AboutUsPage;