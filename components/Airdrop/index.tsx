"use client";
import Image from 'next/image'
import React from 'react'

import bgAirdrop from '@/images/airdrop/bg.png';
import bgContent from '@/images/airdrop/bg-content.png';
import btnAirdrop from '@/images/airdrop/airdrop.png';
import bgBorder from '@/images/airdrop/bg-border.png';
import bgBtnConnect from '@/images/airdrop/button.png'
import light from '@/images/airdrop/light.svg'
import light_back from '@/images/airdrop/light-bg.svg';
import light_mobile from '@/images/airdrop/light-mobile.svg'
import bg_mobile from '@/images/airdrop/bg-mobile.png'
import bg_content_mobile from '@/images/airdrop/bg-content-mobile.png';
import { toast } from 'react-toastify';


type Props = {}

const Airdrop = (props: Props) => {
    return (
        <div className='w-full h-[883px] lg:h-[904px] relative'>
            {/* background desktop */}
            <Image className='w-full h-full hidden md:block' layout='fill' objectFit='cover' objectPosition='bottom' src={bgAirdrop} alt='background' priority />
            {/* background mobile */}
            <Image className='w-full h-full block md:hidden' layout='fill' objectFit='cover' src={bg_mobile} alt='background' priority />

            <div className='w-full h-[524px] lg:w-[940px] lg:h-[524px] absolute top-[59%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]'>
                {/* desktop */}
                <Image className='w-full h-full hidden md:block' src={bgContent} alt='bg content' layout='fill' objectFit='contain' />
                {/* mobile */}
                <Image className='w-full h-full block md:hidden' src={bg_content_mobile} alt='bg content' layout='fill' objectFit='contain' />

                <div className='relative flex flex-col space-y-8 pb-12 pt-12 lg:pt-[58px]'>
                    <div className='relative w-[166px] h-[56px] lg:w-[281px] lg:h-[72px] mx-auto cursor-pointer md:mt-[40px] lg:mt-0'>
                        <Image width={0} height={0} sizes='100vw' className='w-full h-full' src={btnAirdrop} alt='btn airdrop' priority />
                        <span
                            style={{
                                textShadow: '0px 2px 0px rgba(0, 0, 0, 0.25)'
                            }}
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0A0905] text-[24px] lg:text-[48px] font-bold'>AIRDROP
                        </span>
                    </div>
                    <div className='w-full md:w-[775px] mx-auto'>
                        <p className='hidden lg:block text-[#BEAFA5] text-[16px] lg:text-[24px] font-normal text-center w-4/5 lg:w-full mx-auto'>
                            A total of <span className='text-[#FFFFE3]'>25,000,000,000</span> (25% total supply) <br/> Addresses on Axelarscan can claim.
                        </p>
                        <p className='block lg:hidden text-[#BEAFA5] text-[16px] lg:text-[24px] font-normal text-center w-4/5 lg:w-full mx-auto'>
                            A total of <span className='text-[#FFFFE3]'>25,000,000,000</span> <br />
                            <span className='text-center'>(25% total supply)</span> <br/>
                            <span>Addresses on Axelarscan can claim.</span>
                        </p>

                        <div className='w-[382px] md:w-[588px] h-[120px] mx-auto relative mt-[52px] mb-[6.5px] lg:mb-0 lg:mt-4 px-[6px]'>
                            <Image src={bgBorder} alt='border' layout='fill' priority />
                            <ul className='w-full h-full text-[#FFE8D2] flex justify-between px-0 md:px-[20px]'>
                                <li className='px-5 pt-[10px]  md:pr-10 airdrop-item relative'>
                                    <span className='text-[24px] leading-[49.55px] text-center lg:text-[48px] font-bold flex flex-col space-y-[6px]'>88</span>
                                    <span className='text-[14px] block text-center leading-[14px]'>DAYS</span>
                                </li>
                                <li className='px-5 pt-[10px]  md:pr-10 airdrop-item relative'>
                                    <span className='text-[24px] leading-[49.55px] text-center lg:text-[48px] font-bold flex flex-col space-y-[6px] justify-center'>88</span>
                                    <span className='text-[14px] block text-center leading-[14px]'>HOUR</span>

                                </li>
                                <li className='px-5 pt-[10px]  md:pr-10 airdrop-item relative'>
                                    <span className='text-[24px] leading-[49.55px] text-center lg:text-[48px] font-bold flex flex-col space-y-[6px] justify-center'>88</span>
                                    <span className='text-[14px] block text-center leading-[14px]'>MINUTE</span>

                                </li>
                                <li className='pl-5 pr-[10px] pt-[10px] md:pr-0'>
                                    <span className='text-[24px] leading-[49.55px] text-center lg:text-[48px] font-bold flex flex-col space-y-[6px] justify-center'>88</span>
                                    <span className='text-[14px] block text-center leading-[14px]'>SECOND</span>

                                </li>
                            </ul>
                        </div>

                        <div 
                        onClick={
                         () => {
                            toast.info("Mecha will release a public snapshot soon! Meow!")
                         }
                        }
                        className='relative w-[216px] h-[52px] mx-auto lg:mt-4 cursor-pointer '>
                            <Image width={0} height={0} sizes='100vw' className='w-full h-full' src={bgBtnConnect} alt='btn airdrop' priority />
                            <span
                                style={{
                                    textShadow: '0px 2px 0px rgba(0, 0, 0, 0.25)'
                                }}
                                className='absolute text-center w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#371F0E] text-[20px] font-bold'>Check Whitelist
                            </span>
                            <div className='absolute top-0 left-0 w-full h-full bg-[#371F0E] opacity-50'></div>
                        </div>

                    </div>
                </div>
                
            </div>
        
            <div className='hidden lg:block w-[653px] h-[352px] z-[4] absolute mx-auto top-[110px] left-1/2 -translate-x-1/2'>
                <Image src={light} alt='light'/>
            </div>
            <div className='hidden lg:block w-[1458.778px] h-[648px] absolute z-[2] mx-auto top-[110px] left-1/2 -translate-x-1/2'>
                <Image className='w-full h-full'  src={light_back} alt='light back' objectFit='cover' objectPosition='center'/>
            </div>
            
            <div className='block lg:hidden w-full h-[648px] absolute z-[4] mx-auto top-[68px] left-1/2 -translate-x-1/2'>
                <Image src={light_mobile} alt='light back' />
            </div>

            
        </div>
    )
}

export default Airdrop