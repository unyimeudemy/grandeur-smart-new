"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import "@/styles/Home.module.css";
import { Roboto } from 'next/font/google';
// import SearchBar from '../searchbar/SearchBar';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import SearchBar from '@/components/searchbar/SearchBar';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenDesktop, setIsMenuOpenDesktop] = useState(false)
  const [show_product_drop_down_list, setshow_product_drop_down_list] = useState(false)
  const [flag_src, set_flag_src] = useState("")
  const [countryCode, setCountryCode] = useState("")


  const toggleMenu = () => setIsMenuOpen(prevState => !prevState)

  const [isMobile, setIsMobile] = useState(false);

  const handle_product_list = () => {
    setshow_product_drop_down_list(!show_product_drop_down_list)
  }

  const handle_product_list_desktop = () => {
    setIsMenuOpenDesktop(!isMenuOpenDesktop)
  }

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
    .then((res) => res.json())
    .then((data) => {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_21EdwHCkBUXdxaxU7xThnUr2mQjZc&ipAddress=${data.ip}`)
        .then((res) => res.json())
        .then((data) => {      
            setCountryCode(data.location.country)
            const country_code = data.location.country;
            const country_code_formated = country_code.toLowerCase();
            set_flag_src(country_code_formated)
        })
        .catch((err) => console.error("Error fetching country:", err));
    })
    .catch((err) => console.error("Error fetching country:", err));
  }, [])

  return (
      <div className='flex justify-center xl:px-8 px-3 fixed w-full top-4  xl:top-6 z-50'>

        <div className=" bg-white  
          flex justify-between items-center shadow-[1px_1px_1px_1px_#f0efef] container
            w-full
          rounded-[10px] xl:h-[72px] h-[60px]">
            <div className='flex items-center justify-center h-full  '>
              <Link href="/">
              <div className=' mt-[15px] xl:mt-0 ml-[21px] h-[40px] w-[80px] md:w-[92px] md:h-[29px] md:ml-[20px] md:hover:cursor-pointer '>
                <Image
                  src="/images/grandeursmart_logo.svg"
                  alt="Grandeur Smart Logo"
                  width={100}
                  height={32}
                />
              </div>
            </Link>
            </div>


          <div className='flex items-center justify-center mr-[24px] gap-[16px]  lg:hidden '>
            <Image
              src="/images/CartIcon.svg"
              alt="energy insight"
              width={579}
              height={432}
              className="xl:w-[40px] xl:h-[40px] w-[30px] h-[30px] "
            />
            <button onClick={toggleMenu} className="lg:bg-transparent lg:border-none lg:cursor-pointer">
              {isMenuOpen ? <FiX className="xl:text-black xl:w-[30px] xl:h-[30px] h-[20px] w-[20px]" /> : <FiMenu className="xl:text-black xl:w-[30px] xl:h-[30px] xl:hidden h-[20px] w-[20px]" />}
            </button>
          </div>


          
            <div className="lg:w-[635px] lg:h-[24px] lg:flex lg:gap-[20px] hidden">
              <Link className="nav-bar-link" href="/" prefetch={true}>Home</Link>
              {/* <Link className="nav-bar-link" href="/security/security" prefetch={true}>Getting Started</Link> */}
              <Link 
                className="nav-bar-link"  prefetch={true}
                href=""
                onClick={handle_product_list_desktop}
                >
                  Product
              </Link>
              {/* <Link className="nav-bar-link" href="/automation/automates" prefetch={true}>Automate</Link> */}
              <Link className="nav-bar-link" href="/documentation" prefetch={true}>Documentation</Link>
              <Link className="nav-bar-link" href="/integration/integration" prefetch={true}>Integration</Link>
            </div>
          <div className="lg:flex lg:items-center lg:gap-[20px] lg:mr-[20px] hidden">
            <Link href="#">
                <Image
                  src="/images/searchicon.svg"
                  alt="search"
                  width={23.17}
                  height={23.35}
                  className="nav-bar-icon"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/profile.svg"
                  alt="sign-in"
                  width={23.17}
                  height={23.35}
                  className="nav-bar-icon"
                />
              </Link>
              <Link href="#">
                <Image
                  src={`/images/${flag_src}.webp`}
                  alt="USA flag"
                  width={23.17}
                  height={23.35}
                  className="nav-bar-icon"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/cart.svg"
                  alt="shopping cart"
                  width={23.17}
                  height={23.35}
                  className="nav-bar-icon"
                />
              </Link>
            </div>
          </div>

          {isMenuOpen && <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='absolute bg-white h-[79vh] w-[90%] top-[64px]
            rounded-[10px] 
             '>

              <div className='flex flex-col m-[60px] gap-5'>  
                  <div className='text-[#212121] font-semibold font-helvetica text-[18px]'
                  >Home</div>

                  <div className='text-[#212121] font-semibold font-helvetica text-[18px]'
                  >Getting started</div>
                  <div 
                    onClick={handle_product_list}
                    className='flex items-center justify gap-2 hover:cursor-pointer'
                  >
                    <div className='text-[#212121] font-semibold font-helvetica text-[18px]'
                      >Product</div>
                      { show_product_drop_down_list
                        ? 
                      <Image
                          src="/images/arrow-head-down.png"
                          alt="energy insight"
                          width={579}
                          height={432}
                          className="w-[12px] h-[12px] "
                        />
                        :
                        <Image
                        src="/images/arrow-head-down.png"
                        alt="energy insight"
                        width={579}
                        height={432}
                        className="w-[12px] h-[12px] -rotate-90"
                      />
                        }
                  </div>
                  {show_product_drop_down_list && 
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className=' h-auto ml-6 mt-[-20px] text-[#212121] font-normal font-helvetica text-[17px]'>
                      <div className='mt-1 flex flex-col gap-[5px]'>
                        <a
                          href="https://grandeursmart.com/estate-plans"
                        >Real Estate</a>
                        <a
                          href="https://grandeursmart.com/estate-plans"
                        >Energy</a>
                        <a
                          href="https://grandeursmart.com/estate-plans"
                        >Security</a>
                      </div>
                      
                  </motion.div>}
                  <div className='text-[#212121] font-semibold font-helvetica text-[18px]'
                  >Automate</div>
                  <div className='text-[#212121] font-semibold font-helvetica text-[18px]'
                  >Documentation</div>
                  <div className='text-[#212121] font-semibold font-helvetica text-[18px]'
                  >Integration</div>
              </div>

            <div/>
          </motion.div>}

          {isMenuOpenDesktop && <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='absolute bg-white h-[50vh] w-[90%] top-[90px]
            rounded-[10px] 
             '>
              <div className='flex flex-col m-[60px] gap-5'>  
                  <div className='text-[#212121] font-semibold font-helvetica text-[18px]'
                  >
                    <div className='mt-1 flex flex-col gap-[5px]'>
                        <a
                          href="https://grandeursmart.com/estate-plans"
                        >Real Estate</a>
                        <a
                          href="https://grandeursmart.com/estate-plans"
                        >Energy</a>
                        <a
                          href="https://grandeursmart.com/estate-plans"
                        >Security</a>
                      </div>
                  </div>

              </div>
            <div/>
          </motion.div>}

      </div>
  );
}

export default Navbar;