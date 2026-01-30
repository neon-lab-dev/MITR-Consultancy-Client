import Container from "@/Components/Shared/Container/Container";
import Image, { StaticImageData } from "next/image";
import React from "react";

type ReasonCard = {
  title: string;
  image: StaticImageData | string;
  description: string;
};

type DynamicReasonsGridProps = {
  heading: string;
  highlightWord?: string;
  cards: ReasonCard[];
};

const DynamicReasonsGrid = ({
  heading,
  highlightWord,
  cards,
}: DynamicReasonsGridProps) => {
  return (
    <section className="bg-neutral-185 py-20">
      <Container>
        {/* Heading */}
        <h2 className="text-center text-white text-2xl md:text-3xl font-black mb-12">
          {heading}{" "}
          {highlightWord && (
            <span className="text-primary-110">{highlightWord}</span>
          )}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-130 rounded-xl flex flex-col overflow-hidden
                         transition-shadow duration-300 hover:shadow-lg group"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover h-[360px] w-full"
              />

              {/* Content */}
              <div className="p-6">
                <p className="text-[22px] font-black text-neutral-185">
                  {item.title}
                </p>

                {/* Animated description */}
                <div
                  className="
                    overflow-hidden
                    max-h-0
                    transition-[max-height,opacity,margin] duration-300 ease-out
                    opacity-0 mt-0
                    group-hover:max-h-[120px]
                    group-hover:opacity-100
                    group-hover:mt-3
                  "
                >
                  <p className="text-[18px] font-medium text-neutral-185">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DynamicReasonsGrid;
