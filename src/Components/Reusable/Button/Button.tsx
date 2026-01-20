import React from "react";

const Button = ({
  title,
  variant,
  classNames,
  handleClick,
}: {
  title: string;
  variant: string;
  classNames?: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${
        variant === "primary"
          ? "bg-neutral-180 text-primary-10 hover:text-white"
          : "text-white border hover:border-primary-10"
      } hover:bg-primary-20 transition duration-300 px-6 py-3 font-Inter font-medium rounded-xl items-center justify-center flex ${classNames}`}
    >
      {title}
    </button>
  );
};

export default Button;
