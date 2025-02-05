import { TInternshipProgramme } from "@/Components/InternshipProgrammes/StartTraining/StartTraining";
import TrainingCard from "@/Components/InternshipProgrammes/StartTraining/TrainingCard";
import { useGetAllProgrammesQuery } from "@/redux/Features/InterhshipProgrammes/internshipProgrammesApi";

const InterestedTrainings = ({ id }: { id: string }) => {
    const { data } = useGetAllProgrammesQuery({});
    const interestedProgrammes = data?.courses?.filter((programme:TInternshipProgramme) => programme._id !== id)
    console.log(interestedProgrammes);
    return (
        <div className="mt-[64px] w-full">
            <h1 className="text-neutral-10 text-[30px] font-semibold leading-[48px] text-center capitalize">Training you might be Interested In</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-10 mt-10">
                {
                    interestedProgrammes?.map((programme: TInternshipProgramme) =>
                        <TrainingCard key={programme?._id} {...programme} />
                    )
                }
            </div>
        </div>
    );
};

export default InterestedTrainings;