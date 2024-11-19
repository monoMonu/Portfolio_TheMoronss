import React from 'react'
import Navbar from './Navbar'
import DomainMethodologies from './DomainMethodologies'
import HonorsAndAwards from './HonorsAndAwards'
import PlatformPractices from './PlatformPractices'
import Experience from './Experience'
import VideoSection from './VideoSection'
import AspiringDomain from './AspiringDomain'
import ProfileHighlights from './ProfileHighlights'
import CareerObj from './CareerObj'
import Experience2 from './Experience2'
import AllExperiences from './AllExperiences'
import CoreSkills from './CoreSkills'
import ProjectSection from './ProjectSection.1'
import ProjectSectionAll from './ProjectSectionAll'
import Education from './Education'
import FindMeHere from './FindMeHere'
import DetailedViewOptions from './DetailedViewOptions'
import Greetings from './Greetings'
import Certifications from './Certifications'

function DetailsSec() {
  return (
    <div className='bg-[#f3f2ee] relative' id='detailsSec'>
      <Navbar />
      <div className='py-8 px-6 flex flex-col gap-6' id='detailedViewSec'>
        <Greetings/>
        <CareerObj />
        <ProfileHighlights />
        <AspiringDomain />
        <VideoSection/>
        <Experience/>
        <Experience2/>
        <AllExperiences description="All Experience" color="#FFC53D" />
        <CoreSkills/>
        <ProjectSection/>
        <ProjectSectionAll/>
        <AllExperiences description="All Projects" color="#FFC53D"/>
        <Education />
        <AllExperiences description="View More" color="#fff"/>
        <FindMeHere/>
        <DetailedViewOptions/>
        <div id='secondarySec'>
          <DomainMethodologies />
          <HonorsAndAwards />
          <Certifications/>
          <PlatformPractices />
        </div>
      </div>
   </div>
  )
}

export default DetailsSec
