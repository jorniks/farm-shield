import { FC, HTMLInputTypeAttribute } from "react";

export const AuthInput: FC<{
  className?: string;
  id: string;
  placeholder: string;
  hasIcon?: boolean;
  inputClassName?: string;
  type: HTMLInputTypeAttribute;
  children?: React.ReactNode;
}> = ({ className, placeholder, hasIcon = true, inputClassName, children, type = "text" }) => {
  return (
    <label className={`${className} relative flex`}>
      {hasIcon && <span className="w-6 h-6 absolute left-6 top-1/3 z-10">{children }</span>}
      <input
        type={type}
        placeholder={placeholder}
        className={`${inputClassName} relative z-0  p-6 rounded-[40px] border border-[#6A6A6A] outline-0 bg-[rgba(46,_161,_92,_0.02)] w-[600px] text-xl text-secondary font-normal ${hasIcon&&"pl-14"}`}
      />
    </label>
  );
};
