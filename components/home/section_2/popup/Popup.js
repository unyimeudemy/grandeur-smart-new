import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { PiMouseScroll } from 'react-icons/pi';
import styles from './Popup.module.css';
import Link from 'next/link';
import Chat from '../chat/Chat';

function Popup() {

  
 
  return (
    <div className="  w-max  mt-[65px] flex items-center justify-center xl:w-[1220px] xl:h-[658px] xl:mt-[54px] ">
        <div className='w-[95%] flex flex-col   xl:gap-2 xl:flex-row justify-center items-center '>
            <div className='  mt-[-30px] xl:mt-0 w-[90%] xl:w-[640px] xl:h-[650px] flex flex-col items-center '>
            {/* <div> */}
                <div className="   w-[70%] xl:h-[84px] xl:w-[640px] text-[20px]  font-helvetica font-bold xl:text-[36px] text-[#212121]">
                    Experience The Power of AI-Assisted Living
                </div>
                <div className=" font-helvetica font-medium text-[13px]  text-[#212121]
                 w-[70%] xl:w-full h-[40px] 
                 xl:text-[16px]  xl:h-[66px] xl:mt-[22px]">
                    See how AI-driven automations transform home energy management, security, and comfort.
                </div>
                <div className=' w-[70%] h-[200px] xl:flex xl:justify-center xl:w-full xl:h-full '>
                    <video
                        className="w-full h-[200px] xl:w-[632px] xl:h-[401px]  object-fit"
                        autoPlay
                        loop   
                        playsInline  
                        controls
                    >
                        <source src='/videos/smarthome.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className=" h-[360px] w-[425px] xl:w-[640px] xl:h-[658px] flex xl:flex-col xl:ml-[23px] ">
                <Chat />
            </div>
        </div>
    </div>
  )
}

export default Popup

// trigger commits