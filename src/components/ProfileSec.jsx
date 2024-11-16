import React from 'react'
import { AtSign, PhoneCall } from 'lucide-react';

function ProfileSec() {
  return (
    <div className="bg-[#1B1B1B] text-[#ffffff] px-6  min-w-[484px]">

      <img src='/pfp.jpg' alt="Profile" className="w-[190px] h-[190px] rounded-full mt-20 object-cover" />

      <h2 className="text-[36px] leading-[54px] font-bold my-1.5">Name</h2>

      <div className='flex flex-col gap-1.5 border-[1px] border-[rgba(255, 255, 255, .3)] p-2.5 w-full mb-4 rounded-[10px]'>
        <div className='flex items-center font-bold justify-between text-[24px] leading-[36px]'>
          <p>Profile Summary</p>
          <span className='w-4 h-4 text-[16px] leading-5 bg-white rounded-full grid place-items-center text-[#1b1b1b]'>i</span>
        </div>
        <SummaryRow title="Experience Years+" styling="justify-between">2</SummaryRow>
        <SummaryRow title="Graduation Years" styling="justify-between">
          3<sup>rd</sup>
        </SummaryRow>
        <SummaryRow title="Contact Details" styling="justify-between">
          <AtSign size={16} className='inline-block mr-1.5' />
          <PhoneCall size={16} className='inline-block' />
        </SummaryRow>
        <SummaryRow title="Working Category" styling="justify-between">Junior SDE</SummaryRow>
        <SummaryRow title="Aspiring Domain" styling="justify-between">DevOps</SummaryRow>
      </div>

      <div className='flex flex-col border-[1px] border-[rgba(255, 255, 255, .3)] p-2.5 w-full my-7 rounded-[10px]'>
        <div className='flex items-center font-bold justify-between text-[24px] leading-[36px]'>
          <p>Credibility Score</p>
          <span className='w-4 h-4 text-[16px] leading-5 bg-white rounded-full grid place-items-center text-[#1b1b1b]'>i</span>
        </div>
        <div className="flex items-center py-1.5">
          <div className="flex flex-col gap-1.5">
            <SummaryRow title={"Background Checks"}>
              <span className='pl-1 text-[#43C647] text-[10px] font-bold'>PASSED</span>
            </SummaryRow>
            <SummaryRow title={"Domain Knowledge Tests"}>
              <span className='pl-1 text-[#43C647] text-[10px] font-bold'>PASSED</span>
            </SummaryRow>
            <SummaryRow title={"Skills Tests"}>
              <span className='pl-1 text-[#43C647] text-[10px] font-bold'>PASSED</span>
            </SummaryRow>
            <SummaryRow title={"Programming Tests"}>
              <span className='pl-1 text-[#43C647] text-[10px] font-bold'>PASSED</span>
            </SummaryRow>
            <SummaryRow title={"Psychometric Assessments"}>
              <span className='pl-1 text-[#43C647] text-[10px] font-bold'>PASSED</span>
            </SummaryRow>
          </div>
          <div className='border-l-2 border-l-[#ffffff] pl-2 ml-2'>
            <SummaryRow title={"Category :"}>
              <span className='pl-1 text-[#FFCB47]'>Hustler</span>
            </SummaryRow>
            <SummaryRow title={"Grade :"}>
              <span className='pl-1 text-[#FFCB47]'>A</span>
            </SummaryRow>
            <SummaryRow title={"Testing ID :"}>
              <span className='pl-1 text-[#FFCB47]'>XX213</span>
            </SummaryRow>
            <SummaryRow title={"Portfolio Number :"}>
              <span className='pl-1 text-[#FFCB47]'>23</span>
            </SummaryRow>
            <SummaryRow title={"To be discussed :"}>
              <span className='pl-1 text-[#FFCB47]'>Xaq</span>
            </SummaryRow>
            <SummaryRow title={"To be discussed :"}>
              <span className='pl-1 text-[#FFCB47]'>G-</span>
            </SummaryRow>
          </div>
        </div>
        <div className='flex items-center justify-between text-[20px] font-[900] leading-[36px]'>
          <p>Final Credibility Score</p>
          <span className='text-[#FFCB47] text-[24px] text-lg font-[900]'>
            7.2 HA <sup>+</sup>
          </span>
        </div>
      </div>

      <div className="mt-6 mb-12">
        <div className='flex gap-4 mt-4 mb-5'>
          <Button content="Testing Report" />
          <Button content="Detailed View" />
        </div>
        <Button content="Download Complete Profile Data" />
      </div>
    </div>
  )
}


// Summary Row
function SummaryRow({ title, children, styling }) {
  return (
    <div className={`flex items-center justify-start font-bold text-[14px] leading-[21px] ${styling}`}>
      <p>{title}</p>
      <p>{children}</p>
    </div>
  )
}

function Button({content}) {
  return (
    <button className="bg-[#FFCB47] text-[#1b1b1b] h-11 font-semibold text-[16px] rounded-lg w-full">
      {content}
    </button>
  )
}

export default ProfileSec