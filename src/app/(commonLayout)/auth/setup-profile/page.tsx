"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthHeading from "@/Components/Reusable/AuthHeading/AuthHeading";
import Button from "@/Components/Reusable/Button/Button";
import TextInput from "@/Components/Reusable/TextInput/TextInput";
import Container from "@/Components/Shared/Container/Container";
import { useForm } from "react-hook-form";

const SetupProfile = () => {
    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();
    
        const handleSubmitBasicInfo = (data: any) => {
            console.log(data);
        };
    return (
        <Container>
        <div className="p-8 bg-white rounded-2xl shadow-course-details font-Inter mt-36 w-full max-w-[650px] mx-auto">
            <AuthHeading
            heading="Let Us Know About You"
            description="Share your basic details with us to receive personalized recommendations and exclusive opportunities tailored for you."
            />
            <form onSubmit={handleSubmit(handleSubmitBasicInfo)} className="flex flex-col gap-6 font-Inter mt-6">
            <TextInput
                        label="First Name"
                        placeholder="Enter First Name"
                        type="text"
                        error={errors.firstName}
                        {...register("firstName", { required: "First name is required" })}
                    />
                    <TextInput
                        label="Last Name"
                        placeholder="Enter Last Name"
                        type="text"
                        error={errors.lastName}
                        {...register("lastName", { required: "Last name is required" })}
                    />
                    <TextInput
                        label="Country"
                        placeholder="Enter Country Name"
                        type="text"
                        error={errors.country}
                        {...register("country", { required: "Country name is required" })}
                    />
                    <TextInput
                        label="Town / City"
                        placeholder="Enter Town / City"
                        type="text"
                        error={errors.city}
                        {...register("city", { required: "City is required" })}
                    />
                <Button variant="primary" title="Submit" classNames="" />
            </form>
        </div>
    </Container>
    );
};

export default SetupProfile;