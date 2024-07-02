import React from 'react'
import { FloatingNav } from './ui/floating-navbar'


const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Projects",
      link: "#projects",
      
    },
    {
      name: "Skills",
      link: "#skills",
      
    },
    {
      name: "Contact",
      link: "#contact",
      
    },
  ];
const Navbar = () => {
  return (
    <nav>
        <FloatingNav navItems={navItems}/>
    </nav>
  )
}

export default Navbar