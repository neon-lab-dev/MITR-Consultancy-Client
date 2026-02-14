import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const AboutTheHost = () => {
  return (
    <div className="font-satoshi pt-14 mb-12">
      <Container>
        <h2 className="font-black text-white text-lg md:text-2xl xl:text-[40px] 2xl:text-[64px] capitalize text-center">
          About The <span className="text-primary-110">Host</span>
        </h2>

        <div className="flex items-center justify-between mt-12">
          <div>
            <h3 className="text-2xl font-black text-neutral-190">
              Mohit Naroune
            </h3>
            <p className="text-neutral-198 mt-3 font-general-sans">
              Sr. Product Designer
            </p>
            <a
              href="https://www.linkedin.com/in/mohit-naroune-7382b2174/"
              target="_blank"
            >
              <FaLinkedin className="text-blue-500 text-2xl mt-6" />
            </a>
          </div>

          <Image src={IMAGES.host} alt="" className="" />

          <p className="text-white font-general-sans max-w-[288px]">
            Hosted by a digital product designer working closely with real-world
            products, focusing on UX thinking, user problems and practical
            design decisions.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutTheHost;
