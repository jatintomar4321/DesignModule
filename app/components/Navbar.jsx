"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  // Scroll to Section with smooth animation
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // Handle both navigation & scrolling
  const handleNavigation = (id) => {
    if (pathname !== "/") {
      router.push("/")

      // Wait for page transition, then scroll smoothly
      setTimeout(() => {
        scrollToSection(id)
      }, 300)
    } else {
      scrollToSection(id)
    }
  }

  return (
    <nav
      className={`bg-white fixed top-0 w-full transition-transform duration-300 ease-in-out z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.svg" alt="Logo" width={150} height={50} />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("about")}
              className="text-black hover:text-gray-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("services")}
              className="text-black hover:text-gray-600 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation("projects")}
              className="text-black hover:text-gray-600 transition-colors duration-200"
            >
              Projects
            </button>
            <button className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
              Send Request
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
