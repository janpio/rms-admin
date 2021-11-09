
import { Box, RecentOrderPaper, FilterTab } from 'components/dashboard'
import type { NextPage } from 'next'
import React from 'react'

const Dashborad: NextPage = () => {
  return (
    <div className='space-y-3'>
      <h1 className='font-bold text-lg'>Welcome, Porlar</h1>
      <FilterTab />
      <Box />
      <RecentOrderPaper />
    </div>
  )
}

export default Dashborad
