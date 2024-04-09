import { Address } from 'wagmi'
export const LocalStorage = (function () {
  async function _setTrxHash(userAddress: Address, TrxHash: string, status: any, amountToken: number, fromTokenInfo_name: string) {
    let trxHashMap = JSON.parse(localStorage.getItem('trxHashMap') || '{}')
    if (!trxHashMap[userAddress]) {
      trxHashMap[userAddress] = []
    }
    trxHashMap[userAddress].push({ hash: TrxHash, status: status, amountToken: amountToken, fromTokenInfo_name: fromTokenInfo_name })
    if (trxHashMap[userAddress].length > 10) {
      trxHashMap[userAddress].shift()
    }
    localStorage.setItem('trxHashMap', JSON.stringify(trxHashMap))
  }

  async function _getTrxHash(userAddress: Address): Promise<string[]> {
    let trxHashMap = JSON.parse(localStorage.getItem('trxHashMap') || '{}')
    return trxHashMap[userAddress] || []
  }
  async function _updateTrxHashStatus(userAddress: Address, TrxHash: string, newStatus: any) {
    let trxHashMap = JSON.parse(localStorage.getItem('trxHashMap') || '{}')
    if (trxHashMap[userAddress]) {
      const transactions = trxHashMap[userAddress]
      const transactionIndex = transactions.findIndex((trx: any) => trx.hash === TrxHash)
      if (transactionIndex !== -1) {
        transactions[transactionIndex].status = newStatus
        localStorage.setItem('trxHashMap', JSON.stringify(trxHashMap))
      }
    }
  }
  function _removeTrxPending(userAddress: Address) {
    let trxHashMap = JSON.parse(localStorage.getItem('trxHashMap') || '{}')
    if (trxHashMap[userAddress]) {
      trxHashMap[userAddress] = trxHashMap[userAddress].filter(
        (item: any) => item.hash !== 'pending'
      )
      localStorage.setItem('trxHashMap', JSON.stringify(trxHashMap))
    }
  }
  return {
    setTrxHashList: _setTrxHash,
    getTrxHashList: _getTrxHash,
    updateTrxHashStatus: _updateTrxHashStatus,
    removeTrxPending: _removeTrxPending
  }
})()
