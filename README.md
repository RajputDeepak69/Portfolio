# 🌐 My Cloud Portfolio — Fully Automated AWS Deployment

This is my personal **DevOps & Cloud Portfolio Project**, designed, containerized, and deployed with a full cloud-native infrastructure using **Terraform**, **AWS**, **Docker**, and **GitHub Actions**.

It’s not just a website — it’s a reflection of my **DevOps mindset**, automation-first thinking, and understanding of **end-to-end deployment pipelines**.

---

## 🚀 Overview

This portfolio showcases my skills, projects, and contact information — but what makes it unique is **how** it’s deployed:

- **Frontend** built with **React + TailwindCSS**
- **Infrastructure as Code (IaC)** using **Terraform**
- **AWS Cloud Hosting** with **S3**, **CloudFront**, **Lambda**, **API Gateway**, and **SES**
- **CI/CD pipeline** using **GitHub Actions**
- **Serverless backend** for contact form message handling
- **Docker support** for local builds and testing

---

This project represents my approach to technology:
- **Automation over manual work** — everything should be reproducible with a single command.
- **Infrastructure as Code** — no manual AWS console setup.
- **Security-first design** — minimal permissions, use of IAM roles, and environment isolation.
- **Scalability in mind** — modular Terraform structure, ready to expand.
- **CI/CD as the default** — every change I push should automatically deploy to production.

This isn’t just a web app — it’s **a complete deployment pipeline**.

---

## 🏗️ Architecture

### 🧩 Components

| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Frontend** | React + TailwindCSS | Portfolio website (projects, about, contact) |
| **Backend** | AWS Lambda (Node.js) | Handles contact form submissions |
| **Infrastructure** | Terraform | Manages all AWS resources |
| **Storage** | AWS S3 | Hosts static frontend files |
| **CDN** | AWS CloudFront | Delivers content globally |
| **Email Service** | AWS SES | Sends contact form messages |
| **API Gateway** | AWS API Gateway | Entry point for backend Lambda |
| **CI/CD** | GitHub Actions | Automates build and deployment |
| **Containerization** | Docker | Ensures consistent local environment |

---

## ☁️ AWS Resources Provisioned by Terraform

Terraform automatically sets up:

- **S3 Bucket** → for static site hosting  
- **CloudFront Distribution** → CDN for global performance  
- **Lambda Function** → backend for contact form  
- **API Gateway** → connects frontend with Lambda  
- **IAM Roles/Policies** → security and permissions  
- **SES Email Setup** → sends contact form messages  

All these are created, managed, and destroyed using Terraform — making deployment **consistent and version-controlled**.

---

## 🧩 Folder Structure
my-portfolio/

     │

     ├── src/ # React components & pages

     ├── public/ # Static assets

     ├── infra/ or terraform/ # Terraform infrastructure as code

     ├── lambda/ # Lambda function code (contact form)

     ├── Dockerfile # Docker setup for local build/test

     ├── .github/workflows/ # CI/CD pipeline definitions

     ├── package.json # Frontend dependencies

     ├── tailwind.config.js # Tailwind setup

     ├── README.md # You’re reading it 🙂

     └── dist/ # Built frontend (generated on build)

---

## ⚙️ DevOps Pipeline (CI/CD)

This project uses **GitHub Actions** for continuous integration and deployment.

### 🔁 Workflow
1. Developer pushes code to `main` branch.
2. GitHub Action:
   - Installs dependencies
   - Builds the frontend (`npm run build`)
   - Deploys `dist/` to AWS S3
   - Invalidates CloudFront cache for instant updates

### 🔒 Secrets Required
You’ll need to set these in your GitHub repo’s **Settings → Secrets and Variables → Actions**:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

---

## 🐳 Docker Support

To build and test locally without installing Node globally:

``bash
docker build -t portfolio .
docker run -p 8000:8000 portfolio``
# 🛡️ Security & Best Practices

S3 bucket access limited via Origin Access Control (OAC).

CloudFront enforces HTTPS (redirects HTTP).

IAM roles used instead of permanent credentials.

No hardcoded secrets; GitHub Actions use encrypted secrets.

Infrastructure fully reproducible via Terraform.
## 👨‍💻 About Me

Hey, I’m  DEEPAK —
A passionate DevOps and Cloud Engineer, who believes in doing things the right way — automated, secure, and scalable.

This portfolio isn’t just a showcase of my work.
It’s a showcase of how I work.

“I don’t just write code — I build systems that run themselves.”

© 2025 Itzz DEEPAK — DevOps & Cloud Portfolio
