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
          ? "bg-primary-20 border-primary-20 text-white"
          : "text-white border-white"
      } border px-6 py-3 font-Inter text-base 2xl:text-lg font-medium rounded items-center justify-center flex ${classNames}`}
    >
      {title}
    </button>
  );
};

export default Button;
