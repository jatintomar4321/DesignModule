import { useState } from "react"
import Link from "next/link"
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react"
import { RequestForm } from "./RequestForm"

export default function Footer() {
  const [showRequestForm, setShowRequestForm] = useState(false)

  return (
    <>
      <footer className="w-full bg-black text-white min-h-[95vh] flex flex-col justify-between px-4 pb-2 md:px-8 pt-10 md:pb-2">
        <div className="max-w-[1800px] w-full mx-auto flex-grow flex flex-col justify-between">
          <div className="grid gap-12">
            {/* Main Footer Content */}
            <div className="grid gap-8 md:grid-cols-3">
              {/* Get in touch section */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Get in touch
                  <br />
                  with us
                </h2>
                <div className="space-y-2">
                  <p className="text-xs text-gray-400">General inquiries</p>
                  <Link href="mailto:contact@designmodule.in" className="text-xs hover:underline">
                    contact@designmodule.in
                  </Link>
                </div>
              </div>

              {/* Collaborations section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-400">For collaborations</p>
                <p className="text-xs">--</p>
              </div>

              {/* Careers section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-400">Careers</p>
                <Link href="mailto:jobs.designmodule@gmail.com" className="text-xs hover:underline">
                  jobs.designmodule@gmail.com
                </Link>
              </div>
            </div>

            {/* Description and Button */}
            <div className="space-y-8">
              <p className="max-w-md text-xs md:text-sm">
                We are ready to lead you into the exciting world of architecture and interior design
              </p>
              <button
                onClick={() => setShowRequestForm(true)}
                className="px-6 py-2 md:px-8 md:py-3 border border-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors duration-300"
              >
                SEND REQUEST
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="w-full border-t border-gray-800 mt-12 md:mt-16 lg:mt-24">
            <div className="max-w-[1800px] mx-auto pt-4">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <p className="text-xs md:text-sm">© 2025</p>
                <p className="text-xs md:text-sm">All Rights Reserved.</p>
                <div className="flex items-center space-x-4 md:space-x-6">
                  <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                    <Twitter size={16} />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                    <Facebook size={16} />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                    <Instagram size={16} />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                    <Youtube size={16} />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {showRequestForm && <RequestForm onClose={() => setShowRequestForm(false)} />}
    </>
  )
}

