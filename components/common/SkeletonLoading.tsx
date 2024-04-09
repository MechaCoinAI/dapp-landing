import React from 'react'

const SkeletonLoading = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="h-8 w-24 bg-gray-200 rounded-full dark:bg-[#302825]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default SkeletonLoading
