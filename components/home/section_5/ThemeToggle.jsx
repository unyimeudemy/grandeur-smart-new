'use client'

import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

import React from 'react'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("Theme")
    if (theme === "dark") setDarkMode(true)
  }, [])
  
  useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add('light')
        localStorage.setItem("theme", "light")
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <div className= {`relative w-16 h-8 flex items-center
      dark:bg-gray-300 bg-customGray cursor-pointer
      rounded-full p-1`}
      onClick={() => setDarkMode(!darkMode)}
      style={darkMode ? {background: "#e6e6e6"} : {background: "#78A67C"}}
    >
        {/* <FaMoon className='text-white' size={18} /> */}
        <div
          className='absolute bg-white 
          dark:bg-medium w-6 h-6 rounded-full
          shadow-md transform transition-transform
          duration-300'
          style={darkMode ? {left: "2px"} : {right: "2px"}}
        >
        </div>
        {/* <BsSunFill 
            className='ml-auto text-yellow-400'
            size={18}
        /> */}
    </div>
  )
}       

export default ThemeToggle;