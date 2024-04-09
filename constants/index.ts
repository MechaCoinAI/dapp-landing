import logo1 from '@/images/partners/logo1.png'
import logo2 from '@/images/partners/logo2.png'
import logo3 from '@/images/partners/logo3.png'
import logo4 from '@/images/partners/logo4.png'
import logo5 from '@/images/partners/logo5.png'
import logo6 from '@/images/partners/logo6.png'
import logo7 from '@/images/partners/logo7.png'
import logo8 from '@/images/partners/logo8.png'
import logo9 from '@/images/partners/logo9.png'
import logo10 from '@/images/partners/logo10.png'
import logo11 from '@/images/partners/logo11.png'
import logo12 from '@/images/partners/logo12.png'
import logo13 from '@/images/partners/logo13.png'
import logo14 from '@/images/partners/logo14.png'
import social1 from '@/images/navbar/social1.png'
import social2 from '@/images/navbar/social2.png'
import social3 from '@/images/navbar/social3.png'
import social4 from '@/images/navbar/social4.png'
import social5 from '@/images/navbar/social5.png'

import {
  arbitrum,
  baseGoerli,
  bscTestnet,
  goerli,
  mainnet,
  sepolia,
  fantomTestnet,
  arbitrumGoerli,
  optimism,
  optimismGoerli,
  optimismSepolia,
  linea,
  lineaTestnet,
  base,
  baseSepolia,
  avalanche,
  avalancheFuji,
  polygon,
  polygonMumbai,
  bsc,
  fantom,
  moonbeam,
  moonbaseAlpha,
  mantle,
  mantleTestnet,
  scroll,
  scrollSepolia,
  scrollTestnet,
  celo,
  celoAlfajores,
  celoCannoli,
  filecoin,
  filecoinCalibration,
  filecoinHyperspace
} from 'viem/chains'

const menus = [
  { id: 1, title: 'ABOUT', href: '/#about' },
  // { id: 2, title: 'ROADMAP', href: '/#roadmap' },
  // { id: 3, title: "MEOW AI", href: "/meow-ai" },
  { id: 4, title: "BRIDGE", href: "/omnibridge" },
  { id: 5, title: 'EARN POINTS', href: '/point' },
  { id: 6, title: 'LeaderBoard', href: '/leaderboard'}
]

const social = [
  {
    img: social1,
    href: 'https://twitter.com/OmniMechaCoin',
    alt: 'social1'
  },
  {
    img: social2,
    href: '',
    alt: 'social2'
  },
  {
    img: social3,
    href: '',
    alt: 'social3'
  },
  {
    img: social4,
    href: '',
    alt: 'social4'
  },
  {
    img: social5,
    href: '',
    alt: 'social5'
  }
]

const tokenomic = [
  {
    color: '#22160E',
    portion: '25%',
    detail: 'goes to all addresses on Axelarscan.'
  },
  {
    color: '#F36D0B',
    portion: '5%',
    detail: 'goes to projects in Axelar ecosystem.'
  },
  {
    color: '#C28B50',
    portion: '15%',
    detail: 'goes to early contributors helping with the launch.'
  },
  {
    color: '#EB524A',
    portion: '5%',
    detail: 'goes to Axelar developers.'
  },
  {
    color: '#E4D598',
    portion: '15%',
    detail: 'goes to a Mecha DAO.'
  },
  {
    color: '#E6A844',
    portion: '10%',
    detail: 'goes to LPs for different exchanges.'
  },
  {
    color: '#5D280C',
    portion: '20%',
    detail: 'goes to marketing purpose.'
  },
  {
    color: '#CCCCCC',
    portion: '5%',
    detail: 'goes to Core team.'
  }
]

const partners = [
  {
    id: 1,
    icon: logo1,
    href: 'https://snowtrace.io/token/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo1'
  },
  {
    id: 2,
    icon: logo2,
    href: 'https://bscscan.com/token/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo2'
  },
  {
    id: 3,
    icon: logo3,
    href: 'https://scrollscan.com/token/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo3'
  },
  {
    id: 4,
    icon: logo4,
    href: 'https://etherscan.io/token/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo4'
  },
  {
    id: 5,
    icon: logo5,
    href: 'https://ftmscan.com/token/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo5'
  },
  {
    id: 6,
    icon: logo6,
    href: 'https://filfox.info/token/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo6'
  },
  {
    id: 7,
    icon: logo7,
    href: 'https://kavascan.com/address/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo7'
  },
  {
    id: 8,
    icon: logo8,
    href: 'https://explorer.mantle.xyz/address/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo8'
  },
  {
    id: 9,
    icon: logo9,
    href: 'https://moonscan.io/token/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo9'
  },
  {
    id: 10,
    icon: logo10,
    href: 'https://basescan.org/token/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo10'
  },
  {
    id: 11,
    icon: logo11,
    href: 'https://optimistic.etherscan.io/token/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo11'
  },
  {
    id: 12,
    icon: logo12,
    href: 'https://polygonscan.com/token/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo12'
  },
  {
    id: 13,
    icon: logo13,
    href: 'https://arbiscan.io/token/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo13'
  },
  {
    id: 14,
    icon: logo14,
    href: 'https://celoscan.io/token/0xf256F45b9029076C48877Aa5f9Db5251E140b459',
    alt: 'logo14'
  }
]

const mechaTokenAddress = process.env.NEXT_PUBLIC_MECHA_TOKEN_ADDRESS

const initChainSelect: DataChainsSelect = {
  chainName: '',
  axelarChainName: '',
  blockExplorerUrls: [''],
  bridges: {
    axelar: {
      gateway: ''
    },
    cctp: {
      cctpDomain: 0,
      tokenMessenger: ''
    }
  },
  chainIconURI: '',
  chainId: 0,
  chainNativeContracts: {
    ensRegistry: '',
    multicall: '',
    usdcToken: '',
    wrappedNativeToken: ''
  },
  chainType: '',
  compliance: {
    trmIdentifier: ''
  },
  enableBoostByDefault: true,
  estimatedBoostRouteDuration: 0,
  estimatedRouteDuration: 0,
  nativeCurrency: {
    decimals: 0,
    icon: '',
    name: '',
    symbol: ''
  },
  networkIdentifier: '',
  networkName: '',
  rpc: '',
  sameChainSwapsSupported: true,
  squidContracts: {
    defaultCrosschainToken: '',
    squidFeeCollector: '',
    squidMulticall: '',
    squidRouter: ''
  },
  swapAmountForGas: '',
  data: []
}

const initTokenSelect: DataTokensSelect = {
  amount: '',
  address: '',
  chainId: 0,
  coingeckoId: '',
  decimals: 0,
  logoURI: '',
  name: '',
  symbol: '',
  type: '',
  tokenList: []
}

const integratorId = process.env.NEXT_PUBLIC_INTEGRATOR_ID
const addressNativeToken = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'

import icon_eth from '@/images/bridge/Ether.svg'
import icon_bnb from '@/images/bridge/BNB.svg'
import icon_fantom from '@/images/bridge/Fantom.svg'
import icon_polygon from '@/images/bridge/Polygon.svg'
import icon_base from '@/images/bridge/Op.svg'
import icon_avax from '@/images/bridge/AVAX.svg'
import icon_okx from '@/images/bridge/okx.svg'
export const ListTrxBridge = [
  {
    fromChainName: 'Ethereum',
    toChainName: 'BNB Chain',
    fromIconToken: icon_eth,
    toIconToken: icon_bnb,
    amountToken: 100
  },
  {
    fromChainName: 'Fantom',
    toChainName: 'Base',
    fromIconToken: icon_fantom,
    toIconToken: icon_base,
    amountToken: 500
  },
  {
    fromChainName: 'Ethereum',
    toChainName: 'OKX',
    fromIconToken: icon_eth,
    toIconToken: icon_okx,
    amountToken: 200
  },
  {
    fromChainName: 'Avalanche',
    toChainName: 'BNB Chain',
    fromIconToken: icon_avax,
    toIconToken: icon_bnb,
    amountToken: 100
  },
  {
    fromChainName: 'Ethereum',
    toChainName: 'Polygon',
    fromIconToken: icon_eth,
    toIconToken: icon_polygon,
    amountToken: 100
  },
  {
    fromChainName: 'Polygon',
    toChainName: 'BNB Chain',
    fromIconToken: icon_polygon,
    toIconToken: icon_bnb,
    amountToken: 100
  },
  {
    fromChainName: 'Base',
    toChainName: 'BNB Chain',
    fromIconToken: icon_base,
    toIconToken: icon_bnb,
    amountToken: 100
  },
  {
    fromChainName: 'Ethereum',
    toChainName: 'BNB Chain',
    fromIconToken: icon_eth,
    toIconToken: icon_bnb,
    amountToken: 100
  },
  {
    fromChainName: 'Ethereum',
    toChainName: 'BNB Chain',
    fromIconToken: icon_eth,
    toIconToken: icon_bnb,
    amountToken: 600
  }
]

const wagmiEvmChains = [
  mainnet,
  goerli,
  sepolia,
  arbitrum,
  arbitrumGoerli,
  optimism,
  optimismGoerli,
  optimismSepolia,
  linea,
  lineaTestnet,
  base,
  baseGoerli,
  baseSepolia,
  avalanche,
  avalancheFuji,
  polygon,
  polygonMumbai,
  bsc,
  bscTestnet,
  fantom,
  fantomTestnet,
  moonbeam,
  moonbaseAlpha,
  mantle,
  mantleTestnet,
  scroll,
  scrollTestnet,
  scrollSepolia,
  celo,
  celoAlfajores,
  celoCannoli,
  filecoin,
  filecoinCalibration,
  filecoinHyperspace
]

export {
  menus,
  tokenomic,
  partners,
  social,
  mechaTokenAddress,
  initChainSelect,
  initTokenSelect,
  addressNativeToken,
  integratorId,
  wagmiEvmChains
}
