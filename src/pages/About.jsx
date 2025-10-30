import React from 'react'

export default function About(){
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <div className="glass rounded-xl p-5 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-black font-bold">DE</div>
            <h3 className="mt-4 font-semibold">Deepak Thakur </h3>
            <p className="text-xs text-gray-400 mt-1">DevOps Engineer • Cloud Enthusiast</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-300">I'm a MCA student with a strong interest in building reliable, secure and scalable cloud infrastructures. I love automating repetitive tasks, designing CI/CD pipelines, and applying infrastructure-as-code with Terraform. My typical stack includes AWS, EKS, Docker, Kubernetes, Terraform, git, and Git-based CI systems, github, github-actions.</p>

          <h3 className="mt-6 font-semibold">Experience Highlights</h3>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
            <li>Designed an auto scalable and auto healing a deployment on AWS EC2 with Terraform.</li>
            <li>Built CI/CD pipelines with GitHub Actions to automate releases.</li>
            <li>Implemented monitoring & alerting with CloudWatch.</li>
            <li>Containirized 2-tier cloud app and managed deployment with Docker-Compose</li>
            <li>Currently working on a 3-tier e-commerce web app ..</li>
          </ul>

          <h3 className="mt-6 font-semibold">Tools & Platforms</h3>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2">
            {['AWS','Docker & Docker-Hub','Kubernetes','Terraform','azure','git','github','github-actions'].map(t=>(
              <div key={t} className="glass rounded px-3 py-2 text-sm text-gray-200">{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
