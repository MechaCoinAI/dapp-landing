'use client'
import { pointService } from '@/service/pointService'
import React, { useEffect, useMemo, useState } from 'react'

const useGetTopPoint = () => {
  const [topPoints, setTopPoints] = useState<any>([])

  const getListTopPoints = async () => {
    const res = await pointService.getTopPoint({})
    if (res && res.data) {
      setTopPoints(res.data)
    }
  }

  useEffect(() => {
    getListTopPoints()
  }, [])

  return useMemo(() => {
    return {
      topPoints
    }
  }, [topPoints])
}

export default useGetTopPoint
