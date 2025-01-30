import ProgrammeDetailsHero from "@/Components/ProgrammeDetails/ProgrammeDetailsHero/ProgrammeDetailsHero";
import ProgrammeDuration from "@/Components/ProgrammeDetails/ProgrammeDuration/ProgrammeDuration";
import ProgrammeStructure from "@/Components/ProgrammeDetails/ProgrammeStructure/ProgrammeStructure";
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
            </div>
            </Container>
        </div>
    );
};

export default ProgrammeDetailsPage;