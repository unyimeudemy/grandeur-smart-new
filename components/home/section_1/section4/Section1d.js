import React from 'react'
import styles from './Section1d.module.css'
import Image from 'next/image'
import Link from 'next/link'


function Section1d() {
  return (
    <div className=" items-center justify-center w-[100%] flex flex-col h-[95vh] bg-gradient-to-r to-[#5C755E] from-[#78A67C]">
      <div className='w-[1189px] h-[427px] flex gap-[93px]'>
        <div className="w-[663px] h-[400px] mt-[10px]">
          <div className=" w-[662px] h-[132px] font-helvetica text-[55px] font-bold text-white ">
          Optimize Your Property With Grandeur Smart
          </div>

          <div className=" w-[597px] h-[166px] mt-[21px] text-white ">
            <div className="w-[544px] h-[44px] font-roboto text-[16px] font-medium">
              Reduce costs and increase efficiency with smart energy insights tailored to your usage.
            </div>

            <div className="w-[599px] h-[105px] mt-[17px] flex flex-col gap-[11px]">
              <div className="w-[586px] h-[28px] flex items-center">
                <div className="w-[28px] h-[28px] mr-[7px]">
                  <Image 
                  src='/images/smarthome.svg'
                  width={28}
                  height={28}
                  alt='Smart Home'
                  />
                </div>
                <div className="font-roboto text-[16px]">
                  Reduce heating during peak hours to save 20% on energy costs.
                </div>
              </div>

              <div className="w-[586px] h-[28px] flex items-center">
              <div className="w-[28px] h-[28px] mr-[7px]">
                  <Image 
                  src='/images/smarthome.svg'
                  width={28}
                  height={28}
                  alt='Smart Home'
                  />
                </div>
                <div className="font-roboto text-[16px]">
                  Run appliances after 9 PM for reduced rates & energy efficiency.
                </div>
              </div>

              <div className="w-[586px] h-[28px] flex items-center">
              <div className="w-[28px] h-[28px] mr-[7px]">
                  <Image 
                  src='/images/smarthome.svg'
                  width={28}
                  height={28}
                  alt='Smart Home'
                  />
                </div>
                <div className="font-roboto text-[16px]">
                  Switch to eco-mode in the early afternoon to save energy.
                </div>
              </div>
            </div>
          </div>

          <button className="bg-[#A97D5D] w-[158px] h-[52px] flex justify-center items-center text-white rounded-[30px] border-none mt-[39px] hover:scale-110 transform transition-transform">
            <div className="font-helvetica font-bold text-[16px]">
              Learn More
            </div>
          </button>
        </div>
        <div className='w-[434px] h-[419px] '>
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