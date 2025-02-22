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

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState)

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Initial check and event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
      <div className='flex justify-center px-8 fixed w-full top-10 z-10'>

        <div className=" bg-white  
          flex justify-between items-center shadow-[1px_1px_1px_1px_#f0efef] container
            w-full
          rounded-[10px] h-[72px]">
          <Link href="/">
            <div className=' ml-[21px] md:w-[92px] md:h-[29px] md:ml-[20px] md:hover:cursor-pointer '>
              <Image
                src="/images/grandeursmart_logo.svg"
                alt="Grandeur Smart Logo"
                width={100}
                height={32}
              />
            </div>
          </Link>

          <div className='flex items-center justify-center mr-[24px] gap-[16px]  lg:hidden '>
            <Image
              src="/images/CartIcon.svg"
              alt="energy insight"
              width={579}
              height={432}
              className="w-[40px] h-[40px]"
            />
            <button onClick={toggleMenu} className="lg:bg-transparent lg:border-none lg:cursor-pointer">
              {isMenuOpen ? <FiX className="lg:text-black lg:w-[30px] lg:h-[30px] h-[30px] w-[30px]" /> : <FiMenu className="lg:text-black lg:w-[30px] lg:h-[30px] lg:hidden h-[30px] w-[30px]" />}
            </button>
          </div>


          
            <div className="lg:w-[635px] lg:h-[24px] lg:flex lg:gap-[20px] hidden">
              <Link className="nav-bar-link" href="/" prefetch={true}>Home</Link>
              <Link className="nav-bar-link" href="/security/security" prefetch={true}>Getting Started</Link>
              <Link className="nav-bar-link" href="/energynav/energynav" prefetch={true}>Product</Link>
              <Link className="nav-bar-link" href="/automation/automates" prefetch={true}>Automate</Link>
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
                  src="/images/usflag.svg"
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

      </div>
        
  );
}

export default Navbar;




// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import "@/styles/Home.module.css"
// import { Roboto } from 'next/font/google';
// import SearchBar from '../searchbar/SearchBar';
// import styles from './Navbar.module.css'
// import { motion, AnimatePresence } from 'framer-motion';
// // import { AiFillCaretDown } from "react-icons/ai"

// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })

// function Navbar() {
//   return (
//       <div className={roboto.className}>
//         <div className={styles.nav}>
//         <div className={styles.navbar}>
//           <div className={styles.navbarlogo}>
//             <Image
//               src="/grandeursmart.png"
//               alt="Grandeur Smart Logo"
//               width={100}
//               height={32}
//             />
//           </div>
//           <div className={styles.link}>
//             <Link className={styles.navlink} href="/">Home</Link>
//             <Link className={styles.navlink} href="./product">Product</Link>
//             <Link className={styles.navlink} href="./documentation">Documentation</Link>
//             {/* <AiFillCaretDown className='drops' /> */}
//             <Link className={styles.navlink} href="./integration">Integration</Link>
//           </div>
//           <div className={styles.icons}>
//             <div>
//               <SearchBar />
//             </div>
//             <Link href="#">
//             <Image
//                 src="/Group3.png"
//                 alt='sign-in'
//                 width={18.94}
//                 height={21.31}
//                 className={styles.signin}
//               />
//             </Link>
//             <Link href="#">
//               <Image
//                 src="/usa.png"
//                 alt="group3"
//                 width={28}
//                 height={28}
//                 className={styles.usa}
//               />
//             </Link>
//             <Link href="#">
//               <Image
//                 src="/cart.png"
//                 alt="group3"
//                 width={28}
//                 height={28}
//                 className={styles.cart}
//               />
//             </Link>
//           </div>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default Navbar