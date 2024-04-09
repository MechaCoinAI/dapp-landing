import bg from '@/images/banner/banner_bg.png'
import cat2 from '@/images/banner/cat.svg'
import Image from 'next/image'
import ButtonAction from './ButtonAction'

export default function Banner() {
  return (
    <section className="h-[716px] w-full relative overflow-hidden ">
      <Image
        priority
        draggable={false}
        src={bg}
        alt="bg"
        layout="fill"
        objectFit="cover"
        objectPosition="85% 100%"
        className="z-[-1]"
      />
      <div className="max-w-[1440px] mx-auto lg:py-[33px] lg:px-[100px]  relative flex lg:flex-row flex-col items-center z-[1] h-full">
        <div className="flex flex-col gap-[13px] lg:w-[604.104px] w-[382px] px-[16px] absolute lg:top-[189px] top-[32px] lg:left-auto  left-1/2 lg:translate-x-0 -translate-x-1/2 z-10">
          <span className="text-[#BEAFA5] text-[24px] leading-[24px]">
            PROUDLY LAUNCH ON ALL BLOCKCHAINS
          </span>
          <h1 className="w-full lg:w-[781px] lg:text-[48px] lg:leading-[49.55px] text-[#FFFFE3] text-[32px] leading-[42px] lg:tracking-[-1.92px] tracking-[-0.96px] uppercase font-bold whitespace-pre-wrap">
            Co-built by AI creatures <br className="md:block hidden" />
            and supported by <br className="md:block hidden" />
            Wormhole & Axelar <br className="md:block hidden" />
            Network
          </h1>
          {/* <h1 className='lg:text-[56px] lg:leading-[57.8px] lg:hidden flex text-[#FFFFE3] text-[32px] lg:tracking-[-1.92px] tracking-[-0.96px] uppercase font-bold'>Co-built by AI creatures and supported by Axelar Network</h1> */}
          <div className='mt-5'>
            <ButtonAction />
          </div>
        </div>
        <Image
          draggable={false}
          src={cat2}
          alt="cat"
          className="absolute bottom-[0%] lg:right-[155px] lg:left-auto  left-1/2 lg:translate-x-0 -translate-x-1/2 min-w-[423px] min-h-[423px] lg:min-w-[581px] lg:min-h-[581px]"
        />
      </div>
    </section>
  )
}
