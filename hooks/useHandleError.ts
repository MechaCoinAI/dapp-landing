import { capitalizeFirstLetter, notifyErrors } from '@/utils/functions'
import { useCallback, useMemo } from 'react'

const useHandleError = () => {
  const showError = useCallback((error: Error) => {
    const dataError: DataError = {
      ...error
    }
    if (dataError) {
      if (dataError.code === 4001) {
        notifyErrors(capitalizeFirstLetter(`${dataError.shortMessage}`))
        return
      } else if (dataError.code?.toString() === 'ACTION_REJECTED') {
        if (dataError.reason) {
          notifyErrors(capitalizeFirstLetter(dataError?.reason?.toString()))
        } else {
          notifyErrors('Unknown error')
        }
      } else {
        notifyErrors(capitalizeFirstLetter(`${dataError?.reason}`))
        return
      }
    }
  }, [])
  return useMemo(() => {
    return {
      showError
    }
  }, [showError])
}

export default useHandleError
