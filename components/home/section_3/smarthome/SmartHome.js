import React from 'react'
import styles from './SmartHome.module.css'
import PhoneBubble from '../phonebubble/PhoneBubble'


function SmartHome() {

  return (
    <div className='w-[100%]'>
          <div className='mt-[100px] w-[100%] '>
            <div className="flex justify-center ">
              <div className=" h-auto w-[80%] xl:w-[38%] flex flex-col justify-center">
                {/* <div className=" bg-red-500 w-auto h-auto xl:max-w-[522px] xl:max-h-[42px] font-helvetica font-bold text-[36px] text-[#212121]"> */}
                <div className=" text-center  text-[28px]  font-helvetica font-bold xl:text-[36px] text-[#212121]">
                  One App, Multiple Integrations
                </div>
                {/* <div className="w-[521px] h-[41px] font-roboto font-medium text-[16px] text-[#212121] mt-[18px]"> */}
                <div className="text-center mt-[7px] font-roboto font-medium text-[15px] xl:text-[16px] text-[#212121] xl:mt-[18px]">
                  At Smart Grandeur, we are proud to partner with industry-leading sponsors who share our vision of innovation, excellence, and progress.
                </div>
              </div>
            </div>
            <PhoneBubble />
          </div>
    </div>

  )
}

export default SmartHome