import React from 'react'

const certs = [
  {
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    img: "images/aws-fundamental.png",
  },
  {
    title: "Intro. to Linux",
    org: "The Linux Foundation",
    img: "pages/images/Linux-cert.png",
    link: "https://www.credly.com/badges/165a55fb-e569-446f-94ca-663700f8eb01/public_url",
  },
  {
    title: "AWS Educate web builder",
    org: "Amazon Web Services",
    img: "/images/web-builder.png",
    link: "https://www.credly.com/badges/098220af-93d1-46da-9647-ef2c6221d527/public_url",
  },
  {
    title: "AWS Cloud Quest: Cloud-Practitioner",
    org: "Amazon Web Services",
    img: "/images/cloud-quest.png",
    link: "https://www.credly.com/badges/6ef94c53-bbe9-4f83-b5dd-7bba778302aa/public_url",
  },
  {
    title: "Cloud Devops",
    org: "Intel",
    img: "/images/devops-badge.png",
    link: "hhttps://www.credly.com/badges/97356829-1493-4917-a543-899ea174ccc9/public_url",
  },
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
