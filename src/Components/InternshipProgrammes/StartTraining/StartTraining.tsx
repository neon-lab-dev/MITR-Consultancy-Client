"use client"
import Container from "@/Components/Shared/Container/Container";
import TrainingCard from "./TrainingCard";
import { useGetAllProgrammesQuery } from "@/redux/Features/InterhshipProgrammes/internshipProgrammesApi";
import ProgrammeCardLoader from "@/Components/Loaders/ProgrammeCardLoader";

export type TInternshipProgramme = {
  poster: {
    public_id: string;
    url: string;
  };
  _id: string;
  courseName: string;
  title: string;
  description: string;
  rating: string;
  totalEnrolled: number;
  lessons: string;
  price: number;
  duration: string;
  phases: {
    title: string;
    phaseDuration: string;
    modules: {
      title: string;
      duration: string;
      topics: {
        title: string;
        contents: string[];
        _id: string;
      }[];
      _id: string;
    }[];
    _id: string;
  }[];
  skillsCovered: string[];
  createdAt: string;
  __v: number;
};


const StartTraining = () => {
  const { data } = useGetAllProgrammesQuery({});
  return (
    <Container>
      <div id="programmes" className="font-Inter py-[60px] md:py-20 xl:py-[98px] flex flex-col gap-7">
        <h1 className="section-heading">Start Your <span className="text-primary-10">Training</span> With <span className="text-primary-10">Our Programmes</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-10">
          {!data
            ? [...Array(4)].map((_, index) => <ProgrammeCardLoader key={index} />)
            : data.courses?.map((programme: TInternshipProgramme) => (
              <TrainingCard key={programme?._id} {...programme} />
            ))}
        </div>

      </div>
    </Container>
  );
};

export default StartTraining;