import { IMAGES } from "@/assets";
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
            Talk To Us Today
          </h1>

          <div className="flex items-center justify-between mt-[60px]">

            <ComplianceAssessmentForm />
            </div>
        </div>
      </Container>
    </div>
  );
};

export default ComplianceAssessment;
