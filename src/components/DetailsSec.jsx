import React from 'react'
import Navbar from './Navbar'
import DomainMethodologies from './DomainMethodologies'
import HonorsAndAwards from './HonorsAndAwards'

function DetailsSec() {
  return (
    <div className='bg-[#f3f2ee] relative'>
      <Navbar />
      <div className='p-6 flex flex-col gap-6'>
        <DomainMethodologies />
        <HonorsAndAwards />
      </div>
   </div>
  )
}

export default DetailsSec