import React from 'react'
import styles from './SmartHome.module.css'
import PhoneBubble from '../phonebubble/PhoneBubble'


function SmartHome() {

  return (
    <div className='w-[100%]'>
          <div className='mt-[100px] w-[100%]'>
                <div class="flex justify-center ">
                  <div class="w-[522px] h-[111px]">
                    <div class="w-[522px] h-[42px] font-helvetica font-bold text-[36px] text-[#212121]">
                      One App, Multiple Integrations
                    </div>
                    <div class="w-[521px] h-[41px] font-roboto font-medium text-[16px] text-[#212121] mt-[18px]">
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