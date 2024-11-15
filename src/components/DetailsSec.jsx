import React from 'react'
import Navbar from './Navbar'
import DomainMethodologies from './DomainMethodologies'

function DetailsSec() {
  return (
    <div className='bg-[#f3f2ee] relative'>
      <Navbar />
      <div className='p-6'>
        <DomainMethodologies />
      </div>
   </div>
  )
}

export default DetailsSec