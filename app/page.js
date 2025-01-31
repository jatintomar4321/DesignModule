import React from 'react'
import DesignSection from './components/design-section'
import ProjectSection from './components/project-section'
import HeroSection from './components/hero-section (2)'
import ProjectGrid from './components/project-grid (1)'

const page = () => {
  return (
    <div className='bg-white'>
    
      <HeroSection/>
      
      <DesignSection/>
      <ProjectGrid/>
    </div>
  )
}

export default page