type THeading = {
  align: "center" | "left";
  description?: string;
  subHeading?: string;
  heading: string;
};
const Heading: React.FC<THeading> = ({
  align,
  description,
  subHeading,
  heading,
}) => {
  return (
    <div
      className={`flex flex-col gap-[14px] ${
        align === "center" ? "justify-center" : "justify-left"
      }`}
    >
      <p
        className={`font-semibold text-primary-20 text-center ${
          align === "center" ? "text-center" : "text-start"
        }`}
      >
        {subHeading}
      </p>
      <h1
        className={`font-bold text-neutral-10 text-lg md:text-2xl xl:text-[36px] leading-6 md:leading-[49.68px] capitalize text-center ${
          align === "center" ? "text-center" : "text-start"
        }`}
      >
        {heading}
      </h1>
      {description && (
        <p
          className={`text-neutral-20 text-center ${
            align === "center" ? "text-center" : "text-start"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
