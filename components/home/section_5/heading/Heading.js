import React, { useState } from 'react'
import NightMode from '../nightmode/NightMode'
import styles from './Heading.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { GrFormNext } from "react-icons/gr";
import Image from 'next/image';
import ThemeToggle from '../ThemeToggle';

function Heading() {
  // State to track if the button is on or off
  const [isOn, setIsOn] = useState(false);

  // Toggle function to change the state
  const toggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex justify-around mb-[81px]">
        <div className='h-[556px] w-[556px]'>
            {/* <NightMode /> */}
            <Image 
                src='/images/nightmode.svg'
                alt='Moon'
                width={556}
                height={556}
            />
        </div>
        <div className={styles.headdiv}>
        <div>
            {/* <div className={styles.h1text}> */}
            <div className=" mb-[18px] w-[474px] h-[48px] font-helvetica font-bold text-[36px] text-[#212121]">
                Heading Title will Go here.
            </div>
        </div>
        {/* <div className={styles.p1textdiv}> */}
        <div className="  mb-[26px]  w-[509px] h-[113px] font-roboto font-medium text-[16px] text-[#212121]">

            {/* <p className={styles.p1text}> */}
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                quis nostrud exerci tation ullamcorper suscipit lobortis nisl 
                ut aliquip ex ea commodo consequat. Duis autem
            {/* </p> */}
        </div>
        <div className='mobile-320-400:flex flex-col'>
            <div>
                <div className="mb-[20px] text-[17px] font-bold tracking-[1px] font-sans">
                    Activate Routine
                </div>
            </div>
            <div className={styles.maindiv}>
            <div 
            className='
            mobile-320-400:flex
            mobile-320-400:justify-center
            mobile-401-480:flex
            mobile-401-480:justify-center
            mobile-481-600:flex
            mobile-481-600:justify-center
            mobile-601-768:flex
            mobile-601-768:justify-center
            mobile-769-900:flex
            mobile-769-900:justify-center
            mobile-901-1200:flex
            mobile-901-1200:justify-center
            '>
                <ThemeToggle />
            {/* <Image 
                src='/smalltoggle2.svg'
                alt='Small Toggle'
                width={73}
                height={49}
            /> */}
            </div>
            <div className={styles.viewdiv}>
                <div className={styles.viewlinkdiv}>
                    <Link className={styles.viewlink} href='#'>View All Routine</Link>
                </div>
                <div>
                    <GrFormNext className={styles.nextlink} />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Heading