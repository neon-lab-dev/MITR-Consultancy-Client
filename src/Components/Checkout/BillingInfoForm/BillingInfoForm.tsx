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

    const handleCheckout = (data) => {
        console.log(data);
    }
    return (
        <div className="w-full xl:w-[65%]">
            <form onSubmit={handleSubmit(handleCheckout)}>
                <h2 className="text-neutral-45 text-2xl font-semibold leading-9">
                    Billing Address
                </h2>
                <div className="py-8 px-[18px] bg-white rounded-2xl shadow-course-details mt-6 flex flex-col gap-9">
                    <div className="flex items-center gap-[30px] w-full">
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
                    <TextInput
                        label="Email Address"
                        placeholder="Enter Your Email"
                        type="text"
                        error={errors.email}
                        {...register("email", { required: "Email is required" })}
                    />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BillingInfoForm;