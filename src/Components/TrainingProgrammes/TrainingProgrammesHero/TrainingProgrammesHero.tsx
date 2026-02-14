import Button from "../../Reusable/Button/Button";
import Image from 'next/image';
import { ICONS } from '@/assets';
import Container from './../../Shared/Container/Container';

const TrainingProgrammesHero = () => {
  const stats = [
    {
      title: "600+",
      description: "Career-Focused Enrollments",
      icon: ICONS.book,
    },
    {
      title: "4.9/5",
      description: "Average Ratings",
      icon: ICONS.starRating,
    },
    {
      title: "7",
      description: "Industry-Aligned Courses",
      icon: ICONS.industryAlignedCourses,
    },
  ];
  return (
    <div className="bg-neutral-185 font-satoshi pt-40 pb-12">
      <Container>
        <h2 className="font-black text-white text-[32px] xl:text-[40px] 2xl:text-[64px] capitalize">
          Professional Training Programs for{" "}
          <span className="text-primary-110">Students and Organizations.</span>
        </h2>

        <p className="font-general-sans text-sm text-white mt-3 mb-6">
          MITRA offers structured training programs across development, UI/UX,
          and cybersecurity — designed for real-world application and industry
          relevance.
        </p>

        <Button variant="primary" title="Explore Programs" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-21">
          {stats?.map((stat) => (
            <div
              key={stat?.title}
              className="bg-neutral-180 p-6 relative rounded-xl overflow-hidden"
            >
              <div className="z-10 relative">
                <h3 className="text-[64px] text-primary-10 font-black">
                  {stat?.title}
                </h3>
                <p className="font-general-sans text-lg text-neutral-185 mt-3 font-medium">{stat?.description}</p>
              </div>

              <Image src={stat?.icon} alt="" className="absolute right-0 top-0" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TrainingProgrammesHero;
