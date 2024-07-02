import React from 'react'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiExpress, SiRedux, SiTypescript } from 'react-icons/si'
import { TbBrandMongodb, TbBrandNextjs } from 'react-icons/tb'
import {FiGithub} from "react-icons/fi" 
import {FaGitAlt} from "react-icons/fa6" 

const data = [
    {
        component : FaHtml5,
        size : 40,
        className : 'text-orange-500',
        name : "HTML"
    },
    {
        component : FaCss3Alt,
        size : 40,
        className : 'text-blue-500',
        name : "CSS"
    },
    {
        component : IoLogoJavascript,
        size : 40,
        className : 'text-yellow-500',
        name : "Javascript"
    },
    {
        component : FaReact,
        size : 40,
        className : 'text-cyan-500',
        name : "React "
    },
    {
        component : SiExpress,
        size : 35,
        className : 'text-yellow-500',
        name : "Express js"
    },
    {
        component : TbBrandNextjs,
        size : 40,
        className : 'text-white',
        name : "Next js"
    },
    {
        component : FaNodeJs,
        size : 40,
        className : 'text-green-500',
        name : "Node js"
    },
    {
        component : SiRedux,
        size : 40,
        className : 'text-purple-500',
        name : "Redux"
    },
    {
        component : TbBrandMongodb,
        size : 40,
        className : 'text-green-600',
        name : "MongoDB"
    },
    {
        component : SiTypescript,
        size : 35,
        className : 'text-blue-600',
        name : "TypeScript"
    },
    {
        component : FaGitAlt,
        size : 35,
        className : 'text-orange-600',
        name : "Git"
    },
    {
        component : FiGithub,
        size : 35,
        className : 'text-white',
        name : "GitHub"
    },
]


const TechStackSection = () => {
  return (
    <section 
    id='skills'
    className='dark:bg-black md:pt-16'>
        <h2 className='py-20 sm:pt-32 sm:text-7xl dark:bg-clip-text text-transparent bg-gradient-to-tl from-neutral-300 to-neutral-600 text-center text-4xl font-bold'>My Tech Stack</h2>
        <div className='flex flex-wrap gap-4 justify-center  max-w-xl mx-auto dark:text-neutral-200 text-lg sm:text-xl'>
            {data.map((item, index)=>(
                <div key={index} className='flex justify-center items-center  border border-neutral-500 p-3 gap-1 rounded-xl capitalize'>
                <item.component 
                size={item.size}
                className={item.className}
                />
                {item.name}
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechStackSection