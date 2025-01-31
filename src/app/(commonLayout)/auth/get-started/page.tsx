import GetStartedForm from "@/Components/GetStarted/GetStartedForm/GetStartedForm";
import Container from "@/Components/Shared/Container/Container";

const GetStared = () => {
    return (
        <Container>
            <div className="p-8 bg-white rounded-2xl shadow-course-details font-Inter mt-36 w-full max-w-[650px] mx-auto">
                <h1 className="text-neutral-45 text-xl md:text-[36px] font-bold leading-normal text-center">
                Signin/Signup to your account
                </h1>
                <p className="max-w-[520px] text-neutral-115 leading-6 text-center mx-auto mt-1">Gain insights from leading professionals and become part of the largest online creative community.</p>
                <GetStartedForm/>
            </div>
        </Container>
    );
};

export default GetStared;