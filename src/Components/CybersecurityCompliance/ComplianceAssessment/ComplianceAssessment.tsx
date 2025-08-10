import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import ComplianceAssessmentForm from "./ComplianceAssessmentForm";
import Heading from "@/Components/Reusable/Heading/Heading";

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
          <Heading align="center" heading="Talk To Us Today" />

          <div className="flex items-center justify-between mt-[60px]">
            <ComplianceAssessmentForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComplianceAssessment;
