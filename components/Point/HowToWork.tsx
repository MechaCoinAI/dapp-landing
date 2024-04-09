import vector from '@/images/point/Vector.png'
import vector1 from '@/images/point/vector2.png'
import vector2 from '@/images/point/vector3.png'
import vectorMB from '@/images/point/vectorMB.png'
import line from '@/images/point/line.png'
import eye from '@/images/point/eye.png'
import itemBox from '@/images/point/pointBox.png'
import quote from '@/images/point/quoteIcon.png'
import reply from '@/images/point/replyIcon.png'
import kickback from '@/images/point/kickback.png'

import Image from 'next/image'
import ButtonLoginTwitter from './ButtonLoginTwitter'
const works = [
  {
    title: 'ORIGINAL TWEET',
    content: '30x point multiplier',
    id: 1,
    tooltipTitle: 'Create and post your own tweets about MECHA to earn points',
    icon: eye
  },
  {
    title: 'MECHA QUOTE',
    content: '10x point multiplier',
    id: 2,
    tooltipTitle: 'Quote from MECHA tweets to earn points',
    icon: quote
  },
  {
    title: 'MECHA REPLY',
    content: '1x point multiplier',
    id: 3,
    tooltipTitle: 'Reply on MECHA',
    tooltipTitle1: 'tweets to earn points',
    icon: reply
  },
  {
    title: 'MECHA KICKBACKS',
    content: '1/10 POINTS PER MECHA',
    id: 4,
    tooltipTitle: '',
    icon: kickback
  }
]

const HowToWork = () => {
  return (
    <div className="w-full flex justify-center items-center md:bg-[url(/images/point/background.png)] bg-[url(/images/point/backgroundMB.png)] bg-cover md:mt-[80px] mt-0">
      <div className="w-full md:max-w-[1440px] h-[1166.25px] md:min-h-[846.25px] md:h-[100vh] md:py-[64px] py-[32px] xl:px-[195.6px] px-[6.8px] relative ">
        <div className="text-center font-bold md:text-[40px] text-[#FFFFE3] md:leading-[48px] text-[24px] leading-[24px] tracking-[-0.96px]">
          40% total supply goes to Airdrop
        </div>
        <div className="relative  w-full md:min-w-[1048px] h-[1074.236.5px] md:h-[690.373px]">
          <div className="md:mt-[35px] mt-[28.23px] w-full md:min-w-[1048px] h-[1074.236.5px] md:h-[690.373px] md:bg-[url(/images/point/tab.svg)] bg-[url(/images/point/tabMB.svg)] bg-cover relative z-[2] md:py-[60.65px] py-[67.63px] md:px-[56.4px] px-[41.32px] flex flex-col gap-[32px] text-[#FFFFE3]">
            <div className="md:text-[30px] font-bold text-[#BEAFA5] tracking-[-0.6px] md:leading-[30px] text-[24px leading-[24px] w-full text-center">
              HOW POINTS WORK
            </div>
            <div className="w-full h-[4.247px]">
              <Image src={line} alt="line" objectFit="cover" />
            </div>
            <div className="text-[18px] font-normal leading-[24px]">
              Earning points is simple - just use Twitter! Reply, quote, or tweet out MENTIONING{' '}
              <span className="text-[#f36d0b]">@OmniMechaCoin</span> and{' '}
              <span className="text-[#f36d0b]">$MECHA</span> OR{' '}
              <span className="text-[#f36d0b]">#MECHA</span> AND YOU will automatically be awarded
              points!
            </div>
            <div className="text-[18px] leading-24px font-normal">
              Depending on the type of MECHA, your multiplier will change as follows:
            </div>
            <div className="w-full flex justify-center">
              <div className="w-[650px] flex gap-[16px] flex-wrap">
                {works.map((item: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="w-[317px] h-[58px] flex py-[10px] px-[16px] items-center gap-x-[16px] bg-[#332E2A] rounded-[12px] box relative group"
                    >
                      <div className="w-[24px] h-[24px]">
                        <Image src={item.icon} alt="eye" objectFit="cover" />
                      </div>
                      <div className="">
                        <div className="text-[14px] font-bold leading-normal text-[#FFFFE3]">
                          {item?.title}
                        </div>
                        <div className="text-[14px] leading-normal text-[#BEAFA5] mt-[6px]">
                          {item?.content}
                        </div>
                      </div>
                      <div className="itemBox">
                        <Image
                          src={itemBox}
                          alt="item box"
                          objectFit="cover"
                          layout="fill"
                          className="bg-blend-darken opacity-40"
                        />
                      </div>
                      {item.id == 1 ? (
                        <div className="absolute w-[315px] h-[85px] bg-[url(/images/point/popup.png)] bg-cover pt-[15px] px-[24px] text-[#000] font-bold text-[14px] leading-[20px] bottom-[61px] group-hover:block hidden text-center ">
                          {item.tooltipTitle}
                        </div>
                      ) : item.id == 4 ? (
                        ''
                      ) : (
                        <div
                          className={`absolute w-[246px] h-[83px] bg-[url(/images/point/popup1.png)] bg-cover pt-[15px] px-[36px] text-[#000] font-bold text-[14px] leading-[20px] bottom-[61px]  group-hover:block hidden text-center `}
                        >
                          {item.tooltipTitle}
                          {item.tooltipTitle1 && <div>{item.tooltipTitle1}</div>}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <div className="text-[18px] leading-24px font-normal">
                And remember keep an eye out, there might be additional multipliers at claim...13:37
              </div>
              <div className="text-[18px] leading-24px font-normal w-[93%]">
                Users collect points on Twitter (X), but MECHA has the final say, especially as the
                X algorithm can change.
              </div>
              <div className="flex justify-center">
                {/* <div className="w-[130px] h-[44px] bg-[#ECDBCE] relative cursor-pointer flex justify-center items-center text-[#371F0E] text-[20px] font-bold leading-[20px] [text-shadow:_0px_2px_0px_rgba(0,0,0,0.25)]">
                  try now
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
                </div> */}
                <ButtonLoginTwitter titleButton='Try Now'/>
              </div>
            </div>
            <div className="lg:hidden absolute z-[2] vector w-[58.084px] h-[58.189px] top-[24.79px] right-[-6.68px]">
              <Image src={vectorMB} alt="vector setting" objectFit="cover" />
            </div>
            <div className="md:w-[89.552px] md:h-[89.712px] absolute top-[300.4px] lg:hidden left-[-248.75px] vectorRo">
              <Image src={vector2} alt="vector setting" objectFit="cover" />
            </div>
            <div className="md:w-[209.294px] md:h-[209.669px] absolute md:left-[-127.85px] hidden lg:block md:bottom-[206.06px] z-[2] vector">
              <Image src={vector} alt="vector setting" objectFit="cover" />
            </div>
          </div>
          <div className="md:w-[138.062px] md:h-[138.31px] absolute top-[-27.97px] hidden lg:block right-[-26.87px] z-[2] vector">
            <Image src={vector1} alt="vector setting" objectFit="cover" />
          </div>
          <div className="md:w-[89.552px] md:h-[89.712px] absolute top-[-20.56px] hidden lg:block right-[52.16px] vectorRo z-[0]">
            <Image src={vector2} alt="vector setting" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HowToWork
