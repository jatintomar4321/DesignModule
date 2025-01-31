import Image from "next/image"

export default function ProjectGrid() {
  const projects = [
    {
      name: "Solaris",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      name: "Mahal",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    },
    {
      name: "Mirror",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
    {
      name: "Sayat Nova",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    },
    {
      name: "Vertex",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    },
    {
      name: "Azure",
      image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc",
    },
    {
      name: "Nova",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    },
    {
      name: "Prism",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  ]

  return (
    <section className="container mx-auto bg-white  px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="relative aspect-[4/3] group overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold tracking-wider">{project.name}</h3>
              <button
                className="px-6 py-2 border-2 border-white text-white text-sm tracking-widest uppercase
                          hover:bg-white hover:text-black transition-all duration-300
                          focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                VIEW PROJECT
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

