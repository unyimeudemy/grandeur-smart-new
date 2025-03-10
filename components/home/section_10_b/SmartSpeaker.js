import React from 'react'
import Image from 'next/image';


const SmartSpeaker = () => {
  return (
    <div className="  w-full h-auto xl:mt-[72px] xl:w-[1222px]  xl:h-[804px] flex flex-col items-center justify-center  overflow-hidden">
        <h1 className="  items-center xl:ml-[180px]  flex flex-col w-full ">
            <div className='  flex justify-center items-center ml-[30px] xl:ml-0'>
                <p className=' text-[25px] xl:mr-[-140px] xl:text-[70px] text-[#5C755E] font-bold font-helvetica xl:mt-[-10px]'>Meet</p>
                <div className=' xl:w-full xl:h-full flex justify-center '>
                    <Image
                    src="/images/smart-logo.svg"
                    alt="User Permission"
                    width={626}
                    height={486}
                    className=" w-[120px] xl:w-[360px] xl:h-[95px] object-cover ml-[12px] xl:ml-[150px]"
                    />
                </div>
            </div>
            <div className='  xl:mt-2 xl:mx-3 xl:mr-6 w-full font-bold font-helvetica xl:text-[25px] flex justify-center text-[#5C755E] text-wrap'>
                <div className='xl:ml-[-150px] text-[13px] xl:text-[25px] text-center w-[80%]'>Your personalized AI voice assistant for homes <span className=' underline hover:cursor-pointer '>learn more</span> </div>
            </div>
        </h1>
        <div className='flex flex-col items-center xl:flex-row'>
            <div className='w-[80%]  xl:w-[40%] h-[60%] xl:h-full  flex flex-col justify-center items-center'>
                <div className='w-full h-full flex justify-center '>
                    <Image
                    src="/images/grandeur-smart-speaker.svg"
                    alt="User Permission"
                    width={626}
                    height={486}
                    className=" h-[350px] w-[380px] xl:w-[370px] xl:h-[600px] object-cover"
                />
                </div>
                <div className='  w-full h-full flex justify-center mt-[-30px] xl:mt-[-50px]'>
                    <Image
                    src="/images/smart-logo.svg"
                    alt="User Permission"
                    width={626}
                    height={486}
                    className=" w-[120px] xl:w-[300px] xl:h-[95px] object-cover ml-[50px] xl:ml-[150px]"
                    />
                </div>
            </div>
            <div className='  w-[80%] xl:w-[60%] h-[40%] xl:h-full  mt-[20px] xl:mt-0 flex flex-col justify-center'>

                <div className=''>
                    <h1 className=" text-[22px] xl:text-[30px] text-[#212121] font-bold font-helvetica flex justify-center">
                        Our Partners
                    </h1>
                    <div className='w-full h-full flex justify-center mt-[1px] xl:mt-[30px] '>
                        <Image
                        src="/images/our-partners-collection.svg"
                        alt="our partners"
                        width={626}
                        height={486}
                        className="xl:w-[760px] xl:h-[470px] object-fit"
                    />
                </div>

                </div>

            </div>
        </div>


    </div>
  )
}

export default SmartSpeaker
