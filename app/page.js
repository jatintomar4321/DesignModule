import DesignSection from "./components/design-section"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProjectsShowcase from "./components/projects-showcase"
import ServicesShowcase from "./components/services-showcase"
import Testimonials from "./components/testimonials"


const page = () => {
  return (
    <div className='bg-white'>
    <Navbar/>
    <Hero/>
    <DesignSection/>
    <ProjectsShowcase/>
    <ServicesShowcase/>
    <Testimonials/>
    <Footer/>
    
   
    </div>
  )
}

export default page