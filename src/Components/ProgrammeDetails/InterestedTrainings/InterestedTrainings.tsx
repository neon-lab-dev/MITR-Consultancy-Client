import { TInternshipProgramme } from "@/Components/InternshipProgrammes/StartTraining/StartTraining";
import TrainingCard from "@/Components/InternshipProgrammes/StartTraining/TrainingCard";
import ProgrammeCardLoader from "@/Components/Loaders/ProgrammeCardLoader";
import { useGetAllProgrammesQuery } from "@/redux/Features/InterhshipProgrammes/internshipProgrammesApi";

const InterestedTrainings = ({ id }: { id: string }) => {
    const { data, isLoading } = useGetAllProgrammesQuery({});
    const interestedProgrammes = data?.courses?.filter((programme: TInternshipProgramme) => programme._id !== id);
    return (
        <div className="mt-[64px] w-full">
            <h1 className="details-section-heading text-center capitalize">Training you might be Interested In</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-10 mt-10">
                {isLoading
                    ? [...Array(4)].map((_, index) => <ProgrammeCardLoader key={index} />)
                    : interestedProgrammes?.map((programme: TInternshipProgramme) => (
                        <TrainingCard key={programme?._id} {...programme} />
                    ))}
            </div>

        </div>
    );
};

export default InterestedTrainings;