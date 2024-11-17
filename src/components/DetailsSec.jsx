import React from 'react'
import Navbar from './Navbar'
import DomainMethodologies from './DomainMethodologies'
import HonorsAndAwards from './HonorsAndAwards'
import PlatformPractices from './PlatformPractices'

function DetailsSec() {
  return (
    <div className='bg-[#f3f2ee] relative' id='detailsSec'>
      <Navbar />
      <div className='py-8 px-6 flex flex-col gap-6'>
        <DomainMethodologies />
        <HonorsAndAwards />
        <PlatformPractices />
      </div>
   </div>
  )
}

export default DetailsSec