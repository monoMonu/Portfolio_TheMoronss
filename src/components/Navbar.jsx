import { ChevronDownCircle } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-[#565655ed] to-[#191918ed] text-white flex justify-between items-center px-10 py-2.5 h-10 mx-5 rounded-full sticky top-6 z-50">
      <h2 className="text-[20px] font-extrabold">Portfolio</h2>
      <nav className="flex items-center space-x-4 text-4">
        <a href={'/#detailedViewSec'} className="flex items-center text-white cursor-pointer">
          <span className="mr-1">Primary Section</span>
          <ChevronDownCircle color='white' size={16} />
        </a>
        <div className="w-px h-5 bg-white mx-2"></div>
        <a href={'/#secondarySec'} className="flex items-center text-white cursor-pointer">
          <span className="mr-1">Secondary Section</span>
          <ChevronDownCircle color='white' size={16} />
        </a>
      </nav>
      <img className="w-16 h-[22px] bg-white object-cover block" src="/logo.png" alt="logo" />
    </div>
  )
}

export default Navbar