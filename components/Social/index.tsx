import Image from 'next/image'


import cat2 from '@/images/banner/cat.svg'
import television_mb from '@/images/social/TV-mobile.png'
import bgSocialMobile from '@/images/social/bg-social-mobile.png'
import bgSocial from '@/images/social/bg-social.png'
import ic_email from '@/images/social/email.svg'
import ic_telegram from '@/images/social/telegram.svg'
import television from '@/images/social/television.png'
import ic_twitter from '@/images/social/twitter.svg'
import Link from 'next/link'


type Props = {}

const Socials = (props: Props) => {
  return (
    <div className='w-full h-[617px] lg:h-[1237px] relative'>
      <Image className='w-full h-full hidden md:block' src={bgSocial} alt='social' layout='fill' objectFit='cover' priority />
      <Image className='w-full h-full block md:hidden' src={bgSocialMobile} alt='social' layout='fill' priority />

      <div className='w-full lg:w-[759px] h-full absolute left-1/2 -translate-x-1/2 pt-[60px] z-20'>
        <div className='w-[178px] h-[173px] lg:w-[460px] lg:h-[460px] md:mb-[60px] mb-[15px] z-10 rotate-[-4.183deg] mx-auto'>
          <Image src={cat2} alt='cat' priority />
        </div>
        <div className='w-[376px] h-[376px] lg:w-[759px] lg:h-[759px] relative z-[-1] mx-auto mt-[-77px] lg:mt-[-202px]'>
          <Image className='w-full h-full hidden md:block' src={television} alt='television' layout='fill' objectFit='cover' priority />
          <Image className='w-full h-full block md:hidden' src={television_mb} alt='social' layout='fill' priority />

          <div className='w-[206px] h-[112px] lg:w-[431px] lg:h-[359px] absolute top-[21%] left-[17%]'>
            <h3 className='text-[24px] lg:mt-[48px] lg:text-[48px] font-bold text-[#F36D0B] text-center leading-[48px]'>Contact</h3>
            <div className='flex flex-col px-4 lg:px-[32px] items-start justify-center lg:mt-9'>
              <div className='flex items-center space-x-1 lg:space-x-4'>
                <Link
                  href={'https://twitter.com/OmniMechaCoin'}
                  target='_blank'
                  className='w-[36px] h-[36px] lg:w-[64px] lg:h-[64px] cursor-pointer'>
                  <Image width={0} height={0} sizes='100vw' className='h-full w-full' src={ic_twitter} alt='twitter' />
                </Link>

                <Link href={'https://twitter.com/OmniMechaCoin'}
                  target='_blank' className='hidden lg:block text-[16px] font-normal leading-[24px] text-[#FFFFE3] max-w-full '>https://twitter.com/OmniMechaCoin</Link>

                <Link href={'https://twitter.com/OmniMechaCoin'}
                  target='_blank' className='block lg:hidden text-[12px] font-normal leading-[19.2px] max-w-full'>
                  <span>https://twitter.com/ <br /> OmniMechaCoin</span>
                </Link>
              </div>
              <div className='flex items-center space-x-1 lg:space-x-4'>
                <Link href={`mailto:contact@mechacoin.ai`} className='w-[36px] h-[36px] lg:w-[64px] lg:h-[64px] cursor-pointer'>
                  <Image width={0} height={0} sizes='100vw' className='h-full w-full' src={ic_email} alt='twitter' />
                </Link>
                <a href={`mailto:contact@mechacoin.ai`} className=' text-[12px] lg:text-[16px] font-normal leading-[24px] text-[#FFFFE3] w-[154px] lg:w-auto'>contact@mechacoin.ai</a>
              </div>
              <div className='flex items-center space-x-1 lg:space-x-4'>
                <Link href={`https://t.me/mechacoin`} className='w-[36px] h-[36px] lg:w-[64px] lg:h-[64px] cursor-pointer'>
                  <Image width={0} height={0} sizes='100vw' className='h-full w-full' src={ic_telegram} alt='twitter' />
                </Link>
                <a href={`https://t.me/mechacoin`} className=' text-[12px] lg:text-[16px] font-normal leading-[24px] text-[#FFFFE3] w-[154px] lg:w-auto'>@mechacoin</a>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-full h-[64px] bg-[#351C12] flex justify-center items-center'>
        <p className='font-chakra-petch text-center text-[#FF9345] text-[16px] font-normal leading-[20.8px]'>©2023 by MECHA. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Socials