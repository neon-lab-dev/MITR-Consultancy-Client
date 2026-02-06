import { IMAGES } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";

const WhatYouGain = () => {
  const gainDetails = [
    {
      description:
        "Get clear insights and actionable information without unnecessary delays.",
      title: "Faster decision-making",
    },
    {
      description:
        "Minimize disruptions and exposure through proactive security and compliance measures.",
      title: "Reduced operational risk",
    },
    {
      description:
        "Defined processes, ownership, and milestones ensure predictable delivery.",
      title: "Clear timelines & accountability",
    },
    {
      description:
        "Simplify operations by working with a single, trusted partner instead of multiple vendors.",
      title: "One reliable partner",
    },
  ];

  return (
    <div className="font-Satoshi py-14">
      <Container>
        {/* Heading */}
        <div>
          <p className={`font-black text-primary-20`}>WHAT YOU GAIN</p>
          <h2
            className={`font-extrabold text-white text-[30px] leading-normal capitalize my-6 `}
          >
            Working With us means
            <span className="text-primary-10">
              Clarity, Control, and Confidence.
            </span>
          </h2>

          <Button
            title="Book a Call"
            variant="primary"
            iconPosition="right"
            icon={<CgArrowTopRight size={24} />}
          />
        </div>
        <div className="flex flex-col xl:flex-row justify-between items-center  gap-6 mt-12">
          <div className="w-full xl:w-[50%]">
            {gainDetails?.map((detail, index) => (
              <div key={index} className="p-6">
                <h3 className="font-black text-neutral-130 text-[22px] mb-2">
                  {detail?.title}
                </h3>
                <p className="text-neutral-130 text-lg font-medium">
                  {detail?.description}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full xl:w-[50%]">
            <Image src={IMAGES.whatYouGain} alt="What You Gain" className="w-full h-full min-h-[448px] object-cover rounded-lg" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatYouGain;
