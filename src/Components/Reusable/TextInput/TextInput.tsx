/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: any;
  isDisabled? : boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, name, placeholder = "", type = "text", error, defaultValue, isDisabled = false, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2 font-Inter w-full">
        <label htmlFor={name} className="text-neutral-110">
          {label}*
        </label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          ref={ref}
          disabled={isDisabled}
          className={`w-full p-[13px] rounded bg-white border focus:outline-none focus:border-primary-20 transition duration-300 ${
            error ? "border-red-500" : "border-neutral-65"
          }`}
          {...rest}
        />
        {error?.message && (
          <span className="text-red-500 text-sm">{String(error.message)}</span>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
