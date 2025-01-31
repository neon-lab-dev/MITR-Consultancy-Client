"use client"
import AuthHeading from "@/Components/Reusable/AuthHeading/AuthHeading";
import Button from "@/Components/Reusable/Button/Button";
import TextInput from "@/Components/Reusable/TextInput/TextInput";
import Container from "@/Components/Shared/Container/Container";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

const VerifyOtp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleVerifyOtp = (data: any) => {
        console.log(data);
    };

    return (
        <Container>
            <div className="p-8 bg-white rounded-2xl shadow-course-details font-Inter mt-36 w-full max-w-[650px] mx-auto">
                <AuthHeading 
                heading="Verify OTP"
                description="Check your email and verify the OTP to get access."
                />
                <form onSubmit={handleSubmit(handleVerifyOtp)} className="flex flex-col gap-6 font-Inter mt-6">
                    <TextInput
                        label="Enter OTP"
                        placeholder="Enter 6 Digit OTP"
                        type="text"
                        error={errors.otp}
                        {...register("otp", { required: "Enter 6 Digit OTP" })}
                    />
                    <Button variant="primary" title="Submit" classNames="" />
                </form>
            </div>
        </Container>

    );
};

export default VerifyOtp;