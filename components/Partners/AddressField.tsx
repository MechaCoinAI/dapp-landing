"use client";
import React from 'react'

export default function AddressField({
  address
} : {
  address: string
}) {

  const [bttnText, setBttnText] = React.useState("COPY");
  const onCopy = () => {
    navigator.clipboard
    .writeText(address)
    .then(() => {
      setBttnText("COPIED");
      setTimeout(function () {
        setBttnText("COPY");
      }, 3000);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }


  return (
    <>
      <div className='max-w-[271px] md:max-w-[489px] z-[5] border-[#332E2A] border md:p-[16px] px-[16px] py-[12px] rounded-lg bg-[rgba(207,167,130,0.10)] backdrop-blur-[10px]'>
        <div className='flex items-center gap-[16px]'>
          <div className='flex items-center gap-[12px]'>
            <span className='text-[#BEAFA5] text-[14px] leading-[20px] whitespace-nowrap'>EVM Address:</span>
            <span className='truncate text-[#FFFFE3] text-[14px] leading-[20px] max-w-[107px] md:max-w-[325px]'>{address}</span>
          </div>
          <div
          onClick={onCopy}
          className='cursor-pointer z-[5] relative group'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M4.5 7.83325C4.5 5.94763 4.5 5.00482 5.08579 4.41904C5.67157 3.83325 6.61438 3.83325 8.5 3.83325H10.5C12.3856 3.83325 13.3284 3.83325 13.9142 4.41904C14.5 5.00482 14.5 5.94763 14.5 7.83325V11.1666C14.5 13.0522 14.5 13.995 13.9142 14.5808C13.3284 15.1666 12.3856 15.1666 10.5 15.1666H8.5C6.61438 15.1666 5.67157 15.1666 5.08579 14.5808C4.5 13.995 4.5 13.0522 4.5 11.1666V7.83325Z" stroke="#BEAFA5" strokeWidth="1.5" />
              <path d="M4.5 13.1666C3.39543 13.1666 2.5 12.2712 2.5 11.1666V7.16659C2.5 4.65243 2.5 3.39535 3.28105 2.6143C4.0621 1.83325 5.31918 1.83325 7.83333 1.83325H10.5C11.6046 1.83325 12.5 2.72868 12.5 3.83325" stroke="#BEAFA5" strokeWidth="1.5" />
            </svg>
            <div className='bg-[#110B0B] group-hover:flex hidden text-xs text-[#FFFFE3] p-1  justify-center items-center absolute top-[-200%] left-1/2 transform -translate-x-1/2 rounded-lg'>
                {bttnText}
              </div>

          </div>
        </div>
      </div>
    </>
  )
}
