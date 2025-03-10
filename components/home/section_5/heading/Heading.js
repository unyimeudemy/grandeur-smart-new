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
    <div className=" mt-[40px]  flex flex-col items-center  xl:items-start  xl:flex-row   ">
        <div className=' w-[340px] h-[340px] xl:h-[756px] xl:w-[756px]  xl:mt-0'>
            <Image 
                src='/images/nightmode.svg'
                alt='Moon'
                width={556}
                height={556}
            />
        </div>
        <div className=' xl:ml-[-100px] w-full flex justify-center items-center'>
            <div className={`${styles.headdiv}   flex flex-col `}>
                <div className='
                    w-full text-[25px] mb-[10px] flex justify-center
                    xl:mb-[18px] xl:w-[474px] xl:h-[48px] font-helvetica font-bold 
                    xl:text-[36px] text-[#212121] text-center
                '>
                    Night Mode Automation
                </div>
                <div className='flex justify-center'>
                    <div className=" mb-3 w-[90%] xl:mb-[26px]  xl:w-[509px] xl:h-[113px] font-roboto font-medium text-[13px] xl:text-[16px] text-[#212121]">
                        Night Mode is designed to create a restful environment, enhancing comfort and security during nighttime hours. With intelligent automation, Night Mode seamlessly adjusts your home’s settings to match your preferred nighttime routine.
                    </div>
                </div>
                <div className='w-[100%] flex justify-center '>
                    <div className=' w-[90%] xl:w-[100%]'>
                        <div className=" xl:mb-[20px] text-[17px] font-bold tracking-[1px] font-sans">
                            Activate Routine
                        </div>
                        <div className={styles.maindiv}>
                            <div 
                            className='
                            mt-[20px] xl:mt-0
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
        </div>

    </div>
  )
}

export default Heading