"use client"
import React from 'react'
import Image from 'next/image'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'
import screw from '@/images/navbar/screw.svg'



export default function ConnectButton() {

  const { open } = useWeb3Modal()
  const { address, isConnected } = useAccount()

  return (
    <>


      <button onClick={() => open()} className='bg-[#ECDBCE] px-[16px] py-[12px] md:min-w-[216px] min-w-[161px] relative'>
        <Image
          draggable={false}
          src={screw}
          alt='screw'
          className='absolute top-[5px] left-[4px]'
        />
        <Image
          draggable={false}
          src={screw}
          alt='screw'
          className='absolute top-[5px] right-[4px]'
        />
        <Image
          draggable={false}
          src={screw}
          alt='screw'
          className='absolute bottom-[5px] left-[4px]'
        />
        <Image
          draggable={false}
          src={screw}
          alt='screw'
          className='absolute bottom-[5px] right-[4px]'
        />
        {
          address ? (
            <span className='text-[#371F0E] md:text-[20px] text-[14px] font-bold leading-[20px] [text-shadow:0px_2px_0px_rgba(0,0,0,0.25)]'>
              {address.slice(0, 6)}...{address.slice(-4)}
            </span>
          ) : (
            <span className='text-[#371F0E] md:text-[20px] text-[14px] font-bold leading-[20px] [text-shadow:0px_2px_0px_rgba(0,0,0,0.25)]'>Connect Wallet</span>
          )
        }
      </button>

    </>
  )
}