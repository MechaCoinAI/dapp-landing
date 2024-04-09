'use client'
import React from 'react'
import Image from 'next/image'
import border1 from '@/images/point/border1.png'
import borderMB from '@/images/point/borderMB.png'
import border2 from '@/images/point/border2.png'
import line1 from '@/images/point/line1.png'
import line2 from '@/images/point/line2.png'
import itemBg from '@/images/point/item.svg'
import ButtonLoginTwitter from './ButtonLoginTwitter'

const process = [
  {
    id: 1,
    title: 'Earn points',
    description:
      'Send tweets mentioning us (see above) during the epoch to earn points and compete with friends'
  },
  {
    id: 2,
    title: 'Point Calculations',
    description:
      'We add up all of your mentions and continuously recalculate engagement to update your points'
  },
  {
    id: 3,
    title: 'Token Calculations',
    description: `We determine your percentage of the epoch's token allotment using points and account status`
  },
  {
    id: 4,
    title: 'Earn Tokens',
    description:
      'Claim your percentage of the previous epoch tokens from the dashboard in the next epoch'
  }
]

const getStarted = [
  {
    id: 1,
    title: 'Connect Account',
    description: 'Link your twitter to create your $MECHA account'
  },
  {
    id: 2,
    title: 'Send join message',
    description: 'Send out your join message to activate'
  },
  {
    id: 3,
    title: 'Start earning points',
    description: 'Keep tweeting every epoch to generate points'
  },
  {
    id: 4,
    title: 'Claim',
    description: 'Claim your points for $MECHA tokens after each epoch'
  }
]

export default function Process() {
  return (
    <>
      <section className="md:h-[789px] h-[1396px] px-[11px] pt-[80.987px] pb-[54.519px] md:p-0  w-full relative overflow-hidden partner_bg">
        <div className="flex flex-col gap-[48px] items-center h-full justify-center">
          <h1 className="font-bold md:text-[40px] text-[24px] font-creative-block tracking-[-0.8px] leading-[40px] text-[#FFFFE3]">
            The Process and Get Started
          </h1>
          <div className="flex md:flex-row flex-col items-center md:gap-[80px] gap-[56px]">
            <div className="bg-[#0A0905] md:max-w-[500px] max-w-[382px] md:max-h-[586px] md:py-[48px] md:pr-[33px] md:pl-[24px] py-[32px] pl-[6px] pr-[16px] rounded-[32px] flex flex-col md:gap-[32px] gap-[16px] relative">
              <div className="absolute md:top-[-14.31px] md:left-[-12.2px] md:w-[524.404px] md:h-[614.859px] w-[400.64px] h-[625.35px] top-[-14.55px] left-[-9.32px]">
                <Image src={border1} alt="border1" objectFit="cover" className="hidden md:block" />
                <Image src={borderMB} alt="border1" objectFit="cover" className=" md:hidden" />
              </div>
              <h1 className="text-center text-[30px] font-bold font-creative-block text-[#FFFFE3] leading-[30px] tracking-[-0.6px]">
                The Process
              </h1>
              <Image src={line1} alt="line1" />
              <div className="flex flex-col gap-[16px]">
                {process.map(item => (
                  <div key={item.id} className="flex flex-col relative">
                    <div className="flex items-center gap-[16px] py-[10px] px-[16px]">
                      <div className="min-h-[40px] min-w-[40px] relative flex justify-center items-center ">
                        <Image
                          src={itemBg}
                          alt="item"
                          layout="fill"
                          objectFit="cover"
                          className="z-[1]"
                        />
                        <span className="z-[2] text-[20px] font-bold text-[#FFFFE3]">
                          {item.id}
                        </span>
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <h1 className="text-[#FFFFE3] text-[14px] font-bold leading-[20px] font-creative-block">
                          {item.title}
                        </h1>
                        <p className="text-[14px] leading-[20px] text-[#BEAFA5] font-creative-block">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {item.id !== 4 && (
                      <div className="pl-[22px] absolute bottom-[-20%]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="32"
                          viewBox="0 0 28 32"
                          fill="none"
                        >
                          <path
                            d="M14 0.870605L15.024 2.6663C16.8977 5.95185 17.117 9.9273 15.616 13.399L15.5428 13.5683C14.5422 15.8828 14.3311 18.4622 14.9421 20.9086L15.2778 22.2529C15.3797 22.6607 15.552 23.0477 15.787 23.3963V23.3963C16.9749 25.1584 16.3917 27.5602 14.528 28.5813L14 28.8706"
                            stroke="#FFFFE3"
                          />
                          <path
                            d="M1 18.8706C1 21.8654 4.60444 23.3734 6.62572 24.4963C7.83069 25.1658 9.44536 25.6923 10.2253 27.0182C10.9781 28.298 12.9944 29.3276 13.3938 30.7256C14.0073 32.8727 15.7091 29.3281 17.0796 28.9365C18.2019 28.6159 19.3318 27.109 20.399 26.544C21.676 25.868 22.8596 25.0148 24.1064 24.3023C25.0542 23.7607 26.3337 22.3624 27.3827 22.3624"
                            stroke="#FFFFE3"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0A0905] md:py-[48px] md:pr-[33px] md:pl-[24px] py-[32px] pl-[6px] pr-[16px] rounded-[32px] md:max-w-[500px] max-w-[382px] md:max-h-[586px] flex flex-col md:gap-[32px] gap-[16px] relative">
              <Image
                src={border2}
                alt="border2"
                className="absolute top-[-2%] left-0 w-[524.404px] h-[614.859px]"
              />
              <h1 className="text-center text-[30px] font-bold font-creative-block text-[#FFFFE3] leading-[30px] tracking-[-0.6px]">
                Get Started
              </h1>
              <Image src={line2} alt="line2" />
              <div className="flex flex-col gap-[16px] items-center">
                <div className="flex flex-col gap-[16px]">
                  {getStarted.map(item => (
                    <div
                      key={item.id}
                      className={`flex items-center gap-[16px] py-[10px] px-[16px]
                     md:mx-[16px]
                    `}
                    >
                      <div className="min-h-[40px] min-w-[40px] relative flex justify-center items-center ">
                        <Image
                          src={itemBg}
                          alt="item"
                          layout="fill"
                          objectFit="cover"
                          className="z-[1]"
                        />
                        <span className="z-[2] text-[20px] font-bold text-[#FFFFE3]">
                          {item.id}
                        </span>
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <h1 className="text-[#FFFFE3] text-[14px] leading-[20px] font-creative-block font-bold">
                          {item.title}
                        </h1>
                        <p className="text-[14px] leading-[20px] text-[#BEAFA5] font-creative-block">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <ButtonLoginTwitter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
