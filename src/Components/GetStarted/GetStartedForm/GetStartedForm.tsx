/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import LoadingSpinner from "@/Components/LoadingSpinner/LoadingSpinner";
import Button2 from "@/Components/Reusable/Button/Button2";
import TextInput from "@/Components/Reusable/TextInput/TextInput";
import useOtpDataFromLocalStorage from "@/hooks/useOtpDataFromLocalStorage";
import { useSendOtpMutation } from "@/redux/Features/Auth/authApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type OtpFormData = {
    email: string;
};

const GetStartedForm = () => {
    const [sendOtp, { isLoading }] = useSendOtpMutation();
    const [otpData] = useOtpDataFromLocalStorage<OtpFormData>("otpData");
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<OtpFormData>();

    // Set default values from localStorage data
    useEffect(() => {
        if (otpData) {
            setValue("email", otpData.email);
        }
    }, [otpData, setValue]);

    const handleLogin = async (data: OtpFormData) => {
        try {
            const otpData = {
                email: data.email,
            };
            console.log(otpData);
            const response = await sendOtp(otpData).unwrap();
            if (response?.success) {
                toast.success(response?.message);
                router.push("/auth/verify-otp");
                localStorage.setItem("otpData", JSON.stringify(otpData));
            }
        } catch (err) {
            toast.error((err as any)?.data?.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-6 font-Inter mt-10">
            <TextInput
                label="Email Address"
                placeholder="Enter Your Email"
                type="text"
                error={errors.email}
                {...register("email", { required: "Email is required" })}
            />
            <Button2 variant="primary" title="">
                {
                    isLoading ? <LoadingSpinner fontSize="text-[15px]" /> : "Submit"}
            </Button2>
            <span className="text-neutral-115 leading-6">By clicking <strong>Submit</strong> you agree with our privacy Policy and terms of use</span>
        </form>
    );
};

export default GetStartedForm;