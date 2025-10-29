import React, { useState, useEffect } from 'react'
export default function BackToTop(){
  const [vis, setVis] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setVis(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])
  function goTop(){ window.scrollTo({top:0, behavior:'smooth'}) }
  return (
    <div id="backTop">
      {vis && (
        <button onClick={goTop} className="glass p-3 rounded-full shadow-lg">
          ↑
        </button>
      )}
    </div>
  )
}
