'use client'
import React from 'react'
import { WagmiConfig } from 'wagmi'
import { wagmiEvmChains } from '@/constants'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = String(process.env.NEXT_PUBLIC_PROJECT_ID)

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = wagmiEvmChains
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  featuredWalletIds: ['f896cbca30cd6dc414712d3d6fcc2f8f7d35d5bd30e3b1fc5d60cf6c8926f98f']
})

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}
