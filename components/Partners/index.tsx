import React from 'react'
import Image from 'next/image'
import border from '@/images/partners/partners_border.png'
import borderMB from '@/images/partners/partners_border_mb.png'
import { partners } from '@/constants'
import paw from '@/images/partners/paw.svg'
import paw2 from '@/images/partners/paw2.svg'
import btnPartner from '@/images/airdrop/airdrop.png';
import Link from 'next/link'
import AddressField from './AddressField'

export default function Partners() {

  const address = '0xf256F45b9029076C48877Aa5f9Db5251E140b459'

  return (
    <section className='h-[789px] w-full relative overflow-hidden partner_bg' >
      <div className='container mx-auto py-[120px] px-[80px] relative flex h-full justify-center items-center'>
        <Image draggable={false} src={border} alt='border' className='z-[1] w-[922px] h-[606px] md:flex hidden absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
        <Image draggable={false} src={borderMB} alt='border' className='z-[1]  w-[382px] h-[496px] md:hidden flex absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
        <div className='p-[64px] relative flex flex-col items-center md:gap-[60px] gap-[48px] bg-[#0A0905] rounded-[32px] min-w-[382px]'>
          <Image draggable={false} src={paw2} alt='paw' className='absolute md:top-[25.39px] top-[10px] md:left-[46.7px] left-[18px]' />
          <Image draggable={false} src={paw} alt='paw' className='absolute md:right-[39.96px] right-[14.45px] md:top-[31.72px] top-[76px]' />
          <div className='relative w-[166px] h-[56px] lg:w-[328px] lg:h-[74px] mx-auto cursor-pointer md:mt-[40px] lg:mt-0'>
            <Image width={0} height={0} sizes='100vw' className='w-full h-full' src={btnPartner} alt='btn partner' priority />
            <span
              style={{
                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.25)'
              }}
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0A0905] text-[24px] lg:text-[48px] font-bold whitespace-nowrap'>We are on
            </span>
          </div>
          <div className='flex flex-wrap justify-center items-center md:gap-[32px] gap-[24px] md:max-w-[752px] min-w-[350px] w-full z-[2]'>
            {
              partners.map((partner: any) => (
                <Link href={partner.href}
                  target="_blank" rel="noopener noreferrer"
                  key={partner.id} className='flex justify-center items-center cursor-pointer'>
                  <Image draggable={false} src={partner.icon} alt={partner.alt} className='md:w-[79.933px] md:h-[79.933px] w-[48px] h-[48px]' />
                </Link>
              ))
            }
          </div>
          <AddressField address ={address}/>
        </div>
      </div>
    </section>
  )
}
