import GetStartedForm from "@/Components/GetStarted/GetStartedForm/GetStartedForm";
import AuthHeading from "@/Components/Reusable/AuthHeading/AuthHeading";
import Container from "@/Components/Shared/Container/Container";

const GetStared = () => {
    return (
        <Container>
            <div className="p-8 bg-white rounded-2xl shadow-course-details font-Inter mt-36 w-full max-w-[650px] mx-auto">
                <AuthHeading
                heading="Signin/Signup to your account"
                description="Gain insights from leading professionals and become part of the largest online creative community."
                />
                <GetStartedForm/>
            </div>
        </Container>
    );
};

export default GetStared;