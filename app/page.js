"use client"
import LocomotiveScroll from "locomotive-scroll";
import { useRef, useEffect } from "react"
import DesignSection from "./components/DesignSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ProjectsShowcase from "./components/ProjectsShowcase"
import ServicesShowcase from "./components/ServicesShowcase"
import Testimonial from "./components/Testimonial"
import { useRouter, usePathname } from "next/navigation"
import Teams from "./components/Teams";

const LandingPage = () => {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const serviceRef = useRef(null)
  const scrollRef = useRef(null)
  const locoScroll = useRef(null) // Store LocomotiveScroll instance

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (scrollRef.current) {
      locoScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        inertia: 0.6, // Lower values for more responsive scroll
        lerp: 0.08, // Adjust for smoother scroll
        smartphone: { smooth: true },
        tablet: { smooth: true }
      });

      return () => {
        locoScroll.current.destroy(); // Clean up on component unmount
      };
    }
  }, []);

  // Enhanced Smooth Scrolling with Custom Duration and Easing
  const scrollTo = (ref) => {
    if (locoScroll.current && ref.current) {
      locoScroll.current.scrollTo(ref.current, {
        duration: 1200, // Longer duration for smoother effect
        easing: [0.25, 0.00, 0.35, 1.00], // Custom cubic-bezier for fluid motion
        offset: 0, // Adjust offset if needed
      })
    }
  };

  // Handle navigation & scrolling
  const handleNavigation = (ref) => {
    if (pathname !== "/") {
      router.push("/")
      setTimeout(() => scrollTo(ref), 500) // Wait for navigation before scrolling
    } else {
      scrollTo(ref)
    }
  }

  return (
    <div ref={scrollRef} className="bg-white">
      <Navbar
        onAboutClick={() => handleNavigation(aboutRef)}
        onProjectsClick={() => handleNavigation(projectsRef)}
        onServiceClick={() => handleNavigation(serviceRef)}
      />
      <HeroSection />
      <div data-scroll-section>
        <DesignSection ref={aboutRef} />
        <ProjectsShowcase ref={projectsRef} />
        <Teams/>
        <ServicesShowcase ref={serviceRef} />
      </div>
      <Testimonial />
      <Footer />
    </div>
  )
}

export default LandingPage
