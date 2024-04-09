export {}



declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */

  

  interface DataChainsSelect extends ChainAxelar {
    data: ChainAxelar[]
  }
  interface TokenAssetFromTo {
    from: TokenAxelar
    to: TokenAxelar
  }

  interface DataFromTo {
    from: DataChainToken
    to: DataChainToken
  }

  interface DataChainToken {
    chains: DataChainsSelect
    tokens: DataTokensSelect
  }

  interface Window {
    ethereum: import('ethers').providers.ExternalProvider
  }

  interface ChainAxelar {
    chainName: string
    axelarChainName?: string
    blockExplorerUrls: string[]
    bridges: {
      axelar: {
        gateway: string
      }
      cctp: {
        cctpDomain: number
        tokenMessenger: string
      }
    }
    chainIconURI: string
    chainId: number
    chainNativeContracts: {
      ensRegistry: string
      multicall: string
      usdcToken: string
      wrappedNativeToken: string
    }
    chainType: string
    compliance: {
      trmIdentifier: string
    }
    enableBoostByDefault: boolean
    estimatedBoostRouteDuration: number
    estimatedRouteDuration: number
    nativeCurrency: NativeCurrency
    networkIdentifier: string
    networkName: string
    rpc: string
    sameChainSwapsSupported: boolean
    squidContracts: SquidContracts
    swapAmountForGas: string
  }

  interface NativeCurrency {
    decimals: number
    icon: string
    name: string
    symbol: string
  }
  interface SquidContracts {
    defaultCrosschainToken: string
    squidFeeCollector: string
    squidMulticall: string
    squidRouter: string
  }

  interface TokenAxelar {
    amount: string
    address: string
    chainId: number
    coingeckoId: string
    decimals: number
    logoURI: string
    name: string
    symbol: string
    type: string
    disabled?: boolean
  }

  interface DataTokensSelect extends TokenAxelar {
    tokenList: TokenAxelar[]
  }

  interface Voice {
    voice_id: string
    name: string
    preview_url: string
  }

  interface DataError {
    code?: number
    data?: DataMessage
    message?: string
    stack?: string
    name?: string
    reason?: string
    shortMessage?: string
  }

  interface DataMessage {
    cause: CauseError
    code: number
    message: string
  }

  interface CauseError {
    code: number
    details: string
    shortMessage: string
    message: string
  }

  interface RouteSquid {
    route: {
      estimate: Estimate
      params: Params
      transactionRequest: TransactionRequest
    }
  }

  interface Estimate {
    aggregatePriceImpact: string
    estimatedRouteDuration: number
    exchangeRate: string
    feeCosts: FeeCosts[]
    fromAmount: string
    fromAmountUSD: string
    gasCosts: GasCosts[]
    isExpressSupported: boolean
    route: Route
    sendAmount: string
    toAmount: string
    toAmountMin: string
    toAmountUSD: string
  }

  interface FeeCosts {
    amount: string
    amountUSD: string
    description: string
    name: string
    percentage: string
    token: TokenAxelar
  }

  interface GasCosts {
    amount: string
    amountUSD: string
    estimate: string
    gasPrice: string
    limit: string
    maxFeePerGas: string
    maxPriorityFeePerGas: string
    token: TokenAxelar
    type: string
  }

  interface Route {
    fromChain: RouteChain[]
    toChain: RouteChain[]
  }

  interface RouteChain {
    dex: Dex
    dynamicSlippage: number
    exchangeRate: string
    fromAmount: string
    fromToken: TokenAxelar
    isFrom: boolean
    path: string[]
    priceImpact: string
    squidCallType: number
    swapType: string
    target: string
    toAmount: string
    toAmountMin: string
    toToken: TokenAxelar
    type: string
  }

  interface Params {
    collectFees: {
      feeLocation: string
    }
    fromAddress: string
    fromAmount: string
    fromChain: string
    integratorId: string
    slippage: number
    slippageConfig: string
    toAddress: string
    toChain: string
    fromToken: TokenAxelar
    toToken: TokenAxelar
  }

  interface TransactionRequest {
    data: string
    gasLimit: string
    gasPrice: string
    maxFeePerGas: string
    maxPriorityFeePerGas: string
    routeType: string
    targetAddress: string
    value: string
  }
}
