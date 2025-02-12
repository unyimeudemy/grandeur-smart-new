import React from 'react'
import Image from 'next/image';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { PiMouseScroll } from 'react-icons/pi';
import styles from './Popup.module.css';
import Link from 'next/link';
import Chat from '../chat/Chat';

function Popup() {
  return (
    // <div className={styles.popup}>
    <div class="w-[1220px] h-[658px] flex items-center mt-[54px]">
        {/* <div className={styles.popdiv}> */}
        <div className='w-[640px] h-[650px]'>
            <div class="w-[640px] h-[84px] font-helvetica font-bold text-[36px] text-[#212121]">
                Experience The Power of AI-Assisted Living
            </div>
            <div class="w-[570px] h-[66px] font-helvetica font-medium text-[16px] text-[#212121] mt-[18px]">
                See how AI-driven automations transform home energy management, security, and comfort.
            </div>
            <video 
                className="w-[622px] h-[481px] rounded-[15px] object-cover"
                controls 
                width="100%" 
                height="auto"
            >
                <source src="/videos/smarthome.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        {/* <div className={styles.chat}> */}
        <div class="w-[640px] h-[658px] flex flex-col ml-[23px]">
            <Chat />
        </div>
    </div>
  )
}

export default Popup