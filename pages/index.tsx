
import Box from 'components/dashboard/Box'
import FilterTab from 'components/dashboard/FilterTab'
import type { NextPage } from 'next'

const Dashborad: NextPage = () => {
  return (
    <div>
      <h1 className='my-4 font-bold'>Welcome, Porlar</h1>
      {/* Filer By Day,Weak,Month */}
      <div className='mb-3'>
        <FilterTab />
      </div>
      <Box />
    </div>
  )
}

export default Dashborad
