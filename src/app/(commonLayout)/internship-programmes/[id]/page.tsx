"use client";
import Certification from "@/Components/ProgrammeDetails/Certifications/Certification";
import Evaluation from "@/Components/ProgrammeDetails/Evaluation/Evaluation";
import InterestedTrainings from "@/Components/ProgrammeDetails/InterestedTrainings/InterestedTrainings";
import ProgrammeDetailsHero from "@/Components/ProgrammeDetails/ProgrammeDetailsHero/ProgrammeDetailsHero";
import ProgrammeDuration from "@/Components/ProgrammeDetails/ProgrammeDuration/ProgrammeDuration";
import ProgrammeStructure from "@/Components/ProgrammeDetails/ProgrammeStructure/ProgrammeStructure";
import SkillsYouWillGain from "@/Components/ProgrammeDetails/SkillsYouWillGain/SkillsYouWillGain";
import StudentsBenefits from "@/Components/ProgrammeDetails/StudentsBenefits/StudentsBenefits";
import WhoCanApply from "@/Components/ProgrammeDetails/WhoCanApply/WhoCanApply";
import Container from "@/Components/Shared/Container/Container";
import FAQ from "@/Components/Shared/FAQ/FAQ";
import { useGetSingleProgrammeByIdQuery } from "@/redux/Features/InterhshipProgrammes/internshipProgrammesApi";
import { useParams } from "next/navigation";

const ProgrammeDetailsPage = () => {
    const { id } = useParams();
    const { data } = useGetSingleProgrammeByIdQuery(id);
    return (
        <div>
            <ProgrammeDetailsHero {...data?.course} />
            <Container>
                <div className="w-full xl:w-[70%]">
                    <ProgrammeDuration />
                    <WhoCanApply />
                    <StudentsBenefits />
                    <ProgrammeStructure phases={data?.course?.phases} />
                    <SkillsYouWillGain skillsCovered={data?.course?.skillsCovered} />
                    <Evaluation />
                    <Certification />
                </div>
                <InterestedTrainings id={data?.course?._id} />
                <FAQ />
            </Container>
        </div>
    );
};

export default ProgrammeDetailsPage;