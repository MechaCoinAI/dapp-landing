'use client'

import Image from 'next/image'
import React from 'react'

import brickMobile from '@/images/how-to-buy/brick-mobile.png'
import brick from '@/images/how-to-buy/brick.png'
import howToBuyMobile from '@/images/how-to-buy/howtobuy-mobile.png'
import howToBuy from '@/images/how-to-buy/howtobuy.png'
import { toast } from 'react-toastify'

interface IProps {
  className?: string
}

const HowToBuy: React.FC<IProps> = ({ className }) => {
  return (
    <div className="w-full h-[754px] 2xl:h-[904px] relative flex items-center justify-center">
      <Image
        className="absolute inset-0 w-full hidden md:block h-[754px] 2xl:h-[904px] object-cover z-0"
        src={howToBuy}
        alt="howToBuy"
        draggable={false}
      />
      <Image
        className="absolute inset-0 w-full md:hidden block h-[754px] object-cover z-0"
        src={howToBuyMobile}
        alt="howToBuyMobile"
        draggable={false}
      />
      <div className="relative w-full h-full max-w-[1440px]">
        <div className="w-[332px] h-[221.363px] bg-[url('/images/how-to-buy/dialog.png')] md:w-[608.57px] md:h-[405.77px] absolute top-[15px] right-[27px] md:top-[90.35px] md:right-[172.85px] 2xl:top-[180px] z-[1] bg-cover bg-no-repeat flex items-center justify-center">
          <div className="w-full h-full relative">
            <div
              onClick={() => toast.info('$MECHA LPs are coming! Meow!')}
              className={`w-[182px] md:w-[381px] absolute top-[59.93px] right-[38.02px] md:top-[150.16px] md:right-[46px] flex flex-col items-center justify-center gap-[24px] md:gap-[40px] ${className}`}
            >
              <div className="text-[#0A0905] text-[24px] md:text-[48px] font-bold leading-[24.77px] md:leading-[49.55px] drop-shadow-[0px_2px_0px_rgba(0,0,0,0.25)]">
                How To Buy?
              </div>

              <div className=" flex items-center justify-center transition cursor-pointer hover:opacity-80">
                <Image
                  className="w-[109px] h-[51px] hidden md:block"
                  src={brick}
                  alt="brick"
                  draggable={false}
                />
                <Image
                  className="md:hidden"
                  src={brickMobile}
                  alt="brickMobile"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToBuy
