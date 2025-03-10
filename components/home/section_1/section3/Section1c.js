import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Section1c.module.css'


function Section1c() {
  return (
    <div className="h-full  flex justify-center items-center w-[100%] mt-[50px] xl:mt-[-80px]
    xl:flex-col xl:h-[95vh]">
         
      <div className=' justify-center items-center flex  w-[94%]
        flex-col xl:flex-row  gap-[30px] mt-[50px] xl:mt-[170px] 
        xl:flex xl:gap-[93px] container'>

        <div className=" w-full h-[386px] xl:w-[663px] xl:h-[400px] xl:mt-[10px] ">
          <div className="h-[92px] w-full  font-helvetica font-bold text-[30px]
            text-white xl:h-[132px]  xl:text-[50px]">
            Optimize Your Energy With Grandeur Smart
          </div>

          <div className=" h-[213px] mt-[8px] xl:h-[166px] xl:mt-[21px] ">
            <div className=" h-[44px] font-roboto text-[13px] font-medium 
              text-white xl:text-[16px]  xl:h-[44px] ">
              Reduce costs and increase efficiency with smart energy insights tailored to your usage.
            </div>

            <div className=" mt-[17px] xl:mt-0 gap-[4px] w-full h-[152px] flex flex-col xl:w-[599px]
              xl:h-[105px]  xl:flex-col xl:gap-[21px]">

              <div className="  w-full  h-[48px] flex gap-[7px] xl:w-[586px] xl:h-[28px]  xl:flex xl:items-center ">
                <div className="xl:w-[28px] xl:h-[28px] xl:mr-[7px]">
                  <Image 
                  src='/images/smarthome.svg'
                  width={28}
                  height={28}
                  alt='Smart Home'
                  />
                </div>
                <div className=" w-[340px] h-[44px] font-roboto text-[13px] text-white font-medium xl:text-[16px]">
                  Reduce heating during peak hours to save 20% on energy costs.
                </div>
              </div>

              <div className="  w-full  h-[48px] flex gap-[7px] xl:w-[586px] xl:h-[28px]  xl:flex xl:items-center ">
                <div className="xl:w-[28px] xl:h-[28px] xl:mr-[7px]">
                  <Image 
                  src='/images/smarthome.svg'
                  width={28}
                  height={28}
                  alt='Smart Home'
                  />
                </div>
                <div className=" w-[340px] h-[44px] font-roboto text-[13px] text-white font-medium xl:text-[16px]">
                  Run appliances after 9 PM for reduced rates & energy efficiency.
                </div>
              </div>

              <div className="  w-full  h-[48px] flex gap-[7px] xl:w-[586px] xl:h-[28px]  xl:flex xl:items-center ">
                <div className="xl:w-[28px] xl:h-[28px] xl:mr-[7px]">
                  <Image 
                  src='/images/smarthome.svg'
                  width={28}
                  height={28}
                  alt='Smart Home'
                  />
                </div>
                <div className=" w-[340px] h-[44px] font-roboto text-[13px] text-white font-medium xl:text-[16px]">
                  Switch to eco-mode in the early afternoon to save energy.
                </div>
              </div>

            </div>
          </div>

          <button className="
            bg-[#A97D5D] w-[136px] h-[45px] xl:w-[158px] xl:h-[52px] flex
            mt-[28px] justify-center items-center text-white 
            rounded-[99px] border-none xl:mt-[69px] hover:scale-110
            transform transition-transform">
            <div className="xl:font-helvetica xl:font-bold xl:text-[16px]">
              Learn More
            </div>
          </button>

        </div>
        <div className='xl:mt-[50px] w-[252px] h-[434px] xl:w-[350px] xl:h-[550px] mt-[-50px]'>
          <Image 
            src="/images/reduce-energy-phone.svg"
            alt="Grandeur-smart phone"
            width={320}
            height={478}
          />
        </div>

      </div>
    </div>
  )
}

export default Section1c