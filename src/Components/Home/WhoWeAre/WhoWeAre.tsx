import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import React from "react";


const WhoWeAre = () => {
  return (
    <section className="bg-neutral-185 font-satoshi pt-16">
      <Container>
        {/* Top Content */}
        <div className="flex flex-col xl:flex-row justify-between gap-6">
          <div>
            <p className={`font-black text-primary-20`}>ABOUT US</p>
          <h2
            className={`font-extrabold text-white text-[30px] leading-normal capitalize my-3`}
          >
            Who We {" "}
            <span className="text-primary-10">
             Are
            </span>
          </h2>
          </div>

          <p className="max-w-xl text-sm  text-neutral-130 leading-relaxed">
            MITRA Consultancy is a team of designers, developers & security professionals focused on reliable digital products. We work closely with businesses to understand their challenges and deliver solutions that actually work in the real world.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[220px] md:h-[300px] rounded-xl overflow-hidden mt-12">
          <Image
            src={IMAGES.aboutUsImage}
            alt="about section image"
            fill
            className="object-cover w-full h-[484px]  md:w-[770px] md:h-[348px] 2xl:w-[1128px]"
          />
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;
