import type { ReactNode } from "react";
import { ICONS } from "../../../assets";
import Image from "next/image";

type ButtonProps = {
  title: string;
  variant: "primary" | "secondary" | "accent";
  classNames?: string;
  handleClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

const Button = ({
  title,
  variant,
  classNames = "",
  handleClick,
  icon,
  iconPosition = "left",
}: ButtonProps) => {
  const variantClasses = {
    primary: "bg-neutral-180 text-primary-10",
    accent: "bg-primary-120 text-neutral-190",
    secondary:
      "text-white border hover:border-primary-10 hover:bg-primary-20",
  };

  // Only primary gets default arrow
  const showDefaultArrow = variant === "primary";

  // Accent never allows any icon
  const allowCustomIcon = variant !== "accent";

  return (
    <button
      onClick={handleClick}
      className={`${variantClasses[variant]} transition duration-300 px-6 py-3 font-Inter font-medium rounded-xl flex items-center justify-center gap-2 cursor-pointer ${classNames}`}
    >
      {showDefaultArrow ? (
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
          {allowCustomIcon && icon && iconPosition === "left" && (
            <span>{icon}</span>
          )}
          <span>{title}</span>
          {allowCustomIcon && icon && iconPosition === "right" && (
            <span>{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
