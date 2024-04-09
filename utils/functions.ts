import { mechaTokenAddress } from '@/constants'
import { toast } from 'react-toastify'

export const onUpdateListToken = ({
  tokenList,
  disabledMecha
}: {
  tokenList: TokenAxelar[]
  disabledMecha: boolean
}): TokenAxelar[] => {
  const updatedTokenList = tokenList.map(token => ({
    ...token,
    disabled: disabledMecha
      ? token.address === mechaTokenAddress
      : token.address !== mechaTokenAddress
  }))
  return updatedTokenList
}

export const onMappingDataChain = (chains: ChainAxelar[]): DataChainsSelect[] => {
  const dataChains: DataChainsSelect[] = []
  chains.forEach(c => {
    dataChains[c.chainId] = {
      ...c,
      data: chains.filter(chain => chain.chainId !== c.chainId) as ChainAxelar[]
    }
  })
  return dataChains
}

export const onMappingDataToken = (tokens: TokenAxelar[]): DataTokensSelect[] => {
  const mechaToken: TokenAxelar = {
    amount: '',
    address: String(mechaTokenAddress),
    chainId: 0,
    coingeckoId: '',
    decimals: 0,
    logoURI: `${process.env.REACT_APP_HOST}/images/navbar/logo.svg`,
    name: 'Mecha Token',
    symbol: 'MECHA',
    type: ''
  }
  const dataTokens: DataTokensSelect[] = []
  tokens.forEach(tk => {
    dataTokens[tk.chainId] = {
      ...tk,
      amount: '',
      tokenList: [
        { ...mechaToken, chainId: tk.chainId, decimals: tk.decimals, type: tk.type },
        ...tokens.filter(token => token.chainId == tk.chainId)
      ] as TokenAxelar[]
    }
  })
  return dataTokens
}

export const addressWalletCompact = (address: string) => {
  if (!address) return
  return `${address.slice(0, 6)}...${address.slice(address.length - 4, address.length)}`
}

export function nFormatter(num: number, digits = 2) {
  var si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' }
  ]
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  var i
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break
    }
  }

  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
}

export const isValidFileType = (file: File): boolean => {
  const allowedTypes = ['audio/mp3', 'video/mp4', 'video/webm']
  return allowedTypes.includes(file.type)
}

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export const notify = (message: string, type: string) => {
  if (!type) {
    type = 'success'
  }
  switch (type) {
    case 'success': {
      return toast.success(message)
    }
    case 'warning': {
      return toast.warning(message)
    }
    case 'error': {
      return toast.error(message)
    }
  }
}

export const notifySuccess = (message: string) => {
  toast.success(message)
}
export const notifyWarning = (message: string) => {
  toast.warning(message)
}
export const notifyErrors = (message: string) => {
  toast.error(message)
}

export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function binaryToBase64(binaryData: any) {
  const binaryString = String.fromCharCode.apply(null, binaryData)
  return `data:video/mp4;base64,${btoa(binaryString)}`
}