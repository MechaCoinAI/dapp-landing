const chainsTestnet = [
  {
    chainName: 'Ethereum-2',
    chainType: 'evm',
    rpc: 'https://rpc.ankr.com/eth_goerli',
    networkName: 'ETH Goerli Testnet',
    chainId: 5,
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    blockExplorerUrls: ['https://goerli.etherscan.io/'],
    chainNativeContracts: {
      wrappedNativeToken: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      ensRegistry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
    },
    axelarContracts: {
      gateway: '0xBC6fcce7c5487d43830a219CA6E7B83238B41e71',
      forecallable: ''
    },
    estimatedRouteDuration: 960,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'ethereum-sepolia',
    chainType: 'evm',
    rpc: 'https://rpc.ankr.com/eth_sepolia',
    networkName: 'ETH Sepolia Testnet',
    chainId: 11155111,
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    blockExplorerUrls: ['https://sepolia.etherscan.io/'],
    chainNativeContracts: {
      wrappedNativeToken: '0xeA700DCe55e72C4C08b97AcFc7dF214EC30F4a64',
      ensRegistry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: ''
    },
    estimatedRouteDuration: 960,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'optimism',
    chainType: 'evm',
    rpc: 'https://goerli.optimism.io',
    networkName: 'Optimism Goerli',
    chainId: 420,
    nativeCurrency: {
      name: 'Optimism',
      symbol: 'ETH',
      decimals: 18,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png',
    blockExplorerUrls: ['https://goerli-optimism.etherscan.io/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x4200000000000000000000000000000000000006',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0xc5D8d1002A9674E41942e3eaeaC41afD74fD557a'
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6'
    },
    estimatedRouteDuration: 1800,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'arbitrum',
    chainType: 'evm',
    rpc: 'https://goerli-rollup.arbitrum.io/rpc',
    networkName: 'Arbitrum Goerli',
    chainId: 421613,
    nativeCurrency: {
      name: 'Arbitrum',
      symbol: 'ETH',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/arbitrum.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/arbitrum.svg',
    blockExplorerUrls: ['https://goerli.arbiscan.io/'],
    chainNativeContracts: {
      wrappedNativeToken: '0xEe01c0CD76354C383B8c7B4e65EA88D00B06f36f',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: ''
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6'
    },
    estimatedRouteDuration: 1800,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'linea',
    chainType: 'evm',
    rpc: 'https://rpc.goerli.linea.build',
    networkName: 'Linea Goerli',
    chainId: 59140,
    nativeCurrency: {
      name: 'Linea',
      symbol: 'ETH',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-satellite/main/public/assets/chains/linea.logo.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-satellite/main/public/assets/chains/linea.logo.svg',
    blockExplorerUrls: ['https://goerli.lineascan.build/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x2C1b868d6596a18e32E61B901E4060C872647b6C',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0xf56dc6695cF1f5c364eDEbC7Dc7077ac9B586068'
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6'
    },
    estimatedRouteDuration: 1800,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'base',
    chainType: 'evm',
    rpc: 'https://goerli.base.org',
    networkName: 'Base Goerli',
    chainId: 84531,
    nativeCurrency: {
      name: 'Base',
      symbol: 'ETH',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-satellite/main/public/assets/chains/base.logo.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-satellite/main/public/assets/chains/base.logo.svg',
    blockExplorerUrls: ['https://goerli.basescan.org/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x4200000000000000000000000000000000000006',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x2e9F75DF8839ff192Da27e977CD154FD1EAE03cf'
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6'
    },
    estimatedRouteDuration: 1800,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'Avalanche',
    chainType: 'evm',
    rpc: 'https://api.avax-test.network/ext/bc/C/rpc',
    networkName: 'Avalanche FUJI C-Chain Testnet',
    chainId: 43113,
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/avalanche.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/avalanche.svg',
    blockExplorerUrls: ['https://testnet.snowtrace.io/'],
    chainNativeContracts: {
      wrappedNativeToken: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
      ensRegistry: '0xa7eebb2926d22d34588497769889cbc2be0a5d97',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: ''
    },
    axelarContracts: {
      gateway: '0xC249632c2D40b9001FE907806902f63038B737Ab',
      forecallable: ''
    },
    estimatedRouteDuration: 90,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'mantle',
    chainType: 'evm',
    rpc: 'https://rpc.testnet.mantle.xyz',
    networkName: 'Mantle WADSLEY Testnet',
    chainId: 5001,
    nativeCurrency: {
      name: 'Mantle',
      symbol: 'MNT',
      decimals: 18,
      icon: 'https://assets.coingecko.com/coins/images/30980/small/token-logo.png?1689320029'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wmnt.svg',
    blockExplorerUrls: ['https://explorer.testnet.mantle.xyz/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x8734110e5e1dcF439c7F549db740E546fea82d66',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: ''
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6'
    },
    estimatedRouteDuration: 100,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'scroll',
    chainType: 'evm',
    rpc: 'https://sepolia-rpc.scroll.io',
    networkName: 'Scroll Sepolia Testnet',
    chainId: 534351,
    nativeCurrency: {
      name: 'Scroll',
      symbol: 'ETH',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/scroll.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/scroll.svg',
    blockExplorerUrls: ['https://sepolia.scrollscan.com/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x5300000000000000000000000000000000000004',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: ''
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6'
    },
    estimatedRouteDuration: 100,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'Moonbeam',
    chainType: 'evm',
    rpc: 'https://rpc.api.moonbase.moonbeam.network',
    networkName: 'Moonbase Alpha Testnet',
    chainId: 1287,
    nativeCurrency: {
      name: 'Moonbeam',
      symbol: 'DEV',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    blockExplorerUrls: ['https://moonbase.moonscan.io/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x372d0695E75563D9180F8CE31c9924D7e8aaac47',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: ''
    },
    axelarContracts: {
      gateway: '0x5769D84DD62a6fD969856c75c7D321b84d455929',
      forecallable: ''
    },
    estimatedRouteDuration: 100,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'filecoin',
    chainType: 'evm',
    rpc: 'https://filecoin-hyperspace.chainup.net/rpc/v1',
    networkName: 'Filecoin Hyperspace',
    chainId: 3141,
    nativeCurrency: {
      name: 'Filecoin',
      symbol: 'FIL',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/filecoin.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/filecoin.svg',
    blockExplorerUrls: ['https://hyperspace.filfox.info/en/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x6C297AeD654816dc5d211c956DE816Ba923475D2',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: ''
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6'
    },
    estimatedRouteDuration: 3600,
    estimatedExpressRouteDuration: 120
  },
  {
    chainName: 'Polygon',
    chainType: 'evm',
    rpc: 'https://rpc.ankr.com/polygon_mumbai',
    networkName: 'Polygon Mumbai',
    chainId: 80001,
    nativeCurrency: {
      name: 'Polygon',
      symbol: 'MATIC',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/polygon.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/polygon.svg',
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: ''
    },
    axelarContracts: {
      gateway: '0xBF62ef1486468a6bd26Dd669C06db43dEd5B849B',
      forecallable: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6'
    },
    estimatedRouteDuration: 360,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'binance',
    chainType: 'evm',
    rpc: 'https://data-seed-prebsc-2-s1.binance.org:8545',
    networkName: 'BNB Testnet',
    chainId: 97,
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bnb.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bnb.svg',
    blockExplorerUrls: ['https://testnet.bscscan.com/'],
    chainNativeContracts: {
      wrappedNativeToken: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: ''
    },
    axelarContracts: {
      gateway: '0x4D147dCb984e6affEEC47e44293DA442580A3Ec0',
      forecallable: ''
    },
    estimatedRouteDuration: 150,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'Fantom',
    chainType: 'evm',
    rpc: 'https://rpc.testnet.fantom.network',
    networkName: 'Fantom Testnet',
    chainId: 4002,
    nativeCurrency: {
      name: 'FTM',
      symbol: 'FTM',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/fantom.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/fantom.svg',
    blockExplorerUrls: ['https://testnet.ftmscan.com/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75'
    },
    axelarContracts: {
      gateway: '0x97837985Ec0494E7b9C71f5D3f9250188477ae14',
      forecallable: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6'
    },
    estimatedRouteDuration: 70,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'celo',
    chainType: 'evm',
    rpc: 'https://alfajores-forno.celo-testnet.org',
    networkName: 'Celo Alfajores Testnet',
    chainId: 44787,
    nativeCurrency: {
      name: 'CELO',
      symbol: 'CELO',
      decimals: 18,
      icon: 'https://celoscan.io/images/svg/brands/mainbrand-1.svg?v=23.5.4.0'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://celoscan.io/images/svg/brands/mainbrand-1.svg?v=23.5.4.0',
    blockExplorerUrls: ['https://alfajores.celoscan.io/'],
    chainNativeContracts: {
      wrappedNativeToken: '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1'
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: ''
    },
    estimatedRouteDuration: 90,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'osmosis-7',
    chainType: 'cosmos',
    rpc: 'https://rpc.osmotest5.osmosis.zone',
    rpcList: ['https://rpc.osmotest5.osmosis.zone/', 'https://rpc.testnet.osl.zone/'],
    rest: 'https://testnet-rest.osmosis.zone',
    networkName: 'Osmosis Testnet',
    chainId: 'osmo-test-5',
    nativeCurrency: {
      name: 'Osmosis',
      symbol: 'OSMO',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/osmo.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/osmo.svg',
    blockExplorerUrls: ['https://testnet.mintscan.io/osmosis-testnet/'],
    stakeCurrency: {
      coinDenom: 'OSMO',
      coinMinimalDenom: 'uosmo',
      coinDecimals: 6,
      coingeckoId: 'osmosis'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'osmo',
      bech32PrefixAccPub: 'osmopub',
      bech32PrefixValAddr: 'osmovaloper',
      bech32PrefixValPub: 'osmovaloperpub',
      bech32PrefixConsAddr: 'osmovalcons',
      bech32PrefixConsPub: 'osmovalconspub'
    },
    currencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coingeckoId: 'osmosis'
      },
      {
        coinDenom: 'ION',
        coinMinimalDenom: 'uion',
        coinDecimals: 6,
        coingeckoId: 'ion'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coingeckoId: 'osmosis'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0,
      average: 0,
      high: 0.025
    },
    features: ['ibc-transfer', 'ibc-go'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-3',
    estimatedRouteDuration: 180,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'axelarnet',
    chainType: 'cosmos',
    rpc: 'https://axelar-testnet-rpc.polkachu.com',
    rpcList: ['https://rpc-axelar-testnet.imperator.co:443'],
    rest: 'https://axelar-testnet-lcd.axelar-dev.workers.dev',
    nativeCurrency: {
      name: 'Axelar',
      symbol: 'AXL',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    blockExplorerUrls: [],
    chainId: 'axelar-testnet-lisbon-3',
    networkName: 'Axelar Testnet',
    walletUrlForStaking: 'https://www.testnet.keplr.app/#/axelar/stake',
    bech32Config: {
      bech32PrefixAccAddr: 'axelar',
      bech32PrefixAccPub: 'axelarpub',
      bech32PrefixValAddr: 'axelarvaloper',
      bech32PrefixValPub: 'axelarvaloperpub',
      bech32PrefixConsAddr: 'axelarvalcons',
      bech32PrefixConsPub: 'axelarvalconspub'
    },
    bip44: {
      coinType: 118
    },
    stakeCurrency: {
      coinDenom: 'AXL',
      coinMinimalDenom: 'uaxl',
      coinDecimals: 6
    },
    currencies: [
      {
        coinDenom: 'AXL',
        coinMinimalDenom: 'uaxl',
        coinDecimals: 6,
        coingeckoId: 'AXL'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'AXL',
        coinMinimalDenom: 'uaxl',
        coinDecimals: 6
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.007,
      average: 0.007,
      high: 0.01
    },
    features: ['ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 180,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'dydx',
    chainType: 'cosmos',
    rpc: 'https://testnet-dydx-rpc.lavenderfive.com',
    rpcList: [
      'https://test-dydx.kingnodes.com',
      'https://dydx-testnet-archive.allthatnode.com:26657'
    ],
    rest: 'http://13.59.4.93:1317',
    networkName: 'dydx-testnet-4',
    chainId: 'dydx-testnet-4',
    nativeCurrency: {
      name: 'dydx',
      symbol: 'DYDX',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11156.png'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11156.png',
    blockExplorerUrls: [],
    stakeCurrency: {
      coinDenom: 'DYDX',
      coinMinimalDenom: 'udydx',
      coinDecimals: 6,
      coingeckoId: 'dydx'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'dydx',
      bech32PrefixAccPub: 'dydxpub',
      bech32PrefixValAddr: 'dydxvaloper',
      bech32PrefixValPub: 'dydxvaloperpub',
      bech32PrefixConsAddr: 'dydxvalcons',
      bech32PrefixConsPub: 'dydxvalconspub'
    },
    currencies: [
      {
        coinDenom: 'DYDX',
        coinMinimalDenom: 'udydx',
        coinDecimals: 6,
        coingeckoId: 'dydx'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'USDC',
        coinMinimalDenom: 'adv4tnt',
        coinDecimals: 6,
        coingeckoId: 'usdc'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 30000000000
    },
    features: ['ibc-transfer', 'ibc-go'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-312',
    estimatedExpressRouteDuration: 20,
    estimatedRouteDuration: 180
  },
  {
    chainName: 'noble',
    chainType: 'cosmos',
    rpc: 'https://rpc.testnet.noble.strange.love',
    rpcList: ['https://noble-testnet-rpc.polkachu.com', 'https://rpc.testnet.noble.strange.love'],
    rest: '',
    networkName: 'Noble',
    chainId: 'grand-1',
    nativeCurrency: {
      name: 'noble',
      symbol: 'Noble',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/noble/chainImg/logoImg/tokenImg.svg',
    blockExplorerUrls: ['https://explore.strange.love/grand-1/'],
    stakeCurrency: {
      coinDenom: 'STAKE',
      coinMinimalDenom: 'ustake',
      coinDecimals: 6,
      coingeckoId: 'stake'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'noble',
      bech32PrefixAccPub: 'noblepub',
      bech32PrefixValAddr: 'noblevaloper',
      bech32PrefixValPub: 'noblevaloperpub',
      bech32PrefixConsAddr: 'noblevalcons',
      bech32PrefixConsPub: 'noblevalconspub'
    },
    currencies: [
      {
        coinDenom: 'USDC',
        coinMinimalDenom: 'uusdc',
        coinDecimals: 6,
        coingeckoId: 'usd-coin'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'USDC',
        coinMinimalDenom: 'uusdc',
        coinDecimals: 6,
        coingeckoId: 'usd-coin'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0,
      average: 0,
      high: 0.025
    },
    features: ['ibc-transfer', 'ibc-go', 'ibc-pfm'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedExpressRouteDuration: 20,
    estimatedRouteDuration: 180
  },
  {
    chainName: 'kujira',
    chainType: 'cosmos',
    rpc: 'https://testnet.rpc.axelar.dev/chain/kujira',
    rpcList: [
      'https://kujira-testnet-rpc.polkachu.com',
      'https://testnet.rpc.axelar.dev/chain/kujira'
    ],
    rest: 'https://lcd-harpoon.kujira.app',
    networkName: 'Kujira Testnet',
    chainId: 'harpoon-4',
    nativeCurrency: {
      name: 'Kuji',
      symbol: 'KUJI',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/15185.png'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://axelarscan.io/logos/chains/kujira.svg',
    blockExplorerUrls: [],
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'kujira',
      bech32PrefixAccPub: 'kujirapub',
      bech32PrefixValAddr: 'kujiravaloper',
      bech32PrefixValPub: 'kujiravaloperpub',
      bech32PrefixConsAddr: 'kujiravalcons',
      bech32PrefixConsPub: 'kujiravalconspub'
    },
    currencies: [
      {
        coinDenom: 'KUJI',
        coinMinimalDenom: 'ukuji',
        coinDecimals: 6,
        coingeckoId: 'kujira'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'KUJI',
        coinMinimalDenom: 'ukuji',
        coinDecimals: 6,
        coingeckoId: 'kujira'
      }
    ],
    stakeCurrency: {
      coinDenom: 'KUJI',
      coinMinimalDenom: 'ukuji',
      coinDecimals: 6,
      coingeckoId: 'kujira'
    },
    coinType: 118,
    gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.03
    },
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-8',
    estimatedRouteDuration: 180,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'sei-2',
    chainType: 'cosmos',
    rpc: 'https://testnet.rpc.axelar.dev/chain/sei',
    rpcList: ['https://testnet.rpc.axelar.dev/chain/sei'],
    rest: 'https://sei-testnet-api.polkachu.com',
    chainId: 'atlantic-2',
    nativeCurrency: {
      name: 'SEI',
      symbol: 'SEI',
      decimals: 6,
      icon: 'https://docs.axelar.dev/images/chains/sei.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sei.svg',
    blockExplorerUrls: [],
    networkName: 'Sei Testnet 2',
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'sei',
      bech32PrefixAccPub: 'seipub',
      bech32PrefixValAddr: 'seivaloper',
      bech32PrefixValPub: 'seivaloperpub',
      bech32PrefixConsAddr: 'seivalcons',
      bech32PrefixConsPub: 'seivalconspub'
    },
    currencies: [
      {
        coinDenom: 'SEI',
        coinMinimalDenom: 'usei',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'SEI',
        coinMinimalDenom: 'usei',
        coinDecimals: 6
      }
    ],
    stakeCurrency: {
      coinDenom: 'SEI',
      coinMinimalDenom: 'usei',
      coinDecimals: 6
    },
    coinType: 118,
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-29',
    estimatedRouteDuration: 180,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'fetch',
    chainType: 'cosmos',
    rpc: 'https://testnet.rpc.axelar.dev/chain/fetch',
    rpcList: ['https://testnet.rpc.axelar.dev/chain/fetch', 'https://rpc-dorado.fetch.ai:443'],
    rest: 'https://rest-dorado.fetch.ai',
    networkName: 'Fetch Testnet',
    chainId: 'dorado-1',
    nativeCurrency: {
      name: 'fetch-ai',
      symbol: 'FET',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fet.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fet.svg',
    blockExplorerUrls: [],
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'fetch',
      bech32PrefixAccPub: 'fetchpub',
      bech32PrefixValAddr: 'fetchvaloper',
      bech32PrefixValPub: 'fetchvaloperpub',
      bech32PrefixConsAddr: 'fetchvalcons',
      bech32PrefixConsPub: 'fetchvalconspub'
    },
    currencies: [
      {
        coinDenom: 'FET',
        coinMinimalDenom: 'atestfet',
        coinDecimals: 18,
        coingeckoId: 'fetch-ai'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'FET',
        coinMinimalDenom: 'atestfet',
        coinDecimals: 18,
        coingeckoId: 'fetch-ai'
      }
    ],
    stakeCurrency: {
      coinDenom: 'FET',
      coinMinimalDenom: 'atestfet',
      coinDecimals: 18,
      coingeckoId: 'fetch-ai'
    },
    coinType: 118,
    gasPriceStep: {
      low: 0,
      average: 5000000000,
      high: 6250000000
    },
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-6',
    estimatedRouteDuration: 180,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'evmos',
    chainType: 'cosmos',
    rpc: 'https://testnet.rpc.axelar.dev/chain/evmos',
    rpcList: [
      'https://testnet.rpc.axelar.dev/chain/evmos',
      'https://evmos-testnet-rpc.polkachu.com'
    ],
    rest: 'https://rest.bd.evmos.dev:1317',
    nativeCurrency: {
      name: 'Evmos',
      symbol: 'EVMOS',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
    networkName: 'Evmos Testnet',
    chainId: 'evmos_9000-4',
    blockExplorerUrls: ['https://evm.evmos.dev/'],
    stakeCurrency: {
      coinDenom: 'EVMOS',
      coinMinimalDenom: 'aevmos',
      coinDecimals: 18,
      coingeckoId: 'evmos'
    },
    walletUrl: 'https://wallet.keplr.app/chains/evmos',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/evmos',
    bip44: {
      coinType: 60
    },
    bech32Config: {
      bech32PrefixAccAddr: 'evmos',
      bech32PrefixAccPub: 'evmospub',
      bech32PrefixValAddr: 'evmosvaloper',
      bech32PrefixValPub: 'evmosvaloperpub',
      bech32PrefixConsAddr: 'evmosvalcons',
      bech32PrefixConsPub: 'evmosvalconspub'
    },
    currencies: [
      {
        coinDenom: 'EVMOS',
        coinMinimalDenom: 'aevmos',
        coinDecimals: 18,
        coingeckoId: 'evmos'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'EVMOS',
        coinMinimalDenom: 'aevmos',
        coinDecimals: 18,
        coingeckoId: 'evmos'
      }
    ],
    gasPriceStep: {
      low: 25000000000,
      average: 25000000000,
      high: 40000000000
    },
    coinType: 60,
    features: ['ibc-transfer', 'ibc-go', 'eth-address-gen', 'eth-key-sign'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-22',
    estimatedRouteDuration: 180,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'comdex',
    chainType: 'cosmos',
    rpc: 'https://testnet.rpc.axelar.dev/chain/comdex',
    rpcList: ['https://testnet.rpc.axelar.dev/chain/comdex'],
    rest: 'https://meteor.rest.comdex.one/',
    chainId: 'meteor-test',
    networkName: 'Comdex Testnet',
    nativeCurrency: {
      name: 'Comdex',
      symbol: 'CMDX',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
    blockExplorerUrls: ['https://meteor-explorer.comdex.one/'],
    stakeCurrency: {
      coinDenom: 'CMDX',
      coinMinimalDenom: 'ucmdx',
      coinDecimals: 6,
      coingeckoId: 'cmdx'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'comdex',
      bech32PrefixAccPub: 'comdexpub',
      bech32PrefixValAddr: 'comdexvaloper',
      bech32PrefixValPub: 'comdexvaloperpub',
      bech32PrefixConsAddr: 'comdexvalcons',
      bech32PrefixConsPub: 'comdexvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'CMDX',
        coinMinimalDenom: 'ucmdx',
        coinDecimals: 6,
        coingeckoId: 'comdex'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'CMDX',
        coinMinimalDenom: 'ucmdx',
        coinDecimals: 6,
        coingeckoId: 'comdex'
      }
    ],
    gasPriceStep: {
      low: 0.01,
      average: 0.03,
      high: 0.05
    },
    coinType: 118,
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-18',
    estimatedRouteDuration: 180,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'aura',
    chainType: 'cosmos',
    rpc: 'https://testnet.rpc.axelar.dev/chain/aura"',
    rpcList: ['https://testnet.rpc.axelar.dev/chain/aura"'],
    rest: 'https://lcd.euphoria.aura.network/',
    chainId: 'euphoria-1',
    networkName: 'Aura Euphoria Testnet',
    nativeCurrency: {
      name: 'Aura',
      symbol: 'AURA',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20326.png'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://axelarscan.io/logos/chains/aura.svg',
    blockExplorerUrls: ['https://meteor-explorer.comdex.one/'],
    stakeCurrency: {
      coinDenom: 'EAURA',
      coinMinimalDenom: 'ueaura',
      coinDecimals: 6,
      coingeckoId: 'ueaura'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'aura',
      bech32PrefixAccPub: 'aurapub',
      bech32PrefixValAddr: 'auravaloper',
      bech32PrefixValPub: 'auravaloperpub',
      bech32PrefixConsAddr: 'auravalcons',
      bech32PrefixConsPub: 'auravalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'EAURA',
        coinMinimalDenom: 'ueaura',
        coinDecimals: 6,
        coingeckoId: 'eaura'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'EAURA',
        coinMinimalDenom: 'ueaura',
        coinDecimals: 6,
        coingeckoId: 'eaura'
      }
    ],
    gasPriceStep: {
      low: 0.001,
      average: 0.0025,
      high: 0.004
    },
    coinType: 118,
    features: ['no-legacy-stdTx'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-5',
    estimatedRouteDuration: 180,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'persistence',
    chainType: 'cosmos',
    rpc: 'https://testnet.rpc.axelar.dev/chain/persistence',
    rpcList: [
      'https://persistence-testnet-rpc.baryon.dev/',
      'https://persistence-testnet-rpc.cosmonautstakes.com/',
      'https://persistence-testnet-rpc.polkachu.com/'
    ],
    rest: 'https://persistence-testnet-api.polkachu.com',
    nativeCurrency: {
      name: 'Persistence',
      symbol: 'XPRT',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/xprt.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/xprt.svg',
    blockExplorerUrls: [
      'https://testnet.mintscan.io/persistence-testnet/',
      'https://testnet.ping.pub/test-core-2/'
    ],
    chainId: 'test-core-2',
    networkName: 'Persistence',
    stakeCurrency: {
      coinDenom: 'XPRT',
      coinMinimalDenom: 'uxprt',
      coinDecimals: 6,
      coingeckoId: 'persistence'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'persistence',
      bech32PrefixAccPub: 'persistencepub',
      bech32PrefixValAddr: 'persistencevaloper',
      bech32PrefixValPub: 'persistencevaloperpub',
      bech32PrefixConsAddr: 'persistencevalcons',
      bech32PrefixConsPub: 'persistencevalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'XPRT',
        coinMinimalDenom: 'uxprt',
        coinDecimals: 6,
        coingeckoId: 'persistence'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'XPRT',
        coinMinimalDenom: 'uxprt',
        coinDecimals: 6,
        coingeckoId: 'persistence'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer', 'ibc-pfm'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-51',
    estimatedRouteDuration: 180,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'cosmoshub',
    chainType: 'cosmos',
    rpc: 'https://rpc.sentry-01.theta-testnet.polypore.xyz',
    rpcList: [
      'https://rpc.sentry-01.theta-testnet.polypore.xyz',
      'https://rpc.sentry-02.theta-testnet.polypore.xyz',
      'https://rpc.state-sync-01.theta-testnet.polypore.xyz'
    ],
    rest: 'https://rest.sentry-01.theta-testnet.polypore.xyz',
    nativeCurrency: {
      name: 'cosmoshub',
      symbol: 'ATOM',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png',
    blockExplorerUrls: [],
    chainId: 'theta-testnet-001',
    networkName: 'Cosmos Testnet',
    stakeCurrency: {
      coinDenom: 'ATOM',
      coinMinimalDenom: 'uatom',
      coinDecimals: 6,
      coingeckoId: ''
    },
    bech32Config: {
      bech32PrefixAccAddr: 'cosmos',
      bech32PrefixAccPub: 'cosmospub',
      bech32PrefixValAddr: 'cosmosvaloper',
      bech32PrefixValPub: 'cosmosvaloperpub',
      bech32PrefixConsAddr: 'cosmosvalcons',
      bech32PrefixConsPub: 'cosmosvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: 'uatom',
        coinDecimals: 6,
        coingeckoId: ''
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: 'uatom',
        coinDecimals: 6,
        coingeckoId: ''
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer', 'ibc-pfm'],
    axelarContracts: {
      gateway: ''
    },
    compliance: {
      trmIdentifier: 'cosmos'
    },
    chainToAxelarChannelId: 'channel-5',
    estimatedRouteDuration: 180,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'dymension',
    chainType: 'cosmos',
    rpc: 'https://dymension-rpc-blumbus.ibs.team',
    rpcList: ['https://dymension-rpc-blumbus.ibs.team'],
    rest: 'https://dymension-api-blumbus.ibs.team',
    nativeCurrency: {
      name: 'dymension',
      symbol: 'DYM',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dym.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dym.svg',
    blockExplorerUrls: ['https://explorer.silknodes.io/blumbus/'],
    chainId: 'blumbus_111-1',
    networkName: 'Dymension Testnet',
    stakeCurrency: {
      coinDenom: 'DYM',
      coinMinimalDenom: 'adym',
      coinDecimals: 18,
      coingeckoId: ''
    },
    bech32Config: {
      bech32PrefixAccAddr: 'dym',
      bech32PrefixAccPub: 'dympub',
      bech32PrefixValAddr: 'dymvaloper',
      bech32PrefixValPub: 'dymvaloperpub',
      bech32PrefixConsAddr: 'dymvalcons',
      bech32PrefixConsPub: 'dymvalconspub'
    },
    bip44: {
      coinType: 60
    },
    currencies: [
      {
        coinDenom: 'DYM',
        coinMinimalDenom: 'adym',
        coinDecimals: 18,
        coingeckoId: ''
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'DYM',
        coinMinimalDenom: 'adym',
        coinDecimals: 18,
        coingeckoId: ''
      }
    ],
    coinType: 60,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer', 'ibc-pfm'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-0',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  }
]

const chainsMainnet = [
  {
    chainName: 'Ethereum',
    chainType: 'evm',
    rpc: 'https://ethereum.publicnode.com',
    networkName: 'Ethereum',
    chainId: 1,
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    blockExplorerUrls: ['https://etherscan.io/'],
    chainNativeContracts: {
      wrappedNativeToken: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      ensRegistry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
    },
    axelarContracts: {
      gateway: '0x4F4495243837681061C4743b74B3eEdf548D56A5',
      forecallable: ''
    },
    compliance: {
      trmIdentifier: 'ethereum'
    },
    estimatedRouteDuration: 960,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'Arbitrum',
    chainType: 'evm',
    rpc: 'https://arb1.arbitrum.io/rpc',
    networkName: 'Arbitrum',
    chainId: 42161,
    nativeCurrency: {
      name: 'Arbitrum',
      symbol: 'ETH',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/arbitrum.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/arb.svg',
    blockExplorerUrls: ['https://arbiscan.io/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8'
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0x2d5d7d31F671F86C782533cc367F14109a082712'
    },
    compliance: {
      trmIdentifier: 'arbitrum'
    },
    estimatedRouteDuration: 1800,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'optimism',
    chainType: 'evm',
    rpc: 'https://mainnet.optimism.io',
    networkName: 'Optimism',
    chainId: 10,
    nativeCurrency: {
      name: 'Optimism',
      symbol: 'ETH',
      decimals: 18,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png',
    blockExplorerUrls: ['https://optimistic.etherscan.io/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x4200000000000000000000000000000000000006',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607'
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0x2d5d7d31F671F86C782533cc367F14109a082712'
    },
    compliance: {
      trmIdentifier: 'optimism'
    },
    estimatedRouteDuration: 1800,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'linea',
    chainType: 'evm',
    rpc: 'https://rpc.linea.build',
    networkName: 'Linea',
    chainId: 59144,
    nativeCurrency: {
      name: 'Linea',
      symbol: 'ETH',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-satellite/main/public/assets/chains/linea.logo.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-satellite/main/public/assets/chains/linea.logo.svg',
    blockExplorerUrls: ['https://lineascan.build/'],
    chainNativeContracts: {
      wrappedNativeToken: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff'
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6'
    },
    estimatedRouteDuration: 1800,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'base',
    chainType: 'evm',
    rpc: 'https://developer-access-mainnet.base.org',
    networkName: 'Base',
    chainId: 8453,
    nativeCurrency: {
      name: 'Base',
      symbol: 'ETH',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-satellite/main/public/assets/chains/base.logo.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-satellite/main/public/assets/chains/base.logo.svg',
    blockExplorerUrls: ['https://basescan.org/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x4200000000000000000000000000000000000006',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA'
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0x2d5d7d31F671F86C782533cc367F14109a082712'
    },
    estimatedRouteDuration: 1800,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'Avalanche',
    chainType: 'evm',
    rpc: 'https://api.avax.network/ext/bc/C/rpc',
    networkName: 'Avalanche',
    chainId: 43114,
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/avalanche.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/avalanche.svg',
    blockExplorerUrls: ['https://avascan.info/blockchain/c/'],
    chainNativeContracts: {
      wrappedNativeToken: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      ensRegistry: '0xa7eebb2926d22d34588497769889cbc2be0a5d97',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
    },
    axelarContracts: {
      gateway: '0x5029C0EFf6C34351a0CEc334542cDb22c7928f78',
      forecallable: ''
    },
    compliance: {
      trmIdentifier: 'avalanche_c_chain'
    },
    estimatedRouteDuration: 90,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'Polygon',
    chainType: 'evm',
    rpc: 'https://polygon-rpc.com',
    networkName: 'Polygon',
    chainId: 137,
    nativeCurrency: {
      name: 'Polygon',
      symbol: 'MATIC',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/polygon.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/polygon.svg',
    blockExplorerUrls: ['https://polygonscan.com/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
    },
    axelarContracts: {
      gateway: '0x6f015F16De9fC8791b234eF68D486d2bF203FBA8',
      forecallable: '0x2d5d7d31F671F86C782533cc367F14109a082712'
    },
    compliance: {
      trmIdentifier: 'polygon'
    },
    estimatedRouteDuration: 360,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'binance',
    chainType: 'evm',
    rpc: 'https://bsc-dataseed.binance.org',
    networkName: 'BNB Chain',
    chainId: 56,
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bnb.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bnb.svg',
    blockExplorerUrls: ['https://bscscan.com/'],
    chainNativeContracts: {
      wrappedNativeToken: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x55d398326f99059fF775485246999027B3197955'
    },
    axelarContracts: {
      gateway: '0x304acf330bbE08d1e512eefaa92F6a57871fD895',
      forecallable: '0x2d5d7d31F671F86C782533cc367F14109a082712'
    },
    compliance: {
      trmIdentifier: 'binance_smart_chain'
    },
    estimatedRouteDuration: 150,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'Fantom',
    chainType: 'evm',
    rpc: 'https://rpc.ankr.com/fantom',
    networkName: 'Fantom',
    chainId: 250,
    nativeCurrency: {
      name: 'FTM',
      symbol: 'FTM',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/fantom.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/fantom.svg',
    blockExplorerUrls: ['https://ftmscan.com/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
    },
    axelarContracts: {
      gateway: '0x304acf330bbE08d1e512eefaa92F6a57871fD895',
      forecallable: '0x2d5d7d31F671F86C782533cc367F14109a082712'
    },
    estimatedRouteDuration: 70,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'Moonbeam',
    chainType: 'evm',
    rpc: 'https://rpc.api.moonbeam.network',
    networkName: 'Moonbeam',
    chainId: 1284,
    nativeCurrency: {
      name: 'Moonbeam',
      symbol: 'GLMR',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    blockExplorerUrls: ['https://moonscan.io/'],
    chainNativeContracts: {
      wrappedNativeToken: '0xAcc15dC74880C9944775448304B263D191c6077F',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x931715fee2d06333043d11f658c8ce934ac61d0c'
    },
    axelarContracts: {
      gateway: '0x4F4495243837681061C4743b74B3eEdf548D56A5',
      forecallable: ''
    },
    estimatedRouteDuration: 120,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'mantle',
    chainType: 'evm',
    rpc: 'https://rpc.mantle.xyz',
    networkName: 'Mantle',
    chainId: 5000,
    nativeCurrency: {
      name: 'Mantle',
      symbol: 'MNT',
      decimals: 18,
      icon: 'https://assets.coingecko.com/coins/images/30980/small/token-logo.png?1689320029'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wmnt.svg',
    blockExplorerUrls: ['https://mantlescan.info/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x09bc4e0d864854c6afb6eb9a9cdf58ac190d0df9'
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0x2d5d7d31F671F86C782533cc367F14109a082712'
    },
    estimatedRouteDuration: 100,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'scroll',
    chainType: 'evm',
    rpc: 'https://rpc.scroll.io',
    networkName: 'Scroll',
    chainId: 534352,
    nativeCurrency: {
      name: 'Scroll',
      symbol: 'ETH',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/scroll.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/scroll.svg',
    blockExplorerUrls: ['https://scrollscan.com/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x5300000000000000000000000000000000000004',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4'
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0x2d5d7d31F671F86C782533cc367F14109a082712'
    },
    estimatedRouteDuration: 100,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'celo',
    chainType: 'evm',
    rpc: 'https://forno.celo.org',
    networkName: 'Celo',
    chainId: 42220,
    nativeCurrency: {
      name: 'CELO',
      symbol: 'CELO',
      decimals: 18,
      icon: 'https://celoscan.io/images/svg/brands/mainbrand-1.svg?v=23.5.4.0'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://celoscan.io/images/svg/brands/mainbrand-1.svg?v=23.5.4.0',
    blockExplorerUrls: ['https://celoscan.io/'],
    chainNativeContracts: {
      wrappedNativeToken: '0x471EcE3750Da237f93B8E339c536989b8978a438',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0x765DE816845861e75A25fCA122bb6898B8B1282a'
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: '0x2d5d7d31F671F86C782533cc367F14109a082712'
    },
    compliance: {
      trmIdentifier: 'celo'
    },
    estimatedRouteDuration: 90,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'kava',
    chainType: 'evm',
    rpc: 'https://evm2.kava.io',
    networkName: 'Kava',
    chainId: 2222,
    nativeCurrency: {
      name: 'Kava',
      symbol: 'KAVA',
      decimals: 18,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4846.png'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4846.png',
    blockExplorerUrls: ['https://kavascan.com/'],
    chainNativeContracts: {
      wrappedNativeToken: '0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b',
      ensRegistry: '',
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      usdcToken: '0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b'
    },
    axelarContracts: {
      gateway: '0xe432150cce91c13a887f7D836923d5597adD8E31',
      forecallable: ''
    },
    estimatedRouteDuration: 120,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'osmosis',
    chainType: 'cosmos',
    rpc: 'https://rpc.osmosis.zone',
    rpcList: [
      'https://rpc.osmosis.zone',
      'https://g.w.lavanet.xyz:443/gateway/cos3/rest/4cf0d03101ce9303fb4c7f8519719982',
      'https://rpc-osmosis.whispernode.com:443',
      'https://osmosis-rpc.stakely.io',
      'https://osmosis-rpc.quickapi.com:443'
    ],
    rest: 'https://osmosis-1--lcd--full.datahub.figment.io/apikey/6d8baa3d3e97e427db4bd7ffcfb21be4',
    networkName: 'Osmosis',
    chainId: 'osmosis-1',
    nativeCurrency: {
      name: 'Osmosis',
      symbol: 'OSMO',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/osmo.svg'
    },
    swapAmountForGas: '100000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/osmo.svg',
    blockExplorerUrls: ['https://www.mintscan.io/osmosis/'],
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'osmo',
      bech32PrefixAccPub: 'osmopub',
      bech32PrefixValAddr: 'osmovaloper',
      bech32PrefixValPub: 'osmovaloperpub',
      bech32PrefixConsAddr: 'osmovalcons',
      bech32PrefixConsPub: 'osmovalconspub'
    },
    feeCurrencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coingeckoId: 'osmosis'
      }
    ],
    stakeCurrency: {
      coinDenom: 'OSMO',
      coinMinimalDenom: 'uosmo',
      coinDecimals: 6,
      coingeckoId: 'osmosis'
    },
    currencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coingeckoId: 'osmosis'
      }
    ],
    features: ['ibc-transfer', 'ibc-go', 'ibc-pfm'],
    coinType: 118,
    axelarContracts: {
      gateway: ''
    },
    gasPriceStep: {
      low: 0.1,
      average: 0.2,
      high: 0.25
    },
    chainToAxelarChannelId: 'channel-208',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'cosmoshub',
    chainType: 'cosmos',
    rpc: 'https://cosmos-rpc.publicnode.com',
    rpcList: [
      'https://cosmos-rpc.quickapi.com:443',
      'https://cosmos-rpc.onivalidator.com',
      'https://rpc-cosmoshub.whispernode.com:443'
    ],
    rest: 'https://api.cosmos.network',
    networkName: 'Cosmos Hub',
    chainId: 'cosmoshub-4',
    nativeCurrency: {
      name: 'cosmoshub',
      symbol: 'ATOM',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png'
    },
    swapAmountForGas: '100000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/atom.svg',
    blockExplorerUrls: ['https://www.mintscan.io/cosmos/'],
    currencies: [
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: 'uatom',
        coinDecimals: 6,
        coingeckoId: 'cosmos'
      }
    ],
    stakeCurrency: {
      coinDenom: 'ATOM',
      coinMinimalDenom: 'uatom',
      coinDecimals: 6,
      coingeckoId: 'cosmos'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'cosmos',
      bech32PrefixAccPub: 'cosmospub',
      bech32PrefixValAddr: 'cosmosvaloper',
      bech32PrefixValPub: 'cosmosvaloperpub',
      bech32PrefixConsAddr: 'cosmosvalcons',
      bech32PrefixConsPub: 'cosmosvalconspub'
    },
    feeCurrencies: [
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: 'uatom',
        coinDecimals: 6,
        coingeckoId: 'cosmos'
      }
    ],
    features: ['ibc-transfer', 'ibc-go', 'ibc-pfm'],
    coinType: 118,
    gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.03
    },
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20,
    axelarContracts: {
      gateway: ''
    },
    compliance: {
      trmIdentifier: 'cosmos'
    },
    chainToAxelarChannelId: 'channel-293'
  },
  {
    chainName: 'dydx',
    chainType: 'cosmos',
    rpc: 'https://dydx-ops-rpc.kingnodes.com',
    rpcList: [
      'https://dydx-ops-rpc.kingnodes.com',
      'https://dydx-rpc.lavenderfive.com',
      'https://dydx-mainnet-rpc.autostake.com',
      'https://rpc-dydx.ecostake.com'
    ],
    rest: 'https://dydx-api.lavenderfive.com:443',
    nativeCurrency: {
      name: 'dydx',
      symbol: 'DYDX',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11156.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11156.png',
    blockExplorerUrls: ['https://www.mintscan.io/dydx/'],
    chainId: 'dydx-mainnet-1',
    networkName: 'dYdX',
    stakeCurrency: {
      coinDenom: 'adydx',
      coinMinimalDenom: 'adydx',
      coinDecimals: 6,
      coingeckoId: 'dydx'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'dydx',
      bech32PrefixAccPub: 'dydxpub',
      bech32PrefixValAddr: 'dydxvaloper',
      bech32PrefixValPub: 'dydxvaloperpub',
      bech32PrefixConsAddr: 'dydxvalcons',
      bech32PrefixConsPub: 'dydxvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'adydx',
        coinMinimalDenom: 'adydx',
        coinDecimals: 6,
        coingeckoId: 'dydx'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'uusdc',
        coinMinimalDenom: 'uusdc',
        coinDecimals: 6,
        coingeckoId: 'usdc'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'celestia',
    chainType: 'cosmos',
    rpc: 'https://public-celestia-rpc.numia.xyz',
    rpcList: [
      'https://public-celestia-rpc.numia.xyz',
      'https://rpc.lunaroasis.net',
      'https://rpc.celestia.nodestake.top'
    ],
    rest: 'https://public-celestia-lcd.numia.xyz',
    nativeCurrency: {
      name: 'celestia',
      symbol: 'TIA',
      decimals: 18,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/celestia.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI:
      'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/celestia.svg',
    blockExplorerUrls: ['https://www.mintscan.io/celestia/'],
    chainId: 'celestia',
    networkName: 'Celestia',
    stakeCurrency: {
      coinDenom: 'utia',
      coinMinimalDenom: 'utia',
      coinDecimals: 6,
      coingeckoId: 'celestia'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'celestia',
      bech32PrefixAccPub: 'celestiapub',
      bech32PrefixValAddr: 'celestiavaloper',
      bech32PrefixValPub: 'celestiavaloperpub',
      bech32PrefixConsAddr: 'celestiavalcons',
      bech32PrefixConsPub: 'celestiavalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'utia',
        coinMinimalDenom: 'utia',
        coinDecimals: 6,
        coingeckoId: 'celestia'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'utia',
        coinMinimalDenom: 'utia',
        coinDecimals: 6,
        coingeckoId: 'celestia'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.35,
      high: 0.5
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'kujira',
    chainType: 'cosmos',
    rpc: 'https://rpc.cosmos.directory/kujira',
    rpcList: [
      'https://rpc.cosmos.directory/kujira',
      'https://kujira-rpc.polkachu.com',
      'https://rpc-kujira.ecostake.com'
    ],
    rest: 'https://lcd.kaiyo.kujira.setten.io',
    networkName: 'Kujira',
    chainId: 'kaiyo-1',
    nativeCurrency: {
      name: 'Kuji',
      symbol: 'KUJI',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/15185.png'
    },
    swapAmountForGas: '200000',
    chainIconURI: 'https://axelarscan.io/logos/chains/kujira.svg',
    blockExplorerUrls: ['https://finder.kujira.network/kaiyo-1/'],
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'kujira',
      bech32PrefixAccPub: 'kujirapub',
      bech32PrefixValAddr: 'kujiravaloper',
      bech32PrefixValPub: 'kujiravaloperpub',
      bech32PrefixConsAddr: 'kujiravalcons',
      bech32PrefixConsPub: 'kujiravalconspub'
    },
    currencies: [
      {
        coinDenom: 'KUJI',
        coinMinimalDenom: 'ukuji',
        coinDecimals: 6,
        coingeckoId: 'kujira'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'KUJI',
        coinMinimalDenom: 'ukuji',
        coinDecimals: 6,
        coingeckoId: 'kujira'
      }
    ],
    stakeCurrency: {
      coinDenom: 'KUJI',
      coinMinimalDenom: 'ukuji',
      coinDecimals: 6,
      coingeckoId: 'kujira'
    },
    coinType: 118,
    gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.03
    },
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-9',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'neutron',
    chainType: 'cosmos',
    rpc: 'https://rpc-kralum.neutron-1.neutron.org',
    rpcList: [
      'https://rpc-kralum.neutron-1.neutron.org',
      'https://rpc.novel.remedy.tm.p2p.org',
      'https://neutron-rpc.lavenderfive.com'
    ],
    rest: 'https://rest-kralum.neutron-1.neutron.org',
    networkName: 'Neutron',
    chainId: 'neutron-1',
    nativeCurrency: {
      name: 'ntrn',
      symbol: 'NTRN',
      decimals: 6,
      icon: 'https://axelarscan.io/logos/chains/neutron.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://axelarscan.io/logos/chains/neutron.svg',
    blockExplorerUrls: ['https://www.mintscan.io/neutron/'],
    stakeCurrency: {
      coinDenom: 'NTRN',
      coinMinimalDenom: 'untrn',
      coinDecimals: 6,
      coingeckoId: 'neutron'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'neutron',
      bech32PrefixAccPub: 'neutronpub',
      bech32PrefixValAddr: 'neutronvaloper',
      bech32PrefixValPub: 'neutronvaloperpub',
      bech32PrefixConsAddr: 'neutronvalcons',
      bech32PrefixConsPub: 'neutronvalconspub'
    },
    currencies: [
      {
        coinDenom: 'NTRN',
        coinMinimalDenom: 'untrn',
        coinDecimals: 6,
        coingeckoId: 'neutron'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'NTRN',
        coinMinimalDenom: 'untrn',
        coinDecimals: 6,
        coingeckoId: 'neutron'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 5.665,
      average: 5.665,
      high: 7
    },
    features: ['ibc-transfer', 'ibc-go', 'ibc-pfm'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'stargaze',
    chainType: 'cosmos',
    rpc: 'https://stargaze-rpc.polkachu.com',
    rpcList: [
      'https://stargaze-rpc.polkachu.com',
      'https://rpc.stargaze-apis.com/',
      'https://rpc-stargaze-ia.cosmosia.notional.ventures/'
    ],
    rest: 'https://rest.stargaze-apis.com',
    nativeCurrency: {
      name: 'Stargaze',
      symbol: 'STARS',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stars.svg',
    blockExplorerUrls: [
      'https://www.mintscan.io/stargaze/',
      'https://ping.pub/stargaze/',
      'https://atomscan.com/stargaze/'
    ],
    chainId: 'stargaze-1',
    networkName: 'Stargaze',
    stakeCurrency: {
      coinDenom: 'STARS',
      coinMinimalDenom: 'ustars',
      coinDecimals: 6,
      coingeckoId: 'stargaze'
    },
    walletUrl: 'https://wallet.keplr.app/chains/stargaze',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/stargaze',
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'stars',
      bech32PrefixAccPub: 'starspub',
      bech32PrefixValAddr: 'starsvaloper',
      bech32PrefixValPub: 'starsvaloperpub',
      bech32PrefixConsAddr: 'starsvalcons',
      bech32PrefixConsPub: 'starsvalconspub'
    },
    currencies: [
      {
        coinDenom: 'STARS',
        coinMinimalDenom: 'ustars',
        coinDecimals: 6,
        coingeckoId: 'stargaze'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'STARS',
        coinMinimalDenom: 'ustars',
        coinDecimals: 6,
        coingeckoId: 'stargaze'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['ibc-transfer', 'ibc-go'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-50',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'axelarnet',
    chainType: 'cosmos',
    rpc: 'https://rpc-axelar.imperator.co',
    rpcList: [
      'https://rpc-axelar.imperator.co:443',
      'https://axelar-rpc.quickapi.com:443',
      'https://rpc-axelar.cosmos-spaces.cloud'
    ],
    rest: 'https://axelar-lcd.quickapi.com',
    chainId: 'axelar-dojo-1',
    networkName: 'Axelar',
    nativeCurrency: {
      name: 'Axelar',
      symbol: 'AXL',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    blockExplorerUrls: [
      'https://www.mintscan.io/axelar/',
      'https://axelar.explorers.guru/',
      'https://atomscan.com/axelar/'
    ],
    stakeCurrency: {
      coinDenom: 'AXL',
      coinMinimalDenom: 'uaxl',
      coinDecimals: 6,
      coingeckoId: 'axelar'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'axelar',
      bech32PrefixAccPub: 'axelarpub',
      bech32PrefixValAddr: 'axelarvaloper',
      bech32PrefixValPub: 'axelarvaloperpub',
      bech32PrefixConsAddr: 'axelarvalcons',
      bech32PrefixConsPub: 'axelarvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'AXL',
        coinMinimalDenom: 'uaxl',
        coinDecimals: 6,
        coingeckoId: 'axelar'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'AXL',
        coinMinimalDenom: 'uaxl',
        coinDecimals: 6,
        coingeckoId: 'axelar'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-0',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'noble',
    chainType: 'cosmos',
    rpc: 'https://rpc.mainnet.noble.strange.love',
    rpcList: ['https://rpc.mainnet.noble.strange.love', 'https://noble-rpc.polkachu.com'],
    rest: 'https://noble-api.polkachu.com',
    networkName: 'Noble',
    chainId: 'noble-1',
    nativeCurrency: {
      name: 'noble',
      symbol: 'Noble',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/noble/chainImg/logoImg/tokenImg.svg',
    blockExplorerUrls: ['https://mintscan.io/noble/'],
    stakeCurrency: {
      coinDenom: 'STAKE',
      coinMinimalDenom: 'ustake',
      coinDecimals: 6,
      coingeckoId: 'stake'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'noble',
      bech32PrefixAccPub: 'noblepub',
      bech32PrefixValAddr: 'noblevaloper',
      bech32PrefixValPub: 'noblevaloperpub',
      bech32PrefixConsAddr: 'noblevalcons',
      bech32PrefixConsPub: 'noblevalconspub'
    },
    currencies: [
      {
        coinDenom: 'USDC',
        coinMinimalDenom: 'uusdc',
        coinDecimals: 6,
        coingeckoId: 'usd-coin'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'USDC',
        coinMinimalDenom: 'uusdc',
        coinDecimals: 6,
        coingeckoId: 'usd-coin'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0,
      average: 0,
      high: 0.025
    },
    features: ['ibc-transfer', 'ibc-go', 'ibc-pfm'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedExpressRouteDuration: 20,
    estimatedRouteDuration: 180
  },
  {
    chainName: 'umee',
    chainType: 'cosmos',
    rpc: 'https://umee-rpc.polkachu.com',
    rpcList: [
      'https://umee-rpc.polkachu.com',
      'https://rpc-umee-ia.cosmosia.notional.ventures/',
      'http://umee.rpc.m.stavr.tech:10457'
    ],
    rest: 'https://umee-api.polkachu.com',
    nativeCurrency: {
      name: 'Umee',
      symbol: 'UMEE',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/umee.svg'
    },
    swapAmountForGas: '200000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/umee.svg',
    blockExplorerUrls: [
      'https://www.mintscan.io/umee/',
      'https://ping.pub/umee/',
      'https://umee.explorers.guru/',
      'https://atomscan.com/umee/'
    ],
    chainId: 'umee-1',
    networkName: 'Umee',
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'umee',
      bech32PrefixAccPub: 'umeepub',
      bech32PrefixValAddr: 'umeevaloper',
      bech32PrefixValPub: 'umeevaloperpub',
      bech32PrefixConsAddr: 'umeevalcons',
      bech32PrefixConsPub: 'umeevalconspub'
    },
    currencies: [
      {
        coinDenom: 'UMEE',
        coinMinimalDenom: 'uumee',
        coinDecimals: 6,
        coingeckoId: 'pool:uumee'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'UMEE',
        coinMinimalDenom: 'uumee',
        coinDecimals: 6,
        coingeckoId: 'pool:uumee'
      }
    ],
    stakeCurrency: {
      coinDenom: 'UMEE',
      coinMinimalDenom: 'uumee',
      coinDecimals: 6,
      coingeckoId: 'pool:uumee'
    },
    coinType: 118,
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-33',
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'secret-snip',
    chainType: 'cosmos',
    rpc: 'https://scrt.public-rpc.com',
    rpcList: ['https://scrt.public-rpc.com', 'https://1rpc.io/scrt-rpc'],
    rest: 'https://lcd.secret.express',
    networkName: 'Secret',
    chainId: 'secret-4',
    nativeCurrency: {
      name: 'Secret',
      symbol: 'SCRT',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5604.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/scrt.svg',
    blockExplorerUrls: ['https://www.mintscan.io/secret/'],
    bip44: {
      coinType: 529
    },
    bech32Config: {
      bech32PrefixAccAddr: 'secret',
      bech32PrefixAccPub: 'secretpub',
      bech32PrefixValAddr: 'secretvaloper',
      bech32PrefixValPub: 'secretvaloperpub',
      bech32PrefixConsAddr: 'secretvalcons',
      bech32PrefixConsPub: 'secretvalconspub'
    },
    feeCurrencies: [
      {
        coinDenom: 'SCRT',
        coinMinimalDenom: 'uscrt',
        coinDecimals: 6,
        coingeckoId: 'secret'
      }
    ],
    stakeCurrency: {
      coinDenom: 'SCRT',
      coinMinimalDenom: 'uscrt',
      coinDecimals: 6,
      coingeckoId: 'secret'
    },
    currencies: [
      {
        coinDenom: 'SCRT',
        coinMinimalDenom: 'uscrt',
        coinDecimals: 6,
        coingeckoId: 'secret'
      }
    ],
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    coinType: 529,
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-20',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'persistence',
    chainType: 'cosmos',
    rpc: 'https://persistence-rpc.polkachu.com',
    rpcList: [
      'https://persistence-rpc.polkachu.com',
      'https://rpc.core.persistence.one',
      'https://rpc-persistent-ia.cosmosia.notional.ventures/'
    ],
    rest: 'https://persistence-api.polkachu.com',
    nativeCurrency: {
      name: 'Persistence',
      symbol: 'XPRT',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/xprt.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/xprt.svg',
    blockExplorerUrls: ['https://www.mintscan.io/persistence/', 'https://ping.pub/persistence/'],
    chainId: 'core-1',
    networkName: 'Persistence',
    stakeCurrency: {
      coinDenom: 'XPRT',
      coinMinimalDenom: 'uxprt',
      coinDecimals: 6,
      coingeckoId: 'persistence'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'persistence',
      bech32PrefixAccPub: 'persistencepub',
      bech32PrefixValAddr: 'persistencevaloper',
      bech32PrefixValPub: 'persistencevaloperpub',
      bech32PrefixConsAddr: 'persistencevalcons',
      bech32PrefixConsPub: 'persistencevalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'XPRT',
        coinMinimalDenom: 'uxprt',
        coinDecimals: 6,
        coingeckoId: 'persistence'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'XPRT',
        coinMinimalDenom: 'uxprt',
        coinDecimals: 6,
        coingeckoId: 'persistence'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-51',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'sommelier',
    chainType: 'cosmos',
    rpc: 'https://sommelier-rpc.polkachu.com',
    rpcList: [
      'https://sommelier-rpc.polkachu.com',
      'https://rpc-sommelier.pupmos.network',
      'https://sommelier-rpc.lavenderfive.com/'
    ],
    rest: 'https://lcd-sommelier.imperator.co',
    nativeCurrency: {
      name: 'Sommelier',
      symbol: 'SOMM',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/somm.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/somm.svg',
    blockExplorerUrls: ['https://www.mintscan.io/sommelier/', 'https://sommscan.io/'],
    chainId: 'sommelier-3',
    networkName: 'Sommelier',
    stakeCurrency: {
      coinDenom: 'SOMM',
      coinMinimalDenom: 'usomm',
      coinDecimals: 6,
      coingeckoId: 'usomm'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'somm',
      bech32PrefixAccPub: 'sommpub',
      bech32PrefixValAddr: 'sommvaloper',
      bech32PrefixValPub: 'sommvaloperpub',
      bech32PrefixConsAddr: 'sommvalcons',
      bech32PrefixConsPub: 'sommvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'SOMM',
        coinMinimalDenom: 'usomm',
        coinDecimals: 6,
        coingeckoId: 'usomm'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'SOMM',
        coinMinimalDenom: 'usomm',
        coinDecimals: 6,
        coingeckoId: 'usomm'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-5',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'stride',
    chainType: 'cosmos',
    rpc: 'https://stride-rpc.publicnode.com',
    rpcList: [
      'https://stride-rpc.polkachu.com/',
      'https://stride-rpc.onivalidator.com',
      'http://rpc-stride.nodeist.net'
    ],
    rest: 'https://stride-fleet.main.stridenet.co/api',
    nativeCurrency: {
      name: 'Stride',
      symbol: 'STRD',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21781.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/strd.svg',
    blockExplorerUrls: ['https://www.mintscan.io/stride/', 'https://atomscan.com/stride/'],
    chainId: 'stride-1',
    networkName: 'Stride',
    stakeCurrency: {
      coinDenom: 'STRD',
      coinMinimalDenom: 'ustrd',
      coinDecimals: 6,
      coingeckoId: 'stride'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'stride',
      bech32PrefixAccPub: 'stridepub',
      bech32PrefixValAddr: 'stridevaloper',
      bech32PrefixValPub: 'stridevaloperpub',
      bech32PrefixConsAddr: 'stridevalcons',
      bech32PrefixConsPub: 'stridevalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'STRD',
        coinMinimalDenom: 'ustrd',
        coinDecimals: 6,
        coingeckoId: 'stride'
      },
      {
        coinDenom: 'stATOM',
        coinMinimalDenom: 'stuatom',
        coinDecimals: 6
      },
      {
        coinDenom: 'stOSMO',
        coinMinimalDenom: 'stuosmo',
        coinDecimals: 6
      },
      {
        coinDenom: 'stJUNO',
        coinMinimalDenom: 'stujuno',
        coinDecimals: 6
      },
      {
        coinDenom: 'stSTARS',
        coinMinimalDenom: 'stustars',
        coinDecimals: 6
      },
      {
        coinDenom: 'stEVMOS',
        coinMinimalDenom: 'staevmos',
        coinDecimals: 18
      },
      {
        coinDenom: 'stLUNA',
        coinMinimalDenom: 'stuluna',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'STRD',
        coinMinimalDenom: 'ustrd',
        coinDecimals: 6,
        coingeckoId: 'stride'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-69',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'injective',
    chainType: 'cosmos',
    rpc: 'https://injective-rpc.polkachu.com',
    rpcList: [
      'https://injective-rpc.polkachu.com',
      'https://rpc-injective.goldenratiostaking.net',
      'https://injective-rpc.lavenderfive.com:443'
    ],
    rest: 'https://lcd.injective.network',
    networkName: 'Injective',
    chainId: 'injective-1',
    nativeCurrency: {
      name: 'Injective',
      symbol: 'INJ',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7226.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/inj.svg',
    blockExplorerUrls: ['https://www.mintscan.io/injective/'],
    stakeCurrency: {
      coinDenom: 'INJ',
      coinMinimalDenom: 'inj',
      coinDecimals: 18,
      coingeckoId: 'injective-protocol'
    },
    walletUrl: 'https://hub.injective.network/',
    walletUrlForStaking: 'https://hub.injective.network/',
    bip44: {
      coinType: 60
    },
    bech32Config: {
      bech32PrefixAccAddr: 'inj',
      bech32PrefixAccPub: 'injpub',
      bech32PrefixValAddr: 'injvaloper',
      bech32PrefixValPub: 'injvaloperpub',
      bech32PrefixConsAddr: 'injvalcons',
      bech32PrefixConsPub: 'injvalconspub'
    },
    currencies: [
      {
        coinDenom: 'INJ',
        coinMinimalDenom: 'inj',
        coinDecimals: 18,
        coingeckoId: 'injective-protocol'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'INJ',
        coinMinimalDenom: 'inj',
        coinDecimals: 18,
        coingeckoId: 'injective-protocol'
      }
    ],
    gasPriceStep: {
      low: 5000000000,
      average: 25000000000,
      high: 40000000000
    },
    coinType: 60,
    features: ['ibc-transfer', 'ibc-go'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-84',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'crescent',
    chainType: 'cosmos',
    rpc: 'https://crescent-rpc.polkachu.com',
    rpcList: [
      'https://mainnet.crescent.network:26657',
      'https://crescent-rpc.polkachu.com',
      'https://rpc-crescent.pupmos.network'
    ],
    rest: 'https://mainnet.crescent.network:1317',
    networkName: 'Crescent',
    chainId: 'crescent-1',
    nativeCurrency: {
      name: 'Crescent',
      symbol: 'CRE',
      decimals: 6,
      icon: 'https://static-resources.crescent.network/CRE.png'
    },
    swapAmountForGas: '200000',
    chainIconURI: 'https://static-resources.crescent.network/CRE.png',
    blockExplorerUrls: ['https://www.mintscan.io/crescent/'],
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'cre',
      bech32PrefixAccPub: 'crepub',
      bech32PrefixValAddr: 'crevaloper',
      bech32PrefixValPub: 'crevaloperpub',
      bech32PrefixConsAddr: 'crevalcons',
      bech32PrefixConsPub: 'crevalconspub'
    },
    currencies: [
      {
        coinDenom: 'CRE',
        coinMinimalDenom: 'ucre',
        coinDecimals: 6,
        coingeckoId: 'crescent'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'CRE',
        coinMinimalDenom: 'ucre',
        coinDecimals: 6,
        coingeckoId: 'crescent'
      }
    ],
    stakeCurrency: {
      coinDenom: 'CRE',
      coinMinimalDenom: 'ucre',
      coinDecimals: 6,
      coingeckoId: 'crescent'
    },
    coinType: 118,
    gasPriceStep: {
      low: 1,
      average: 1,
      high: 1
    },
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20,
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-4'
  },
  {
    chainName: 'terra-2',
    chainType: 'cosmos',
    rpc: 'https://terra-rpc.polkachu.com',
    rpcList: [
      'https://terra-rpc.polkachu.com',
      'https://terra-rpc.stakely.io:443/',
      'https://phoenix-rpc.terra.dev:443'
    ],
    rest: 'https://phoenix-lcd.terra.dev',
    networkName: 'Terra',
    chainId: 'phoenix-1',
    nativeCurrency: {
      name: 'Luna',
      symbol: 'LUNA',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/1c761075a4ae672089c2b1cf25739c6368e97bb7/public/images/chains/terra-2.svg'
    },
    swapAmountForGas: '2000000',
    chainIconURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/1c761075a4ae672089c2b1cf25739c6368e97bb7/public/images/chains/terra-2.svg',
    blockExplorerUrls: ['http://finder.terra.money/mainnet/'],
    stakeCurrency: {
      coinDenom: 'LUNA',
      coinMinimalDenom: 'uluna',
      coinDecimals: 6,
      coingeckoId: 'terra-luna-2'
    },
    bip44: {
      coinType: 330
    },
    bech32Config: {
      bech32PrefixAccAddr: 'terra',
      bech32PrefixAccPub: 'terrapub',
      bech32PrefixValAddr: 'terravaloper',
      bech32PrefixValPub: 'terravaloperpub',
      bech32PrefixConsAddr: 'terravalcons',
      bech32PrefixConsPub: 'terravalconspub'
    },
    currencies: [
      {
        coinDenom: 'LUNA',
        coinMinimalDenom: 'uluna',
        coinDecimals: 6,
        coingeckoId: 'terra-luna-2'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'LUNA',
        coinMinimalDenom: 'uluna',
        coinDecimals: 6,
        coingeckoId: 'terra-luna-2'
      }
    ],
    coinType: 330,
    gasPriceStep: {
      low: 5.665,
      average: 5.665,
      high: 7
    },
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-pfm'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-6',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'juno',
    chainType: 'cosmos',
    rpc: 'https://juno-rpc.polkachu.com',
    rpcList: [
      'https://rpc-juno.whispernode.com:443',
      'http://juno.rpc.m.stavr.tech:1067',
      'https://juno-rpc.polkachu.com'
    ],
    rest: 'https://lcd-juno.itastakers.com',
    networkName: 'Juno',
    chainId: 'juno-1',
    nativeCurrency: {
      name: 'Juno',
      symbol: 'JUNO',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/juno.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/juno.svg',
    blockExplorerUrls: ['https://www.mintscan.io/juno/'],
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'juno',
      bech32PrefixAccPub: 'junopub',
      bech32PrefixValAddr: 'junovaloper',
      bech32PrefixValPub: 'junovaloperpub',
      bech32PrefixConsAddr: 'junovalcons',
      bech32PrefixConsPub: 'junovalconspub'
    },
    currencies: [
      {
        coinDenom: 'JUNO',
        coinMinimalDenom: 'ujuno',
        coinDecimals: 6,
        coingeckoId: 'juno-network'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'JUNO',
        coinMinimalDenom: 'ujuno',
        coinDecimals: 6,
        coingeckoId: 'juno-network'
      }
    ],
    stakeCurrency: {
      coinDenom: 'JUNO',
      coinMinimalDenom: 'ujuno',
      coinDecimals: 6,
      coingeckoId: 'juno-network'
    },
    gasPriceStep: {
      low: 5000000000,
      average: 25000000000,
      high: 40000000000
    },
    coinType: 118,
    features: ['ibc-pfm', 'cosmwasm'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-71',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'evmos',
    chainType: 'cosmos',
    rpc: 'https://evmos-rpc.polkachu.com',
    rpcList: [
      'https://evmos-rpc.polkachu.com',
      'https://evmos-rpc.publicnode.com',
      'https://rpc.evmos.nodestake.top'
    ],
    rest: 'https://evmos-rest.publicnode.com',
    nativeCurrency: {
      name: 'Evmos',
      symbol: 'EVMOS',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI:
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
    networkName: 'Evmos',
    chainId: 'evmos_9001-2',
    blockExplorerUrls: [
      'https://www.mintscan.io/evmos/',
      'https://evmos.bigdipper.live/',
      'https://evm.evmos.org/',
      'https://ping.pub/evmos/',
      'https://evmos.explorers.guru/',
      'https://atomscan.com/evmos/',
      'https://evmos.tcnetwork.io/'
    ],
    stakeCurrency: {
      coinDenom: 'EVMOS',
      coinMinimalDenom: 'aevmos',
      coinDecimals: 18,
      coingeckoId: 'evmos'
    },
    walletUrl: 'https://wallet.keplr.app/chains/evmos',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/evmos',
    bip44: {
      coinType: 60
    },
    bech32Config: {
      bech32PrefixAccAddr: 'evmos',
      bech32PrefixAccPub: 'evmospub',
      bech32PrefixValAddr: 'evmosvaloper',
      bech32PrefixValPub: 'evmosvaloperpub',
      bech32PrefixConsAddr: 'evmosvalcons',
      bech32PrefixConsPub: 'evmosvalconspub'
    },
    currencies: [
      {
        coinDenom: 'EVMOS',
        coinMinimalDenom: 'aevmos',
        coinDecimals: 18,
        coingeckoId: 'evmos'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'EVMOS',
        coinMinimalDenom: 'aevmos',
        coinDecimals: 18,
        coingeckoId: 'evmos'
      }
    ],
    gasPriceStep: {
      low: 25000000000,
      average: 25000000000,
      high: 224000000000000000
    },
    coinType: 60,
    features: ['ibc-transfer', 'ibc-go', 'eth-address-gen', 'eth-key-sign'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-21',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'sei',
    chainType: 'cosmos',
    rpc: 'https://rpc.sei-apis.com',
    rpcList: [
      'https://rpc.sei-apis.com',
      'https://sei-rpc.lavenderfive.com:443',
      'https://sei-rpc.polkachu.com/',
      'https://rpc-sei.whispernode.com:443'
    ],
    rest: 'https://rest.sei-apis.com',
    nativeCurrency: {
      name: 'SEI',
      symbol: 'SEI',
      decimals: 6,
      icon: 'https://docs.axelar.dev/images/chains/sei.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sei.svg',
    networkName: 'Sei',
    chainId: 'pacific-1',
    blockExplorerUrls: ['https://www.mintscan.io/sei/'],
    stakeCurrency: {
      coinDenom: 'SEI',
      coinMinimalDenom: 'usei',
      coinDecimals: 6,
      coingeckoId: 'sei-network'
    },
    walletUrl: 'https://wallet.keplr.app/chains/sei',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/sei',
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'sei',
      bech32PrefixAccPub: 'seipub',
      bech32PrefixValAddr: 'seivaloper',
      bech32PrefixValPub: 'seivaloperpub',
      bech32PrefixConsAddr: 'seivalcons',
      bech32PrefixConsPub: 'seivalconspub'
    },
    currencies: [
      {
        coinDenom: 'SEI',
        coinMinimalDenom: 'usei',
        coinDecimals: 6,
        coingeckoId: 'sei-network'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'SEI',
        coinMinimalDenom: 'usei',
        coinDecimals: 6,
        coingeckoId: 'sei-network'
      }
    ],
    gasPriceStep: {
      low: 25000000000,
      average: 25000000000,
      high: 40000000000
    },
    coinType: 118,
    features: ['ibc-transfer', 'ibc-go'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'carbon',
    chainType: 'cosmos',
    rpc: 'https://carbon-rpc.lavenderfive.com',
    rpcList: ['https://tm-api.carbon.network', 'https://rpc.carbon.blockhunters.org'],
    rest: 'https://api.carbon.network',
    nativeCurrency: {
      name: 'swth',
      symbol: 'SWTH',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/swth.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/swth.svg',
    blockExplorerUrls: ['https://scan.carbon.network/'],
    chainId: 'carbon-1',
    networkName: 'Carbon',
    stakeCurrency: {
      coinDenom: 'SWTH',
      coinMinimalDenom: 'uswth',
      coinDecimals: 6,
      coingeckoId: 'switcheo'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'swth',
      bech32PrefixAccPub: 'swthpub',
      bech32PrefixValAddr: 'swthvaloper',
      bech32PrefixValPub: 'swthvaloperpub',
      bech32PrefixConsAddr: 'swthvalcons',
      bech32PrefixConsPub: 'swthvalconspub'
    },
    currencies: [
      {
        coinDenom: 'SWTH',
        coinMinimalDenom: 'uswth',
        coinDecimals: 6,
        coingeckoId: 'switcheo'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'SWTH',
        coinMinimalDenom: 'uswth',
        coinDecimals: 6,
        coingeckoId: 'switcheo'
      }
    ],
    coinType: 118,
    features: ['ibc-transfer', 'ibc-go'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-7',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'regen',
    chainType: 'cosmos',
    rpc: 'https://rpc-regen.ecostake.com',
    rpcList: [
      'https://rpc-regen.ecostake.com',
      'http://public-rpc.regen.vitwit.com:26657',
      'https://rpc-regen-ia.cosmosia.notional.ventures/'
    ],
    rest: 'https://rest-regen.ecostake.com',
    nativeCurrency: {
      name: 'Regen Network',
      symbol: 'REGEN',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/regen.svg',
    blockExplorerUrls: [
      'https://www.mintscan.io/regen/',
      'https://ping.pub/regen/',
      'https://regen.bigdipper.live/',
      'https://atomscan.com/regen-network/'
    ],
    chainId: 'regen-1',
    networkName: 'Regen',
    stakeCurrency: {
      coinDenom: 'REGEN',
      coinMinimalDenom: 'uregen',
      coinDecimals: 6,
      coingeckoId: 'regen'
    },
    walletUrl: 'https://wallet.keplr.app/chains/regen',
    walletUrlForStaking: 'https://wallet.keplr.app/chains/regen',
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'regen',
      bech32PrefixAccPub: 'regenpub',
      bech32PrefixValAddr: 'regenvaloper',
      bech32PrefixValPub: 'regenvaloperpub',
      bech32PrefixConsAddr: 'regenvalcons',
      bech32PrefixConsPub: 'regenvalconspub'
    },
    currencies: [
      {
        coinDenom: 'REGEN',
        coinMinimalDenom: 'uregen',
        coinDecimals: 6,
        coingeckoId: 'regen'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'REGEN',
        coinMinimalDenom: 'uregen',
        coinDecimals: 6,
        coingeckoId: 'regen'
      }
    ],
    gasPriceStep: {
      low: 0.015,
      average: 0.025,
      high: 0.04
    },
    coinType: 118,
    features: ['ibc-go', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-48',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'agoric',
    chainType: 'cosmos',
    rpc: 'https://main.rpc.agoric.net',
    rpcList: [
      'https://rpc.agoric.nodestake.top',
      'https://agoric.rpc.kjnodes.com',
      'https://rpc-agoric-01.stakeflow.io'
    ],
    rest: 'https://main.api.agoric.net',
    networkName: 'Agoric',
    chainId: 'agoric-3',
    nativeCurrency: {
      name: 'Agoric',
      symbol: 'BLD',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://axelarscan.io/logos/chains/agoric.svg',
    blockExplorerUrls: [
      'https://agoric.bigdipper.live/',
      'https://agoric.explorers.guru/',
      'https://atomscan.com/agoric/'
    ],
    bip44: {
      coinType: 564
    },
    bech32Config: {
      bech32PrefixAccAddr: 'agoric',
      bech32PrefixAccPub: 'agoricpub',
      bech32PrefixValAddr: 'agoricvaloper',
      bech32PrefixValPub: 'agoricvaloperpub',
      bech32PrefixConsAddr: 'agoricvalcons',
      bech32PrefixConsPub: 'agoricvalconspub'
    },
    currencies: [
      {
        coinDenom: 'BLD',
        coinMinimalDenom: 'ubld',
        coinDecimals: 6,
        coingeckoId: 'agoric'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'BLD',
        coinMinimalDenom: 'ubld',
        coinDecimals: 6,
        coingeckoId: 'agoric'
      }
    ],
    stakeCurrency: {
      coinDenom: 'BLD',
      coinMinimalDenom: 'ubld',
      coinDecimals: 6,
      coingeckoId: 'agoric'
    },
    coinType: 564,
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-9',
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    gasPriceStep: {
      low: 0.1,
      average: 0.2,
      high: 0.25
    },
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'chihuahua',
    chainType: 'cosmos',
    rpc: 'https://rpc.chihuahua.wtf',
    rpcList: [
      'https://rpc.chihuahua.wtf',
      'https://rpc-chihuahua.ecostake.com',
      'https://chihuahua-rpc.polkachu.com'
    ],
    rest: 'https://api.chihuahua.wtf',
    nativeCurrency: {
      name: 'Chihuahua',
      symbol: 'HUAHUA',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg'
    },
    swapAmountForGas: '10000000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    blockExplorerUrls: ['https://mintscan.io/chihuahua/', 'https://ping.pub/chihuahua/'],
    chainId: 'chihuahua-1',
    networkName: 'Chihuahua',
    stakeCurrency: {
      coinDenom: 'HUAHUA',
      coinMinimalDenom: 'uhuahua',
      coinDecimals: 6,
      coingeckoId: 'chihuahua-token'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'chihuahua',
      bech32PrefixAccPub: 'chihuahuapub',
      bech32PrefixValAddr: 'chihuahuavaloper',
      bech32PrefixValPub: 'chihuahuavaloperpub',
      bech32PrefixConsAddr: 'chihuahuavalcons',
      bech32PrefixConsPub: 'chihuahuavalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'HUAHUA',
        coinMinimalDenom: 'uhuahua',
        coinDecimals: 6,
        coingeckoId: 'chihuahua-token'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'HUAHUA',
        coinMinimalDenom: 'uhuahua',
        coinDecimals: 6,
        coingeckoId: 'chihuahua-token'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'akash',
    chainType: 'cosmos',
    rpc: 'https://rpc.akash.forbole.com:443',
    rpcList: [
      'https://rpc.akash.forbole.com:443',
      'https://rpc-akash.ecostake.com:443',
      'https://akash-rpc.lavenderfive.com:443'
    ],
    rest: 'https://api.akash.forbole.com:443',
    nativeCurrency: {
      name: 'Akash Network',
      symbol: 'AKT',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/akt.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/akt.svg',
    blockExplorerUrls: ['https://www.mintscan.io/akash/', 'https://ping.pub/akash-network/'],
    chainId: 'akashnet-2',
    networkName: 'Akash',
    stakeCurrency: {
      coinDenom: 'AKT',
      coinMinimalDenom: 'uakt',
      coinDecimals: 6,
      coingeckoId: 'akash-network'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'akash',
      bech32PrefixAccPub: 'akashpub',
      bech32PrefixValAddr: 'akashvaloper',
      bech32PrefixValPub: 'akashvaloperpub',
      bech32PrefixConsAddr: 'akashvalcons',
      bech32PrefixConsPub: 'akashvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'AKT',
        coinMinimalDenom: 'uakt',
        coinDecimals: 6,
        coingeckoId: 'akash-network'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'AKT',
        coinMinimalDenom: 'uakt',
        coinDecimals: 6,
        coingeckoId: 'akash-network'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'comdex',
    chainType: 'cosmos',
    rpc: 'https://rpc.comdex.one',
    rpcList: [
      'https://rpc.comdex.one',
      'https://comdex-rpc.polkachu.com',
      'https://rpc-comdex.cosmos-spaces.cloud'
    ],
    rest: 'https://rest.comdex.one',
    chainId: 'comdex-1',
    networkName: 'Comdex',
    nativeCurrency: {
      name: 'Comdex',
      symbol: 'CMDX',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/cmdx.svg',
    blockExplorerUrls: [
      'https://www.mintscan.io/comdex/',
      'https://comdex.aneka.io/',
      'https://ping.pub/comdex/',
      'https://atomscan.com/comdex/'
    ],
    stakeCurrency: {
      coinDenom: 'CMDX',
      coinMinimalDenom: 'ucmdx',
      coinDecimals: 6,
      coingeckoId: 'cmdx'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'comdex',
      bech32PrefixAccPub: 'comdexpub',
      bech32PrefixValAddr: 'comdexvaloper',
      bech32PrefixValPub: 'comdexvaloperpub',
      bech32PrefixConsAddr: 'comdexvalcons',
      bech32PrefixConsPub: 'comdexvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'CMDX',
        coinMinimalDenom: 'ucmdx',
        coinDecimals: 6,
        coingeckoId: 'comdex'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'CMDX',
        coinMinimalDenom: 'ucmdx',
        coinDecimals: 6,
        coingeckoId: 'comdex'
      }
    ],
    gasPriceStep: {
      low: 0.01,
      average: 0.03,
      high: 0.05
    },
    coinType: 118,
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-34',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'archway',
    chainType: 'cosmos',
    rpc: 'https://rpc-archway.cosmos-spaces.cloud',
    rpcList: [
      'https://rpc.mainnet.archway.io',
      'https://rpc-archway.cosmos-spaces.cloud',
      'https://archway-mainnet-archive.allthatnode.com:26657'
    ],
    rest: 'https://api.mainnet.archway.io',
    nativeCurrency: {
      name: 'Archway',
      symbol: 'ARCH',
      decimals: 18,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27358.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/arch.svg',
    blockExplorerUrls: ['https://mintscan.io/archway/', 'https://archway.explorers.guru/'],
    chainId: 'archway-1',
    networkName: 'Archway',
    stakeCurrency: {
      coinDenom: 'ARCH',
      coinMinimalDenom: 'aarch',
      coinDecimals: 18,
      coingeckoId: 'archway'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'archway',
      bech32PrefixAccPub: 'archwaypub',
      bech32PrefixValAddr: 'archwayvaloper',
      bech32PrefixValPub: 'archwayvaloperpub',
      bech32PrefixConsAddr: 'archwayvalcons',
      bech32PrefixConsPub: 'archwayvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'ARCH',
        coinMinimalDenom: 'aarch',
        coinDecimals: 18,
        coingeckoId: 'archway'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'ARCH',
        coinMinimalDenom: 'aarch',
        coinDecimals: 18,
        coingeckoId: 'archway'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-13',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'quicksilver',
    chainType: 'cosmos',
    rpc: 'https://rpc.quicksilver.zone:443',
    rpcList: [
      'https://rpc-quicksilver.takeshi.team:443',
      'https://rpc.quicksilver.zone:443',
      'https://rpc-quicksilver-ia.cosmosia.notional.ventures:443'
    ],
    rest: 'https://api-quicksilver.takeshi.team:443',
    nativeCurrency: {
      name: 'Quicksilver',
      symbol: 'QCK',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24834.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI:
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
    blockExplorerUrls: [
      'https://www.mintscan.io/quicksilver/',
      'https://exp.utsa.tech/quicksilver/'
    ],
    chainId: 'quicksilver-2',
    networkName: 'Quicksilver',
    stakeCurrency: {
      coinDenom: 'QCK',
      coinMinimalDenom: 'uqck',
      coinDecimals: 6,
      coingeckoId: 'quicksilver'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'quick',
      bech32PrefixAccPub: 'quickpub',
      bech32PrefixValAddr: 'quickvaloper',
      bech32PrefixValPub: 'quickvaloperpub',
      bech32PrefixConsAddr: 'quickvalcons',
      bech32PrefixConsPub: 'quickvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'QCK',
        coinMinimalDenom: 'uqck',
        coinDecimals: 6,
        coingeckoId: 'quicksilver'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'QCK',
        coinMinimalDenom: 'uqck',
        coinDecimals: 6,
        coingeckoId: 'quicksilver'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'omniflixhub',
    chainType: 'cosmos',
    rpc: 'https://omniflix.kingnodes.com',
    rpcList: [
      'https://omniflix.kingnodes.com',
      'https://rpc-omniflixhub-ia.cosmosia.notional.ventures/',
      'https://omniflixhub-rpc.lavenderfive.com/'
    ],
    rest: 'https://api.omniflix.nodestake.top',
    nativeCurrency: {
      name: 'OmniFlix Network',
      symbol: 'FLIX',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/flix.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/flix.svg',
    blockExplorerUrls: ['https://www.mintscan.io/omniflix/', 'https://atomscan.com/omniflixhub/'],
    chainId: 'omniflixhub-1',
    networkName: 'OmniFlix',
    stakeCurrency: {
      coinDenom: 'FLIX',
      coinMinimalDenom: 'uflix',
      coinDecimals: 6,
      coingeckoId: 'omniflix-network'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'omniflix',
      bech32PrefixAccPub: 'omniflixpub',
      bech32PrefixValAddr: 'omniflixvaloper',
      bech32PrefixValPub: 'omniflixvaloperpub',
      bech32PrefixConsAddr: 'omniflixvalcons',
      bech32PrefixConsPub: 'omniflixvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'FLIX',
        coinMinimalDenom: 'uflix',
        coinDecimals: 6,
        coingeckoId: 'omniflix-network'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'FLIX',
        coinMinimalDenom: 'uflix',
        coinDecimals: 6,
        coingeckoId: 'omniflix-network'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'coreum',
    chainType: 'cosmos',
    rpc: 'https://full-node.mainnet-1.coreum.dev:26657',
    rpcList: [
      'https://full-node.mainnet-1.coreum.dev:26657',
      'https://full-node-californium.mainnet-1.coreum.dev:26657',
      'https://full-node-curium.mainnet-1.coreum.dev:26657',
      'https://full-node-uranium.mainnet-1.coreum.dev:26657'
    ],
    rest: 'https://rest-coreum.ecostake.com',
    nativeCurrency: {
      name: 'Coreum',
      symbol: 'COREUM',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/coreum.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/coreum.svg',
    blockExplorerUrls: ['https://www.mintscan.io/coreum/', 'https://explorer.coreum.com/coreum'],
    chainId: 'coreum-mainnet-1',
    networkName: 'Coreum',
    stakeCurrency: {
      coinDenom: 'COREUM',
      coinMinimalDenom: 'ucore',
      coinDecimals: 6,
      coingeckoId: 'coreum'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'core',
      bech32PrefixAccPub: 'corepub',
      bech32PrefixValAddr: 'corevaloper',
      bech32PrefixValPub: 'corevaloperpub',
      bech32PrefixConsAddr: 'corevalcons',
      bech32PrefixConsPub: 'corevalconspub'
    },
    bip44: {
      coinType: 990
    },
    currencies: [
      {
        coinDenom: 'COREUM',
        coinMinimalDenom: 'ucore',
        coinDecimals: 6,
        coingeckoId: 'coreum'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'COREUM',
        coinMinimalDenom: 'ucore',
        coinDecimals: 6,
        coingeckoId: 'coreum'
      }
    ],
    coinType: 990,
    gasPriceStep: {
      low: 0.0625,
      average: 0.0625,
      high: 62.5
    },
    features: [],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'migaloo',
    chainType: 'cosmos',
    rpc: 'https://migaloo-rpc.lavenderfive.com',
    rpcList: [
      'https://migaloo-rpc.lavenderfive.com',
      'https://rpc-migaloo.cosmos-spaces.cloud',
      'https://migaloo-rpc.kleomedes.network:443'
    ],
    rest: 'https://migaloo-api.lavenderfive.com',
    nativeCurrency: {
      name: 'Whale',
      symbol: 'WHALE',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/whale.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/migaloo.svg',
    blockExplorerUrls: ['https://atomscan.com/migaloo/', 'https://explorer.silknodes.io/migaloo/'],
    chainId: 'migaloo-1',
    networkName: 'Migaloo',
    stakeCurrency: {
      coinDenom: 'WHALE',
      coinMinimalDenom: 'uwhale',
      coinDecimals: 6,
      coingeckoId: 'white-whale'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'migaloo',
      bech32PrefixAccPub: 'migaloopub',
      bech32PrefixValAddr: 'migaloovaloper',
      bech32PrefixValPub: 'migaloovaloperpub',
      bech32PrefixConsAddr: 'migaloovalcons',
      bech32PrefixConsPub: 'migaloovalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'WHALE',
        coinMinimalDenom: 'uwhale',
        coinDecimals: 6,
        coingeckoId: 'white-whale'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'WHALE',
        coinMinimalDenom: 'uwhale',
        coinDecimals: 6,
        coingeckoId: 'white-whale'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'mars',
    chainType: 'cosmos',
    rpc: 'https://rpc.marsprotocol.io:443',
    rpcList: [
      'https://rpc.marsprotocol.io:443',
      'https://mars-rpc.polkachu.com',
      'https://rpc.expedition-mars.com'
    ],
    rest: 'https://rest.marsprotocol.io:443',
    nativeCurrency: {
      name: 'Mars Protocol',
      symbol: 'MARS',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/mars.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/mars.svg',
    blockExplorerUrls: ['https://www.mintscan.io/mars-protocol/', 'https://ping.pub/mars/'],
    chainId: 'mars-1',
    networkName: 'Mars Hub',
    stakeCurrency: {
      coinDenom: 'MARS',
      coinMinimalDenom: 'umars',
      coinDecimals: 6,
      coingeckoId: 'mars-protocol'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'mars',
      bech32PrefixAccPub: 'marspub',
      bech32PrefixValAddr: 'marsvaloper',
      bech32PrefixValPub: 'marsvaloperpub',
      bech32PrefixConsAddr: 'marsvalcons',
      bech32PrefixConsPub: 'marsvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'MARS',
        coinMinimalDenom: 'umars',
        coinDecimals: 6,
        coingeckoId: 'mars-protocol'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'MARS',
        coinMinimalDenom: 'umars',
        coinDecimals: 6,
        coingeckoId: 'mars-protocol'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'terra',
    chainType: 'cosmos',
    rpc: 'https://rpc-terra-ia.cosmosia.notional.ventures/',
    rpcList: [
      'https://rpc-terra-ia.cosmosia.notional.ventures/',
      'https://rpc.terrarebels.net',
      'https://terra-classic-rpc.publicnode.com'
    ],
    rest: 'https://api-terra-ia.cosmosia.notional.ventures',
    nativeCurrency: {
      name: 'Luna Classic',
      symbol: 'LUNC',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4172.png'
    },
    swapAmountForGas: '2000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/lunc.svg',
    blockExplorerUrls: [
      'https://finder.terra.money/classic/',
      'https://finder.terrarebels.net/classic/'
    ],
    chainId: 'columbus-5',
    networkName: 'Terra Classic',
    stakeCurrency: {
      coinDenom: 'LUNA',
      coinMinimalDenom: 'uluna',
      coinDecimals: 6,
      coingeckoId: 'terra-luna'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'terra',
      bech32PrefixAccPub: 'terrapub',
      bech32PrefixValAddr: 'terravaloper',
      bech32PrefixValPub: 'terravaloperpub',
      bech32PrefixConsAddr: 'terravalcons',
      bech32PrefixConsPub: 'terravalconspub'
    },
    bip44: {
      coinType: 330
    },
    currencies: [
      {
        coinDenom: 'LUNA',
        coinMinimalDenom: 'uluna',
        coinDecimals: 6,
        coingeckoId: 'terra-luna'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'LUNA',
        coinMinimalDenom: 'uluna',
        coinDecimals: 6,
        coingeckoId: 'terra-luna'
      }
    ],
    coinType: 330,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-19',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'assetmantle',
    chainType: 'cosmos',
    rpc: 'https://rpc.assetmantle.one',
    rpcList: [
      'https://rpc.assetmantle.one',
      'https://rpc-assetmantle.blockpower.capital',
      'https://rpc-assetmantle.ecostake.com'
    ],
    rest: 'https://rest.assetmantle.one',
    chainId: 'mantle-1',
    networkName: 'AssetMantle',
    nativeCurrency: {
      name: 'AssetMantle',
      symbol: 'MNTL',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19686.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19686.png',
    blockExplorerUrls: [
      'https://www.mintscan.io/asset-mantle/',
      'https://explorer.postcapitalist.io/AssetMantle/',
      'https://explorer.assetmantle.one/',
      'https://assetmantle.explorers.guru/',
      'https://atomscan.com/assetmantle/'
    ],
    stakeCurrency: {
      coinDenom: 'MNTL',
      coinMinimalDenom: 'umntl',
      coinDecimals: 6,
      coingeckoId: 'assetmantle'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'mantle',
      bech32PrefixAccPub: 'mantlepub',
      bech32PrefixValAddr: 'mantlevaloper',
      bech32PrefixValPub: 'mantlevaloperpub',
      bech32PrefixConsAddr: 'mantlevalcons',
      bech32PrefixConsPub: 'mantlevalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'MNTL',
        coinMinimalDenom: 'umntl',
        coinDecimals: 6,
        coingeckoId: 'assetmantle'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'MNTL',
        coinMinimalDenom: 'umntl',
        coinDecimals: 6,
        coingeckoId: 'assetmantle'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: 'channel-10',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'gravitybridge',
    chainType: 'cosmos',
    rpc: 'https://gravitychain.io:26657',
    rpcList: [
      'http://gravity-bridge-1-08.nodes.amhost.net:26657',
      'https://gravity-rpc.polkachu.com',
      'https://rpc-gravitybridge-ia.cosmosia.notional.ventures/'
    ],
    rest: 'https://gravitychain.io:1317',
    nativeCurrency: {
      name: 'Graviton',
      symbol: 'GRAV',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/grav.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI:
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
    blockExplorerUrls: [
      'https://www.mintscan.io/gravity-bridge/',
      'https://ping.pub/gravity-bridge/'
    ],
    chainId: 'gravity-bridge-3',
    networkName: 'Gravity Bridge',
    stakeCurrency: {
      coinDenom: 'GRAV',
      coinMinimalDenom: 'ugraviton',
      coinDecimals: 6,
      coingeckoId: 'graviton'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'gravity',
      bech32PrefixAccPub: 'gravitypub',
      bech32PrefixValAddr: 'gravityvaloper',
      bech32PrefixValPub: 'gravityvaloperpub',
      bech32PrefixConsAddr: 'gravityvalcons',
      bech32PrefixConsPub: 'gravityvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'GRAV',
        coinMinimalDenom: 'ugraviton',
        coinDecimals: 6,
        coingeckoId: 'graviton'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'GRAV',
        coinMinimalDenom: 'ugraviton',
        coinDecimals: 6,
        coingeckoId: 'graviton'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'bitcanna',
    chainType: 'cosmos',
    rpc: 'https://rpc.bitcanna.io',
    rpcList: [
      'https://rpc.bitcanna.io/',
      'http://bcna.paranorm.pro/',
      'https://bcna-rpc.ibs.team/'
    ],
    rest: 'https://lcd.bitcanna.io',
    nativeCurrency: {
      name: 'BitCanna',
      symbol: 'BCNA',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bcna.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bcna.svg',
    blockExplorerUrls: ['https://www.mintscan.io/bitcanna/', 'https://ezstaking.tools/bitcanna/'],
    chainId: 'bitcanna-1',
    networkName: 'BitCanna',
    stakeCurrency: {
      coinDenom: 'BCNA',
      coinMinimalDenom: 'bcna',
      coinDecimals: 6,
      coingeckoId: 'bitcanna'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'bcna',
      bech32PrefixAccPub: 'bcnapub',
      bech32PrefixValAddr: 'bcnavaloper',
      bech32PrefixValPub: 'bcnavaloperpub',
      bech32PrefixConsAddr: 'bcnavalcons',
      bech32PrefixConsPub: 'bcnavalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'BCNA',
        coinMinimalDenom: 'bcna',
        coinDecimals: 6,
        coingeckoId: 'bitcanna'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'BCNA',
        coinMinimalDenom: 'bcna',
        coinDecimals: 6,
        coingeckoId: 'bitcanna'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'bitsong',
    chainType: 'cosmos',
    rpc: 'https://rpc.explorebitsong.com',
    rpcList: [
      'https://rpc-bitsong-ia.cosmosia.notional.ventures/',
      'https://rpc.explorebitsong.com',
      'https://bitsong-rpc.validatrium.club'
    ],
    rest: 'https://lcd-bitsong.itastakers.com',
    nativeCurrency: {
      name: 'BitSong',
      symbol: 'BTSG',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/btsg.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/btsg.svg',
    blockExplorerUrls: ['https://www.mintscan.io/bitsong/'],
    chainId: 'bitsong-2b',
    networkName: 'BitSong',
    stakeCurrency: {
      coinDenom: 'BTSG',
      coinMinimalDenom: 'btsg',
      coinDecimals: 6,
      coingeckoId: 'bitsong'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'bitsong',
      bech32PrefixAccPub: 'bitsongpub',
      bech32PrefixValAddr: 'bitsongvaloper',
      bech32PrefixValPub: 'bitsongvaloperpub',
      bech32PrefixConsAddr: 'bitsongvalcons',
      bech32PrefixConsPub: 'bitsongvalconspub'
    },
    bip44: {
      coinType: 639
    },
    currencies: [
      {
        coinDenom: 'BTSG',
        coinMinimalDenom: 'btsg',
        coinDecimals: 6,
        coingeckoId: 'bitsong'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'BTSG',
        coinMinimalDenom: 'btsg',
        coinDecimals: 6,
        coingeckoId: 'bitsong'
      }
    ],
    coinType: 639,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'cheqd',
    chainType: 'cosmos',
    rpc: 'https://rpc.cheqd.net',
    rpcList: [
      'https://rpc.cheqd.net',
      'https://cheqd-rpc.lavenderfive.com:443',
      'https://rpc-cheqd-ia.cosmosia.notional.ventures/'
    ],
    rest: 'https://api.cheqd.net',
    nativeCurrency: {
      name: 'cheqd',
      symbol: 'CHEQ',
      decimals: 9,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12256.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12256.png',
    blockExplorerUrls: ['https://bigdipper.live/cheqd/'],
    chainId: 'cheqd-mainnet-1',
    networkName: 'Cheqd',
    stakeCurrency: {
      coinDenom: 'CHEQ',
      coinMinimalDenom: 'cheq',
      coinDecimals: 9,
      coingeckoId: 'cheqd-network'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'cheqd',
      bech32PrefixAccPub: 'cheqdpub',
      bech32PrefixValAddr: 'cheqdvaloper',
      bech32PrefixValPub: 'cheqdvaloperpub',
      bech32PrefixConsAddr: 'cheqdvalcons',
      bech32PrefixConsPub: 'cheqdvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'CHEQ',
        coinMinimalDenom: 'cheq',
        coinDecimals: 9,
        coingeckoId: 'cheqd-network'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'CHEQ',
        coinMinimalDenom: 'cheq',
        coinDecimals: 9,
        coingeckoId: 'cheqd-network'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'decentr',
    chainType: 'cosmos',
    rpc: 'https://poseidon.mainnet.decentr.xyz',
    rpcList: [
      'https://poseidon.mainnet.decentr.xyz',
      'https://decentr-rpc.badgerbite.io:443',
      'https://decentr-rpc.ibs.team/'
    ],
    rest: 'https://rest.mainnet.decentr.xyz',
    nativeCurrency: {
      name: 'Decentr',
      symbol: 'DEC',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dec.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dec.svg',
    blockExplorerUrls: ['https://explorer.decentr.net/'],
    chainId: 'mainnet-3',
    networkName: 'Decentr',
    stakeCurrency: {
      coinDenom: 'DEC',
      coinMinimalDenom: 'dec',
      coinDecimals: 6,
      coingeckoId: 'decentr'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'decentr',
      bech32PrefixAccPub: 'decentrpub',
      bech32PrefixValAddr: 'decentrvaloper',
      bech32PrefixValPub: 'decentrvaloperpub',
      bech32PrefixConsAddr: 'decentrvalcons',
      bech32PrefixConsPub: 'decentrvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'DEC',
        coinMinimalDenom: 'dec',
        coinDecimals: 6,
        coingeckoId: 'decentr'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'DEC',
        coinMinimalDenom: 'dec',
        coinDecimals: 6,
        coingeckoId: 'decentr'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'desmos',
    chainType: 'cosmos',
    rpc: 'https://rpc.mainnet.desmos.network',
    rpcList: [
      'https://rpc.mainnet.desmos.network',
      'https://desmos-rpc.lavenderfive.com/',
      'https://desmos-rpc.ibs.team/'
    ],
    rest: 'https://api.mainnet.desmos.network',
    nativeCurrency: {
      name: 'Desmos',
      symbol: 'DSM',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dsm.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dsm.svg',
    blockExplorerUrls: ['https://www.mintscan.io/desmos/'],
    chainId: 'desmos-mainnet',
    networkName: 'Desmos',
    stakeCurrency: {
      coinDenom: 'DSM',
      coinMinimalDenom: 'dsm',
      coinDecimals: 6,
      coingeckoId: 'desmos'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'desmos',
      bech32PrefixAccPub: 'desmospub',
      bech32PrefixValAddr: 'desmosvaloper',
      bech32PrefixValPub: 'desmosvaloperpub',
      bech32PrefixConsAddr: 'desmosvalcons',
      bech32PrefixConsPub: 'desmosvalconspub'
    },
    bip44: {
      coinType: 852
    },
    currencies: [
      {
        coinDenom: 'DSM',
        coinMinimalDenom: 'dsm',
        coinDecimals: 6,
        coingeckoId: 'desmos'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'DSM',
        coinMinimalDenom: 'dsm',
        coinDecimals: 6,
        coingeckoId: 'desmos'
      }
    ],
    coinType: 852,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'irisnet',
    chainType: 'cosmos',
    rpc: 'https://rpc-iris.keplr.app',
    rpcList: [
      'https://rpc-iris.keplr.app',
      'https://rpc-irisnet-01.stakeflow.io',
      'https://irisnet-rpc.w3coins.io'
    ],
    rest: 'https://lcd-iris.keplr.app',
    nativeCurrency: {
      name: 'IRISnet',
      symbol: 'IRIS',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/iris.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/iris.svg',
    blockExplorerUrls: ['https://www.mintscan.io/iris/'],
    chainId: 'irishub-1',
    networkName: 'IRISnet',
    stakeCurrency: {
      coinDenom: 'IRIS',
      coinMinimalDenom: 'iris',
      coinDecimals: 6,
      coingeckoId: 'iris-network'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'iaa',
      bech32PrefixAccPub: 'iaapub',
      bech32PrefixValAddr: 'iaavaloper',
      bech32PrefixValPub: 'iaavaloperpub',
      bech32PrefixConsAddr: 'iaavalcons',
      bech32PrefixConsPub: 'iaavalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'IRIS',
        coinMinimalDenom: 'iris',
        coinDecimals: 6,
        coingeckoId: 'iris-network'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'IRIS',
        coinMinimalDenom: 'iris',
        coinDecimals: 6,
        coingeckoId: 'iris-network'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'impacthub',
    chainType: 'cosmos',
    rpc: 'https://proxies.sifchain.finance/api/impacthub-3/rpc',
    rpcList: [
      'https://proxies.sifchain.finance/api/impacthub-3/rpc',
      'https://impacthub.ixo.world/rpc/',
      'https://rpc-ixo-ia.cosmosia.notional.ventures/'
    ],
    rest: 'https://proxies.sifchain.finance/api/impacthub-3/rest',
    nativeCurrency: {
      name: 'Impacthub',
      symbol: 'IXO',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI:
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
    blockExplorerUrls: ['https://www.mintscan.io/ixo/'],
    chainId: 'ixo-5',
    networkName: 'Impacthub',
    stakeCurrency: {
      coinDenom: 'IXO',
      coinMinimalDenom: 'ixo',
      coinDecimals: 6,
      coingeckoId: 'ixo'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'ixo',
      bech32PrefixAccPub: 'ixopub',
      bech32PrefixValAddr: 'ixovaloper',
      bech32PrefixValPub: 'ixovaloperpub',
      bech32PrefixConsAddr: 'ixovalcons',
      bech32PrefixConsPub: 'ixovalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'IXO',
        coinMinimalDenom: 'ixo',
        coinDecimals: 6,
        coingeckoId: 'ixo'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'IXO',
        coinMinimalDenom: 'ixo',
        coinDecimals: 6,
        coingeckoId: 'ixo'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'jackal',
    chainType: 'cosmos',
    rpc: 'https://rpc.jackalprotocol.com',
    rpcList: [
      'https://rpc.jackalprotocol.com',
      'https://jackal-rpc.lavenderfive.com:443',
      'http://jkl.rpc.m.stavr.tech:11127'
    ],
    rest: 'https://api.jackalprotocol.com',
    nativeCurrency: {
      name: 'Jackal',
      symbol: 'JKL',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/jkl.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/jkl.svg',
    blockExplorerUrls: ['https://ping.pub/jackal/'],
    chainId: 'jackal-1',
    networkName: 'Jackal',
    stakeCurrency: {
      coinDenom: 'JKL',
      coinMinimalDenom: 'ujkl',
      coinDecimals: 6,
      coingeckoId: 'jackal-protocol'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'jkl',
      bech32PrefixAccPub: 'jklpub',
      bech32PrefixValAddr: 'jklvaloper',
      bech32PrefixValPub: 'jklvaloperpub',
      bech32PrefixConsAddr: 'jklvalcons',
      bech32PrefixConsPub: 'jklvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6,
        coingeckoId: 'jackal-protocol'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6,
        coingeckoId: 'jackal-protocol'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'likecoin',
    chainType: 'cosmos',
    rpc: 'https://mainnet-node.like.co/rpc/',
    rpcList: [
      'https://mainnet-node.like.co/rpc/',
      'https://likecoin-node.oldcat.io:443/rpc/',
      'https://rpc-likecoin-mainnet.pikaser.net'
    ],
    rest: 'https://mainnet-node.like.co',
    nativeCurrency: {
      name: 'LikeCoin',
      symbol: 'LIKE',
      decimals: 9,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/like.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/like.svg',
    blockExplorerUrls: ['https://www.mintscan.io/likecoin/'],
    chainId: 'likecoin-mainnet-2',
    networkName: 'LikeCoin',
    stakeCurrency: {
      coinDenom: 'LIKE',
      coinMinimalDenom: 'like',
      coinDecimals: 9,
      coingeckoId: 'likecoin'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'like',
      bech32PrefixAccPub: 'likepub',
      bech32PrefixValAddr: 'likevaloper',
      bech32PrefixValPub: 'likevaloperpub',
      bech32PrefixConsAddr: 'likevalcons',
      bech32PrefixConsPub: 'likevalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'LIKE',
        coinMinimalDenom: 'like',
        coinDecimals: 9,
        coingeckoId: 'likecoin'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'LIKE',
        coinMinimalDenom: 'like',
        coinDecimals: 9,
        coingeckoId: 'likecoin'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'lumnetwork',
    chainType: 'cosmos',
    rpc: 'https://node0.mainnet.lum.network/rpc',
    rpcList: [
      'https://node0.mainnet.lum.network/rpc',
      'https://lumnetwork-rpc.lavenderfive.com/',
      'https://lum-rpc.ibs.team'
    ],
    rest: 'https://node0.mainnet.lum.network/rest',
    nativeCurrency: {
      name: 'Lum Network',
      symbol: 'LUM',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/lum.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/lum.svg',
    blockExplorerUrls: ['https://www.mintscan.io/lum/'],
    chainId: 'lum-network-1',
    networkName: 'Lum Network',
    stakeCurrency: {
      coinDenom: 'LUM',
      coinMinimalDenom: 'lum',
      coinDecimals: 6,
      coingeckoId: 'lum-network'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'lum',
      bech32PrefixAccPub: 'lumpub',
      bech32PrefixValAddr: 'lumvaloper',
      bech32PrefixValPub: 'lumvaloperpub',
      bech32PrefixConsAddr: 'lumvalcons',
      bech32PrefixConsPub: 'lumvalconspub'
    },
    bip44: {
      coinType: 880
    },
    currencies: [
      {
        coinDenom: 'LUM',
        coinMinimalDenom: 'lum',
        coinDecimals: 6,
        coingeckoId: 'lum-network'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'LUM',
        coinMinimalDenom: 'lum',
        coinDecimals: 6,
        coingeckoId: 'lum-network'
      }
    ],
    coinType: 880,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'sentinel',
    chainType: 'cosmos',
    rpc: 'https://rpc-sentinel-ia.cosmosia.notional.ventures/',
    rpcList: [
      'https://rpc.sentinel.quokkastake.io',
      'https://sentinel-rpc.badgerbite.io/',
      'https://sentinel-rpc.publicnode.com'
    ],
    rest: 'https://api-sentinel-ia.cosmosia.notional.ventures/',
    nativeCurrency: {
      name: 'Sentinel',
      symbol: 'DVPN',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dvpn.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dvpn.svg',
    blockExplorerUrls: ['https://www.mintscan.io/sentinel/'],
    chainId: 'sentinelhub-2',
    networkName: 'Sentinel',
    stakeCurrency: {
      coinDenom: 'DVPN',
      coinMinimalDenom: 'dvpn',
      coinDecimals: 6,
      coingeckoId: 'sentinel'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'sent',
      bech32PrefixAccPub: 'sentpub',
      bech32PrefixValAddr: 'sentvaloper',
      bech32PrefixValPub: 'sentvaloperpub',
      bech32PrefixConsAddr: 'sentvalcons',
      bech32PrefixConsPub: 'sentvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'DVPN',
        coinMinimalDenom: 'dvpn',
        coinDecimals: 6,
        coingeckoId: 'sentinel'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'DVPN',
        coinMinimalDenom: 'dvpn',
        coinDecimals: 6,
        coingeckoId: 'sentinel'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'nolus',
    chainType: 'cosmos',
    rpc: 'https://pirin-cl.nolus.network:26657',
    rpcList: [
      'https://pirin-cl.nolus.network:26657',
      'https://nolus-rpc.lavenderfive.com:443',
      'https://nolus-rpc.sphincs.plus'
    ],
    rest: 'https://pirin-cl.nolus.network:1317',
    nativeCurrency: {
      name: 'nolus',
      symbol: 'NLS',
      decimals: 18,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18156.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27307.png',
    blockExplorerUrls: ['https://explorer.nolus.io/pirin-1/'],
    chainId: 'pirin-1',
    networkName: 'Nolus',
    stakeCurrency: {
      coinDenom: 'unls',
      coinMinimalDenom: 'unls',
      coinDecimals: 6,
      coingeckoId: 'nolus'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'nolus',
      bech32PrefixAccPub: 'noluspub',
      bech32PrefixValAddr: 'nolusvaloper',
      bech32PrefixValPub: 'nolusvaloperpub',
      bech32PrefixConsAddr: 'nolusvalcons',
      bech32PrefixConsPub: 'nolusvalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'unls',
        coinMinimalDenom: 'unls',
        coinDecimals: 6,
        coingeckoId: 'nolus'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'unls',
        coinMinimalDenom: 'unls',
        coinDecimals: 6,
        coingeckoId: 'nolus'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'kava-ibc',
    chainType: 'cosmos',
    rpc: 'https://rpc.data.kava.io',
    rpcList: [
      'https://kava-rpc.polkachu.com',
      'https://rpc-kava-ia.cosmosia.notional.ventures/',
      'https://kava-rpc.ibs.team'
    ],
    rest: 'https://api.data.kava.io/',
    nativeCurrency: {
      name: 'Kava',
      symbol: 'KAVA',
      decimals: 6,
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4846.png'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/kava.svg',
    blockExplorerUrls: ['https://www.mintscan.io/kava/'],
    chainId: 'kava_2222-10',
    networkName: 'Kava IBC',
    stakeCurrency: {
      coinDenom: 'KAVA',
      coinMinimalDenom: 'kava',
      coinDecimals: 6,
      coingeckoId: 'kava'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'kava',
      bech32PrefixAccPub: 'kavapub',
      bech32PrefixValAddr: 'kavavaloper',
      bech32PrefixValPub: 'kavavaloperpub',
      bech32PrefixConsAddr: 'kavavalcons',
      bech32PrefixConsPub: 'kavavalconspub'
    },
    bip44: {
      coinType: 459
    },
    alternativeBIP44s: [
      {
        coinType: 118
      }
    ],
    currencies: [
      {
        coinDenom: 'KAVA',
        coinMinimalDenom: 'kava',
        coinDecimals: 6,
        coingeckoId: 'kava'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'KAVA',
        coinMinimalDenom: 'kava',
        coinDecimals: 6,
        coingeckoId: 'kava'
      }
    ],
    coinType: 459,
    gasPriceStep: {
      low: 0.05,
      average: 0.125,
      high: 0.2
    },
    features: ['ibc-transfer', 'ibc-go', 'ibc-pfm'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  },
  {
    chainName: 'teritori',
    chainType: 'cosmos',
    rpc: 'https://teritori-rpc.lavenderfive.com:443',
    rpcList: [
      'https://teritori-rpc.lavenderfive.com:443',
      'https://teritori-rpc.polkachu.com',
      'https://rpc.teritori.nodestake.top'
    ],
    rest: 'https://teritori-api.lavenderfive.com:443',
    nativeCurrency: {
      name: 'teritori',
      symbol: 'TORI',
      decimals: 6,
      icon: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg'
    },
    swapAmountForGas: '1000000',
    chainIconURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    blockExplorerUrls: ['https://www.mintscan.io/teritori/'],
    chainId: 'teritori-1',
    networkName: 'Teritori',
    stakeCurrency: {
      coinDenom: 'utori',
      coinMinimalDenom: 'utori',
      coinDecimals: 6,
      coingeckoId: 'teritori'
    },
    bech32Config: {
      bech32PrefixAccAddr: 'tori',
      bech32PrefixAccPub: 'toripub',
      bech32PrefixValAddr: 'torivaloper',
      bech32PrefixValPub: 'torivaloperpub',
      bech32PrefixConsAddr: 'torivalcons',
      bech32PrefixConsPub: 'torivalconspub'
    },
    bip44: {
      coinType: 118
    },
    currencies: [
      {
        coinDenom: 'utori',
        coinMinimalDenom: 'utori',
        coinDecimals: 6,
        coingeckoId: 'teritori'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'utori',
        coinMinimalDenom: 'utori',
        coinDecimals: 6,
        coingeckoId: 'teritori'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0.05,
      average: 0.35,
      high: 0.5
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer', 'ibc-pfm'],
    axelarContracts: {
      gateway: ''
    },
    chainToAxelarChannelId: '',
    estimatedRouteDuration: 60,
    estimatedExpressRouteDuration: 20
  }
]

enum DappEnvironment {
  'staging' = 'staging',
  'production' = 'production',
  'development' = 'development'
}

export const ChainsList =
  process.env.NEXT_PUBLIC_ENVIRONMENT === DappEnvironment.production ? chainsMainnet : chainsTestnet
