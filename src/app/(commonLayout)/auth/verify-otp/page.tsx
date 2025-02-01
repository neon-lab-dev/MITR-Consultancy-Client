"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { OtpFormData } from "@/Components/GetStarted/GetStartedForm/GetStartedForm";
import LoadingSpinner from "@/Components/LoadingSpinner/LoadingSpinner";
import AuthHeading from "@/Components/Reusable/AuthHeading/AuthHeading";
import Button2 from "@/Components/Reusable/Button/Button2";
import TextInput from "@/Components/Reusable/TextInput/TextInput";
import Container from "@/Components/Shared/Container/Container";
import useOtpDataFromLocalStorage from "@/hooks/useOtpDataFromLocalStorage";
import { useVerifyOtpMutation } from "@/redux/Features/Auth/authApi";
import { setUser } from "@/redux/Features/Auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

interface FormData {
    otp: string;
}
const VerifyOtp = () => {
    const dispatch = useDispatch();
    const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
    // Getting OTP data from localstorage
    const [otpData] = useOtpDataFromLocalStorage<OtpFormData>("otpData");
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(59);
    const [isTimerFinished, setIsTimerFinished] = useState(false);

    useEffect(() => {
        // Function to update the timer every second
        const timerInterval = setInterval(() => {
            setTimeLeft((prevTimeLeft) => {
                if (prevTimeLeft > 0) {
                    return prevTimeLeft - 1;
                } else {
                    clearInterval(timerInterval);
                    setIsTimerFinished(true);
                    return 0;
                }
            });
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timerInterval);
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const handleVerifyOtp = async (data: FormData) => {
        try {
            const verifyOtpData = {
                mobileNumber: otpData?.mobileNumber,
                otp: data.otp,
            };
            const response = await verifyOtp(verifyOtpData).unwrap();
            if (response?.message) {
                toast.success(response?.message);
                if (response?.newUser) {
                    router.push("/my-profile");
                } else {
                    const user = {
                        _id: response?.user?._id,
                        name: response?.user?.full_name,
                        role: response?.user?.role,
                        email: response?.user?.email
                    }
                    dispatch(setUser({ user }));
                    if (response?.user?.role === "admin") {
                        router.push("/admin/all-users");
                    } else {
                        router.push("/my-profile");
                    }
                    localStorage.removeItem("otpData");
                }
            }
        } catch (err) {
            toast.error((err as any)?.data?.message);
        }
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
                    <Button2 variant="primary" title="Submit">
                        {
                            isLoading ? <LoadingSpinner fontSize="text-[15px]" /> : "Submit"}
                    </Button2>

                    {
                        isTimerFinished ?
                            <Link href={"/auth/get-started"} className="text-primary-10 text-sm leading-5 font-medium text-center">Resend OTP</Link>
                            :
                            <p className="font-Inter text-neutral-65 text-center">
                                0:{timeLeft.toString().padStart(2, "0")}
                            </p>
                    }
                </form>
            </div>
        </Container>

    );
};

export default VerifyOtp;