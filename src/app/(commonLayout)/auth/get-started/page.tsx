import AuthBanner from "@/Components/GetStarted/AuthBanner/AuthBanner";
import GetStartedForm from "@/Components/GetStarted/GetStartedForm/GetStartedForm";
import AuthHeading from "@/Components/Reusable/AuthHeading/AuthHeading";
import Container from "@/Components/Shared/Container/Container";

const GetStared = () => {
    return (
        <div className="bg-white py-14 mt-40">
            <Container>
            <div className="flex flex-col lg:flex-row items-center gap-10 h-[530px]">
                <AuthBanner/>
                <div className="font-Inter w-full max-w-[650px] mx-auto">
                    <AuthHeading
                    align="left"
                        heading="Sign In / Sign Up to your account"
                        description="Gain insights from leading professionals and become part of the largest online creative community."
                    />
                    <GetStartedForm />
                </div>
            </div>
        </Container>
        </div>
    );
};

export default GetStared