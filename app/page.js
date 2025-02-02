import DesignSection from "./components/design-section"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ProjectsShowcase from "./components/ProjectsShowcase"
import ServicesShowcase from "./components/ServicesShowcase"
import Testimonials from "./components/testimonials"


const page = () => {
  return (
    <div className='bg-white'>
    <Navbar/>
    <HeroSection/>
    <DesignSection/>
    <ProjectsShowcase/>
    <ServicesShowcase/>
    <Testimonials/>
    <Footer/>
    
   
    </div>
  )
}

export default page