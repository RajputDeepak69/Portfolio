import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-40 glass">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white/10">
            <img
              src="/images/profile.jpg"
              alt="Deepak Thakur"
              className="object-cover w-full h-full"
            />
          </div>

          <div>
            <div className="font-semibold text-gray-900 dark:text-white">
              DEEPAK THAKUR
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 -mt-1">
              DevOps Engineer • Cloud Enthusiast
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium"
                  : "text-gray-500 dark:text-gray-300 hover:text-white"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <div className="md:hidden relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded border border-white/5"
            >
              ☰
            </button>
            {open && (
              <div className="absolute right-0 top-12 w-44 glass rounded-lg p-3 flex flex-col">
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
