'use client'
import Image from 'next/image'
import React, { useCallback, useEffect, useMemo } from 'react'
import screw from '@/images/navbar/screw.svg'
import { useSession, signOut } from 'next-auth/react'
import { twitterServices } from '@/service/twitterServices'
import ModalLogin from './ModalLogin'

type Session = {
  status: string
  data: any
}

type ButtonLoginProps = {
  titleButton?: string
}

const tweetContent = encodeURIComponent(
  '🚀 Earn points effortlessly with @OmniMechaCoin! The first omnichain culture platform, powered by  @AxelarNetwork 🚀💎\n' +
  'Visit mechacoin.ai\n' +
  '$MECHA #OmniCoin #EarnPoint'
);

const ButtonLoginTwitter = ({ titleButton = 'Start Now' }: ButtonLoginProps) => {
  const { data: session, status }: Session = useSession()
  const openLoginModal = () => setOpenModal(true)
  const closeLoginModal = () => setOpenModal(false)
  const [openModal, setOpenModal] = React.useState(false)

  const isCanLogout = titleButton === 'Start Now'

  const title = useMemo(
    () => (status === 'authenticated' ? (isCanLogout ? 'Your’re in' : `Tweet Now`) : titleButton),
    [isCanLogout, status, titleButton]
  )

  const handleSaveTwitter = useCallback(
    async (id: string) => {
      if (session?.user) {
        const data = await twitterServices.saveUser({ user_id: id })
      }
    },
    [session]
  )

  const handleLogout = () => {
    signOut()
    if (typeof window !== 'undefined') {
      localStorage.removeItem('id')
    }
  }

  useEffect(() => {
    const getSession = async () => {
      const twitter = await fetch('/api/auth/session').then(res => res.json())
      if (status === 'authenticated') {
        if (typeof window !== 'undefined') {
          localStorage.setItem('id', twitter.user.id)
        }
        handleSaveTwitter(twitter.user.id)
      } else {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('id')
        }
      }
    }
    if (!localStorage.getItem('id')) {
      getSession()
    }
    return () => {}
  }, [handleSaveTwitter, status])

  return (
    <>
      <ModalLogin closeModal={closeLoginModal} isOpen={openModal} />
      <div className="cursor-default">
        <div
          onClick={() => {
            if (status === 'authenticated') {
              // // toast.info('Coming soon')
              if (isCanLogout) {
                handleLogout()
                return
              }
              return window.open(`https://twitter.com/intent/tweet?text=${tweetContent}`, '_blank')
            } else {
              openLoginModal()
            }
          }}
          className="bg-[#ECDBCE] px-[16px] py-[12px] min-w-[156px] h-[46px] flex justify-center cursor-pointer relative"
        >
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
          <span className="text-[#371F0E] text-center [text-shadow:0px_2px_0px_rgba(0,0,0,0.25)] text-[20px] leading-[20px] font-bold">
            {title}
          </span>
        </div>
      </div>
    </>
  )
}

export default ButtonLoginTwitter
