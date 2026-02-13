import Container from "@/Components/Shared/Container/Container";
import ComplianceAssessmentForm from "./ComplianceAssessmentForm";
import StyledHeading from "@/Components/Reusable/StyledHeading/StyledHeading";

const ComplianceAssessment = () => {
  return (
    <div
      id="complianceAssessment"
      className="font-satoshi bg-neutral-185 py-[100px]"
    >
      <Container>
        <StyledHeading heading="Talk To Us" stylesHeading="Today" />

        <div className="flex items-center justify-between mt-[60px]">
          <ComplianceAssessmentForm />
        </div>
      </Container>
    </div>
  );
};

export default ComplianceAssessment;
