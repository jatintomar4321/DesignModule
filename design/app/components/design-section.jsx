export default function DesignSection() {
  return (
    <section className=" relative max-w-7xl bg-white text-black mt-60 mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 tracking-tight">
          We design
          <br />
          every project as
          <br />a one-off
        </h1>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12  mb-12">
          <div className="space-y-6">
            <p className="leading-relaxed">
              DESIGN MODULE strives to provide the best solution and design response to our clients, meeting their
              particular criteria in terms of spatial needs, image and funding. A particular predetermined style or
              solution is never imposed on a project but evolves contextually through the design process with the client
              and the team in a collaborative process.
            </p>
            <p className="leading-relaxed">
              We take pride in our ability to listen and address the specific needs of our clients and to provide
              creative solutions in collaboration with our client.
            </p>
          </div>

          <div>
            <p className="leading-relaxed">
              Innovative and creative design solutions are the result of open and frank communications between all the
              team members of the project capitalizing on the experience of all involved parties. Our teams are
              structured specifically for each project and determined by the needs of the project, budget, timeline and
              complexity and working in collaboration with the client.
            </p>
          </div>
        </div>

        <button
          className="px-8 py-3 border-2 border-black text-sm font-medium tracking-wider hover:bg-black hover:text-white transition-colors duration-200"
          
        >
          DISCOVER MORE
        </button>
      </div>
    </section>
  )
}