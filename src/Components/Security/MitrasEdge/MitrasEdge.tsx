"use client";
import { ICONS } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MitrasEdge = () => {
  const data = [
    {
      title: "Optimized Security Spending",
      icon: ICONS.optimizedSecuritySpending,
      btnText: "Start Saving",
    },
    {
      title: "Seamless Protection Ecosystem",
      icon: ICONS.seamlessProtectionEcosystem,
      btnText: "Integrate Now",
    },
    {
      title: "Stronger & Better Compliance",
      icon: ICONS.strongerBetterCompliance,
      btnText: "Get Complaint",
    },
    {
      title: "Scalable User Onboarding",
      icon: ICONS.optimizedSecuritySpending,
      btnText: "Accelerate Growth",
    },
  ];
  return (
    <div className="pt-[100px] bg-neutral-185 font-satoshi z-0 overflow-hidden">
      <div className="relative py-20 overflow-hidden">
        {/* BACKGROUND TEXT */}
        <h2
          className="
      absolute inset-0
      flex items-center justify-center
      font-bold text-neutral-20
      text-[120px] md:text-[200px] xl:text-[248px]
      z-0
      pointer-events-none
      select-none
      opacity-20
    "
        >
          Compliance
        </h2>

        {/* FRONT TEXT */}
        <h2
          className="
      relative z-10
      text-neutral-130
      text-[24px] md:text-[40px] xl:text-[56px] font-extrabold
      leading-6 md:leading-[65px]
      max-w-[740px] mx-auto text-center
    "
        >
          <span className="text-primary-10">MITRA’s</span> Edge for Your Secure
          Growth
        </h2>
      </div>

      <Container>
        <div className="flex flex-col">
          <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {data?.map((item) => (
              <div
                key={item?.title}
                className="border border-white rounded-xl flex flex-col items-center gap-6 p-6"
              >
                <Image src={item?.icon} alt="" className="size-10" />

                <p className="text-white text-[22px] font-extrabold text-center mt-2">
                  {item?.title}
                </p>
                <button className="border border-white px-8 py-4 rounded-xl text-white font-medium cursor-pointer">
                  {item?.btnText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="relative pt-28 pb-28 mt-10 overflow-hidden">
        <div className="absolute bottom-0">
          <Marquee
            className="
   
      font-black text-neutral-70
      text-[80px] md:text-[160px] xl:text-[220px]
      z-0
      pointer-events-none
      select-none
      opacity-15
      whitespace-nowrap
    "
          >
            From Code to Compliance
          </Marquee>
        </div>

        {/* FOREGROUND CONTENT */}
        <div className="relative z-10 flex justify-center items-center">
          <Button
            handleClick={() =>
              document
                .getElementById("complianceAssessment")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="primary"
            title="Talk To Us"
            classNames="w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default MitrasEdge;
