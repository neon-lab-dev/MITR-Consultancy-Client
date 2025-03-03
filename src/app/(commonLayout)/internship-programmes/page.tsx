import InternshipProgrammesHero from "@/Components/InternshipProgrammes/InternshipProgrammesHero/InternshipProgrammesHero";
import StartTraining from "@/Components/InternshipProgrammes/StartTraining/StartTraining";
import PurposeOfProgramme from "@/Components/InternshipProgrammes/PurposeOfProgramme/PurposeOfProgramme";
import KeyTechnologies from "@/Components/InternshipProgrammes/KeyTechnologies/KeyTechnologies";
import Tools from "@/Components/InternshipProgrammes/Tools/Tools";
import LearningOutcomes from "@/Components/InternshipProgrammes/LearningOutcomes/LearningOutcomes";
import BenefitsForStudent from "@/Components/InternshipProgrammes/BenefitsForStudent/BenefitsForStudent";
import FAQ from "@/Components/Shared/FAQ/FAQ";
import ProgramHighlights from "@/Components/InternshipProgrammes/ProgramHighlights/ProgramHighlights";
// import SessionAnnouncement from "@/Components/Shared/SessionAnnouncement/SessionAnnouncement";

const InternshipProgrammes = () => {
    return (
        <div>
            <InternshipProgrammesHero/>
            {/* <SessionAnnouncement/> */}
            <StartTraining/>
            <PurposeOfProgramme/>
            <KeyTechnologies/>
            <Tools/>
            <ProgramHighlights/>
            <LearningOutcomes/>
            <BenefitsForStudent/>
            <FAQ/>
        </div>
    );
};

export default InternshipProgrammes;