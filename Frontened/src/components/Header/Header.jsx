import React,{ useRef } from 'react'
import './Header.css'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

function Header() {
  const boxRef = useRef(null);

  useGSAP(()=>{
    gsap.from(".header-part",{
      opacity:0,
      scale:0.2,
      duration:1.6,
      
    })
  },[])
  return (
    <div className='header-part'>
      <div className='header-content'>
      <h2>Place Your Order Here</h2>
      <p>Welcome to Food Adda, where every meal is an experience and every bite tells a story. Discover our diverse menu, crafted with fresh ingredients and love, to satisfy your cravings and inspire your taste buds. Join us for a culinary journey like no other, and let your senses savor the magic of great food.</p>
      <button id='header-view-menu'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
