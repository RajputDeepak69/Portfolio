import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-white/6 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <div>© {new Date().getFullYear()} Deepak Thakur — DevOps & Cloud</div>
        <div className="flex items-center space-x-4 mt-3 md:mt-0">
          <a 
            href="https://www.linkedin.com/in/thakur-deepak29" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/RajputDeepak69" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white"
          >
            GitHub
          </a>
          <a 
            href="mailto:feb29deepak@gmail.com" 
            className="hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
