import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import BackToTop from './components/BackToTop'

export default function App(){
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(()=>{
    const t = setTimeout(()=> setLoading(false), 600)
    return ()=> clearTimeout(t)
  },[])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {loading && (
        <div id="site-loader">
          <div className="spinner" />
        </div>
      )}
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home/></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About/></PageWrapper>} />
            <Route path="/skills" element={<PageWrapper><Skills/></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects/></PageWrapper>} />
            <Route path="/certifications" element={<PageWrapper><Certifications/></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

function PageWrapper({children}){
  return (
    <motion.div
      initial={{opacity:0, y:8}}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y:-6}}
      transition={{duration:0.35}}
    >
      {children}
    </motion.div>
  )
}
