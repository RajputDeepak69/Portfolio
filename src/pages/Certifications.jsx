import React from 'react'

const certs = [
  {title:'AWS Certified Cloud Practitioner', org:'Amazon'},
  {title:'Azure Fundamentals', org:'Microsoft'},
  {title:'Linux Foundation', org:'Linux Foundation'},
  {title:'Docker Certified Associate', org:'Docker'}
]

export default function Certifications(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold">Certifications</h2>
      <p className="text-gray-400 mt-2">Official certificates and recognitions.</p>

      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {certs.map(c=>(
          <div key={c.title} className="glass rounded-lg p-4 flex flex-col items-center text-center">
            <div className="w-20 h-12 bg-white/4 rounded flex items-center justify-center text-xs">{c.org}</div>
            <div className="mt-3 font-medium">{c.title}</div>
            <div className="text-xs text-gray-400 mt-1">{c.org}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
