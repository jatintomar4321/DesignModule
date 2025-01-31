import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen min-h-[600px]">
      {/* Background Image */}
      <img
        src="/hero.png"
        alt="Luxury modern living room"
     
        
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 " />

      {/* Logo */}
      

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-8 md:px-12">
        <div className="max-w-screen-xl mx-auto w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 leading-tight">
            The house that Jack built
          </h1>

          <Link
            href="/projects/jack-house"
            className="inline-block text-white text-sm md:text-base uppercase tracking-wider hover:opacity-80 transition-opacity duration-300 group"
          >
            <span className="border border-white/30 px-6 py-3 inline-block hover:bg-white/10 transition-colors duration-300">
              View project
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

