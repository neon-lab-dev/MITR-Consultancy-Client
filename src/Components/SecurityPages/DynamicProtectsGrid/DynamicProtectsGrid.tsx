import Container from "@/Components/Shared/Container/Container";
import Image, { StaticImageData } from "next/image";
import React from "react";

type ProtectsCard = {
  title: string;
  image: StaticImageData | string;
  description: string;
};

type DynamicProtectsGridProps = {
  heading: string;
  highlightWord?: string;
  cards: ProtectsCard[];
};

const DynamicProtectsGrid = ({
  heading,
  highlightWord,
  cards,
}: DynamicProtectsGridProps) => {
  return (
    <section className="bg-neutral-190 py-20">
      <Container>
        {/* Heading */}
        <h2 className="text-center text-neutral-185 text-2xl md:text-3xl font-black mb-12">
          {heading}<br/>
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
                className="object-cover h-[252px] w-full"
              />

              {/* Content */}
              <div className="p-6">
                <p className="text-[22px] font-black text-neutral-185">
                  {item.title}
                </p>

              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DynamicProtectsGrid;
