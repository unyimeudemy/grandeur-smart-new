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
    <div className="w-max  mt-[65px] flex items-center justify-center xl:w-[1220px] xl:h-[658px] xl:mt-[54px] ">
        <div className='w-[95%] flex flex-col gap-[150px]  xl:gap-2 xl:flex-row justify-center items-center '>
            <div className='xl:w-[640px] xl:h-[650px] '>
            {/* <div> */}
                <div className="  w-[376px] h-[84px] md:w-[640px] text-[28px]  font-helvetica font-bold md:text-[36px] text-[#212121]">
                    Experience The Power of AI-Assisted Living
                </div>
                <div className=" font-helvetica font-medium text-[15px] text-[#212121]
                w-[374px] h-[66px]
                 md:text-[16px] md:w-[570px] md:h-[66px] md:mt-[18px]">
                    See how AI-driven automations transform home energy management, security, and comfort.
                </div>
                    <div className='xl:flex xl:justify-center xl:w-full xl:h-full'>
                        <video
                            className="w-full h-[301px] xl:w-[632px] xl:h-[401px] rounded-[15px] object-cover"
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
            <div className="  h-[377px] w-[425px] md:w-[640px] md:h-[658px] flex md:flex-col md:ml-[23px] ">
                <Chat />
            </div>
        </div>
    </div>
  )
}

export default Popup