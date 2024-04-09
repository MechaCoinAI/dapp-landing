import Image from 'next/image'
import React from 'react'
import screw from '@/images/navbar/screw.svg'
import Link from 'next/link'

const ButtonAction = () => {
  return (
    <div className="flex w-full items-end justify-start gap-2.5 md:gap-5">
      <Link
        href={process.env.NEXT_PUBLIC_NFT_MKP_ENDPOINT || 'https://mecha.innovaz.io'}
        target="_blank"
        className="flex justify-center bg-[#F36D0B] px-[16px] py-[12px] md:min-w-[200px] min-w-[124px] relative"
      >
        <Image
          draggable={false}
          src={screw}
          alt="screw"
          className="absolute top-[5px] left-[4px]"
        />
        <Image
          draggable={false}
          src={screw}
          alt="screw"
          className="absolute top-[5px] right-[4px]"
        />
        <Image
          draggable={false}
          src={screw}
          alt="screw"
          className="absolute bottom-[5px] left-[4px]"
        />
        <Image
          draggable={false}
          src={screw}
          alt="screw"
          className="absolute bottom-[5px] right-[4px]"
        />
        {
          <span className="font-chakra-petch text-[#0A0905] md:text-[20px] text-[14px] font-semibold leading-[20px]">
            Buy NFT
          </span>
        }
      </Link>
      <Link
        target="_blank"
        href={process.env.NEXT_PUBLIC_LAUNCHPAD_ENDPOINT || 'https://waterpump.app/launchpads'}
        className="flex justify-center bg-[#ECDBCE] px-[16px] py-[12px] md:min-w-[200px] min-w-[124px] relative"
      >
        <Image
          draggable={false}
          src={screw}
          alt="screw"
          className="absolute top-[5px] left-[4px]"
        />
        <Image
          draggable={false}
          src={screw}
          alt="screw"
          className="absolute top-[5px] right-[4px]"
        />
        <Image
          draggable={false}
          src={screw}
          alt="screw"
          className="absolute bottom-[5px] left-[4px]"
        />
        <Image
          draggable={false}
          src={screw}
          alt="screw"
          className="absolute bottom-[5px] right-[4px]"
        />
        {
          <span className="font-chakra-petch text-[#0A0905] md:text-[20px] text-[14px] font-semibold leading-[20px]">
            Go to Launchpad
          </span>
        }
      </Link>
    </div>
  )
}

export default ButtonAction
