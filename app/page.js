"use client"
import { useRef } from "react"
import DesignSection from "./components/DesignSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ProjectsShowcase from "./components/ProjectsShowcase"
import ServicesShowcase from "./components/ServicesShowcase"
import Testimonials from "./components/testimonials"


const LandingPage = () => {

        const aboutRef = useRef(null)
        const projectsRef = useRef(null)
        const serviceRef = useRef(null)
      
        const scrollTo = (ref) => {
          if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" })
          }
        }

  return (
    <div className='bg-white'>
    <Navbar
        onAboutClick={() => scrollTo(aboutRef)}
        onProjectsClick={() => scrollTo(projectsRef)}
        onServiceClick={() => scrollTo(serviceRef)}
      />
    <HeroSection/>
    <DesignSection ref={aboutRef}/>
    <ProjectsShowcase ref={projectsRef}/>
    <ServicesShowcase ref={serviceRef}/>
    <Testimonials/>
    <Footer/>
    
   
    </div>
  )
}

export default LandingPage