
import { Box, RecentOrderPaper, FilterTab } from 'components/dashboard'
import type { NextPage } from 'next'
import React from 'react'

const Dashborad: NextPage = () => {
  return (
    <div className='space-y-3'>
      <h1 className='font-bold text-lg'>Welcome, Porlar</h1>
      <FilterTab />
      <Box />
      <div className='flex gap-3'>
        <RecentOrderPaper />
        <RecentOrderPaper />
        <RecentOrderPaper />
      </div>

    </div>
  )
}

export default Dashborad
