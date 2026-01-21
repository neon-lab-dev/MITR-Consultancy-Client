"use client";
import Image from "next/image";
import { IMAGES } from "@/assets";
import Heading from "@/Components/Reusable/Heading/Heading";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Arjun Patel",
    role: "IT Manager",
    message:
      "Their security audit exposed risks we never knew existed. Highly professional service.",
  },
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    message:
      "Reliable and fast incident response—helped us contain a data breach quickly.",
  },
  {
    name: "Ravi Kumar",
    role: "System Administrator",
    message:
      "Network security improved drastically after implementing their firewall and monitoring solutions.",
  },
  {
    name: "Anjali Mehta",
    role: "Compliance Officer",
    message:
      "Their penetration testing helped us meet regulatory standards with clear, actionable reports.",
  },
  {
    name: "Arjun Patel",
    role: "IT Manager",
    message:
      "Their security audit exposed risks we never knew existed. Highly professional service.",
  },
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    message:
      "Reliable and fast incident response—helped us contain a data breach quickly.",
  },
  {
    name: "Ravi Kumar",
    role: "System Administrator",
    message:
      "Network security improved drastically after implementing their firewall and monitoring solutions.",
  },
  {
    name: "Anjali Mehta",
    role: "Compliance Officer",
    message:
      "Their penetration testing helped us meet regulatory standards with clear, actionable reports.",
  },
];

const CyberSecurityTestimonials = () => {
  return (
    <div className="py-20 bg-neutral-190 font-Satoshi mb-20 overflow-hidden">
      <Heading align="center" heading="Testimonials" />

      <div className="mt-[60px]">
        <Marquee speed={40} pauseOnHover gradient={false}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[264px] h-[540px] flex flex-col justify-between gap-6 mx-3"
            >
              <Image src={IMAGES.dummyTestimonialImg} alt={testimonial.name} />
              <p className="text-neutral-145 font-medium text-base xl:text-lg">
                “{testimonial.message}”
              </p>
              <h3 className="text-neutral-145 text-lg font-bold">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default CyberSecurityTestimonials;
