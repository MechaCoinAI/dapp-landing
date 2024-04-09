'use client'
import close from '@/images/point/close.png'
import dot from '@/images/point/dot.png'
import downIcon from '@/images/point/downIcon.png'
import eye from '@/images/point/eye.png'
import heart from '@/images/point/heart.png'
import iconPoint from '@/images/point/iconPoint.png'
import lineTip from '@/images/point/lineTip.png'
import itemBox from '@/images/point/pointBox.png'
import quotesIcon from '@/images/point/quotes.png'
import share from '@/images/point/share.png'

import Image from 'next/image'
import { useRef, useState } from 'react'

function formatCash(str: string) {
  return str
    .split('')
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ',') + prev
    })
}

const Calculator = () => {
  const audioPlayer = useRef<any>()
  const [tweetActive, setTweetActive] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [view, setView] = useState('10000')
  const [like, setLike] = useState('30000')
  const [replies, setReplies] = useState('50000')
  const [quotes, setQuotes] = useState('25000')
  const [retweets, setRetweets] = useState('70000')
  const total = Number(like) + Number(view) + Number(quotes) + Number(replies)
  const menu = [
    {
      id: 0,
      title: 'Original Tweet'
    },
    {
      id: 1,
      title: 'MECHA Quote'
    },
    {
      id: 2,
      title: 'MECHA Reply'
    },
    {
      id: 3,
      title: 'MECHA Kickbacks'
    }
  ]

  const showDescTotal = (type: number) => {
    switch (type) {
      case 0:
        return 'Minimum of 100,000'
      case 1:
        return 'MAXIMUM OF 1,000,000'
      case 2:
        return 'MAXIMUM OF 25,000'
      default:
        return 'NO LIMITS'
    }
  }
  return (
    <div className="w-full flex justify-center items-center md:bg-[url(/images/point/calBackground.png)] bg-[url(/images/point/calBackgroundMB.png)] bg-cover">
      <div className="w-full md:max-w-[1440px] md:min-h-[930.25px] md:h-[100vh] h-[1297.25px] md:py-[94px] py-[32px] px-[6.8px] relative mt-[12px] md:mt-0 flex flex-col items-center">
        <div className="text-center font-bold md:text-[40px] text-[#FFFFE3] md:leading-[48px] text-[24px] leading-[24px] tracking-[-0.96px]">
          Expected Point Calculator
        </div>
        <div className="md:mt-[48.6px] mt-[36.5px] w-full md:max-w-[840px] h-[1201.14px] md:h-[663.104px] md:bg-[url(/images/point/tab1.png)] bg-[url(/images/point/calTabMB.png)] bg-cover relative z-[1] md:py-[63.38px] md:px-[67.52px] px-[41.32px] py-[59.95px] flex flex-col gap-[32px] text-[#FFFFE3]">
          <div className="md:flex gap-x-[60px]">
            <div className="w-[354px] h-[410px] flex-col flex gap-[32px]">
              <div className="flex items-center gap-[32px]">
                <div className="text-[#FFFFFF] text-[24px]">Tweet Type</div>
                <div
                  className="w-[191px] h-[44px] flex justify-between items-center bg-[rgba(236,219,206,0.10)] border-[1px] border-solid border-[#BEAFA5] rounded-[4px] relative py-[10px] px-[16px] text-[14px] cursor-pointer"
                  onClick={() => setOpenModal(!openModal)}
                >
                  {menu
                    .filter((item: any) => item.id == tweetActive)
                    .map((item: any, index: number) => {
                      return item.title
                    })}
                  <div className="w-[24px] h-[24px]">
                    <Image src={downIcon} alt="downIcon" objectFit="cover" />
                  </div>
                  {openModal && (
                    <div
                      className="w-full absolute left-0 top-[51px] z-[2]"
                      onClick={e => e.stopPropagation()}
                    >
                      {menu.map((item: any, index: number) => {
                        return (
                          <div
                            key={index}
                            onClick={() => {
                              setTweetActive(item.id)
                              setOpenModal(false)
                            }}
                            className={`w-[191px] h-[40px] border-solid rounded-[4px] border-[1px] border-[#BEAFA5] flex justify-center cursor-pointer ${
                              tweetActive == item.id
                                ? 'bg-[rgba(190,175,165,0.20)] backdrop-blur-[10px]'
                                : 'bg-[#000]'
                            } text-[14px] font-normal leading-[20px] text-[#FFFFE3] px-[16px] py-[10px]`}
                          >
                            {item.title}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-y-[24px]" onClick={() => setOpenModal(false)}>
                <div className="flex-col flex gap-y-[8px]">
                  <div className="flex items-center">
                    <div className="w-[24px] h-[24px] mr-[16px]">
                      <Image src={eye} alt="eye" objectFit="cover" />
                    </div>
                    <div className="text-[14px] font-bold leading-normal text-[#FFFFE3] uppercase">
                      Views
                    </div>
                  </div>
                  <div className="flex gap-x-[16px] items-center">
                    <div className="w-[11px] h-[15px]">
                      <Image src={dot} alt="dot" objectFit="cover" />
                    </div>
                    <div className="w-[256px] h-[24px] relative z-[1] flex items-center viewPro">
                      <input
                        type="range"
                        defaultValue={view}
                        // value={item.value}
                        onChange={e => setView(e.target.value)}
                        className="progress relative z-[1] cursor-pointer"
                        min="0"
                        step="10000"
                        max="100000"
                      />
                      <div
                        className={`rangeLine absolute z-0 h-[2px] left-0 bg-[#ffffe3] `}
                        style={{ width: `${(Number(view) / 100000) * 100}%` }}
                      >
                        <div className="w-full relative tip">
                          <div className="absolute text-[#BEAFA5] right-[-25px] bottom-[-35px] text-[14px] font-normal leading-[21px]">
                            {view}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[#BEAFA5] text-[14px] font-normal leading-normal">
                      100k+
                    </div>
                  </div>
                </div>
                <div className="flex-col flex gap-y-[8px]">
                  <div className="flex items-center">
                    <div className="w-[24px] h-[24px] mr-[16px]">
                      <Image src={heart} alt="eye" objectFit="cover" />
                    </div>
                    <div className="text-[14px] font-bold leading-normal text-[#FFFFE3] uppercase">
                      Likes
                    </div>
                  </div>
                  <div className="flex gap-x-[16px] items-center">
                    <div className="w-[11px] h-[15px]">
                      <Image src={dot} alt="dot" objectFit="cover" />
                    </div>
                    <div className="w-[256px] h-[24px] relative flex items-center likePro">
                      <input
                        type="range"
                        defaultValue={like}
                        // value={item.value}
                        onChange={e => setLike(e.target.value)}
                        className="progress cursor-pointer"
                        min="0"
                        step="10000"
                        max="100000"
                      />
                      <div
                        className={`rangeLine absolute h-[2px] left-0 bg-[#ffffe3] `}
                        style={{ width: `${(Number(like) / 100000) * 100}%` }}
                      >
                        <div className="w-full relative tip">
                          <div className="absolute text-[#BEAFA5] right-[-25px] bottom-[-35px] text-[14px] z-0 font-normal leading-[21px]">
                            {like && Number(like) / 100}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[#BEAFA5] text-[14px] font-normal leading-normal">1k+</div>
                  </div>
                </div>
                <div className="flex-col flex gap-y-[8px]">
                  <div className="flex items-center">
                    <div className="w-[24px] h-[24px] mr-[16px]">
                      <Image src={share} alt="eye" objectFit="cover" />
                    </div>
                    <div className="text-[14px] font-bold leading-normal text-[#FFFFE3] uppercase">
                      REPLIES
                    </div>
                  </div>
                  <div className="flex gap-x-[16px] items-center">
                    <div className="w-[11px] h-[15px]">
                      <Image src={dot} alt="dot" objectFit="cover" />
                    </div>
                    <div className="w-[256px] h-[24px] relative flex items-center repliesPro">
                      <input
                        type="range"
                        defaultValue={replies}
                        // value={item.value}
                        onChange={e => setReplies(e.target.value)}
                        className="progress cursor-pointer"
                        min="0"
                        step="25000"
                        max="250000"
                      />
                      <div
                        className={`rangeLine absolute h-[2px] left-0 bg-[#ffffe3] `}
                        style={{
                          width: `${(Number(replies) / 250000) * 100}%`
                        }}
                      >
                        <div className="w-full relative tip">
                          <div className="absolute text-[#BEAFA5] right-[-25px] bottom-[-35px] text-[14px] font-normal leading-[21px]">
                            {Number(replies) / 250}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[#BEAFA5] text-[14px] font-normal leading-normal">1K+</div>
                  </div>
                </div>
                <div className="flex-col flex gap-y-[8px]">
                  <div className="flex items-center">
                    <div className="w-[24px] h-[24px] mr-[16px]">
                      <Image src={quotesIcon} alt="eye" objectFit="cover" />
                    </div>
                    <div className="text-[14px] font-bold leading-normal text-[#FFFFE3] uppercase">
                      Quotes/Retweets
                    </div>
                  </div>
                  <div className="flex gap-x-[16px] items-center">
                    <div className="w-[11px] h-[15px]">
                      <Image src={dot} alt="dot" objectFit="cover" />
                    </div>
                    <div className="w-[256px] h-[24px] relative flex items-center quotesPro">
                      <input
                        type="range"
                        defaultValue={quotes}
                        onChange={e => setQuotes(e.target.value)}
                        // value={item.value}
                        className="progress cursor-pointer"
                        min="0"
                        step="5000"
                        max="50000"
                      />
                      <div
                        className={`rangeLine absolute h-[2px] left-0 bg-[#ffffe3] `}
                        style={{ width: `${(Number(quotes) / 50000) * 100}%` }}
                      >
                        <div className="w-full relative tip">
                          <div className="absolute text-[#BEAFA5] right-[-25px] bottom-[-35px] text-[14px] font-normal leading-[21px]">
                            {Number(quotes) / 500}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[#BEAFA5] text-[14px] font-normal leading-normal">
                      100+
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1px] h-[410px] bg-[#332E2A] hidden md:block"></div>
            <div
              onClick={() => setOpenModal(false)}
              className="md:w-[236px] w-full h-[452.24px] md:h-[454.24px] flex flex-col md:gap-[32px] gap-[24px] mt-[32px] md:mt-0 "
            >
              <div className="text-[30px] font-bold text-[#FFFFE3] tracking-[-0.6px] leading-[30px] w-full text-center uppercase">
                Mecha
              </div>
              <div className="w-full h-[4.247px]">
                <Image src={lineTip} alt="line" objectFit="cover" />
              </div>
              <div className="w-[full] flex flex-col gap-[16px] flex-wrap">
                <div className="w-full h-[58px] flex py-[10px] px-[16px] items-center gap-x-[16px] bg-[#332E2A] rounded-[12px] box">
                  <div className="itemBox">
                    <Image
                      src={itemBox}
                      alt="item box"
                      layout="fill"
                      objectFit="cover"
                      className="bg-blend-darken opacity-[40%]"
                    />
                  </div>
                  <div className="w-[24px] h-[24px]">
                    <Image src={iconPoint} alt="eye" objectFit="cover" />
                  </div>
                  <div className="">
                    <div className="text-[14px] font-bold leading-normal text-[#FFFFE3]">
                      {formatCash(view.toString())} points
                    </div>
                    <div className="text-[14px] leading-normal text-[#BEAFA5] mt-[6px]">
                      1 point per view
                    </div>
                  </div>
                </div>
                <div className="w-full h-[58px] flex py-[10px] px-[16px] items-center gap-x-[16px] bg-[#332E2A] rounded-[12px] box">
                  <div className="itemBox">
                    <Image
                      src={itemBox}
                      alt="item box"
                      layout="fill"
                      objectFit="cover"
                      className="bg-blend-darken opacity-[40%]"
                    />
                  </div>
                  <div className="w-[24px] h-[24px]">
                    <Image src={heart} alt="eye" objectFit="cover" />
                  </div>
                  <div className="">
                    <div className="text-[14px] font-bold leading-normal text-[#FFFFE3]">
                      {formatCash(like.toString())} points
                    </div>
                    <div className="text-[14px] leading-normal text-[#BEAFA5] mt-[6px]">
                      100 pointS per Like
                    </div>
                  </div>
                </div>
                <div className="w-full h-[58px] flex py-[10px] px-[16px] items-center gap-x-[16px] bg-[#332E2A] rounded-[12px] box">
                  <div className="itemBox">
                    <Image
                      src={itemBox}
                      alt="item box"
                      layout="fill"
                      objectFit="cover"
                      className="bg-blend-darken opacity-[40%]"
                    />
                  </div>
                  <div className="w-[24px] h-[24px]">
                    <Image src={share} alt="eye" objectFit="cover" />
                  </div>
                  <div className="">
                    <div className="text-[14px] font-bold leading-normal text-[#FFFFE3]">
                      {formatCash(replies.toString())} points
                    </div>
                    <div className="text-[14px] leading-normal text-[#BEAFA5] mt-[6px]">
                      250 pointS per Reply
                    </div>
                  </div>
                </div>
                <div className="w-full h-[58px] flex py-[10px] px-[16px] items-center gap-x-[16px] bg-[#332E2A] rounded-[12px] box">
                  <div className="itemBox">
                    <Image
                      src={itemBox}
                      alt="item box"
                      layout="fill"
                      objectFit="cover"
                      className="bg-blend-darken opacity-[40%]"
                    />
                  </div>
                  <div className="w-[24px] h-[24px]">
                    <Image src={quotesIcon} alt="eye" objectFit="cover" />
                  </div>
                  <div className="">
                    <div className="text-[14px] font-bold leading-normal text-[#FFFFE3]">
                      {formatCash(quotes.toString())} points
                    </div>
                    <div className="text-[14px] leading-normal text-[#BEAFA5] mt-[6px]">
                      500 pointS per Quote
                    </div>
                  </div>
                </div>
                {/* <div className="w-full h-[58px] flex py-[10px] px-[16px] items-center gap-x-[16px] bg-[#332E2A] rounded-[12px] box">
                  <div className="itemBox">
                    <Image
                      src={itemBox}
                      alt="item box"
                      layout="fill"
                      objectFit="cover"
                      className="bg-blend-darken opacity-[40%]"
                    />
                  </div>
                  <div className="w-[24px] h-[24px]">
                    <Image src={tweet} alt="eye" objectFit="cover" />
                  </div>
                  <div className="">
                    <div className="text-[14px] font-bold leading-normal text-[#FFFFE3]">
                      {formatCash(retweets.toString())} points
                    </div>
                    <div className="text-[14px] leading-normal text-[#BEAFA5] mt-[6px]">
                      1K pointS per RETWEET
                    </div>
                  </div>
                </div> */}
                <div className="w-full px-[16px] py-[10px] rounded-[12px] border-[1px] border-solid border-[#BEAFA5] flex items-center gap-x-[16px]">
                  <div className="w-[24px] h-[24px]">
                    <Image src={close} alt="close icon" objectFit="cover" />
                  </div>
                  <div className="tetx-[#FFFFE3] text-[14px] leading-[20px] font-bold uppercase">
                    {tweetActive == 0
                      ? '30x for tweets'
                      : tweetActive == 1
                        ? '10x for QUOTES'
                        : tweetActive == 2
                          ? 'x1 for REPLIES'
                          : '1/10 for KICKBACKs'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col md:justify-center md:items-center md:gap-[32px] gap-[16px]">
            <div className="text-[24px] font-normal leading-[30px] tracking-[-0.24px] text-[#FFFFE3]">
              TOTAL POINTS
            </div>
            <div className="text-[#BEAFA5] font-normal leading-[20px] text-[14px]">
              <div className="text-[#F36D0B] text-[30px] font-bold leading-[30px] tracking-[-0.6px]">
                {tweetActive == 0
                  ? formatCash((total * 30).toString())
                  : tweetActive == 1
                    ? total * 10 > 1000000
                      ? formatCash('1000000')
                      : formatCash((total * 10).toString())
                    : tweetActive == 2
                      ? total > 25000
                        ? formatCash('25000')
                        : formatCash(total.toString())
                      : formatCash((total / 10).toString())}
              </div>
              <div>{showDescTotal(tweetActive)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Calculator
