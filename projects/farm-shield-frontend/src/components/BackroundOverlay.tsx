import React, { FC } from 'react';

export const BackgroundOverlay: FC<{ children: React.ReactNode; visible: boolean; className?: string; onClose: () => void }> = ({
  children,
  visible,
  onClose,
  className,
}) => {
  return visible ? (
    <div
      className={`fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center font-inter', className) ${className} `}
    >
      <div
        className="flex justify-center items-center h-full w-full bg-[rgba(0,0,0,0.25)] absolute backdrop-blur-[4px]"
        onClick={onClose}
      ></div>
      {children}
    </div>
  ) : null
}
