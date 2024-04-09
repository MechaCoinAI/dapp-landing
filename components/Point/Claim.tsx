'use client'
import { useGetClaimedPoint } from '@/hooks/useGetClaimedPoints'
import { useGetTweet } from '@/hooks/useGetTweet'
import ScrewSVG from '@/images/meow-ai/screw.svg'
import borderClaim from '@/images/point/borderClaim.svg'
import borderClaimMB from '@/images/point/borderClaimMB.svg'
import gear1 from '@/images/point/gear.svg'
import gear2 from '@/images/point/gear2.svg'
import paw1 from '@/images/point/paw.svg'
import paw2 from '@/images/point/paw2.svg'
import paw3 from '@/images/point/paw3.svg'
import paw4 from '@/images/point/paw4.svg'
import star from '@/images/point/star.svg'
import { twitterServices } from '@/service/twitterServices'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { formatPoint } from '@/utils/lib'

type Session = {
  status: string
  data: any
}

const Claim = () => {
  const id: any = typeof window !== 'undefined' ? localStorage.getItem('id') : null
  const { data: session, status } = useSession()
  const { point, getClaimedPoints } = useGetClaimedPoint(id)
  const { tweet, getTweet } = useGetTweet(id)

  const handleClaimPoint = async (id: string) => {
    if (status !== 'authenticated') {
      toast.error('Please login to claim point')
      return
    }
    try {
      const res = await twitterServices.claimPoints({ user_id: id })
      getClaimedPoints()
      toast.success('Claim point success')
    } catch (error: any) {
      toast.error(error.data.message)
    }
  }

  useEffect(() => {
    if (!id) return
    getClaimedPoints()
    getTweet()
  }, [session])

  useEffect(() => {
    const intervalCall = setInterval(() => {
      if (!id) return
      getClaimedPoints()
      getTweet()
    }, 300000)
    return () => {
      // clean up
      clearInterval(intervalCall)
    }
  }, [])

  return (
    <div className="w-full justify-center items-center md:bg-[url(/images/point/backgroundClaim.png)] bg-[url(/images/point/backgroundClaimMB.png)] bg-cover pt-[64px] pb-[112.51px] flex flex-col gap-[48px] mt-[112px] md:mt-0 px-[16px] md:px-0">
      <h1 className="text-[#FFFFE3] font-creative-block text-[40px] leading-[40px] font-bold tracing-[-0.8px]">
        Claim your points
      </h1>
      <div className="h-[312px] md:h-[400px] bg-[#0A0905] rounded-[24px] md:p-[24px] p-[18.7px] z-[1] items-center flex flex-col md:px-[32px] md:max-w-[460px] w-full max-w-[360px] md:gap-[32px] gap-[25px] relative">
        <Image src={gear1} alt="gear1" className="absolute top-[-20px] right-[-20px]" />
        <Image src={gear2} alt="gear2" className="absolute top-[30%] left-[-11px]" />
        <Image src={paw1} alt="paw1" className="absolute top-[32px] left-[42px]" />
        <Image src={paw2} alt="paw2" className="absolute top-[10%] right-[25%]" />
        <Image src={paw3} alt="paw3" className="absolute top-[30%] right-[10%]" />
        <Image src={paw4} alt="paw4" className="absolute bottom-[19px] right-[30%]" />
        <div className="absolute md:w-[490px] w-[383.478px] md:h-[422px] h-[330.261] bottom-[-12px] right-[-21px]">
          <Image src={borderClaim} alt="borderClaim" objectFit="cover" className="md:flex hidden" />
          <Image
            src={borderClaimMB}
            alt="borderClaim"
            objectFit="cover"
            className="md:hidden flex"
          />
        </div>
        <div className="flex flex-col md:gap-[24px] gap-[18px] items-center mt-[21.3px] md:mt-0">
          <div className="md:w-[62px] md:h-[62px] w-[47px] h-[47px]">
            <Image src={star} alt="star" objectFit="cover" />
          </div>
          <div className="flex flex-col md:gap-[16px] gap-[12.5px] items-center">
            <h1 className="text-[#F36D0B] md:text-[40px] text-[32px] font-bold font-creative-block tracking-[-0.32px] md:tracking-[-0.4px] md:h-auto h-[33px]">
              {point ? '+' + formatPoint(point.point_not_claimed_yet) + ' Points' : '0 Points'}
            </h1>
            <span className="text-[#FFFFE3] md:text-[16px] text-[12px] font-bold font-creative-block tracking-[-0.12px] md:tracking-[-0.16px]">
              Claim Your Rewards Now!
            </span>
          </div>
        </div>
        <div className="flex flex-col md:gap-[32px] gap-[24px] items-center w-full ">
          <button
            onClick={() => handleClaimPoint(id)}
            className="bg-[#F36D0B] text-[#371F0E] md:py-[12px] md:px-[16px] py-[9.39px] px-[12.52px] w-full relative md:h-auto h-[38px]"
          >
            <Image
              src={ScrewSVG}
              width={6}
              height={6}
              alt=""
              className="absolute left-[4px] top-[5px]"
            />
            <Image
              src={ScrewSVG}
              width={6}
              height={6}
              alt=""
              className="absolute left-[4px] bottom-[5px]"
            />
            <Image
              src={ScrewSVG}
              width={6}
              height={6}
              alt=""
              className="absolute right-[4px] top-[5px]"
            />
            <Image
              src={ScrewSVG}
              width={6}
              height={6}
              alt=""
              className="absolute right-[4px] bottom-[5px]"
            />
            <span className="[text-shadow:0px_2px_0px_rgba(0,0,0,0.25)] md:text-[24px] text-[18px] leading-[18px] md:leading-[24px] font-bold ">
              You can claim {point ? '+' + formatPoint(point.points_has_claim) : '+0'}
            </span>
          </button>
          <div className="flex items-center justify-between w-full max-w-[422px] z-[1]">
            <span className="md:text-[18px] md:leading-[28px] text-[14px] leading-[21px] font-normal md:tracking-[-0.18px] tracking-[-0.14px] font-creative-block text-[#BEAFA5]">
              Your total points:
            </span>
            <span className="text-[24px] leading-[32px] font-bold tracking-[-0.24px] font-creative-block text-[#BEAFA5]">
              {point ? formatPoint(point.points_claimed) : '0'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Claim
