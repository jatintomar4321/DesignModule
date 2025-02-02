"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "../lib/utils"

export function ImageLoader({ src, alt, className }) {
  const [isLoading, setIsLoading] = useState(true)
  const [lowQualitySrc, setLowQualitySrc] = useState("")

  useEffect(() => {
    // Generate low quality image URL
    const lowQualityUrl = new URL(src)
    lowQualityUrl.searchParams.set('q', '1')
    lowQualityUrl.searchParams.set('w', '50')
    setLowQualitySrc(lowQualityUrl.toString())

    // Preload high quality image
    const img = new window.Image()
    img.src = src
    img.onload = () => setIsLoading(false)
  }, [src])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {lowQualitySrc && (
        <Image
          src={lowQualitySrc || ""}
          alt={alt}
          fill
          className={cn(
            "object-cover transition-transform duration-0 ease-in-out",
            isLoading ? "opacity-100" : "opacity-10",
            className
          )}
          sizes="100vw"
          priority
        />
      )}
      <Image
        src={src || ""}
        alt={alt}
        fill
        className={cn(
          "object-cover transition-opacity duration-0 ease-in",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        sizes="100vw"
        quality={90}
        priority={true}
      />
    </div>
  )
}
