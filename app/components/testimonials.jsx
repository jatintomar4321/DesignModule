"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Interior Designer",
    text: "The attention to detail and innovative design solutions provided by this team have consistently exceeded our expectations. Their ability to transform spaces is truly remarkable.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Project Manager",
    text: "Working with this architectural firm has been a game-changer for our projects. Their commitment to excellence and innovative approach sets them apart in the industry.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Real Estate Developer",
    text: "The team's expertise in sustainable design and their ability to balance aesthetics with functionality has made them our go-to partners for all our development projects.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "David Park",
    role: "Healthcare Facility Director",
    text: "Their understanding of healthcare design requirements and ability to create healing environments has transformed how we approach medical facility design.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Olivia Thompson",
    role: "Sustainability Consultant",
    text: "I've been impressed by their commitment to eco-friendly design. They consistently find innovative ways to incorporate sustainable practices without compromising on aesthetics.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Daniel Lee",
    role: "Urban Planner",
    text: "Their ability to balance modern design with historical preservation has been crucial in our city's redevelopment projects. They truly understand the importance of community context.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Sophie Martin",
    role: "Hotel Chain Executive",
    text: "The innovative designs they've created for our hotels have significantly improved guest experiences and operational efficiency. They're always ahead of hospitality trends.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Robert Taylor",
    role: "Education Board Member",
    text: "Their designs for our new campus have revolutionized our approach to learning spaces. The flexibility and innovation in their work have greatly enhanced our educational environment.",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Maria Garcia",
    role: "Retail Space Manager",
    text: "The way they reimagined our retail spaces has significantly boosted foot traffic and sales. Their designs are not just beautiful, but highly functional for both staff and customers.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "James Wilson",
    role: "Tech Startup Founder",
    text: "Our office space designed by this team has become a key factor in attracting top talent. The innovative and collaborative environment they created perfectly aligns with our company culture.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
]

const TestimonialCard = ({ testimonial, onHoverStart, onHoverEnd }) => (
  <motion.div
    className="bg-white  border overflow-x-hidden w-[350px] flex-shrink-0 mx-1"
    onHoverStart={onHoverStart}
    onHoverEnd={onHoverEnd}
  >
    <div className="relative h-72 w-full">
      <Image
        src={testimonial.image || "/placeholder.svg"}
        alt={testimonial.name}
        fill
        className="object-cover"
        sizes="200px"
        priority={testimonial.id === 1}
        loading={testimonial.id === 1 ? "eager" : "lazy"}
      />
    </div>
    <div className="p-6">
      <blockquote className="text-sm mb-4 h-10 overflow-hidden">{`"${testimonial.text}"`}</blockquote>
      <div className="font-medium">
        <p className="text-sm">{testimonial.name}</p>
        <p className="text-gray-600 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
)

const TestimonialMarquee = () => {
  const marqueeRef = useRef(null)
  const x = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 100, damping: 30 })
  const [isHovered, setIsHovered] = useState(false)

  useAnimationFrame((time, delta) => {
    if (marqueeRef.current && !isHovered) {
      const containerWidth = marqueeRef.current.offsetWidth
      const contentWidth = marqueeRef.current.scrollWidth
      const newX = x.get() - delta * 0.05
      x.set(newX % (-contentWidth / 2))
    }
  })

  const opacity = useTransform(springX, [0, -marqueeRef.current?.scrollWidth / 4 || 0], [1, 1])

  return (
    <div className="overflow-x-hidden ">
      <motion.div ref={marqueeRef} style={{ x: springX, opacity }} className="flex">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          />
        ))}
      </motion.div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 bg-white">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Testimonials</h2>
      <TestimonialMarquee />
    </section>
  )
}

export default Testimonials

