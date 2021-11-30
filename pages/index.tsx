
import { Box, RecentOrderPaper, FilterTab } from 'components/dashboard'
import type { NextPage } from 'next'
import React from 'react'

const Dashborad: NextPage = () => {
  return (
    <section className='flex'>
      <div className='space-y-4 md:w-9/12  px-7 '>
        <h1 className='font-bold text-lg'>Welcome, Porlar</h1>
        <FilterTab />
        <Box />
        <div className='flex gap-3'>
          <RecentOrderPaper />
        </div>
      </div>
      <section className='md:w-3/12 border-2 border-green-600'>
        <div>Discount</div>
      </section>
    </section>

  )
}

export default Dashborad
