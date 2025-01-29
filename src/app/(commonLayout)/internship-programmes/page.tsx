import InternshipProgrammesHero from "@/Components/InternshipProgrammes/InternshipProgrammesHero/InternshipProgrammesHero";
import StartTraining from "@/Components/InternshipProgrammes/StartTraining/StartTraining";
import PurposeOfProgramme from "@/Components/InternshipProgrammes/PurposeOfProgramme/PurposeOfProgramme";

const InternshipProgrammes = () => {
    return (
        <div>
            <InternshipProgrammesHero/>
            <StartTraining/>
            <PurposeOfProgramme/>
        </div>
    );
};

export default InternshipProgrammes;