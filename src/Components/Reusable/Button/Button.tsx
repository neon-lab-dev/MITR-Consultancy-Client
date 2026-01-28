import React, { ReactNode } from "react";

type ButtonProps = {
  title: string;
  variant: "primary" | "secondary";
  classNames?: string;
  handleClick?: () => void;
  icon?: ReactNode;              // ✅ optional icon
  iconPosition?: "left" | "right"; // ✅ optional position
};

const Button = ({
  title,
  variant,
  classNames,
  handleClick,
  icon,
  iconPosition = "left",
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`${
        variant === "primary"
          ? "bg-neutral-180 text-primary-10 hover:text-white"
          : "text-white border hover:border-primary-10"
      } hover:bg-primary-20 transition duration-300 px-6 py-3 font-Inter font-medium rounded-xl flex items-center justify-center gap-2 ${classNames}`}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}

      <span>{title}</span>

      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;
