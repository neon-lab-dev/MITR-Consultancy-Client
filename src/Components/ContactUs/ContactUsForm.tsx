import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import Button from "../Reusable/Button/Button";
import { useRef } from "react";
import { toast, Toaster } from "sonner";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { ICONS } from "@/assets";

type FormValues = {
  fullName: string;
  email: string;
  mobileNumber: string;
  message: string;
};

const ContactUsForm = ({ setIsContactUsModalOpen }: { setIsContactUsModalOpen: (isContactUsModalOpen: boolean) => void }) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  // Ref for the form element
  const form = useRef<HTMLFormElement>(null);

  // Send email function
  const sendEmail: SubmitHandler<FormValues> = () => {
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_phm6lbd",
        "template_6sw301n",
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
          methods.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed! Try again.");
        }
      );

  };

  const inputFieldStyle = "md:py-[18px] py-3 px-4 rounded-md border border-neutral-70 bg-neutral-80 text-neutral-20 focus:border-primary-10 transition duration-300 focus:outline-none"

  return (
    <FormProvider {...methods}>
      <div className="font-Inter w-full xl:w-[55%] xl:overflow-y-scroll">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-neutral-30 text-2xl font-bold uppercase leading-[33px]">
            Get in Touch
          </h1>
          <Image src={ICONS.cross} alt="cross-icon" className="size-8 cursor-pointer" onClick={() => setIsContactUsModalOpen(false)} />
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className="flex flex-col gap-6 mt-6"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullName"
              className="text-neutral-60 font-medium md:text-base text-[10px] leading-[14px]"
            >
              Name
            </label>
            <input
              {...register("fullName", { required: "Name is required" })}
              type="text"
              id="fullName"
              placeholder="Enter your name"
              className={inputFieldStyle}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-3 w-full">
            <div className="flex flex-col gap-2 w-full lg:w-1/2">
              <label
                htmlFor="email"
                className="text-neutral-60 font-medium md:text-base text-[10px] leading-[14px]"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                type="text"
                id="email"
                placeholder="Enter your email"
                className={inputFieldStyle}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 w-full lg:w-1/2">
              <label
                htmlFor="mobileNumber"
                className="text-neutral-60 font-medium md:text-base text-[10px] leading-[14px]"
              >
                Phone
              </label>
              <input
                {...register("mobileNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid phone number",
                  },
                })}
                type="text"
                id="mobileNumber"
                placeholder="Enter your phone"
                className={inputFieldStyle}
              />
              {errors.mobileNumber && (
                <span className="text-red-500 text-sm">
                  {errors.mobileNumber.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-neutral-60 font-medium md:text-base text-[10px] leading-[14px] "
            >
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              rows={4}
              placeholder="Enter your message here"
              className={inputFieldStyle}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          <Button variant="primary" title="Contact Us" classNames="w-full" />
        </form>

        <Toaster position="top-center" />
      </div>
    </FormProvider>
  );
};

export default ContactUsForm;
