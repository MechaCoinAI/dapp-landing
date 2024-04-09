import React from 'react'
import Image from 'next/image'
import { tokenomic } from '@/constants'
import chart from '@/images/tokenomic/chart.png'
import bg from '@/images/tokenomic/tokenomic_bg.png'
import border from '@/images/tokenomic/tokenomic_border.png'

export default function Tokenomic() {
  return (
    <section className='w-full relative overflow-hidden lg:h-[831.513px] h-[1179px]'>
      <Image draggable={false} src={bg} alt='bg' layout='fill' 
      objectFit='cover' 
      objectPosition='17% 17%' className='z-[-1]' />
      <div className='container mx-auto flex lg:flex-row flex-col-reverse relative justify-center items-center lg:gap-[168px] gap-[46.46px] h-full w-full'>
        <div className='bg-[#0A0905] flex flex-col gap-[40px] rounded-[32px] lg:py-[40px] lg:px-[50px] py-[32px] px-[16px] lg:max-w-[606px] max-w-[382px] relative'>
          <Image draggable={false} src={border} alt='border' className='absolute top-0 left-0 h-[550px] lg:h-[514px]' />
          <div className='flex flex-col gap-[16px] items-center'>
            <h2 className='font-pixelmix text-[16px] leading-[120%] text-[#BEAFA5]'>Total supply</h2>
            <h1 className='lg:text-[36px] text-[#FFFFE3] text-[24px] font-bold leading-[130%] [text-shadow:3px_3px_0px_rgba(48,27,11,0.56)] tracking-[1px]'>100,000,000,000</h1>
          </div>
          <div className='flex flex-col gap-[10px]'>
            {
              tokenomic.map(( 
                item: any, 
                index: number
              ) => (
                <div key={index} className='flex flex-row items-start gap-[10px]'>
                  <div className={`min-w-[24px] min-h-[24px] rounded-[3px] border border-[#F7F7F4] `}
                  style={{ background: item.color }}
                  ></div>
                  <div>
                    <span className='text-[#FFFFE3] lg:text-[16px] text-[14px] font-pixelmix leading-[19.2px] z-[1]'>{item.portion} </span>
                    <span className='text-[#DCCAB0] lg:text-[16px] text-[14px] font-pixelmix leading-[19.2px] z-[1]'>{item.detail}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <Image draggable={false} src={chart} alt='chart' className='lg:w-[400px] lg:h-[400px] w-[351.807px] h-[351.807px]' />
      </div>
    </section>
  )
}
