import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const ThisWebinarIsForYou = () => {
  const webinarAudience = [
    {
      title: "A student curious about",
      styledTitle: "UI/UX or Product Design as a career",
      suffix : "as a career",
      image: IMAGES.curiousStudent,
    },
    {
      title: "A working non-IT / IT professional looking to build a career in",
      styledTitle: "Digital Product Roles",
      image: IMAGES.workingProfessional,
    },
    {
      title: "A graduate looking for clarity before choosing",
      styledTitle: "Next Step",
      image: IMAGES.freshGraduate,
    },
    {
      title: "Someone who wants to restart their career after a",
      styledTitle: "Long Break",
      image: IMAGES.restartCareer,
    },
  ];

  return (
    <div className="font-satoshi py-14">
      <Container>
        <h2 className="font-black text-white text-lg md:text-2xl xl:text-[40px] 2xl:text-[64px] capitalize text-center">
          This Webinar is For You -{" "}
          <span className="text-primary-110">if You are....</span>
        </h2>

        <div className="grid grid-cols-2 gap-6 mt-12">
          {webinarAudience?.map((item) => (
            <div key={item?.title} className="w-full relative">
              <Image src={item?.image} alt="h-full w-full" />
              <div className="absolute bottom-0 left-0 w-full py-3 px-6 bg-neutral-199/80 backdrop-blur-md">
                <h2 className="text-white text-xl font-general-sans font-medium text-wrap">
                  {item?.title}{" "}
                  <span className="text-primary-100 font-bold">
                    {item?.styledTitle}
                  </span>
                  {item?.suffix ? ` ${item?.suffix}` : ""}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ThisWebinarIsForYou;
