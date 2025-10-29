import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ThemeToggle from "./ThemeToggle";


const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
  <header className="w-full sticky top-0 z-40 glass">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-black">
          DE
        </div>
        <div>
          <div className="font-semibold">Itzz DEEPAK</div>
          <div className="text-xs text-gray-600 dark:text-gray-400 -mt-1">
            DevOps Engineer • Cloud Enthusiast
          </div>
        </div>
      </div>

      {/* Center Links (Desktop) */}
      <nav className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              isActive
                ? "text-primary font-medium"
                : "text-gray-300 hover:text-white"
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* 🌙 Theme Toggle button */}
        <ThemeToggle />

        {/* ☰ Mobile menu */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded border border-white/5"
          >
            ☰
          </button>
          {open && (
            <div className="absolute right-4 top-16 w-44 glass rounded-lg p-3 flex flex-col">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-1"
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </header>
 );
}
