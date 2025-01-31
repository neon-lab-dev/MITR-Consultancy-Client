import TrainingCard from "@/Components/InternshipProgrammes/StartTraining/TrainingCard";

const InterestedTrainings = () => {
    return (
        <div className="mt-[64px] w-full">
            <h1 className="text-neutral-10 text-[30px] font-semibold leading-[48px] text-center capitalize">Training you might be Interested In</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-10 mt-10">
                    <TrainingCard />
                    <TrainingCard />
                    <TrainingCard />
                    <TrainingCard />
                </div>
        </div>
    );
};

export default InterestedTrainings;