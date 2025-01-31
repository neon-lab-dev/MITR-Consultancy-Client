import TrainingCard from "@/Components/InternshipProgrammes/StartTraining/TrainingCard";

const EnrolledCourse = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-9">
                    <TrainingCard isDescriptionVisible={true} isPriceVisible={false} imageHeight="h-[268px]" />
                </div>
        </div>
    );
};

export default EnrolledCourse;