/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import TextInput from "@/Components/Reusable/TextInput/TextInput";
import { useForm } from "react-hook-form";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useCart } from "@/providers/CartProvider/CartProvider";
import BillingDetails from "../BillingDetails/BillingDetails";
import { useGetMeQuery } from "@/redux/Features/User/userApi";
import { useEffect } from "react";
import { TEducation, TProfileData } from "@/Components/MyProfile/ProfileTabs/ProfileInfo";

// type TBillingFormData = {

// }
const BillingInfoForm = () => {
    const { data: myProfile } = useGetMeQuery({});
    console.log(myProfile)
    const { cartData } = useCart();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

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

    const handleCheckout = (data: any) => {
        console.log(data);
    };

    return (
        <div className="w-full lg:w-[65%]">
            <form onSubmit={handleSubmit(handleCheckout)}>
                {/* Billing Address Info */}
                <h2 className="text-neutral-45 text-base md:text-2xl font-semibold leading-9">
                    Billing Address
                </h2>
                <div className="lg:hidden mt-5">
                    <OrderDetails cartData={cartData} /></div>
                <div className="py-8 px-[18px] bg-white rounded-2xl shadow-course-details mt-6 flex flex-col gap-9">
                    <div className="flex flex-col md:flex-row items-center w-full gap-9 md:gap-[30px]">
                        <TextInput
                            label="Full Name"
                            placeholder="Enter Your Full Name"
                            type="text"
                            error={errors.full_name}
                            {...register("full_name", { required: "Full name is required" })}
                            isDisabled={true}
                        />
                        <TextInput
                            label="Email Address"
                            placeholder="Enter Your Email"
                            type="text"
                            error={errors.email}
                            {...register("email", { required: "Email is required" })}
                            isDisabled={true}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-center w-full gap-9 md:gap-[30px]">
                        <TextInput
                            label="Country"
                            placeholder="Enter Country Name"
                            type="text"
                            error={errors.country}
                            {...register("country", { required: "Country name is required" })}
                            isDisabled={true}
                        />
                        <TextInput
                            label="Phone"
                            placeholder="Enter Phone Number"
                            type="text"
                            error={errors.phoneNumber}
                            {...register("phoneNumber", { required: "Phone number is required" })}
                            isDisabled={true}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-center w-full gap-9 md:gap-[30px]">
                        <TextInput
                            label="Town / City"
                            placeholder="Enter Town / City"
                            type="text"
                            error={errors.city}
                            {...register("city", { required: "City is required" })}
                            isDisabled={true}
                        />
                        <TextInput
                            label="State / Zone"
                            placeholder="Enter State / Zone"
                            type="text"
                            error={errors.state}
                            {...register("state", { required: "State is required" })}
                            isDisabled={true}
                        />
                    </div>
                </div>

                {/* Educational Info */}
                <h2 className="text-neutral-45 text-base md:text-2xl font-semibold leading-9 mt-8">
                    Educational Information
                </h2>
                <div className="py-8 px-[18px] bg-white rounded-2xl shadow-course-details mt-6 flex flex-col gap-9">
                    <TextInput
                        label="Institute Name"
                        placeholder="Enter Your Institute Name"
                        type="text"
                        error={errors.Institute}
                        {...register("education.0.institute", { required: "Institute name is required" })}
                        isDisabled={true}
                    />
                    <TextInput
                        label="Degree"
                        placeholder="ex- Computer Science & Engineering"
                        type="text"
                        error={errors.degree}
                        {...register("education.0.degree", { required: "Degree is required" })}
                        isDisabled={true}
                    />
                    <div className="flex flex-col md:flex-row items-center gap-9 md:gap-[30px] w-full">
                        <TextInput
                            label="Branch"
                            placeholder="Enter Last Name"
                            type="text"
                            error={errors.branch}
                            {...register("education.0.branch", { required: "Branch is required" })}
                            isDisabled={true}
                        />
                        <TextInput
                            label="Semester"
                            placeholder="ex- 7th"
                            type="text"
                            error={errors.semester}
                            {...register("education.0.semester", { required: "semester is required" })}
                            isDisabled={true}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-9 md:gap-[30px]">
                        <TextInput
                            label="Current Year"
                            placeholder="ex- 3rd"
                            type="text"
                            error={errors.year}
                            {...register("education.0.year", { required: "Current year is required" })}
                            isDisabled={true}
                        />
                        <TextInput
                            label="End Year"
                            placeholder="ex- 2027"
                            type="text"
                            error={errors.endDate}
                            {...register("education.0.endDate", { required: "End year is required" })}
                            isDisabled={true}
                        />
                    </div>
                </div>
                <div className="xl:hidden">
                    <BillingDetails cartData={cartData} /></div>
            </form>
        </div>
    );
};

export default BillingInfoForm;