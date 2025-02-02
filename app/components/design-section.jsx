export default function DesignSection() {
  return (
    <section className="max-w-xl mx-auto px-4 py-4 md:py-24">
      <div className=" mx-auto">
        <h1 className="text-3xl max-w-60 md:text-3xl lg:text-4xl font-medium text-black mb-2 md:mb-5 tracking-tighter">
          We design every project as a one-off
        </h1>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-gray-600 mb-12">
          <div className="space-y-6">
            <p className="leading-1 text-[0.6rem]">
              DESIGN MODULE strives to provide the best solution and design response to our clients, meeting their
              particular criteria in terms of spatial needs, image and funding. A particular predetermined style or
              solution is never imposed on a project but evolves contextually through the design process with the client
              and the team in a collaborative process.
            </p>
            <p className="leading-1 text-[0.6rem]">
              We take pride in our ability to listen and address the specific needs of our clients and to provide
              creative solutions in collaboration with our client.
            </p>
          </div>

          <div>
            <p className="leading-1 text-[0.6rem]">
              Innovative and creative design solutions are the result of open and frank communications between all the
              team members of the project capitalizing on the experience of all involved parties. Our teams are
              structured specifically for each project and determined by the needs of the project, budget, timeline and
              complexity and working in collaboration with the client.
            </p>
          </div>
        </div>

        <button
          className="px-6 py-2 border-[1px] border-black text-xs text-black font-medium tracking-wider hover:bg-black hover:text-white transition-colors duration-200"
          
        >
          DISCOVER MORE
        </button>
      </div>
    </section>
  )
}