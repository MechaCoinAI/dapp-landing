const tokensTestnet = [
  {
    chainId: 421613,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum'
  },
  {
    chainId: 421613,
    address: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc'
  },
  {
    chainId: 421613,
    address: '0xEe01c0CD76354C383B8c7B4e65EA88D00B06f36f',
    name: 'Wrapped WETH',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
    coingeckoId: 'weth'
  },
  {
    chainId: 43113,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'avalanche-2',
    commonKey: 'wavax-wei'
  },
  {
    chainId: 43113,
    address: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
    name: 'Wrapped AVAX',
    symbol: 'WAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei'
  },
  {
    chainId: 43113,
    address: '0x46Cc87ea84586C03bB2109ED9B33F998d40B7623',
    name: 'Axelar',
    symbol: 'AXL',
    decimals: 6,
    logoURI:
      'https://assets.coingecko.com/coins/images/24489/small/tsYr25vB_400x400.jpg?1647854949',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    chainId: 43113,
    address: '0x57f1c63497aee0be305b8852b354cec793da43bb',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc'
  },
  {
    chainId: 43113,
    address: '0xe840BE8D9aB1ACD5AfC7168b05EC350B7FD18709',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/weth.svg',
    coingeckoId: 'weth',
    bridgeOnly: true,
    commonKey: 'eth-wei'
  },
  {
    chainId: 'axelar-testnet-lisbon-3',
    address: 'uaxl',
    name: 'Axelar',
    symbol: 'AXL',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: false,
    pathKey: 'axl_axelar'
  },
  {
    chainId: 'axelar-testnet-lisbon-3',
    address: 'uausdc',
    name: 'Axelar USD Coin',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc',
    bridgeOnly: false,
    pathKey: 'axlusdc_axelar'
  },
  {
    chainId: 'axelar-testnet-lisbon-3',
    address: 'wmatic-wei',
    name: 'WMATIC',
    symbol: 'WMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    pathKey: 'axlmatic_axelar'
  },
  {
    chainId: 'axelar-testnet-lisbon-3',
    address: 'wftm-wei',
    name: 'WFTM',
    symbol: 'WFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    pathKey: 'axlftm_axelar'
  },
  {
    chainId: 'axelar-testnet-lisbon-3',
    address: 'weth-wei',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'eth-wei',
    bridgeOnly: true,
    pathKey: 'axleth_axelar'
  },
  {
    chainId: 'axelar-testnet-lisbon-3',
    address: 'wavax-wei',
    name: 'WAVAX',
    symbol: 'WAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    pathKey: 'axlavax_axelar'
  },
  {
    chainId: 'axelar-testnet-lisbon-3',
    address: 'wdev-wei',
    name: 'WDEV',
    symbol: 'WDEV',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wdev-wei',
    bridgeOnly: true,
    pathKey: 'axldev_axelar'
  },
  {
    chainId: 'axelar-testnet-lisbon-3',
    address: 'wbnb-wei',
    name: 'WBNB',
    symbol: 'WBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    pathKey: 'axlbnb_axelar'
  },
  {
    chainId: 'axelar-testnet-lisbon-3',
    address: 'axl-wstETH',
    name: 'Axelar wstETH',
    symbol: 'axl-wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    commonKey: 'wsteth-wei',
    ibcDenom: 'axl-wstETH',
    bridgeOnly: true,
    pathKey: 'axlwsteth_axelar'
  },
  {
    chainId: 84531,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum'
  },
  {
    chainId: 84531,
    address: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc'
  },
  {
    chainId: 84531,
    address: '0x4200000000000000000000000000000000000006',
    name: 'Wrapped WETH',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
    coingeckoId: 'weth'
  },
  {
    chainId: 97,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bnb.svg',
    coingeckoId: 'binancecoin',
    commonKey: 'wbnb-wei'
  },
  {
    chainId: 97,
    address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    name: 'Wrapped BNB',
    symbol: 'WBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei'
  },
  {
    chainId: 97,
    address: '0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc'
  },
  {
    chainId: 44787,
    address: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc'
  },
  {
    chainId: 44787,
    address: '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18,
    logoURI: 'https://celoscan.io/images/svg/brands/mainbrand-1.svg?v=23.5.4.0',
    coingeckoId: 'celo'
  },
  {
    chainId: 44787,
    address: '0x765de816845861e75a25fca122bb6898b8b1282a',
    name: 'Celo Dollar',
    symbol: 'cUSD',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7236.png',
    coingeckoId: 'celo-dollar'
  },
  {
    chainId: 44787,
    address: '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F',
    name: 'Celo Euro',
    symbol: 'cEUR',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/13161/small/icon-celo-dollar-color-1000-circle-cropped.png?1605771134',
    coingeckoId: 'celo-euro'
  },
  {
    chainId: 'meteor-test',
    address: 'ibc/14767887A69DBEFF3B99AA3E5B176C7989B1DAD2395A1E843F48EE981AC4F83F',
    name: 'WMATIC',
    symbol: 'WMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    pathKey: 'axlmatic_comdex'
  },
  {
    chainId: 'meteor-test',
    address: 'ibc/A96863E0BDFA3F2D96625FD5A649AF53F62F97521EF78FBBFE5B4199C3E23ABD',
    name: 'WFTM',
    symbol: 'WFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    pathKey: 'axlftm_comdex'
  },
  {
    chainId: 'meteor-test',
    address: 'ibc/065AD21492A7749E283A37AC469426562F988B7BA59712C0C545F381865A66BA',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    pathKey: 'axleth_comdex'
  },
  {
    chainId: 'meteor-test',
    address: 'ibc/7B6FFC996FC2984AA98DBA4CEBFBF790E55F4D7E65360DD614F2BE2D08F4D324',
    name: 'WAVAX',
    symbol: 'WAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    pathKey: 'axlavax_comdex'
  },
  {
    chainId: 'meteor-test',
    address: 'ibc/245E6F47B96AFEA80863B40807312AF5AF42EA6AFCB927AC6A03015492BCC899',
    name: 'WDEV',
    symbol: 'WDEV',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wdev-wei',
    bridgeOnly: true,
    pathKey: 'axldev_comdex'
  },
  {
    chainId: 'meteor-test',
    address: 'ibc/96CF88731A06654F8510473865C75200005B81A2A9FECB90389034F787015CA3',
    name: 'aUSDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc',
    bridgeOnly: false,
    pathKey: 'axlusdc_comdex'
  },
  {
    chainId: 'meteor-test',
    address: 'ibc/5CB2E12B07D0B6D8EC24A68BA6B6E6E8D5BF85B7D22091D3A480DCDD61C6AC84',
    name: 'WBNB',
    symbol: 'WBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    pathKey: 'axlbnb_comdex'
  },
  {
    chainId: 'dydx-testnet-4',
    address: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    ibcDenom: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    bridgeOnly: false,
    pathKey: 'nusdc_dydx'
  },
  {
    chainId: 'blumbus_111-1',
    address: 'adym',
    name: 'Dymension',
    symbol: 'DYM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dym.svg',
    coingeckoId: 'dymension',
    ibcDenom: 'adym',
    pathKey: 'dym_dymension'
  },
  {
    chainId: 'blumbus_111-1',
    address: 'ibc/5BDD47E9E73BF91C14497E254F0A751F1A7D3A6084343F66EA7CEE834A384651',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/5BDD47E9E73BF91C14497E254F0A751F1A7D3A6084343F66EA7CEE834A384651',
    pathKey: 'axlusdc_dymension'
  },
  {
    chainId: 'blumbus_111-1',
    address: 'ibc/B8FEE8FE30746C96641E48F94053D5D0BE99CCB5B98C58A0239B70F082E713EA',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'weth',
    ibcDenom: 'ibc/B8FEE8FE30746C96641E48F94053D5D0BE99CCB5B98C58A0239B70F082E713EA',
    commonKey: 'eth-wei',
    bridgeOnly: true,
    pathKey: 'axleth_dymension'
  },
  {
    chainId: 'blumbus_111-1',
    address: 'ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4',
    name: 'Noble USDC',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    bridgeOnly: false,
    pathKey: 'nusdc_dymension'
  },
  {
    chainId: 'blumbus_111-1',
    address: 'ibc/2CC0B1B7A981ACC74854717F221008484603BB8360E81B262411B0D830EDE9B0',
    name: 'Axelar',
    symbol: 'AXL',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    coingeckoId: 'axelar',
    ibcDenom: 'ibc/2CC0B1B7A981ACC74854717F221008484603BB8360E81B262411B0D830EDE9B0',
    pathKey: 'axl_dymension'
  },
  {
    chainId: 5,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum',
    commonKey: 'eth-wei'
  },
  {
    chainId: 5,
    address: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc'
  },
  {
    chainId: 5,
    address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    name: 'Wrapped ETH',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'eth-wei'
  },
  {
    chainId: 5,
    address: '0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60',
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/9956/thumb/4943.png?1636636734',
    coingeckoId: 'dai'
  },
  {
    address: '0x6320cd32aa674d2898a68ec82e869385fc5f7e2f',
    chainId: 5,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    name: 'wstETH',
    symbol: 'wstETH',
    coingeckoId: 'wrapped-steth',
    commonKey: 'wsteth-wei',
    bridgeOnly: true
  },
  {
    chainId: 11155111,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum'
  },
  {
    chainId: 11155111,
    name: 'Axelar Wrapped aUSDC',
    address: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-configs/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    commonKey: 'uausdc'
  },
  {
    chainId: 11155111,
    name: 'Axelar',
    address: '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',
    symbol: 'wAXL',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-configs/main/images/tokens/axl.svg',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    chainId: 11155111,
    name: 'Wrapped Ether',
    address: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
    symbol: 'WETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-configs/main/images/tokens/eth.svg',
    coingeckoId: 'weth'
  },
  {
    chainId: 11155111,
    name: 'Axelar Wrapped Ether',
    address: '0xeA700DCe55e72C4C08b97AcFc7dF214EC30F4a64',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-configs/main/images/tokens/eth.svg',
    coingeckoId: 'axlweth',
    commonKey: 'eth-wei'
  },
  {
    chainId: 11155111,
    name: 'Axelar Wrapped WMATIC',
    address: '0x21ba4f6aEdA155DD77Cc33Fb93646910543F0380',
    symbol: 'WMATIC',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-configs/main/images/tokens/wmatic.svg',
    coingeckoId: 'wrapped-matic',
    commonKey: 'wmatic-wei',
    bridgeOnly: true
  },
  {
    chainId: 11155111,
    name: 'Axelar Wrapped WAVAX',
    address: '0x2a87806561C550ba2dA9677c5323413E6e539740',
    symbol: 'WAVAX',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-configs/main/images/tokens/wavax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true
  },
  {
    chainId: 11155111,
    name: 'Axelar Wrapped FTM',
    address: '0x594D8b81eC765410536ab59E98091700b99508D8',
    symbol: 'WFTM',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-configs/main/images/tokens/wftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true
  },
  {
    chainId: 11155111,
    name: 'Axelar Wrapped BNB',
    address: '0xA9A2D8F279ABC436a18DBB1df3FB233039935D0A',
    symbol: 'WBNB',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-configs/main/images/tokens/wbnb.svg',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true
  },
  {
    chainId: 11155111,
    name: 'Axelar Wrapped WDEV',
    address: '0x4B13D583F45Aa01fb2bE18a7AAfE14DE183B1Ac9',
    symbol: 'WDEV',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-configs/main/images/tokens/wglmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wdev-wei',
    bridgeOnly: true
  },
  {
    chainId: 'evmos_9000-4',
    address: 'ibc/8DE781194A674B7129D9EFA838F3E50B5F50212995AA825634BF702E0D037AC3',
    name: 'WMATIC',
    symbol: 'WMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    pathKey: 'axlmatic_evmos'
  },
  {
    chainId: 'evmos_9000-4',
    address: 'ibc/F2D6753B652120212D09EE59075F0D820FCF580620DA8D3DE0349B614ED69A2B',
    name: 'WFTM',
    symbol: 'WFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    pathKey: 'axlftm_evmos'
  },
  {
    chainId: 'evmos_9000-4',
    address: 'ibc/7C2C1F14F3BD93792CCEDB76FDA5C1BB8F981F7C2C7308339BBCBA677224CA8F',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    pathKey: 'axleth_evmos'
  },
  {
    chainId: 'evmos_9000-4',
    address: 'ibc/2B84B3D7B8AA4B04607ACD2E5096D20B34D6D355D33F4F5DD4659449EB757597',
    name: 'WAVAX',
    symbol: 'WAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    pathKey: 'axlavax_evmos'
  },
  {
    chainId: 'evmos_9000-4',
    address: 'ibc/4F89D2416F2E2CF9CFE68CE8B77A11A07B4F590B13E410DA86B1A5E6BCBDA24B',
    name: 'WDEV',
    symbol: 'WDEV',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wdev-wei',
    bridgeOnly: true,
    pathKey: 'axldev_evmos'
  },
  {
    chainId: 'evmos_9000-4',
    address: 'ibc/720B52BDE1E2B84C5898D07C983B085C77EB5ED2D4C0ACD56B882A14777F750C',
    name: 'aUSDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc',
    bridgeOnly: false,
    pathKey: 'axlausdc_evmos'
  },
  {
    chainId: 'evmos_9000-4',
    address: 'ibc/8291F71592AEE7C593D5DC05C1B66CD190B2EEA74DF09D2B8BF57BF6C4E8BCAA',
    name: 'WBNB',
    symbol: 'WBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    pathKey: 'axlbnb_evmos'
  },
  {
    chainId: 4002,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'Fantom',
    symbol: 'FTM',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/fantom.svg',
    coingeckoId: 'fantom',
    commonKey: 'wftm-wei'
  },
  {
    chainId: 4002,
    address: '0x75Cc4fDf1ee3E781C1A3Ee9151D5c6Ce34Cf5C61',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc'
  },
  {
    chainId: 4002,
    address: '0xf1277d1Ed8AD466beddF92ef448A132661956621',
    name: 'Wrapped FTM',
    symbol: 'WFTM',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/fantom.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei'
  },
  {
    chainId: 3141,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'Filecoin',
    symbol: 'FIL',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/filecoin.svg',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    chainId: 3141,
    address: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc'
  },
  {
    chainId: 3141,
    address: '0xeA700DCe55e72C4C08b97AcFc7dF214EC30F4a64',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/weth.svg',
    coingeckoId: 'weth',
    bridgeOnly: true,
    commonKey: 'eth-wei'
  },
  {
    chainId: 3141,
    address: '0x6C297AeD654816dc5d211c956DE816Ba923475D2',
    name: 'Wrapped Filecoin',
    symbol: 'WFIL',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    chainId: 'harpoon-4',
    address: 'ibc/91C6798C23EE6AD5B8336C247371546FFA0026854162612EA4EBC80C62A2841C',
    name: 'WMATIC',
    symbol: 'WMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    pathKey: 'axlmatic_kujira'
  },
  {
    chainId: 'harpoon-4',
    address: 'ibc/C2BA0743260DDCD9B2E5464860584E2F0826E7C021E19B16A9F5CEF29D225CD3',
    name: 'WFTM',
    symbol: 'WFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    pathKey: 'axlftm_kujira'
  },
  {
    chainId: 'harpoon-4',
    address: 'ibc/CC8B40E3F3536D003C6ED7C65421067215453AECE1517A6F0935470C634A036B',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    pathKey: 'axleth_kujira'
  },
  {
    chainId: 'harpoon-4',
    address: 'ibc/C74D5A562B2D54AF03198E5BC6693D16EF978EBA0BD3BA22A7098511B43249CA',
    name: 'WAVAX',
    symbol: 'WAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    pathKey: 'axlavax_kujira'
  },
  {
    chainId: 'harpoon-4',
    address: 'ibc/25C4852211900E04B162241362DB1F1D9B7939875A038913E56C9FEF66EA9AD6',
    name: 'WDEV',
    symbol: 'WDEV',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wdev-wei',
    bridgeOnly: true,
    pathKey: 'axldev_kujira'
  },
  {
    chainId: 'harpoon-4',
    address: 'ibc/F91EA2C0A23697A1048E08C2F787E3A58AC6F706A1CD2257A504925158CFC0F3',
    name: 'aUSDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc',
    bridgeOnly: false,
    pathKey: 'axlusdc_kujira'
  },
  {
    chainId: 'harpoon-4',
    address: 'ibc/E09D271B56568F9C4E4B6A32D877F4E904C35FF3B8A4503AD8547A95F6D9925C',
    name: 'WBNB',
    symbol: 'WBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    pathKey: 'axlbnb_kujira'
  },
  {
    chainId: 59140,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum'
  },
  {
    chainId: 59140,
    address: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc'
  },
  {
    chainId: 59140,
    address: '0xf56dc6695cf1f5c364edebc7dc7077ac9b586068',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    coingeckoId: 'usd-coin'
  },
  {
    chainId: 59140,
    address: '0x2C1b868d6596a18e32E61B901E4060C872647b6C',
    name: 'Wrapped WETH',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
    coingeckoId: 'weth'
  },
  {
    chainId: 5001,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'MNT',
    symbol: 'MNT',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/30980/small/token-logo.png?1689320029',
    coingeckoId: 'mantle'
  },
  {
    chainId: 5001,
    address: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/assets/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc'
  },
  {
    chainId: 5001,
    address: '0xEe01c0CD76354C383B8c7B4e65EA88D00B06f36f',
    name: 'Wrapped MNT',
    symbol: 'WMNT',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/30983/small/mantle.jpeg?1689416644',
    coingeckoId: 'mantle'
  },
  {
    chainId: 1287,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'Moonbeam',
    symbol: 'DEV',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'moonbeam',
    commonKey: 'wdev-wei'
  },
  {
    chainId: 1287,
    address: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715',
    name: 'Moonbeam',
    symbol: 'WDEV',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'moonbeam',
    commonKey: 'wdev-wei'
  },
  {
    chainId: 1287,
    address: '0xd1633f7fb3d716643125d6415d4177bc36b7186b',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc'
  },
  {
    chainId: 1287,
    address: '0x372d0695E75563D9180F8CE31c9924D7e8aaac47',
    name: 'Wrapped MOVR',
    symbol: 'WMOVR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wdev-wei'
  },
  {
    chainId: 'grand-1',
    address: 'uusdc',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    bridgeOnly: false,
    pathKey: 'nusdc_noble'
  },
  {
    chainId: 420,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum'
  },
  {
    chainId: 420,
    address: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc'
  },
  {
    chainId: 420,
    address: '0x4200000000000000000000000000000000000006',
    name: 'Wrapped WETH',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
    coingeckoId: 'weth'
  },
  {
    chainId: 'osmo-test-5',
    address: 'uosmo',
    name: 'Osmosis',
    symbol: 'OSMO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/osmo.svg',
    coingeckoId: 'osmosis',
    bridgeOnly: false,
    pathKey: 'osmo_osmosis'
  },
  {
    chainId: 'osmo-test-5',
    address: 'ibc/DE6792CF9E521F6AD6E9A4BDF6225C9571A3B74ACC0A529F92BC5122A39D2E58',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    bridgeOnly: false,
    pathKey: 'nusdc_osmosis'
  },
  {
    chainId: 'osmo-test-5',
    address: 'ibc/1587E7B54FC9EFDA2350DC690EC2F9B9ECEB6FC31CF11884F9C0C5207ABE3921',
    name: 'Axelar USD Coin',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    bridgeOnly: false,
    commonKey: 'uausdc',
    pathKey: 'axlusdc_osmosis'
  },
  {
    chainId: 'osmo-test-5',
    address: '',
    name: 'WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: false,
    pathKey: 'axlmatic_osmosis'
  },
  {
    chainId: 'osmo-test-5',
    address: '',
    name: 'axlWFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    pathKey: 'alxwftm_osmosis'
  },
  {
    chainId: 'osmo-test-5',
    address: 'ibc/2CFA055AF589184D8875D15DED01A9777A097B14EE420F541BDF7F10274959F4',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'eth-wei',
    bridgeOnly: true,
    pathKey: 'axleth_osmosis'
  },
  {
    chainId: 'osmo-test-5',
    address: 'ibc/7D4154153936FD83E044899228DD5D166DF07FFCEFD898670B14725D0552130C',
    name: 'axlWAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    pathKey: 'axlavax_osmosis'
  },
  {
    chainId: 'osmo-test-5',
    address: '',
    name: 'axlWDEV',
    symbol: 'axlWDEV',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wdev-wei',
    bridgeOnly: true,
    pathKey: 'axlwdev_osmosis'
  },
  {
    chainId: 'osmo-test-5',
    address: '',
    name: 'axlWBNB',
    symbol: 'WBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    pathKey: 'axlbnb_osmosis'
  },
  {
    chainId: 'osmo-test-5',
    address: 'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
    name: 'Persistence',
    symbol: 'XPRT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/xprt.svg',
    coingeckoId: 'persistence',
    ibcDenom: 'ibc/754C8533F8A418B03AD5F2C6AA19D4703CF78BBAB9E2E4DDD6212AAC2E502CA6',
    pathKey: 'xprt_osmosis'
  },
  {
    chainId: 'test-core-2',
    address: 'uxprt',
    name: 'Persistence',
    symbol: 'XPRT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/xprt.svg',
    coingeckoId: 'persistence',
    ibcDenom: 'uxprt',
    pathKey: 'xprt_persistence'
  },
  {
    chainId: 80001,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/polygon.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei'
  },
  {
    chainId: 80001,
    address: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    name: 'WMATIC',
    symbol: 'WMATIC',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/polygon.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei'
  },
  {
    chainId: 80001,
    address: '0x2c852e740B62308c46DD29B982FBb650D063Bd07',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    commonKey: 'uausdc'
  },
  {
    chainId: 80001,
    address: '0x786D82A436EA836A8669919D605FfeaEFa51744e',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/weth.svg',
    coingeckoId: 'weth',
    bridgeOnly: true,
    commonKey: 'eth-wei'
  },
  {
    chainId: 534351,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum'
  },
  {
    chainId: 534351,
    address: '0x5300000000000000000000000000000000000004',
    name: 'Wrapped ETH',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth'
  },
  {
    chainId: 534351,
    address: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
    name: 'Axelar USDC',
    symbol: 'aUSDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/assets/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uausdc'
  },
  {
    chainId: 534351,
    address: '0xeA700DCe55e72C4C08b97AcFc7dF214EC30F4a64',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/weth.svg',
    coingeckoId: 'weth',
    bridgeOnly: true,
    commonKey: 'eth-wei'
  },
  {
    chainId: 'atlantic-2',
    address: 'ibc/F188CCE5FBD070508295DA9772C250D71484A00FA816229CD9817DF81CFDA069',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/F188CCE5FBD070508295DA9772C250D71484A00FA816229CD9817DF81CFDA069',
    pathKey: 'axlusdc_sei2'
  },
  {
    chainId: 'atlantic-2',
    address: 'usei',
    name: 'Sei',
    symbol: 'SEI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sei.svg',
    coingeckoId: 'sei-network',
    ibcDenom: 'usei',
    pathKey: 'sei_sei'
  }
]

const tokensMainnet = [
  {
    chainId: 'acre_9052-1',
    address: 'aacre',
    name: 'Acrechain',
    symbol: 'ACRE',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18156.png',
    coingeckoId: 'arable-protocol',
    ibcDenom: 'aacre',
    pathKey: 'acre_acre'
  },
  {
    chainId: 'acre_9052-1',
    address: 'ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65',
    pathKey: 'axlusdc_acre'
  },
  {
    chainId: 'acre_9052-1',
    address: 'ibc/E3AB0DFDE9E782262B770C32DF94AC2A92B93DC4825376D6F6C874D3C877864E',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/E3AB0DFDE9E782262B770C32DF94AC2A92B93DC4825376D6F6C874D3C877864E',
    pathKey: 'axleth_acre'
  },
  {
    chainId: 'acre_9052-1',
    address: 'ibc/2991B858634D22E4637F772FA5A5F5BFCE3F30EA3ED208E36DD8DC07330490A9',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/2991B858634D22E4637F772FA5A5F5BFCE3F30EA3ED208E36DD8DC07330490A9',
    pathKey: 'axlavax_acre'
  },
  {
    chainId: 'acre_9052-1',
    address: 'ibc/E97CB9081D7EB7CAEAE022E448FDEF6D1D0781B63DA4112CAE50285594B2B32C',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/polygon.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/E97CB9081D7EB7CAEAE022E448FDEF6D1D0781B63DA4112CAE50285594B2B32C',
    pathKey: 'axlmatic_acre'
  },
  {
    chainId: 'acre_9052-1',
    address: 'ibc/45C87C0C3027BD5E5BBECF6A6BF8570857E555ABCB6689130AC90D391016AD17',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/45C87C0C3027BD5E5BBECF6A6BF8570857E555ABCB6689130AC90D391016AD17',
    pathKey: 'axlwbtc_acre'
  },
  {
    chainId: 'acre_9052-1',
    address: 'ibc/A0D7A4D3545AAF4C23FE0C432503D3EFB13A796B852AEF9B1B92D39AD80BD471',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/A0D7A4D3545AAF4C23FE0C432503D3EFB13A796B852AEF9B1B92D39AD80BD471',
    pathKey: 'axlbnb_acre'
  },
  {
    chainId: 'acre_9052-1',
    address: 'ibc/CA9DE7EFBE31CEEDDF4E11564C19612FFE1DCB0758069627A619510F1C5AE56A',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/CA9DE7EFBE31CEEDDF4E11564C19612FFE1DCB0758069627A619510F1C5AE56A',
    commonKey: 'frax-wei',
    pathKey: 'frax_acre'
  },
  {
    chainId: 'agoric-3',
    address: 'ubld',
    name: 'Agoric',
    symbol: 'BLD',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16697.png',
    coingeckoId: 'agoric',
    ibcDenom: 'ubld',
    pathKey: 'bld_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'uist',
    name: 'Inter Stable Token',
    symbol: 'IST',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22736.png',
    coingeckoId: 'inter-stable-token',
    ibcDenom: 'uist',
    pathKey: 'ist_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
    pathKey: 'axlusdc_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7',
    pathKey: 'axleth_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'ibc/3914BDEF46F429A26917E4D8D434620EC4817DC6B6E68FB327E190902F1E9242',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/3914BDEF46F429A26917E4D8D434620EC4817DC6B6E68FB327E190902F1E9242',
    pathKey: 'axldai_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045',
    pathKey: 'axlusdt_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'ibc/65CD60D7E37EF830BC6B6A6DF4E3E3884A96C0905A7D271C48DC0440B1989EC7',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/65CD60D7E37EF830BC6B6A6DF4E3E3884A96C0905A7D271C48DC0440B1989EC7',
    pathKey: 'axlbusd_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2',
    pathKey: 'axlavax_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'ibc/C8D63703F5805CE6A2B20555139CF6ED9CDFA870389648EB08D688B94B0AE2C1',
    name: 'Axelar WGLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/C8D63703F5805CE6A2B20555139CF6ED9CDFA870389648EB08D688B94B0AE2C1',
    pathKey: 'axlglmr_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'ibc/A64467480BBE4CCFC3CF7E25AD1446AA9BDBD4F5BCB9EF6038B83D6964C784E6',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/A64467480BBE4CCFC3CF7E25AD1446AA9BDBD4F5BCB9EF6038B83D6964C784E6',
    pathKey: 'axlmatic_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'ibc/301DAF9CB0A9E247CD478533EF0E21F48FF8118C4A51F77C8BC3EB70E5566DBC',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/301DAF9CB0A9E247CD478533EF0E21F48FF8118C4A51F77C8BC3EB70E5566DBC',
    pathKey: 'axlwbtc_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833',
    pathKey: 'axlbnb_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'ibc/E67ADA2204A941CD4743E70771BA08E24885E1ADD6FD140CE1F9E0FEBB68C6B2',
    name: 'Axelar WFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/E67ADA2204A941CD4743E70771BA08E24885E1ADD6FD140CE1F9E0FEBB68C6B2',
    pathKey: 'axlftm_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9',
    pathKey: 'nusdc_agoric'
  },
  {
    chainId: 'agoric-3',
    address: 'ibc/7B11FE7D6385B46B9F3598B298B81A773CB20A8BA12001D87A78580314218364',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/7B11FE7D6385B46B9F3598B298B81A773CB20A8BA12001D87A78580314218364',
    commonKey: 'frax-wei',
    pathKey: 'frax_agoric'
  },
  {
    chainId: 'akashnet-2',
    address: 'uakt',
    name: 'Akash Network',
    symbol: 'AKT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/akt.svg',
    coingeckoId: 'akash-network',
    ibcDenom: 'uakt',
    pathKey: 'akt_akash'
  },
  {
    chainId: 42161,
    name: 'USD Coin',
    address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    symbol: 'USDC.e',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin'
  },
  {
    chainId: 42161,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum'
  },
  {
    chainId: 42161,
    address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
    name: 'Arbitrum',
    symbol: 'ARB',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/arb.svg',
    coingeckoId: 'arbitrum',
    commonKey: 'arb-wei'
  },
  {
    chainId: 42161,
    name: 'USD Coin',
    address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin'
  },
  {
    chainId: 42161,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    chainId: 42161,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    name: 'Tether USD',
    symbol: 'USDT',
    coingeckoId: 'tether'
  },
  {
    chainId: 42161,
    address: '0x88DfaAABaf06f3a41D2606EA98BC8edA109AbeBb',
    name: 'Mai Stablecoin',
    symbol: 'axlWMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    chainId: 42161,
    address: '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true
  },
  {
    address: '0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F',
    chainId: 42161,
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax'
  },
  {
    address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
    chainId: 42161,
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/btc.jpg',
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    coingeckoId: 'wrapped-bitcoin'
  },
  {
    chainId: 42161,
    address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    name: 'Wrapped ETH',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth'
  },
  {
    address: '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',
    chainId: 42161,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    address: '0xe4dddfe67e7164b0fe14e218d80dc4c08edc01cb',
    chainId: 42161,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Kyber Network Crystal',
    symbol: 'KNC',
    coingeckoId: 'kyber-network-crystal'
  },
  {
    chainId: 42161,
    address: '0xB448eC505C924944ca8B2C55EF05c299eE0781df',
    name: 'Axelar Wrapped KNC',
    symbol: 'axlKNC',
    decimals: 18,
    logoURI:
      'https://storage.googleapis.com/ks-setting-1d682dca/538cbc06-ef8a-4acc-ac38-7f41d75f1666.png',
    coingeckoId: 'kyber-network-crystal',
    bridgeOnly: true,
    commonKey: 'knc-wei'
  },
  {
    address: '0xd4d42F0b6DEF4CE0383636770eF773390d85c61A',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/sushi.jpg',
    name: 'SushiToken',
    symbol: 'SUSHI',
    coingeckoId: 'sushi'
  },
  {
    address: '0x6C2C06790b3E3E3c38e12Ee22F8183b37a13EE55',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/arbitrum/assets/0x6C2C06790b3E3E3c38e12Ee22F8183b37a13EE55/logo.png',
    name: 'Dopex Governance Token',
    symbol: 'DPX',
    coingeckoId: 'dopex'
  },
  {
    chainId: 42161,
    address: '0x41b94c5867f7F6217C9a30520Cb3e793B1ee1b97',
    name: 'axlTIA',
    symbol: 'axlTIA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/celestia.svg',
    coingeckoId: 'celestia',
    commonKey: 'utia'
  },
  {
    address: '0x876Ec6bE52486Eeec06bc06434f3E629D695c6bA',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/arbitrum/assets/0x876Ec6bE52486Eeec06bc06434f3E629D695c6bA/logo.png',
    name: 'FluidFi',
    symbol: 'FLUID',
    coingeckoId: 'fluidfi'
  },
  {
    address: '0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/arbitrum/assets/0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1/logo.png',
    name: 'Governance OHM',
    symbol: 'gOHM',
    coingeckoId: 'governance-ohm'
  },
  {
    address: '0x07E49d5dE43DDA6162Fa28D24d5935C151875283',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/arbitrum/0x07E49d5dE43DDA6162Fa28D24d5935C151875283.jpg',
    name: 'GOVI',
    symbol: 'GOVI',
    coingeckoId: 'govi'
  },
  {
    address: '0x662d0f9Ff837A51cF89A1FE7E0882a906dAC08a3',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/arbitrum/0x662d0f9Ff837A51cF89A1FE7E0882a906dAC08a3.jpg',
    name: 'Jones ETH',
    symbol: 'jETH',
    coingeckoId: ''
  },
  {
    address: '0x10393c20975cF177a3513071bC110f7962CD67da',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/arbitrum/0x10393c20975cF177a3513071bC110f7962CD67da.jpg',
    name: 'Jones DAO',
    symbol: 'JONES',
    coingeckoId: 'jones-dao'
  },
  {
    address: '0x93C15cd7DE26f07265f0272E0b831C5D7fAb174f',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/arbitrum/0x93C15cd7DE26f07265f0272E0b831C5D7fAb174f.jpg',
    name: 'Liquid',
    symbol: 'LIQD',
    coingeckoId: 'liquid-finance'
  },
  {
    address: '0x73700aeCfC4621E112304B6eDC5BA9e36D7743D3',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/arbitrum/0x73700aeCfC4621E112304B6eDC5BA9e36D7743D3.jpg',
    name: 'liquid ETH',
    symbol: 'lqETH',
    coingeckoId: ''
  },
  {
    address: '0x539bdE0d7Dbd336b79148AA742883198BBF60342',
    chainId: 42161,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14783.png',
    name: 'MAGIC',
    symbol: 'MAGIC',
    coingeckoId: 'magic',
    crosschain: false
  },
  {
    address: '0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/arbitrum/0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A.jpg',
    name: 'Magic Internet Money',
    symbol: 'MIM',
    coingeckoId: 'magic-internet-money'
  },
  {
    address: '0x51318B7D00db7ACc4026C88c3952B66278B6A67F',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/arbitrum/0x51318B7D00db7ACc4026C88c3952B66278B6A67F.jpg',
    name: 'Plutus',
    symbol: 'PLS',
    coingeckoId: 'ipulse'
  },
  {
    address: '0x51fC0f6660482Ea73330E414eFd7808811a57Fa2',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/premia.jpg',
    name: 'Premia',
    symbol: 'PREMIA',
    coingeckoId: 'premia'
  },
  {
    address: '0x0C4681e6C0235179ec3D4F4fc4DF3d14FDD96017',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/arbitrum/0x0C4681e6C0235179ec3D4F4fc4DF3d14FDD96017.jpg',
    name: 'Radiant',
    symbol: 'RDNT',
    coingeckoId: 'radiant-capital'
  },
  {
    address: '0x32Eb7902D4134bf98A28b963D26de779AF92A212',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/arbitrum/0x32Eb7902D4134bf98A28b963D26de779AF92A212.jpg',
    name: 'Dopex Rebate Token',
    symbol: 'RDPX',
    coingeckoId: 'dopex-rebate-token'
  },
  {
    address: '0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/arbitrum/0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF.jpg',
    name: 'Spell Token',
    symbol: 'SPELL',
    coingeckoId: 'spell-token'
  },
  {
    address: '0x9f20de1fc9b161b34089cbEAE888168B44b03461',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/arbitrum/assets/0x9f20de1fc9b161b34089cbEAE888168B44b03461/logo.png',
    name: 'Arbis',
    symbol: 'ARBIS',
    coingeckoId: 'arbis-finance'
  },
  {
    address: '0x86A1012d437BBFf84fbDF62569D12d4FD3396F8c',
    chainId: 42161,
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/18332/small/arby.PNG?1631579212',
    name: 'Arbys',
    symbol: 'ARBYS',
    coingeckoId: 'arbys'
  },
  {
    address: '0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/arbitrum/assets/0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE/logo.png',
    name: 'Beefy Finance',
    symbol: 'BIFI',
    coingeckoId: 'beefy-finance'
  },
  {
    address: '0xAFD871f684F21Ab9D7137608C71808f83D75e6fc',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/arbitrum/assets/0xAFD871f684F21Ab9D7137608C71808f83D75e6fc/logo.png',
    name: 'Arbucks',
    symbol: 'BUCK',
    coingeckoId: 'arbucks'
  },
  {
    address: '0xc136E6B376a9946B156db1ED3A34b08AFdAeD76d',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/arbitrum/assets/0xc136E6B376a9946B156db1ED3A34b08AFdAeD76d/logo.png',
    name: 'CreDA Protocol Token',
    symbol: 'CREDA',
    coingeckoId: 'creda'
  },
  {
    address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/arbitrum/assets/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1/logo.png',
    name: 'DAI Stablecoin',
    symbol: 'DAI',
    coingeckoId: 'dai'
  },
  {
    address: '0xAeEBa475eDC438f8Eeb6BFBc3164c1C7716Fb304',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/arbitrum/0xAeEBa475eDC438f8Eeb6BFBc3164c1C7716Fb304.jpg',
    name: 'Party Dice',
    symbol: 'DICE',
    coingeckoId: 'klaydice'
  },
  {
    address: '0x123389C2f0e9194d9bA98c21E63c375B67614108',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/arbitrum/0x123389C2f0e9194d9bA98c21E63c375B67614108.jpg',
    name: 'EthereumMax',
    symbol: 'EMAX',
    coingeckoId: 'ethereummax'
  },
  {
    address: '0xB41bd4C99dA73510d9e081C5FADBE7A27Ac1F814',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/arbitrum/assets/0xB41bd4C99dA73510d9e081C5FADBE7A27Ac1F814/logo.png',
    name: 'Ideamarket',
    symbol: 'IMO',
    coingeckoId: 'ideamarket'
  },
  {
    address: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/link.jpg',
    name: 'ChainLink Token',
    symbol: 'LINK',
    coingeckoId: 'chainlink'
  },
  {
    address: '0xeD3fB761414DA74b74F33e5c5a1f78104b188DfC',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/nyan.jpg',
    name: 'ArbiNYAN',
    symbol: 'NYAN',
    coingeckoId: 'arbinyan'
  },
  {
    address: '0xA72159FC390f0E3C6D415e658264c7c4051E9b87',
    chainId: 42161,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/arbitrum/assets/0xA72159FC390f0E3C6D415e658264c7c4051E9b87/logo.png',
    name: 'Tracer',
    symbol: 'TCR',
    coingeckoId: 'tecracoin'
  },
  {
    address: '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0',
    chainId: 42161,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/uni.svg',
    name: 'Uniswap',
    symbol: 'UNI',
    coingeckoId: 'unicorn-token'
  },
  {
    address: '0x3B475F6f2f41853706afc9Fa6a6b8C5dF1a2724c',
    chainId: 42161,
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/28943/small/logo_with_bg.png?1675569328',
    name: 'ZyberToken',
    symbol: 'ZYB',
    coingeckoId: 'zyberswap',
    bridgeOnly: true,
    commonKey: 'zyb-wei'
  },
  {
    address: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
    chainId: 42161,
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/18323/small/arbit.png?1631532468',
    name: 'GMX',
    symbol: 'GMX',
    coingeckoId: 'gmx'
  },
  {
    chainId: 42161,
    address: '0x5402B5F40310bDED796c7D0F3FF6683f5C0cFfdf',
    decimals: 18,
    name: 'Staked GLP',
    symbol: 'sGLP',
    logoURI: 'https://assets.coingecko.com/coins/images/18323/small/arbit.png?1631532468',
    coingeckoId: 'GLP'
  },
  {
    address: '0x5E2Cf56A562b1bDD32ec26315063074ADC420C73',
    chainId: 42161,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    chainId: 42161,
    address: '0xa334884bF6b0A066d553D19e507315E839409e62',
    name: 'Ethos Reserve Note',
    symbol: 'ERN',
    decimals: 18,
    logoURI: 'https://docs.velodrome.finance/tokens/ERN.png',
    coingeckoId: 'ethos-reserve-note',
    commonKey: 'ern-wei',
    bridgeOnly: true
  },
  {
    chainId: 42161,
    name: 'Silo Governance Token',
    symbol: 'SILO',
    address: '0x0341c0c0ec423328621788d4854119b97f44e391',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16010.png',
    coingeckoId: 'silo-finance'
  },
  {
    chainId: 42161,
    address: '0x816E21c33fa5F8440EBcDF6e01D39314541BEA72',
    name: 'LiquidDriver',
    symbol: 'Lqdr',
    decimals: 18,
    commonKey: 'lqdr-wei',
    logoURI:
      'https://2302794922-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYQICp07j-iq-GK2MHc%2Fuploads%2F9E0dn7eOs8PLq9hq26Gv%2FIcon-PNG.png?alt=media&token=53c999ea-e4a0-43a3-9ae8-2f2d4c83f132',
    coingeckoId: 'liquiddriver',
    bridgeOnly: true
  },
  {
    chainId: 42161,
    address: '0x00e1724885473B63bCE08a9f0a52F35b0979e35A',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    commonKey: 'oath-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true
  },
  {
    chainId: 42161,
    address: '0xf7A0dd3317535eC4f4d29ADF9d620B3d8D5D5069',
    name: 'Staked ERN Vault',
    symbol: 'stERN',
    decimals: 18,
    commonKey: 'stern-wei',
    logoURI: 'https://github.com/0xsquid/assets/blob/main/images/tokens/stERN.svg?raw=true',
    coingeckoId: 'staked-ethos-reserve-note'
  },
  {
    chainId: 42161,
    address: '0xaaa6c1e32c55a7bfa8066a6fae9b42650f262418',
    name: 'Ramses Exchange',
    symbol: 'RAM',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23858.png',
    coingeckoId: 'ramses-exchange'
  },
  {
    chainId: 42161,
    address: '0x9cfB13E6c11054ac9fcB92BA89644F30775436e4',
    name: 'Axelar Wrapped wstETH',
    symbol: 'axl-wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    commonKey: 'wsteth-wei',
    bridgeOnly: true
  },
  {
    chainId: 42161,
    address: '0xb829b68f57CC546dA7E5806A929e53bE32a4625D',
    name: 'Axelar Wrapped ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true
  },
  {
    chainId: 42161,
    address: '0x2F27118E3D2332aFb7d165140Cf1bB127eA6975d',
    name: 'Gridex',
    symbol: 'GDX',
    decimals: 18,
    commonKey: 'gdx-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23941.png',
    coingeckoId: 'gdx-token'
  },
  {
    chainId: 42161,
    address: '0x259c1C2ED264402b5ed2f02bc7dC25A15C680c18',
    name: 'OneRing',
    symbol: 'RING',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17786.png',
    coingeckoId: 'onering',
    bridgeOnly: true,
    commonKey: 'ring-wei'
  },
  {
    chainId: 42161,
    address: '0xDE5ed76E7c05eC5e4572CfC88d1ACEA165109E44',
    name: 'DEUS',
    symbol: 'DEUS',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12972.png',
    coingeckoId: 'deus-finance-2',
    bridgeOnly: true,
    commonKey: 'deus-wei'
  },
  {
    chainId: 42161,
    address: '0x088cd8f5eF3652623c22D48b1605DCfE860Cd704',
    name: 'VelaToken',
    symbol: 'VELA',
    decimals: 18,
    commonKey: 'vela-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23248.png',
    coingeckoId: 'vela-token',
    bridgeOnly: false
  },
  {
    chainId: 42161,
    address: '0xdd8e557c8804d326c72074e987de02a23ae6ef84',
    name: 'Arbinu',
    symbol: 'ARBINU',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23301.png',
    coingeckoId: 'arbinu',
    feeOnTransfer: true
  },
  {
    chainId: 42161,
    address: '0xD5954c3084a1cCd70B4dA011E67760B8e78aeE84',
    name: 'Arbidex',
    symbol: 'ARX',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/25130.png',
    coingeckoId: 'arbitrum-exchange',
    bridgeOnly: true,
    commonKey: 'arx-wei'
  },
  {
    chainId: 42161,
    address: '0x93b346b6BC2548dA6A1E7d98E9a421B42541425b',
    name: 'LUSD Stablecoin',
    symbol: 'LUSD',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9566.png',
    coingeckoId: 'liquity-usd',
    bridgeOnly: false
  },
  {
    chainId: 42161,
    address: '0x406Cde76a3fD20e48bc1E0F60651e60Ae204B040',
    name: 'Axelar Wrapped FRAX',
    symbol: 'axlFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei',
    bridgeOnly: true
  },
  {
    address: '0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396',
    chainId: 42161,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ovn.svg',
    name: 'OVN',
    symbol: 'OVN',
    coingeckoId: '',
    bridgeOnly: true,
    commonKey: 'ovn-wei'
  },
  {
    chainId: 42161,
    address: '0x11c1879227d463b60db18c17c20ae739ae8e961a',
    name: 'Balancer',
    symbol: 'axlBAL',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5728.png',
    coingeckoId: 'balancer',
    commonKey: 'bal-wei',
    bridgeOnly: true
  },
  {
    chainId: 42161,
    address: '0x3A18dcC9745eDcD1Ef33ecB93b0b6eBA5671e7Ca',
    name: 'Kuji',
    symbol: 'KUJI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/kuji.svg',
    coingeckoId: 'kujira',
    commonKey: 'ukuji'
  },
  {
    chainId: 42161,
    address: '0x809c55916bb542c1419724022B3F0162087E3C88',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 42161,
    address: '0x2598c30330D5771AE9F983979209486aE26dE875',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28916.png',
    name: 'Any Inu',
    symbol: 'AI',
    coingeckoId: 'any-inu'
  },
  {
    chainId: 42161,
    address: '0x64D599b3d0c5f1375e5e639E98aB86298261A30B',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 42161,
    address: '0xf3602C5A7f625181659445C8dDDde73dA15c22e3',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 42161,
    address: '0x219279953d8D23520B7878447e8A6c266a51de2f',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 42161,
    address: '0x5860a0bF37133f8461b2DEDe7C80e55D6bfF3721',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 42161,
    address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 'archway-1',
    address: 'aarch',
    name: 'Archway',
    symbol: 'ARCH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/arch.svg',
    coingeckoId: 'archway',
    ibcDenom: 'aarch',
    pathKey: 'arch_archway'
  },
  {
    chainId: 'archway-1',
    address: 'ibc/B9E4FD154C92D3A23BEA029906C4C5FF2FE74CB7E3A058290B77197A263CF88B',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/B9E4FD154C92D3A23BEA029906C4C5FF2FE74CB7E3A058290B77197A263CF88B',
    pathKey: 'axlusdc_archway'
  },
  {
    chainId: 'archway-1',
    address: 'ibc/43897B9739BD63E3A08A88191999C632E052724AB96BD4C74AE31375C991F48D',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/43897B9739BD63E3A08A88191999C632E052724AB96BD4C74AE31375C991F48D',
    pathKey: 'nusdc_archway'
  },
  {
    chainId: 'archway-1',
    address: 'ibc/F17C8EF908BE4D0AE74F236C455E26274185C6DB47037AA6BDF02DA7A8B81052',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/F17C8EF908BE4D0AE74F236C455E26274185C6DB47037AA6BDF02DA7A8B81052',
    commonKey: 'frax-wei',
    pathKey: 'frax_archway'
  },
  {
    chainId: 'archway-1',
    address: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
    name: 'Osmo',
    symbol: 'OSMO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/osmo.svg',
    coingeckoId: 'osmosis',
    ibcDenom: 'ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B',
    pathKey: 'osmo_archway'
  },
  {
    chainId: 'archway-1',
    address: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
    name: 'Atom',
    symbol: 'ATOM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/atom.svg',
    coingeckoId: 'cosmos',
    ibcDenom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
    pathKey: 'atom_archway'
  },
  {
    chainId: 'archway-1',
    address: 'ibc/926432AE1C5FA4F857B36D970BE7774C7472079506820B857B75C5DE041DD7A3',
    name: 'Jackal',
    symbol: 'JKL',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/jkl.svg',
    coingeckoId: 'jackal-protocol',
    ibcDenom: 'ibc/926432AE1C5FA4F857B36D970BE7774C7472079506820B857B75C5DE041DD7A3',
    pathKey: 'jkl_archway'
  },
  {
    chainId: 'archway-1',
    address: 'ibc/C0336ECF2DF64E7D2C98B1422EC2B38DE9EF33C34AAADF18C6F2E3FFC7BE3615',
    name: 'Inter Stable Token',
    symbol: 'IST',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ist.svg',
    coingeckoId: 'inter-stable-token',
    ibcDenom: 'ibc/C0336ECF2DF64E7D2C98B1422EC2B38DE9EF33C34AAADF18C6F2E3FFC7BE3615',
    pathKey: 'ist_archway'
  },
  {
    chainId: 'archway-1',
    address: 'ibc/E3409E92F78AE5BF44DBC7C4741901E21EF73B7B8F98C4D48F2BD360AF242C00',
    name: 'Decentr',
    symbol: 'DEC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dec.svg',
    coingeckoId: 'decentr',
    ibcDenom: 'ibc/E3409E92F78AE5BF44DBC7C4741901E21EF73B7B8F98C4D48F2BD360AF242C00',
    pathKey: 'dec_archway'
  },
  {
    chainId: 'archway-1',
    address: 'ibc/FCB240D2C3838369155A0FA8970A8BE3EC1042F698269B9D6D9859274F00A0BB',
    name: 'BitCanna',
    symbol: 'BCNA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bcna.svg',
    coingeckoId: 'bitcanna',
    ibcDenom: 'ibc/FCB240D2C3838369155A0FA8970A8BE3EC1042F698269B9D6D9859274F00A0BB',
    pathKey: 'bcna_archway'
  },
  {
    chainId: 'archway-1',
    address: 'ibc/8CB56C813A5C2387140BBEAABCCE797AFA0960C8D07B171F71A5188726CFED2C',
    name: 'Agoric',
    symbol: 'BLD',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bld.svg',
    coingeckoId: 'agoric',
    ibcDenom: 'ibc/8CB56C813A5C2387140BBEAABCCE797AFA0960C8D07B171F71A5188726CFED2C',
    pathKey: 'bld_archway'
  },
  {
    chainId: 'archway-1',
    address: 'ibc/BF8BDCAA292B56035E669D80711D9881CC96796AC6BCB0376836FAD045355E37',
    name: 'Comdex',
    symbol: 'CMDX',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/cmdx.svg',
    coingeckoId: 'comdex',
    ibcDenom: 'ibc/BF8BDCAA292B56035E669D80711D9881CC96796AC6BCB0376836FAD045355E37',
    pathKey: 'cmdx_archway'
  },
  {
    chainId: 'archway-1',
    address: 'ibc/3A2DEEBCD51D0B74FE7CE058D40B0BF4C0E556CE9219E8F25F92CF288FF35F56',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    ibcDenom: 'ibc/3A2DEEBCD51D0B74FE7CE058D40B0BF4C0E556CE9219E8F25F92CF288FF35F56',
    pathKey: 'axlwbtc_archway'
  },
  {
    chainId: 'archway-1',
    address: 'ibc/13C5990F84FA5D472E1F8BB1BAAEA8774DA5F24128EC02B119107AD21FB52A61',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    ibcDenom: 'ibc/13C5990F84FA5D472E1F8BB1BAAEA8774DA5F24128EC02B119107AD21FB52A61',
    pathKey: 'axleth_archway'
  },
  {
    chainId: 'mantle-1',
    address: 'umntl',
    name: 'AssetMantle',
    symbol: 'MNTL',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19686.png',
    coingeckoId: 'assetmantle',
    ibcDenom: 'umntl',
    pathKey: 'mntl_assetmantle'
  },
  {
    chainId: 'mantle-1',
    address: 'ibc/616E26A85AD20A3DDEAEBDDE7262E3BA9356C557BC15CACEA86768D7D51FA703',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/616E26A85AD20A3DDEAEBDDE7262E3BA9356C557BC15CACEA86768D7D51FA703',
    pathKey: 'axlusdc_assetmantle'
  },
  {
    chainId: 'mantle-1',
    address: 'ibc/3EFE89848528B4A5665D0102DB818C6B19E04E17455197E92BECC3C41A7F7D78',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/3EFE89848528B4A5665D0102DB818C6B19E04E17455197E92BECC3C41A7F7D78',
    pathKey: 'axleth_assetmantle'
  },
  {
    chainId: 'mantle-1',
    address: 'ibc/E4C169A198288D55F756DA32B0EBF0B70C46F634261E288FA34217B7EB8E4947',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/E4C169A198288D55F756DA32B0EBF0B70C46F634261E288FA34217B7EB8E4947',
    pathKey: 'axldai_assetmantle'
  },
  {
    chainId: 'mantle-1',
    address: 'ibc/EF1D13E950ADFB6D87A786383D6574529180E34D5EE29459BB578A2A553C21B9',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'ibc/EF1D13E950ADFB6D87A786383D6574529180E34D5EE29459BB578A2A553C21B9',
    pathKey: 'axlusdt_assetmantle'
  },
  {
    chainId: 'mantle-1',
    address: 'ibc/7ACA93F806B54D0833AAEF0C35A91AF112EA8CA0A34A17B584E6D4F0C22372EE',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/7ACA93F806B54D0833AAEF0C35A91AF112EA8CA0A34A17B584E6D4F0C22372EE',
    pathKey: 'axlbusd_assetmantle'
  },
  {
    chainId: 'mantle-1',
    address: 'ibc/6EB0413C3DF3032748A30897930CB98993549B4475E0E61E49CFA661C071BB60',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/6EB0413C3DF3032748A30897930CB98993549B4475E0E61E49CFA661C071BB60',
    pathKey: 'axlavax_assetmantle'
  },
  {
    chainId: 'mantle-1',
    address: 'ibc/ECE7689D69D6EEB7354B975B75F5402A840A30C0E01AE9E9493FB1E8A886FA17',
    name: 'Axelar WGLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/ECE7689D69D6EEB7354B975B75F5402A840A30C0E01AE9E9493FB1E8A886FA17',
    pathKey: 'axlglmr_assetmantle'
  },
  {
    chainId: 'mantle-1',
    address: 'ibc/81AD1D148D8567540BE2EAF522A26F93105D453C9C4D4F35DCE11CC3B1B94E50',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/81AD1D148D8567540BE2EAF522A26F93105D453C9C4D4F35DCE11CC3B1B94E50',
    pathKey: 'axlmatic_assetmantle'
  },
  {
    chainId: 'mantle-1',
    address: 'ibc/366CBD559121EDAE36D7A1202DD1520143E3EF3493810D5FBB7D075F24E03EF3',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/366CBD559121EDAE36D7A1202DD1520143E3EF3493810D5FBB7D075F24E03EF3',
    pathKey: 'axlwbtc_assetmantle'
  },
  {
    chainId: 'mantle-1',
    address: 'ibc/C50DBE8B3FEF01C20C8049754E1066A89EC57BC15122699C2DDAA6D7581F2EAE',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/C50DBE8B3FEF01C20C8049754E1066A89EC57BC15122699C2DDAA6D7581F2EAE',
    pathKey: 'axlbnb_assetmantle'
  },
  {
    chainId: 'mantle-1',
    address: 'ibc/7A6F5C3C7459DAB639CF605D605CF5D291944B72DF233284C5150DB548B2018C',
    name: 'Axelar WFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/7A6F5C3C7459DAB639CF605D605CF5D291944B72DF233284C5150DB548B2018C',
    pathKey: 'axlftm_assetmantle'
  },
  {
    chainId: 43114,
    address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin-avalanche-bridged-usdc-e',
    commonKey: 'avalanche-uusdc'
  },
  {
    chainId: 43114,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'avalanche-2',
    commonKey: 'wavax-wei'
  },
  {
    chainId: 43114,
    address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
    decimals: 6,
    name: 'Tether USD',
    symbol: 'USDT',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether'
  },
  {
    chainId: 43114,
    address: '0xF976ba91b6bb3468C91E4f02E68B37bc64a57e66',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true
  },
  {
    chainId: 43114,
    address: '0xfaB550568C688d5D8A52C7d794cb93Edc26eC0eC',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    address: '0x44c784266cf024a60e8acF2427b9857Ace194C5d',
    chainId: 43114,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    chainId: 43114,
    address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    name: 'Wrapped AVAX',
    symbol: 'WAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei'
  },
  {
    chainId: 43114,
    address: '0xd889657E1570c5bedD3fa846aB7865a86aAa338a',
    name: 'Mai Stablecoin',
    symbol: 'axlWMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    chainId: 43114,
    address: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    decimals: 6,
    name: 'Tether USD',
    symbol: 'USDT.e',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether'
  },
  {
    chainId: 43114,
    address: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC.e',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin-avalanche-bridged-usdc-e'
  },
  {
    chainId: 43114,
    address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    name: 'DAI.e',
    symbol: 'DAI.e',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png',
    coingeckoId: 'dai'
  },
  {
    chainId: 43114,
    address: '0x130966628846BFd36ff31a822705796e8cb8C18D',
    decimals: 18,
    name: 'Magic Internet Money',
    symbol: 'MIM',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/162.png',
    coingeckoId: 'magic-internet-money'
  },
  {
    address: '0x39fC9e94Caeacb435842FADeDeCB783589F50f5f',
    chainId: 43114,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Kyber Network Crystal',
    symbol: 'KNC',
    coingeckoId: 'kyber-network-crystal'
  },
  {
    chainId: 43114,
    address: '0x50b7545627a5162F82A992c33b87aDc75187B218',
    decimals: 8,
    name: 'Wrapped BTC',
    symbol: 'WBTC.e',
    logoURI:
      'https://raw.githubusercontent.com/pangolindex/tokens/main/assets/43114/0x50b7545627a5162F82A992c33b87aDc75187B218/logo_24.png',
    coingeckoId: 'wrapped-bitcoin'
  },
  {
    chainId: 43114,
    address: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
    decimals: 18,
    name: 'Wrapped Ether',
    symbol: 'WETH.e',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth'
  },
  {
    chainId: 43114,
    address: '0x60781C2586D68229fde47564546784ab3fACA982',
    decimals: 18,
    name: 'Pangolin',
    symbol: 'PNG',
    logoURI:
      'https://raw.githubusercontent.com/pangolindex/tokens/main/assets/43114/0x60781C2586D68229fde47564546784ab3fACA982/logo_24.png',
    coingeckoId: 'pangolin'
  },
  {
    chainId: 43114,
    address: '0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4',
    decimals: 18,
    name: 'Avalaunch',
    symbol: 'XAVA',
    logoURI:
      'https://raw.githubusercontent.com/pangolindex/tokens/main/assets/43114/0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4/logo_24.png',
    coingeckoId: 'avalaunch'
  },
  {
    chainId: 43114,
    address: '0xB1466d4cf0DCfC0bCdDcf3500F473cdACb88b56D',
    decimals: 18,
    name: 'Weble Ecosystem Token',
    symbol: 'WET',
    logoURI:
      'https://raw.githubusercontent.com/pangolindex/tokens/main/assets/43114/0xB1466d4cf0DCfC0bCdDcf3500F473cdACb88b56D/logo_24.png',
    coingeckoId: 'weble-ecosystem-token'
  },
  {
    chainId: 43114,
    address: '0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7',
    decimals: 18,
    name: 'Yak Token',
    symbol: 'YAK',
    logoURI:
      'https://raw.githubusercontent.com/pangolindex/tokens/main/assets/43114/0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7/logo_24.png',
    coingeckoId: 'yield-yak'
  },
  {
    chainId: 43114,
    address: '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
    decimals: 18,
    name: 'BENQI',
    symbol: 'QI',
    logoURI:
      'https://raw.githubusercontent.com/pangolindex/tokens/main/assets/43114/0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5/logo_24.png',
    coingeckoId: 'benqi'
  },
  {
    chainId: 43114,
    address: '0x5947BB275c521040051D82396192181b413227A3',
    decimals: 18,
    name: 'Chainlink Token',
    symbol: 'LINK.e',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png',
    coingeckoId: 'chainlink'
  },
  {
    chainId: 43114,
    address: '0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE',
    decimals: 18,
    name: 'Staked AVAX | benqi',
    symbol: 'sAVAX',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18523.png',
    coingeckoId: 'benqi-liquid-staked-avax'
  },
  {
    chainId: 43114,
    address: '0x1B88D7aD51626044Ec62eF9803EA264DA4442F32',
    decimals: 18,
    name: 'ZooToken',
    symbol: 'ZOO',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9488.png',
    coingeckoId: 'cryptozoo'
  },
  {
    chainId: 43114,
    address: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
    decimals: 18,
    name: 'JoeToken',
    symbol: 'JOE',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11396.png',
    coingeckoId: 'joe'
  },
  {
    chainId: 43114,
    address: '0x0EF27Ddc8F89D4886E89d630De089962FfC12E43',
    name: 'Pegaxy Stone',
    symbol: 'PGX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/pgx.svg',
    coingeckoId: 'pegaxy-stone'
  },
  {
    chainId: 43114,
    address: '0x111111111111ed1D73f860F57b2798b683f2d325',
    decimals: 18,
    name: 'YUSD Stablecoin',
    symbol: 'YUSD',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19577.png',
    coingeckoId: 'yusd-stablecoin'
  },
  {
    chainId: 43114,
    address: '0x264c1383EA520f73dd837F915ef3a732e204a493',
    decimals: 18,
    name: 'Binance',
    symbol: 'BNB',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x264c1383EA520f73dd837F915ef3a732e204a493/logo.png',
    coingeckoId: 'binancecoin'
  },
  {
    chainId: 43114,
    address: '0x63a72806098Bd3D9520cC43356dD78afe5D386D9',
    decimals: 18,
    name: 'Aave Token',
    symbol: 'AAVE.e',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x63a72806098Bd3D9520cC43356dD78afe5D386D9/logo.png',
    coingeckoId: 'aave'
  },
  {
    chainId: 43114,
    address: '0xfB98B335551a418cD0737375a2ea0ded62Ea213b',
    decimals: 18,
    name: 'Pendle',
    symbol: 'PENDLE',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xfB98B335551a418cD0737375a2ea0ded62Ea213b/logo.png',
    coingeckoId: 'pendle'
  },
  {
    chainId: 43114,
    address: '0xA32608e873F9DdEF944B24798db69d80Bbb4d1ed',
    decimals: 18,
    name: 'Crabada Token',
    symbol: 'CRA',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xA32608e873F9DdEF944B24798db69d80Bbb4d1ed/logo.png',
    coingeckoId: 'crabada'
  },
  {
    chainId: 43114,
    address: '0x321E7092a180BB43555132ec53AaA65a5bF84251',
    decimals: 18,
    name: 'Governance OHM',
    symbol: 'gOHM',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x321E7092a180BB43555132ec53AaA65a5bF84251/logo.png',
    coingeckoId: 'governance-ohm'
  },
  {
    chainId: 43114,
    address: '0xec3492a2508DDf4FDc0cD76F31f340b30d1793e6',
    decimals: 18,
    name: 'Colony Token',
    symbol: 'CLY',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xec3492a2508DDf4FDc0cD76F31f340b30d1793e6/logo.png',
    coingeckoId: 'celery'
  },
  {
    chainId: 43114,
    address: '0x22d4002028f537599bE9f666d1c4Fa138522f9c8',
    decimals: 18,
    name: 'Platypus',
    symbol: 'PTP',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x22d4002028f537599bE9f666d1c4Fa138522f9c8/logo.png',
    coingeckoId: 'platypus-finance'
  },
  {
    chainId: 43114,
    address: '0x2147EFFF675e4A4eE1C2f918d181cDBd7a8E208f',
    decimals: 18,
    name: 'Alpha Venture DAO',
    symbol: 'ALPHA.e',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x2147EFFF675e4A4eE1C2f918d181cDBd7a8E208f/logo.png',
    coingeckoId: 'alpha-finance'
  },
  {
    chainId: 43114,
    address: '0xF891214fdcF9cDaa5fdC42369eE4F27F226AdaD6',
    decimals: 18,
    name: 'Imperium Empires Token',
    symbol: 'IME',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xF891214fdcF9cDaa5fdC42369eE4F27F226AdaD6/logo.png',
    coingeckoId: 'imperium-empires'
  },
  {
    chainId: 43114,
    address: '0x7761E2338B35bCEB6BdA6ce477EF012bde7aE611',
    decimals: 18,
    name: 'Chikn Egg',
    symbol: 'EGG',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x7761E2338B35bCEB6BdA6ce477EF012bde7aE611/logo.png',
    coingeckoId: 'chikn-egg'
  },
  {
    chainId: 43114,
    address: '0x62edc0692BD897D2295872a9FFCac5425011c661',
    decimals: 18,
    name: 'GMX',
    symbol: 'GMX',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11857.png',
    coingeckoId: 'gmx'
  },
  {
    chainId: 43114,
    address: '0x8F47416CaE600bccF9530E9F3aeaA06bdD1Caa79',
    decimals: 18,
    name: 'THOR v2',
    symbol: 'THOR',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/15789.png',
    coingeckoId: 'thor'
  },
  {
    chainId: 43114,
    address: '0xed2b42d3c9c6e97e11755bb37df29b6375ede3eb',
    decimals: 18,
    name: 'Hon Token',
    symbol: 'HON',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17969.png',
    coingeckoId: 'heroes-of-nft'
  },
  {
    chainId: 43114,
    address: '0xfcc6ce74f4cd7edef0c5429bb99d38a3608043a5',
    decimals: 18,
    name: 'The Phoenix',
    symbol: 'FIRE',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5/logo.png',
    coingeckoId: 'the-phoenix'
  },
  {
    chainId: 43114,
    address: '0x83a283641C6B4DF383BCDDf807193284C84c5342',
    decimals: 18,
    name: 'VaporNodes',
    symbol: 'VPND',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x83a283641C6B4DF383BCDDf807193284C84c5342/logo.png',
    coingeckoId: 'vapornodes'
  },
  {
    chainId: 43114,
    address: '0x5817D4F0b62A59b17f75207DA1848C2cE75e7AF4',
    decimals: 18,
    name: 'Vector',
    symbol: 'VTX',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x5817D4F0b62A59b17f75207DA1848C2cE75e7AF4/logo.png',
    coingeckoId: 'vector-finance'
  },
  {
    chainId: 43114,
    address: '0xeb8343d5284caec921f035207ca94db6baaacbcd',
    decimals: 18,
    name: 'Echidna',
    symbol: 'ECD',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xeb8343d5284caec921f035207ca94db6baaacbcd/logo.png',
    coingeckoId: 'echidna'
  },
  {
    chainId: 43114,
    address: '0x6121191018BAf067c6Dc6B18D42329447a164F05',
    decimals: 18,
    name: 'Pizza',
    symbol: 'PIZZA',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18216.png',
    coingeckoId: 'pizza-game'
  },
  {
    chainId: 43114,
    address: '0x4Bfc90322dD638F81F034517359BD447f8E0235a',
    decimals: 18,
    name: 'New Order',
    symbol: 'NEWO',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x4Bfc90322dD638F81F034517359BD447f8E0235a/logo.png',
    coingeckoId: 'new-order'
  },
  {
    chainId: 43114,
    address: '0x77777777777d4554c39223C354A05825b2E8Faa3',
    decimals: 18,
    name: 'Yeti Finance',
    symbol: 'YETI',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19576.png',
    coingeckoId: 'yeti-finance'
  },
  {
    chainId: 43114,
    address: '0xab592d197ACc575D16C3346f4EB70C703F308D1E',
    decimals: 18,
    name: 'Chikn Feed',
    symbol: 'FEED',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17088.png',
    coingeckoId: 'chikn-feed'
  },
  {
    chainId: 43114,
    address: '0xb279f8DD152B99Ec1D84A489D32c35bC0C7F5674',
    decimals: 18,
    name: 'STEAK',
    symbol: 'STEAK',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xb279f8DD152B99Ec1D84A489D32c35bC0C7F5674/logo.png',
    coingeckoId: 'steakhut-finance'
  },
  {
    chainId: 43114,
    address: '0x152b9d0FdC40C096757F570A51E494bd4b943E50',
    decimals: 8,
    name: 'Bitcoin',
    symbol: 'BTC.b',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x152b9d0FdC40C096757F570A51E494bd4b943E50/logo.png',
    coingeckoId: 'bitcoin-avalanche-bridged-btc-b'
  },
  {
    chainId: 43114,
    address: '0xcCf719c44e2C36E919335692E89d22Cf13D6aaEB',
    decimals: 18,
    name: 'Openblox Token',
    symbol: 'OBX',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xcCf719c44e2C36E919335692E89d22Cf13D6aaEB/logo.png',
    coingeckoId: 'openblox'
  },
  {
    chainId: 43114,
    address: '0x47536F17F4fF30e64A96a7555826b8f9e66ec468',
    decimals: 18,
    name: 'Curve DAO Token',
    symbol: 'CRV',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x47536F17F4fF30e64A96a7555826b8f9e66ec468/logo.png',
    coingeckoId: 'curve-dao-token'
  },
  {
    chainId: 43114,
    address: '0xC7f4debC8072e23fe9259A5C0398326d8EfB7f5c',
    decimals: 18,
    name: 'HeroesChained',
    symbol: 'HeC',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0xC7f4debC8072e23fe9259A5C0398326d8EfB7f5c/logo.png',
    coingeckoId: 'heroeschained'
  },
  {
    chainId: 43114,
    address: '0x6ca558bd3eaB53DA1B25aB97916dd14bf6CFEe4E',
    decimals: 18,
    name: 'Ripae AVAX',
    symbol: 'pAVAX',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20673.png',
    coingeckoId: 'ripae-avax'
  },
  {
    chainId: 43114,
    address: '0x6D923f688C7FF287dc3A5943CAeefc994F97b290',
    decimals: 18,
    name: 'SmarterCoin',
    symbol: 'SMRTr',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13567.png',
    coingeckoId: 'smart-coin-smrtr'
  },
  {
    chainId: 43114,
    address: '0x5a15Bdcf9a3A8e799fa4381E666466a516F2d9C8',
    decimals: 18,
    name: 'Snail Trail',
    symbol: 'SLIME',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19958.png',
    coingeckoId: 'snail-trail'
  },
  {
    chainId: 43114,
    address: '0x42006Ab57701251B580bDFc24778C43c9ff589A1',
    decimals: 18,
    name: 'EVO',
    symbol: 'EVO',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x42006Ab57701251B580bDFc24778C43c9ff589A1/logo.png',
    coingeckoId: 'evo-finance'
  },
  {
    chainId: 43114,
    address: '0x48f88A3fE843ccb0b5003e70B4192c1d7448bEf0',
    decimals: 18,
    name: 'Colony Avalanche Index',
    symbol: 'CAI',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21726.png',
    coingeckoId: 'colony-avalanche-index'
  },
  {
    chainId: 43114,
    address: '0x9A8E0217cD870783c3f2317985C57Bf570969153',
    decimals: 18,
    name: 'Magic',
    symbol: 'MAGIC',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x9A8E0217cD870783c3f2317985C57Bf570969153/logo.png',
    coingeckoId: 'cosmic-universe-magic-token'
  },
  {
    chainId: 43114,
    address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
    decimals: 18,
    name: 'BUSD Token',
    symbol: 'BUSD',
    logoURI:
      'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39/logo.png',
    coingeckoId: 'binance-usd'
  },
  {
    chainId: 43114,
    address: '0xaE64d55a6f09E4263421737397D1fdFA71896a69',
    decimals: 18,
    name: 'Staked GLP',
    symbol: 'sGLP',
    logoURI: 'https://assets.coingecko.com/coins/images/18323/small/arbit.png?1631532468',
    coingeckoId: 'GLP'
  },
  {
    address: '0xF3bcB00146d1123dD19974De758F83D01E26D3F1',
    chainId: 43114,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    chainId: 43114,
    address: '0x08d58F06DDfA9b99AE651f68232014BE3914C5cd',
    name: 'Ethos Reserve Note',
    symbol: 'ERN',
    decimals: 18,
    logoURI: 'https://docs.velodrome.finance/tokens/ERN.png',
    coingeckoId: 'ethos-reserve-note',
    commonKey: 'ern-wei',
    bridgeOnly: true
  },
  {
    chainId: 43114,
    address: '0x873ebFf537F58e96899f6EbA33dC07151Bc5818b',
    name: 'LiquidDriver',
    symbol: 'axlLqdr',
    decimals: 18,
    commonKey: 'lqdr-wei',
    logoURI:
      'https://2302794922-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYQICp07j-iq-GK2MHc%2Fuploads%2F9E0dn7eOs8PLq9hq26Gv%2FIcon-PNG.png?alt=media&token=53c999ea-e4a0-43a3-9ae8-2f2d4c83f132',
    coingeckoId: 'liquiddriver',
    bridgeOnly: true
  },
  {
    chainId: 43114,
    address: '0xAD090976CE846935DCfF1dEd852668beeD912916',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    commonKey: 'oath-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath'
  },
  {
    chainId: 43114,
    address: '0x22FA75d747320ae5D14cC625F696487C83243CD3',
    name: 'Axelar Wrapped KNC',
    symbol: 'axlKNC',
    decimals: 18,
    logoURI:
      'https://storage.googleapis.com/ks-setting-1d682dca/538cbc06-ef8a-4acc-ac38-7f41d75f1666.png',
    coingeckoId: 'kyber-network-crystal',
    bridgeOnly: true,
    commonKey: 'knc-wei'
  },
  {
    chainId: 43114,
    address: '0x232Fe66f42ac4d0DF191Ec9f34e30224BBF15C3F',
    name: 'Staked ERN Vault',
    symbol: 'stERN',
    decimals: 18,
    commonKey: 'stern-wei',
    logoURI: 'https://github.com/0xsquid/assets/blob/main/images/tokens/stERN.svg?raw=true',
    coingeckoId: 'staked-ethos-reserve-note',
    bridgeOnly: true
  },
  {
    chainId: 43114,
    address: '0xc7b5d72c836e718cda8888eaf03707faef675079',
    name: 'TrustSwap Token',
    symbol: 'SWAP.e',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5829.png',
    coingeckoId: ''
  },
  {
    chainId: 43114,
    address: '0x3Ab1C9aDb065F3FcA0059652Cd7A52B05C98f9a9',
    name: 'Orbs',
    symbol: 'ORBS',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3835.png',
    coingeckoId: 'orbs',
    bridgeOnly: true,
    commonKey: 'orbs-wei'
  },
  {
    chainId: 43114,
    address: '0xf9617c66cD8a4193A4DE0a101e16D73B71828810',
    name: 'Axelar Wrapped DEUS',
    symbol: 'axlDEUS',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12972.png',
    coingeckoId: 'deus-finance-2',
    bridgeOnly: true,
    commonKey: 'deus-wei'
  },
  {
    chainId: 43114,
    address: '0x4914886dBb8aAd7A7456D471EAab10b06d42348D',
    name: 'Axelar Wrapped FRAX',
    symbol: 'axlFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei',
    bridgeOnly: true
  },
  {
    chainId: 43114,
    address: '0x74c6b86A89fE77B48952Bc3a9Db74a307B202e97',
    name: 'Axelar Wrapped wstETH',
    symbol: 'axl-wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    bridgeOnly: true,
    commonKey: 'wsteth-wei'
  },
  {
    chainId: 43114,
    address: '0xc13c0d723e01B02984499C672e205D5Ec9c05d10',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 43114,
    address: '0x2598c30330D5771AE9F983979209486aE26dE875',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28916.png',
    name: 'Any Inu',
    symbol: 'AI',
    coingeckoId: 'any-inu'
  },
  {
    chainId: 43114,
    address: '0x82057f44aFE6660B177c32fB724aDb5b6aC19e4A',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 43114,
    address: '0x70643975D408949044b8949Eba62f695FE12E348',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 43114,
    address: '0xcaC839c0E82A1A0470B6b78123A239Bb9f17Cbfd',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 43114,
    address: '0xb890Aa48D0C4DDa49F24F56187633C7a9b9a9c65',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 43114,
    address: '0x939b1a17C0d0Aa3fEA634Ad9157c88245A53C713',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'uaxl',
    name: 'Axelar',
    symbol: 'AXL',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    coingeckoId: 'axelar',
    ibcDenom: 'uaxl',
    pathKey: 'axl_axelar',
    commonKey: 'uaxl'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'uusdc',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'uusdc',
    pathKey: 'axlusdc_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'weth-wei',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'weth-wei',
    pathKey: 'axleth_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'dai-wei',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'dai-wei',
    pathKey: 'axldai_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'uusdt',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'uusdt',
    pathKey: 'axlusdt_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'busd-wei',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'busd-wei',
    pathKey: 'axlbusd_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'wavax-wei',
    name: 'Axelar AVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'wavax-wei',
    pathKey: 'axlavax_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'wglmr-wei',
    name: 'Axelar GLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'wglmr-wei',
    pathKey: 'axlglmr_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'wmatic-wei',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'wmatic-wei',
    pathKey: 'axlmatic_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'wbtc-satoshi',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'wbtc-satoshi',
    pathKey: 'axlwbtc_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'wbnb-wei',
    name: 'Axelar BNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'wbnb-wei',
    pathKey: 'axlbnb_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'wftm-wei',
    name: 'Axelar FTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'wftm-wei',
    pathKey: 'axlftm_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'wsteth-wei',
    name: 'Axelar wstETH',
    symbol: 'axl-wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    ibcDenom: 'wsteth-wei',
    commonKey: 'wsteth-wei',
    pathKey: 'axlwsteth_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'ibc/F8F36BBEFFD1B311D5D3A7B8E6B3C03DBF707D4E5FE045B18221D8DF12E481C3',
    name: 'axlTIA',
    symbol: 'axlTIA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/celestia.svg',
    coingeckoId: 'celestia',
    ibcDenom: 'ibc/F8F36BBEFFD1B311D5D3A7B8E6B3C03DBF707D4E5FE045B18221D8DF12E481C3',
    commonKey: 'utia',
    pathKey: 'axltia_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'dot-planck',
    name: 'axlDOT',
    symbol: 'axlDOT',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
    coingeckoId: 'polkadot',
    ibcDenom: 'dot-planck',
    commonKey: 'dot-planck',
    pathKey: 'axldot_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'ukuji',
    name: 'Kuji',
    symbol: 'KUJI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/kuji.svg',
    coingeckoId: 'kujira',
    ibcDenom: 'ukuji',
    pathKey: 'axlkuji_axelar',
    commonKey: 'ukuji'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'ustrd',
    name: 'Stride',
    symbol: 'STRD',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/strd.svg',
    coingeckoId: 'stride',
    ibcDenom: 'ustrd',
    pathKey: 'axlstrd_axelar',
    commonKey: 'ustrd'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'sfrxeth-wei',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    ibcDenom: 'sfrxeth-wei',
    commonKey: 'sfrxeth-wei',
    pathKey: 'sfrxeth_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'wusdm-wei',
    name: 'Mountain Protocol USD',
    symbol: 'wUSDM',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/31719/standard/usdm.png?1696530540',
    coingeckoId: 'mountain-protocol-usdm',
    commonKey: 'wusdm-wei',
    ibcDenom: 'wusdm-wei',
    pathKey: 'axlwusdm_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'wdoge-wei',
    name: 'Wrapped Doge',
    symbol: 'wDOGE',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/doge.svg',
    coingeckoId: 'dogecoin',
    commonKey: 'wdoge-wei',
    ibcDenom: 'wdoge-wei',
    pathKey: 'axlwdoge_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'cusd-wei',
    name: 'Celo Dollar',
    symbol: 'cUSD',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7236.png',
    coingeckoId: 'celo-dollar',
    ibcDenom: 'cusd-wei',
    commonKey: 'cusd-wei',
    pathKey: 'axlcusd_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'cbeth-wei',
    name: 'Coinbase Wrapped Staked ETH',
    symbol: 'CBETH',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21535.png',
    coingeckoId: 'coinbase-wrapped-staked-eth',
    ibcDenom: 'cbeth-wei',
    commonKey: 'cbeth-wei',
    pathKey: 'axlcbeth_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    name: 'ChainLink Token',
    address: 'link-wei',
    symbol: 'LINK',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
    coingeckoId: 'chainlink',
    ibcDenom: 'link-wei',
    commonKey: 'link-wei',
    pathKey: 'axllink_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'frax-wei',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'frax-wei',
    commonKey: 'frax-wei',
    pathKey: 'frax_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'pepe-wei',
    name: 'Pepe',
    symbol: 'PEPE',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/pepe.svg',
    coingeckoId: 'pepe',
    ibcDenom: 'pepe-wei',
    commonKey: 'pepe-wei',
    pathKey: 'axlpepe_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'rai-wei',
    name: 'Rai Reflex Index',
    symbol: 'RAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/14004/thumb/RAI-logo-coin.png?1613592334',
    coingeckoId: 'rai',
    ibcDenom: 'rai-wei',
    commonKey: 'rai-wei',
    pathKey: 'axlrai_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'reth-wei',
    name: 'Rocket Pool ETH',
    symbol: 'RETH',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/15060.png',
    coingeckoId: 'rocket-pool-eth',
    ibcDenom: 'reth-wei',
    commonKey: 'reth-wei',
    pathKey: 'axlreth_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'shib-wei',
    name: 'Shiba Inu',
    symbol: 'SHIB',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/11939/thumb/shiba.png?1622619446',
    coingeckoId: 'shiba-inu',
    ibcDenom: 'shib-wei',
    commonKey: 'shib-wei',
    pathKey: 'axlshib_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    name: 'Uniswap',
    address: 'uni-wei',
    symbol: 'UNI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/uni.svg',
    coingeckoId: 'uniswap',
    ibcDenom: 'uni-wei',
    commonKey: 'uni-wei',
    pathKey: 'axluni_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    name: 'Maker',
    address: 'mkr-wei',
    symbol: 'MKR',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png',
    coingeckoId: 'maker',
    ibcDenom: 'mkr-wei',
    commonKey: 'mkr-wei',
    pathKey: 'axlmkr_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    name: 'polygon USD Coin',
    address: 'polygon-uusdc',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'polygon-uusdc',
    commonKey: 'polygon-uusdc',
    pathKey: 'axlpusdc_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'avalanche-uusdc',
    decimals: 6,
    name: 'avalanche USD Coin',
    symbol: 'USDC',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin-avalanche-bridged-usdc-e',
    ibcDenom: 'avalanche-uusdc',
    commonKey: 'avalanche-uusdc',
    pathKey: 'axlausdc_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'yieldeth-wei',
    name: 'YieldETH',
    symbol: 'YieldETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/YieldETH.png',
    coingeckoId: 'yieldeth-sommelier',
    ibcDenom: 'yieldeth-wei',
    commonKey: 'yieldeth-wei',
    pathKey: 'axlyieldeth_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'arb-wei',
    name: 'Axelar Wrapped ARB',
    symbol: 'axlARB',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/arb.svg',
    coingeckoId: 'arbitrum',
    ibcDenom: 'arb-wei',
    pathKey: 'axlarb_axelar',
    commonKey: 'arb-wei'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'uluna',
    name: 'Luna Classic',
    symbol: 'LUNC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/lunc.svg',
    coingeckoId: 'terra-luna',
    ibcDenom: 'uluna',
    commonKey: 'uluna',
    pathKey: 'lunc_axelar'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'usdy-wei',
    name: 'Ondo US Dollar Yield',
    symbol: 'USDY',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdy.svg',
    coingeckoId: 'ondo-us-dollar-yield',
    ibcDenom: 'usdy-wei',
    pathKey: 'usdy_axelar',
    commonKey: 'usdy-wei',
    bridgeOnly: true
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'fpi-wei',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    ibcDenom: 'fpi-wei',
    bridgeOnly: true,
    pathKey: 'fpi_axelar',
    commonKey: 'fpi-wei'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'fxs-wei',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    ibcDenom: 'fxs-wei',
    pathKey: 'fxs_axelar',
    commonKey: 'fxs-wei'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'utori',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    ibcDenom: 'utori',
    pathKey: 'tori_axelar',
    commonKey: 'utori'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'ibc/9FD79FAFC071C4F858860C44C942F5A108EC9562BBDD26374EC8966C0287D95F',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    ibcDenom: 'ibc/9FD79FAFC071C4F858860C44C942F5A108EC9562BBDD26374EC8966C0287D95F',
    pathKey: 'huahua_axelar',
    commonKey: 'uhuahua'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'ox-wei',
    name: 'Open Exchange Token',
    symbol: 'OX',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ox.png',
    coingeckoId: 'open-exchange-token',
    ibcDenom: 'ox-wei',
    pathKey: 'ox_axelar',
    commonKey: 'ox-wei'
  },
  {
    chainId: 'axelar-dojo-1',
    address: 'frxeth-wei',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    ibcDenom: 'frxeth-wei',
    commonKey: 'frxeth-wei',
    pathKey: 'frxeth_axelar'
  },
  {
    chainId: 8453,
    address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
    name: 'USD Base Coin',
    symbol: 'USDbC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdbc.svg',
    coingeckoId: 'bridged-usd-coin-base'
  },
  {
    chainId: 8453,
    address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin'
  },
  {
    chainId: 8453,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/assets/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    chainId: 8453,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum'
  },
  {
    chainId: 8453,
    address: '0x4200000000000000000000000000000000000006',
    name: 'Wrapped WETH',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
    coingeckoId: 'weth'
  },
  {
    chainId: 8453,
    address: '0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85',
    name: 'Seamless Protocol',
    symbol: 'SEAM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/seam.svg',
    coingeckoId: 'seamless-protocol'
  },
  {
    chainId: 8453,
    address: '0x994ac01750047B9d35431a7Ae4Ed312ee955E030',
    name: 'Optimism',
    symbol: 'axlOP',
    decimals: 18,
    logoURI: 'https://ethereum-optimism.github.io/data/OP/logo.png',
    coingeckoId: 'optimism',
    commonKey: 'op-wei'
  },
  {
    chainId: 8453,
    address: '0x5C7e299CF531eb66f2A1dF637d37AbB78e6200C7',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/dai.svg',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',
    name: 'Axelar',
    symbol: 'AXL',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: false
  },
  {
    chainId: 8453,
    address: '0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad',
    name: 'Axelar Wrapped BTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0x00e1724885473B63bCE08a9f0a52F35b0979e35A',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    commonKey: 'oath-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0x23A6486099f740B7688A0bb7AED7C912015cA2F0',
    name: 'Axelar BNB',
    symbol: 'axlBNB',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bnb.svg',
    coingeckoId: 'binancecoin',
    commonKey: 'wbnb-wei',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0x6E76A241Ae6fcaD51C064Ac70fe6e676502b91c5',
    name: 'Axelar WAVAX',
    symbol: 'axlAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0xE3ce47AC96d8502824627d7cBCFDA49414beDa9C',
    name: 'Axelar WMATIC',
    symbol: 'axlMATIC',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/polygon.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0x06beE9E7238a331B68D83Df3B5B9B16d5DBa83ff',
    name: 'Axelar ATOM',
    symbol: 'axlATOM',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/atom.svg',
    coingeckoId: 'cosmos',
    commonKey: 'uatom',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0x87b6c94c435F6e49789ad34FAf0d048F2D9043a2',
    name: 'Axelar Arbitrum',
    symbol: 'axlARB',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/arbitrum.svg',
    coingeckoId: 'arbitrum',
    commonKey: 'arb-wei',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0x4D84E25cEa9447581867fE9f2329B972f532Da2c',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'binance-usd',
    commonKey: 'wbnb-wei',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0x88DfaAABaf06f3a41D2606EA98BC8edA109AbeBb',
    name: 'Axelar MAI',
    symbol: 'axlMAI',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wmai.svg',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    name: 'Dai Stablecoin',
    address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
    symbol: 'DAI',
    decimals: 18,
    chainId: 8453,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai'
  },
  {
    chainId: 8453,
    address: '0xa334884bF6b0A066d553D19e507315E839409e62',
    name: 'Ethos Reserve Note',
    symbol: 'ERN',
    decimals: 18,
    logoURI: 'https://docs.velodrome.finance/tokens/ERN.png',
    coingeckoId: 'ethos-reserve-note',
    commonKey: 'ern-wei',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    name: 'Morphex',
    symbol: 'MPX',
    address: '0xa5325A8EBBbdb12CAF6b76218a7375a71f9f3b41',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/mpx.svg',
    coingeckoId: 'mpx',
    commonKey: 'mpx-wei',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    name: 'Toshi',
    symbol: 'TOSHI',
    address: '0x8544FE9D190fD7EC52860abBf45088E81Ee24a8c',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27719.png',
    coingeckoId: 'toshi'
  },
  {
    chainId: 8453,
    name: 'Bald',
    symbol: 'BALD',
    address: '0x27D2DECb4bFC9C76F0309b8E88dec3a601Fe25a8',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27717.png',
    coingeckoId: 'bald'
  },
  {
    chainId: 8453,
    name: 'Coinbase Wrapped Staked ETH',
    symbol: 'cbETH',
    address: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21535.png',
    coingeckoId: 'coinbase-wrapped-staked-eth'
  },
  {
    chainId: 8453,
    address: '0x41b94c5867f7F6217C9a30520Cb3e793B1ee1b97',
    name: 'axlTIA',
    symbol: 'axlTIA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/celestia.svg',
    coingeckoId: 'celestia',
    commonKey: 'utia',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    name: 'SHREKT',
    symbol: 'OGRE',
    address: '0xAB8a1c03b8E4e1D21c8Ddd6eDf9e07f26E843492',
    decimals: 18,
    logoURI: 'https://baseswap.fi/images/tokens/0xab8a1c03b8e4e1d21c8ddd6edf9e07f26e843492.png',
    coingeckoId: ''
  },
  {
    chainId: 8453,
    address: '0x081AD949deFe648774C3B8deBe0E4F28a80716dc',
    name: 'Horizon',
    symbol: 'HZN',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/31156/small/Circle_logo_black_%281%29.png?1691040942',
    coingeckoId: 'horizon-2',
    bridgeOnly: true,
    commonKey: 'hzn-wei'
  },
  {
    chainId: 8453,
    name: 'Baseswap Token',
    symbol: 'BSWAP',
    address: '0x78a087d713be963bf307b18f2ff8122ef9a63ae9',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27764.png',
    coingeckoId: ''
  },
  {
    chainId: 8453,
    address: '0xf7A0dd3317535eC4f4d29ADF9d620B3d8D5D5069',
    name: 'Staked ERN Vault',
    symbol: 'stERN',
    decimals: 18,
    logoURI: 'https://github.com/0xsquid/assets/blob/main/images/tokens/stERN.svg?raw=true',
    coingeckoId: 'staked-ethos-reserve-note',
    bridgeOnly: true,
    commonKey: 'stern-wei'
  },
  {
    chainId: 8453,
    address: '0x91c415FEcD651F11D24aC4b72Ed08dbEb9868D43',
    name: 'Gridex',
    symbol: 'GDX',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23941.png',
    coingeckoId: 'gdx-token',
    bridgeOnly: true,
    commonKey: 'gdx-wei'
  },
  {
    chainId: 8453,
    address: '0xB448eC505C924944ca8B2C55EF05c299eE0781df',
    name: 'Axelar Wrapped KNC',
    symbol: 'axlKNC',
    decimals: 18,
    logoURI:
      'https://storage.googleapis.com/ks-setting-1d682dca/538cbc06-ef8a-4acc-ac38-7f41d75f1666.png',
    coingeckoId: 'kyber-network-crystal',
    bridgeOnly: true,
    commonKey: 'knc-wei'
  },
  {
    chainId: 8453,
    address: '0x22a2488fE295047Ba13BD8cCCdBC8361DBD8cf7c',
    name: 'Sonne',
    symbol: 'SONNE',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22001.png',
    coingeckoId: 'sonne-finance',
    bridgeOnly: true,
    commonKey: 'sonne-wei'
  },
  {
    chainId: 8453,
    address: '0x5A76A56ad937335168b30dF3AA1327277421C6Ae',
    name: 'VelaToken',
    symbol: 'VELA',
    decimals: 18,
    commonKey: 'vela-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23248.png',
    coingeckoId: 'vela-token',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0x58Ed4FD0C3d930b674BA50a293f03ef6cD7dE7a3',
    name: 'Arbidex',
    symbol: 'ARX',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/25130.png',
    coingeckoId: 'arbitrum-exchange',
    bridgeOnly: true,
    commonKey: 'arx-wei'
  },
  {
    chainId: 8453,
    address: '0x406Cde76a3fD20e48bc1E0F60651e60Ae204B040',
    name: 'Axelar Wrapped FRAX',
    symbol: 'axlFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0x417Ac0e078398C154EdFadD9Ef675d30Be60Af93',
    name: 'Curve USDC',
    symbol: 'crvUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/crvusd.svg',
    coingeckoId: 'crvusd'
  },
  {
    address: '0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396',
    chainId: 8453,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ovn.svg',
    name: 'OVN',
    symbol: 'OVN',
    coingeckoId: '',
    bridgeOnly: true,
    commonKey: 'ovn-wei'
  },
  {
    chainId: 8453,
    address: '0x11C1879227D463b60db18C17c20aE739aE8E961a',
    name: 'Balancer',
    symbol: 'axlBAL',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5728.png',
    coingeckoId: 'balancer',
    commonKey: 'bal-wei',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0xd386a121991E51Eab5e3433Bf5B1cF4C8884b47a',
    name: 'Base Velocimeter',
    symbol: 'BVM',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/31336/standard/bvm_%281%29.png?1696530154',
    coingeckoId: 'base-velocimeter'
  },
  {
    chainId: 8453,
    address: '0x9cfB13E6c11054ac9fcB92BA89644F30775436e4',
    name: 'Axelar Wrapped wstETH',
    symbol: 'axl-wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    bridgeOnly: true,
    commonKey: 'wsteth-wei'
  },
  {
    chainId: 8453,
    address: '0xebD4A18034C78A415088DF8508f102421eD693b1',
    name: 'Axelar Wrapped DEUS',
    symbol: 'axlDEUS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/deus.svg',
    coingeckoId: 'deus-finance-2',
    bridgeOnly: true,
    commonKey: 'deus-wei'
  },
  {
    chainId: 8453,
    address: '0x809c55916bb542c1419724022B3F0162087E3C88',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0x2598c30330D5771AE9F983979209486aE26dE875',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28916.png',
    name: 'Any Inu',
    symbol: 'AI',
    coingeckoId: 'any-inu'
  },
  {
    chainId: 8453,
    address: '0x64D599b3d0c5f1375e5e639E98aB86298261A30B',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 8453,
    address: '0xf3602C5A7f625181659445C8dDDde73dA15c22e3',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 8453,
    address: '0x219279953d8D23520B7878447e8A6c266a51de2f',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 8453,
    address: '0x5860a0bF37133f8461b2DEDe7C80e55D6bfF3721',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 8453,
    address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 56,
    name: 'Binance Pegged USDT',
    symbol: 'USDT',
    address: '0x55d398326f99059fF775485246999027B3197955',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x55d398326f99059fF775485246999027B3197955.png',
    coingeckoId: 'tether'
  },
  {
    chainId: 56,
    name: 'BNB',
    symbol: 'BNB',
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bnb.svg',
    coingeckoId: 'binancecoin',
    commonKey: 'wbnb-wei'
  },
  {
    chainId: 56,
    name: 'PancakeSwap',
    symbol: 'CAKE',
    address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/cake.svg',
    coingeckoId: 'pancakeswap-token'
  },
  {
    address: '0x8b1f4432F943c465A973FeDC6d7aa50Fc96f1f65',
    chainId: 56,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: false
  },
  {
    chainId: 56,
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    address: '0x4268B8F0B87b6Eae5d897996E6b845ddbD99Adf3',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    chainId: 56,
    name: 'WBNB',
    symbol: 'WBNB',
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bnb.svg',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei'
  },
  {
    chainId: 56,
    name: 'Binance Pegged BUSD',
    symbol: 'BUSD',
    address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'binance-usd'
  },
  {
    chainId: 56,
    name: 'Thena',
    symbol: 'THE',
    address: '0xf4c8e32eadec4bfe97e0f595add0f4450a863a11',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23335.png',
    coingeckoId: 'thena'
  },
  {
    chainId: 56,
    name: 'Morphex',
    symbol: 'MPX',
    address: '0x94C6B279b5df54b335aE51866d6E2A56BF5Ef9b7',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/mpx.svg',
    coingeckoId: 'mpx',
    commonKey: 'mpx-wei'
  },
  {
    chainId: 56,
    name: 'Binance Pegged USD Coin',
    symbol: 'USDC',
    address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin'
  },
  {
    chainId: 56,
    name: 'Binance Pegged Bitcoin',
    symbol: 'BTCB',
    address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/btc.svg',
    coingeckoId: 'binance-bitcoin'
  },
  {
    chainId: 56,
    name: 'Binance Pegged ETH',
    symbol: 'ETH',
    address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'ethereum'
  },
  {
    address: '0xfe56d5892BDffC7BF58f2E84BE1b2C32D21C308b',
    chainId: 56,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Kyber Network Crystal',
    symbol: 'KNC',
    coingeckoId: 'kyber-network-crystal'
  },
  {
    address: '0x965f527d9159dce6288a2219db51fc6eef120dd1',
    chainId: 56,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bsw.svg',
    name: 'Biswap',
    symbol: 'BSW',
    coingeckoId: 'biswap'
  },
  {
    address: '0xDF34bE7f242EE338644d8d1a1f4D11a807b4Da5f',
    chainId: 56,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Axelar Wrapped KNC',
    symbol: 'axlKNC',
    coingeckoId: 'kyber-network-crystal',
    bridgeOnly: true,
    commonKey: 'knc-wei'
  },
  {
    address: '0xfb6115445bff7b52feb98650c87f44907e58f802',
    chainId: 56,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png',
    name: 'Aave Token',
    symbol: 'AAVE',
    coingeckoId: 'aave',
    bridgeOnly: false
  },
  {
    name: 'Hay Destablecoin',
    symbol: 'HAY',
    address: '0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5.png',
    coingeckoId: 'helio-protocol-hay'
  },
  {
    name: 'Decentralized USD',
    symbol: 'USDD',
    address: '0xd17479997F34dd9156Deef8F95A52D81D265be9c',
    chainId: 56,
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/25380/small/UUSD.jpg?1651823371',
    coingeckoId: 'usdd'
  },
  {
    chainId: 56,
    name: 'Venus Token',
    symbol: 'XVS',
    address: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63.png',
    coingeckoId: 'venus'
  },
  {
    chainId: 56,
    name: 'Polkadot Token',
    symbol: 'DOT',
    address: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402.png',
    coingeckoId: 'binance-peg-polkadot'
  },
  {
    chainId: 56,
    name: 'Binance Pegged XRP Token',
    symbol: 'XRP',
    address: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE.png',
    coingeckoId: 'binance-peg-xrp'
  },
  {
    chainId: 56,
    name: 'Binance Pegged Litecoin Token',
    symbol: 'LTC',
    address: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x4338665CBB7B2485A8855A139b75D5e34AB0DB94.png',
    coingeckoId: 'binance-peg-litecoin'
  },
  {
    chainId: 56,
    name: 'Binance Pegged Cardano Token',
    symbol: 'ADA',
    address: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47.png',
    coingeckoId: 'binance-peg-cardano'
  },
  {
    chainId: 56,
    name: 'ChainLink Token',
    symbol: 'LINK',
    address: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD.png',
    coingeckoId: 'chainlink'
  },
  {
    chainId: 56,
    name: 'Trust Wallet',
    symbol: 'TWT',
    address: '0x4B0F1812e5Df2A09796481Ff14017e6005508003',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x4B0F1812e5Df2A09796481Ff14017e6005508003.png',
    coingeckoId: 'trust-wallet-token'
  },
  {
    chainId: 56,
    name: 'Binance-Pegged Uniswap',
    symbol: 'UNI',
    address: '0xBf5140A22578168FD562DCcF235E5D43A02ce9B1',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xBf5140A22578168FD562DCcF235E5D43A02ce9B1.png',
    coingeckoId: 'uniswap'
  },
  {
    chainId: 56,
    name: 'Filecoin',
    symbol: 'FIL',
    address: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153.png',
    coingeckoId: 'binance-peg-filecoin'
  },
  {
    chainId: 56,
    name: 'Injective Protocol',
    symbol: 'INJ',
    address: '0xa2B726B1145A4773F68593CF171187d8EBe4d495',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xa2B726B1145A4773F68593CF171187d8EBe4d495.png',
    coingeckoId: 'injective-protocol'
  },
  {
    chainId: 56,
    name: 'Swipe',
    symbol: 'SXP',
    address: '0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A.png',
    coingeckoId: 'swipe'
  },
  {
    chainId: 56,
    name: 'Standard BTC Hashrate Token',
    symbol: 'BTCST',
    address: '0x78650B139471520656b9E7aA7A5e9276814a38e9',
    decimals: 17,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x78650B139471520656b9E7aA7A5e9276814a38e9.png',
    coingeckoId: 'btc-standard-hashrate-token'
  },
  {
    chainId: 56,
    name: 'SafePal Token',
    symbol: 'SFP',
    address: '0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb.png',
    coingeckoId: 'safepal'
  },
  {
    chainId: 56,
    name: 'Belt',
    symbol: 'BELT',
    address: '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png',
    coingeckoId: 'belt'
  },
  {
    chainId: 56,
    name: 'TokoCrypto',
    symbol: 'TKO',
    address: '0x9f589e3eabe42ebC94A44727b3f3531C0c877809',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x9f589e3eabe42ebC94A44727b3f3531C0c877809.png',
    coingeckoId: 'tokocrypto'
  },
  {
    chainId: 56,
    name: 'My Neigbor Alice',
    symbol: 'ALICE',
    address: '0xAC51066d7bEC65Dc4589368da368b212745d63E8',
    decimals: 6,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xAC51066d7bEC65Dc4589368da368b212745d63E8.png',
    coingeckoId: 'my-neighbor-alice'
  },
  {
    chainId: 56,
    name: 'Dusk',
    symbol: 'DUSK',
    address: '0xB2BD0749DBE21f623d9BABa856D3B0f0e1BFEc9C',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xB2BD0749DBE21f623d9BABa856D3B0f0e1BFEc9C.png',
    coingeckoId: 'dusk-network'
  },
  {
    chainId: 56,
    name: 'Horizon Protocol',
    symbol: 'HZN',
    address: '0xC0eFf7749b125444953ef89682201Fb8c6A917CD',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xC0eFf7749b125444953ef89682201Fb8c6A917CD.png',
    coingeckoId: 'horizon-protocol'
  },
  {
    chainId: 56,
    name: 'Dogecoin',
    symbol: 'DOGE',
    address: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
    decimals: 8,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xbA2aE424d960c26247Dd6c32edC70B295c744C43.png',
    coingeckoId: 'binance-peg-dogecoin'
  },
  {
    chainId: 56,
    name: 'RFOX',
    symbol: 'RFOX',
    address: '0x0a3A21356793B49154Fd3BbE91CBc2A16c0457f5',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x0a3A21356793B49154Fd3BbE91CBc2A16c0457f5.png',
    coingeckoId: 'redfox-labs-2'
  },
  {
    chainId: 56,
    name: 'Mobox',
    symbol: 'MBOX',
    address: '0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377.png',
    coingeckoId: 'mobox'
  },
  {
    chainId: 56,
    name: 'Hotbit',
    symbol: 'HTB',
    address: '0x4e840AADD28DA189B9906674B4Afcb77C128d9ea',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x4e840AADD28DA189B9906674B4Afcb77C128d9ea.png',
    coingeckoId: 'hotbit-token'
  },
  {
    chainId: 56,
    name: 'Wootrade',
    symbol: 'WOO',
    address: '0x4691937a7508860F876c9c0a2a617E7d9E945D4B',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x4691937a7508860F876c9c0a2a617E7d9E945D4B.png',
    coingeckoId: 'woo-network'
  },
  {
    chainId: 56,
    name: 'BSCPad',
    symbol: 'BSCPAD',
    address: '0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700.png',
    coingeckoId: 'bscpad'
  },
  {
    chainId: 56,
    name: 'Axie Infinity Shard',
    symbol: 'AXS',
    address: '0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0.png',
    coingeckoId: 'axie-infinity'
  },
  {
    chainId: 56,
    name: 'Coin98',
    symbol: 'C98',
    address: '0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6.png',
    coingeckoId: 'coin98'
  },
  {
    chainId: 56,
    name: 'Splintershards',
    symbol: 'SPS',
    address: '0x1633b7157e7638C4d6593436111Bf125Ee74703F',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x1633b7157e7638C4d6593436111Bf125Ee74703F.png',
    coingeckoId: 'splinterlands'
  },
  {
    chainId: 56,
    name: 'Binamon',
    symbol: 'BMON',
    address: '0x08ba0619b1e7A582E0BCe5BBE9843322C954C340',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x08ba0619b1e7A582E0BCe5BBE9843322C954C340.png',
    coingeckoId: 'binamon'
  },
  {
    chainId: 56,
    name: 'BabyCake',
    symbol: 'BABYCAKE',
    address: '0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c.png',
    coingeckoId: 'baby-cake'
  },
  {
    chainId: 56,
    name: 'MetaHero',
    symbol: 'HERO',
    address: '0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13.png',
    coingeckoId: 'metahero'
  },
  {
    chainId: 56,
    name: 'Seedify',
    symbol: 'SFUND',
    address: '0x477bC8d23c634C154061869478bce96BE6045D12',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x477bC8d23c634C154061869478bce96BE6045D12.png',
    coingeckoId: 'seedify-fund'
  },
  {
    chainId: 56,
    name: 'Telos',
    symbol: 'TLOS',
    address: '0xb6C53431608E626AC81a9776ac3e999c5556717c',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xb6C53431608E626AC81a9776ac3e999c5556717c.png',
    coingeckoId: 'telos'
  },
  {
    chainId: 56,
    name: 'Lightning',
    symbol: 'LIGHT',
    address: '0x037838b556d9c9d654148a284682C55bB5f56eF4',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x037838b556d9c9d654148a284682C55bB5f56eF4.png',
    coingeckoId: 'lightning-protocol'
  },
  {
    chainId: 56,
    name: 'Beta Finance',
    symbol: 'BETA',
    address: '0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28.png',
    coingeckoId: 'beta-finance'
  },
  {
    chainId: 56,
    name: 'Mines of Dalarnia',
    symbol: 'DAR',
    address: '0x23CE9e926048273eF83be0A3A8Ba9Cb6D45cd978',
    decimals: 6,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x23CE9e926048273eF83be0A3A8Ba9Cb6D45cd978.png',
    coingeckoId: 'mines-of-dalarnia'
  },
  {
    chainId: 56,
    name: 'CryptoMines Eternal',
    symbol: 'ETERNAL',
    address: '0xD44FD09d74cd13838F137B590497595d6b3FEeA4',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xD44FD09d74cd13838F137B590497595d6b3FEeA4.png',
    coingeckoId: 'cryptomines-eternal'
  },
  {
    chainId: 56,
    name: 'Sheesha Finance',
    symbol: 'SHEESHA',
    address: '0x232FB065D9d24c34708eeDbF03724f2e95ABE768',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x232FB065D9d24c34708eeDbF03724f2e95ABE768.png',
    coingeckoId: 'sheesha-finance'
  },
  {
    chainId: 56,
    name: 'FC Santos Fan Token',
    symbol: 'SANTOS',
    address: '0xA64455a4553C9034236734FadDAddbb64aCE4Cc7',
    decimals: 8,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xA64455a4553C9034236734FadDAddbb64aCE4Cc7.png',
    coingeckoId: 'santos-fc-fan-token'
  },
  {
    chainId: 56,
    name: 'Thetan Gem',
    symbol: 'THG',
    address: '0x9fD87aEfe02441B123c3c32466cD9dB4c578618f',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x9fD87aEfe02441B123c3c32466cD9dB4c578618f.png',
    coingeckoId: 'thetan-arena'
  },
  {
    chainId: 56,
    name: 'Singularity Dao',
    symbol: 'SDAO',
    address: '0x90Ed8F1dc86388f14b64ba8fb4bbd23099f18240',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x90Ed8F1dc86388f14b64ba8fb4bbd23099f18240.png',
    coingeckoId: 'singularitydao'
  },
  {
    chainId: 56,
    name: 'BitBook',
    symbol: 'BBT',
    address: '0xD48474E7444727bF500a32D5AbE01943f3A59A64',
    decimals: 8,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xD48474E7444727bF500a32D5AbE01943f3A59A64.png',
    coingeckoId: 'bitbook-token'
  },
  {
    chainId: 56,
    name: 'Woonkly Power',
    symbol: 'WOOP',
    address: '0x8b303d5BbfBbf46F1a4d9741E491e06986894e18',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x8b303d5BbfBbf46F1a4d9741E491e06986894e18.png',
    coingeckoId: 'woonkly-power'
  },
  {
    chainId: 56,
    name: 'Radio Caca V2',
    symbol: 'RACA',
    address: '0x12BB890508c125661E03b09EC06E404bc9289040',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x12BB890508c125661E03b09EC06E404bc9289040.png',
    coingeckoId: 'radio-caca'
  },
  {
    chainId: 56,
    name: 'Era Token',
    symbol: 'ERA',
    address: '0x6f9F0c4ad9Af7EbD61Ac5A1D4e0F2227F7B0E5f9',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x6f9F0c4ad9Af7EbD61Ac5A1D4e0F2227F7B0E5f9.png',
    coingeckoId: 'era7-game-of-truth'
  },
  {
    chainId: 56,
    name: 'PearDAO',
    symbol: 'PEX',
    address: '0x6a0b66710567b6beb81A71F7e9466450a91a384b',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x6a0b66710567b6beb81A71F7e9466450a91a384b.png',
    coingeckoId: 'peardao'
  },
  {
    chainId: 56,
    name: 'Tiny Coin',
    symbol: 'TINC',
    address: '0x05aD6E30A855BE07AfA57e08a4f30d00810a402e',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x05aD6E30A855BE07AfA57e08a4f30d00810a402e.png',
    coingeckoId: 'tiny-coin'
  },
  {
    chainId: 56,
    name: 'CEEK',
    symbol: 'CEEK',
    address: '0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66.png',
    coingeckoId: 'ceek'
  },
  {
    chainId: 56,
    name: 'Galxe',
    symbol: 'GAL',
    address: '0xe4Cc45Bb5DBDA06dB6183E8bf016569f40497Aa5',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xe4Cc45Bb5DBDA06dB6183E8bf016569f40497Aa5.png',
    coingeckoId: 'project-galaxy'
  },
  {
    chainId: 56,
    name: 'Staked BNB',
    symbol: 'stkBNB',
    address: '0xc2E9d07F66A89c44062459A47a0D2Dc038E4fb16',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xc2E9d07F66A89c44062459A47a0D2Dc038E4fb16.png',
    commonKey: 'stkbnb-wei',
    coingeckoId: 'pstake-staked-bnb'
  },
  {
    chainId: 56,
    name: 'Spintop',
    symbol: 'SPIN',
    address: '0x6AA217312960A21aDbde1478DC8cBCf828110A67',
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x6AA217312960A21aDbde1478DC8cBCf828110A67.png',
    coingeckoId: 'spintop'
  },
  {
    name: 'Nafter',
    symbol: 'NAFT',
    address: '0xD7730681B1DC8f6F969166B29D8A5EA8568616a3',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xD7730681B1DC8f6F969166B29D8A5EA8568616a3/logo.png',
    coingeckoId: 'nafter'
  },
  {
    name: 'PAID Network',
    symbol: 'PAID',
    address: '0xAD86d0E9764ba90DDD68747D64BFfBd79879a238',
    chainId: 56,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8329.png',
    coingeckoId: 'paid-network'
  },
  {
    name: 'Alien Worlds Trilium',
    symbol: 'TLM',
    address: '0x2222227E22102Fe3322098e4CBfE18cFebD57c95',
    chainId: 56,
    decimals: 4,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x2222227E22102Fe3322098e4CBfE18cFebD57c95.png',
    coingeckoId: 'alien-worlds'
  },
  {
    name: 'Shirtum',
    symbol: 'SHI',
    address: '0x7269d98Af4aA705e0B1A5D8512FadB4d45817d5a',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x7269d98Af4aA705e0B1A5D8512FadB4d45817d5a/logo.png',
    coingeckoId: 'shirtum'
  },
  {
    chainId: 56,
    address: '0x34294AfABCbaFfc616ac6614F6d2e17260b78BEd',
    name: 'ApeBond',
    symbol: 'ABOND',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/abond.svg',
    coingeckoId: ''
  },
  {
    name: 'NFTB',
    symbol: 'NFTB',
    address: '0xde3dbBE30cfa9F437b293294d1fD64B26045C71A',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xde3dbBE30cfa9F437b293294d1fD64B26045C71A/logo.png',
    coingeckoId: 'nftb'
  },
  {
    name: 'Baby Doge Coin',
    symbol: 'BABYDOGE',
    address: '0xc748673057861a797275CD8A068AbB95A902e8de',
    chainId: 56,
    decimals: 9,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10407.png',
    feeOnTransfer: true,
    coingeckoId: 'baby-doge-coin'
  },
  {
    name: 'FLOKI',
    symbol: 'FLOKI',
    address: '0x2B3F34e9D4b127797CE6244Ea341a83733ddd6E4',
    chainId: 56,
    decimals: 9,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13074.png',
    coingeckoId: 'baby-moon-floki'
  },
  {
    name: 'Harmony ONE',
    symbol: 'ONE',
    address: '0x03fF0ff224f904be3118461335064bB48Df47938',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://tokens.pancakeswap.finance/images/0x03fF0ff224f904be3118461335064bB48Df47938.png',
    coingeckoId: 'harmony'
  },
  {
    name: 'Mist',
    symbol: 'MIST',
    address: '0x68E374F856bF25468D365E539b700b648Bf94B67',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x68E374F856bF25468D365E539b700b648Bf94B67/logo.png',
    coingeckoId: 'mist'
  },
  {
    name: 'My DeFi Pet Token',
    symbol: 'DPET',
    address: '0xfb62AE373acA027177D1c18Ee0862817f9080d08',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xfb62AE373acA027177D1c18Ee0862817f9080d08/logo.png',
    coingeckoId: 'my-defi-pet'
  },
  {
    name: 'UniCrypt on xDai on BSC',
    symbol: 'UNCX',
    address: '0x09a6c44c3947B69E2B45F4D51b67E6a39ACfB506',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x09a6c44c3947B69E2B45F4D51b67E6a39ACfB506/logo.png',
    coingeckoId: 'unicrypt-2'
  },
  {
    name: 'MiniFootball',
    symbol: 'MINIFOOTBALL',
    address: '0xD024Ac1195762F6F13f8CfDF3cdd2c97b33B248b',
    chainId: 56,
    decimals: 9,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xD024Ac1195762F6F13f8CfDF3cdd2c97b33B248b/logo.png',
    coingeckoId: 'minifootball'
  },
  {
    name: 'FaraCrystal',
    symbol: 'FARA',
    address: '0xF4Ed363144981D3A65f42e7D0DC54FF9EEf559A1',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xF4Ed363144981D3A65f42e7D0DC54FF9EEf559A1/logo.png',
    coingeckoId: 'faraland'
  },
  {
    name: 'Altura',
    symbol: 'ALU',
    address: '0x8263CD1601FE73C066bf49cc09841f35348e3be0',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x8263CD1601FE73C066bf49cc09841f35348e3be0/logo.png',
    coingeckoId: 'altura'
  },
  {
    name: 'KmonCoin',
    symbol: 'KMON',
    address: '0xc732B6586A93b6B7CF5FeD3470808Bc74998224D',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xc732B6586A93b6B7CF5FeD3470808Bc74998224D/logo.png',
    coingeckoId: 'kryptomon'
  },
  {
    name: 'Hunny Token',
    symbol: 'HUNNY',
    address: '0x565b72163f17849832A692A3c5928cc502f46D69',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x565b72163f17849832A692A3c5928cc502f46D69/logo.png',
    coingeckoId: 'pancake-hunny'
  },
  {
    name: 'WEYU',
    symbol: 'WEYU',
    address: '0xFAfD4CB703B25CB22f43D017e7e0d75FEBc26743',
    chainId: 56,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11553.png',
    coingeckoId: 'weyu'
  },
  {
    name: 'UNCL on xDai on BSC',
    symbol: 'UNCL',
    address: '0x0E8D5504bF54D9E44260f8d153EcD5412130CaBb',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x0E8D5504bF54D9E44260f8d153EcD5412130CaBb/logo.png',
    coingeckoId: 'uncl'
  },
  {
    name: 'BANANA Token',
    symbol: 'BANANA',
    address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/BANANA.svg',
    coingeckoId: 'apeswap-finance'
  },
  {
    name: 'Binance-Peg Ethereum Token',
    symbol: 'WETH',
    address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ETH.svg',
    coingeckoId: 'weth'
  },
  {
    name: 'Matic Token',
    symbol: 'MATIC',
    address: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/MATIC.svg',
    coingeckoId: 'matic-network'
  },
  {
    chainId: 56,
    address: '0x4E11B45E4Ae94eE8c32760Dd3286836BDfe47524',
    name: 'Gridex',
    symbol: 'GDX',
    decimals: 18,
    commonKey: 'gdx-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23941.png',
    coingeckoId: 'gdx-token',
    bridgeOnly: true
  },
  {
    name: 'CEEK',
    symbol: 'CEEK',
    address: '0xe0f94ac5462997d2bc57287ac3a3ae4c31345d66',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/CEEK.png',
    coingeckoId: 'ceek'
  },
  {
    name: 'Coinary Token (Dragonary)',
    symbol: 'CYT',
    address: '0xd9025e25bb6cf39f8c926a704039d2dd51088063',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/CYT.svg',
    coingeckoId: 'coinary-token'
  },
  {
    name: 'GAMER',
    symbol: 'GMR',
    address: '0xadca52302e0a6c2d5d68edcdb4ac75deb5466884',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/GMR.svg',
    coingeckoId: 'gamer'
  },
  {
    name: 'CryptoMines Reborn',
    symbol: 'CRUX',
    address: '0xe0191fEfdd0D2B39b1a2E4E029cCDA8A481b7995',
    chainId: 56,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/CRUX.svg',
    coingeckoId: 'cryptomines-reborn'
  },
  {
    address: '0x49517abB880359eb873bDc08d09eBc0c478d3CA2',
    chainId: 56,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    address: '0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e',
    chainId: 56,
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/27713/small/Xen.jpeg?1665453190',
    name: 'XEN Crypto',
    symbol: 'bXEN',
    coingeckoId: 'xen-crypto-bsc'
  },
  {
    chainId: 56,
    address: '0x501e3d716A72E11E1e22eDcf0365556b357DA0c9',
    name: 'Mai Stablecoin',
    symbol: 'axlWMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    chainId: 56,
    address: '0xce1E3cc1950D2aAEb47dE04DE2dec2Dc86380E0A',
    name: 'Ethos Reserve Note',
    symbol: 'ERN',
    decimals: 18,
    logoURI: 'https://docs.velodrome.finance/tokens/ERN.png',
    coingeckoId: 'ethos-reserve-note',
    commonKey: 'ern-wei',
    bridgeOnly: true
  },
  {
    chainId: 56,
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    address: '0x4818B684a810fC023C32bB6292da8D508Bd906EF',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true
  },
  {
    chainId: 56,
    address: '0x4b6B3d425F82248996D77EcC3F3df1E500aaC1db',
    name: 'LiquidDriver',
    symbol: 'axlLqdr',
    decimals: 18,
    commonKey: 'lqdr-wei',
    logoURI:
      'https://2302794922-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYQICp07j-iq-GK2MHc%2Fuploads%2F9E0dn7eOs8PLq9hq26Gv%2FIcon-PNG.png?alt=media&token=53c999ea-e4a0-43a3-9ae8-2f2d4c83f132',
    coingeckoId: 'liquiddriver',
    bridgeOnly: true
  },
  {
    chainId: 56,
    address: '0x73f4C95AF5C2892253c068850B8C9a753636f58d',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    commonKey: 'oath-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true
  },
  {
    chainId: 56,
    address: '0x34A279Ece38f260a28C8872f416319e9B6Aa428e',
    name: 'Staked ERN Vault',
    symbol: 'stERN',
    decimals: 18,
    commonKey: 'stern-wei',
    logoURI: 'https://github.com/0xsquid/assets/blob/main/images/tokens/stERN.svg?raw=true',
    coingeckoId: 'staked-ethos-reserve-note',
    bridgeOnly: true
  },
  {
    chainId: 56,
    address: '0x82443a77684a7da92fdcb639c8d2bd068a596245',
    name: 'TrustSwap Token',
    symbol: 'SWAP',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5829.png',
    coingeckoId: ''
  },
  {
    chainId: 56,
    address: '0x7117e08b0734e1D643bf29B523F41ff89a1A1367',
    name: 'Polkastarter Token',
    symbol: 'POLS',
    decimals: 18,
    commonKey: 'pols-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7208.png',
    coingeckoId: 'polkastarter',
    bridgeOnly: true
  },
  {
    chainId: 56,
    address: '0x43a8cab15D06d3a5fE5854D714C37E7E9246F170',
    name: 'Orbs',
    symbol: 'ORBS',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3835.png',
    coingeckoId: 'orbs',
    bridgeOnly: true,
    commonKey: 'orbs-wei'
  },
  {
    chainId: 56,
    address: '0x912922e25ac79D524734d8eC0C882B035c5b356f',
    name: 'Axelar Wrapped DEUS',
    symbol: 'axlDEUS',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12972.png',
    coingeckoId: 'deus-finance-2',
    bridgeOnly: true,
    commonKey: 'deus-wei'
  },
  {
    chainId: 56,
    address: '0x3FF4cb8EC5EC5eBBfD3424401D962F0627a67Cac',
    name: 'Axelar Wrapped FRAX',
    symbol: 'axlFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei',
    bridgeOnly: true
  },
  {
    address: '0x259B30C916e440FB79747cD559207FfdaBBae057',
    chainId: 56,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ovn.svg',
    name: 'OVN',
    symbol: 'OVN',
    coingeckoId: '',
    bridgeOnly: true,
    commonKey: 'ovn-wei'
  },
  {
    chainId: 56,
    address: '0x420eEEd09Cbc6e8416decD28857fF3C7D991Fc46',
    name: 'axlTIA',
    symbol: 'axlTIA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/celestia.svg',
    coingeckoId: 'celestia',
    commonKey: 'utia',
    bridgeOnly: true
  },
  {
    chainId: 56,
    address: '0xb306669D6C024B3deA4ff3A35D50844289b2DCFC',
    name: 'Axelar Wrapped wstETH',
    symbol: 'axl-wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    bridgeOnly: true,
    commonKey: 'wsteth-wei'
  },
  {
    chainId: 56,
    address: '0x073690e6CE25bE816E68F32dCA3e11067c9FB5Cc',
    name: 'Kuji',
    symbol: 'KUJI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/kuji.svg',
    coingeckoId: 'kujira',
    commonKey: 'ukuji'
  },
  {
    chainId: 56,
    address: '0x07aB0f18EA886fbbEcF52902E5F086D9363410a5',
    name: 'Luna Classic',
    symbol: 'LUNC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/lunc.svg',
    coingeckoId: 'terra-luna',
    bridgeOnly: true,
    commonKey: 'uluna'
  },
  {
    chainId: 56,
    address: '0xAD29AbB318791D579433D831ed122aFeAf29dcfe',
    name: 'Wrapped Fantom',
    symbol: 'WFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'fantom'
  },
  {
    chainId: 56,
    address: '0x11eDFA12d70e8AC9e94DE019eBa278430873f8C3',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 56,
    address: '0x2598c30330D5771AE9F983979209486aE26dE875',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28916.png',
    name: 'Any Inu',
    symbol: 'AI',
    coingeckoId: 'any-inu'
  },
  {
    chainId: 56,
    address: '0x9fD470124903957f299a1C90fEdA9043A4619cc6',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 56,
    address: '0xa0F18d6Cc2BBE1Da31DE214389BBEfb73a0C836b',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 56,
    address: '0x78d24B91F0988F79AB9f370D607Ffc820d0779B8',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 56,
    address: '0x05E7857Cb748F0018C0CBCe3dfd575B0d8677aeF',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 56,
    address: '0x39Db1A30122031751e803Fabf329C44efBBfBf4B',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 56,
    address: '0x40af3827f39d0eacbf4a168f8d4ee67c121d11c9',
    name: 'TrueUSD',
    symbol: 'TUSD',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/3449/standard/tusd.png?1696504140',
    coingeckoId: 'true-usd'
  },
  {
    chainId: 'bitcanna-1',
    address: 'bcna',
    name: 'BitCanna',
    symbol: 'BCNA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bcna.svg',
    coingeckoId: 'bitcanna',
    ibcDenom: 'bcna',
    pathKey: 'bcna_bitcanna'
  },
  {
    chainId: 'bitsong-2b',
    address: 'btsg',
    name: 'Bitsong',
    symbol: 'BTSG',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/btsg.svg',
    coingeckoId: 'bitsong',
    ibcDenom: 'btsg',
    pathKey: 'btsg_bitsong'
  },
  {
    chainId: 'carbon-1',
    address: 'swth',
    name: 'Carbon',
    symbol: 'SWTH',
    decimals: 8,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/swth.svg',
    coingeckoId: 'switcheo',
    ibcDenom: 'swth',
    pathKey: 'dswth_carbon'
  },
  {
    chainId: 'carbon-1',
    address: 'ibc/7C0807A56073C4A27B0DE1C21BA3EB75DF75FD763F4AD37BC159917FC01145F0',
    name: 'USDC',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/7C0807A56073C4A27B0DE1C21BA3EB75DF75FD763F4AD37BC159917FC01145F0',
    pathKey: 'axlusdc_carbon'
  },
  {
    chainId: 'carbon-1',
    address: 'ibc/F3146333E033F2F20125A2F9879F0DEED990B1005FFAF77873CC4E405FBDE8C4',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/F3146333E033F2F20125A2F9879F0DEED990B1005FFAF77873CC4E405FBDE8C4',
    commonKey: 'frax-wei',
    pathKey: 'frax_carbon'
  },
  {
    chainId: 'celestia',
    address: 'utia',
    name: 'Celestia',
    symbol: 'TIA',
    decimals: 6,
    ibcDenom: 'utia',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/celestia.svg',
    coingeckoId: 'celestia',
    pathKey: 'tia_celestia',
    commonKey: 'utia'
  },
  {
    chainId: 42220,
    address: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
    name: 'Celo Dollar',
    symbol: 'cUSD',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7236.png',
    coingeckoId: 'celo-dollar',
    commonKey: 'cusd-wei'
  },
  {
    address: '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',
    chainId: 42220,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    chainId: 42220,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    chainId: 42220,
    address: '0x471ece3750da237f93b8e339c536989b8978a438',
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18,
    logoURI: 'https://celoscan.io/images/svg/brands/mainbrand-1.svg?v=23.5.4.0',
    coingeckoId: 'celo'
  },
  {
    chainId: 42220,
    address: '0xb829b68f57CC546dA7E5806A929e53bE32a4625D',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true
  },
  {
    chainId: 42220,
    address: '0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true
  },
  {
    chainId: 42220,
    address: '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true
  },
  {
    address: '0xB448eC505C924944ca8B2C55EF05c299eE0781df',
    chainId: 42220,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Kyber Network Crystal',
    symbol: 'axlKNC',
    coingeckoId: 'kyber-network-crystal',
    commonKey: 'knc-wei',
    bridgeOnly: true
  },
  {
    chainId: 42220,
    address: '0x37f750B7cC259A2f741AF45294f6a16572CF5cAd',
    name: 'USD Coin | Wormhole',
    symbol: 'USDC.wh',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin'
  },
  {
    chainId: 42220,
    address: '0x617f3112bf5397D0467D315cC709EF968D9ba546',
    name: 'Tether USD | Wormhole',
    symbol: 'USDT.wh',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether'
  },
  {
    address: '0x66803FB87aBd4aaC3cbB3fAd7C3aa01f6F3FB207',
    chainId: 42220,
    name: 'WETH.wh | Wormhole',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png',
    coingeckoId: 'ethereum-wormhole'
  },
  {
    chainId: 42220,
    address: '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73',
    name: 'Celo Euro',
    symbol: 'cEUR',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9467.png',
    coingeckoId: 'celo-euro'
  },
  {
    chainId: 42220,
    address: '0x00be915b9dcf56a3cbe739d9b9c202ca692409ec',
    name: 'Ubeswap',
    symbol: 'UBE',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10808.png',
    coingeckoId: 'ubeswap'
  },
  {
    address: '0x918146359264C492BD6934071c6Bd31C854EDBc3',
    chainId: 42220,
    name: 'Moola cUSD | Moolamarket',
    symbol: 'mcUSD',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16983.png',
    coingeckoId: 'moola-celo-dollars'
  },
  {
    address: '0xE273Ad7ee11dCfAA87383aD5977EE1504aC07568',
    name: 'Moola cEUR | Moolamarket',
    symbol: 'mcEUR',
    chainId: 42220,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16982.png',
    coingeckoId: 'mceur'
  },
  {
    address: '0x122013fd7dF1C6F636a5bb8f03108E876548b455',
    chainId: 42220,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/celo/0x122013fd7dF1C6F636a5bb8f03108E876548b455.jpg',
    name: 'Wrapped Ether',
    symbol: 'WETH',
    coingeckoId: 'weth'
  },
  {
    address: '0x20677d4f3d0f08e735ab512393524a3cfceb250c',
    chainId: 42220,
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/21762/small/ari.PNG?1639990515',
    name: 'Ari Swap',
    symbol: 'ARI',
    coingeckoId: 'ari-swap'
  },
  {
    address: '0x5E2Cf56A562b1bDD32ec26315063074ADC420C73',
    chainId: 42220,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    chainId: 42220,
    address: '0x88DfaAABaf06f3a41D2606EA98BC8edA109AbeBb',
    name: 'Mai Stablecoin',
    symbol: 'axlWMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    chainId: 42220,
    address: '0x00e1724885473B63bCE08a9f0a52F35b0979e35A',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true,
    commonKey: 'oath-wei'
  },
  {
    chainId: 42220,
    address: '0x406Cde76a3fD20e48bc1E0F60651e60Ae204B040',
    name: 'Axelar Wrapped FRAX',
    symbol: 'axlFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei',
    bridgeOnly: true
  },
  {
    chainId: 42220,
    address: '0x62b8b11039fcfe5ab0c56e502b1c372a3d2a9c7a',
    name: 'GoodDollar',
    symbol: 'G$',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6961.png',
    coingeckoId: 'gooddollar'
  },
  {
    chainId: 42220,
    address: '0x809c55916bb542c1419724022B3F0162087E3C88',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 42220,
    address: '0x64D599b3d0c5f1375e5e639E98aB86298261A30B',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 42220,
    address: '0xf3602C5A7f625181659445C8dDDde73dA15c22e3',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 42220,
    address: '0x219279953d8D23520B7878447e8A6c266a51de2f',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 42220,
    address: '0x219279953d8D23520B7878447e8A6c266a51de2f',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 42220,
    address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 'cheqd-mainnet-1',
    address: 'cheq',
    name: 'Cheqd',
    symbol: 'CHEQ',
    decimals: 9,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12256.png',
    coingeckoId: 'cheqd-network',
    ibcDenom: 'cheq',
    pathKey: 'cheq_cheqd'
  },
  {
    chainId: 'chihuahua-1',
    address: 'uhuahua',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    ibcDenom: 'uhuahua',
    pathKey: 'huahua_chihuahua',
    commonKey: 'uhuahua'
  },
  {
    chainId: 'comdex-1',
    address: 'ucmdx',
    name: 'Comdex',
    symbol: 'CMDX',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/cmdx.svg',
    coingeckoId: 'comdex',
    ibcDenom: 'ucmdx',
    pathKey: 'cmdx_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ucmst',
    name: 'Composite',
    symbol: 'CMST',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/cmst.svg',
    coingeckoId: 'composite',
    ibcDenom: 'ucmst',
    pathKey: 'ucmst_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/E1616E7C19EA474C565737709A628D6F8A23FF9D3E9A7A6871306CF5E0A5341E',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/E1616E7C19EA474C565737709A628D6F8A23FF9D3E9A7A6871306CF5E0A5341E',
    pathKey: 'axlusdc_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/81C3A46287D7664A8FD19843AC8D0CFD6C284EF1F750C661C48B3544277B1B29',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/81C3A46287D7664A8FD19843AC8D0CFD6C284EF1F750C661C48B3544277B1B29',
    pathKey: 'axleth_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/54DEF693B7C4BF171E7FFF3ABFE2B54D6A3B8A047A32BAAE9F1417A378594EC6',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/54DEF693B7C4BF171E7FFF3ABFE2B54D6A3B8A047A32BAAE9F1417A378594EC6',
    pathKey: 'axldai_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/F0BEB4540AF9E0C6C4DD6FA1635C9AE1F99FCA15366671C9219B1140AAC3FCB1',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'ibc/F0BEB4540AF9E0C6C4DD6FA1635C9AE1F99FCA15366671C9219B1140AAC3FCB1',
    pathKey: 'axlusdt_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/F960753B47A20B18DF578FFDD51FB8B32AF5BF77FF8718580421333F7458E690',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/F960753B47A20B18DF578FFDD51FB8B32AF5BF77FF8718580421333F7458E690',
    pathKey: 'axlbusd_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/1D5738BD39B3189714B7A5C7CE8A206861ECAE79F7E29C45DA98151571F017E7',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/1D5738BD39B3189714B7A5C7CE8A206861ECAE79F7E29C45DA98151571F017E7',
    pathKey: 'axlavax_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/14308B897F7966AD643E337853EC613200E9A123D159984DE7B59FE151BCE867',
    name: 'Axelar WGLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/14308B897F7966AD643E337853EC613200E9A123D159984DE7B59FE151BCE867',
    pathKey: 'axlglmr_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/E8F0355CBC21AFD4C758E93383D28404D19AEB81E8251A63FAA0C250672ADBEF',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/E8F0355CBC21AFD4C758E93383D28404D19AEB81E8251A63FAA0C250672ADBEF',
    pathKey: 'axlmatic_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/0A6F20FA34BEBB63568E44C81C6E154C63ED061BA45E7EBC144B24C0DBBD0A4F',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/0A6F20FA34BEBB63568E44C81C6E154C63ED061BA45E7EBC144B24C0DBBD0A4F',
    pathKey: 'axlwbtc_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/EC7576E3F8D254787264F0972E6518E42CFFB5305EC9D0BC7DD7B7FFEFACB28A',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/EC7576E3F8D254787264F0972E6518E42CFFB5305EC9D0BC7DD7B7FFEFACB28A',
    pathKey: 'axlbnb_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/78A0828C273648513517BC6C10D9F7F2768472DD5C0F88B27CB54E346CB57D59',
    name: 'Axelar WFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/78A0828C273648513517BC6C10D9F7F2768472DD5C0F88B27CB54E346CB57D59',
    pathKey: 'axlftm_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/E437FFE5ABB5163FA7968BAF68146512B81E842DF05BA27E3B25E64B7CDC9AC7',
    name: 'Persistence',
    symbol: 'XPRT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/xprt.svg',
    coingeckoId: 'persistence',
    ibcDenom: 'ibc/E437FFE5ABB5163FA7968BAF68146512B81E842DF05BA27E3B25E64B7CDC9AC7',
    pathKey: 'xprt_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/3A2B63D5098AEBD42CE789B2EE64E46FA8197431F6C687051934C48AAF53B8F6',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    ibcDenom: 'ibc/3A2B63D5098AEBD42CE789B2EE64E46FA8197431F6C687051934C48AAF53B8F6',
    commonKey: 'sfrxeth-wei',
    pathKey: 'sfrxeth_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/B0C60517B4B854164D87224AFF2D7633959BACD2402EB0BA460B64E95ED8D1ED',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/B0C60517B4B854164D87224AFF2D7633959BACD2402EB0BA460B64E95ED8D1ED',
    commonKey: 'frax-wei',
    pathKey: 'frax_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/79CD5764EEFEDCBB95E745DAAA5E1C1B1B6C161EA0F8FE1AC305A27865165B4E',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    ibcDenom: 'ibc/79CD5764EEFEDCBB95E745DAAA5E1C1B1B6C161EA0F8FE1AC305A27865165B4E',
    bridgeOnly: true,
    commonKey: 'frxeth-wei',
    pathKey: 'frxeth_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/1F18934D62FFDA25C75ED7974EE34DB018BA004B58C42D46EB49AF41BB01AF01',
    name: 'Shiba Inu',
    symbol: 'SHIB',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/11939/thumb/shiba.png?1622619446',
    coingeckoId: 'shiba-inu',
    ibcDenom: 'ibc/1F18934D62FFDA25C75ED7974EE34DB018BA004B58C42D46EB49AF41BB01AF01',
    commonKey: 'shib-wei',
    bridgeOnly: true,
    pathKey: 'axlshib_comdex'
  },
  {
    chainId: 'comdex-1',
    address: 'ibc/1398C0819479AA74844272A00CBFA44D1E7222E70CC7CC06DE4AAC96527C3B67',
    name: 'Axelar Wrapped ARB',
    symbol: 'axlARB',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/arb.svg',
    coingeckoId: 'arbitrum',
    ibcDenom: 'ibc/1398C0819479AA74844272A00CBFA44D1E7222E70CC7CC06DE4AAC96527C3B67',
    pathKey: 'axlarb_comdex',
    bridgeOnly: true,
    commonKey: 'arb-wei'
  },
  {
    chainId: 'coreum-mainnet-1',
    address: 'ucore',
    name: 'Coreum',
    symbol: 'COREUM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/coreum.svg',
    coingeckoId: 'coreum',
    ibcDenom: 'ucore',
    pathKey: 'coreum_coreum'
  },
  {
    chainId: 'cosmoshub-4',
    address: 'uatom',
    name: 'ATOM',
    symbol: 'ATOM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/atom.svg',
    coingeckoId: 'cosmos',
    ibcDenom: 'uatom',
    pathKey: 'atom_cosmoshub'
  },
  {
    chainId: 'cosmoshub-4',
    address: 'ibc/F663521BF1836B00F5F177680F74BFB9A8B5654A694D0D2BC249E03CF2509013',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/F663521BF1836B00F5F177680F74BFB9A8B5654A694D0D2BC249E03CF2509013',
    pathKey: 'nusdc_cosmoshub'
  },
  {
    chainId: 'cosmoshub-4',
    address: 'ibc/0871D26D2C71319765EA323D6EB8B8A074706AD253FC7EB51E88E269A4CDB911',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    ibcDenom: 'ibc/0871D26D2C71319765EA323D6EB8B8A074706AD253FC7EB51E88E269A4CDB911',
    commonKey: 'sfrxeth-wei',
    pathKey: 'sfrxeth_cosmoshub'
  },
  {
    chainId: 'cosmoshub-4',
    address: 'ibc/3792246C7C422C037C603C955F8383B4E32E7555D693344F9A029A67FE221C57',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/3792246C7C422C037C603C955F8383B4E32E7555D693344F9A029A67FE221C57',
    commonKey: 'frax-wei',
    pathKey: 'frax_cosmoshub'
  },
  {
    chainId: 'cosmoshub-4',
    address: 'ibc/0E84FB53D675629D8ABBDBB01EB2A025B8437EC19A402A3E67D25F48523F0FB4',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    ibcDenom: 'ibc/0E84FB53D675629D8ABBDBB01EB2A025B8437EC19A402A3E67D25F48523F0FB4',
    bridgeOnly: true,
    commonKey: 'frxeth-wei',
    pathKey: 'frxeth_cosmoshub'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/BFF0D3805B50D93E2FA5C0B2DDF7E0B30A631076CD80BC12A48C0E95404B4A41',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/BFF0D3805B50D93E2FA5C0B2DDF7E0B30A631076CD80BC12A48C0E95404B4A41',
    pathKey: 'axlusdc_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/F1806958CA98757B91C3FA1573ECECD24F6FA3804F074A6977658914A49E65A3',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/F1806958CA98757B91C3FA1573ECECD24F6FA3804F074A6977658914A49E65A3',
    pathKey: 'axleth_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/2017AFA149C1C42DBF54EC910DA168E9E4F928DF0D3A8E841189994A9339FED9',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/2017AFA149C1C42DBF54EC910DA168E9E4F928DF0D3A8E841189994A9339FED9',
    pathKey: 'axldai_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/11FB4C0BC2FCCFF2B01976C0070F468D82DAE8D1F565F80E64063BFDBEE4A5BD',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'ibc/11FB4C0BC2FCCFF2B01976C0070F468D82DAE8D1F565F80E64063BFDBEE4A5BD',
    pathKey: 'axlusdt_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/A7A2B8871CD2E999EB1D9E901B4F744617C80816CE94DE84CA1200109651C903',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/A7A2B8871CD2E999EB1D9E901B4F744617C80816CE94DE84CA1200109651C903',
    pathKey: 'axlbusd_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/0886E3462B7DD438353781848DBDF90E58BB7DE90266E3F95E41B3FA8ED1B453',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/0886E3462B7DD438353781848DBDF90E58BB7DE90266E3F95E41B3FA8ED1B453',
    pathKey: 'axlavax_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/A7C06A800850847DBCC36213185EC5AAD3C719D42D1F0623F9C1F9EFF456F673',
    name: 'Axelar WGLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/A7C06A800850847DBCC36213185EC5AAD3C719D42D1F0623F9C1F9EFF456F673',
    pathKey: 'axlglmr_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/C322C7D0867CC3EE6FA3495DC9685E5A0F49B506369341287FDA1E110841A950',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/C322C7D0867CC3EE6FA3495DC9685E5A0F49B506369341287FDA1E110841A950',
    pathKey: 'axlmatic_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/7FFC60524C4513A3A8E0A407CC89BFF5A861EC624209D72EB26FC10ADAEBA70E',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/7FFC60524C4513A3A8E0A407CC89BFF5A861EC624209D72EB26FC10ADAEBA70E',
    pathKey: 'axlwbtc_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/3D4499D811B055223D0EFB06D2211F84772CAEF0FB987F71BAE716191714B391',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/3D4499D811B055223D0EFB06D2211F84772CAEF0FB987F71BAE716191714B391',
    pathKey: 'axlbnb_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/23B62EFD1B9444733889B42362570C774801430A1C656A0A3F8D6D69AE93ED8B',
    name: 'Axelar WFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/23B62EFD1B9444733889B42362570C774801430A1C656A0A3F8D6D69AE93ED8B',
    pathKey: 'axlftm_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/E32F6485CDAE995FC492010770936119D0BF90F5226C9AED727988DF03B5F569',
    name: 'PSTAKE staked ATOM',
    symbol: 'stkATOM',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13175.png',
    coingeckoId: 'stkatom',
    ibcDenom: 'ibc/E32F6485CDAE995FC492010770936119D0BF90F5226C9AED727988DF03B5F569',
    pathKey: 'stkatom_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/11261571EB3E679315BA19C51F42F143113A139F598729D97624B45043C4D7C0',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    ibcDenom: 'ibc/11261571EB3E679315BA19C51F42F143113A139F598729D97624B45043C4D7C0',
    commonKey: 'sfrxeth-wei',
    pathKey: 'sfrxeth_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/21DB3093824F38A29399E7466B5870559AEC683D0D09D746F9EC47BB8505CBF7',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/21DB3093824F38A29399E7466B5870559AEC683D0D09D746F9EC47BB8505CBF7',
    commonKey: 'frax-wei',
    pathKey: 'frax_crescent'
  },
  {
    chainId: 'crescent-1',
    address: 'ibc/53F32BBFDFEF82276725A599CEFD92C0C6D4DF1AE6DCE600ACBBFDF9579625DE',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    ibcDenom: 'ibc/53F32BBFDFEF82276725A599CEFD92C0C6D4DF1AE6DCE600ACBBFDF9579625DE',
    bridgeOnly: true,
    commonKey: 'frxeth-wei',
    pathKey: 'frxeth_crescent'
  },
  {
    chainId: 'cronosmainnet_25-1',
    address: 'basecro',
    name: 'Cronos',
    symbol: 'CRO',
    decimals: 8,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png',
    coingeckoId: 'crypto-com-chain',
    ibcDenom: 'basecro',
    pathKey: 'cro_cronos'
  },
  {
    chainId: 'mainnet-3',
    address: 'dec',
    name: 'Decentr',
    symbol: 'DEC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dec.svg',
    coingeckoId: 'decentr',
    ibcDenom: 'dec',
    pathKey: 'dec_decentr'
  },
  {
    chainId: 'desmos-mainnet',
    address: 'udsm',
    name: 'Desmos',
    symbol: 'DSM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dsm.svg',
    coingeckoId: 'desmos',
    ibcDenom: 'udsm',
    pathKey: 'dsm_desmos'
  },
  {
    chainId: 'dydx-mainnet-1',
    address: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    ibcDenom: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    pathKey: 'nusdc_dydx'
  },
  {
    chainId: 'dydx-mainnet-1',
    address: 'adydx',
    name: 'DYDX',
    symbol: 'DYDX',
    decimals: 18,
    ibcDenom: 'adydx',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dydx.svg',
    coingeckoId: 'dydx-chain',
    pathKey: 'dydx_dydx'
  },
  {
    name: 'USDCoin',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    symbol: 'USDC',
    decimals: 6,
    chainId: 1,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    commonKey: 'uusdc'
  },
  {
    chainId: 1,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum',
    commonKey: 'weth-wei'
  },
  {
    name: 'Tether USD',
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    symbol: 'USDT',
    decimals: 6,
    chainId: 1,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt'
  },
  {
    chainId: 1,
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    name: 'Wrapped ETH',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei'
  },
  {
    name: 'Wrapped BTC',
    address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    symbol: 'WBTC',
    decimals: 8,
    chainId: 1,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi'
  },
  {
    address: '0x467719aD09025FcC6cF6F8311755809d45a5E5f3',
    chainId: 1,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: false
  },
  {
    name: 'Dai Stablecoin',
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    symbol: 'DAI',
    decimals: 18,
    chainId: 1,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei'
  },
  {
    chainId: 1,
    address: '0x05770332D4410b6D7f07Fd497E4c00F8F7bFb74A',
    name: 'Wrapped Mai Stablecoin',
    symbol: 'WMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    chainId: 1,
    address: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei'
  },
  {
    name: 'Curve DAO Token',
    address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    symbol: 'CRV',
    decimals: 18,
    chainId: 1,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png',
    coingeckoId: 'curve-dao-token'
  },
  {
    name: 'Uniswap',
    address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    symbol: 'UNI',
    decimals: 18,
    chainId: 1,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/uni.svg',
    coingeckoId: 'uniswap',
    commonKey: 'uni-wei'
  },
  {
    name: 'Maker',
    address: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
    symbol: 'MKR',
    decimals: 18,
    chainId: 1,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png',
    coingeckoId: 'maker',
    commonKey: 'mkr-wei'
  },
  {
    chainId: 1,
    address: '0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1',
    name: 'Arbitrum',
    symbol: 'ARB',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/arbitrum.svg',
    coingeckoId: 'arbitrum'
  },
  {
    name: 'ChainLink Token',
    address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
    symbol: 'LINK',
    decimals: 18,
    chainId: 1,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
    coingeckoId: 'chainlink',
    commonKey: 'link-wei'
  },
  {
    address: '0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202',
    chainId: 1,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Kyber Network Crystal',
    symbol: 'KNC',
    coingeckoId: 'kyber-network-crystal',
    commonKey: 'knc-wei'
  },
  {
    address: '0x826180541412d574cf1336d22c0c0a287822678a',
    chainId: 1,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/flip.svg',
    name: 'Chainflip',
    symbol: 'FLIP',
    coingeckoId: 'chainflip'
  },
  {
    name: 'Reputation Augur v2',
    address: '0x221657776846890989a759BA2973e427DfF5C9bB',
    symbol: 'REPv2',
    decimals: 18,
    chainId: 1,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x221657776846890989a759BA2973e427DfF5C9bB/logo.png',
    coingeckoId: 'augur'
  },
  {
    chainId: 1,
    address: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
    name: 'yearn finance',
    symbol: 'YFI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png?1598325330',
    coingeckoId: 'yearn-finance'
  },
  {
    name: 'Republic Token',
    address: '0x408e41876cCCDC0F92210600ef50372656052a38',
    symbol: 'REN',
    decimals: 18,
    chainId: 1,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x408e41876cCCDC0F92210600ef50372656052a38/logo.png',
    coingeckoId: 'republic-protocol'
  },
  {
    name: 'Fidu',
    address: '0x6a445E9F40e0b97c92d0b8a3366cEF1d67F700BF',
    symbol: 'FIDU',
    decimals: 18,
    chainId: 1,
    logoURI: 'https://assets.coingecko.com/coins/images/25944/small/GFI-asset-icon.png?1654827482',
    coingeckoId: 'fidu'
  },
  {
    chainId: 1,
    address: '0xc944E90C64B2c07662A292be6244BDf05Cda44a7',
    name: 'The Graph',
    symbol: 'GRT',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/13397/thumb/Graph_Token.png?1608145566',
    coingeckoId: 'green-ride-token'
  },
  {
    name: 'Synthetix Network Token',
    address: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
    symbol: 'SNX',
    decimals: 18,
    chainId: 1,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F/logo.png',
    coingeckoId: 'havven'
  },
  {
    address: '0x18fA72e0EE4C580a129b0CE5bD0694d716C7443E',
    chainId: 1,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Kyber Network Crystal',
    symbol: 'KNC_e',
    coingeckoId: 'kyber-network-crystal'
  },
  {
    chainId: 1,
    address: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
    name: 'Decentraland',
    symbol: 'MANA',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/878/thumb/decentraland-mana.png?1550108745',
    coingeckoId: 'decentraland'
  },
  {
    name: 'Aragon',
    address: '0xa117000000f279D81A1D3cc75430fAA017FA5A2e',
    symbol: 'ANT',
    decimals: 18,
    chainId: 1,
    logoURI: 'https://assets.coingecko.com/coins/images/681/thumb/JelZ58cv_400x400.png?1601449653',
    coingeckoId: 'aragon'
  },
  {
    chainId: 1,
    address: '0xec67005c4E498Ec7f55E092bd1d35cbC47C91892',
    name: 'Melon',
    symbol: 'MLN',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/605/thumb/melon.png?1547034295',
    coingeckoId: 'melon'
  },
  {
    name: 'Synth sUSD',
    address: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
    symbol: 'sUSD',
    decimals: 18,
    chainId: 1,
    logoURI: 'https://assets.coingecko.com/coins/images/5013/thumb/sUSD.png?1616150765',
    coingeckoId: 'nusd'
  },
  {
    chainId: 1,
    address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
    name: 'Polygon',
    symbol: 'MATIC',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912',
    coingeckoId: 'matic-network'
  },
  {
    chainId: 1,
    address: '0x111111111117dC0aa78b770fA6A738034120C302',
    name: '1inch',
    symbol: '1INCH',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png?1608803028',
    coingeckoId: '1inch'
  },
  {
    chainId: 1,
    address: '0x5732046A883704404F284Ce41FfADd5b007FD668',
    name: 'Bluzelle',
    symbol: 'BLZ',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/2848/thumb/ColorIcon_3x.png?1622516510',
    coingeckoId: 'bluzelle'
  },
  {
    chainId: 1,
    address: '0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919',
    name: 'Rai Reflex Index',
    symbol: 'RAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/14004/thumb/RAI-logo-coin.png?1613592334',
    coingeckoId: 'rai',
    commonKey: 'rai-wei'
  },
  {
    chainId: 1,
    address: '0x91A69021b0BaeF3445E51726458a0CE601471846',
    name: 'Ethos Reserve Note',
    symbol: 'ERN',
    decimals: 18,
    logoURI: 'https://docs.velodrome.finance/tokens/ERN.png',
    coingeckoId: 'ethos-reserve-note',
    commonKey: 'ern-wei',
    bridgeOnly: true
  },
  {
    chainId: 1,
    address: '0xDDB3422497E61e13543BeA06989C0789117555c5',
    name: 'COTI',
    symbol: 'COTI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/2962/thumb/Coti.png?1559653863',
    coingeckoId: 'coti'
  },
  {
    chainId: 1,
    address: '0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55',
    name: 'SuperFarm',
    symbol: 'SUPER',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/14040/thumb/6YPdWn6.png?1613975899',
    coingeckoId: 'superciety'
  },
  {
    chainId: 1,
    address: '0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419',
    name: 'DIA',
    symbol: 'DIA',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/11955/thumb/image.png?1646041751',
    coingeckoId: 'dia-data'
  },
  {
    chainId: 1,
    address: '0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3',
    name: 'Rubic',
    symbol: 'RBC',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/12629/thumb/200x200.png?1607952509',
    coingeckoId: 'rubic'
  },
  {
    chainId: 1,
    address: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c',
    name: 'Enjin Coin',
    symbol: 'ENJ',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/1102/thumb/enjin-coin-logo.png?1547035078',
    coingeckoId: 'enjincoin'
  },
  {
    chainId: 1,
    address: '0x2e9d63788249371f1DFC918a52f8d799F4a38C94',
    name: 'Tokemak',
    symbol: 'TOKE',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/17495/thumb/tokemak-avatar-200px-black.png?1628131614',
    coingeckoId: 'non-fungible-toke'
  },
  {
    chainId: 1,
    address: '0xe6828D65bf5023AE1851D90D8783Cc821ba7eeE1',
    name: 'ApeBond',
    symbol: 'ABOND',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/abond.svg',
    coingeckoId: ''
  },
  {
    chainId: 1,
    address: '0xBBc2AE13b23d715c30720F079fcd9B4a74093505',
    name: 'Ethernity Chain',
    symbol: 'ERN',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/14238/thumb/LOGO_HIGH_QUALITY.png?1647831402',
    coingeckoId: 'ethernity-chain'
  },
  {
    chainId: 1,
    address: '0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429',
    name: 'Golem',
    symbol: 'GLM',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/542/thumb/Golem_Submark_Positive_RGB.png?1606392013',
    coingeckoId: 'golem'
  },
  {
    chainId: 1,
    address: '0x71Ab77b7dbB4fa7e017BC15090b2163221420282',
    name: 'Highstreet',
    symbol: 'HIGH',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/18973/thumb/logosq200200Coingecko.png?1634090470',
    coingeckoId: 'highstreet'
  },
  {
    chainId: 1,
    address: '0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68',
    name: 'Inverse Finance',
    symbol: 'INV',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/14205/thumb/inverse_finance.jpg?1614921871',
    coingeckoId: 'inverse-finance'
  },
  {
    chainId: 1,
    address: '0x4a220E6096B25EADb88358cb44068A3248254675',
    name: 'Quant',
    symbol: 'QNT',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/3370/thumb/5ZOu7brX_400x400.jpg?1612437252',
    coingeckoId: 'quant-network'
  },
  {
    chainId: 1,
    address: '0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b',
    name: 'Rally',
    symbol: 'RLY',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/12843/thumb/image.png?1611212077',
    coingeckoId: 'rally-2'
  },
  {
    chainId: 1,
    address: '0x8f8221aFbB33998d8584A2B05749bA73c37a938a',
    name: 'Request',
    symbol: 'REQ',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/1031/thumb/Request_icon_green.png?1643250951',
    coingeckoId: 'request-network'
  },
  {
    chainId: 1,
    address: '0x6123B0049F904d730dB3C36a31167D9d4121fA6B',
    name: 'Ribbon Finance',
    symbol: 'RBN',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15823/thumb/RBN_64x64.png?1633529723',
    coingeckoId: 'ribbon-finance'
  },
  {
    chainId: 1,
    address: '0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d',
    name: 'ShapeShift FOX Token',
    symbol: 'FOX',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/9988/thumb/FOX.png?1574330622',
    coingeckoId: 'farmers-only'
  },
  {
    chainId: 1,
    address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
    name: 'Shiba Inu',
    symbol: 'SHIB',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/11939/thumb/shiba.png?1622619446',
    coingeckoId: 'shiba-inu',
    commonKey: 'shib-wei'
  },
  {
    chainId: 1,
    address: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
    name: 'Sushi',
    symbol: 'SUSHI',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/12271/thumb/512x512_Logo_no_chop.png?1606986688',
    coingeckoId: 'sushi'
  },
  {
    chainId: 1,
    address: '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    commonKey: 'fxs-wei'
  },
  {
    chainId: 1,
    address: '0x6c3ea9036406852006290770bedfcaba0e23a0e8',
    name: 'PayPal USD',
    symbol: 'PYUSD',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/pyusd.svg',
    coingeckoId: 'paypal-usd'
  },
  {
    chainId: 1,
    address: '0x967da4048cD07aB37855c090aAF366e4ce1b9F48',
    name: 'Ocean Protocol',
    symbol: 'OCEAN',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/3687/thumb/ocean-protocol-logo.jpg?1547038686',
    coingeckoId: 'ocean-protocol'
  },
  {
    chainId: 1,
    address: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
    name: 'PAX Gold',
    symbol: 'PAXG',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/9519/thumb/paxg.PNG?1568542565',
    feeOnTransfer: true,
    coingeckoId: 'pax-gold'
  },
  {
    chainId: 1,
    address: '0x3845badAde8e6dFF049820680d1F14bD3903a5d0',
    name: 'The Sandbox',
    symbol: 'SAND',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/12129/thumb/sandbox_logo.jpg?1597397942',
    coingeckoId: 'san-diego-coin'
  },
  {
    chainId: 1,
    address: '0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998',
    name: 'Audius',
    symbol: 'AUDIO',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/12913/thumb/AudiusCoinLogo_2x.png?1603425727',
    coingeckoId: 'audius'
  },
  {
    chainId: 1,
    address: '0x6b66ccd1340c479B07B390d326eaDCbb84E726Ba',
    name: 'Seamless Protocol',
    symbol: 'SEAM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/seam.svg',
    coingeckoId: 'seamless-protocol'
  },
  {
    chainId: 1,
    address: '0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3',
    name: 'Dogelon Mars',
    symbol: 'ELON',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/14962/thumb/6GxcPRo3_400x400.jpg?1619157413',
    coingeckoId: 'dogelon-mars'
  },
  {
    chainId: 1,
    address: '0x949D48EcA67b17269629c7194F4b727d4Ef9E5d6',
    name: 'Merit Circle',
    symbol: 'MC',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/19304/thumb/Db4XqML.png?1634972154',
    coingeckoId: 'mechaverse'
  },
  {
    chainId: 1,
    address: '0xDf801468a808a32656D2eD2D2d80B72A129739f4',
    name: 'Somnium Space CUBEs',
    symbol: 'CUBE',
    decimals: 8,
    logoURI: 'https://assets.coingecko.com/coins/images/10687/thumb/CUBE_icon.png?1617026861',
    coingeckoId: 'cube-network'
  },
  {
    chainId: 1,
    address: '0xADE00C28244d5CE17D72E40330B1c318cD12B7c3',
    name: 'Ambire AdEx',
    symbol: 'ADX',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/847/thumb/Ambire_AdEx_Symbol_color.png?1655432540',
    coingeckoId: 'adex'
  },
  {
    chainId: 1,
    address: '0xfB7B4564402E5500dB5bB6d63Ae671302777C75a',
    name: 'DexTools',
    symbol: 'DEXT',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/11603/thumb/dext.png?1605790188',
    coingeckoId: 'dextools'
  },
  {
    chainId: 1,
    address: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b',
    name: 'DeFi Pulse Index',
    symbol: 'DPI',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/12465/thumb/defi_pulse_index_set.png?1600051053',
    coingeckoId: 'defipulse-index'
  },
  {
    chainId: 1,
    name: 'Metis',
    symbol: 'METIS',
    logoURI: 'https://assets.coingecko.com/coins/images/15595/thumb/metis.jpeg?1660285312',
    address: '0x9E32b13ce7f2E80A01932B42553652E053D6ed8e',
    decimals: 18,
    coingeckoId: 'metis-token'
  },
  {
    chainId: 1,
    name: 'Monavale',
    symbol: 'MONA',
    logoURI: 'https://assets.coingecko.com/coins/images/13298/thumb/monavale_logo.jpg?1607232721',
    address: '0x275f5Ad03be0Fa221B4C6649B8AeE09a42D9412A',
    decimals: 18,
    coingeckoId: 'mona'
  },
  {
    chainId: 1,
    name: 'Muse DAO',
    symbol: 'MUSE',
    logoURI: 'https://assets.coingecko.com/coins/images/13230/thumb/muse_logo.png?1606460453',
    address: '0xB6Ca7399B4F9CA56FC27cBfF44F4d2e4Eef1fc81',
    decimals: 18,
    coingeckoId: 'muse-2'
  },
  {
    chainId: 1,
    name: 'Rook',
    symbol: 'ROOK',
    logoURI: 'https://assets.coingecko.com/coins/images/13005/thumb/keeper_dao_logo.jpg?1604316506',
    address: '0xfA5047c9c78B8877af97BDcb85Db743fD7313d4a',
    decimals: 18,
    coingeckoId: 'rook'
  },
  {
    chainId: 1,
    name: 'Sylo',
    symbol: 'SYLO',
    logoURI: 'https://assets.coingecko.com/coins/images/6430/thumb/SYLO.svg?1589527756',
    address: '0xf293d23BF2CDc05411Ca0edDD588eb1977e8dcd4',
    decimals: 18,
    coingeckoId: 'sylo'
  },
  {
    chainId: 1,
    name: 'The Virtua Kolect',
    symbol: 'TVK',
    logoURI: 'https://assets.coingecko.com/coins/images/13330/thumb/virtua_original.png?1656043619',
    address: '0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988',
    decimals: 18,
    coingeckoId: 'the-virtua-kolect'
  },
  {
    chainId: 1,
    name: 'WOO Network',
    symbol: 'WOO',
    logoURI:
      'https://assets.coingecko.com/coins/images/12921/thumb/w2UiemF__400x400.jpg?1603670367',
    address: '0x4691937a7508860F876c9c0a2a617E7d9E945D4B',
    decimals: 18,
    coingeckoId: 'woo-network'
  },
  {
    chainId: 1,
    name: 'Chain',
    symbol: 'XCN',
    logoURI:
      'https://assets.coingecko.com/coins/images/24210/thumb/Chain_icon_200x200.png?1646895054',
    address: '0xA2cd3D43c775978A96BdBf12d733D5A1ED94fb18',
    decimals: 18,
    coingeckoId: 'chain-2'
  },
  {
    chainId: 1,
    name: 'BUSD',
    symbol: 'BUSD',
    logoURI: 'https://assets.coingecko.com/coins/images/9576/thumb/BUSD.png?1568947766',
    address: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
    decimals: 18,
    coingeckoId: 'binance-usd',
    commonKey: 'busd-wei'
  },
  {
    address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/aave.jpg',
    name: 'AAVE',
    symbol: 'AAVE',
    coingeckoId: 'aave'
  },
  {
    address: '0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/alcx.jpg',
    name: 'Alchemix',
    symbol: 'ALCX',
    coingeckoId: 'alchemix'
  },
  {
    address: '0xa1faa113cbE53436Df28FF0aEe54275c13B40975',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xa1faa113cbE53436Df28FF0aEe54275c13B40975/logo.png',
    name: 'Alpha Finance',
    symbol: 'ALPHA',
    coingeckoId: 'aavegotchi-alpha'
  },
  {
    address: '0xfF20817765cB7f73d4bde2e66e067E58D11095C2',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/amp.jpg',
    name: 'Amp',
    symbol: 'AMP',
    coingeckoId: 'amp-token'
  },
  {
    address: '0x4104b135DBC9609Fc1A9490E61369036497660c8',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x4104b135DBC9609Fc1A9490E61369036497660c8/logo.png',
    name: 'APWine Token',
    symbol: 'APW',
    coingeckoId: 'apwine'
  },
  {
    address: '0x97Bbbc5d96875fB78D2F14b7FF8d7a3a74106F17',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/ethereum/0x97Bbbc5d96875fB78D2F14b7FF8d7a3a74106F17.jpg',
    name: 'Astrafer',
    symbol: 'ASTRAFER',
    coingeckoId: 'astrafer'
  },
  {
    address: '0xA9B1Eb5908CfC3cdf91F9B8B3a74108598009096',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/auction.jpg',
    name: 'Bounce Token',
    symbol: 'AUCTION',
    coingeckoId: 'auction'
  },
  {
    address: '0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/band.jpg',
    name: 'Band Protocol',
    symbol: 'BAND',
    coingeckoId: 'band-protocol'
  },
  {
    address: '0x24A6A37576377F63f194Caa5F518a60f45b42921',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x24A6A37576377F63f194Caa5F518a60f45b42921/logo.png',
    name: 'Float Bank',
    symbol: 'BANK',
    coingeckoId: 'bankless-dao'
  },
  {
    address: '0x374CB8C27130E2c9E04F44303f3c8351B9De61C1',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x374CB8C27130E2c9E04F44303f3c8351B9De61C1/logo.png',
    name: 'Bao Finance',
    symbol: 'BAO',
    coingeckoId: 'bao'
  },
  {
    address: '0x0309c98B1bffA350bcb3F9fB9780970CA32a5060',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x0309c98B1bffA350bcb3F9fB9780970CA32a5060/logo.png',
    name: 'BasketDAO DeFi Index',
    symbol: 'BDI',
    coingeckoId: 'basketdao'
  },
  {
    address: '0xF17e65822b568B3903685a7c9F496CF7656Cc6C2',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xF17e65822b568B3903685a7c9F496CF7656Cc6C2/logo.png',
    name: 'Biconomy Token',
    symbol: 'BICO',
    coingeckoId: 'biconomy'
  },
  {
    address: '0x2791BfD60D232150Bff86b39B7146c0eaAA2BA81',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/bifi.jpg',
    name: 'BiFi',
    symbol: 'BIFI',
    coingeckoId: 'beefy-finance'
  },
  {
    address: '0x15b7c0c907e4C6b9AdaAaabC300C08991D6CEA05',
    chainId: 1,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/gel.svg',
    name: 'Gelato',
    symbol: 'GEL',
    coingeckoId: 'gelato'
  },
  {
    address: '0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/ethereum/0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5.jpg',
    name: 'BitDAO',
    symbol: 'BIT',
    coingeckoId: 'biconomy-exchange-token'
  },
  {
    address: '0x8a6D4C8735371EBAF8874fBd518b56Edd66024eB',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x8a6D4C8735371EBAF8874fBd518b56Edd66024eB/logo.png',
    name: 'Blocks Dao',
    symbol: 'BLOCKS',
    coingeckoId: 'blocks'
  },
  {
    address: '0x725C263e32c72dDC3A19bEa12C5a0479a81eE688',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x725C263e32c72dDC3A19bEa12C5a0479a81eE688/logo.png',
    name: 'Bridge Mutual',
    symbol: 'BMI',
    coingeckoId: 'bridge-mutual'
  },
  {
    address: '0x0eC9F76202a7061eB9b3a7D6B59D36215A7e37da',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x0eC9F76202a7061eB9b3a7D6B59D36215A7e37da/logo.png',
    name: 'BlackPool Token',
    symbol: 'BPT',
    coingeckoId: 'blackpool-token'
  },
  {
    address: '0xAE12C5930881c53715B369ceC7606B70d8EB229f',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xAE12C5930881c53715B369ceC7606B70d8EB229f/logo.png',
    name: 'Coin98',
    symbol: 'C98',
    coingeckoId: 'coin98'
  },
  {
    address: '0xCB56b52316041A62B6b5D0583DcE4A8AE7a3C629',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xCB56b52316041A62B6b5D0583DcE4A8AE7a3C629/logo.png',
    name: 'Cigarette Token',
    symbol: 'CIG',
    coingeckoId: 'cigarette-token'
  },
  {
    address: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/comp.jpg',
    name: 'Compound',
    symbol: 'COMP',
    coingeckoId: 'compound-coin'
  },
  {
    address: '0x2ba592F78dB6436527729929AAf6c908497cB200',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/cream.jpg',
    name: 'Cream',
    symbol: 'CREAM',
    coingeckoId: 'cream-2'
  },
  {
    address: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B/logo.png',
    name: 'Convex Token',
    symbol: 'CVX',
    coingeckoId: 'convex-finance'
  },
  {
    address: '0xE00639A1f59B52773b7d39d9F9beF07F6248dbAe',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/ethereum/0xE00639A1f59B52773b7d39d9F9beF07F6248dbAe.jpg',
    name: 'The DAOX Index',
    symbol: 'DAOX',
    coingeckoId: 'the-daox-index'
  },
  {
    address: '0x9EA3b5b4EC044b70375236A281986106457b20EF',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x9EA3b5b4EC044b70375236A281986106457b20EF/logo.png',
    name: 'DELTA',
    symbol: 'DELTA',
    coingeckoId: 'delta-financial'
  },
  {
    address: '0xBAac2B4491727D78D2b78815144570b9f2Fe8899',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xBAac2B4491727D78D2b78815144570b9f2Fe8899/logo.png',
    name: 'The Doge NFT',
    symbol: 'DOG',
    coingeckoId: 'dog'
  },
  {
    address: '0xad32A8e6220741182940c5aBF610bDE99E737b2D',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xad32A8e6220741182940c5aBF610bDE99E737b2D/logo.png',
    name: 'PieDAO',
    symbol: 'DOUGH',
    coingeckoId: 'dough'
  },
  {
    address: '0x92D6C1e31e14520e676a687F0a93788B716BEff5',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x92D6C1e31e14520e676a687F0a93788B716BEff5/logo.png',
    name: 'dYdX',
    symbol: 'DYDX',
    coingeckoId: 'dydx'
  },
  {
    address: '0x1559FA1b8F28238FD5D76D9f434ad86FD20D1559',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/eden.jpg',
    name: 'Eden',
    symbol: 'EDEN',
    coingeckoId: 'eden'
  },
  {
    address: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72/logo.png',
    name: 'Ethereum Name Service',
    symbol: 'ENS',
    coingeckoId: 'ethereum-name-service'
  },
  {
    address: '0xb05097849BCA421A3f51B249BA6CCa4aF4b97cb9',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xb05097849BCA421A3f51B249BA6CCa4aF4b97cb9/logo.png',
    name: 'Float FLOAT',
    symbol: 'FLOAT',
    coingeckoId: 'float-protocol-float'
  },
  {
    address: '0x7f280daC515121DcdA3EaC69eB4C13a52392CACE',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x7f280daC515121DcdA3EaC69eB4C13a52392CACE/logo.png',
    name: 'Fancy Games',
    symbol: 'FNC',
    coingeckoId: 'fancy-games'
  },
  {
    address: '0x4C2e59D098DF7b6cBaE0848d66DE2f8A4889b9C3',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x4C2e59D098DF7b6cBaE0848d66DE2f8A4889b9C3/logo.png',
    name: 'Fodl',
    symbol: 'FODL',
    coingeckoId: 'fodl-finance'
  },
  {
    address: '0xd084944d3c05CD115C09d072B9F44bA3E0E45921',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xd084944d3c05CD115C09d072B9F44bA3E0E45921/logo.png',
    name: 'Manifold Finance',
    symbol: 'FOLD',
    coingeckoId: 'manifold-finance'
  },
  {
    address: '0x4E15361FD6b4BB609Fa63C81A2be19d873717870',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/ftm.jpg',
    name: 'Fantom Token',
    symbol: 'FTM',
    coingeckoId: 'fantom'
  },
  {
    address: '0x50D1c9771902476076eCFc8B2A83Ad6b9355a4c9',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x50D1c9771902476076eCFc8B2A83Ad6b9355a4c9/logo.png',
    name: 'FTX Token',
    symbol: 'FTT',
    coingeckoId: 'ftx-token'
  },
  {
    address: '0x8a854288a5976036A725879164Ca3e91d30c6A1B',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x8a854288a5976036A725879164Ca3e91d30c6A1B/logo.png',
    name: 'Guaranteed Entrance Token',
    symbol: 'GET',
    coingeckoId: 'get'
  },
  {
    address: '0xccC8cb5229B0ac8069C51fd58367Fd1e622aFD97',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xccC8cb5229B0ac8069C51fd58367Fd1e622aFD97/logo.png',
    name: 'Gods Unchained',
    symbol: 'GODS',
    coingeckoId: 'gods-unchained'
  },
  {
    address: '0x9AB7bb7FdC60f4357ECFef43986818A2A3569c62',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x9AB7bb7FdC60f4357ECFef43986818A2A3569c62/logo.png',
    name: 'Guild of Guardians',
    symbol: 'GOG',
    coingeckoId: 'guild-of-guardians'
  },
  {
    address: '0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/ethereum/0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC.jpg',
    name: 'Hop',
    symbol: 'HOP',
    coingeckoId: 'hop-protocol'
  },
  {
    chainId: 1,
    address: '0x5e354e4f52D14FF07662CF0493d0d588d38a44A6',
    name: 'Kuji',
    symbol: 'KUJI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/kuji.svg',
    coingeckoId: 'kujira',
    commonKey: 'ukuji',
    bridgeOnly: true
  },
  {
    address: '0xf16e81dce15B08F326220742020379B855B87DF9',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/ice.jpg',
    name: 'IceToken',
    symbol: 'ICE',
    coingeckoId: 'decentral-games-ice'
  },
  {
    address: '0x903bEF1736CDdf2A537176cf3C64579C3867A881',
    chainId: 1,
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x903bEF1736CDdf2A537176cf3C64579C3867A881/logo.png',
    name: 'ichi.farm',
    symbol: 'ICHI',
    coingeckoId: 'ichi-farm'
  },
  {
    address: '0x0acC0FEE1D86D2cD5AF372615bf59b298D50cd69',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/ethereum/0x0acC0FEE1D86D2cD5AF372615bf59b298D50cd69.jpg',
    name: 'Invest Like Stakeborg Index',
    symbol: 'ILSI',
    coingeckoId: 'invest-like-stakeborg-index'
  },
  {
    address: '0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E/logo.png',
    name: 'Illuvium',
    symbol: 'ILV',
    coingeckoId: 'illuvium'
  },
  {
    address: '0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF/logo.png',
    name: 'Immutable X',
    symbol: 'IMX',
    coingeckoId: 'immutable-x'
  },
  {
    address: '0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/inj.jpg',
    name: 'Injective Protocol',
    symbol: 'INJ',
    coingeckoId: 'injective-protocol'
  },
  {
    address: '0x579CEa1889991f68aCc35Ff5c3dd0621fF29b0C9',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x579CEa1889991f68aCc35Ff5c3dd0621fF29b0C9/logo.png',
    name: 'Everipedia IQ',
    symbol: 'IQ',
    coingeckoId: 'everipedia'
  },
  {
    address: '0xE80C0cd204D654CEbe8dd64A4857cAb6Be8345a3',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xE80C0cd204D654CEbe8dd64A4857cAb6Be8345a3/logo.png',
    name: 'JPEGd Governance Token',
    symbol: 'JPEG',
    coingeckoId: 'jpeg-d'
  },
  {
    address: '0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/kp3r.jpg',
    name: 'Keep3rV1',
    symbol: 'KP3R',
    coingeckoId: 'keep3rv1'
  },
  {
    address: '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32/logo.png',
    name: 'Lido DAO',
    symbol: 'LDO',
    coingeckoId: 'lido-dao'
  },
  {
    address: '0x01BA67AAC7f75f647D94220Cc98FB30FCc5105Bf',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x01BA67AAC7f75f647D94220Cc98FB30FCc5105Bf/logo.png',
    name: 'Lyra Token',
    symbol: 'LYRA',
    coingeckoId: 'lyra-finance'
  },
  {
    address: '0x4Af698B479D0098229DC715655c667Ceb6cd8433',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/maid.jpg',
    name: 'MaidCoin',
    symbol: 'MAID',
    coingeckoId: 'maidcoin'
  },
  {
    address: '0x16CDA4028e9E872a38AcB903176719299beAed87',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x16CDA4028e9E872a38AcB903176719299beAed87/logo.png',
    name: 'MARS4',
    symbol: 'MARS4',
    coingeckoId: 'mars4'
  },
  {
    address: '0x06F3C323f0238c72BF35011071f2b5B7F43A054c',
    chainId: 1,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8376.png',
    name: 'MASQ',
    symbol: 'MASQ',
    coingeckoId: 'masq'
  },
  {
    address: '0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/mim.jpg',
    name: 'Magic Internet Money',
    symbol: 'MIM',
    coingeckoId: 'magic-internet-money'
  },
  {
    address: '0x65Ef703f5594D2573eb71Aaf55BC0CB548492df4',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x65Ef703f5594D2573eb71Aaf55BC0CB548492df4/logo.png',
    name: 'Multichain',
    symbol: 'MULTI',
    coingeckoId: 'multichain'
  },
  {
    address: '0xDFDb7f72c1F195C5951a234e8DB9806EB0635346',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xDFDb7f72c1F195C5951a234e8DB9806EB0635346/logo.png',
    name: 'Feisty Doge NFT',
    symbol: 'NFD',
    coingeckoId: 'feisty-doge-nft'
  },
  {
    address: '0x3c8D2FCE49906e11e71cB16Fa0fFeB2B16C29638',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x3c8D2FCE49906e11e71cB16Fa0fFeB2B16C29638/logo.png',
    name: 'Nifty League',
    symbol: 'NFTL',
    coingeckoId: 'nftlaunch'
  },
  {
    address: '0x0De05F6447ab4D22c8827449EE4bA2D5C288379B',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x0De05F6447ab4D22c8827449EE4bA2D5C288379B/logo.png',
    name: 'OOKI',
    symbol: 'OOKI',
    coingeckoId: 'ooki'
  },
  {
    address: '0x808507121B80c02388fAd14726482e061B8da827',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x808507121B80c02388fAd14726482e061B8da827/logo.png',
    name: 'Pendle',
    symbol: 'PENDLE',
    coingeckoId: 'pendle'
  },
  {
    address: '0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/pickle.jpg',
    name: 'Pickle Token',
    symbol: 'PICKLE',
    coingeckoId: 'pickle-finance'
  },
  {
    address: '0x57B946008913B82E4dF85f501cbAeD910e58D26C',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x57B946008913B82E4dF85f501cbAeD910e58D26C/logo.png',
    name: 'Marlin POND',
    symbol: 'POND',
    coingeckoId: 'marlin'
  },
  {
    address: '0x6399C842dD2bE3dE30BF99Bc7D1bBF6Fa3650E70',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x6399C842dD2bE3dE30BF99Bc7D1bBF6Fa3650E70/logo.png',
    name: 'Premia',
    symbol: 'PREMIA',
    coingeckoId: 'premia'
  },
  {
    address: '0xDb0f18081b505A7DE20B18ac41856BCB4Ba86A1a',
    chainId: 1,
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/pwing.jpg',
    name: 'Poly Ontology Wing Token',
    symbol: 'pWING',
    coingeckoId: 'wing-finance'
  },
  {
    address: '0x44709a920fCcF795fbC57BAA433cc3dd53C44DbE',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x44709a920fCcF795fbC57BAA433cc3dd53C44DbE/logo.png',
    name: 'DappRadar',
    symbol: 'RADAR',
    coingeckoId: 'dappradar'
  },
  {
    address: '0xe76C6c83af64e4C60245D8C7dE953DF673a7A33D',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xe76C6c83af64e4C60245D8C7dE953DF673a7A33D/logo.png',
    name: 'Rail',
    symbol: 'RAIL',
    coingeckoId: 'railgun'
  },
  {
    address: '0x607F4C5BB672230e8672085532f7e901544a7375',
    chainId: 1,
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/rlc.jpg',
    name: 'RLC',
    symbol: 'RLC',
    coingeckoId: 'iexec-rlc'
  },
  {
    address: '0x3155BA85D5F96b2d030a4966AF206230e46849cb',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/rune.jpg',
    name: 'THORChain ETH.RUNE',
    symbol: 'RUNE',
    coingeckoId: 'thorchain'
  },
  {
    address: '0xe9F84dE264E91529aF07Fa2C746e934397810334',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xe9F84dE264E91529aF07Fa2C746e934397810334/logo.png',
    name: 'Sake',
    symbol: 'SAK3',
    coingeckoId: 'sak3'
  },
  {
    address: '0x3b484b82567a09e2588A13D54D032153f0c0aEe0',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x3b484b82567a09e2588A13D54D032153f0c0aEe0/logo.png',
    name: 'OpenDao SOS',
    symbol: 'SOS',
    coingeckoId: 'opendao'
  },
  {
    address: '0x090185f2135308BaD17527004364eBcC2D37e5F6',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x090185f2135308BaD17527004364eBcC2D37e5F6/logo.png',
    name: 'Spell Token',
    symbol: 'SPELL',
    coingeckoId: 'spell-token'
  },
  {
    address: '0x00813E3421E1367353BfE7615c7f7f133C89df74',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x00813E3421E1367353BfE7615c7f7f133C89df74/logo.png',
    name: 'Splintershards',
    symbol: 'SPS',
    coingeckoId: 'splinterlands'
  },
  {
    address: '0x476c5E26a75bd202a9683ffD34359C0CC15be0fF',
    chainId: 1,
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/srm.jpg',
    name: 'Serum',
    symbol: 'SRM',
    coingeckoId: 'serum'
  },
  {
    address: '0x44017598f2AF1bD733F9D87b5017b4E7c1B28DDE',
    chainId: 1,
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x44017598f2AF1bD733F9D87b5017b4E7c1B28DDE/logo.png',
    name: 'pSTAKE Staked Atom',
    symbol: 'stkATOM',
    coingeckoId: 'pstake-staked-atom'
  },
  {
    address: '0x0f2D719407FdBeFF09D87557AbB7232601FD9F29',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x0f2D719407FdBeFF09D87557AbB7232601FD9F29/logo.png',
    name: 'Synapse',
    symbol: 'SYN',
    coingeckoId: 'synapse-2'
  },
  {
    address: '0x108a850856Db3f85d0269a2693D896B394C80325',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x108a850856Db3f85d0269a2693D896B394C80325/logo.png',
    name: 'THORWallet Governance Token',
    symbol: 'TGT',
    coingeckoId: 'thorwallet'
  },
  {
    address: '0xa5f2211B9b8170F694421f2046281775E8468044',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/ethereum/0xa5f2211B9b8170F694421f2046281775E8468044.jpg',
    name: 'THORSwap Token',
    symbol: 'THOR',
    coingeckoId: 'thor'
  },
  {
    address: '0x7825e833D495F3d1c28872415a4aee339D26AC88',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/ethereum/0x7825e833D495F3d1c28872415a4aee339D26AC88.jpg',
    name: 'Telos',
    symbol: 'TLOS',
    coingeckoId: 'telos'
  },
  {
    address: '0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784',
    chainId: 1,
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/ethereum/0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784.jpg',
    name: 'TrueFi',
    symbol: 'TRU',
    coingeckoId: 'truebit-protocol'
  },
  {
    address: '0x0000000000085d4780B73119b644AE5ecd22b376',
    chainId: 1,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tusd.svg',
    name: 'TrueUSD',
    symbol: 'TUSD',
    coingeckoId: 'true-usd'
  },
  {
    address: '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/uma.jpg',
    name: 'UMA Voting Token v1',
    symbol: 'UMA',
    coingeckoId: 'uma'
  },
  {
    address: '0x55C08ca52497e2f1534B59E2917BF524D4765257',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/ethereum/0x55C08ca52497e2f1534B59E2917BF524D4765257.jpg',
    name: 'UwU Lend',
    symbol: 'UwU',
    coingeckoId: 'uwu-lend'
  },
  {
    address: '0xcB84d72e61e383767C4DFEb2d8ff7f4FB89abc6e',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xcB84d72e61e383767C4DFEb2d8ff7f4FB89abc6e/logo.png',
    name: 'Vega',
    symbol: 'VEGA',
    coingeckoId: 'vega-coin'
  },
  {
    address: '0xf203Ca1769ca8e9e8FE1DA9D147DB68B6c919817',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/wncg.jpg',
    name: 'Wrapped NCG',
    symbol: 'WNCG',
    coingeckoId: 'wrapped-ncg'
  },
  {
    address: '0xABe580E7ee158dA464b51ee1a83Ac0289622e6be',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/xft.jpg',
    name: 'Offshift',
    symbol: 'XFT',
    coingeckoId: 'offshift'
  },
  {
    address: '0x69fa0feE221AD11012BAb0FdB45d444D3D2Ce71c',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x69fa0feE221AD11012BAb0FdB45d444D3D2Ce71c/logo.png',
    name: 'XRUNE Token',
    symbol: 'XRUNE',
    coingeckoId: 'thorstarter'
  },
  {
    address: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/xsushi.jpg',
    name: 'SushiBar',
    symbol: 'xSUSHI',
    coingeckoId: 'xsushi'
  },
  {
    address: '0x0AaCfbeC6a24756c20D41914F2caba817C0d8521',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/yam.jpg',
    name: 'YAM',
    symbol: 'YAM',
    coingeckoId: 'yam-2'
  },
  {
    address: '0x7815bDa662050D84718B988735218CFfd32f75ea',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0x7815bDa662050D84718B988735218CFfd32f75ea/logo.png',
    name: 'YEL Token',
    symbol: 'YEL',
    coingeckoId: 'yel-finance'
  },
  {
    address: '0x25f8087EAD173b73D6e8B84329989A8eEA16CF73',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/ygg.jpg',
    name: 'Yield Guild Games Token',
    symbol: 'YGG',
    coingeckoId: 'yield-guild-games'
  },
  {
    address: '0x9d409a0A012CFbA9B15F6D4B36Ac57A46966Ab9a',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/token/yvboost.jpg',
    name: 'Yearn Compounding veCRV yVault',
    symbol: 'yvBOOST',
    coingeckoId: 'yvboost'
  },
  {
    address: '0x6A7b717aE5Ed65F85BA25403D5063D368239828e',
    chainId: 1,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    address: '0x06450dEe7FD2Fb8E39061434BAbCFC05599a6Fb8',
    chainId: 1,
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/27713/small/Xen.jpeg?1665453190',
    name: 'XEN Crypto',
    symbol: 'XEN',
    coingeckoId: 'xen-crypto'
  },
  {
    address: '0x6f80310ca7f2c654691d1383149fa1a57d8ab1f8',
    chainId: 1,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16010.png',
    name: 'Silo Governance Token',
    symbol: 'SILO',
    coingeckoId: 'silo-finance'
  },
  {
    address: '0x163f8c2467924be0ae7b5347228cabf260318753',
    chainId: 1,
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/31069/small/worldcoin.jpeg?1690182386',
    name: 'Worldcoin',
    symbol: 'WLD',
    coingeckoId: 'worldcoin'
  },
  {
    address: '0xAC57De9C1A09FeC648E93EB98875B212DB0d460B',
    chainId: 1,
    decimals: 9,
    logoURI: 'https://assets.coingecko.com/coins/images/16125/small/babydoge.jpg?1676303229',
    name: 'Baby Doge Coin',
    symbol: 'BABYDOGE',
    feeOnTransfer: true,
    coingeckoId: 'baby-doge-coin'
  },
  {
    chainId: 1,
    address: '0xd20523b39fAF1D6e9023a4D6085f87B7b0DE7926',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    commonKey: 'oath-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true
  },
  {
    chainId: 1,
    address: '0xeA0cFDC2667bE69ED724c8069d358502fF41cA18',
    name: 'Staked ERN Vault',
    symbol: 'stERN',
    decimals: 18,
    commonKey: 'stern-wei',
    logoURI: 'https://github.com/0xsquid/assets/blob/main/images/tokens/stERN.svg?raw=true',
    coingeckoId: 'staked-ethos-reserve-note',
    bridgeOnly: true
  },
  {
    chainId: 1,
    address: '0x89901994b5Ed81cbbcBC4E5A7e0cC4e7F58e5458',
    name: 'Gridex',
    symbol: 'GDX',
    decimals: 18,
    commonKey: 'gdx-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23941.png',
    coingeckoId: 'gdx-token',
    bridgeOnly: true
  },
  {
    chainId: 1,
    address: '0xcc4304a31d09258b0029ea7fe63d032f52e44efe',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5829.png',
    name: 'TrustSwap Token',
    symbol: 'SWAP',
    coingeckoId: ''
  },
  {
    address: '0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa',
    chainId: 1,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7208.png',
    name: 'Polkastarter Token',
    symbol: 'POLS',
    commonKey: 'pols-wei',
    coingeckoId: 'polkastarter'
  },
  {
    chainId: 1,
    address: '0xff56Cc6b1E6dEd347aA0B7676C85AB0B3D08B0FA',
    name: 'Orbs',
    symbol: 'ORBS',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3835.png',
    coingeckoId: 'orbs',
    bridgeOnly: true,
    commonKey: 'orbs-wei'
  },
  {
    chainId: 1,
    address: '0x69e557b926F4eEf6d9400e36DBBFEb9600Af2880',
    name: 'Axelar Wrapped DEUS',
    symbol: 'axlDEUS',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12972.png',
    coingeckoId: 'deus-finance-2',
    bridgeOnly: true,
    commonKey: 'deus-wei'
  },
  {
    chainId: 1,
    address: '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
    name: 'LUSD Stablecoin',
    symbol: 'LUSD',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9566.png',
    coingeckoId: 'liquity-usd',
    bridgeOnly: false
  },
  {
    chainId: 1,
    address: '0x98504C8afa7c74c87a0641a7bb0F7968d4e8F471',
    name: 'LiquidDriver',
    symbol: 'axlLqdr',
    decimals: 18,
    commonKey: 'lqdr-wei',
    logoURI:
      'https://2302794922-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYQICp07j-iq-GK2MHc%2Fuploads%2F9E0dn7eOs8PLq9hq26Gv%2FIcon-PNG.png?alt=media&token=53c999ea-e4a0-43a3-9ae8-2f2d4c83f132',
    coingeckoId: 'liquiddriver',
    bridgeOnly: true
  },
  {
    chainId: 1,
    address: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
    name: 'Coinbase Wrapped Staked ETH',
    symbol: 'CBETH',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21535.png',
    coingeckoId: 'coinbase-wrapped-staked-eth',
    commonKey: 'cbeth-wei'
  },
  {
    chainId: 1,
    address: '0xae78736Cd615f374D3085123A210448E74Fc6393',
    name: 'Rocket Pool ETH',
    symbol: 'RETH',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/15060.png',
    coingeckoId: 'rocket-pool-eth',
    commonKey: 'reth-wei'
  },
  {
    chainId: 1,
    address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
    name: 'Lido wstETH',
    symbol: 'wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    commonKey: 'wsteth-wei'
  },
  {
    chainId: 1,
    address: '0xba100000625a3754423978a60c9317c58a424e3d',
    name: 'Balancer',
    symbol: 'BAL',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5728.png',
    coingeckoId: 'balancer',
    commonKey: 'bal-wei',
    bridgeOnly: true
  },
  {
    chainId: 1,
    address: '0xac3E018457B222d93114458476f3E3416Abbe38F',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    commonKey: 'sfrxeth-wei',
    bridgeOnly: true
  },
  {
    chainId: 1,
    address: '0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f',
    name: 'OriginTrail',
    symbol: 'TRAC',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2467.png',
    coingeckoId: 'origintrail'
  },
  {
    chainId: 1,
    address: '0x65e3fA51C4ce0af1B9CD5CBC7C5fDb80a09D431D',
    name: 'axlTIA',
    symbol: 'axlTIA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/celestia.svg',
    coingeckoId: 'celestia',
    commonKey: 'utia'
  },
  {
    chainId: 1,
    address: '0xA663B02CF0a4b149d2aD41910CB81e23e1c41c32',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 1,
    address: '0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812',
    name: 'Mountain Protocol USD',
    symbol: 'wUSDM',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/31719/standard/usdm.png?1696530540',
    coingeckoId: 'mountain-protocol-usdm',
    commonKey: 'wusdm-wei',
    bridgeOnly: true
  },
  {
    chainId: 1,
    address: '0x8aa9381b2544b48c26f3b850F6e07E2c5161EB3e',
    name: 'Wrapped Doge',
    symbol: 'wDOGE',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/doge.svg',
    coingeckoId: 'dogecoin',
    commonKey: 'wdoge-wei',
    bridgeOnly: true
  },
  {
    chainId: 1,
    address: '0x6982508145454ce325ddbe47a25d4ec3d2311933',
    name: 'Pepe',
    symbol: 'PEPE',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/pepe.svg',
    coingeckoId: 'pepe',
    commonKey: 'pepe-wei'
  },
  {
    chainId: 1,
    address: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
    name: 'YieldETH',
    symbol: 'YieldETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/YieldETH.png',
    coingeckoId: 'yieldeth-sommelier',
    commonKey: 'yieldeth-wei'
  },
  {
    chainId: 1,
    address: '0x96F6eF951840721AdBF46Ac996b59E0235CB985C',
    name: 'Ondo US Dollar Yield',
    symbol: 'USDY',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdy.svg',
    coingeckoId: 'ondo-us-dollar-yield',
    commonKey: 'usdy-wei',
    bridgeOnly: true
  },
  {
    chainId: 1,
    address: '0x5Ca135cB8527d76e932f34B5145575F9d8cbE08E',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    commonKey: 'fpi-wei'
  },
  {
    chainId: 1,
    address: '0x010cddfA5518f74c43Efe911db29Af71b44b4E1C',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 1,
    address: '0x2598c30330D5771AE9F983979209486aE26dE875',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28916.png',
    name: 'Any Inu',
    symbol: 'AI',
    coingeckoId: 'any-inu'
  },
  {
    chainId: 1,
    address: '0xF7C79FfDa0d13b68081761BB0a5a66cFC48D97f5',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 1,
    address: '0x78a0a62fba6fb21a83fe8a3433d44c73a4017a6f',
    name: 'Open Exchange Token',
    symbol: 'OX',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ox.png',
    coingeckoId: 'open-exchange-token',
    commonKey: 'ox-wei'
  },
  {
    chainId: 1,
    address: '0x5E8422345238F34275888049021821E8E08CAa1f',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'aevmos',
    name: 'Evmos',
    symbol: 'EVMOS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/evmos.svg',
    coingeckoId: 'evmos',
    ibcDenom: 'aevmos',
    pathKey: 'evmos_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'uusdc',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/63C53CBDF471D4E867366ABE2E631197257118D1B2BEAD1946C8A408F96464C3',
    pathKey: 'axlusdc_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'weth-wei',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/356EDE917394B2AEF7F915EB24FA683A0CCB8D16DD4ECCEDC2AD0CEC6B66AC81',
    pathKey: 'axleth_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'dai-wei',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/CBA4784581AD4BEF308C536A3CD44D4A940A520E61B0D1E4FB115C539F61DEE5',
    pathKey: 'axldai_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'uusdt',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'ibc/F11C8CB7743E4B5FDCEA7C97F3B2C115E1931C5614B84C183DAC439B4C919D94',
    pathKey: 'axlusdt_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'busd-wei',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/3A7C0D680D0F50A98115966A22C01594897FAE924FAF324E13C5FFB89F6864BF',
    pathKey: 'axlbusd_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'wavax-wei',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/990770DB97A9567A0B794EB5A3A9BD02C939CE538661FA2DB44DD791CF16DC0E',
    pathKey: 'axlavax_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'wglmr-wei',
    name: 'Axelar WGLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/E9528EEB1589F209D5EA99BA6BDB1634A65DFD883769D53072DDD26FE7DE8CA3',
    pathKey: 'axlglmr_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'wmatic-wei',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/7883D6C40128A175BF42226F013671C0B190F2AC2CA9215896EBD6F7F7097A77',
    pathKey: 'axlmatic_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'wbtc-satoshi',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/C834CD421B4FD910BBC97E06E86B5E6F64EA2FE36D6AE0E4304C2E1FB1E7333C',
    pathKey: 'axlwbtc_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'wbnb-wei',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/5BDA280DA1EA865301F0DB343F87971D6E6C399152B335D8CE475EEA2BA38D21',
    pathKey: 'axlbnb_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'wftm-wei',
    name: 'Axelar WFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/B389DF077401C819F7A4235167AC1399790FB819983191A3AFC646C7364D24C9',
    pathKey: 'axlftm_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'ibc/0C9C3EAE01AB2438F14032341507E51759FD1871BACF35078361A10AB02F3BE1',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    ibcDenom: 'ibc/0C9C3EAE01AB2438F14032341507E51759FD1871BACF35078361A10AB02F3BE1',
    commonKey: 'sfrxeth-wei',
    pathKey: 'sfrxeth_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'ibc/6659354677AD62F7B4B30AEEB613E1100550D373366AFE33D54C5927BA868137',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/6659354677AD62F7B4B30AEEB613E1100550D373366AFE33D54C5927BA868137',
    commonKey: 'frax-wei',
    pathKey: 'frax_evmos'
  },
  {
    chainId: 'evmos_9001-2',
    address: 'ibc/7779A3C6ECF4840CB1E3638DED6672593900F444766DE98DFF41746B103D3172',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    ibcDenom: 'ibc/7779A3C6ECF4840CB1E3638DED6672593900F444766DE98DFF41746B103D3172',
    bridgeOnly: true,
    commonKey: 'frxeth-wei',
    pathKey: 'frxeth_evmos'
  },
  {
    chainId: 250,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'Fantom',
    symbol: 'FTM',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/fantom.svg',
    coingeckoId: 'fantom',
    commonKey: 'wftm-wei'
  },
  {
    chainId: 250,
    address: '0x1B6382DBDEa11d97f24495C9A90b7c88469134a4',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/assets/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    chainId: 250,
    address: '0x66eed5ff1701e6ed8470dc391f05e27b1d0657eb',
    name: 'Morphex',
    symbol: 'MPX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/mpx.svg',
    coingeckoId: 'mpx',
    commonKey: 'mpx-wei'
  },
  {
    chainId: 250,
    address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    name: 'Wrapped FTM',
    symbol: 'WFTM',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/fantom.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei'
  },
  {
    address: '0xD5d5350F42CB484036A1C1aF5F2DF77eAFadcAFF',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/dai.svg',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true
  },
  {
    address: '0xd226392C23fb3476274ED6759D4a478db3197d82',
    chainId: 250,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true
  },
  {
    address: '0xbE71e68fB36d14565F523C9c36ab2A8Be0c26D55',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    name: 'Axelar FRAX',
    symbol: 'axlFRAX',
    coingeckoId: 'frax',
    commonKey: 'frax-wei',
    bridgeOnly: true
  },
  {
    address: '0x448d59B4302aB5d2dadf9611bED9457491926c8e',
    chainId: 250,
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    name: 'Axelar Wrapped BTC',
    symbol: 'axlWBTC',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true
  },
  {
    address: '0xfe7eDa5F2c56160d406869A8aA4B2F365d544C7B',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/weth.svg',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true
  },
  {
    name: 'SpookySwap',
    symbol: 'BOO',
    address: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/BOO.png',
    coingeckoId: 'spookyswap'
  },
  {
    name: 'Equalizer Exchange',
    symbol: 'EQUAL',
    address: '0x3fd3a0c85b70754efc07ac9ac0cbbdce664865a6',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23584.png',
    coingeckoId: 'equalizer-dex'
  },
  {
    name: 'Curve DAO',
    symbol: 'CRV',
    address: '0x1E4F97b9f9F913c46F1632781732927B9019C68b',
    chainId: 250,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png',
    coingeckoId: 'curve-dao-token'
  },
  {
    name: 'Wrapped Ether',
    symbol: 'wETH',
    address: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/wETH.png',
    coingeckoId: 'weth'
  },
  {
    address: '0x1e1085eFaA63EDFE74aaD7C05a28EAE4ef917C3F',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Kyber Network Crystal',
    symbol: 'KNC',
    coingeckoId: 'kyber-network-crystal'
  },
  {
    address: '0xDF34bE7f242EE338644d8d1a1f4D11a807b4Da5f',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Axelar Wrapped KNC',
    symbol: 'axlKNC',
    coingeckoId: 'kyber-network-crystal',
    commonKey: 'knc-wei',
    bridgeOnly: true
  },
  {
    name: 'miMATIC',
    symbol: 'MAI',
    address: '0xfB98B335551a418cD0737375a2ea0ded62Ea213b',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/MAI.png',
    coingeckoId: 'mimatic'
  },
  {
    address: '0x8b1f4432F943c465A973FeDC6d7aa50Fc96f1f65',
    chainId: 250,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    name: 'ChainLink',
    symbol: 'LINK',
    address: '0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/LINK.png',
    coingeckoId: 'chainlink'
  },
  {
    name: 'Beefy.Finance',
    symbol: 'BIFI',
    address: '0xd6070ae98b8069de6B494332d1A1a81B6179D960',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/BIFI.png',
    coingeckoId: 'beefy-finance'
  },
  {
    name: 'MUMMY',
    symbol: 'MMY',
    address: '0x01e77288b38b416f972428d562454fb329350bac',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23038.png',
    coingeckoId: 'mummy-finance'
  },
  {
    name: 'TOMB',
    symbol: 'TOMB',
    address: '0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/TOMB.png',
    coingeckoId: 'tomb'
  },
  {
    name: 'TSHARE',
    symbol: 'TSHARE',
    address: '0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/TSHARE.png',
    coingeckoId: 'tomb-shares'
  },
  {
    name: 'Magic Internet Money',
    symbol: 'MIM',
    address: '0x82f0B8B456c1A451378467398982d4834b6829c1',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/MIM.png',
    coingeckoId: 'magic-internet-money'
  },
  {
    name: 'Scream',
    symbol: 'SCREAM',
    address: '0xe0654C8e6fd4D733349ac7E09f6f23DA256bF475',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/SCREAM.png',
    coingeckoId: 'scream'
  },
  {
    name: 'Tarot',
    symbol: 'TAROT',
    address: '0xC5e2B037D30a390e62180970B3aa4E91868764cD',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/TAROT.png',
    coingeckoId: 'tarot'
  },
  {
    name: 'Wootrade Network',
    symbol: 'WOO',
    address: '0x6626c47c00F1D87902fc13EECfaC3ed06D5E8D8a',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/WOO.png',
    coingeckoId: 'woo-network'
  },
  {
    name: 'WigoSwap',
    symbol: 'WIGO',
    address: '0xE992bEAb6659BFF447893641A378FbbF031C5bD6',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18148.png',
    coingeckoId: 'wigoswap'
  },
  {
    name: 'Treeb',
    symbol: 'TREEB',
    address: '0xc60D7067dfBc6f2caf30523a064f416A5Af52963',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/TREEB.png',
    coingeckoId: 'treeb'
  },
  {
    name: 'Spell Token',
    symbol: 'SPELL',
    address: '0x468003B688943977e6130F4F68F23aad939a1040',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/SPELL.png',
    coingeckoId: 'spell-token'
  },
  {
    name: 'Yoshi.exchange',
    symbol: 'YOSHI',
    address: '0x3dc57B391262e3aAe37a08D91241f9bA9d58b570',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/YOSHI.png',
    coingeckoId: 'yoshi-exchange'
  },
  {
    name: 'PaintSwap Token',
    symbol: 'BRUSH',
    address: '0x85dec8c4B2680793661bCA91a8F129607571863d',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/BRUSH.png',
    coingeckoId: 'paint-swap'
  },
  {
    name: 'TOR',
    symbol: 'TOR',
    address: '0x74E23dF9110Aa9eA0b6ff2fAEE01e740CA1c642e',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/TOR.png',
    coingeckoId: 'tor'
  },
  {
    name: 'Beefy Escrowed Fantom',
    symbol: 'beFTM',
    address: '0x7381eD41F6dE418DdE5e84B55590422a57917886',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/beFTM.png',
    coingeckoId: 'beefy-escrowed-fantom'
  },
  {
    name: 'DEUS',
    symbol: 'DEUS',
    address: '0xDE5ed76E7c05eC5e4572CfC88d1ACEA165109E44',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/DEUS.png',
    coingeckoId: 'deus-finance-2'
  },
  {
    chainId: 250,
    address: '0x912922e25ac79D524734d8eC0C882B035c5b356f',
    name: 'axelar wrapped DEUS',
    symbol: 'axlDEUS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/deus.svg',
    coingeckoId: 'deus-finance-2',
    bridgeOnly: true,
    commonKey: 'deus-wei'
  },
  {
    name: 'Fantom Libero Financial Freedom',
    symbol: 'FLIBERO',
    address: '0xC3f069D7439baf6D4D6E9478D9Cc77778E62D147',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/FLIBERO.png',
    coingeckoId: 'fantom-libero-financial'
  },
  {
    name: 'sFTMX',
    symbol: 'sFTMX',
    address: '0xd7028092c830b5C8FcE061Af2E593413EbbC1fc1',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://assets.spooky.fi/tokens/sFTMX.png',
    coingeckoId: 'stader-sftmx'
  },
  {
    name: 'IceToken',
    symbol: 'ICE',
    address: '0xf16e81dce15B08F326220742020379B855B87DF9',
    chainId: 250,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/fantom/0xf16e81dce15B08F326220742020379B855B87DF9.jpg',
    coingeckoId: 'decentral-games-ice'
  },
  {
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    address: '0x49517abB880359eb873bDc08d09eBc0c478d3CA2',
    chainId: 250,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    chainId: 250,
    address: '0x501e3d716A72E11E1e22eDcf0365556b357DA0c9',
    name: 'Mai Stablecoin',
    symbol: 'axlWMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    chainId: 250,
    address: '0xce1E3cc1950D2aAEb47dE04DE2dec2Dc86380E0A',
    name: 'Ethos Reserve Note',
    symbol: 'ERN',
    decimals: 18,
    logoURI: 'https://docs.velodrome.finance/tokens/ERN.png',
    coingeckoId: 'ethos-reserve-note',
    commonKey: 'ern-wei'
  },
  {
    chainId: 250,
    address: '0x582423C10c9e83387a96d00A69bA3D11ee47B7b5',
    name: 'OneRing',
    symbol: 'RING',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17786.png',
    coingeckoId: 'onering',
    bridgeOnly: true,
    commonKey: 'ring-wei'
  },
  {
    chainId: 250,
    address: '0x21Ada0D2aC28C3A5Fa3cD2eE30882dA8812279B6',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    commonKey: 'oath-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true
  },
  {
    chainId: 250,
    address: '0x34A279Ece38f260a28C8872f416319e9B6Aa428e',
    name: 'Staked ERN Vault',
    symbol: 'stERN',
    decimals: 18,
    logoURI: 'https://github.com/0xsquid/assets/blob/main/images/tokens/stERN.svg?raw=true',
    coingeckoId: 'staked-ethos-reserve-note',
    bridgeOnly: true,
    commonKey: 'stern-wei'
  },
  {
    chainId: 250,
    address: '0x43a8cab15D06d3a5fE5854D714C37E7E9246F170',
    name: 'Orbs',
    symbol: 'ORBS',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3835.png',
    coingeckoId: 'orbs',
    bridgeOnly: true,
    commonKey: 'orbs-wei'
  },
  {
    chainId: 250,
    address: '0x4b6B3d425F82248996D77EcC3F3df1E500aaC1db',
    name: 'LiquidDriver',
    symbol: 'axlLqdr',
    decimals: 18,
    commonKey: 'lqdr-wei',
    logoURI:
      'https://2302794922-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYQICp07j-iq-GK2MHc%2Fuploads%2F9E0dn7eOs8PLq9hq26Gv%2FIcon-PNG.png?alt=media&token=53c999ea-e4a0-43a3-9ae8-2f2d4c83f132',
    coingeckoId: 'liquiddriver',
    bridgeOnly: true
  },
  {
    chainId: 250,
    address: '0x11eDFA12d70e8AC9e94DE019eBa278430873f8C3',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 250,
    address: '0x9fD470124903957f299a1C90fEdA9043A4619cc6',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 250,
    address: '0xa0F18d6Cc2BBE1Da31DE214389BBEfb73a0C836b',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 250,
    address: '0x78d24B91F0988F79AB9f370D607Ffc820d0779B8',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 250,
    address: '0x05E7857Cb748F0018C0CBCe3dfd575B0d8677aeF',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 250,
    address: '0x39Db1A30122031751e803Fabf329C44efBBfBf4B',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 'fetchhub-4',
    address: 'afet',
    name: 'Fetch.ai',
    symbol: 'FET',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fet.svg',
    coingeckoId: 'fetch-ai',
    ibcDenom: 'afet',
    pathKey: 'fet_fetch'
  },
  {
    chainId: 'fetchhub-4',
    address: 'ibc/8AF69BC1E1D72B447738B50C28B382F62F2AF65DE303021E45C0B7C851B4B2E1',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/8AF69BC1E1D72B447738B50C28B382F62F2AF65DE303021E45C0B7C851B4B2E1',
    pathKey: 'axlusdc_fetch'
  },
  {
    chainId: 'fetchhub-4',
    address: 'ibc/74712D58FE426053FE962D71BCA5BE80BF83F1BC3508E5E16EBE70241D4E73BE',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/74712D58FE426053FE962D71BCA5BE80BF83F1BC3508E5E16EBE70241D4E73BE',
    pathKey: 'axleth_fetch'
  },
  {
    chainId: 'fetchhub-4',
    address: 'ibc/32C90ACA7008E4602398C02619D60C5ED36F7F4A245BA6ED870B6640FE418FC2',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/32C90ACA7008E4602398C02619D60C5ED36F7F4A245BA6ED870B6640FE418FC2',
    pathKey: 'axldai_fetch'
  },
  {
    chainId: 'fetchhub-4',
    address: 'ibc/E22116A7B0450692B8B8F9BBA6D987EB46CA48F5EDDEEE683D15C34F6B4E55B6',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'ibc/E22116A7B0450692B8B8F9BBA6D987EB46CA48F5EDDEEE683D15C34F6B4E55B6',
    pathKey: 'axlusdt_fetch'
  },
  {
    chainId: 'fetchhub-4',
    address: 'ibc/4DBD7165A95A4CE5DF31575D9745AF85060A68D6E91050CEB6326958EC92CFDF',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/4DBD7165A95A4CE5DF31575D9745AF85060A68D6E91050CEB6326958EC92CFDF',
    pathKey: 'axlbusd_fetch'
  },
  {
    chainId: 'fetchhub-4',
    address: 'ibc/D3D50F09F6F9A6339A8827A8A89462CAA0C349754B94EABC46D0AEEAF0E41E11',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/D3D50F09F6F9A6339A8827A8A89462CAA0C349754B94EABC46D0AEEAF0E41E11',
    pathKey: 'axlavax_fetch'
  },
  {
    chainId: 'fetchhub-4',
    address: 'ibc/BD3F897C555871388A0F8CCA1B4AA0F02280FA9DD2F34E62BBCC7947A89442AD',
    name: 'Axelar WGLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/BD3F897C555871388A0F8CCA1B4AA0F02280FA9DD2F34E62BBCC7947A89442AD',
    pathKey: 'axlglmr_fetch'
  },
  {
    chainId: 'fetchhub-4',
    address: 'ibc/F4B35F5F93407AED0909071A36ADDBBFF7757DFBFFDF4AD134539CA415407D30',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/F4B35F5F93407AED0909071A36ADDBBFF7757DFBFFDF4AD134539CA415407D30',
    pathKey: 'axlmatic_fetch'
  },
  {
    chainId: 'fetchhub-4',
    address: 'ibc/036052021926396A2AC57F52171B24C6A8DBF79755A3926DB0E2FE8B57F389C6',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/036052021926396A2AC57F52171B24C6A8DBF79755A3926DB0E2FE8B57F389C6',
    pathKey: 'axlwbtc_fetch'
  },
  {
    chainId: 'fetchhub-4',
    address: 'ibc/26786027D954FD05D66A965F3081891D513001B5B2487BD01820E0109598E07E',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/26786027D954FD05D66A965F3081891D513001B5B2487BD01820E0109598E07E',
    pathKey: 'axlbnb_fetch'
  },
  {
    chainId: 'fetchhub-4',
    address: 'ibc/D504766328F350B25FD8189529ADACB32C365EBEC92D9A719D151BFD0B016E47',
    name: 'Axelar WFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/D504766328F350B25FD8189529ADACB32C365EBEC92D9A719D151BFD0B016E47',
    pathKey: 'axlftm_fetch'
  },
  {
    chainId: 'fetchhub-4',
    address: 'ibc/5E7CFACA9194BFFC56D36F463E134B4441F72BF44F1E4640FE5BBE5291B82EFA',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/5E7CFACA9194BFFC56D36F463E134B4441F72BF44F1E4640FE5BBE5291B82EFA',
    commonKey: 'frax-wei',
    pathKey: 'frax_fetch'
  },
  {
    chainId: 314,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'Filecoin',
    symbol: 'FIL',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/filecoin.svg',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    chainId: 314,
    address: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A',
    name: 'Wrapped Filecoin',
    symbol: 'WFIL',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    address: '0xB448eC505C924944ca8B2C55EF05c299eE0781df',
    chainId: 314,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Axelar Wrapped KNC',
    symbol: 'axlKNC',
    coingeckoId: 'kyber-network-crystal',
    commonKey: 'knc-wei',
    bridgeOnly: true
  },
  {
    chainId: 314,
    address: '0xb829b68f57CC546dA7E5806A929e53bE32a4625D',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/weth.svg',
    coingeckoId: 'weth',
    bridgeOnly: true,
    commonKey: 'weth-wei'
  },
  {
    chainId: 314,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    chainId: 314,
    address: '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    bridgeOnly: true,
    commonKey: 'uusdt'
  },
  {
    chainId: 314,
    address: '0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI: 'https://docs.axelar.dev/images/assets/wbtc.svg',
    coingeckoId: 'wrapped-bitcoin',
    bridgeOnly: true,
    commonKey: 'wbtc-satoshi'
  },
  {
    chainId: 314,
    address: '0x5C7e299CF531eb66f2A1dF637d37AbB78e6200C7',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/dai.svg',
    coingeckoId: 'dai',
    bridgeOnly: true,
    commonKey: 'dai-wei'
  },
  {
    address: '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',
    chainId: 314,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    chainId: 314,
    address: '0x88DfaAABaf06f3a41D2606EA98BC8edA109AbeBb',
    name: 'Mai Stablecoin',
    symbol: 'axlWMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    chainId: 314,
    address: '0x00e1724885473B63bCE08a9f0a52F35b0979e35A',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    commonKey: 'oath-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true
  },
  {
    chainId: 314,
    address: '0x406Cde76a3fD20e48bc1E0F60651e60Ae204B040',
    name: 'Axelar Wrapped FRAX',
    symbol: 'axlFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei',
    bridgeOnly: true
  },
  {
    chainId: 314,
    address: '0x809c55916bb542c1419724022B3F0162087E3C88',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 314,
    address: '0x64D599b3d0c5f1375e5e639E98aB86298261A30B',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    bridgeOnly: true
  },
  {
    chainId: 314,
    address: '0xf3602C5A7f625181659445C8dDDde73dA15c22e3',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 314,
    address: '0x219279953d8D23520B7878447e8A6c266a51de2f',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 314,
    address: '0x5860a0bF37133f8461b2DEDe7C80e55D6bfF3721',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 314,
    address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 'gravity-bridge-3',
    address: 'ugraviton',
    name: 'Graviton',
    symbol: 'GRAV',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/grav.svg',
    coingeckoId: 'graviton',
    ibcDenom: 'ugraviton',
    pathKey: 'graviton_gravity'
  },
  {
    chainId: 'injective-1',
    address: 'inj',
    name: 'Injective',
    symbol: 'INJ',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/inj.svg',
    coingeckoId: 'injective-protocol',
    ibcDenom: 'inj',
    pathKey: 'inj_injective'
  },
  {
    chainId: 'injective-1',
    address: 'ibc/7E1AF94AD246BE522892751046F0C959B768642E5671CC3742264068D49553C0',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/7E1AF94AD246BE522892751046F0C959B768642E5671CC3742264068D49553C0',
    pathKey: 'axlusdc_injective'
  },
  {
    chainId: 'injective-1',
    address: 'ibc/65A6973F7A4013335AE5FFE623FE019A78A1FEEE9B8982985099978837D764A7',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/65A6973F7A4013335AE5FFE623FE019A78A1FEEE9B8982985099978837D764A7',
    pathKey: 'axleth_injective'
  },
  {
    chainId: 'injective-1',
    address: 'ibc/265ABC4B9F767AF45CAC6FB76E930548D835EDA3E94BC56B70582A55A73D8C90',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/265ABC4B9F767AF45CAC6FB76E930548D835EDA3E94BC56B70582A55A73D8C90',
    pathKey: 'axldai_injective'
  },
  {
    chainId: 'injective-1',
    address: 'ibc/90C6F06139D663CFD7949223D257C5B5D241E72ED61EBD12FFDDA6F068715E47',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'ibc/90C6F06139D663CFD7949223D257C5B5D241E72ED61EBD12FFDDA6F068715E47',
    pathKey: 'axlusdt_injective'
  },
  {
    chainId: 'injective-1',
    address: 'ibc/A62F794AAEC56B6828541224D91DA3E21423AB0DC4D21ECB05E4588A07BD934C',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/A62F794AAEC56B6828541224D91DA3E21423AB0DC4D21ECB05E4588A07BD934C',
    pathKey: 'axlbusd_injective'
  },
  {
    chainId: 'injective-1',
    address: 'ibc/A4FF8E161D2835BA06A7522684E874EFC91004AD0CD14E038F37940562158D73',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/A4FF8E161D2835BA06A7522684E874EFC91004AD0CD14E038F37940562158D73',
    pathKey: 'axlavax_injective'
  },
  {
    chainId: 'injective-1',
    address: 'ibc/8FF72FB47F07B4AFA8649500A168683BEFCB9EE164BD331FA597D26224D51055',
    name: 'Axelar WGLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/8FF72FB47F07B4AFA8649500A168683BEFCB9EE164BD331FA597D26224D51055',
    pathKey: 'axlglmr_injective'
  },
  {
    chainId: 'injective-1',
    address: 'ibc/7E23647941230DA0AB4ED10F599647D9BE34E1C991D0DA032B5A1522941EBA73',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/7E23647941230DA0AB4ED10F599647D9BE34E1C991D0DA032B5A1522941EBA73',
    pathKey: 'axlmatic_injective'
  },
  {
    chainId: 'injective-1',
    address: 'ibc/4C8A332AE4FDE42709649B5F9A2A336192158C4465DF74B4513F5AD0C583EA6F',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/4C8A332AE4FDE42709649B5F9A2A336192158C4465DF74B4513F5AD0C583EA6F',
    pathKey: 'axlwbtc_injective'
  },
  {
    chainId: 'injective-1',
    address: 'ibc/B877B8EF095028B807370AB5C7790CA0C328777C9FF09AA7F5436BA7FAE4A86F',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/B877B8EF095028B807370AB5C7790CA0C328777C9FF09AA7F5436BA7FAE4A86F',
    pathKey: 'axlbnb_injective'
  },
  {
    chainId: 'injective-1',
    address: 'ibc/31E8DDA49D53535F358B29CFCBED1B9224DAAFE82788C0477930DCDE231DA878',
    name: 'Axelar WFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/31E8DDA49D53535F358B29CFCBED1B9224DAAFE82788C0477930DCDE231DA878',
    pathKey: 'axlftm_injective'
  },
  {
    chainId: 'injective-1',
    address: 'ibc/3E5504815B2D69DCC32B1FF54CDAC28D7DA2C445BD29C496A83732DC1D52DB90',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/3E5504815B2D69DCC32B1FF54CDAC28D7DA2C445BD29C496A83732DC1D52DB90',
    commonKey: 'frax-wei',
    pathKey: 'frax_injective'
  },
  {
    chainId: 'irishub-1',
    address: 'iris',
    name: 'IRISnet',
    symbol: 'IRIS',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/iris.svg',
    coingeckoId: 'iris-network',
    ibcDenom: 'iris',
    pathKey: 'iris_irisnet'
  },
  {
    chainId: 'ixo-5',
    address: 'ixo',
    name: 'Impacthib',
    symbol: 'IXO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ixo.svg',
    coingeckoId: 'ixo',
    ibcDenom: 'ixo',
    pathKey: 'ixo_ixo'
  },
  {
    chainId: 'jackal-1',
    address: 'ujkl',
    name: 'Jackal',
    symbol: 'JKL',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/jkl.svg',
    coingeckoId: 'jackal-protocol',
    ibcDenom: 'ujkl',
    pathKey: 'jkl_jackal'
  },
  {
    chainId: 'juno-1',
    address: 'ujuno',
    name: 'Juno',
    symbol: 'JUNO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/juno.svg',
    coingeckoId: 'juno-network',
    ibcDenom: 'ujuno',
    pathKey: 'juno_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034',
    pathKey: 'axlusdc_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/95A45A81521EAFDBEDAEEB6DA975C02E55B414C95AD3CE50709272366A90CA17',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/95A45A81521EAFDBEDAEEB6DA975C02E55B414C95AD3CE50709272366A90CA17',
    pathKey: 'axleth_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/171E8F6687D290D378678310F9F15D367DCD245BF06184532B703A92054A8A4F',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/171E8F6687D290D378678310F9F15D367DCD245BF06184532B703A92054A8A4F',
    pathKey: 'axldai_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/B22D08F0E3D08968FB3CBEE2C1E993581A99AAAA60D0490C1AF7DCE567D5FDDA',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'ibc/B22D08F0E3D08968FB3CBEE2C1E993581A99AAAA60D0490C1AF7DCE567D5FDDA',
    pathKey: 'axlusdt_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/01D29B33757B631D6E02A4AE8A852969273E2476ED83CB3F947D4AA5DB9F151E',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/01D29B33757B631D6E02A4AE8A852969273E2476ED83CB3F947D4AA5DB9F151E',
    pathKey: 'axlbusd_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/02B88E41C96FCADA33F15642CEE961EE17A63866EDCA4098EDDB6F9C6671EB92',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/02B88E41C96FCADA33F15642CEE961EE17A63866EDCA4098EDDB6F9C6671EB92',
    pathKey: 'axlavax_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/5539E7CB6FF8FDA12AE6BF20E8862513D787BF1712296EB4AA06DD86920FFBC1',
    name: 'Axelar WGLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/5539E7CB6FF8FDA12AE6BF20E8862513D787BF1712296EB4AA06DD86920FFBC1',
    pathKey: 'axlglmr_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/C3A8C0BA97F3CD808F828E422CCBB39A5206644DF0A65FA79160E4413684EE14',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/C3A8C0BA97F3CD808F828E422CCBB39A5206644DF0A65FA79160E4413684EE14',
    pathKey: 'axlmatic_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/5EF597EA4E863132BFD3E051AC6BAA0175F00913D3256A41F11DC425C39527D6',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/5EF597EA4E863132BFD3E051AC6BAA0175F00913D3256A41F11DC425C39527D6',
    pathKey: 'axlwbtc_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/735AFF12D7AF5EEC8F4339448BBF001547AEA05CCA6F1CAA60C139AE87828EB1',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/735AFF12D7AF5EEC8F4339448BBF001547AEA05CCA6F1CAA60C139AE87828EB1',
    pathKey: 'axlbnb_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/BCA8E085B8D4D9D89D5316165E51545B826C5E034EACD6C00A7464C58F318379',
    name: 'Axelar WFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/BCA8E085B8D4D9D89D5316165E51545B826C5E034EACD6C00A7464C58F318379',
    pathKey: 'axlftm_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/4A482FA914A4B9B05801ED81C33713899F322B24F76A06F4B8FE872485EA22FF',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/4A482FA914A4B9B05801ED81C33713899F322B24F76A06F4B8FE872485EA22FF',
    pathKey: 'nusdc_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/39A90E0FA128DAE477510F0B9BE848B0D3C6D3BE2A464667B79EAD9BB847CC47',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    ibcDenom: 'ibc/39A90E0FA128DAE477510F0B9BE848B0D3C6D3BE2A464667B79EAD9BB847CC47',
    commonKey: 'sfrxeth-wei',
    pathKey: 'sfrxeth_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/1CE15165C83F70C7DB18B19C417321B02512A85BCB9FB8E553FC10070D122036',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/1CE15165C83F70C7DB18B19C417321B02512A85BCB9FB8E553FC10070D122036',
    commonKey: 'frax-wei',
    pathKey: 'frax_juno'
  },
  {
    chainId: 'juno-1',
    address: 'ibc/9DBEF73DA119E34AF557B89F6C161FCAD928AEB1DA0AA45C095F2A2E7FF038BE',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    ibcDenom: 'ibc/9DBEF73DA119E34AF557B89F6C161FCAD928AEB1DA0AA45C095F2A2E7FF038BE',
    bridgeOnly: true,
    commonKey: 'frxeth-wei',
    pathKey: 'frxeth_juno'
  },
  {
    chainId: 2222,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'Kava',
    symbol: 'KAVA',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4846.png',
    coingeckoId: 'kava'
  },
  {
    chainId: 2222,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/assets/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    chainId: 2222,
    address: '0x919C1c267BC06a7039e03fcc2eF738525769109c',
    name: 'TetherUSDt',
    symbol: 'USDt',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether'
  },
  {
    chainId: 2222,
    address: '0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b',
    name: 'Wrapped Kava',
    symbol: 'WKAVA',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/kava.svg',
    coingeckoId: 'kava'
  },
  {
    chainId: 2222,
    address: '0xa334884bF6b0A066d553D19e507315E839409e62',
    name: 'Ethos Reserve Note',
    symbol: 'ERN',
    decimals: 18,
    logoURI: 'https://docs.velodrome.finance/tokens/ERN.png',
    coingeckoId: 'ethos-reserve-note',
    commonKey: 'ern-wei',
    bridgeOnly: true
  },
  {
    chainId: 2222,
    address: '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    bridgeOnly: true,
    coingeckoId: 'tether',
    commonKey: 'uusdt'
  },
  {
    chainId: 2222,
    address: '0xb829b68f57CC546dA7E5806A929e53bE32a4625D',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    bridgeOnly: true,
    commonKey: 'weth-wei'
  },
  {
    chainId: 2222,
    address: '0x5C7e299CF531eb66f2A1dF637d37AbB78e6200C7',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    bridgeOnly: true,
    commonKey: 'dai-wei'
  },
  {
    chainId: 2222,
    address: '0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    bridgeOnly: true,
    commonKey: 'wbtc-satoshi'
  },
  {
    address: '0x5E2Cf56A562b1bDD32ec26315063074ADC420C73',
    chainId: 2222,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    address: '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',
    chainId: 2222,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    chainId: 2222,
    address: '0x88DfaAABaf06f3a41D2606EA98BC8edA109AbeBb',
    name: 'Mai Stablecoin',
    symbol: 'axlWMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    address: '0xB448eC505C924944ca8B2C55EF05c299eE0781df',
    chainId: 2222,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Kyber Network Crystal',
    symbol: 'axlKNC',
    coingeckoId: 'kyber-network-crystal',
    commonKey: 'knc-wei',
    bridgeOnly: true
  },
  {
    chainId: 2222,
    address: '0xb84df10966a5d7e1ab46d9276f55d57bd336afc7',
    name: 'Mai Stablecoin',
    symbol: 'MAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic'
  },
  {
    chainId: 2222,
    address: '0xc09c73f7b32573d178138e76c0e286ba21085c20',
    name: 'QiDao',
    symbol: 'QI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15329/small/qi.png?1620540969',
    coingeckoId: 'qi-dao'
  },
  {
    chainId: 2222,
    address: '0xE1da44C0dA55B075aE8E2e4b6986AdC76Ac77d73',
    name: 'Vara',
    symbol: 'VARA',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23836.png',
    coingeckoId: 'equilibre'
  },
  {
    chainId: 2222,
    address: '0xd86c8d4279ccafbec840c782bcc50d201f277419',
    name: 'Mare Finance',
    symbol: 'MARE',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/29288/small/mare-icon.png?1677809932',
    coingeckoId: 'mare-finance'
  },
  {
    name: 'Pinjam.Kava',
    symbol: 'PINKAV',
    address: '0xe5274e38e91b615d8822e8512a29a16ff1b9c4af',
    chainId: 2222,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/30803/small/PINKAV_Logo_%28200x200%29.png?1687406854',
    coingeckoId: 'pinjam-kava'
  },
  {
    chainId: 2222,
    address: '0xdb0e1e86b01c4ad25241b1843e407efc4d615248',
    name: 'dForce USD',
    symbol: 'USX',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/17422/small/usx_32.png?1627600920',
    coingeckoId: 'token-dforce-usd'
  },
  {
    chainId: 2222,
    address: '0x332c72dd7E77070740F01d2d35851c461585D5d0',
    name: 'LiquidDriver',
    symbol: 'axlLqdr',
    decimals: 18,
    commonKey: 'lqdr-wei',
    logoURI:
      'https://2302794922-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYQICp07j-iq-GK2MHc%2Fuploads%2F9E0dn7eOs8PLq9hq26Gv%2FIcon-PNG.png?alt=media&token=53c999ea-e4a0-43a3-9ae8-2f2d4c83f132',
    coingeckoId: 'liquiddriver',
    bridgeOnly: true
  },
  {
    chainId: 2222,
    address: '0x00e1724885473B63bCE08a9f0a52F35b0979e35A',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    commonKey: 'oath-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true
  },
  {
    chainId: 2222,
    address: '0xf7A0dd3317535eC4f4d29ADF9d620B3d8D5D5069',
    name: 'Staked ERN Vault',
    symbol: 'stERN',
    decimals: 18,
    commonKey: 'stern-wei',
    logoURI: 'https://github.com/0xsquid/assets/blob/main/images/tokens/stERN.svg?raw=true',
    coingeckoId: 'staked-ethos-reserve-note'
  },
  {
    chainId: 2222,
    address: '0xebD4A18034C78A415088DF8508f102421eD693b1',
    name: 'Axelar Wrapped DEUS',
    symbol: 'axlDEUS',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12972.png',
    coingeckoId: 'deus-finance-2',
    bridgeOnly: true,
    commonKey: 'deus-wei'
  },
  {
    chainId: 2222,
    address: '0x406Cde76a3fD20e48bc1E0F60651e60Ae204B040',
    name: 'Axelar Wrapped FRAX',
    symbol: 'axlFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei',
    bridgeOnly: true
  },
  {
    chainId: 2222,
    address: '0x809c55916bb542c1419724022B3F0162087E3C88',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 2222,
    address: '0x64D599b3d0c5f1375e5e639E98aB86298261A30B',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 2222,
    address: '0xf3602C5A7f625181659445C8dDDde73dA15c22e3',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 2222,
    address: '0x219279953d8D23520B7878447e8A6c266a51de2f',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 2222,
    address: '0x5860a0bF37133f8461b2DEDe7C80e55D6bfF3721',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 2222,
    address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 'kava_2222-10',
    address: 'ukava',
    name: 'Kava',
    symbol: 'KAVA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/kava.svg',
    coingeckoId: 'kava',
    ibcDenom: 'ukava',
    pathKey: 'kava_kava'
  },
  {
    chainId: 'kava_2222-10',
    address: 'erc20/tether/usdt',
    name: 'Tether',
    symbol: 'USDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    ibcDenom: 'erc20/tether/usdt',
    pathKey: 'usdt_kava'
  },
  {
    chainId: 'kichain-2',
    address: 'xki',
    name: 'Ki',
    symbol: 'XKI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/xki.svg',
    coingeckoId: 'lvn',
    ibcDenom: 'xki',
    pathKey: 'xki_ki'
  },
  {
    chainId: 'kichain-2',
    address: 'ibc/E1E3674A0E4E1EF9C69646F9AF8D9497173821826074622D831BAB73CCB99A2D',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/E1E3674A0E4E1EF9C69646F9AF8D9497173821826074622D831BAB73CCB99A2D',
    pathKey: 'axlusdc_ki'
  },
  {
    chainId: 'kichain-2',
    address: 'ibc/9B68CC79EFF12D25AF712EB805C5062B8F97B2CCE5F3FE55B107EE03095514A3',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/9B68CC79EFF12D25AF712EB805C5062B8F97B2CCE5F3FE55B107EE03095514A3',
    pathKey: 'axleth_ki'
  },
  {
    chainId: 'kichain-2',
    address: 'ibc/B5172730CC62ACC6BCB4853D9B6F2C723438A6D7EA9009F44D8096D41FF04166',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/B5172730CC62ACC6BCB4853D9B6F2C723438A6D7EA9009F44D8096D41FF04166',
    pathKey: 'axldai_ki'
  },
  {
    chainId: 'kichain-2',
    address: 'ibc/386A4031D68DE6370B85F9FF7E89CEF8DE7CDE01CC193CBD87BD3ED60F6662CE',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'ibc/386A4031D68DE6370B85F9FF7E89CEF8DE7CDE01CC193CBD87BD3ED60F6662CE',
    pathKey: 'axlusdt_ki'
  },
  {
    chainId: 'kichain-2',
    address: 'ibc/D51641D8F6C96ADE0858FC97F9F002F8436CB3E2EE9B08DAE04E1D942349C777',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/D51641D8F6C96ADE0858FC97F9F002F8436CB3E2EE9B08DAE04E1D942349C777',
    pathKey: 'axlbusd_ki'
  },
  {
    chainId: 'kichain-2',
    address: 'ibc/496812EE3F92871345EAFC70A2E747D30B13B1D99DB19538076F954DEF4B5B1D',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/496812EE3F92871345EAFC70A2E747D30B13B1D99DB19538076F954DEF4B5B1D',
    pathKey: 'axlavax_ki'
  },
  {
    chainId: 'kichain-2',
    address: 'ibc/927DA5BD557C059E3FA6816B2023B24EE4C1B149CDBFBC70A771F8C425DBB91A',
    name: 'Axelar WGLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/927DA5BD557C059E3FA6816B2023B24EE4C1B149CDBFBC70A771F8C425DBB91A',
    pathKey: 'axlglmr_ki'
  },
  {
    chainId: 'kichain-2',
    address: 'ibc/45368D217CE1F76A1214FA6F1F31493B5F127793E6AB4873B39A81A8CE21A18E',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/45368D217CE1F76A1214FA6F1F31493B5F127793E6AB4873B39A81A8CE21A18E',
    pathKey: 'axlmatic_ki'
  },
  {
    chainId: 'kichain-2',
    address: 'ibc/911B721F15A40ABB29636CBF8AE630076DDF62841ACE7E6D879405CA8870CEA2',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/911B721F15A40ABB29636CBF8AE630076DDF62841ACE7E6D879405CA8870CEA2',
    pathKey: 'axlwbtc_ki'
  },
  {
    chainId: 'kichain-2',
    address: 'ibc/F4B1551A3470D93A725460F109FB57990702B703790D8A21C7DC66AEF3BACBF4',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/F4B1551A3470D93A725460F109FB57990702B703790D8A21C7DC66AEF3BACBF4',
    pathKey: 'axlbnb_ki'
  },
  {
    chainId: 'kichain-2',
    address: 'ibc/CC7B0778EABFED87BA0B91C38A9127524DB191BFD6C230FA1862456BE04424A4',
    name: 'Axelar WFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/CC7B0778EABFED87BA0B91C38A9127524DB191BFD6C230FA1862456BE04424A4',
    pathKey: 'axlftm_ki'
  },
  {
    chainId: 'kichain-2',
    address: 'ibc/5F659691870E909D0F48F3B12D06DF64854D711B4B5927DC2352175A972197E5',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/5F659691870E909D0F48F3B12D06DF64854D711B4B5927DC2352175A972197E5',
    commonKey: 'frax-wei',
    pathKey: 'frax_ki'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ukuji',
    name: 'Kuji',
    symbol: 'KUJI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/kuji.svg',
    coingeckoId: 'kujira',
    ibcDenom: 'ukuji',
    pathKey: 'kuji_kujira',
    commonKey: 'ukuji'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/27394fb092d2eccd56123c74f36e4c1f926001ceada9ca97ea622b25f41e5eb2',
    name: 'ATOM',
    symbol: 'ATOM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/atom.svg',
    coingeckoId: 'atom',
    ibcDenom: 'ibc/27394fb092d2eccd56123c74f36e4c1f926001ceada9ca97ea622b25f41e5eb2',
    pathKey: 'atom_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
    pathKey: 'axlusdc_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7',
    pathKey: 'axleth_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/3914BDEF46F429A26917E4D8D434620EC4817DC6B6E68FB327E190902F1E9242',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/3914BDEF46F429A26917E4D8D434620EC4817DC6B6E68FB327E190902F1E9242',
    pathKey: 'axldai_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045',
    pathKey: 'axlusdt_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/65CD60D7E37EF830BC6B6A6DF4E3E3884A96C0905A7D271C48DC0440B1989EC7',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/65CD60D7E37EF830BC6B6A6DF4E3E3884A96C0905A7D271C48DC0440B1989EC7',
    pathKey: 'axlbusd_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2',
    pathKey: 'axlavax_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/C8D63703F5805CE6A2B20555139CF6ED9CDFA870389648EB08D688B94B0AE2C1',
    name: 'Axelar WGLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/C8D63703F5805CE6A2B20555139CF6ED9CDFA870389648EB08D688B94B0AE2C1',
    pathKey: 'axlglmr_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/A64467480BBE4CCFC3CF7E25AD1446AA9BDBD4F5BCB9EF6038B83D6964C784E6',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/A64467480BBE4CCFC3CF7E25AD1446AA9BDBD4F5BCB9EF6038B83D6964C784E6',
    pathKey: 'axlmatic_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/301DAF9CB0A9E247CD478533EF0E21F48FF8118C4A51F77C8BC3EB70E5566DBC',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/301DAF9CB0A9E247CD478533EF0E21F48FF8118C4A51F77C8BC3EB70E5566DBC',
    pathKey: 'axlwbtc_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833',
    pathKey: 'axlbnb_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/E67ADA2204A941CD4743E70771BA08E24885E1ADD6FD140CE1F9E0FEBB68C6B2',
    name: 'Axelar WFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/E67ADA2204A941CD4743E70771BA08E24885E1ADD6FD140CE1F9E0FEBB68C6B2',
    pathKey: 'axlftm_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/12B075C6C552060240E92A4A215CAF4DB0F1CA98F90897AB30282B9A15842595',
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    coingeckoId: 'filecoin',
    commonKey: 'wfil-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/12B075C6C552060240E92A4A215CAF4DB0F1CA98F90897AB30282B9A15842595',
    pathKey: 'axlfil_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/C01154C2547F4CB10A985EA78E7CD4BA891C1504360703A37E1D7043F06B5E1F',
    name: 'Axelar',
    symbol: 'AXL',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    coingeckoId: 'axelar',
    ibcDenom: 'ibc/C01154C2547F4CB10A985EA78E7CD4BA891C1504360703A37E1D7043F06B5E1F',
    pathKey: 'axl_kujira',
    commonKey: 'uaxl'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9',
    pathKey: 'nusdc_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/579194AD6EB1B02FE30D7031EF284C1BB7B272EE5F7700462CD8B3DECB542175',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    ibcDenom: 'ibc/579194AD6EB1B02FE30D7031EF284C1BB7B272EE5F7700462CD8B3DECB542175',
    commonKey: 'sfrxeth-wei',
    pathKey: 'sfrxeth_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/7B11FE7D6385B46B9F3598B298B81A773CB20A8BA12001D87A78580314218364',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/7B11FE7D6385B46B9F3598B298B81A773CB20A8BA12001D87A78580314218364',
    commonKey: 'frax-wei',
    pathKey: 'frax_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/96179F5B44CCC15E03AB43D7118E714B4D5CE8F187F7D8A60F2A514299761EA9',
    name: 'Axelar Wrapped ARB',
    symbol: 'axlARB',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/arb.svg',
    coingeckoId: 'arbitrum',
    commonKey: 'arb-wei',
    ibcDenom: 'ibc/96179F5B44CCC15E03AB43D7118E714B4D5CE8F187F7D8A60F2A514299761EA9',
    pathKey: 'axlarb_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/B572E6F30E7C33D78A50D8B4E973A9C118C30F848DF31A95FAA5E4C7450A8BD0',
    name: 'Axelar wstETH',
    symbol: 'axl-wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    commonKey: 'wsteth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/B572E6F30E7C33D78A50D8B4E973A9C118C30F848DF31A95FAA5E4C7450A8BD0',
    pathKey: 'axlwsteth_kujira'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/6EC52E4E4105A3647FE4626767F6E169DBC56CE99862DF62935CD273F3F92CD1',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    ibcDenom: 'ibc/6EC52E4E4105A3647FE4626767F6E169DBC56CE99862DF62935CD273F3F92CD1',
    pathKey: 'fxs_kujira',
    commonKey: 'fxs-wei'
  },
  {
    chainId: 'kaiyo-1',
    address: 'ibc/109344A54219780F810CF9EFC1FE0EC1209E66F27B2B6F9C7187521EA62D0A9B',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    ibcDenom: 'ibc/109344A54219780F810CF9EFC1FE0EC1209E66F27B2B6F9C7187521EA62D0A9B',
    bridgeOnly: true,
    commonKey: 'frxeth-wei',
    pathKey: 'frxeth_kujira'
  },
  {
    chainId: 'likecoin-mainnet-2',
    address: 'like',
    name: 'LikeCoin',
    symbol: 'LIKE',
    decimals: 9,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/like.svg',
    coingeckoId: 'likecoin',
    ibcDenom: 'like',
    pathKey: 'like_likecoin'
  },
  {
    chainId: 59144,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum'
  },
  {
    name: 'USDCoin',
    address: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
    symbol: 'USDC',
    decimals: 6,
    chainId: 59144,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/assets/usdc.svg',
    coingeckoId: 'usd-coin'
  },
  {
    chainId: 59144,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/assets/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    chainId: 59144,
    address: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
    name: 'Wrapped ETH',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth'
  },
  {
    chainId: 59144,
    address: '0x0B1A02A7309dFbfAD1Cd4adC096582C87e8A3Ac1',
    name: 'Horizon',
    symbol: 'HZN',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/31156/small/Circle_logo_black_%281%29.png?1691040942',
    coingeckoId: 'horizon-2',
    commonKey: 'hzn-wei'
  },
  {
    chainId: 59144,
    address: '0x00e1724885473B63bCE08a9f0a52F35b0979e35A',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    commonKey: 'oath-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true
  },
  {
    chainId: 59144,
    address: '0xf7A0dd3317535eC4f4d29ADF9d620B3d8D5D5069',
    name: 'Staked ERN Vault',
    symbol: 'stERN',
    decimals: 18,
    commonKey: 'stern-wei',
    logoURI: 'https://github.com/0xsquid/assets/blob/main/images/tokens/stERN.svg?raw=true',
    coingeckoId: 'staked-ethos-reserve-note',
    bridgeOnly: true
  },
  {
    chainId: 59144,
    address: '0x91c415FEcD651F11D24aC4b72Ed08dbEb9868D43',
    name: 'Gridex',
    symbol: 'GDX',
    decimals: 18,
    commonKey: 'gdx-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23941.png',
    coingeckoId: 'gdx-token',
    bridgeOnly: true
  },
  {
    chainId: 59144,
    address: '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true
  },
  {
    address: '0xb829b68f57CC546dA7E5806A929e53bE32a4625D',
    chainId: 59144,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/weth.svg',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true
  },
  {
    address: '0xB448eC505C924944ca8B2C55EF05c299eE0781df',
    chainId: 59144,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Axelar Wrapped KNC',
    symbol: 'axlKNC',
    coingeckoId: 'kyber-network-crystal',
    commonKey: 'knc-wei',
    bridgeOnly: true
  },
  {
    address: '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',
    chainId: 59144,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    address: '0x5C7e299CF531eb66f2A1dF637d37AbB78e6200C7',
    chainId: 59144,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/dai.svg',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true
  },
  {
    chainId: 59144,
    address: '0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI: 'https://docs.axelar.dev/images/assets/wbtc.svg',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true
  },
  {
    chainId: 59144,
    address: '0x88DfaAABaf06f3a41D2606EA98BC8edA109AbeBb',
    name: 'Mai Stablecoin',
    symbol: 'axlWMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    address: '0x5E2Cf56A562b1bDD32ec26315063074ADC420C73',
    chainId: 59144,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    address: '0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396',
    chainId: 59144,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ovn.svg',
    name: 'OVN',
    symbol: 'OVN',
    coingeckoId: '',
    bridgeOnly: true,
    commonKey: 'ovn-wei'
  },
  {
    chainId: 59144,
    address: '0x41b94c5867f7F6217C9a30520Cb3e793B1ee1b97',
    name: 'axlTIA',
    symbol: 'axlTIA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/celestia.svg',
    coingeckoId: 'celestia',
    commonKey: 'utia',
    bridgeOnly: true
  },
  {
    chainId: 59144,
    address: '0x9cfB13E6c11054ac9fcB92BA89644F30775436e4',
    name: 'Axelar Wrapped wstETH',
    symbol: 'axl-wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    bridgeOnly: true,
    commonKey: 'wsteth-wei'
  },
  {
    chainId: 59144,
    address: '0x4f74ca4a686203a5D4eBF6E8868c5eBC450bf283',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    commonKey: 'sfrxeth-wei'
  },
  {
    chainId: 59144,
    address: '0xf3602C5A7f625181659445C8dDDde73dA15c22e3',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 59144,
    address: '0x406Cde76a3fD20e48bc1E0F60651e60Ae204B040',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei'
  },
  {
    chainId: 59144,
    address: '0x219279953d8D23520B7878447e8A6c266a51de2f',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 59144,
    address: '0x5860a0bF37133f8461b2DEDe7C80e55D6bfF3721',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 59144,
    address: '0x809c55916bb542c1419724022B3F0162087E3C88',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 59144,
    address: '0x64D599b3d0c5f1375e5e639E98aB86298261A30B',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 59144,
    address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 'lum-network-1',
    address: 'lum',
    name: 'Lum',
    symbol: 'LUM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/lum.svg',
    coingeckoId: 'lum-network',
    ibcDenom: 'lum',
    pathKey: 'lum_lum'
  },
  {
    chainId: 5000,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'MNT',
    symbol: 'MNT',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/30980/small/token-logo.png?1689320029',
    coingeckoId: 'mantle'
  },
  {
    chainId: 5000,
    address: '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111',
    name: 'Mantle Bridged ETH',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum'
  },
  {
    name: 'USDCoin',
    address: '0x09bc4e0d864854c6afb6eb9a9cdf58ac190d0df9',
    symbol: 'USDC',
    decimals: 6,
    chainId: 5000,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/assets/usdc.svg',
    coingeckoId: 'usd-coin'
  },
  {
    name: 'Tether USD',
    address: '0x201eba5cc46d216ce6dc03f6a759e8e766e956ae',
    symbol: 'USDT',
    decimals: 6,
    chainId: 5000,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether'
  },
  {
    chainId: 5000,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/assets/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    chainId: 5000,
    address: '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',
    name: 'Wrapped MNT',
    symbol: 'WMNT',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wmnt.svg',
    coingeckoId: 'mantle'
  },
  {
    chainId: 5000,
    address: '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true
  },
  {
    address: '0xb829b68f57CC546dA7E5806A929e53bE32a4625D',
    chainId: 5000,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/weth.svg',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true
  },
  {
    address: '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',
    chainId: 5000,
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17799.png',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    address: '0x5C7e299CF531eb66f2A1dF637d37AbB78e6200C7',
    chainId: 5000,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/dai.svg',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true
  },
  {
    chainId: 5000,
    address: '0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI: 'https://docs.axelar.dev/images/assets/wbtc.svg',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true
  },
  {
    chainId: 5000,
    address: '0x88DfaAABaf06f3a41D2606EA98BC8edA109AbeBb',
    name: 'Mai Stablecoin',
    symbol: 'axlWMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    address: '0x5E2Cf56A562b1bDD32ec26315063074ADC420C73',
    chainId: 5000,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    chainId: 5000,
    address: '0xa334884bF6b0A066d553D19e507315E839409e62',
    name: 'Ethos Reserve Note',
    symbol: 'ERN',
    decimals: 18,
    logoURI: 'https://docs.velodrome.finance/tokens/ERN.png',
    coingeckoId: 'ethos-reserve-note',
    commonKey: 'ern-wei',
    bridgeOnly: true
  },
  {
    chainId: 5000,
    address: '0xf7A0dd3317535eC4f4d29ADF9d620B3d8D5D5069',
    name: 'Staked ERN Vault',
    symbol: 'stERN',
    decimals: 18,
    commonKey: 'stern-wei',
    logoURI: 'https://github.com/0xsquid/assets/blob/main/images/tokens/stERN.svg?raw=true',
    coingeckoId: 'staked-ethos-reserve-note'
  },
  {
    chainId: 5000,
    address: '0x00e1724885473B63bCE08a9f0a52F35b0979e35A',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    commonKey: 'oath-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true
  },
  {
    chainId: 5000,
    address: '0xB448eC505C924944ca8B2C55EF05c299eE0781df',
    name: 'Axelar Wrapped KNC',
    symbol: 'axlKNC',
    decimals: 18,
    logoURI:
      'https://storage.googleapis.com/ks-setting-1d682dca/538cbc06-ef8a-4acc-ac38-7f41d75f1666.png',
    coingeckoId: 'kyber-network-crystal',
    bridgeOnly: true,
    commonKey: 'knc-wei'
  },
  {
    chainId: 5000,
    address: '0x406Cde76a3fD20e48bc1E0F60651e60Ae204B040',
    name: 'Axelar Wrapped FRAX',
    symbol: 'axlFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei',
    bridgeOnly: true
  },
  {
    name: 'PENDLE',
    symbol: 'PENDLE',
    address: '0xd27B18915e7acc8FD6Ac75DB6766a80f8D2f5729',
    chainId: 5000,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/fusionx-finance/tokens/main/images/5000/0xd27b18915e7acc8fd6ac75db6766a80f8d2f5729.png'
  },
  {
    chainId: 5000,
    address: '0x9cfB13E6c11054ac9fcB92BA89644F30775436e4',
    name: 'Axelar Wrapped wstETH',
    symbol: 'axl-wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    bridgeOnly: true,
    commonKey: 'wsteth-wei'
  },
  {
    chainId: 5000,
    address: '0x4f74ca4a686203a5D4eBF6E8868c5eBC450bf283',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    commonKey: 'sfrxeth-wei'
  },
  {
    chainId: 5000,
    address: '0xf3602C5A7f625181659445C8dDDde73dA15c22e3',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 5000,
    address: '0x219279953d8D23520B7878447e8A6c266a51de2f',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 5000,
    address: '0x5860a0bF37133f8461b2DEDe7C80e55D6bfF3721',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 5000,
    address: '0x809c55916bb542c1419724022B3F0162087E3C88',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 5000,
    address: '0x64D599b3d0c5f1375e5e639E98aB86298261A30B',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 5000,
    address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 'mars-1',
    address: 'umars',
    name: 'Mars Protocol',
    symbol: 'MARS',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/mars.svg',
    coingeckoId: 'mars-protocol',
    ibcDenom: 'umars',
    pathKey: 'umars_mars'
  },
  {
    chainId: 'migaloo-1',
    address: 'uwhale',
    name: 'Whale',
    symbol: 'WHALE',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/whale.svg',
    coingeckoId: 'white-whale',
    ibcDenom: 'uwhale',
    pathKey: 'uwhale_migaloo'
  },
  {
    chainId: 'migaloo-1',
    address: 'ibc/BC5C0BAFD19A5E4133FDA0F3E04AE1FBEE75A4A226554B2CBB021089FF2E1F8A',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/BC5C0BAFD19A5E4133FDA0F3E04AE1FBEE75A4A226554B2CBB021089FF2E1F8A',
    pathKey: 'nusdc_migaloo'
  },
  {
    address: '0x5Ac3aD1acC0A3EFd6fB89791967656128e86d8C5',
    chainId: 1284,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Kyber Network Crystal',
    symbol: 'axlKNC',
    coingeckoId: 'kyber-network-crystal',
    commonKey: 'knc-wei',
    bridgeOnly: true
  },
  {
    chainId: 1284,
    name: 'USD Coin | Wormhole',
    address: '0x931715FEE2d06333043d11F658C8CE934aC61D0c',
    symbol: 'USDC.wh',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/stellaswap/assets/main/tokenlist/0x931715FEE2d06333043d11F658C8CE934aC61D0c/logo.png',
    coingeckoId: 'usd-coin'
  },
  {
    chainId: 1284,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'Moonbeam',
    symbol: 'GLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'moonbeam',
    commonKey: 'wglmr-wei'
  },
  {
    chainId: 1284,
    address: '0xAcc15dC74880C9944775448304B263D191c6077F',
    name: 'Wrapped GLMR',
    symbol: 'WGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei'
  },
  {
    chainId: 1284,
    address: '0xCa01a1D0993565291051daFF390892518ACfAD3A',
    name: 'Axelar USD Coin',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    name: 'StellaSwap',
    address: '0x0E358838ce72d5e61E0018a2ffaC4bEC5F4c88d2',
    symbol: 'STELLA',
    decimals: 18,
    chainId: 1284,
    logoURI:
      'https://raw.githubusercontent.com/stellaswap/assets/main/tokenlist/0x0E358838ce72d5e61E0018a2ffaC4bEC5F4c88d2/logo.png',
    coingeckoId: 'stellaswap'
  },
  {
    name: 'Wrapped Ether | Wormhole',
    address: '0xab3f0245B83feB11d15AAffeFD7AD465a59817eD',
    symbol: 'WETH.wh',
    decimals: 18,
    chainId: 1284,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth'
  },
  {
    name: 'Wrapped BTC | Wormhole',
    address: '0xE57eBd2d67B462E9926e04a8e33f01cD0D64346D',
    symbol: 'WBTC.wh',
    decimals: 8,
    chainId: 1284,
    logoURI:
      'https://raw.githubusercontent.com/stellaswap/assets/main/tokenlist/0xE57eBd2d67B462E9926e04a8e33f01cD0D64346D/logo.png',
    coingeckoId: 'wrapped-bitcoin'
  },
  {
    chainId: 1284,
    address: '0xbFE3Acdca835bB60A6B51Ee6B947779A02eCE911',
    name: 'Mai Stablecoin',
    symbol: 'axlWMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    chainId: 1284,
    address: '0xDFd74aF792bC6D45D1803F425CE62Dd16f8Ae038',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    decimals: 6,
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true
  },
  {
    name: 'Moonwell Artemis',
    address: '0x511aB53F793683763E5a8829738301368a2411E3',
    symbol: 'WELL',
    decimals: 18,
    chainId: 1284,
    logoURI:
      'https://raw.githubusercontent.com/stellaswap/assets/main/tokenlist/0x511aB53F793683763E5a8829738301368a2411E3/logo.png',
    coingeckoId: 'bitwell-token'
  },
  {
    chainId: 1284,
    name: 'Tether USD',
    address: '0xffffffffea09fb06d082fd1275cd48b191cbcd1d',
    symbol: 'xcUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether'
  },
  {
    chainId: 1284,
    name: 'Frax',
    address: '0x322e86852e492a7ee17f28a78c663da38fb33bfb',
    symbol: 'Frax',
    decimals: 18,
    logoURI: 'https://moonscan.io/token/images/fraxfinancemb_32.png',
    coingeckoId: 'frax'
  },
  {
    name: 'xcDOT',
    address: '0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080',
    symbol: 'xcDOT',
    decimals: 10,
    chainId: 1284,
    logoURI:
      'https://raw.githubusercontent.com/stellaswap/assets/main/tokenlist/0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080/logo.png',
    coingeckoId: 'xcdot',
    commonKey: 'dot-planck'
  },
  {
    name: 'Acala Dollar',
    address: '0xfFfFFFFF52C56A9257bB97f4B2b6F7B2D624ecda',
    symbol: 'xcaUSD',
    decimals: 12,
    chainId: 1284,
    logoURI:
      'https://raw.githubusercontent.com/stellaswap/assets/main/tokenlist/0xfFfFFFFF52C56A9257bB97f4B2b6F7B2D624ecda/logo.png',
    coingeckoId: 'acala-dollar'
  },
  {
    name: 'Deuterium',
    address: '0xc806B0600cbAfA0B197562a9F7e3B9856866E9bF',
    symbol: 'D2O',
    decimals: 18,
    chainId: 1284,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23529.png',
    coingeckoId: 'dam-finance'
  },
  {
    name: 'xcRMRK',
    address: '0xECf2ADafF1De8A512f6e8bfe67a2C836EDb25Da3',
    symbol: 'xcRMRK',
    decimals: 10,
    chainId: 1284,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12140.png',
    coingeckoId: 'rmrk'
  },
  {
    name: 'Raresama POOP',
    address: '0xFFfffFFecB45aFD30a637967995394Cc88C0c194',
    symbol: 'POOP',
    decimals: 18,
    chainId: 1284,
    logoURI:
      'https://raw.githubusercontent.com/stellaswap/assets/main/tokenlist/0xFFfffFFecB45aFD30a637967995394Cc88C0c194/logo.png',
    coingeckoId: 'poochain'
  },
  {
    name: 'USD Coin - Nomad',
    address: '0x8f552a71efe5eefc207bf75485b356a0b3f01ec9',
    symbol: 'USDC | Nomad',
    decimals: 6,
    chainId: 1284,
    logoURI:
      'https://raw.githubusercontent.com/stellaswap/assets/main/tokenlist/0x8f552a71efe5eefc207bf75485b356a0b3f01ec9/logo.png',
    coingeckoId: 'usd-coin-nomad'
  },
  {
    address: '0x467719aD09025FcC6cF6F8311755809d45a5E5f3',
    chainId: 1284,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    address: '0x6A7b717aE5Ed65F85BA25403D5063D368239828e',
    chainId: 1284,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    address: '0xcd3b51d98478d53f4515a306be565c6eebef1d58',
    chainId: 1284,
    decimals: 18,
    name: 'Beamswap',
    symbol: 'GLINT',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17035.png',
    coingeckoId: 'beamswap'
  },
  {
    chainId: 1284,
    address: '0xd20523b39fAF1D6e9023a4D6085f87B7b0DE7926',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true,
    commonKey: 'oath-wei'
  },
  {
    chainId: 1284,
    address: '0x61C82805453a989E99B544DFB7031902e9bac448',
    name: 'Axelar Wrapped FRAX',
    symbol: 'axlFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei',
    bridgeOnly: true
  },
  {
    chainId: 1284,
    address: '0xffffffffb3229c8e7657eabea704d5e75246e544',
    name: 'OriginTrail Parachain Token',
    symbol: 'xcOTP',
    decimals: 12,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2467.png',
    coingeckoId: ''
  },
  {
    chainId: 1284,
    address: '0xed80fef95392bb8c0e29cf75be356e491d0d7661',
    name: 'OriginTrail',
    symbol: 'xcTRAC',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2467.png',
    coingeckoId: 'origintrail'
  },
  {
    chainId: 1284,
    address: '0x010cddfA5518f74c43Efe911db29Af71b44b4E1C',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 1284,
    address: '0xF7C79FfDa0d13b68081761BB0a5a66cFC48D97f5',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 1284,
    address: '0x481Fbf0d866b777e817bbC3f96970B44fc929Ba7',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 1284,
    address: '0xFA3fd4CDAf85f65849A13a6Af9c3e5c20f71aD60',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 1284,
    address: '0x151904806a266EEe52700E195D2937891fb8eD59',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 1284,
    address: '0x29C795559e4Db87054Ba70fafC454214c20aDbD4',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 'neutron-1',
    address: 'untrn',
    name: 'Neutron',
    symbol: 'NTRN',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ntrn.svg',
    coingeckoId: 'neutron-3',
    ibcDenom: 'untrn',
    pathKey: 'ntrn_neutron'
  },
  {
    chainId: 'neutron-1',
    address: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
    name: 'ATOM',
    symbol: 'ATOM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/atom.svg',
    coingeckoId: 'cosmos',
    ibcDenom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
    pathKey: 'atom_neutron'
  },
  {
    chainId: 'neutron-1',
    address: 'ibc/C0E66D1C81D8AAF0E6896E05190FDFBC222367148F86AC3EA679C28327A763CD',
    name: 'AXL',
    symbol: 'AXL',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    coingeckoId: 'axelar',
    ibcDenom: 'ibc/C0E66D1C81D8AAF0E6896E05190FDFBC222367148F86AC3EA679C28327A763CD',
    pathKey: 'axl_neutron',
    commonKey: 'uaxl'
  },
  {
    chainId: 'neutron-1',
    address: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
    pathKey: 'axlusdc_neutron'
  },
  {
    chainId: 'neutron-1',
    address: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
    name: 'Wrapped staked ETH',
    symbol: 'wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    commonKey: 'wsteth-wei',
    ibcDenom: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
    pathKey: 'wsteth_neutron'
  },
  {
    chainId: 'neutron-1',
    address: 'ibc/4D04085167777659C11784A356D6B0D13D5C7F0CE77F7DB1152FE03A2DE2CBF2',
    name: 'Axelar wstETH',
    symbol: 'axl-wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    commonKey: 'wsteth-wei',
    ibcDenom: 'ibc/4D04085167777659C11784A356D6B0D13D5C7F0CE77F7DB1152FE03A2DE2CBF2',
    pathKey: 'axlwsteth_neutron'
  },
  {
    chainId: 'neutron-1',
    address: 'ibc/A585C2D15DCD3B010849B453A2CFCB5E213208A5AB665691792684C26274304D',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    ibcDenom: 'ibc/A585C2D15DCD3B010849B453A2CFCB5E213208A5AB665691792684C26274304D',
    pathKey: 'axleth_neutron'
  },
  {
    chainId: 'neutron-1',
    address: 'ibc/B559A80D62249C8AA07A380E2A2BEA6E5CA9A6F079C912C3A9E9B494105E4F81',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/B559A80D62249C8AA07A380E2A2BEA6E5CA9A6F079C912C3A9E9B494105E4F81',
    pathKey: 'nusdc_neutron'
  },
  {
    chainId: 'neutron-1',
    address: 'ibc/59034348F9F2DBA4EAE6621D9DDA9ADF190F60BDDDD2DC99E226F800886F70B5',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/59034348F9F2DBA4EAE6621D9DDA9ADF190F60BDDDD2DC99E226F800886F70B5',
    commonKey: 'frax-wei',
    pathKey: 'frax_neutron'
  },
  {
    chainId: 'noble-1',
    address: 'uusdc',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'uusdc',
    pathKey: 'nusdc_noble'
  },
  {
    chainId: 'pirin-1',
    address: 'unls',
    name: 'Nolus',
    symbol: 'NLS',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27307.png',
    coingeckoId: 'nolus',
    ibcDenom: 'unls',
    pathKey: 'nls_nolus'
  },
  {
    chainId: 'pirin-1',
    address: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
    name: 'Osmosis',
    symbol: 'OSMO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/osmo.svg',
    coingeckoId: 'osmosis',
    ibcDenom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
    pathKey: 'osmo_nolus'
  },
  {
    chainId: 'pirin-1',
    address: 'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1',
    name: 'Stride Osmo',
    symbol: 'stOSMO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stosmo.svg',
    coingeckoId: 'stride-staked-osmo',
    ibcDenom: 'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1',
    pathKey: 'stosmo_nolus'
  },
  {
    chainId: 'pirin-1',
    address: 'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
    name: 'ATOM',
    symbol: 'ATOM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/atom.svg',
    coingeckoId: 'cosmos',
    ibcDenom: 'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
    pathKey: 'atom_nolus'
  },
  {
    chainId: 'pirin-1',
    address: 'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8',
    name: 'Stride Atom',
    symbol: 'stATOM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/statom.svg',
    coingeckoId: 'stride-staked-atom',
    ibcDenom: 'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8',
    pathKey: 'statom_nolus'
  },
  {
    chainId: 'pirin-1',
    address: 'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C',
    name: 'Axelar ETH',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    ibcDenom: 'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C',
    pathKey: 'axleth_nolus'
  },
  {
    chainId: 'pirin-1',
    address: 'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221',
    name: 'Axelar WBTC',
    symbol: 'WBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    ibcDenom: 'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221',
    pathKey: 'axlwbtc_nolus'
  },
  {
    chainId: 'pirin-1',
    address: 'ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459',
    name: 'Akash Network',
    symbol: 'AKT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/akt.svg',
    coingeckoId: 'akash-network',
    ibcDenom: 'ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459',
    pathKey: 'akt_nolus'
  },
  {
    chainId: 'pirin-1',
    address: 'ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717',
    name: 'Axelar',
    symbol: 'AXL',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    coingeckoId: 'axelar',
    ibcDenom: 'ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717',
    pathKey: 'axl_nolus',
    commonKey: 'uaxl'
  },
  {
    chainId: 'pirin-1',
    address: 'ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C',
    name: 'Juno',
    symbol: 'JUNO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/juno.svg',
    coingeckoId: 'juno-network',
    ibcDenom: 'ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C',
    pathKey: 'juno_nolus'
  },
  {
    chainId: 'pirin-1',
    address: 'ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE',
    name: 'Evmos',
    symbol: 'EVMOS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/evmos.svg',
    coingeckoId: 'evmos',
    ibcDenom: 'ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE',
    pathKey: 'evmos_nolus'
  },
  {
    chainId: 'pirin-1',
    address: 'ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865',
    name: 'Stake ATOM',
    symbol: 'stkATOM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stkatom.svg',
    coingeckoId: 'stkatom',
    ibcDenom: 'ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865',
    pathKey: 'stkuatom_nolus'
  },
  {
    chainId: 'pirin-1',
    address: 'ibc/F5FABF52B54E65064B57BF6DBD8E5FAD22CEE9F4B8A57ADBB20CCD0173AA72A4',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/F5FABF52B54E65064B57BF6DBD8E5FAD22CEE9F4B8A57ADBB20CCD0173AA72A4',
    pathKey: 'nusdc_nolus'
  },
  {
    chainId: 'omniflixhub-1',
    address: 'uflix',
    name: 'OmniFlix Network',
    symbol: 'FLIX',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/flix.svg',
    coingeckoId: 'omniflix-network',
    ibcDenom: 'uflix',
    pathKey: 'uflix_omniflixhub'
  },
  {
    chainId: 10,
    address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
    name: 'USD Coin (Bridged from Ethereum)',
    symbol: 'USDC.e',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin'
  },
  {
    chainId: 10,
    address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin'
  },
  {
    chainId: 10,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum'
  },
  {
    chainId: 10,
    address: '0x4200000000000000000000000000000000000006',
    name: 'Wrapped Ether',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://ethereum-optimism.github.io/data/WETH/logo.png',
    coingeckoId: 'weth'
  },
  {
    chainId: 10,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    chainId: 10,
    address: '0x2e3d870790dc77a83dd1d18184acc7439a53f475',
    name: 'FRAX',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax'
  },
  {
    address: '0xB448eC505C924944ca8B2C55EF05c299eE0781df',
    chainId: 10,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Axelar Wrapped KNC',
    symbol: 'axlKNC',
    coingeckoId: 'kyber-network-crystal',
    commonKey: 'knc-wei',
    bridgeOnly: true
  },
  {
    chainId: 10,
    address: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether'
  },
  {
    chainId: 10,
    address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai'
  },
  {
    chainId: 10,
    address: '0x4200000000000000000000000000000000000042',
    name: 'Optimism',
    symbol: 'OP',
    decimals: 18,
    logoURI: 'https://ethereum-optimism.github.io/data/OP/logo.png',
    commonKey: 'op-wei',
    coingeckoId: 'optimism'
  },
  {
    chainId: 10,
    address: '0x68f180fcce6836688e9084f035309e29bf0a2095',
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    decimals: 8,
    logoURI: 'https://ethereum-optimism.github.io/data/WBTC/logo.svg',
    coingeckoId: 'wrapped-bitcoin'
  },
  {
    chainId: 10,
    address: '0xc40f949f8a4e094d1b49a23ea9241d289b7b2819',
    name: 'LUSD Stablecoin',
    symbol: 'LUSD',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9566.png',
    coingeckoId: 'liquity-usd'
  },
  {
    chainId: 10,
    address: '0xc5b001dc33727f8f26880b184090d3e252470d45',
    name: 'Ethos Reserve Note',
    symbol: 'ERN',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0xc5b001DC33727F8F26880B184090D3E252470D45/logo.svg',
    coingeckoId: 'ethos-reserve-note',
    commonKey: 'ern-wei'
  },
  {
    chainId: 10,
    address: '0xdfa46478f9e5ea86d57387849598dbfb2e964b02',
    name: 'Mai Stablecoin',
    symbol: 'MAI',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0xdfa46478f9e5ea86d57387849598dbfb2e964b02/logo.svg',
    coingeckoId: 'mimatic'
  },
  {
    chainId: 10,
    address: '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true
  },
  {
    address: '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',
    chainId: 10,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    chainId: 10,
    address: '0xcb8fa9a76b8e203d8c3797bf438d8fb81ea3326a',
    name: 'Alchemix USD',
    symbol: 'alUSD',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0xcb8fa9a76b8e203d8c3797bf438d8fb81ea3326a/logo.svg',
    coingeckoId: 'alchemix-usd'
  },
  {
    name: 'MUMMY',
    symbol: 'MMY',
    address: '0x47536f17f4ff30e64a96a7555826b8f9e66ec468',
    chainId: 10,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23038.png',
    coingeckoId: 'mummy-finance'
  },
  {
    chainId: 10,
    address: '0x73cb180bf0521828d8849bc8cf2b920918e23032',
    name: 'Overnight Finance USD',
    symbol: 'USD+',
    decimals: 6,
    logoURI:
      'https://assets.smold.app/api/token/10/0x73cb180bf0521828d8849bc8cf2b920918e23032/logo.svg',
    coingeckoId: 'usd'
  },
  {
    chainId: 10,
    address: '0x9bcef72be871e61ed4fbbc7630889bee758eb81d',
    name: 'Rocket Pool ETH',
    symbol: 'rETH',
    decimals: 18,
    logoURI: 'https://ethereum-optimism.github.io/data/rETH/logo.svg',
    coingeckoId: 'reth'
  },
  {
    chainId: 10,
    address: '0xb153fb3d196a8eb25522705560ac152eeec57901',
    name: 'Magic Internet Money',
    symbol: 'MIM',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0xb153fb3d196a8eb25522705560ac152eeec57901/logo.svg',
    coingeckoId: 'magic-internet-money'
  },
  {
    chainId: 10,
    address: '0x8ae125e8653821e851f12a49f7765db9a9ce7384',
    name: 'Dola USD Stablecoin',
    symbol: 'DOLA',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0xb153fb3d196a8eb25522705560ac152eeec57901/logo.svg',
    coingeckoId: 'dola-usd'
  },
  {
    chainId: 10,
    address: '0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9',
    name: 'Synthetix USD',
    symbol: 'sUSD',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9/logo.svg',
    coingeckoId: 'nusd'
  },
  {
    chainId: 10,
    address: '0xbfd291da8a403daaf7e5e9dc1ec0aceacd4848b9',
    name: 'dForce USD',
    symbol: 'USX',
    decimals: 18,
    logoURI: 'https://ethereum-optimism.github.io/data/USX/logo.svg',
    coingeckoId: 'token-dforce-usd'
  },
  {
    chainId: 10,
    address: '0x1f32b1c2345538c0c6f582fcb022739c4a194ebb',
    name: 'Wrapped liquid staked Ether 2.0',
    symbol: 'wstETH',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb/logo.svg',
    coingeckoId: 'wrapped-steth'
  },
  {
    chainId: 10,
    address: '0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b',
    name: 'BOB Token',
    symbol: 'BOB',
    decimals: 18,
    logoURI: 'https://ethereum-optimism.github.io/data/BOB/logo.svg',
    coingeckoId: 'bob'
  },
  {
    chainId: 10,
    address: '0xfdb794692724153d1488ccdbe0c56c252596735f',
    name: 'Lido DAO Token',
    symbol: 'LDO',
    decimals: 18,
    logoURI: 'https://ethereum-optimism.github.io/data/LDO/logo.svg',
    coingeckoId: 'lido-dao'
  },
  {
    chainId: 10,
    address: '0x340fe1d898eccaad394e2ba0fc1f93d27c7b717a',
    name: 'Wrapped USDR (Tangible USD)',
    symbol: 'wUSDR',
    decimals: 9,
    logoURI:
      'https://assets.smold.app/api/token/10/0x340fe1d898eccaad394e2ba0fc1f93d27c7b717a/logo.svg',
    coingeckoId: 'wrapped-usdr'
  },
  {
    chainId: 10,
    address: '0x9485aca5bbbe1667ad97c7fe7c4531a624c8b1ed',
    name: 'Angle EURO',
    symbol: 'agEUR',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0x9485aca5bbbe1667ad97c7fe7c4531a624c8b1ed/logo.svg',
    coingeckoId: 'ageur'
  },
  {
    chainId: 10,
    address: '0x3c8b650257cfb5f272f799f5e2b4e65093a11a05',
    name: 'Velodrome',
    symbol: 'VELO',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0x3c8b650257cfb5f272f799f5e2b4e65093a11a05/logo.svg',
    coingeckoId: 'velodrome-finance'
  },
  {
    chainId: 10,
    address: '0x50c5725949a6f0c72e6c4a641f24049a917db0cb',
    name: 'Lyra',
    symbol: 'LYRA',
    decimals: 18,
    logoURI: 'https://ethereum-optimism.github.io/data/LYRA/logo.png',
    coingeckoId: 'lyra-finance'
  },
  {
    chainId: 10,
    address: '0x4e720dd3ac5cfe1e1fbde4935f386bb1c66f4642',
    name: 'Beefy',
    symbol: 'BIFI',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0x4e720dd3ac5cfe1e1fbde4935f386bb1c66f4642/logo.svg',
    coingeckoId: 'beefy-finance'
  },
  {
    chainId: 10,
    address: '0x920cf626a271321c151d027030d5d08af699456b',
    name: 'Kwenta DAO',
    symbol: 'KWENTA',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0x920cf626a271321c151d027030d5d08af699456b/logo.svg',
    coingeckoId: 'kwenta'
  },
  {
    chainId: 10,
    address: '0x8700daec35af8ff88c16bdf0418774cb3d7599b4',
    name: 'Synthetix',
    symbol: 'SNX',
    decimals: 18,
    logoURI: 'https://ethereum-optimism.github.io/data/SNX/logo.svg',
    coingeckoId: 'havven'
  },
  {
    chainId: 10,
    address: '0x5d47baba0d66083c52009271faf3f50dcc01023c',
    name: 'UniDex',
    symbol: 'UNIDX',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0x5d47baba0d66083c52009271faf3f50dcc01023c/logo.svg',
    coingeckoId: 'unidex'
  },
  {
    chainId: 10,
    address: '0x217d47011b23bb961eb6d93ca9945b7501a5bb11',
    name: 'Optimistic Thales Token',
    symbol: 'THALES',
    decimals: 18,
    logoURI: 'https://ethereum-optimism.github.io/data/THALES/logo.png',
    coingeckoId: 'thales'
  },
  {
    chainId: 10,
    address: '0x929b939f8524c3be977af57a4a0ad3fb1e374b50',
    name: 'Meta',
    symbol: 'MTA',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0x929b939f8524c3be977af57a4a0ad3fb1e374b50/logo.svg',
    coingeckoId: 'meta'
  },
  {
    chainId: 10,
    address: '0xa50b23cdfb2ec7c590e84f403256f67ce6dffb84',
    name: 'BlueNorva Token',
    symbol: 'BLU',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0xa50b23cdfb2ec7c590e84f403256f67ce6dffb84/logo.svg',
    coingeckoId: ''
  },
  {
    chainId: 10,
    address: '0x6c2f7b6110a37b3b0fbdd811876be368df02e8b0',
    name: 'StaFi rETH',
    symbol: 'rETH',
    decimals: 18,
    logoURI:
      'https://assets.smold.app/api/token/10/0x6c2f7b6110a37b3b0fbdd811876be368df02e8b0/logo.svg',
    coingeckoId: 'reth'
  },
  {
    chainId: 10,
    address: '0xdb4ea87ff83eb1c80b8976fc47731da6a31d35e5',
    name: 'wTBT(Bridge Token)',
    symbol: 'wTBT',
    decimals: 18,
    logoURI: 'https://ethereum-optimism.github.io/data/wTBT/logo.svg',
    coingeckoId: 'wtbt'
  },
  {
    chainId: 10,
    address: '0x61baadcf22d2565b0f471b291c475db5555e0b76',
    name: 'Aelin Protocol',
    symbol: 'AELIN',
    decimals: 18,
    logoURI: 'https://ethereum-optimism.github.io/data/AELIN/logo.png',
    coingeckoId: 'aelin'
  },
  {
    chainId: 10,
    address: '0x88DfaAABaf06f3a41D2606EA98BC8edA109AbeBb',
    name: 'Mai Stablecoin',
    symbol: 'axlWMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    address: '0xdc6ff44d5d932cbd77b52e5612ba0529dc6226f1',
    chainId: 10,
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/31069/small/worldcoin.jpeg?1690182386',
    name: 'Worldcoin',
    symbol: 'WLD',
    coingeckoId: 'worldcoin'
  },
  {
    chainId: 10,
    address: '0x332c72dd7E77070740F01d2d35851c461585D5d0',
    name: 'LiquidDriver',
    symbol: 'axlLqdr',
    decimals: 18,
    commonKey: 'lqdr-wei',
    logoURI:
      'https://2302794922-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYQICp07j-iq-GK2MHc%2Fuploads%2F9E0dn7eOs8PLq9hq26Gv%2FIcon-PNG.png?alt=media&token=53c999ea-e4a0-43a3-9ae8-2f2d4c83f132',
    coingeckoId: 'liquiddriver',
    bridgeOnly: true
  },
  {
    chainId: 10,
    address: '0x00e1724885473B63bCE08a9f0a52F35b0979e35A',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    commonKey: 'oath-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true
  },
  {
    chainId: 10,
    address: '0x3eE6107d9C93955acBb3f39871D32B02F82B78AB',
    name: 'Staked ERN Vault',
    symbol: 'stERN',
    decimals: 18,
    commonKey: 'stern-wei',
    logoURI: 'https://github.com/0xsquid/assets/blob/main/images/tokens/stERN.svg?raw=true',
    coingeckoId: 'staked-ethos-reserve-note',
    bridgeOnly: true
  },
  {
    chainId: 10,
    address: '0x9cfB13E6c11054ac9fcB92BA89644F30775436e4',
    name: 'Axelar Wrapped wstETH',
    symbol: 'axl-wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    bridgeOnly: true,
    commonKey: 'wsteth-wei'
  },
  {
    chainId: 10,
    address: '0x91c415FEcD651F11D24aC4b72Ed08dbEb9868D43',
    name: 'Gridex',
    symbol: 'GDX',
    decimals: 18,
    commonKey: 'gdx-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23941.png',
    coingeckoId: 'gdx-token',
    bridgeOnly: true
  },
  {
    chainId: 10,
    address: '0x259c1C2ED264402b5ed2f02bc7dC25A15C680c18',
    name: 'OneRing',
    symbol: 'RING',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17786.png',
    coingeckoId: 'onering',
    bridgeOnly: true,
    commonKey: 'ring-wei'
  },
  {
    chainId: 10,
    address: '0xb4F2cF13b262C9f0ddB9B2A9143af753EF184E98',
    name: 'ZYB - Zyber Token',
    symbol: 'ZYB',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23419.png',
    coingeckoId: 'zyberswap',
    bridgeOnly: true,
    commonKey: 'zyb-wei'
  },
  {
    chainId: 10,
    address: '0x1DB2466d9F5e10D7090E7152B68d62703a2245F0',
    name: 'Sonne',
    symbol: 'SONNE',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22001.png',
    coingeckoId: 'sonne-finance',
    bridgeOnly: true,
    commonKey: 'sonne-wei'
  },
  {
    chainId: 10,
    address: '0x406Cde76a3fD20e48bc1E0F60651e60Ae204B040',
    name: 'Axelar Wrapped FRAX',
    symbol: 'axlFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei',
    bridgeOnly: true
  },
  {
    address: '0x3b08fcd15280e7B5A6e404c4abb87F7C774D1B2e',
    chainId: 10,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ovn.svg',
    name: 'OVN',
    symbol: 'OVN',
    coingeckoId: '',
    bridgeOnly: true,
    commonKey: 'ovn-wei'
  },
  {
    chainId: 10,
    address: '0x41b94c5867f7F6217C9a30520Cb3e793B1ee1b97',
    name: 'axlTIA',
    symbol: 'axlTIA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/celestia.svg',
    coingeckoId: 'celestia',
    commonKey: 'utia',
    bridgeOnly: true
  },
  {
    chainId: 10,
    address: '0x3A18dcC9745eDcD1Ef33ecB93b0b6eBA5671e7Ca',
    name: 'Kuji',
    symbol: 'KUJI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/kuji.svg',
    coingeckoId: 'kujira',
    bridgeOnly: true,
    commonKey: 'ukuji'
  },
  {
    chainId: 10,
    address: '0xebD4A18034C78A415088DF8508f102421eD693b1',
    name: 'axelar wrapped DEUS',
    symbol: 'axlDEUS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/deus.svg',
    coingeckoId: 'deus-finance-2',
    bridgeOnly: true,
    commonKey: 'deus-wei'
  },
  {
    chainId: 10,
    address: '0x809c55916bb542c1419724022B3F0162087E3C88',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 10,
    address: '0x2598c30330D5771AE9F983979209486aE26dE875',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28916.png',
    name: 'Any Inu',
    symbol: 'AI',
    coingeckoId: 'any-inu'
  },
  {
    chainId: 10,
    address: '0x64D599b3d0c5f1375e5e639E98aB86298261A30B',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 10,
    address: '0xf3602C5A7f625181659445C8dDDde73dA15c22e3',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 10,
    address: '0x219279953d8D23520B7878447e8A6c266a51de2f',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 10,
    address: '0x5860a0bF37133f8461b2DEDe7C80e55D6bfF3721',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 10,
    address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 'osmosis-1',
    address: 'uosmo',
    name: 'Osmosis',
    symbol: 'OSMO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/osmo.svg',
    coingeckoId: 'osmosis',
    commonKey: 'uosmo',
    ibcDenom: 'uosmo',
    pathKey: 'osmo_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
    name: 'ATOM',
    symbol: 'ATOM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/atom.svg',
    coingeckoId: 'cosmos',
    ibcDenom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
    pathKey: 'atom_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
    pathKey: 'nusdc_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
    pathKey: 'axlusdc_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    ibcDenom: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
    pathKey: 'axleth_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    ibcDenom: 'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
    pathKey: 'axldai_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    ibcDenom: 'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
    pathKey: 'axlusdt_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    ibcDenom: 'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
    pathKey: 'axlbusd_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    ibcDenom: 'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
    pathKey: 'axlavax_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
    name: 'Axelar GLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
    pathKey: 'axlglmr_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
    name: 'Axelar MATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    ibcDenom: 'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
    pathKey: 'axlmatic_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    ibcDenom: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
    pathKey: 'axlwbtc_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
    name: 'Axelar BNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    ibcDenom: 'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
    pathKey: 'axlbnb_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
    name: 'Axelar FTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    ibcDenom: 'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
    pathKey: 'axlftm_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    coingeckoId: 'filecoin',
    commonKey: 'wfil-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
    pathKey: 'axlfil_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'uion',
    name: 'Ion',
    symbol: 'ION',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23547.png',
    coingeckoId: 'ion',
    ibcDenom: 'uion',
    pathKey: 'ion_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
    name: 'Cronos',
    symbol: 'CRO',
    decimals: 8,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png',
    coingeckoId: 'crypto-com-chain',
    ibcDenom: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
    pathKey: 'cro_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
    name: 'Luna Classic',
    symbol: 'LUNC',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4172.png',
    coingeckoId: 'terra-luna',
    ibcDenom: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
    pathKey: 'lunc_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
    name: 'Luna',
    symbol: 'LUNA',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20314.png',
    coingeckoId: 'terra-luna-2',
    ibcDenom: 'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
    pathKey: 'luna2_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
    name: 'Fetch.ai',
    symbol: 'FET',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fet.svg',
    coingeckoId: 'fetch-ai',
    ibcDenom: 'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
    pathKey: 'fet_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
    name: 'Injective',
    symbol: 'INJ',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7226.png',
    coingeckoId: 'injective-protocol',
    ibcDenom: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
    pathKey: 'inj_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
    name: 'Band Protocol',
    symbol: 'BAND',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4679.png',
    coingeckoId: 'band-protocol',
    ibcDenom: 'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
    pathKey: 'band_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
    name: 'Secret Network',
    symbol: 'SCRT',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5604.png',
    coingeckoId: 'secret',
    ibcDenom: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
    pathKey: 'scrt_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
    name: 'Agoric',
    symbol: 'BLD',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16697.png',
    coingeckoId: 'agoric',
    ibcDenom: 'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
    pathKey: 'bld_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
    name: 'Inter Stable Token',
    symbol: 'IST',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22736.png',
    coingeckoId: 'inter-stable-token',
    ibcDenom: 'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
    pathKey: 'ist_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
    name: 'Juno',
    symbol: 'JUNO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/juno.svg',
    coingeckoId: 'juno-network',
    ibcDenom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
    pathKey: 'juno_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
    name: 'Persistence',
    symbol: 'XPRT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/xprt.svg',
    coingeckoId: 'persistence',
    ibcDenom: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
    pathKey: 'xprt_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
    name: 'PSTAKE',
    symbol: 'PSTAKE',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/pstake.svg',
    coingeckoId: 'pstake-finance',
    ibcDenom: 'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
    pathKey: 'pstake_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
    name: 'Axelar',
    symbol: 'AXL',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    coingeckoId: 'axelar',
    ibcDenom: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
    pathKey: 'axl_osmosis',
    commonKey: 'uaxl'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
    name: 'Akash Network',
    symbol: 'AKT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/akt.svg',
    coingeckoId: 'akash-network',
    ibcDenom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
    pathKey: 'akt_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
    name: 'Kuji',
    symbol: 'KUJI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/kuji.svg',
    coingeckoId: 'kujira',
    ibcDenom: 'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
    pathKey: 'kuji_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
    name: 'Stargaze',
    symbol: 'STARS',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stars.svg',
    coingeckoId: 'stargaze',
    ibcDenom: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
    pathKey: 'stars_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
    name: 'Regen Network',
    symbol: 'REGEN',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/regen.svg',
    coingeckoId: 'regen',
    ibcDenom: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
    pathKey: 'regen_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
    name: 'Umee',
    symbol: 'UMEE',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/umee.svg',
    coingeckoId: 'umee',
    ibcDenom: 'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
    pathKey: 'umee_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
    name: 'Neutron',
    symbol: 'NTRN',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ntrn.svg',
    coingeckoId: 'neutron-3',
    ibcDenom: 'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
    pathKey: 'ntrn_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
    name: 'Carbon',
    symbol: 'SWTH',
    decimals: 8,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/swth.svg',
    coingeckoId: 'switcheo',
    ibcDenom: 'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
    pathKey: 'dswth_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
    name: 'Sei',
    symbol: 'SEI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sei.svg',
    coingeckoId: 'sei-network',
    ibcDenom: 'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
    pathKey: 'sei_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
    name: 'Comdex',
    symbol: 'CMDX',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/cmdx.svg',
    coingeckoId: 'comdex',
    ibcDenom: 'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
    pathKey: 'cmdx_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
    name: 'Archway',
    symbol: 'ARCH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/arch.svg',
    coingeckoId: 'archway',
    ibcDenom: 'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
    pathKey: 'arch_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
    name: 'Graviton',
    symbol: 'GRAV',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/grav.svg',
    coingeckoId: 'graviton',
    ibcDenom: 'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
    pathKey: 'graviton_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
    name: 'AssetMantle',
    symbol: 'MNTL',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19686.png',
    coingeckoId: 'assetmantle',
    ibcDenom: 'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
    pathKey: 'mntl_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    ibcDenom: 'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
    pathKey: 'huahua_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
    name: 'Sommelier',
    symbol: 'SOMM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/somm.svg',
    coingeckoId: 'sommelier',
    ibcDenom: 'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
    pathKey: 'somm_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
    name: 'Stride',
    symbol: 'STRD',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/strd.svg',
    coingeckoId: 'stride',
    ibcDenom: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
    pathKey: 'strd_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
    name: 'Stride Osmo',
    symbol: 'stOSMO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stosmo.svg',
    coingeckoId: 'stride-staked-osmo',
    ibcDenom: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
    pathKey: 'stosmo_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
    name: 'Stride Atom',
    symbol: 'stATOM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/statom.svg',
    coingeckoId: 'stride-staked-atom',
    ibcDenom: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
    pathKey: 'statom_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
    name: 'Stride Juno',
    symbol: 'stJUNO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stjuno.svg',
    coingeckoId: 'stride-staked-juno',
    ibcDenom: 'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
    pathKey: 'stjuno_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
    name: 'Stride Stars',
    symbol: 'stSTARS',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ststars.svg',
    coingeckoId: 'stride-staked-stars',
    ibcDenom: 'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
    pathKey: 'ststars_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
    name: 'Mars Protocol',
    symbol: 'MARS',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/mars.svg',
    coingeckoId: 'mars-protocol',
    ibcDenom: 'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
    pathKey: 'umars_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
    name: 'Staked ATOM',
    symbol: 'stkATOM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stkatom.svg',
    coingeckoId: 'stkatom',
    ibcDenom: 'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
    pathKey: 'stkuatom_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
    name: 'NCT',
    symbol: 'NCT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/nct.svg',
    coingeckoId: '',
    ibcDenom: 'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
    pathKey: 'eco.uC.NCT_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
    name: 'Wrapped staked ETH',
    symbol: 'wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    commonKey: 'wsteth-wei',
    ibcDenom: 'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
    pathKey: 'wsteth_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
    name: 'Quicksilver',
    symbol: 'QCK',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/qck.svg',
    coingeckoId: 'quicksilver',
    ibcDenom: 'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
    pathKey: 'uqck_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
    name: 'Whale',
    symbol: 'WHALE',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/whale.svg',
    coingeckoId: 'white-whale',
    ibcDenom: 'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
    pathKey: 'uwhale_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
    name: 'OmniFlix Network',
    symbol: 'FLIX',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/flix.svg',
    coingeckoId: 'omniflix-network',
    ibcDenom: 'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
    pathKey: 'uflix_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
    name: 'Composite',
    symbol: 'CMST',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/cmst.svg',
    coingeckoId: 'composite',
    ibcDenom: 'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
    pathKey: 'ucmst_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
    name: 'Stride Evmos',
    symbol: 'stEVMOS',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stevmos.svg',
    coingeckoId: 'stride-staked-evmos',
    ibcDenom: 'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
    pathKey: 'staevmos_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
    name: 'BitCanna',
    symbol: 'BCNA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/bcna.svg',
    coingeckoId: 'bitcanna',
    ibcDenom: 'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
    pathKey: 'bcna_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
    name: 'Bitsong',
    symbol: 'BTSG',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/btsg.svg',
    coingeckoId: 'bitsong',
    ibcDenom: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
    pathKey: 'btsg_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
    name: 'Cheqd',
    symbol: 'CHEQ',
    decimals: 9,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12256.png',
    coingeckoId: 'cheqd-network',
    ibcDenom: 'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
    pathKey: 'cheq_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
    name: 'Decentr',
    symbol: 'DEC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dec.svg',
    coingeckoId: 'decentr',
    ibcDenom: 'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
    pathKey: 'dec_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
    name: 'Desmos',
    symbol: 'DSM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dsm.svg',
    coingeckoId: 'desmos',
    ibcDenom: 'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
    pathKey: 'dsm_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
    name: 'Dig Chain',
    symbol: 'DIG',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dig.svg',
    coingeckoId: 'dig-chain',
    ibcDenom: 'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
    pathKey: 'dig_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
    name: 'Evmos',
    symbol: 'EVMOS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/evmos.svg',
    coingeckoId: 'evmos',
    ibcDenom: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
    pathKey: 'evmos_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
    name: 'IRISnet',
    symbol: 'IRIS',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/iris.svg',
    coingeckoId: 'iris-network',
    ibcDenom: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
    pathKey: 'iris_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
    name: 'Impacthub',
    symbol: 'IXO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ixo.svg',
    coingeckoId: 'ixo',
    ibcDenom: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
    pathKey: 'ixo_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
    name: 'Jackal',
    symbol: 'JKL',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/jkl.svg',
    coingeckoId: 'jackal-protocol',
    ibcDenom: 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
    pathKey: 'jkl_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
    name: 'Ki',
    symbol: 'XKI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/xki.svg',
    coingeckoId: 'ki',
    ibcDenom: 'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
    pathKey: 'xki_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
    name: 'LikeCoin',
    symbol: 'LIKE',
    decimals: 9,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/like.svg',
    coingeckoId: 'likecoin',
    ibcDenom: 'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
    pathKey: 'like_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
    name: 'Lum',
    symbol: 'LUM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/lum.svg',
    coingeckoId: 'lum-network',
    ibcDenom: 'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
    pathKey: 'lum_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
    name: 'Polkadot',
    symbol: 'DOT',
    decimals: 10,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
    coingeckoId: 'polkadot',
    commonKey: 'dot-planck',
    ibcDenom: 'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
    pathKey: 'dot_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
    name: 'Sentinel',
    symbol: 'DVPN',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dvpn.svg',
    coingeckoId: 'sentinel',
    ibcDenom: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
    pathKey: 'dvpn_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
    name: 'stUMEE',
    symbol: 'stUMEE',
    decimals: 0,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stumee.svg',
    coingeckoId: 'umee',
    ibcDenom: 'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
    pathKey: 'stuumee_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
    name: 'POSTHUMAN',
    symbol: 'PHMN',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22669.png',
    coingeckoId: 'posthuman',
    ibcDenom: 'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
    pathKey: 'phmn_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
    name: 'IBC Index',
    symbol: 'IBCX',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ibcx.svg',
    coingeckoId: 'ibc-index',
    ibcDenom: 'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
    pathKey: 'ibcx_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
    name: 'Acrechain',
    symbol: 'ACRE',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18156.png',
    coingeckoId: 'arable-protocol',
    ibcDenom: 'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
    pathKey: 'acre_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
    name: 'Nolus',
    symbol: 'NLS',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27307.png',
    coingeckoId: 'nolus',
    ibcDenom: 'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
    pathKey: 'nls_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
    name: 'Kava',
    symbol: 'KAVA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/kava.svg',
    coingeckoId: 'kava',
    ibcDenom: 'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
    pathKey: 'kava_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
    name: 'USD Tether',
    symbol: 'USDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    ibcDenom: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
    pathKey: 'usdt_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
    name: 'nride',
    symbol: 'NRIDE',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27307.png',
    coingeckoId: 'nolus',
    ibcDenom: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
    pathKey: 'nride_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
    name: 'Celestia',
    symbol: 'TIA',
    decimals: 6,
    ibcDenom: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/celestia.svg',
    coingeckoId: 'celestia',
    pathKey: 'tia_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
    name: 'nBTC',
    symbol: 'NBTC',
    decimals: 14,
    logoURI: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg',
    ibcDenom: 'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
    coingeckoId: 'bitcoin',
    pathKey: 'nbtc_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
    name: 'Levana',
    symbol: 'LVN',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/lvn.svg',
    coingeckoId: 'levana-protocol',
    ibcDenom: 'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
    pathKey: 'lvn_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
    name: 'Coreum',
    symbol: 'COREUM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/coreum.svg',
    coingeckoId: 'coreum',
    ibcDenom: 'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
    pathKey: 'coreum_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/E79C3DAA6E5E0180F61F30C1515B8933F1E9092E81020222080C405D1716C533',
    name: 'Mountain Protocol USD',
    symbol: 'wUSDM',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/31719/standard/usdm.png?1696530540',
    coingeckoId: 'mountain-protocol-usdm',
    commonKey: 'wusdm-wei',
    ibcDenom: 'ibc/E79C3DAA6E5E0180F61F30C1515B8933F1E9092E81020222080C405D1716C533',
    pathKey: 'axlwusdm_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/C5E95745A3176F1D30356E6EC157ECB50979E5EFEA0AD385FA100E05307446EA',
    name: 'Wrapped Doge',
    symbol: 'wDOGE',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/doge.svg',
    coingeckoId: 'dogecoin',
    commonKey: 'wdoge-wei',
    ibcDenom: 'ibc/C5E95745A3176F1D30356E6EC157ECB50979E5EFEA0AD385FA100E05307446EA',
    pathKey: 'axlwdoge_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/73ACC8C994C1335BDEE9F473865EE46ED6529D345B1FE8905ED1FD5F2628AADA',
    name: 'Celo Dollar',
    symbol: 'cUSD',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7236.png',
    coingeckoId: 'celo-dollar',
    ibcDenom: 'ibc/73ACC8C994C1335BDEE9F473865EE46ED6529D345B1FE8905ED1FD5F2628AADA',
    commonKey: 'cusd-wei',
    pathKey: 'axlcusd_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
    name: 'Coinbase Wrapped Staked ETH',
    symbol: 'CBETH',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21535.png',
    coingeckoId: 'coinbase-wrapped-staked-eth',
    ibcDenom: 'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
    commonKey: 'cbeth-wei',
    pathKey: 'axlcbeth_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
    name: 'Arbitrum',
    symbol: 'ARB',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/arbitrum.svg',
    coingeckoId: 'arbitrum',
    commonKey: 'arb-wei',
    ibcDenom: 'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
    pathKey: 'axlarb_osmosis'
  },
  {
    chainId: 'osmosis-1',
    name: 'ChainLink Token',
    address: 'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
    symbol: 'LINK',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
    coingeckoId: 'chainlink',
    ibcDenom: 'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
    commonKey: 'link-wei',
    pathKey: 'axllink_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
    commonKey: 'frax-wei',
    pathKey: 'frax_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    ibcDenom: 'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
    commonKey: 'sfrxeth-wei',
    pathKey: 'sfrxeth_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
    name: 'Pepe',
    symbol: 'PEPE',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/pepe.svg',
    coingeckoId: 'pepe',
    ibcDenom: 'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
    commonKey: 'pepe-wei',
    pathKey: 'axlpepe_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
    name: 'Rai Reflex Index',
    symbol: 'RAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/14004/thumb/RAI-logo-coin.png?1613592334',
    coingeckoId: 'rai',
    ibcDenom: 'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
    commonKey: 'rai-wei',
    pathKey: 'axlrai_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
    name: 'Rocket Pool ETH',
    symbol: 'RETH',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/15060.png',
    coingeckoId: 'rocket-pool-eth',
    ibcDenom: 'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
    commonKey: 'reth-wei',
    pathKey: 'axlreth_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
    name: 'Shiba Inu',
    symbol: 'SHIB',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/11939/thumb/shiba.png?1622619446',
    coingeckoId: 'shiba-inu',
    ibcDenom: 'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
    commonKey: 'shib-wei',
    pathKey: 'axlshib_osmosis'
  },
  {
    chainId: 'osmosis-1',
    name: 'Uniswap',
    address: 'ibc/AE2719773D6FCDD05AC17B1ED63F672F5F9D84144A61965F348C86C2A83AD161',
    symbol: 'UNI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/uni.svg',
    coingeckoId: 'uniswap',
    ibcDenom: 'ibc/AE2719773D6FCDD05AC17B1ED63F672F5F9D84144A61965F348C86C2A83AD161',
    commonKey: 'uni-wei',
    pathKey: 'axluni_osmosis'
  },
  {
    chainId: 'osmosis-1',
    name: 'Maker',
    address: 'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
    symbol: 'MKR',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png',
    coingeckoId: 'maker',
    ibcDenom: 'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
    commonKey: 'mkr-wei',
    pathKey: 'axlmkr_osmosis'
  },
  {
    chainId: 'osmosis-1',
    name: 'polygon USD Coin',
    address: 'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
    commonKey: 'polygon-uusdc',
    pathKey: 'axlpusdc_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
    decimals: 6,
    name: 'avalanche USD Coin',
    symbol: 'USDC',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin-avalanche-bridged-usdc-e',
    ibcDenom: 'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
    commonKey: 'avalanche-uusdc',
    pathKey: 'axlausdc_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
    name: 'YieldETH',
    symbol: 'YieldETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/YieldETH.png',
    coingeckoId: 'yieldeth-sommelier',
    ibcDenom: 'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
    commonKey: 'yieldeth-wei',
    pathKey: 'axlyieldeth_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
    name: 'Staked OSMO',
    symbol: 'stkOSMO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stkOSMO.svg',
    coingeckoId: 'stkatom',
    ibcDenom: 'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
    pathKey: 'stkosmo_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
    name: 'DYDX',
    symbol: 'DYDX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dydx.svg',
    coingeckoId: 'dydx-chain',
    ibcDenom: 'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
    pathKey: 'dydx_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/EC0CAF0CBC780D4B55980E28E1C646D207ED05A22EA08C5F3B605AE00C9AB984',
    name: 'Ondo US Dollar Yield',
    symbol: 'USDY',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdy.svg',
    coingeckoId: 'ondo-us-dollar-yield',
    ibcDenom: 'ibc/EC0CAF0CBC780D4B55980E28E1C646D207ED05A22EA08C5F3B605AE00C9AB984',
    commonKey: 'usdy-wei',
    pathKey: 'usdy_osmosis',
    bridgeOnly: true
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/CCF507932C95AC713079BE5FA0E5DF863434B1DBCC7F77524E3CF168EB266CD7',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    ibcDenom: 'ibc/CCF507932C95AC713079BE5FA0E5DF863434B1DBCC7F77524E3CF168EB266CD7',
    bridgeOnly: true,
    commonKey: 'fpi-wei',
    pathKey: 'fpi_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/56FA051C097D26D3285D7A3ABA5F9F18F6654517E50E99A9F3F2D0E6FECDB433',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    ibcDenom: 'ibc/56FA051C097D26D3285D7A3ABA5F9F18F6654517E50E99A9F3F2D0E6FECDB433',
    pathKey: 'fxs_osmosis',
    commonKey: 'fxs-wei'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    ibcDenom: 'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
    pathKey: 'tori_osmosis'
  },
  {
    chainId: 'osmosis-1',
    address: 'ibc/64228F1A548B1D1FD04BBA6E974C2450BEDA07DBB1D3FD9C6913CD210BBC1276',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    ibcDenom: 'ibc/64228F1A548B1D1FD04BBA6E974C2450BEDA07DBB1D3FD9C6913CD210BBC1276',
    bridgeOnly: true,
    commonKey: 'frxeth-wei',
    pathKey: 'frxeth_osmosis'
  },
  {
    chainId: 'core-1',
    address: 'uxprt',
    name: 'Persistence',
    symbol: 'XPRT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/xprt.svg',
    coingeckoId: 'persistence',
    ibcDenom: 'uxprt',
    pathKey: 'xprt_persistence'
  },
  {
    chainId: 'core-1',
    address: 'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
    name: 'pSTAKE Finance',
    symbol: 'PSTAKE',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/15996.png',
    coingeckoId: 'pstake-finance',
    ibcDenom: 'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
    pathKey: 'pstake_persistence'
  },
  {
    chainId: 'core-1',
    address: 'ibc/81844CA896A4C233B331A468123AF2AACDC580DE294C5528A6E3F661A136795C',
    name: 'Cosmos Hub',
    symbol: 'ATOM',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png',
    coingeckoId: 'cosmos',
    ibcDenom: 'ibc/81844CA896A4C233B331A468123AF2AACDC580DE294C5528A6E3F661A136795C',
    pathKey: 'atom_persistence'
  },
  {
    chainId: 'core-1',
    address: 'ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0',
    pathKey: 'nusdc_persistence'
  },
  {
    chainId: 'core-1',
    address: 'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
    name: 'USD Tether',
    symbol: 'USDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    ibcDenom: 'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
    pathKey: 'usdt_persistence'
  },
  {
    chainId: 'core-1',
    address: 'stk/uatom',
    name: 'Staked ATOM',
    symbol: 'stkATOM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stkatom.svg',
    coingeckoId: 'stkatom',
    ibcDenom: 'stk/uatom',
    pathKey: 'stkuatom_persistence'
  },
  {
    chainId: 'core-1',
    address: 'stk/uosmo',
    name: 'Staked OSMO',
    symbol: 'stkOSMO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stkOSMO.svg',
    coingeckoId: 'stkatom',
    ibcDenom: 'stk/uosmo',
    pathKey: 'stkosmo_persistence'
  },
  {
    chainId: 'core-1',
    address: 'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E',
    name: 'DYDX',
    symbol: 'DYDX',
    decimals: 18,
    ibcDenom: 'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E',
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dydx.svg',
    coingeckoId: 'dydx-chain',
    pathKey: 'dydx_persistence'
  },
  {
    chainId: 'core-1',
    address: 'ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85',
    name: 'Osmosis',
    symbol: 'OSMO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/osmo.svg',
    coingeckoId: 'osmosis',
    commonKey: 'uosmo',
    ibcDenom: 'ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85',
    pathKey: 'osmo_persistence'
  },
  {
    name: 'USD Coin (PoS)',
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    symbol: 'USDC.e',
    decimals: 6,
    chainId: 137,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    commonKey: 'polygon-uusdc'
  },
  {
    chainId: 137,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/chains/polygon.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei'
  },
  {
    chainId: 137,
    address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin'
  },
  {
    chainId: 137,
    address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    name: 'Wrapped MATIC',
    symbol: 'WMATIC',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/14073/small/matic.png?1628852392',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei'
  },
  {
    chainId: 137,
    address: '0x750e4C4984a9e0f12978eA6742Bc1c5D248f40ed',
    name: 'axlUSDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    name: 'Tether USD',
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    symbol: 'USDT',
    decimals: 6,
    chainId: 137,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether'
  },
  {
    name: 'Wrapped Ether',
    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    symbol: 'WETH',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth'
  },
  {
    name: 'Dai Stablecoin',
    address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    symbol: 'DAI',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai'
  },
  {
    name: 'Wrapped BTC (PoS)',
    address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    symbol: 'WBTC',
    decimals: 8,
    chainId: 137,
    logoURI:
      'https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png?1548822744',
    coingeckoId: 'wrapped-bitcoin'
  },
  {
    name: 'Uniswap (PoS)',
    address: '0xb33EaAd8d922B1083446DC23f610c2567fB5180f',
    symbol: 'Uniswap (PoS)',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/uni.svg',
    coingeckoId: 'uniswap'
  },
  {
    name: 'miMATIC Stablecoin',
    address: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
    symbol: 'MAI',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic'
  },
  {
    name: 'decentral.games',
    address: '0xef938b6da8576a896f6E0321ef80996F4890f9c4',
    symbol: 'DG',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://polygonscan.com/token/images/decentralgame_32.png?v=5',
    coingeckoId: 'decentral-games'
  },
  {
    address: '0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Kyber Network Crystal',
    symbol: 'KNC',
    coingeckoId: 'kyber-network-crystal'
  },
  {
    address: '0x46371C90fcCE4D7367a61CB43eA7922406bC707a',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    name: 'Axelar Wrapped KNC',
    symbol: 'axlKNC',
    coingeckoId: 'kyber-network-crystal',
    commonKey: 'knc-wei',
    bridgeOnly: true
  },
  {
    address: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png',
    name: 'Aave (PoS)',
    symbol: 'AAVE',
    coingeckoId: 'aave',
    bridgeOnly: false
  },
  {
    name: 'PlanetIX',
    address: '0xE06Bd4F5aAc8D0aA337D13eC88dB6defC6eAEefE',
    symbol: 'IXT',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://assets.coingecko.com/coins/images/20927/small/IXT_SYMBOL_SVG_RGB_BLACK.png?1637934555',
    coingeckoId: 'insurex'
  },
  {
    name: 'Lucidao',
    address: '0xc2A45FE7d40bCAc8369371B08419DDAFd3131b4a',
    symbol: 'LCD',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://assets.coingecko.com/coins/images/23693/small/lcd-icon-color-200px.png?1645450706',
    coingeckoId: 'lucidao'
  },
  {
    name: 'MASQ',
    address: '0xEe9A352F6aAc4aF1A5B9f467F6a93E0ffBe9Dd35',
    symbol: 'MASQ',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://assets.coingecko.com/coins/images/13699/small/MASQ_Logo_Blue_Solo_Transparent.png?1616661801',
    coingeckoId: 'masq'
  },
  {
    name: 'Liquid Staking Matic',
    address: '0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6',
    symbol: 'MaticX',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://i.ibb.co/9bHbFsB/2022-04-26-11-53-13.jpg',
    coingeckoId: 'stader-maticx'
  },
  {
    name: 'MCHCoin',
    address: '0xee7666aACAEFaa6efeeF62ea40176d3eB21953B9',
    symbol: 'MCHC',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/15399/small/MCHC.jpg?1620721307',
    coingeckoId: 'mch-coin'
  },
  {
    name: 'Ocean Token (PoS)',
    address: '0x282d8efCe846A88B159800bd4130ad77443Fa1A1',
    symbol: 'mOCEAN',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://oceanprotocol.com/static/4ad704a150d436a1f32d495413fc47cd/favicon-white.png',
    coingeckoId: 'ocean-protocol'
  },
  {
    name: 'Nitro (POS)',
    address: '0x695FC8B80F344411F34bDbCb4E621aA69AdA384b',
    symbol: 'NITRO',
    decimals: 18,
    chainId: 137,
    logoURI:
      'https://assets.coingecko.com/coins/images/21668/small/_X6vYBDM_400x400.jpg?1639705848',
    coingeckoId: 'nitro-league'
  },
  {
    name: 'Qi Dao',
    address: '0x580A84C73811E1839F75d86d75d88cCa0c241fF4',
    symbol: 'QI',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/qi.png',
    coingeckoId: 'benqi'
  },
  {
    name: 'QuickSwap(NEW)',
    address: '0xB5C064F955D8e7F38fE0460C556a72987494eE17',
    symbol: 'QUICK(NEW)',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://i.ibb.co/HGWTLM7/Quick-Icon-V2.png',
    coingeckoId: 'quickswap'
  },
  {
    name: 'QuickSwap(OLD)',
    address: '0x831753DD7087CaC61aB5644b308642cc1c33Dc13',
    symbol: 'QUICK(OLD)',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8206.png',
    coingeckoId: 'quick'
  },
  {
    name: 'SAND',
    address: '0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683',
    symbol: 'SAND',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/12129/small/sandbox_logo.jpg?1597397942',
    coingeckoId: 'the-sandbox'
  },
  {
    name: 'Decentraland',
    address: '0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4',
    symbol: 'MANA',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/878/small/decentraland-mana.png?1550108745',
    coingeckoId: 'decentraland'
  },
  {
    name: 'Toucan Protocol: Base Carbon Tonne',
    address: '0x2F800Db0fdb5223b3C3f354886d907A671414A7F',
    symbol: 'BCT',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12949.png',
    coingeckoId: 'toucan-protocol-base-carbon-tonne'
  },
  {
    name: 'Sunflower Land',
    address: '0xD1f9c58e33933a993A3891F8acFe05a68E1afC05',
    symbol: 'SFL',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/25514/small/download.png?1652164203',
    coingeckoId: 'sunflower-land'
  },
  {
    name: 'Staked MATIC (PoS) | Lido',
    address: '0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4',
    symbol: 'stMATIC',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/24185/small/stMATIC.png?1646789287',
    coingeckoId: 'lido-staked-matic'
  },
  {
    name: 'Telcoin',
    address: '0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32',
    symbol: 'TEL',
    decimals: 2,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/1899/small/tel.png?1547036203',
    coingeckoId: 'telcoin'
  },
  {
    name: 'VOXEL Token',
    address: '0xd0258a3fD00f38aa8090dfee343f10A9D4d30D3F',
    symbol: 'VOXEL',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/21260/small/voxies.png?1638789903',
    coingeckoId: 'voxies'
  },
  {
    name: 'Exchange Genesis Ethlas Medium',
    address: '0x02649C1Ff4296038De4b9bA8F491b42b940A8252',
    symbol: 'XGEM',
    decimals: 18,
    chainId: 137,
    logoURI: 'https://assets.coingecko.com/coins/images/22535/small/17200.png?1642023748',
    coingeckoId: 'exchange-genesis-ethlas-medium'
  },
  {
    address: '0x34d4ab47Bee066F361fA52d792e69AC7bD05ee23',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x34d4ab47Bee066F361fA52d792e69AC7bD05ee23/logo.png',
    name: 'Raider Aurum',
    symbol: 'AURUM',
    coingeckoId: 'raider-aurum'
  },
  {
    address: '0xE440dc07b23faafF3a76bdbcf783221406eb00F1',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    coingeckoId: 'filecoin',
    bridgeOnly: true,
    commonKey: 'wfil-wei'
  },
  {
    chainId: 137,
    address: '0xCeED2671d8634e3ee65000EDbbEe66139b132fBf',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true
  },
  {
    address: '0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7/logo.png',
    name: 'Aavegotchi GHST Token',
    symbol: 'GHST',
    coingeckoId: 'aavegotchi'
  },
  {
    address: '0xcd7361ac3307D1C5a46b63086a90742Ff44c63B3',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xcd7361ac3307D1C5a46b63086a90742Ff44c63B3/logo.png',
    name: 'Crypto Raider',
    symbol: 'RAIDER',
    coingeckoId: 'crypto-raiders'
  },
  {
    name: 'anyBNB',
    symbol: 'BNB',
    address: '0xA649325Aa7C5093d12D6F98EB4378deAe68CE23F',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/WBNB.svg',
    coingeckoId: 'binancecoin'
  },
  {
    chainId: 137,
    address: '0xe6828D65bf5023AE1851D90D8783Cc821ba7eeE1',
    name: 'ApeBond',
    symbol: 'ABOND',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/abond.svg',
    coingeckoId: ''
  },
  {
    name: 'Banana Token',
    symbol: 'BANANA',
    address: '0x5d47baba0d66083c52009271faf3f50dcc01023c',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/BANANA.svg',
    coingeckoId: 'apeswap-finance'
  },
  {
    name: 'ChainLink',
    symbol: 'LINK',
    address: '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39',
    chainId: 137,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png?1547034700',
    coingeckoId: 'chainlink'
  },
  {
    address: '0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/27713/small/Xen.jpeg?1665453190',
    name: 'XEN Crypto',
    symbol: 'mXEN',
    coingeckoId: 'xen-crypto-bsc'
  },
  {
    address: '0xe261d618a959afffd53168cd07d12e37b26761db',
    chainId: 137,
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/22837.png',
    name: 'DIMO Price',
    symbol: 'DIMO',
    coingeckoId: 'dimo'
  },
  {
    address: '0x6e4E624106Cb12E168E6533F8ec7c82263358940',
    chainId: 137,
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    chainId: 137,
    address: '0x08aD99fB3f9f262853B54613249B4064901BD358',
    name: 'Mai Stablecoin',
    symbol: 'axlWMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    chainId: 137,
    address: '0xC3a9a54c043f348027fffAac0F2F996123A19bF4',
    name: 'Ethos Reserve Note',
    symbol: 'ERN',
    decimals: 18,
    logoURI: 'https://docs.velodrome.finance/tokens/ERN.png',
    coingeckoId: 'ethos-reserve-note',
    commonKey: 'ern-wei',
    bridgeOnly: true
  },
  {
    chainId: 137,
    address: '0x0294D8eB7857D43FEb1210Db72456d41481f9Ede',
    name: 'LiquidDriver',
    symbol: 'axlLqdr',
    decimals: 18,
    commonKey: 'lqdr-wei',
    logoURI:
      'https://2302794922-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYQICp07j-iq-GK2MHc%2Fuploads%2F9E0dn7eOs8PLq9hq26Gv%2FIcon-PNG.png?alt=media&token=53c999ea-e4a0-43a3-9ae8-2f2d4c83f132',
    coingeckoId: 'liquiddriver',
    bridgeOnly: true
  },
  {
    chainId: 137,
    address: '0x7c603C3C0C97a565cf202c94AB5298bF8510f7dc',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    commonKey: 'oath-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true
  },
  {
    chainId: 137,
    address: '0x281c4746c902A322B9A951F07893AC51a7221Acc',
    name: 'Staked ERN Vault',
    symbol: 'stERN',
    decimals: 18,
    commonKey: 'stern-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24370.png',
    coingeckoId: 'staked-ethos-reserve-note',
    bridgeOnly: true
  },
  {
    chainId: 137,
    address: '0xB0684AEb24b70A8973F2459DB4AB83a4be9139fB',
    name: 'Gridex',
    symbol: 'GDX',
    decimals: 18,
    commonKey: 'gdx-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23941.png',
    coingeckoId: 'gdx-token',
    bridgeOnly: true
  },
  {
    chainId: 137,
    address: '0x3809dcdd5dde24b37abe64a5a339784c3323c44f',
    name: 'TrustSwap Token',
    symbol: 'SWAP',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5829.png',
    coingeckoId: ''
  },
  {
    chainId: 137,
    address: '0xd7Bb095a60D7666D4A6f236423B47DDD6ae6Cfa7',
    name: 'Axelar Wrapped wstETH',
    symbol: 'axl-wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    commonKey: 'wsteth-wei',
    bridgeOnly: true
  },
  {
    chainId: 137,
    address: '0x12A80A285DfaBd23FC1DFe6c515F034A22d9cdCE',
    name: 'Axelar Wrapped DEUS',
    symbol: 'axlDEUS',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12972.png',
    coingeckoId: 'deus-finance-2',
    bridgeOnly: true,
    commonKey: 'deus-wei'
  },
  {
    chainId: 137,
    address: '0x53Adc464b488bE8C5d7269B9ABBCe8bA74195C3a',
    name: 'Axelar Wrapped FRAX',
    symbol: 'axlFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei',
    bridgeOnly: true
  },
  {
    chainId: 137,
    address: '0x162539172b53E9a93b7d98Fb6c41682De558a320',
    name: 'Gone',
    symbol: 'GONE',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/gone.png',
    coingeckoId: 'gone'
  },
  {
    chainId: 137,
    address: '0x69deD9B7658507ca8C5A6f1F6ff53276802ec228',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 137,
    address: '0x2598c30330D5771AE9F983979209486aE26dE875',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28916.png',
    name: 'Any Inu',
    symbol: 'AI',
    coingeckoId: 'any-inu'
  },
  {
    chainId: 137,
    address: '0xfecB6d3A5d3FdA8A37A072D5b9018709f690873b',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 137,
    address: '0x1ED2B2b097E92B2Fe95a172dd29840c71294F1d6',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 137,
    address: '0x72eC87f05CC5eBC4D24Fddba84c179d5e216016B',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 137,
    address: '0x75b33EAA41DBc1Aae041d718AdfA4D446dD35ACC',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 137,
    address: '0x01e91A094f5559f211e4ad4bED01468aBb64Bde3',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 137,
    address: '0x2a75a19a162ef79ed97012e31d8f9c06d3bb4f92',
    name: 'Poldo',
    symbol: 'POLDO',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/34537/standard/Poldo.png?1705324970',
    coingeckoId: 'poldo'
  },
  {
    chainId: 'quicksilver-2',
    address: 'uqck',
    name: 'Quicksilver',
    symbol: 'QCK',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24834.png',
    coingeckoId: 'quicksilver',
    ibcDenom: 'uqck',
    pathKey: 'uqck_quicksilver'
  },
  {
    chainId: 'regen-1',
    address: 'uregen',
    name: 'Regen Network',
    symbol: 'REGEN',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/regen.svg',
    coingeckoId: 'regen',
    ibcDenom: 'uregen',
    pathKey: 'regen_regen'
  },
  {
    chainId: 'regen-1',
    address: 'ibc/334740505537E9894A64E8561030695016481830D7B36E6A9B6D13C608B55653',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/334740505537E9894A64E8561030695016481830D7B36E6A9B6D13C608B55653',
    pathKey: 'axlusdc_regen'
  },
  {
    chainId: 'regen-1',
    address: 'ibc/62B27C470C859CBCB57DC12FCBBD357DD44CAD673362B47503FAA77523ABA028',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/62B27C470C859CBCB57DC12FCBBD357DD44CAD673362B47503FAA77523ABA028',
    pathKey: 'axleth_regen'
  },
  {
    chainId: 'regen-1',
    address: 'ibc/3C147E71BD9FEC5AAAED09BF022F1C06F52D360580D602F79A5389DA471E7BA3',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/3C147E71BD9FEC5AAAED09BF022F1C06F52D360580D602F79A5389DA471E7BA3',
    pathKey: 'axldai_regen'
  },
  {
    chainId: 'regen-1',
    address: 'ibc/E2CAC8B785E3E496891ABC7AAB1659F239B5023C1072BA21196AAA443F0F5F23',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'ibc/E2CAC8B785E3E496891ABC7AAB1659F239B5023C1072BA21196AAA443F0F5F23',
    pathKey: 'axlusdt_regen'
  },
  {
    chainId: 'regen-1',
    address: 'ibc/C0B2F6309C73078A793F8DB25B72028728F9CE1244A60E0D356DDF92861503CB',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/C0B2F6309C73078A793F8DB25B72028728F9CE1244A60E0D356DDF92861503CB',
    pathKey: 'axlbusd_regen'
  },
  {
    chainId: 'regen-1',
    address: 'ibc/47E16DE770374BE6ABE72A5264231DCEC92FD2711ACEB29B86574DBCCC228052',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/47E16DE770374BE6ABE72A5264231DCEC92FD2711ACEB29B86574DBCCC228052',
    pathKey: 'axlavax_regen'
  },
  {
    chainId: 'regen-1',
    address: 'ibc/417455B944F2C3A47811DB1C6AFA740911198939A97A987F0DEF94326D38E4D5',
    name: 'Axelar WGLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/417455B944F2C3A47811DB1C6AFA740911198939A97A987F0DEF94326D38E4D5',
    pathKey: 'axlglmr_regen'
  },
  {
    chainId: 'regen-1',
    address: 'ibc/08F89698ED1AEB855854C63901306D16E98186756A842828733252405675AF13',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/08F89698ED1AEB855854C63901306D16E98186756A842828733252405675AF13',
    pathKey: 'axlmatic_regen'
  },
  {
    chainId: 'regen-1',
    address: 'ibc/9D7B59A9F02B0D2F45FD1AA4441AB283E91F6B963F5E45883B1287C6FEBA9575',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/9D7B59A9F02B0D2F45FD1AA4441AB283E91F6B963F5E45883B1287C6FEBA9575',
    pathKey: 'axlwbtc_regen'
  },
  {
    chainId: 'regen-1',
    address: 'ibc/E83EB9C4EC33A836E4E9B0F3216A85BF54996A8891F366F2F677EE0E012AADC2',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/E83EB9C4EC33A836E4E9B0F3216A85BF54996A8891F366F2F677EE0E012AADC2',
    pathKey: 'axlbnb_regen'
  },
  {
    chainId: 'regen-1',
    address: 'ibc/E8FF33FF39F5AD98A45CBE679B02ADB861D477B418896002243B32DCD042FF26',
    name: 'Axelar WFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/E8FF33FF39F5AD98A45CBE679B02ADB861D477B418896002243B32DCD042FF26',
    pathKey: 'axlftm_regen'
  },
  {
    chainId: 'regen-1',
    address: 'ibc/007D8660648AA2A59BCD464BF5E4834D06BA49298CFAF67009A53A59F811DC02',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/007D8660648AA2A59BCD464BF5E4834D06BA49298CFAF67009A53A59F811DC02',
    commonKey: 'frax-wei',
    pathKey: 'frax_regen'
  },
  {
    chainId: 534352,
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/eth.svg',
    coingeckoId: 'ethereum'
  },
  {
    chainId: 534352,
    address: '0x5300000000000000000000000000000000000004',
    name: 'Wrapped ETH',
    symbol: 'WETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth'
  },
  {
    chainId: 534352,
    name: 'USDCoin',
    address: '0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/assets/usdc.svg',
    coingeckoId: 'usd-coin'
  },
  {
    chainId: 534352,
    name: 'Tether USD',
    address: '0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df',
    symbol: 'USDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether'
  },
  {
    chainId: 534352,
    name: 'Dai Stablecoin',
    address: '0xcA77eB3fEFe3725Dc33bccB54eDEFc3D9f764f97',
    symbol: 'DAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai'
  },
  {
    chainId: 534352,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/axelarnetwork/axelar-docs/main/public/images/assets/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc'
  },
  {
    chainId: 534352,
    address: '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true
  },
  {
    address: '0xb829b68f57CC546dA7E5806A929e53bE32a4625D',
    chainId: 534352,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/weth.svg',
    name: 'Axelar ETH',
    symbol: 'axlETH',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true
  },
  {
    chainId: 534352,
    address: '0x608ef9A3BffE206B86c3108218003b3cfBf99c84',
    name: 'Kyber Network Crystal',
    symbol: 'KNC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/knc.svg',
    coingeckoId: 'kyber-network-crystal'
  },
  {
    address: '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',
    chainId: 534352,
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17799.png',
    name: 'Axelar',
    symbol: 'AXL',
    coingeckoId: 'axelar',
    commonKey: 'uaxl',
    bridgeOnly: true
  },
  {
    address: '0x5C7e299CF531eb66f2A1dF637d37AbB78e6200C7',
    chainId: 534352,
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/dai.svg',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true
  },
  {
    chainId: 534352,
    address: '0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI: 'https://docs.axelar.dev/images/assets/wbtc.svg',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true
  },
  {
    chainId: 534352,
    address: '0x88DfaAABaf06f3a41D2606EA98BC8edA109AbeBb',
    name: 'Mai Stablecoin',
    symbol: 'axlWMAI',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/15264/small/mimatic-red.png?1620281018',
    coingeckoId: 'mimatic',
    commonKey: 'wmai-wei',
    bridgeOnly: true
  },
  {
    chainId: 534352,
    address: '0xa334884bF6b0A066d553D19e507315E839409e62',
    name: 'Ethos Reserve Note',
    symbol: 'ERN',
    decimals: 18,
    logoURI: 'https://docs.velodrome.finance/tokens/ERN.png',
    coingeckoId: 'ethos-reserve-note',
    commonKey: 'ern-wei',
    bridgeOnly: true
  },
  {
    chainId: 534352,
    address: '0xf7A0dd3317535eC4f4d29ADF9d620B3d8D5D5069',
    name: 'Staked ERN Vault',
    symbol: 'stERN',
    decimals: 18,
    commonKey: 'stern-wei',
    logoURI: 'https://github.com/0xsquid/assets/blob/main/images/tokens/stERN.svg?raw=true',
    coingeckoId: 'staked-ethos-reserve-note'
  },
  {
    chainId: 534352,
    address: '0x00e1724885473B63bCE08a9f0a52F35b0979e35A',
    name: 'Oath Token',
    symbol: 'OATH',
    decimals: 18,
    commonKey: 'oath-wei',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18520.png',
    coingeckoId: 'oath',
    bridgeOnly: true
  },
  {
    chainId: 534352,
    address: '0xB448eC505C924944ca8B2C55EF05c299eE0781df',
    name: 'Axelar Wrapped KNC',
    symbol: 'axlKNC',
    decimals: 18,
    logoURI:
      'https://storage.googleapis.com/ks-setting-1d682dca/538cbc06-ef8a-4acc-ac38-7f41d75f1666.png',
    coingeckoId: 'kyber-network-crystal',
    bridgeOnly: true,
    commonKey: 'knc-wei'
  },
  {
    chainId: 534352,
    address: '0x406Cde76a3fD20e48bc1E0F60651e60Ae204B040',
    name: 'Axelar Wrapped FRAX',
    symbol: 'axlFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    commonKey: 'frax-wei',
    bridgeOnly: true
  },
  {
    chainId: 534352,
    address: '0x41b94c5867f7F6217C9a30520Cb3e793B1ee1b97',
    name: 'axlTIA',
    symbol: 'axlTIA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/celestia.svg',
    coingeckoId: 'celestia',
    commonKey: 'utia',
    bridgeOnly: true
  },
  {
    chainId: 534352,
    address: '0x9cfB13E6c11054ac9fcB92BA89644F30775436e4',
    name: 'Axelar Wrapped wstETH',
    symbol: 'axl-wstETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wsteth.svg',
    coingeckoId: 'wrapped-steth',
    bridgeOnly: true,
    commonKey: 'wsteth-wei'
  },
  {
    chainId: 534352,
    address: '0x4f74ca4a686203a5D4eBF6E8868c5eBC450bf283',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    commonKey: 'sfrxeth-wei'
  },
  {
    chainId: 534352,
    address: '0xf3602C5A7f625181659445C8dDDde73dA15c22e3',
    name: 'Staked Frax',
    symbol: 'sFRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrax.svg',
    coingeckoId: '',
    commonKey: 'sfrax-wei'
  },
  {
    chainId: 534352,
    address: '0x219279953d8D23520B7878447e8A6c266a51de2f',
    name: 'Frax Price Index',
    symbol: 'FPI',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fpi.svg',
    coingeckoId: 'frax-price-index',
    bridgeOnly: true,
    commonKey: 'fpi-wei'
  },
  {
    chainId: 534352,
    address: '0x5860a0bF37133f8461b2DEDe7C80e55D6bfF3721',
    name: 'Frax Share',
    symbol: 'FXS',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/fxs.svg',
    coingeckoId: 'frax-share',
    bridgeOnly: true,
    commonKey: 'fxs-wei'
  },
  {
    chainId: 534352,
    address: '0xc13c0d723e01B02984499C672e205D5Ec9c05d10',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    bridgeOnly: true
  },
  {
    chainId: 534352,
    address: '0x64D599b3d0c5f1375e5e639E98aB86298261A30B',
    name: 'Chihuahua',
    symbol: 'HUAHUA',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/huahua.svg',
    coingeckoId: 'chihuahua-token',
    commonKey: 'uhuahua',
    bridgeOnly: true
  },
  {
    chainId: 534352,
    address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    bridgeOnly: true,
    commonKey: 'frxeth-wei'
  },
  {
    chainId: 'secret-4',
    address: 'uscrt',
    name: 'Secret Network',
    symbol: 'SCRT',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5604.png',
    coingeckoId: 'secret',
    ibcDenom: 'uscrt',
    pathKey: 'scrt_secret'
  },
  {
    chainId: 'secret-4',
    address: 'secret16vjfe24un4z7d3sp9vd0cmmfmz397nh2njpw3e',
    name: 'PSTAKE staked ATOM',
    symbol: 'stkATOM',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13175.png',
    coingeckoId: 'stkatom',
    ibcDenom: 'ibc/DEA3620A6407C63A287A4FE1683D07627F27AF7A83E077B1E51EDFF8833980FE',
    codeHash: '638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e',
    pathKey: 'stkatom_secret'
  },
  {
    chainId: 'secret-4',
    address: 'secret1vkq022x4q8t8kx9de3r84u669l65xnwf2lg3e6',
    codeHash: '638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    ibcDenom: 'ibc/FC0FF958BC92354A5EF218C511B6949B29407D9EBEB741E2833137961ABAFD96',
    pathKey: 'axlusdc_secret',
    commonKey: 'uusdc'
  },
  {
    chainId: 'pacific-1',
    address: 'usei',
    name: 'Sei',
    symbol: 'SEI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sei.svg',
    coingeckoId: 'sei-network',
    ibcDenom: 'usei',
    pathKey: 'sei_sei'
  },
  {
    chainId: 'pacific-1',
    address: 'ibc/CA6FBFAF399474A06263E10D0CE5AEBBE15189D6D4B2DD9ADE61007E68EB9DB0',
    name: 'Noble USDC',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/CA6FBFAF399474A06263E10D0CE5AEBBE15189D6D4B2DD9ADE61007E68EB9DB0',
    pathKey: 'nusdc_sei'
  },
  {
    chainId: 'pacific-1',
    address: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
    pathKey: 'axlusdc_sei'
  },
  {
    chainId: 'pacific-1',
    address: 'ibc/6C00E4AA0CC7618370F81F7378638AE6C48EFF8C9203CE1C2357012B440EBDB7',
    name: 'USDT',
    symbol: 'USDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    ibcDenom: 'ibc/6C00E4AA0CC7618370F81F7378638AE6C48EFF8C9203CE1C2357012B440EBDB7',
    pathKey: 'usdt_sei'
  },
  {
    chainId: 'pacific-1',
    address: 'ibc/91DF61C7EFA0E52C56BA0724E80B93DF6ADECD3A5B19D38FD2B4A7F955D2E2E7',
    name: 'Open Exchange Token',
    symbol: 'OX',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ox.png',
    coingeckoId: 'open-exchange-token',
    ibcDenom: 'ibc/91DF61C7EFA0E52C56BA0724E80B93DF6ADECD3A5B19D38FD2B4A7F955D2E2E7',
    pathKey: 'ox_sei',
    bridgeOnly: true,
    commonKey: 'ox-wei'
  },
  {
    chainId: 'sentinelhub-2',
    address: 'dvpn',
    name: 'Sentinel',
    symbol: 'DVPN',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/dvpn.svg',
    coingeckoId: 'sentinel',
    ibcDenom: 'dvpn',
    pathKey: 'dvpn_sentinel'
  },
  {
    chainId: 'sommelier-3',
    address: 'usomm',
    name: 'Sommelier',
    symbol: 'SOMM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/somm.svg',
    coingeckoId: 'sommelier',
    ibcDenom: 'usomm',
    pathKey: 'somm_sommelier'
  },
  {
    chainId: 'stargaze-1',
    address: 'ustars',
    name: 'Stargaze',
    symbol: 'STARS',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stars.svg',
    coingeckoId: 'stargaze',
    ibcDenom: 'ustars',
    pathKey: 'stars_stargaze'
  },
  {
    chainId: 'stargaze-1',
    address: 'ibc/96274e25174ee93314d8b5636d2d2f70963e207c22f643ec41949a3cbeda4c72',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/96274e25174ee93314d8b5636d2d2f70963e207c22f643ec41949a3cbeda4c72',
    pathKey: 'axlusdc_stargaze'
  },
  {
    chainId: 'stargaze-1',
    address: 'ibc/4A1C18CA7F50544760CF306189B810CE4C1CB156C7FC870143D401FE7280E591',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/4A1C18CA7F50544760CF306189B810CE4C1CB156C7FC870143D401FE7280E591',
    pathKey: 'nusdc_stargaze'
  },
  {
    chainId: 'stargaze-1',
    address: 'ibc/665759A355AFDAAB2479E56DEA1A59482684AD1AA6A5A0C61432F6198F5997F4',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/665759A355AFDAAB2479E56DEA1A59482684AD1AA6A5A0C61432F6198F5997F4',
    commonKey: 'frax-wei',
    pathKey: 'frax_stargaze'
  },
  {
    chainId: 'stride-1',
    address: 'ustrd',
    name: 'Stride',
    symbol: 'STRD',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/strd.svg',
    coingeckoId: 'stride',
    ibcDenom: 'ustrd',
    pathKey: 'strd_stride',
    commonKey: 'ustrd'
  },
  {
    chainId: 'stride-1',
    address: 'stuosmo',
    name: 'Stride Osmo',
    symbol: 'stOSMO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stosmo.svg',
    coingeckoId: 'stride-staked-osmo',
    ibcDenom: 'stuosmo',
    pathKey: 'stosmo_stride'
  },
  {
    chainId: 'stride-1',
    address: 'stuatom',
    name: 'Stride Atom',
    symbol: 'stATOM',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/statom.svg',
    coingeckoId: 'stride-staked-atom',
    ibcDenom: 'stuatom',
    pathKey: 'statom_stride',
    commonKey: 'stuatom'
  },
  {
    chainId: 'stride-1',
    address: 'stujuno',
    name: 'Stride Juno',
    symbol: 'stJUNO',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stjuno.svg',
    coingeckoId: 'stride-staked-juno',
    ibcDenom: 'stujuno',
    pathKey: 'stjuno_stride'
  },
  {
    chainId: 'stride-1',
    address: 'stustars',
    name: 'Stride Stars',
    symbol: 'stSTARS',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ststars.svg',
    coingeckoId: 'stride-staked-stars',
    ibcDenom: 'stustars',
    pathKey: 'ststars_stride'
  },
  {
    chainId: 'stride-1',
    address: 'staevmos',
    name: 'Stride Evmos',
    symbol: 'stEVMOS',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stevmos.svg',
    coingeckoId: 'stride-staked-evmos',
    ibcDenom: 'staevmos',
    pathKey: 'staevmos_stride'
  },
  {
    chainId: 'stride-1',
    address: 'stuumee',
    name: 'stUMEE',
    symbol: 'stUMEE',
    decimals: 0,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/stumee.svg',
    coingeckoId: 'umee',
    ibcDenom: 'stuumee',
    pathKey: 'stuumee_stride'
  },
  {
    chainId: 'teritori-1',
    address: 'utori',
    name: 'Teritori',
    symbol: 'TORI',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/tori.svg',
    coingeckoId: 'teritori',
    commonKey: 'utori',
    ibcDenom: 'utori',
    pathKey: 'tori_tori'
  },
  {
    chainId: 'columbus-5',
    address: 'uluna',
    name: 'Luna Classic',
    symbol: 'LUNC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/lunc.svg',
    coingeckoId: 'terra-luna',
    ibcDenom: 'uluna',
    commonKey: 'uluna',
    pathKey: 'luna_terra'
  },
  {
    chainId: 'columbus-5',
    address: 'ibc/E1E3674A0E4E1EF9C69646F9AF8D9497173821826074622D831BAB73CCB99A2D',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/E1E3674A0E4E1EF9C69646F9AF8D9497173821826074622D831BAB73CCB99A2D',
    pathKey: 'axlusdc_terra'
  },
  {
    chainId: 'columbus-5',
    address: 'ibc/9B68CC79EFF12D25AF712EB805C5062B8F97B2CCE5F3FE55B107EE03095514A3',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    ibcDenom: 'ibc/9B68CC79EFF12D25AF712EB805C5062B8F97B2CCE5F3FE55B107EE03095514A3',
    pathKey: 'axleth_terra'
  },
  {
    chainId: 'columbus-5',
    address: 'ibc/911B721F15A40ABB29636CBF8AE630076DDF62841ACE7E6D879405CA8870CEA2',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/wbtc.svg',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    ibcDenom: 'ibc/911B721F15A40ABB29636CBF8AE630076DDF62841ACE7E6D879405CA8870CEA2',
    pathKey: 'axlwbtc_terra'
  },
  {
    chainId: 'columbus-5',
    address: 'ibc/386A4031D68DE6370B85F9FF7E89CEF8DE7CDE01CC193CBD87BD3ED60F6662CE',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    ibcDenom: 'ibc/386A4031D68DE6370B85F9FF7E89CEF8DE7CDE01CC193CBD87BD3ED60F6662CE',
    pathKey: 'axlusdt_terra'
  },
  {
    chainId: 'columbus-5',
    address: 'ibc/1g6fm3yu79gv0rc8067n2nnfpf0vks6n0wpzaf4u7w48tdrmj98zsy7uu00',
    name: 'TRIT',
    symbol: 'TRIT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/trit.svg',
    coingeckoId: '',
    ibcDenom: 'ibc/1g6fm3yu79gv0rc8067n2nnfpf0vks6n0wpzaf4u7w48tdrmj98zsy7uu00',
    pathKey: 'trit_terra'
  },
  {
    chainId: 'phoenix-1',
    address: 'uluna',
    name: 'Luna',
    symbol: 'LUNA',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20314.png',
    coingeckoId: 'terra-luna-2',
    ibcDenom: 'uluna',
    pathKey: 'luna2_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/B3504E092456BA618CC28AC671A71FB08C6CA0FD0BE7C8A5B5A3E2DD933CC9E4',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/B3504E092456BA618CC28AC671A71FB08C6CA0FD0BE7C8A5B5A3E2DD933CC9E4',
    pathKey: 'axlusdc_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/BC8A77AFBD872FDC32A348D3FB10CC09277C266CFE52081DE341C7EC6752E674',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/BC8A77AFBD872FDC32A348D3FB10CC09277C266CFE52081DE341C7EC6752E674',
    pathKey: 'axleth_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/E46EF5449878F6B81219163F211E7329CC0729AA99DA8A589A865F82F754ADE8',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/E46EF5449878F6B81219163F211E7329CC0729AA99DA8A589A865F82F754ADE8',
    pathKey: 'axldai_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/CBF67A2BCF6CAE343FDF251E510C8E18C361FC02B23430C121116E0811835DEF',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'ibc/CBF67A2BCF6CAE343FDF251E510C8E18C361FC02B23430C121116E0811835DEF',
    pathKey: 'axlusdt_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/FDDF98401F29AC63212C1742F9EC86D3AA1E1BE94BF9EB2F72B990C490303F42',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/FDDF98401F29AC63212C1742F9EC86D3AA1E1BE94BF9EB2F72B990C490303F42',
    pathKey: 'axlbusd_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/F992067A054C819B42D2DAB57F5CCE347D38352EB90453E59D566BFE64F1614B',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/F992067A054C819B42D2DAB57F5CCE347D38352EB90453E59D566BFE64F1614B',
    pathKey: 'axlavax_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/D54CE4CD2927F744CDCA844DD0E1A5DF88762274C55CD9AAB13E504A29BE8933',
    name: 'Axelar WGLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/D54CE4CD2927F744CDCA844DD0E1A5DF88762274C55CD9AAB13E504A29BE8933',
    pathKey: 'axlglmr_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/14E4FD1AB72DE9BF1D6725CBA18373C406CB9A7DA17955299F3F4DC5C6131A4E',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/14E4FD1AB72DE9BF1D6725CBA18373C406CB9A7DA17955299F3F4DC5C6131A4E',
    pathKey: 'axlmatic_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/05D299885B07905B6886F554B39346EA6761246076A1120B1950049B92B922DD',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/05D299885B07905B6886F554B39346EA6761246076A1120B1950049B92B922DD',
    pathKey: 'axlwbtc_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/1319C6B38CA613C89D78C2D1461B305038B1085F6855E8CD276FE3F7C9600B4C',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/1319C6B38CA613C89D78C2D1461B305038B1085F6855E8CD276FE3F7C9600B4C',
    pathKey: 'axlbnb_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/19E687E77D1AE3CADBB3DE487277AFEC0E340A84334D6ED3F216EF25A7075746',
    name: 'Axelar WFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/19E687E77D1AE3CADBB3DE487277AFEC0E340A84334D6ED3F216EF25A7075746',
    pathKey: 'axlftm_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/2C962DAB9F57FE0921435426AE75196009FAA1981BF86991203C8411F8980FDB',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'usd-coin',
    ibcDenom: 'ibc/2C962DAB9F57FE0921435426AE75196009FAA1981BF86991203C8411F8980FDB',
    pathKey: 'nusdc_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/F89222965B85BEDE242359DDB25339BCEEFDA8C687F49E78623FD5713F2DEE03',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    ibcDenom: 'ibc/F89222965B85BEDE242359DDB25339BCEEFDA8C687F49E78623FD5713F2DEE03',
    commonKey: 'sfrxeth-wei',
    pathKey: 'sfrxeth_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/2E435CEEEBA18CCB2719E0182BC5D142A364D6CCE9957DE6E1AC4D62127D2913',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/2E435CEEEBA18CCB2719E0182BC5D142A364D6CCE9957DE6E1AC4D62127D2913',
    commonKey: 'frax-wei',
    pathKey: 'frax_terra2'
  },
  {
    chainId: 'phoenix-1',
    address: 'ibc/1EA41719164ECAC4272F16B8916D42F666881B0742FB1D59A26488735CCD9BE5',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    ibcDenom: 'ibc/1EA41719164ECAC4272F16B8916D42F666881B0742FB1D59A26488735CCD9BE5',
    bridgeOnly: true,
    commonKey: 'frxeth-wei',
    pathKey: 'frxeth_terra2'
  },
  {
    chainId: 'umee-1',
    address: 'uumee',
    name: 'Umee',
    symbol: 'UMEE',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/umee.svg',
    coingeckoId: 'umee',
    ibcDenom: 'uumee',
    pathKey: 'umee_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/49788C29CD84E08D25CA7BE960BC1F61E88FEFC6333F58557D236D693398466A',
    name: 'Axelar USDC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdc.svg',
    coingeckoId: 'axlusdc',
    commonKey: 'uusdc',
    ibcDenom: 'ibc/49788C29CD84E08D25CA7BE960BC1F61E88FEFC6333F58557D236D693398466A',
    pathKey: 'axlusdc_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/04CE51E6E02243E565AE676DD60336E48D455F8AAD0611FA0299A22FDAC448D6',
    name: 'Axelar ETH',
    symbol: 'axlWETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/weth.svg',
    coingeckoId: 'weth',
    commonKey: 'weth-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/04CE51E6E02243E565AE676DD60336E48D455F8AAD0611FA0299A22FDAC448D6',
    pathKey: 'axleth_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/C86651B4D30C1739BF8B061E36F4473A0C9D60380B52D01E56A6874037A5D060',
    name: 'Axelar DAI',
    symbol: 'axlDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    coingeckoId: 'dai',
    commonKey: 'dai-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/C86651B4D30C1739BF8B061E36F4473A0C9D60380B52D01E56A6874037A5D060',
    pathKey: 'axldai_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/223420B0E8CF9CC47BCAB816AB3A20AE162EED27C1177F4B2BC270C83E11AD8D',
    name: 'Axelar USDT',
    symbol: 'axlUSDT',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/usdt.svg',
    coingeckoId: 'tether',
    commonKey: 'uusdt',
    bridgeOnly: true,
    ibcDenom: 'ibc/223420B0E8CF9CC47BCAB816AB3A20AE162EED27C1177F4B2BC270C83E11AD8D',
    pathKey: 'axlusdt_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/D35E5113823942EE8655934A5476B2C4C1C84C8E83AEF04A89C256FC51437463',
    name: 'Axelar BUSD',
    symbol: 'axlBUSD',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/busd.svg',
    coingeckoId: 'weth',
    commonKey: 'busd-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/D35E5113823942EE8655934A5476B2C4C1C84C8E83AEF04A89C256FC51437463',
    pathKey: 'axlbusd_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/5B771473DCD5BAFE9D3C01AFC4C42872D3B104D9CFA7924A9D02E5DEAB8D20E3',
    name: 'Axelar WAVAX',
    symbol: 'axlWAVAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/avax.svg',
    coingeckoId: 'wrapped-avax',
    commonKey: 'wavax-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/5B771473DCD5BAFE9D3C01AFC4C42872D3B104D9CFA7924A9D02E5DEAB8D20E3',
    pathKey: 'axlavax_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/A629BAD41F2473B47BB6D340A1E58D1C02372DAF005DD4B7AC1BD1F44B2593E2',
    name: 'Axelar WGLMR',
    symbol: 'axlWGLMR',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/glmr.svg',
    coingeckoId: 'wrapped-moonbeam',
    commonKey: 'wglmr-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/A629BAD41F2473B47BB6D340A1E58D1C02372DAF005DD4B7AC1BD1F44B2593E2',
    pathKey: 'axlglmr_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/FAEC929814E0D916C019EB4B8BE58360EC3B6AB6A2B3185CB1EA0B54832DEE68',
    name: 'Axelar WMATIC',
    symbol: 'axlWMATIC',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/matic.svg',
    coingeckoId: 'matic-network',
    commonKey: 'wmatic-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/FAEC929814E0D916C019EB4B8BE58360EC3B6AB6A2B3185CB1EA0B54832DEE68',
    pathKey: 'axlmatic_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/153B97FE395140EAAA2D7CAC537AF1804AEC5F0595CBC5F1603094018D158C0C',
    name: 'Axelar WBTC',
    symbol: 'axlWBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    coingeckoId: 'wrapped-bitcoin',
    commonKey: 'wbtc-satoshi',
    bridgeOnly: true,
    ibcDenom: 'ibc/153B97FE395140EAAA2D7CAC537AF1804AEC5F0595CBC5F1603094018D158C0C',
    pathKey: 'axlwbtc_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/8184469200C5E667794375F5B0EC3B9ABB6FF79082941BF5D0F8FF59FEBA862E',
    name: 'Axelar WBNB',
    symbol: 'axlWBNB',
    decimals: 18,
    logoURI: 'https://axelarscan.io/logos/chains/binance.png',
    coingeckoId: 'wbnb',
    commonKey: 'wbnb-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/8184469200C5E667794375F5B0EC3B9ABB6FF79082941BF5D0F8FF59FEBA862E',
    pathKey: 'axlbnb_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/87FAA671A952F1203496AEF3787AC23A06592B2B52F79149AA67C621470673E6',
    name: 'Axelar WFTM',
    symbol: 'axlWFTM',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ftm.svg',
    coingeckoId: 'wrapped-fantom',
    commonKey: 'wftm-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/87FAA671A952F1203496AEF3787AC23A06592B2B52F79149AA67C621470673E6',
    pathKey: 'axlftm_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/B65DC9ECFAF78C96F484B8965A694985B9445C4185BD994E34BB703250B2172C',
    name: 'Axelar FIL',
    symbol: 'axlFIL',
    decimals: 18,
    logoURI: 'https://docs.axelar.dev/images/assets/wfil.svg',
    coingeckoId: 'filecoin',
    commonKey: 'wfil-wei',
    bridgeOnly: true,
    ibcDenom: 'ibc/B65DC9ECFAF78C96F484B8965A694985B9445C4185BD994E34BB703250B2172C',
    pathKey: 'axlfil_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/A05909C8EEE180BAECC46D91CB29229204C35100F3BD8F0C1F6FF5D72A741FB6',
    name: 'PSTAKE staked ATOM',
    symbol: 'stkATOM',
    decimals: 6,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13175.png',
    coingeckoId: 'stkatom',
    ibcDenom: 'ibc/A05909C8EEE180BAECC46D91CB29229204C35100F3BD8F0C1F6FF5D72A741FB6',
    pathKey: 'stkatom_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/D1CB2804AA5EB64D503F28E8DF3552F8A4D642802B66EFE50DE432B755F37AE1',
    name: 'Axelar',
    symbol: 'AXL',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/axl.svg',
    coingeckoId: 'axelar',
    ibcDenom: 'ibc/D1CB2804AA5EB64D503F28E8DF3552F8A4D642802B66EFE50DE432B755F37AE1',
    pathKey: 'axl_umee',
    commonKey: 'uaxl'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/3F972A6BFE64248AF19C9328FA59A1270CBC57D4545A099860E035C2BA4C79FD',
    name: 'Staked Frax Ether',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/sfrxeth.svg',
    coingeckoId: 'staked-frax-ether',
    ibcDenom: 'ibc/3F972A6BFE64248AF19C9328FA59A1270CBC57D4545A099860E035C2BA4C79FD',
    commonKey: 'sfrxeth-wei',
    pathKey: 'sfrxeth_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/4DA8B7741C3031946F56600A1439CEE3E0494FDAFEC27746BE213691E9C15C08',
    name: 'Frax',
    symbol: 'FRAX',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frax.svg',
    coingeckoId: 'frax',
    ibcDenom: 'ibc/4DA8B7741C3031946F56600A1439CEE3E0494FDAFEC27746BE213691E9C15C08',
    commonKey: 'frax-wei',
    pathKey: 'frax_umee'
  },
  {
    chainId: 'umee-1',
    address: 'ibc/C0081F3EA4EB59A1F4864B2D1AF2E9EC0E5A7A0AC1293BAC7482D089D4E364AB',
    name: 'Frax Ether',
    symbol: 'frxETH',
    decimals: 18,
    logoURI: 'https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/frxeth.svg',
    coingeckoId: 'frax-ether',
    ibcDenom: 'ibc/C0081F3EA4EB59A1F4864B2D1AF2E9EC0E5A7A0AC1293BAC7482D089D4E364AB',
    bridgeOnly: true,
    commonKey: 'frxeth-wei',
    pathKey: 'frxeth_umee'
  }
]

enum DappEnvironment {
  'staging' = 'staging',
  'production' = 'production',
  'development' = 'development'
}

export const TokensList =
  process.env.NEXT_PUBLIC_ENVIRONMENT === DappEnvironment.production ? tokensMainnet : tokensTestnet
