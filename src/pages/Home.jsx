import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-sm text-primary uppercase font-semibold">DevOps Engineer</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">DevOps Engineer | Cloud Enthusiast | Automation Advocate</h1>
          <p className="mt-4 text-gray-300 max-w-xl">I build scalable, secure, cloud-native systems. Infrastructure as code, resilient pipelines, and automated observability are my focus.</p>

          <div className="mt-6 flex gap-4">
            <Link to="/projects" className="px-5 py-2 rounded-md bg-primary text-black font-semibold">View Projects</Link>
            <Link to="/contact" className="px-5 py-2 rounded-md border border-white/10 text-gray-200">Contact Me</Link>
            <a href="/resume.pdf" className="px-4 py-2 rounded-md text-sm border border-white/5">Download Resume</a>
          </div>

          <div className="mt-8 flex gap-3 flex-wrap">
            {['AWS','Kubernetes','Terraform','CI/CD'].map(b=>(
              <span key={b} className="text-xs bg-white/6 px-3 py-1 rounded-full">{b}</span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md glass rounded-2xl p-6">
            <div className="w-full h-56 bg-gradient-to-br from-[#052034] to-[#06243a] rounded-xl flex items-center justify-center text-gray-300">
              <pre className="text-xs p-4 w-full overflow-auto">{`# sample infra check
aws sts get-caller-identity
kubectl get nodes
terraform plan -out=tfplan`}</pre>
            </div>

            <div className="mt-4 text-sm text-gray-400"><strong>Focus:</strong> Cloud-native infra, automation, monitoring, security.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
