import Certification from "@/Components/ProgrammeDetails/Certifications/Certification";
import Evaluation from "@/Components/ProgrammeDetails/Evaluation/Evaluation";
import ProgrammeDetailsHero from "@/Components/ProgrammeDetails/ProgrammeDetailsHero/ProgrammeDetailsHero";
import ProgrammeDuration from "@/Components/ProgrammeDetails/ProgrammeDuration/ProgrammeDuration";
import ProgrammeStructure from "@/Components/ProgrammeDetails/ProgrammeStructure/ProgrammeStructure";
import SkillsYouWillGain from "@/Components/ProgrammeDetails/SkillsYouWillGain/SkillsYouWillGain";
import StudentsBenefits from "@/Components/ProgrammeDetails/StudentsBenefits/StudentsBenefits";
import WhoCanApply from "@/Components/ProgrammeDetails/WhoCanApply/WhoCanApply";
import Container from "@/Components/Shared/Container/Container";

const ProgrammeDetailsPage = () => {
    return (
        <div>
            <ProgrammeDetailsHero/>
            <Container>
            <div className="w-full xl:w-[70%]">
                <ProgrammeDuration/>
                <WhoCanApply/>
                <StudentsBenefits/>
                <ProgrammeStructure />
                <SkillsYouWillGain/>
                <Evaluation/>
                <Certification/>
            </div>
            </Container>
        </div>
    );
};

export default ProgrammeDetailsPage;