'use client'
import { menus, social } from '@/constants'
import logo from '@/images/navbar/logo.svg'
import mark from '@/images/navbar/mark.svg'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import useScrollPosition from './useScrollPosition'

const ConnectButton = dynamic(() => import('@/components/ConnectButton'), {
  ssr: false
})

export default function Navbar() {
  const [isShow, setIsShow] = React.useState(false)
  const [visible, setVisible] = React.useState<boolean>(true)
  const [showNavbar, setShowNavbar] = React.useState(false)
  const scrollPosition = useScrollPosition()

  const pathName = usePathname()

  if (typeof window !== 'undefined') {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop
    window.addEventListener(
      'scroll',
      function handleScroll() {
        const scrollTopPosition = window.pageYOffset || document.documentElement.scrollTop

        if (scrollTopPosition > lastScrollTop) {
          setShowNavbar(false)
        } else if (scrollTopPosition < lastScrollTop) {
          setShowNavbar(true)
        }
        lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition
      },
      false
    )
  }

  const headerStyle = {
    transition: 'transform 0.3s',
    transform: visible ? 'translateY(0)' : 'translateY(-100%)'
  }

  React.useEffect(() => {
    const handleResize = () => {
      // Check the new size of the window
      const currentWidth = window.innerWidth
      const currentHeight = window.innerHeight

      // Add your logic to determine whether to show or hide based on the size
      if (currentWidth > 1024 && currentHeight > 768) {
        setIsShow(false)
      } else {
        setIsShow(false)
      }
    }

    // Attach the event listener
    window.addEventListener('resize', handleResize)

    // Call handleResize once on mount to set the initial state
    handleResize()

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (pathName == '/marketplace') return <></>

  return (
    <div
      style={headerStyle}
      className={`mx-auto fixed top-0  w-full flex flex-col justify-start items-center z-[100] md:px-[100px] md:py-[12px] p-[20px] ${
        isShow ? 'bg-[#1E1B18] fixed inset-0' : 'bg-[#0a0905] h-[80px]'
      } transition-all ${showNavbar || scrollPosition == 0 ? 'flex' : 'hidden'}`}
    >
      {(showNavbar || scrollPosition == 0) && (
        <div className="container flex flex-row justify-between items-center  w-full ">
          <div className="flex flex-row items-center gap-[32px]">
            <Link href={'/'} className="flex flex-row items-center md:gap-[0px] gap-[1.333px]">
              <Image
                draggable={false}
                src={logo}
                width={62.613}
                height={44}
                alt="logo-navbar"
                className="md:w-[62.613px] md:h-[44px] w-[50px] h-[35px]"
              />
              <h1 className="text-[#EBB577] md:text-[26.461px] text-[19.244px] font-pixelmix uppercase cursor-pointer">
                Mecha
              </h1>
            </Link>

            <div className="hidden md:flex flex-row gap-[16px] items-center">
              {menus.map((menu: any) => (
                <Link
                  key={menu.id}
                  href={menu.href}
                  className="text-[16px] leading-[16px] text-[#FFF] px-[16px] relative group"
                >
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-[16px]">
            {!isShow && <ConnectButton />}
            <button onClick={() => setIsShow(!isShow)} className="flex md:hidden">
              {isShow ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M17.6487 16L25.9397 6.40184C26.0787 6.24233 25.9618 6 25.7471 6H23.2266C23.0782 6 22.936 6.06442 22.8381 6.17485L16 14.092L9.16189 6.17485C9.06714 6.06442 8.92501 6 8.7734 6H6.25293C6.03815 6 5.92129 6.24233 6.06026 6.40184L14.3513 16L6.06026 25.5982C6.02913 25.6337 6.00916 25.6772 6.00272 25.7234C5.99628 25.7697 6.00363 25.8168 6.02392 25.8591C6.04421 25.9014 6.07657 25.9372 6.11716 25.9621C6.15775 25.9871 6.20488 26.0003 6.25293 26H8.7734C8.92185 26 9.06398 25.9356 9.16189 25.8251L16 17.908L22.8381 25.8251C22.9329 25.9356 23.075 26 23.2266 26H25.7471C25.9618 26 26.0787 25.7577 25.9397 25.5982L17.6487 16Z"
                    fill="#F0E7D2"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <line x1="3" y1="8.75" x2="29" y2="8.75" stroke="#F0E7D2" strokeWidth="2.5" />
                  <line x1="3" y1="20.75" x2="29" y2="20.75" stroke="#F0E7D2" strokeWidth="2.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
      {isShow && (
        <div className="flex flex-col gap-[24px] items-start md:hidden w-full pt-[24px] relative">
          <Image draggable={false} src={mark} alt="mark" className="absolute top-0 right-0" />
          <div className="flex flex-col gap-[10px]">
            {menus.map((menu: any) => (
              <Link
                onClick={() => setIsShow(false)}
                key={menu.id}
                href={menu.href}
                className="text-[16px] flex gap-[8px] leading-[24px] text-[#FFFFE3] py-[12px] relative group"
              >
                <span>{menu.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4.66663 11.3334L11.3333 4.66675"
                    stroke="#F36D0B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.66663 4.66675H11.3333V11.3334"
                    stroke="#F36D0B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-[16px] pt-[16px] border-t border-[#605752] w-full">
            <span className="text-[#F36D0B] text-[16px] leading-[120%]">Contact</span>
            <div className="flex items-center gap-[16px]">
              {social.map((item: any, index: number) => (
                <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                  <Image draggable={false} width={52} height={52} src={item.img} alt={item.alt} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
