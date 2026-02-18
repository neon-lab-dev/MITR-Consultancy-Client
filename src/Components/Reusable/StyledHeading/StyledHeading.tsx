type TextAlign = "left" | "center" | "right";

const alignClasses: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const StyledHeading = ({
  heading,
  stylesHeading,
  align = "center",
}: {
  heading: string;
  stylesHeading: string;
  align?: TextAlign;
}) => {
  return (
    <h1
      className={`font-satoshi font-black text-neutral-130 text-lg md:text-2xl xl:text-[40px] 2xl:text-[52px] 
      leading-6 md:leading-[60px] capitalize max-w-[720px] mx-auto
      ${alignClasses[align]}`}
    >
      {heading} {" "} <span className="text-primary-10">{stylesHeading}</span>
    </h1>
  );
};

export default StyledHeading;
