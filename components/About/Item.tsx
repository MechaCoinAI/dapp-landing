import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Item: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={` ${className}`}>
      <div className="text-[16px] md:text-[24px] leading-[19.2px] md:leading-[30px] -tracking-[0.24px] text-[#FFFFE3] flex flex-col gap-[16px]">
        {children}
      </div>
    </div>
  );
};

export default Item;
