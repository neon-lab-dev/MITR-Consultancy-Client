import InternshipProgrammesHero from "@/Components/InternshipProgrammes/InternshipProgrammesHero/InternshipProgrammesHero";
import StartTraining from "@/Components/InternshipProgrammes/StartTraining/StartTraining";
import PurposeOfProgramme from "@/Components/InternshipProgrammes/PurposeOfProgramme/PurposeOfProgramme";
import KeyTechnologies from "@/Components/InternshipProgrammes/KeyTechnologies/KeyTechnologies";
import Tools from "@/Components/InternshipProgrammes/Tools/Tools";

const InternshipProgrammes = () => {
    return (
        <div>
            <InternshipProgrammesHero/>
            <StartTraining/>
            <PurposeOfProgramme/>
            <KeyTechnologies/>
            <Tools/>
        </div>
    );
};

export default InternshipProgrammes;