import Container from "@/Components/Shared/Container/Container";
import TrainingCard from "./TrainingCard";

const StartTraining = () => {
    return (
        <Container>
            <div className="font-Inter py-[60px] md:py-20 xl:py-[98px] flex flex-col gap-7">
                <h1 className="text-neutral-45 text-[36px] font-bold leading-[57px] text-center">Start Your <span className="text-primary-10">Training</span> With <span className="text-primary-10">Our Courses</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-10">
                    <TrainingCard />
                    <TrainingCard />
                    <TrainingCard />
                    <TrainingCard />
                </div>
            </div>
        </Container>
    );
};

export default StartTraining;