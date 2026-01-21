import Container from "@/Components/Shared/Container/Container";
import ComplianceAssessmentForm from "./ComplianceAssessmentForm";
import StyledHeading from "@/Components/Reusable/StyledHeading/StyledHeading";

const ComplianceAssessment = () => {
  return (
    <div id="complianceAssessment" className="font-Satoshi bg-neutral-185">

      <Container>
        <div className="relative py-[100px]">
          <StyledHeading heading="Talk To Us" stylesHeading="Today" />

          <div className="flex items-center justify-between mt-[60px]">
            <ComplianceAssessmentForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComplianceAssessment;
