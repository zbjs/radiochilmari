import HoursCard from '@/components/ui/HoursCard'
import RdrsProgram from '@/components/ui/RdrsProgram'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900'>
      <main className=''>
        <HoursCard />
        <RdrsProgram />
      </main>
    </div>
  )
}

export default page