import React, { ReactNode } from "react";
import Image from "next/image";
import { ICONS } from "@/assets";

type ButtonProps = {
  title: string;
  variant: "primary" | "secondary";
  classNames?: string;
  handleClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

const Button = ({
  title,
  variant,
  classNames,
  handleClick,
  icon,
  iconPosition = "left",
}: ButtonProps) => {
  const isPrimary = variant === "primary";

  return (
    <button
      onClick={handleClick}
      className={`${
        isPrimary
          ? "bg-neutral-180 text-primary-10"
          : "text-white border hover:border-primary-10 hover:bg-primary-20"
      } transition duration-300 px-6 py-3 font-Inter font-medium rounded-xl flex items-center justify-center gap-2 cursor-pointer ${classNames}`}
    >
      {/* If primary → always show rightArrow */}
      {isPrimary ? (
        <>
          <span>{title}</span>
          <Image
            src={ICONS.rightArrowBlue}
            alt="arrow"
            className="size-3"
          />
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && <span>{icon}</span>}
          <span>{title}</span>
          {icon && iconPosition === "right" && <span>{icon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
