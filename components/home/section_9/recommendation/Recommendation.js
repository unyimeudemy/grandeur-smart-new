import React from 'react'
import Image from 'next/image'
import styles from './Recommendation.module.css'
import drivercustomize from "/public/images/drivercustomize.svg"

import robotassistance from "/public/images/robotassistance.png"
import gsmart from "/public/images/gsmart.svg"
import smartBotIcon from "/public/images/smart-bot-icon.svg"


function Recommendation() {
  return (
        <div className='
          xl:gap-[160px] gap-[40px]  pt-[30px]  flex items-center justify-center flex-col xl:flex-row 
         w-[100%]   h-[750px]  xl:mt-0 xl:h-[406px] bg-gradient-to-l from-[#78A67C] to-[#5C755E] xl:flex xl:items-center xl:justify-none 
         '>
            <div className='  w-[140px] h-[180px] xl:w-[230px] xl:h-[230px]  flex flex-col  justify-between   '>
                <div className='  flex justify-between '>
                    <div className="">
                        <Image 
                            src={smartBotIcon}
                            alt='Robot Assistance'
                            width={19}
                            height={19}
                        />
                    </div>
                    <div className="">
                            <Image 
                                src={smartBotIcon}
                                alt='Robot Assistance'
                                width={19}
                                height={19}
                            />
                    </div>
                </div>

                <div className="  bg-white/10 ml-[-30px]  mb-[-50px]  mt-[-65px] w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] rounded-full  animate-[backgroundPop_4s_ease-in-out_infinite] flex justify-center items-center ">
                    <div className="bg-white/10 w-[160px] h-[160px] xl:w-[250px] xl:h-[250px] rounded-full  animate-[backgroundPop_4s_ease-in-out_infinite] flex justify-center items-center">
                        <div className="bg-white/10 w-[120px] h-[120px] xl:w-[200px] xl:h-[200px] rounded-full  animate-[backgroundPop_4s_ease-in-out_infinite] flex justify-center items-center">
                            <div className="  bg-white/10 w-[80px] h-[80px] xl:w-[150px] xl:h-[150px] rounded-full  animate-[backgroundPop_4s_ease-in-out_infinite] flex justify-center items-center">
                                <Image 
                                    src={gsmart}
                                    alt="smart"
                                    width={144}
                                    height={92}
                                    className=''

                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='  flex justify-between'>
                    <div className="">
                        <Image 
                            src={smartBotIcon}
                            alt='Robot Assistance'
                            width={19}
                            height={19}
                        />
                    </div>
                    <div className="">
                            <Image 
                                src={smartBotIcon}
                                alt='Robot Assistance'
                                width={19}
                                height={19}
                            />
                    </div>
                </div>
            </div>

            <div className="  xl:mt-[-30px] w-[80%] xl:w-[30%]  flex flex-col justify-center items-center text-center      xl:h-full ">
                <h1 className="  text-[20px]  xl:text-[25px] text-white font-bold xl:w-[421px] tracking-[2px] font-sans text-center">
                    Automated Recommendations
                </h1>
                <div className=" 
                     text-center flex
                    text-[15px] text-white tracking-[1px] xl:leading-[22px] xl:w-[343px] 
                ">
                    Smart analyzes user habits and suggests
                    personalized flows like “Would you like to 
                    activate ‘Night Mode’ automatically at 9 PM?

                </div>
            </div>

            <div className=' mt-[20px]  w-[140px] h-[180px] xl:w-[230px] xl:h-[230px] flex flex-col  justify-between   '>
                <div className='  flex justify-between '>
                    <div className="">
                        <Image 
                            src={smartBotIcon}
                            alt='Robot Assistance'
                            width={19}
                            height={19}
                        />
                    </div>
                    <div className="">
                            <Image 
                                src={smartBotIcon}
                                alt='Robot Assistance'
                                width={19}
                                height={19}
                            />
                    </div>
                </div>

                <div className=" bg-white/10 ml-[-30px] mb-[-50px]  mt-[-65px] w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] rounded-full  animate-[backgroundPop_4s_ease-in-out_infinite] flex justify-center items-center ">
                    <div className="bg-white/10 w-[160px] h-[160px] xl:w-[250px] xl:h-[250px] rounded-full  animate-[backgroundPop_4s_ease-in-out_infinite] flex justify-center items-center">
                        <div className="bg-white/10 w-[120px] h-[120px] xl:w-[200px] xl:h-[200px] rounded-full  animate-[backgroundPop_4s_ease-in-out_infinite] flex justify-center items-center">
                            <div className="  bg-white/10 w-[80px] h-[80px] xl:w-[150px] xl:h-[150px] rounded-full  animate-[backgroundPop_4s_ease-in-out_infinite] flex justify-center items-center">
                                <Image 
                                    src={gsmart}
                                    alt="smart"
                                    width={144}
                                    height={92}
                                    className=''

                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='  flex justify-between'>
                    <div className="">
                        <Image 
                            src={smartBotIcon}
                            alt='Robot Assistance'
                            width={19}
                            height={19}
                        />
                    </div>
                    <div className="">
                            <Image 
                                src={smartBotIcon}
                                alt='Robot Assistance'
                                width={19}
                                height={19}
                            />
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Recommendation