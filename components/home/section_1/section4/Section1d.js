import React from 'react'
import styles from './Section1d.module.css'
import Image from 'next/image'
import Link from 'next/link'


function Section1d() {
  return (
    <div className=" h-[1038px] flex justify-center items-center w-[100%] mt-[50px] xl:mt-0
      xl:flex-col xl:h-[95vh] bg-gradient-to-r to-[#5C755E] from-[#78A67C] ">

      <div className='
        xl:flex-row justify-center items-center w-[92%] h-[779px] flex
       flex-col gap-[40px] xl:w-[1189px] xl:h-[427px] 
       xl:flex xl:gap-[93px]'>
        <div className=" w-[375px] h-[386px] xl:w-[663px] xl:h-[400px] xl:mt-[10px]">
          <div className=" w-[375px] h-[92px] font-helvetica font-bold text-[32px]
           text-white  xl:w-[662px] xl:h-[132px]  xl:text-[55px]">
          Optimize Your Property With Grandeur Smart
          </div>

          <div className="w-[375px] h-[213px] mt-[8px] xl:w-[597px] xl:h-[166px] xl:mt-[21px] ">
            <div className="w-[373px] h-[44px] font-roboto text-[15px] font-medium 
             text-white xl:text-[16px] xl:w-[544px] xl:h-[44px] ">
              Reduce costs and increase efficiency with smart energy insights tailored to your usage.
            </div>

            <div className=" mt-[17px] gap-[4px] w-[375px] h-[152px] flex flex-col xl:w-[599px] xl:h-[105px] xl:mt-[17px] xl:flex-col xl:gap-[25px]">
              <div className=" w-[375px] h-[48px] flex gap-[7px] xl:w-[586px] xl:h-[28px] xl:flex xl:items-center">
                <div className="xl:w-[28px] xl:h-[28px] xl:mr-[7px]">
                  <Image 
                  src='/images/smarthome.svg'
                  width={28}
                  height={28}
                  alt='Smart Home'
                  />
                </div>
                <div className=" w-[340px] h-[44px] font-roboto text-[15px] text-white font-medium xl:text-[16px]">
                  Reduce heating during peak hours to save 20% on energy costs.
                </div>
              </div>

              <div className="flex gap-[7px] w-[375px] h-[48px] xl:w-[586px] xl:h-[28px] xl:flex xl:items-center">
                <div className="xl:w-[28px] xl:h-[28px] xl:mr-[7px]">
                  <Image 
                  src='/images/smarthome.svg'
                  width={28}
                  height={28}
                  alt='Smart Home'
                  />
                </div>
                <div className="font-roboto text-[15px] text-white font-medium  xl:text-[16px]">
                  Run appliances after 9 PM for reduced rates & energy efficiency.
                </div>
              </div>

              <div className=" flex gap-[7px] w-[375px] h-[48px] xl:w-[586px] xl:h-[28px] xl:flex xl:items-center">
                <div className="xl:w-[28px] xl:h-[28px] xl:mr-[7px]">
                  <Image 
                  src='/images/smarthome.svg'
                  width={28}
                  height={28}
                  alt='Smart Home'
                  />
                </div>
                <div className="font-roboto  text-[15px] text-white font-medium  xl:text-[16px]">
                  Switch to eco-mode in the early afternoon to save energy.
                </div>
              </div>
            </div>
          </div>

          <button className="
            bg-[#A97D5D] w-[136px] h-[45px] xl:w-[158px] xl:h-[52px] flex
            mt-[28px] justify-center items-center text-white 
            rounded-[99px] border-none xl:mt-[39px] hover:scale-110
            transform transition-transform">
            <div className="xl:font-helvetica xl:font-bold xl:text-[16px]">
              Learn More
            </div>
          </button>
        </div>
        <div className=' w-[374px] h-[353px] xl:w-[434px] xl:h-[419px]'>
          <Image 
            src="/images/smart-watch.svg"
            alt="Grandeur-smart phone"
            width={434}
            height={419}
          />
        </div>
      </div>
    </div>
  )
}

export default Section1d