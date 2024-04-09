'use client'

import Image from 'next/image'
import { useState } from 'react'

import aboutMobile from '@/images/about/about-mobile.png'
import about from '@/images/about/about.png'
import btnNextMobile from '@/images/about/btn-next-mobile.png'
import btnNext from '@/images/about/btn-next.png'
import btnPrevDisabledMobile from '@/images/about/btn-prev-disabled-mobile.png'
import btnPrevDisabled from '@/images/about/btn-prev-disabled.png'
import btnPrevMobile from '@/images/about/btn-prev-mobile.png'
import btnPrev from '@/images/about/btn-prev.png'
import frameMobile from '@/images/about/frame-mobile.png'
import frame from '@/images/about/frame.png'
import Item from './Item'

// import Swiper core and required modules
import SwiperCore from 'swiper/core'
import { A11y, Autoplay, Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

interface IProps {
  className?: string
}

const About: React.FC<IProps> = ({ className }) => {
  const [index, setIndex] = useState<number>(0)
  const [swiper, setSwiper] = useState<SwiperCore | null>()

  const disabledBtnPrev = index === 0
  const disabledBtnNext = index === 3

  return (
    <div id="about" className="w-full h-[711px] relative flex items-center justify-center">
      <Image
        className="absolute inset-0 w-full hidden md:block h-[711px] object-cover z-0"
        src={about}
        alt="about"
        draggable={false}
      />
      <Image
        className="w-full md:hidden absolute inset-0 block h-[711px] object-cover z-0"
        src={aboutMobile}
        alt="aboutMobile"
        draggable={false}
      />
      <div
        className={`relative w-full max-w-[1440px] mx-auto items-center justify-center z-10 flex flex-row gap-[60px] ${className}`}
      >
        <Image
          className="md:block hidden"
          src="/images/about/cat.png"
          alt=""
          width={528}
          height={528}
        />
        <div className=" px-4 md:px-0 w-full md:max-w-[585px] flex justify-center md:justify-start flex-col ">
          {/* Scrollbar */}
          <div className="flex gap-[6px] mb-[48px] md:mb-[80px]">
            {Array(4)
              .fill({})
              .map((_, i) => (
                <div
                  key={i}
                  className={`w-[80px] h-[4px] transition`}
                  style={{
                    backgroundColor: i === index ? '#F36D0B' : 'rgba(247, 247, 244, 0.40)'
                  }}
                />
              ))}
          </div>

          <div className="flex items-center justify-start mb-[40px]">
            <Image className=" hidden md:block" src={frame} alt="frame" draggable={false} />
            <Image className=" md:hidden" src={frameMobile} alt="frameMobile" draggable={false} />
          </div>

          <div className={`flex`}>
            <Swiper
              modules={[Scrollbar, A11y, Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              onSlideChange={item => setIndex(item.activeIndex)}
              onSwiper={(swiper: any) => setSwiper(swiper)}
            >
              <SwiperSlide>
                <Item>
                  <p>The first omnichain memecoin, powered by Axelar.</p>
                  <p>
                    🤖🐱 STEP INTO THE FUTURE OF MEMES WITH MECHA – YOUR AI-POWERED, MULTILINGUAL,
                    AND MUSICALLY TALENTED FELINE COMPANION! 🎤🗣️ ENGAGE IN PURR-FECT CONVERSATIONS
                    OR UNLEASH THE BEATS AS MECHA TALKS AND SINGS BACK TO YOU IN A MULTITUDE OF
                    LANGUAGES AND VOICES!
                  </p>
                </Item>
              </SwiperSlide>
              <SwiperSlide>
                <Item>
                  <p>
                    The first omnichain 🎉💬 Tired of ordinary memes? Enter the world of interactive
                    hilarity with Mecha – the meme that not only listens but responds with a melodic
                    twist. Chat with this cybernetic kitty, and watch as it transforms your words
                    into a symphony of laughter! powered by Axelar.
                  </p>
                </Item>
              </SwiperSlide>
              <SwiperSlide>
                <Item>
                  <p>
                    🤣💭 Imagine shooting the breeze with Mecha in English, then switching to
                    French, Spanish, or even Klingon – because why not? This meme sensation breaks
                    language barriers faster than you can say &quot;Meow&lsquo;s it going?&quot;
                  </p>
                </Item>
              </SwiperSlide>
              <SwiperSlide>
                <Item>
                  <p>
                    🕹️🤖 Chat, laugh, and sing your way into the future of meme entertainment! Mecha
                    is not just a meme; it&lsquo;s a virtual companion that&lsquo;s always ready to
                    chat and croon in the language of your choice. Your memes will never be the same
                    again! 🌐🎤
                  </p>
                </Item>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* Navigation arrows */}
          <div className={`fixed mt-[32px] md:mt-[80px] flex items-center gap-[19px]`}></div>
          <div className={` mt-[32px] md:mt-[80px] flex items-center gap-[19px]`}>
            <SlidePrevButton disabled={disabledBtnPrev} swiper={swiper} />
            <SlideNextButton disabled={disabledBtnNext} swiper={swiper} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

interface BtnIProps {
  disabled: boolean
  swiper?: SwiperCore | null
}

const SlidePrevButton: React.FC<BtnIProps> = ({ disabled, swiper }) => {
  return (
    <button
      onClick={() => swiper && swiper?.slidePrev()}
      className={`${disabled ? '' : 'hover:opacity-80'} relative  cursor-pointer transition`}
    >
      {disabled ? (
        <>
          <Image
            className="hidden md:block"
            src={btnPrevDisabled}
            alt="btnPrevDisabled"
            draggable={false}
          />
          <Image
            className=" md:hidden"
            src={btnPrevDisabledMobile}
            alt="btnPrevDisabledMobile"
            draggable={false}
          />
        </>
      ) : (
        <>
          <Image className=" hidden md:block" src={btnPrev} alt="btnPrev" draggable={false} />
          <Image
            className="!w-[182px] !h-[52px] md:hidden"
            src={btnPrevMobile}
            alt="btnPrevMobile"
            draggable={false}
          />
        </>
      )}
    </button>
  )
}

const SlideNextButton: React.FC<BtnIProps> = ({ disabled, swiper }) => {
  return (
    <button
      onClick={() => swiper && swiper?.slideNext()}
      className={`${disabled ? '' : 'hover:opacity-80'} relative cursor-pointer transition`}
    >
      <Image className="hidden md:block" src={btnNext} alt="btnNext" />
      <Image className=" md:hidden" src={btnNextMobile} alt="btnNextMobile" />
    </button>
  )
}
