import React from 'react'
import styles from './SmartHome.module.css'
import PhoneBubble from '../phonebubble/PhoneBubble'


function SmartHome() {

  return (
    <div className='w-[100%] xl:mt-[100px] mt-[20px]  h-auto'>
        <div className="flex justify-center">
          <div className=" h-auto w-[80%] xl:w-[38%] flex flex-col justify-center">
            <div className=" text-center  text-[23px]  font-helvetica font-bold xl:text-[36px] text-[#212121]">
              One App, Multiple Integrations
            </div>
            <div className="text-center mt-[7px] font-roboto font-medium text-[13px] xl:text-[16px] text-[#212121] xl:mt-[18px]">
              At Smart Grandeur, we are proud to partner with industry-leading sponsors who share our vision of innovation, excellence, and progress.
            </div>
          </div>
        </div>
        <PhoneBubble />
    </div>

  )
}

export default SmartHome