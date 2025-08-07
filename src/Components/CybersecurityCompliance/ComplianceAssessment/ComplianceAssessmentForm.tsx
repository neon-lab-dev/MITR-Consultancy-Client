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
  cybersecurityChallanges: string;
  location: string;
  annualRevenue: string;
  website: string;
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
    <div className="bg-neutral-150 rounded-xl p-6 font-Inter shadow-[0px_0px_50px_-13px_rgba(0,0,0,0.20)] w-full xl:w-[60%]">
      <h1 className="text-xl text-neutral-145 font-medium mb-6">
        Start Your Quick Compliance Check
      </h1>

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

        {/* Challenge & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Company Name */}
          <div>
            <label className="block text-neutral-145 text-[15px] font-medium mb-1">
              Cybersecurity Challenge
            </label>
            <input
              type="text"
              placeholder="Google, Microsoft, etc..."
              {...register("cybersecurityChallanges", { required: true })}
              className={getInputClass(!!errors.cybersecurityChallanges)}
            />
          </div>

          <div>
            <label className="block text-neutral-145 text-[15px] font-medium mb-1">
              Location
            </label>
            <select
              {...register("location", { required: true })}
              className={getInputClass(!!errors.location)}
            >
              <option value="" selected disabled>
                Select
              </option>
              <option value="india">India</option>
              <option value="usa_middleeast">USA, Middle East</option>
              <option value="canada_germany_japan">
                Canada, Germany, Japan
              </option>
              <option value="france_italy_uk_southkorea">
                France, Italy, UK, South Korea
              </option>
              <option value="asean_scandinavia">ASEAN, Scandinavia</option>
              <option value="australia_southafrica">
                Australia, South Africa
              </option>
              <option value="turkey_latinamerica_brazil">
                Turkey, Latin America, Brazil
              </option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        {/* Revenue & Website */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-neutral-145 text-[15px] font-medium mb-1">
              Annual Revenue
            </label>
            <select
              {...register("annualRevenue", { required: true })}
              className={getInputClass(!!errors.annualRevenue)}
            >
              <option value="">Select</option>
              <option value="under1m">Less than 10CR</option>
              <option value="1mto10m">10CR-50CR</option>
              <option value="10mplus">51CR-100CR</option>
              <option value="10mplus">More than 100CR</option>
            </select>
          </div>
          <div>
            <label className="block text-neutral-145 text-[15px] font-medium mb-1">
              Website
            </label>
            <input
              type="text"
              placeholder="www.companyname.com"
              {...register("website", { required: true })}
              className={getInputClass(!!errors.website)}
            />
          </div>
        </div>

        <Button2 variant="primary" title="">
          {isLoading ? <LoadingSpinner fontSize="text-[15px]" /> : "Check Now"}
        </Button2>
      </form>
    </div>
  );
};

export default ComplianceAssessmentForm;
