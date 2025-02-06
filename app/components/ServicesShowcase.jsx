"use client"
import { forwardRef } from "react"
import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  {
    id: 1,
    title: "Health Care",
    imageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    services: [
      "Hospital Design & Planning",
      "Medical Office Buildings",
      "Rehabilitation Centers",
      "Diagnostic Centers",
      "Elderly Care Facilities",
      "Laboratory Design",
      "Healthcare Technology Integration",
      "Medical Storage Solutions",
    ],
  },
  {
    id: 2,
    title: "Residential",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    services: [
      "Custom Home Design",
      "Interior Space Planning",
      "Kitchen & Bath Design",
      "Home Renovations",
      "Sustainable Home Solutions",
      "Smart Home Integration",
      "Landscape Design",
      "Lighting Design",
    ],
  },
  {
    id: 3,
    title: "Health Care",
    imageUrl:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    services: [
      "Emergency Room Design",
      "Operating Room Planning",
      "Patient Room Design",
      "Medical Staff Facilities",
      "Pharmacy Design",
      "Infection Control Solutions",
      "Medical Equipment Planning",
      "Healthcare Acoustics",
    ],
  },
  {
    id: 4,
    title: "Interior",
    imageUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    services: [
      "Commercial Interiors",
      "Office Space Planning",
      "Retail Design",
      "Restaurant Design",
      "Hotel Interiors",
      "Educational Facilities",
      "Corporate Branding Integration",
      "Furniture Selection & Layout",
    ],
  },
]

const MotionSheetContent = motion(SheetContent)

const ServicesShowcase = forwardRef((props, ref) => {
  const [selectedService, setSelectedService] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleServiceClick = (service) => {
    setSelectedService(service)
    setIsOpen(true)
  }

  return (
    <>
      <section ref={ref} id="services" className="px-4 pb-12  md:px-6 lg:px-8">
        <h2 className="text-3xl  font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className="group block relative text-left"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden ">
                <Image
                  src={service.imageUrl || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={service.imageUrl}
                />
              </div>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-sm font-medium">{service.title}</h3>
                <svg width="30" height="12" viewBox="0 0 52 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M51.7071 8.70711C52.0976 8.31658 52.0976 7.68342 51.7071 7.29289L45.3431 0.928932C44.9526 0.538408 44.3195 0.538408 43.9289 0.928932C43.5384 1.31946 43.5384 1.95262 43.9289 2.34315L49.5858 8L43.9289 13.6569C43.5384 14.0474 43.5384 14.6805 43.9289 15.0711C44.3195 15.4616 44.9526 15.4616 45.3431 15.0711L51.7071 8.70711ZM0 9H51V7H0V9Z" fill="black"/>
</svg>              </div>
            </button>
          ))}
        </div>
      </section>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <MotionSheetContent
          className="w-full sm:max-w-md"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <SheetHeader>
            <SheetTitle className="text-4xl border-b-2 px-2 pt-40 ">{selectedService?.title}</SheetTitle>
          </SheetHeader>
          <AnimatePresence>
            {isOpen && (
              <motion.div className="mt-8">
                {selectedService?.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    className="flex items-center gap-2 py-2 border-b  last:border-0"
                  >
                    
                    <span className="text-sm pl-3">{service}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </MotionSheetContent>
      </Sheet>
    </>
  )
})
export default ServicesShowcase

