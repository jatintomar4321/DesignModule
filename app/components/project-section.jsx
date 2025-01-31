import Image from "next/image"

export default function ProjectSection() {
  return (
    <section className="container bg-white text-black mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%206.10.49%E2%80%AFPM%5B1%5D-WC5PIp75CnvPTiO03n8JyXjpVicWUi.png"
            alt="Modern white Mediterranean-style house with arched windows and balconies"
            
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            We design every project as a one-off
          </h2>

          <div className="space-y-6 t">
            <div className="space-y-4">
              <p className="leading-relaxed">
                <span className="font-medium text-black">Client-Centered Design:</span> Your needs and preferences are
                at the heart of our design process. We listen carefully and address your specific requirements to create
                personalized solutions.
              </p>

              <p className="leading-relaxed">
                <span className="font-medium text-black">Innovative Solutions:</span> Our team excels at developing
                creative and innovative designs, thanks to open and honest communication and collaboration among all
                project stakeholders.
              </p>

              <p className="leading-relaxed">
                <span className="font-medium text-black">Tailored Teams:</span> Each project is unique, and so is our
                approach. We assemble dedicated teams tailored to the specific needs, budget, timeline, and complexity
                of your project.
              </p>

              <p className="leading-relaxed">
                <span className="font-medium text-black">Collaborative Process:</span> We value the input and experience
                of all involved parties, ensuring that our designs are the result of collective expertise and shared
                goals.
              </p>
            </div>

            <button className="mt-8 px-6 py-3 text-base font-medium border border-black rounded-md hover:bg-black hover:text-white transition-colors">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

