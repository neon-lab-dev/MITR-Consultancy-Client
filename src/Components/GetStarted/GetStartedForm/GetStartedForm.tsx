/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import LoadingSpinner from "@/Components/LoadingSpinner/LoadingSpinner";
import Button2 from "@/Components/Reusable/Button/Button2";
import TextInput from "@/Components/Reusable/TextInput/TextInput";
import useOtpDataFromLocalStorage from "@/hooks/useOtpDataFromLocalStorage";
import { useSendOtpMutation } from "@/redux/Features/Auth/authApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type OtpFormData = {
    email: string;
    mobileNumber: string;
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
            setValue("mobileNumber", otpData.mobileNumber);
        }
    }, [otpData, setValue]);

    const handleLogin = async (data: OtpFormData) => {
        try {
            const otpData = {
                mobileNumber: data.mobileNumber,
                email: data.email,
            };
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

    const [checked, setChecked] = useState<boolean>(false);

    const handleInputChange = (event) => {
        if (event.target.checked) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    };

    return (
            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-6 font-Inter mt-6">
                <TextInput
                    label="Email Address"
                    placeholder="Enter Your Email"
                    type="text"
                    error={errors.email}
                    {...register("email", { required: "Email is required" })}
                />
                <TextInput
                    label="Phone Number"
                    placeholder="Enter Your Phone Number"
                    type="text"
                    error={errors.mobileNumber}
                    {...register("mobileNumber", { required: "Phone number is required" })}
                />
                <Button2 variant="primary" title="Submit">
                    {
                        isLoading ? <LoadingSpinner fontSize="text-[15px]" /> : "Submit"}
                </Button2>
                <label className="flex items-center gap-[10px] cursor-pointer">
                    <input
                        type="checkbox"
                        className="hidden"
                        onChange={handleInputChange}
                    />
                    <div className="relative">
                        <span
                            className={`${checked
                                    ? "opacity-100 z-20 scale-[1]"
                                    : "opacity-0 scale-[0.4] z-[-1]"
                                } transition-all duration-200 absolute top-0 left-0`}
                        >
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="Group 335">
                                    <rect
                                        id="Rectangle 331"
                                        x="-0.00012207"
                                        y="6.10352e-05"
                                        width="20"
                                        height="20"
                                        rx="4"
                                        className="fill-[#3B9DF8]"
                                        stroke="#3B9DF8"
                                    ></rect>
                                    <path
                                        id="Vector"
                                        d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                                        fill="white"
                                    ></path>
                                </g>
                            </svg>
                        </span>

                        <span
                            className={`${!checked
                                    ? "opacity-100 z-20 scale-[1]"
                                    : "opacity-0 scale-[0.4] z-[-1]"
                                } transition-all duration-200`}
                        >
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="Group 335">
                                    <rect
                                        id="Rectangle 331"
                                        x="-0.00012207"
                                        y="6.10352e-05"
                                        width="20"
                                        height="20"
                                        rx="4"
                                        className="fill-transparent"
                                        stroke="#ccc"
                                    ></rect>
                                </g>
                            </svg>
                        </span>
                    </div>

                    <span className="text-neutral-115 leading-6">By clicking you agree with our privacy Policy and terms of use</span>
                </label>
            </form>
    );
};

export default GetStartedForm;