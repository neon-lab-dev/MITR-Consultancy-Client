import Container from './../../Shared/Container/Container';
import TrainingProgramCard from "./TrainingProgramCard";

const TrainingDomains = () => {
  return (
    <div className="font-satoshi py-14">
      <Container>
        <h2 className="font-black text-white text-[32px] xl:text-[40px] 2xl:text-[64px] capitalize">
          Training <span className="text-primary-110">Domains</span>
        </h2>

        <p className="font-general-sans text-sm text-white mt-3 mb-6">
          Choose a learning path aligned with your professional goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <TrainingProgramCard />
        </div>
      </Container>
    </div>
  );
};

export default TrainingDomains;
