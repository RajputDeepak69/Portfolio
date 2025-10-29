import React, { useState } from 'react'

export default function Contact(){
  const [sent, setSent] = useState(false)
  function handle(e){
    e.preventDefault()
    setSent(true)
    setTimeout(()=> setSent(false), 3000)
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="text-gray-400 mt-2">Want to collaborate? Send a message.</p>

      <form onSubmit={handle} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required name="name" placeholder="Name" className="glass p-3 rounded-md" />
        <input required name="email" placeholder="Email" className="glass p-3 rounded-md" />
        <textarea required name="message" placeholder="Message" className="glass p-3 rounded-md md:col-span-2 h-36" />
        <div className="md:col-span-2 flex items-center justify-between">
          <button className="px-5 py-2 bg-primary text-black rounded font-semibold">Send Message</button>
          {sent && <div className="text-sm text-green-400">Message sent (mock)</div>}
        </div>
      </form>

      <div className="mt-8 text-sm text-gray-400">Or reach me at <a href="mailto:you@example.com" className="text-primary">you@example.com</a></div>
    </div>
  )
}
