import React from 'react'

const data = [
  {title: 'CI/CD Pipeline using Jenkins and Docker', desc: 'Automated build, test and deploy with Jenkins pipelines and Docker registries.', tech:['Jenkins','Docker','Kubernetes'], repo:'#'},
  {title: 'AWS EKS Cluster Deployment with Terraform', desc: 'Provisioned EKS cluster using Terraform modules, with IaC and managed node groups.', tech:['Terraform','AWS','EKS'], repo:'#'},
  {title: 'Monitoring Stack using Prometheus and Grafana', desc: 'Metrics collection, alerting and dashboards for microservices.', tech:['Prometheus','Grafana','Alertmanager'], repo:'#'},
  {title: 'Cost Optimization Scripts', desc: 'Python scripts for reporting idle EC2 resources and tagging automation.', tech:['Python','Boto3'], repo:'#'},
]

export default function Projects(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold">Projects</h2>
      <p className="text-gray-400 mt-2">Selected DevOps & cloud projects.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {data.map(p=>(
          <div key={p.title} className="glass rounded-xl p-5 hover:scale-[1.01] transition">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-gray-300 mt-2">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">{p.tech.map(t=> <span key={t} className="text-xs bg-white/6 px-2 py-1 rounded">{t}</span>)}</div>
              </div>
              <div className="text-xs text-gray-400"><a href={p.repo} className="underline">Repo</a></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
