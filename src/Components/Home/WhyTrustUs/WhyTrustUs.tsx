import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";

const WhyTrustUs = () => {
  const featureDetails = [
  {
    key: "predictableTimelines",
    image: IMAGES.predictableTimelines,
    title: "Predictable timelines",
  },
  {
    key: "experiencedIndustries",
    image: IMAGES.experiencedIndustries,
    title: "Experienced across industries",
  },
  {
    key: "securityDevelopment",
    image: IMAGES.securityDevelopment,
    title: "Security + development under one roof",
  },
  {
    key: "vendors",
    image: IMAGES.vendors,
    title: "One partner instead of 4 vendors",
  },
];

  return (
    <div className="font-Satoshi py-14">
      <Container>
        {/* Heading */}
        <div>
          <p className={`font-semibold text-primary-20`}>WHY TRUST US</p>
          <h2
            className={`font-extrabold text-white text-[30px] leading-normal capitalize mt-6`}
          >
            Why Businesses Work with{" "}
            <span className="text-primary-10">MITRA</span>
          </h2>
        </div>

        <div className="flex gap-6 w-full overflow-x-auto mt-12">
          {
            featureDetails?.map(detail => 
              <div
              key={detail?.key}
              className={`relative rounded-xl`}
            >
              {/* Background Image */}
              <Image
                src={detail.image}
                alt={""}
                className="object-cover transition-transform duration-500 lg:group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content Wrapper */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Title */}
                <h3 className="text-white font-extrabold text-2xl">
                  {detail?.title}
                </h3>
              </div>
            </div>
            )
          }
        </div>
      </Container>
    </div>
  );
};

export default WhyTrustUs;
