import React from 'react'
import Image from 'next/image';


const SmartSpeaker = () => {
  return (
    <div className=" bg-[#F5F5F5] w-full h-auto mt-[72px] xl:w-[1222px]  xl:h-[804px] flex flex-col items-center  overflow-hidden">
        <h1 className="items-center ml-[180px]  flex flex-col w-full ">
            <div className='flex justify-center '>
                <p className='mr-[-120px] text-[70px] text-[#5C755E] font-bold font-helvetica mt-[-10px]'>Meet</p>
                <div className='w-full h-full flex justify-center '>
                    <Image
                    src="/images/smart-logo.svg"
                    alt="User Permission"
                    width={626}
                    height={486}
                    className="w-[360px] h-[95px] object-cover ml-[150px]"
                    />
                </div>
            </div>
            <div className='mt-2 mx-3 mr-6 w-full font-bold font-helvetica text-[25px] flex justify-center text-[#5C755E] text-wrap'>
                <div className='ml-[-150px] text-center w-full'>Your personalized AI voice assistant for homes <span className=' underline hover:cursor-pointer '>learn more</span> </div>
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
                    className="w-[370px] h-[600px] object-cover"
                />
                </div>
                <div className='w-full h-full flex justify-center mt-[-50px]'>
                    <Image
                    src="/images/smart-logo.svg"
                    alt="User Permission"
                    width={626}
                    height={486}
                    className="w-[300px] h-[95px] object-cover ml-[150px]"
                    />
                </div>
            </div>
            <div className='  w-[80%] xl:w-[60%] h-[40%] xl:h-full  mt-[40px] xl:mt-0 flex flex-col justify-center'>

                <div>
                    <h1 className="text-[30px] text-[#212121] font-bold font-helvetica flex justify-center">
                        Our Partners
                    </h1>
                    <div className='w-full h-full flex justify-center mt-[30px] '>
                        <Image
                        src="/images/our-partners-collection.svg"
                        alt="our partners"
                        width={626}
                        height={486}
                        className="w-[760px] h-[470px] object-fit"
                    />
                </div>

                </div>

            </div>
        </div>

      
    </div>
  )
}

export default SmartSpeaker
