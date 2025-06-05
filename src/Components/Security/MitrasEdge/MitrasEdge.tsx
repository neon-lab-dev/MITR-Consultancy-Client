import { ICONS } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const MitrasEdge = () => {
  const data = [
    {
      title: "Optimized Security Spending",
      btnText: "Start Saving",
    },
    {
      title: "Seamless Protection Ecosystem",
      btnText: "Integrate Now",
    },
    {
      title: "Stronger & Better Compliance",
      btnText: "Get Complaint",
    },
    {
      title: "Scalable User Onboarding",
      btnText: "Accelerate Growth",
    },
  ];
  return (
    <div className="py-[100px]">
      <Container>
        <div>
          <h1
            className={`font-bold text-neutral-10 text-[32px] md:text-[50px] xl:text-[64px] leading-normal md:leading-[49.68px] capitalize text-center`}
          >
            <span className="text-secondary-20">Mitra’s</span> Edge for Your
            Secure Growth
          </h1>

          <div className="flex flex-col">
            <div className="bg-neutral-135 border border-neutral-130 rounded-t-xl p-6 mt-[60px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {data?.map((item) => (
                <div
                  key={item?.title}
                  className="bg-white border border-neutral-65/50 rounded-xl flex flex-col items-center"
                >
                  <div className="bg-neutral-135 flex items-center justify-center size-[68px] rounded-x-lg rounded-b-lg">
                    <Image
                      src={ICONS.tickCircleGreen}
                      alt=""
                      className="size-9"
                    />
                  </div>

                  <div className="p-6 flex flex-col items-center gap-8 mt-6">
                    <p className="text-neutral-145 text-lg font-medium text-center max-w-[200px] mx-auto">
                      {item?.title}
                    </p>
                    <button className="bg-primary-40 border border-primary-80 px-4 py-2 rounded text-primary-10 font-medium cursor-pointer">
                      {item?.btnText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-neutral-130 h-[100px] flex items-center justify-center rounded-b-xl">
              <Button
                variant="primary"
                title="Take Compliance Assessment"
                classNames="w-auto px-16 py-[10px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MitrasEdge;
