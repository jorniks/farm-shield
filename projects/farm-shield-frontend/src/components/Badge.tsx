import { FC } from "react";

export const Badge: FC<{ text: string; className?: string; onClick?: () => void; }> = ({ text, className,onClick }) => {
  return (
    <button type="button" onClick={onClick}  className={`text-base font-medium font-poppins rounded-xl px-4 py-2 text-primary bg-[#2EA15C0F] border border-[#2EA15C14] ${className} `}>{text}</button>
  );
};
