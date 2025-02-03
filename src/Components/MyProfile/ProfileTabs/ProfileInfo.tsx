/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useForm } from "react-hook-form";
import TextInput from "@/Components/Reusable/TextInput/TextInput";
import { useSetupProfileMutation } from "@/redux/Features/Auth/authApi";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useGetMeQuery, useUpdateProfileMutation } from "@/redux/Features/User/userApi";
import useOtpDataFromLocalStorage from "@/hooks/useOtpDataFromLocalStorage";
import Button2 from "@/Components/Reusable/Button/Button2";
import LoadingSpinner from "@/Components/LoadingSpinner/LoadingSpinner";
import { setUser } from "@/redux/Features/Auth/authSlice";
import { useDispatch } from "react-redux";

type TEducation = {
    institute: string;
    degree: string;
    branch: string;
    semester: string;
    year: string;
    endDate: string;
}
type TProfileData = {
    full_name: string;
    email: string;
    mobileNumber: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
    education: TEducation[];
}
type ProfileInfoProps = {
    isEditEnabled: boolean;
    setIsEditEnabled: (value: boolean) => void;
};

const ProfileInfo = ({ isEditEnabled, setIsEditEnabled }: ProfileInfoProps) => {
    const dispatch = useDispatch();
    const [isNewUser, setIsNewUser] = useState<boolean>(false);
    useEffect(() => {
        const result = localStorage.getItem("isNewUser");
        setIsNewUser(result === "true");
    }, []);
    console.log(isNewUser);

    const { data: myProfile } = useGetMeQuery({});
    const [otpData] = useOtpDataFromLocalStorage<any>("otpData");
    const [setupProfile, { isLoading }] = useSetupProfileMutation();
    const [updateProfile, { isLoading: isProfileUpdating }] = useUpdateProfileMutation();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<TProfileData>();

    useEffect(() => {
        if (otpData) {
            setValue("mobileNumber", otpData.mobileNumber);
            setValue("email", otpData.email);
        }
    }, [otpData, setValue]);

    // Setting profile data
    useEffect(() => {
        if (myProfile) {
            setValue("full_name", myProfile?.user?.full_name);
            setValue("email", myProfile?.user?.email);
            setValue("mobileNumber", myProfile?.user?.mobileNumber);
            setValue("city", myProfile?.user?.city);
            setValue("state", myProfile?.user?.state);
            setValue("country", myProfile?.user?.country);
            setValue("pinCode", myProfile?.user?.pinCode);
            if (myProfile?.user?.education) {
                myProfile?.user?.education?.forEach((item: TEducation, index: number) => {
                    console.log(item);
                    setValue(`education.${index}.institute` as keyof TProfileData, item.institute);
                    setValue(`education.${index}.degree` as keyof TProfileData, item.degree);
                    setValue(`education.${index}.branch` as keyof TProfileData, item.branch);
                    setValue(`education.${index}.semester` as keyof TProfileData, item.semester);
                    setValue(`education.${index}.year` as keyof TProfileData, item.year);
                    setValue(`education.${index}.endDate` as keyof TProfileData, item.endDate);
                });
            }
        }
    }, [myProfile, setValue]);

    const handleProfileSubmit = async (data: TProfileData) => {
        const formattedData = {
            full_name: data.full_name,
            email: data.email,
            mobileNumber: data.mobileNumber,
            country: data.country,
            state: data.state,
            city: data.city,
            pinCode: data.pinCode,
            education: data.education.map((edu) => ({
                institute: edu.institute,
                degree: edu.degree,
                branch: edu.branch,
                semester: edu.semester,
                year: edu.year,
                endDate: edu.endDate,
            })),
        };

        try {
            if (isEditEnabled) {
                // Call updateProfile API if editing
                const response = await updateProfile(formattedData).unwrap();
                if (response?.success) {
                    toast.success(response?.message);
                    setIsEditEnabled(false);
                    window.scrollTo(0, 0);
                }
            } else {
                // Call setupProfile API if setting up profile
                const response = await setupProfile(formattedData).unwrap();
                if (response?.success) {
                    toast.success(response?.message);
                    localStorage.removeItem("otpData");
                    const user = {
                        _id: response?.user?._id,
                        name: response?.user?.full_name,
                        role: response?.user?.role,
                        email: response?.user?.email
                    }
                    dispatch(setUser({ user }));
                    localStorage.removeItem("isNewUser");
                    window.location.reload();
                    window.scrollTo(0, 0);
                }
            }
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to save profile.");
        }
    };


    return (
        <form onSubmit={handleSubmit(handleProfileSubmit)} className="mt-9 font-Inter">
            {/* Billing Address Info */}
            <h2 className="text-neutral-45 text-2xl font-semibold leading-9">
                Billing Address
            </h2>
            {
                !myProfile && <p className="text-orange-500 text-sm mt-2">Setup your profile now</p>
            }
            <div className="py-8 px-[18px] bg-white rounded-2xl shadow-course-details mt-6 flex flex-col gap-9">
                <div className="flex items-center gap-[30px] w-full">
                    <TextInput
                        label="Full Name"
                        placeholder="Enter Full Name"
                        type="text"
                        error={errors.full_name}
                        {...register("full_name", { required: "name is required" })}
                        isDisabled={!(isEditEnabled || isNewUser)}
                    />
                    <TextInput
                        label="Email Address"
                        placeholder="Enter Your Email"
                        type="text"
                        error={errors.email}
                        {...register("email", { required: "Email is required" })}
                                                isDisabled={!(isEditEnabled || isNewUser)}
                    />
                </div>
                <div className="flex items-center gap-[30px]">
                    <TextInput
                        label="Phone"
                        placeholder="Enter Phone Number"
                        type="text"
                        error={errors.mobileNumber}
                        {...register("mobileNumber", { required: "Phone number is required" })}
                                                isDisabled={!(isEditEnabled || isNewUser)}
                    />
                    <TextInput
                        label="Country"
                        placeholder="Enter Country Name"
                        type="text"
                        error={errors.country}
                        {...register("country", { required: "Country name is required" })}
                                                isDisabled={!(isEditEnabled || isNewUser)}
                    />
                    <TextInput
                        label="Town / City"
                        placeholder="Enter Town / City"
                        type="text"
                        error={errors.city}
                        {...register("city", { required: "City is required" })}
                                                isDisabled={!(isEditEnabled || isNewUser)}
                    />
                </div>
                <div className="flex items-center gap-7">
                    <TextInput
                        label="State / Zone"
                        placeholder="Enter State / Zone"
                        type="text"
                        error={errors.state}
                        {...register("state", { required: "State is required" })}
                                                isDisabled={!(isEditEnabled || isNewUser)}
                    />
                    <TextInput
                        label="Postal Code / Zip"
                        placeholder="Enter Postal Code / Zip"
                        type="text"
                        error={errors.pinCode}
                        {...register("pinCode", { required: "Post code is required" })}
                                                isDisabled={!(isEditEnabled || isNewUser)}
                    />
                </div>

            </div>

            {/* Educational Info */}
            <h2 className="text-neutral-45 text-2xl font-semibold leading-9 mt-8">
                Educational Information
            </h2>
            <div className="py-8 px-[18px] bg-white rounded-2xl shadow-course-details mt-6 flex flex-col gap-9">
                <TextInput
                    label="Institute Name"
                    placeholder="Enter Your Institute Name"
                    type="text"
                    error={errors.education?.[0]?.institute}
                    {...register("education.0.institute", { required: "Institute name is required" })}
                                            isDisabled={!(isEditEnabled || isNewUser)}
                />
                <TextInput
                    label="Degree"
                    placeholder="ex- Computer Science & Engineering"
                    type="text"
                    error={errors.education?.[0]?.degree}
                    {...register("education.0.degree", { required: "Degree is required" })}
                                            isDisabled={!(isEditEnabled || isNewUser)}
                />
                <div className="flex items-center gap-[30px] w-full">
                    <TextInput
                        label="Branch"
                        placeholder="Enter Last Name"
                        type="text"
                        error={errors.education?.[0]?.branch}
                        {...register("education.0.branch", { required: "Branch is required" })}
                                                isDisabled={!(isEditEnabled || isNewUser)}
                    />
                    <TextInput
                        label="Semester"
                        placeholder="ex- 7th"
                        type="text"
                        error={errors.education?.[0]?.semester}
                        {...register("education.0.semester", { required: "Semester is required" })}
                                                isDisabled={!(isEditEnabled || isNewUser)}
                    />
                </div>
                <div className="flex items-center gap-[30px]">
                    <TextInput
                        label="Current Year"
                        placeholder="ex- 3rd"
                        type="text"
                        error={errors.education?.[0]?.year}
                        {...register("education.0.year", { required: "Current year is required" })}
                                                isDisabled={!(isEditEnabled || isNewUser)}
                    />
                    <TextInput
                        label="End Year"
                        placeholder="ex- 2027"
                        type="text"
                        error={errors.education?.[0]?.endDate}
                        {...register("education.0.endDate", { required: "End year is required" })}
                                                isDisabled={!(isEditEnabled || isNewUser)}
                    />
                </div>
            </div>
            {
                !myProfile &&
                <div className="flex justify-end mt-5">
                    <Button2 variant="primary" title="Submit">
                        {
                            isLoading ? <LoadingSpinner fontSize="text-[15px]" /> : "Submit"}
                    </Button2>
                </div>
            }
            {
                isEditEnabled &&
                <div className="flex justify-end mt-5">
                    <Button2 variant="primary" title="Save">
                        {
                            isProfileUpdating ? <LoadingSpinner fontSize="text-[15px]" /> : "Save"}
                    </Button2>
                </div>
            }
        </form>
    );
};

export default ProfileInfo;