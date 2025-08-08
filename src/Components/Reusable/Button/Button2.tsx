import { ReactNode } from "react";
const Button2 = ({
  variant,
  classNames,
  handleClick,
  isDisabled = false,
  children,
}: {
  children: ReactNode;
  title: string;
  variant: string;
  classNames?: string;
  handleClick?: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`${
        variant === "primary"
          ? "bg-primary-20 border-primary-20 text-white"
          : "text-white border-white"
      } border px-6 py-3 font-Inter text-lg font-medium rounded items-center justify-center flex ${classNames}`}
    >
      {children}
    </button>
  );
};

export default Button2;
