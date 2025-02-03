import { useState } from "react"

export function RequestForm({ onClose }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, phone, message })
    setSubmitted(true)
    // Close the form after 3 seconds
    setTimeout(() => {
      onClose()
    }, 3000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white px-16 py-8 shadow-xl max-w-6xl h-[95vh] w-full overflow-y-auto">
        {!submitted ? (
          <>
            <h2 className="text-5xl font-medium mb-8">Send Request</h2>
            <form onSubmit={handleSubmit} className="space-y-16">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-black focus:border-black"
                />
              </div>
              <div className="flex items-baseline space-x-8">
                <div className="flex-1">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-1 border-b border-gray-300 focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-1 border-b border-gray-300 focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-black focus:border-black"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-8">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-black bg-white border-b border-black"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-black bg-white border-b border-black"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl font-medium mb-4">Thank you!</h2>
            <p className="text-xl text-center">We will reach out to you soon.</p>
          </div>
        )}
      </div>
    </div>
  )
}

