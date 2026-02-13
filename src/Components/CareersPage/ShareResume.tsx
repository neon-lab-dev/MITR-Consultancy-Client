import React from "react";
import Container from "../Shared/Container/Container";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import Button from "../Reusable/Button/Button";
import { CgArrowTopRight } from "react-icons/cg";

const ShareResume = () => {
  return (
    <div className="font-satoshi relative min-h-screen">
      <Container>
        <div className="w-full md:w-[80%] xl:[50%] py-14">
          <h1 className="text-neutral-185 font-black text-[30px] pb-3">
            Looking to Build Your Career With MITRA?
          </h1>
          <p className="text-neutral-85 font-medium text-sm pb-4">
            MITRA is always open to connecting with talented professionals
            across technology, design, and cybersecurity. If you believe your
            skills align with what we do, we encourage you to reach out.
          </p>
          <p className="text-neutral-85 font-medium text-sm mb-6">
            Share your resume and portfolio. Our team will review your profile
            and contact you when a suitable opportunity arises.
          </p>

          <Button
            title="Share Resume"
            variant="primary"
            iconPosition="right"
            icon={<CgArrowTopRight size={18} />}
          />
          <Image
        src={IMAGES.shareResume}
        alt=""
        className="w-full object-cover h-auto rounded-xl mt-12 mx-auto md:hidden "
      />
        </div>
      </Container>
      <Image
        src={ICONS.trianges}
        alt=""
        className="size-12 md:size-[120px] xl:size-[200px] absolute top-0 right-0"
      />
      <Image
        src={ICONS.trianges}
        alt=""
        className="size-12 md:size-[120px] xl:size-[200px] absolute bottom-0 left-0 scale-[-1]"
      />
      <Image
        src={IMAGES.shareResume}
        alt=""
        className="w-[400px] xl:w-[576px] h-auto hidden md:block absolute bottom-0 right-0 rounded-tl-xl"
      />
      {/* <Image src={ICONS} alt=""/> */}
    </div>
  );
};

export default ShareResume;
