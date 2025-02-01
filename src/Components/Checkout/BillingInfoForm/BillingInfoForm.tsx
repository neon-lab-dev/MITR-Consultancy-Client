/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import TextInput from "@/Components/Reusable/TextInput/TextInput";
import { useForm } from "react-hook-form";

// type TBillingFormData = {

// }
const BillingInfoForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleCheckout = (data:any) => {
        console.log(data);
    };
    
    return (
        <div className="w-full xl:w-[65%]">
            <form onSubmit={handleSubmit(handleCheckout)}>
                {/* Billing Address Info */}
                <h2 className="text-neutral-45 text-2xl font-semibold leading-9">
                    Billing Address
                </h2>
                <div className="py-8 px-[18px] bg-white rounded-2xl shadow-course-details mt-6 flex flex-col gap-9">
                    <div className="flex items-center gap-[30px] w-full">
                    <TextInput
                        label="Full Name"
                        placeholder="Enter Your Full Name"
                        type="text"
                        error={errors.full_name}
                        {...register("full_name", { required: "Full name is required" })}
                    />
                    <TextInput
                        label="Email Address"
                        placeholder="Enter Your Email"
                        type="text"
                        error={errors.email}
                        {...register("email", { required: "Email is required" })}
                    />
                    </div>
                    <div className="flex items-center gap-[30px]">
                    <TextInput
                        label="Country"
                        placeholder="Enter Country Name"
                        type="text"
                        error={errors.country}
                        {...register("country", { required: "Country name is required" })}
                    />
                    <TextInput
                        label="Street Address"
                        placeholder="Enter Street Address"
                        type="text"
                        error={errors.streetAddress}
                        {...register("streetAddress", { required: "Street address is required" })}
                    />
                    </div>
                    <div className="flex items-center gap-7">
                    <TextInput
                        label="Town / City"
                        placeholder="Enter Town / City"
                        type="text"
                        error={errors.city}
                        {...register("city", { required: "City is required" })}
                    />
                    <TextInput
                        label="State / Zone"
                        placeholder="Enter State / Zone"
                        type="text"
                        error={errors.state}
                        {...register("state", { required: "State is required" })}
                    />
                    <TextInput
                        label="Postal Code / Zip"
                        placeholder="Enter Postal Code / Zip"
                        type="text"
                        error={errors.postCode}
                        {...register("postCode", { required: "Post code is required" })}
                    />
                    </div>
                    <div className="flex items-center gap-[30px]">
                    <TextInput
                        label="Phone"
                        placeholder="Enter Phone Number"
                        type="text"
                        error={errors.phoneNumber}
                        {...register("phoneNumber", { required: "Phone number is required" })}
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
                        error={errors.Institute}
                        {...register("Institute", { required: "Institute name is required" })}
                    />
                    <TextInput
                        label="Degree"
                        placeholder="ex- Computer Science & Engineering"
                        type="text"
                        error={errors.degree}
                        {...register("degree", { required: "Degree is required" })}
                    />
                    <div className="flex items-center gap-[30px] w-full">
                    <TextInput
                        label="Branch"
                        placeholder="Enter Last Name"
                        type="text"
                        error={errors.branch}
                        {...register("branch", { required: "Branch is required" })}
                    />
                    <TextInput
                        label="Semester"
                        placeholder="ex- 7th"
                        type="text"
                        error={errors.semester}
                        {...register("semester", { required: "semester is required" })}
                    />
                    </div>
                    <div className="flex items-center gap-[30px]">
                    <TextInput
                        label="Current Year"
                        placeholder="ex- 3rd"
                        type="text"
                        error={errors.year}
                        {...register("year", { required: "Current year is required" })}
                    />
                    <TextInput
                        label="End Year"
                        placeholder="ex- 2027"
                        type="text"
                        error={errors.endDate}
                        {...register("endDate", { required: "End year is required" })}
                    />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BillingInfoForm;