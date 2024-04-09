'use client'
import About from '@/components/About'
import Airdrop from '@/components/Airdrop'
import HowToBuy from '@/components/HowToBuy'
import Banner from '@/components/Banner'
import Partners from '@/components/Partners'
import RoadmapContact from '@/components/RoadmapContact/roadmapContact'
import Socials from '@/components/Social'
import Tokenomic from '@/components/Tokenomic'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <div className="mt-[80px] overflow-hidden">
      <Banner />
      <Partners />
      <About />
      <HowToBuy />
      <Airdrop />
      <Tokenomic />
      <RoadmapContact />
      <Socials />
    </div>
  )
}
