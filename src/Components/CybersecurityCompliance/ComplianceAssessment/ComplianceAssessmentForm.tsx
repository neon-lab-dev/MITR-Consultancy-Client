"use client";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Button2 from "@/Components/Reusable/Button/Button2";
import LoadingSpinner from "@/Components/LoadingSpinner/LoadingSpinner";

type TComplianceFormData = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
};

const ComplianceAssessmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TComplianceFormData>();

  const [isLoading, setIsLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  // Send email function
  const sendEmail: SubmitHandler<TComplianceFormData> = () => {
    setIsLoading(true);
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_phm6lbd",
        "template_u0msfvh",
        form.current,
        "Cg5X16aA9m-EFkzTu"
      )
      .then(
        () => {
          toast("Thanks for your interest. We will contact with you soon!", {
            style: {
              padding: "10px",
              borderRadius: "5px",
            },
            duration: 3000,
          });
          setIsLoading(false);
          reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed! Try again.");
        }
      );
  };

  const baseInputClass =
    "w-full border rounded-md px-4 py-2 transition duration-300";
  const getInputClass = (hasError: boolean) =>
    `${baseInputClass} ${hasError ? "border-red-500" : "border-gray-300"}`;

  return (
    <div className="bg-neutral-150 rounded-xl p-6 font-Inter shadow-[0px_0px_50px_-13px_rgba(0,0,0,0.20)] w-full xl:w-[60%] mx-auto">
      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        className="grid grid-cols-1 gap-4"
      >
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-neutral-145 text-[15px] font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="First"
              {...register("firstName", { required: true })}
              className={getInputClass(!!errors.firstName)}
            />
          </div>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Last"
              {...register("lastName", { required: true })}
              className={getInputClass(!!errors.lastName)}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-neutral-145 text-[15px] font-medium mb-1">
            Work Email
          </label>
          <input
            type="email"
            placeholder="Example@companyname.com"
            {...register("email", { required: true })}
            className={getInputClass(!!errors.email)}
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-neutral-145 text-[15px] font-medium mb-1">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Google, Microsoft, etc..."
            {...register("companyName", { required: true })}
            className={getInputClass(!!errors.companyName)}
          />
        </div>
        {/* Phone Number */}
        <div>
          <label className="block text-neutral-145 text-[15px] font-medium mb-1">
            Phone Number
          </label>
          <input
            type="number"
            placeholder="Your phone number"
            {...register("phoneNumber", { required: true })}
            className={getInputClass(!!errors.phoneNumber)}
          />
        </div>

        <Button2 variant="primary" title="" isDisabled={isLoading}>
          {isLoading ? <LoadingSpinner fontSize="text-[15px]" /> : "Submit"}
        </Button2>
      </form>
    </div>
  );
};

export default ComplianceAssessmentForm;
