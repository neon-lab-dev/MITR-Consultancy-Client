import { IMAGES } from '@/assets';
import Container from "../../shared/Container/Container";
import Image from 'next/image';

const TrainingCategories = () => {
  const trainingCategoriesDetails = [
    {
      title: "Career",
      styledTitle: "Training Programs",
      description:
        "Hands-on, role-focused training programs designed to help students and professionals build strong, practical skills in software development and UI/UX design through guided learning and real-world exercises.",
      pointers: [
        "Backend Development",
        "Frontend Development",
        "Full Stack Development",
        "UI/UX Design",
      ],
      image: IMAGES.careerTrainingProgram,
    },
    {
      title: "Corporate",
      styledTitle: "Training Programs",
      description:
        "Practical, organization-focused training programs designed to strengthen security awareness, improve development practices, and support compliance readiness.",
      pointers: [
        "Cybersecurity Awareness Training",
        "Secure Coding Training",
        "GRC Training",
        "IT Audit & Controls Testing",
      ],
      image: IMAGES.corporateTrainingProgram,
    },
  ];
  return (
    <div className="font-satoshi py-14 bg-neutral-190">
      <Container>
        <h2 className="font-black text-neutral-185 text-lg md:text-2xl xl:text-[40px] 2xl:text-[64px] capitalize">
          Training <span className="text-primary-110">Categories</span>
        </h2>

        <p className="font-general-sans text-sm text-neutral-185 mt-3 mb-6">
          MITRA offers training programs tailored for both organizations and
          individual learners, designed around real-world requirements and
          industry relevance.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-12">
          {trainingCategoriesDetails?.map((detail) => (
            <div key={detail?.title} className="rounded-xl bg-neutral-130">
              <Image src={detail?.image} alt="" className="rounded-t-xl" />
              <div className="p-6 flex flex-col gap-6">
                <div>
                  <h3 className="font-black text-neutral-185 text-[22px] capitalize">
                    <span className="text-primary-110">{detail?.title}</span>{" "}
                    {detail?.styledTitle}
                  </h3>
                  <p className="font-general-sans text-sm text-neutral-185 mt-3">
                    {detail?.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-black text-neutral-185 text-[22px] capitalize">
                    Focus <span className="text-primary-110">Areas</span>
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap mt-3">
                    {detail?.pointers?.map((item) => (
                      <div
                        key={item}
                        className="px-3 py-2 rounded-[48px] bg-neutral-180 border border-primary-115 font-general-sans text-sm text-primary-10"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TrainingCategories;
