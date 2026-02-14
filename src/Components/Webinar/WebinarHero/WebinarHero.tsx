import Container from "@/Components/Shared/Container/Container";
import Button from "../../Reusable/Button/Button";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

const WebinarHero = () => {
  const webinarTags = [
    "Live webinar",
    "Beginner-friendly",
    "Practical insights",
  ];

  return (
    <div className="bg-neutral-185 font-satoshi pt-40 pb-80 relative">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-black text-white text-lg md:text-2xl xl:text-[40px] 2xl:text-[64px] capitalize max-w-274 mx-auto">
            Understand Digital Product Design & UX -{" "}
            <span className="text-primary-110">Clearly & Practically</span>
          </h2>

          <p className="font-general-sans text-white mt-3 max-w-174 mx-auto">
            A focused webinar to help you understand how real digital products
            are designed, and how UX thinking actually works in the industry.
          </p>

          <div className="flex items-center gap-10 my-10">
            <div className="flex items-center gap-2">
              <Image src={ICONS.calender} alt="" className="size-6" />
              <p className="font-general-sans text-white">28th February 2026</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={ICONS.timer} alt="" className="size-6" />
              <p className="font-general-sans text-white">
                06:00 PM - 07:00 PM IST
              </p>
            </div>
          </div>
          <Button variant="accent" title="Register for Webinar" />

          <div className="flex items-center gap-3 mt-6">
            {webinarTags.map((tag, index) => (
              <div key={index} className="flex items-center gap-3">
                <p className="font-general-sans text-white">{tag}</p>

                {/* Dot separator except last item */}
                {index !== webinarTags.length - 1 && (
                  <span className="text-white">•</span>
                )}
              </div>
            ))}
          </div>
        </div>


        <Image src={IMAGES.webinarHero} alt="" className="mx-auto absolute -bottom-28 left-0 right-0" />
      </Container>
    </div>
  );
};

export default WebinarHero;
