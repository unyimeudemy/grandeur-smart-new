import React from 'react'
import styles from './MultipleAI.module.css'
import MyCarousel1 from '../MyCarousel1'

function MultipleAI() {
  return (
    <div className=" flex flex-col items-center py-[30px]  xl:mb-[100px] xl:p-[100px_50px] bg-gradient-to-r from-[#5C755E] to-[#78A67C] w-[100%] overflow-hidden">
        <div className={` w-[95%] flex  justify-center text-center xl:text-[36px] `}>
            <h1 className=" text-[25px] xl:text-[34px] font-bold text-helvitica text-white">
                Multiple Integrations Suggested By AI
            </h1>
        </div>

        <div className=" w-[95%] xl:w-[60%] text-[14px] text-center text-bold text-white flex justify-center items-center mb-[30px] ">
                Discover the power of Smart AI, your intelligent companion
                designed to streamline processes, enhance productivity, and 
                enable innovative solutions across platforms. With a focus 
                on seamless integration, Smart AI connects with your favorite 
                tools to create a unified experience tailored to your needs.
        </div>
        <div className=' w-[95%]'>
            <MyCarousel1 />
        </div>
    </div>
  )
}

export default MultipleAI