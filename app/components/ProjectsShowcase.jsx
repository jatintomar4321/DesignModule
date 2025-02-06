"use client"

import Image from "next/image"
import { forwardRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const interiorDesignImages = [
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
]

const projects = [
  { title: "Maya Darpan", location: "Mumbai", year: "1972", id: 1, imageUrl: interiorDesignImages[0] },
  { title: "Khayal Gatha", location: "Mumbai", year: "1989", id: 2, imageUrl: interiorDesignImages[1] },
  { title: "Tarang", location: "Mumbai", year: "1984", id: 3, imageUrl: interiorDesignImages[2] },
  { title: "Char Adhyay", location: "Mumbai", year: "1997", id: 4, imageUrl: interiorDesignImages[3] },
  { title: "Kasaba", location: "Mumbai", year: "1991", id: 5, imageUrl: interiorDesignImages[4] },
  { title: "Bhavantarana", location: "Mumbai", year: "1991", id: 6, imageUrl: interiorDesignImages[5] },
  { title: "Maya Darpan", location: "Mumbai", year: "1972", id: 7, imageUrl: interiorDesignImages[0] },
  { title: "Khayal Gatha", location: "Mumbai", year: "1989", id: 8, imageUrl: interiorDesignImages[1] },
  { title: "Tarang", location: "Mumbai", year: "1984", id: 9, imageUrl: interiorDesignImages[2] },
  { title: "Char Adhyay", location: "Mumbai", year: "1997", id: 10, imageUrl: interiorDesignImages[3] },
  { title: "Kasaba", location: "Mumbai", year: "1991", id: 11, imageUrl: interiorDesignImages[4] },
  { title: "Bhavantarana", location: "Mumbai", year: "1991", id: 12, imageUrl: interiorDesignImages[5] },
  { title: "Maya Darpan", location: "Mumbai", year: "1972", id: 13, imageUrl: interiorDesignImages[0] },
  { title: "Khayal Gatha", location: "Mumbai", year: "1989", id: 14, imageUrl: interiorDesignImages[1] },
  { title: "Tarang", location: "Mumbai", year: "1984", id: 15, imageUrl: interiorDesignImages[2] },
  { title: "Char Adhyay", location: "Mumbai", year: "1997", id: 16, imageUrl: interiorDesignImages[3] },
  { title: "Kasaba", location: "Mumbai", year: "1991", id: 17, imageUrl: interiorDesignImages[4] },
  { title: "Bhavantarana", location: "Mumbai", year: "1991", id: 18, imageUrl: interiorDesignImages[5] },
]

const ProjectsShowcase = forwardRef((props, ref) => {
  const [showAll, setShowAll] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const visibleProjects = isSmallScreen && !showAll ? projects.slice(0, 4) : projects

  return (
    <section ref={ref} id="projects" className="px-4 md:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold tracking-tighter mb-4">Our Projects</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 text-black text-xs lg:grid-cols-6 xl:grid-cols-6 gap-1">
        {visibleProjects.map((project) => (
          <motion.div
            key={project.id}
            className="flex flex-col gap-2 cursor-pointer relative"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16vw"
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL={project.imageUrl}
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-2 text-white"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-medium text-sm">{project.title}</h3>
                <p className="text-xs">
                  {project.location}, {project.year}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      {isSmallScreen && !showAll && (
        <motion.div className="mt-4 text-left">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover="hover"
            onClick={() => setShowAll(true)}
            className="relative text-sm font-medium text-black bg-white"
          >
            View More
            <motion.div
              className="absolute left-0 bottom-0 h-[2px] bg-black w-full"
              initial={{ scaleX: 0 }}
              variants={{
                hover: { scaleX: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.button>
        </motion.div>
      )}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedProject.imageUrl || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
                <p className="text-sm text-gray-500">
                  {selectedProject.location}, {selectedProject.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
})

ProjectsShowcase.displayName = "ProjectsShowcase"

export default ProjectsShowcase

