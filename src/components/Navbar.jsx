import { ChevronDownCircle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-[#F4F2EE] pt-6 pb-0.5 px-5">
      <div className="bg-gradient-to-r from-[#565655] to-[#191918] text-white flex justify-between items-center px-10 py-2.5 h-10 rounded-full">
        <h2 className="text-[20px] font-extrabold">Portfolio</h2>
        <nav className="flex items-center space-x-4 text-4">
          <Link to={'/'} className="flex items-center text-white cursor-pointer">
            <span className="mr-1">Primary Section</span>
            <ChevronDownCircle color='white' size={16} />
          </Link>
          <div className="w-px h-5 bg-white mx-2"></div>
          <Link to={'/'} className="flex items-center text-white cursor-pointer">
            <span className="mr-1">Secondary Section</span>
            <ChevronDownCircle color='white' size={16} />
          </Link>
        </nav>
        <img className="w-16 h-[22px] bg-white object-cover block" src="/logo.png" alt="logo" />
      </div>
    </div>
  )
}

export default Navbar