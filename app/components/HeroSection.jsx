"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  {
    src: "/4.png",
    alt: "Mountain peak with dramatic clouds",
  },
  {
    src: "/3.png",
    alt: "Autumn tree reflected in still water",
  },
  {
    src: "/2.png",
    alt: "Misty mountain valley with rolling hills",
  },
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImageIndex(index)
      setIsTransitioning(false)
    }, 500)
  }

  return (
    <div
      className="relative h-[85vh] w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        <div className="absolute inset-0 flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full h-full"
              style={{
                opacity: isTransitioning ? 0.5 : 1,
                transition: "opacity 1000ms ease-in-out",
              }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`absolute inset-0 flex items-end justify-start transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="text-md md:text-md text-white font-medium drop-shadow-lg p-10">
          The House that Jack Built, Mumbai
        </h1>
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`
                w-[0.3rem] h-[0.3rem] rounded-full transition-all duration-300 focus:outline-none
                ${currentImageIndex === index ? "bg-white scale-125" : "bg-white hover:bg-white"}
              `}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

