"use client"
import { useForm } from "react-hook-form";

type ComplianceFormData = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  challenge: string;
  location: string;
  revenue: string;
  website: string;
};

const ComplianceAssessmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ComplianceFormData>();

  const onSubmit = (data: ComplianceFormData) => {
    console.log("Submitted Data:", data);
  };

  const baseInputClass =
    "w-full border rounded-md px-4 py-2 transition duration-300";
  const getInputClass = (hasError: boolean) =>
    `${baseInputClass} ${
      hasError ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div className="bg-neutral-150 rounded-xl p-6 font-Inter shadow-[0px_0px_50px_-13px_rgba(0,0,0,0.20)] w-full xl:w-[60%]">
      <h1 className="text-xl text-neutral-145 font-medium mb-6">
        Start Your Quick Compliance Check
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-neutral-145 text-[15px] font-medium mb-1">Name</label>
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
          <label className="block text-neutral-145 text-[15px] font-medium mb-1">Work Email</label>
          <input
            type="email"
            placeholder="Example@companyname.com"
            {...register("email", { required: true })}
            className={getInputClass(!!errors.email)}
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-neutral-145 text-[15px] font-medium mb-1">Company Name</label>
          <input
            type="text"
            placeholder="Google, Microsoft, etc..."
            {...register("companyName", { required: true })}
            className={getInputClass(!!errors.companyName)}
          />
        </div>

        {/* Challenge & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-neutral-145 text-[15px] font-medium mb-1">Cybersecurity Challenge</label>
            <select
              {...register("challenge", { required: true })}
              className={getInputClass(!!errors.challenge)}
            >
              <option value="">Select</option>
              <option value="phishing">Phishing</option>
              <option value="ransomware">Ransomware</option>
              <option value="compliance">Compliance</option>
            </select>
          </div>
          <div>
            <label className="block text-neutral-145 text-[15px] font-medium mb-1">Location</label>
            <select
              {...register("location", { required: true })}
              className={getInputClass(!!errors.location)}
            >
              <option value="">Select</option>
              <option value="usa">India</option>
              <option value="europe">USA</option>
              <option value="asia">England</option>
            </select>
          </div>
        </div>

        {/* Revenue & Website */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-neutral-145 text-[15px] font-medium mb-1">Annual Revenue</label>
            <select
              {...register("revenue", { required: true })}
              className={getInputClass(!!errors.revenue)}
            >
              <option value="">Select</option>
              <option value="under1m">Under $1M</option>
              <option value="1mto10m">$1M - $10M</option>
              <option value="10mplus">Over $10M</option>
            </select>
          </div>
          <div>
            <label className="block text-neutral-145 text-[15px] font-medium mb-1">Website</label>
            <input
              type="text"
              placeholder="www.companyname.com"
              {...register("website", { required: true })}
              className={getInputClass(!!errors.website)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-primary-10 text-white w-full py-2 rounded-md font-medium"
        >
          Check Now
        </button>
      </form>
    </div>
  );
};

export default ComplianceAssessmentForm;
