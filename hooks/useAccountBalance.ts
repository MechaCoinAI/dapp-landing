import { useMemo, useState } from 'react'
import { Address, useAccount, useContractRead } from 'wagmi'
import { ethers } from 'ethers'

import ABI_BEP20 from '@/contracts/TokenBep20Abi.json'
import ABI_ERC20 from '@/contracts/TokenErc20Abi.json'
import { addressNativeToken } from '@/constants'

export function useAccountBalance({ token, chainId }: { token: string; chainId: number }) {
  const [balance, setBalance] = useState<Record<string, string>>({})
  const { address } = useAccount()

  const abi = chainId === Number(process.env.NEXT_PUBLIC_CHAIN_ID_BSC) ? ABI_BEP20 : ABI_ERC20

  useContractRead({
    address: token as Address,
    abi: abi,
    functionName: 'balanceOf',
    chainId: Number(chainId),
    args: [address],
    enabled: Boolean(address !== undefined) && token !== addressNativeToken,
    cacheOnBlock: true,
    watch: true,
    onSuccess(data) {
      if (data) {
        const balanceToken = ethers.utils.formatUnits(data.toString(), 18)
        if (token) balance[token] = balanceToken
      } else {
        if (token) balance[token] = '0'
      }
      setBalance(balance)
    },
    onError(err) {
      if (token) balance[token] = '0'
    }
  })

  return useMemo(() => {
    return {
      balance,
      address,
      token,
      chainId
    }
  }, [balance, address, token, chainId])
}

export default useAccountBalance
