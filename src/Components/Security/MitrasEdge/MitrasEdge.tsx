"use client";
import { ICONS } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const MitrasEdge = () => {
  const data = [
    {
      title: "Optimized Security Spending",
      icon : ICONS.optimizedSecuritySpending,
      btnText: "Start Saving",
    },
    {
      title: "Seamless Protection Ecosystem",
      icon : ICONS.seamlessProtectionEcosystem,
      btnText: "Integrate Now",
    },
    {
      title: "Stronger & Better Compliance",
      icon : ICONS.strongerBetterCompliance,
      btnText: "Get Complaint",
    },
    {
      title: "Scalable User Onboarding",
      icon : ICONS.optimizedSecuritySpending,
      btnText: "Accelerate Growth",
    },
  ];
  return (
    <div className="py-[100px] bg-neutral-185 font-Satoshi">
      <Container>
        <div className="relative">
          <h2
            className={`font-bold text-neutral-20 text-[248px] capitalize text-center absolute -top-32`}
          >
            Compliance
          </h2>
          <h2
            className={`font-bold text-neutral-130 text-lg md:text-2xl xl:text-[40px] 2xl:text-[48px] leading-6 md:leading-[65px] max-w-[740px] mx-auto capitalize text-center`}
          >
            <span className="text-primary-10">MITRA’s</span> Edge for Your
            Secure Growth
          </h2>

          <div className="flex flex-col">
            <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {data?.map((item) => (
                <div
                  key={item?.title}
                  className="border border-white rounded-xl flex flex-col items-center gap-6 p-6"
                >
                    <Image
                      src={item?.icon}
                      alt=""
                      className="size-10"
                    />

                    <p className="text-white text-[22px] font-extrabold text-center mt-2">
                      {item?.title}
                    </p>
                    <button className="border border-white px-8 py-4 rounded-xl text-white font-medium cursor-pointer">
                      {item?.btnText}
                    </button>
                </div>
              ))}
            </div>
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
      </Container>
    </div>
  );
};

export default MitrasEdge;
