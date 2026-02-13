"use client";
import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { AnimatedCounter } from "./AnimatedCounter";

const Counters = () => {
    const countersData = [
  { value: 5, label: "Years in business" },
  { value: 20, label: "Industries Served" },
  { value: 150, label: "Organizations Supported" },
  { value: 75, label: "Active Engagements" },
];

  return (
    <section className="relative h-[830px] sm:h-[448px] w-full overflow-hidden font-satoshi p">
      {/* Background */}
      <Image
        src={IMAGES.counters}
        alt="Counters background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />

      <Container>
        <div className="relative h-full sm:h-[448px] flex justify-center items-center py-[106px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full text-center">
            {countersData.map(({ value, label }) => (
              <div key={label}>
                <h3 className="text-white text-[52px] font-extrabold">
                  <AnimatedCounter value={value} />+
                </h3>
                <p className="text-white mt-6 text-lg">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Counters;
