import React, { ReactNode } from "react";

type AboutUsDetailsSectionProps = {
  title: string;
  subTitle? : string;
  description?: string;
  features: ReactNode[];
  footerText?: string;
};

const AboutUsDetailsSection: React.FC<AboutUsDetailsSectionProps> = ({
  title,
   subTitle,
  description,
  features,
  footerText,
}) => {
  return (
    <section>
      <h1 className="font-bold text-neutral-10 text-lg md:text-2xl xl:text-[36px] leading-6 md:leading-[49.68px] capitalize mt-10">
        {title}
      </h1>
      <p className="text-neutral-20 mt-3 text-justify">{description}</p>

      {
        subTitle &&
        <h2 className="font-bold text-xl text-neutral-20 mt-3 text-justify capitalize">
        {subTitle} :
      </h2>
      }
      <div className="flex flex-col gap-3 mt-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-1">
            <p className="text-neutral-20 mt-3">{feature}</p>
          </div>
        ))}
      </div>

      {footerText && (
        <p className="text-neutral-20 mt-5 text-justify italic font-medium">
          {footerText}
        </p>
      )}
    </section>
  );
};

export default AboutUsDetailsSection;
