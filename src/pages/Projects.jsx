import React from 'react'

const data = [
  {title: 'A 2-tier containerized cloud app', desc: ' Containerized a two-tier application using Docker and managed deployment with Docker Compose.', tech:['Fast API','Docker','Docker-Compose'], repo:'https://github.com/RajputDeepak69/PASSWORD-MANAGER'},
  {title: 'A fully serverless Bitly-style URL shortener', desc: 'Implemented AWS Lambda + DynamoDB integration with IAM permissions then Resource management and CloudWatch monitoring', tech:['AWS-Lambda','DynamoDB','Node.js','IAM -roles and policies.'], repo:'https://github.com/RajputDeepak69/URL-SHORTENER'},
  {title: 'An auto scalable and auto healing cloud app', desc: ' a cloud-native app on AWS that automatically scales under load and heals itself from failure, all managed 100% by code.', tech:['Docker','Terraform','Node.js','AWS cloud','AWS ALB', 'Auto Scalling groups','AWS EC2 and CloudWatch'], repo:'https://github.com/RajputDeepak69/CPU-APP'},
  {title: 'My personal DevOps & Cloud Portfolio website', desc: 'designed, containerized, and deployed with a full cloud-native infrastructure using Terraform, AWS, Docker, and GitHub Actions.', tech:['React-Tailwind','AWS Lambda (node.js)','Docker','Terraform','AWS-S3,SES and CloudFront','GitHub-Actions'], repo:'https://github.com/RajputDeepak69/Portfolio'},
  {title: 'A 3-tier E-COMMERCE app', desc: 'Working on it ...', tech:['Full stack with node.js and express.js','Docker','Docker-Compose','PostgreSQL','github-actions','terraform','AWS EC2'], repo:'https://github.com/RajputDeepak69/E-STORE'},
]

export default function Projects(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold">PROJECTS :</h2>
      <p className="text-gray-400 mt-2">DevOps & cloud projects.</p>

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
