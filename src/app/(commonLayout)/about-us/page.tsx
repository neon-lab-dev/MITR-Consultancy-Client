import AboutUsHero from './../../../Components/AboutUs/AboutUsHero/AboutUsHero';
import FAQ from '@/Components/Shared/FAQ/FAQ';
import AllAboutMitra from '@/Components/AboutUs/AllAboutMitra/AllAboutMitra';
import Services from '@/Components/AboutUs/Services/Services';

const AboutUsPage = () => {
    return (
        <div>
            <AboutUsHero/>
            <AllAboutMitra/>
            <Services/>
            <FAQ/>
        </div>
    );
};

export default AboutUsPage;