import { ICONS, IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import ComplianceAssessmentForm from "./ComplianceAssessmentForm";

const ComplianceAssessment = () => {
  return (
    <div id="complianceAssessment" className="font-Inter relative">
      <Image
        src={IMAGES.secureCompliance}
        alt=""
        className="w-full h-full absolute z-0"
      />

      <Container>
        <div className="relative py-[100px]">
          <h1
            className={`font-bold text-neutral-10 text-[32px] md:text-[50px] xl:text-[64px] leading-normal md:leading-[49.68px] capitalize text-center`}
          >
            Take Your Compliance Assessment
          </h1>

          <div className="flex flex-col xl:flex-row gap-10 xl:gap-5 items-center justify-between mt-[60px]">
            <div className="flex gap-24 items-center justify-center w-full xl:w-[40%]">
              <div className="text-neutral-145">
                <Image src={ICONS.medal} alt="medal" className="" />
                <h1 className={`font-extrabold text-[36px] text-center mt-6`}>
                  4.8/5
                </h1>
                <p className="text-sm mt-2">Average Rating</p>
              </div>

              <div className="text-neutral-145">
                <Image src={ICONS.satisfied} alt="medal" className="" />
                <h1 className={`font-extrabold text-[36px] text-center mt-6`}>
                  99%
                </h1>
                <p className="text-sm mt-2">Satisfaction Rate</p>
              </div>
            </div>

            <ComplianceAssessmentForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComplianceAssessment;
