import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Section1c.module.css'


function Section1c() {
  return (
    <div className=" h-[1038px] flex justify-center items-center w-[100%]
      md:flex-col  md:h-[95vh] bg-gradient-to-r to-[#5C755E] from-[#78A67C] ">
      <div className='
        md:flex-row  justify-center items-center w-[92%] h-[779px] flex
       flex-col gap-[40px] md:w-[1189px] md:h-[427px] 
       md:flex md:gap-[93px]md:flex-row'>
        <div className=" mt-[80px] w-[375px] h-[386px] md:w-[663px] md:h-[400px] md:mt-[10px]">
          <div className=" w-[375px] h-[92px] font-helvetica font-bold text-[32px] text-white  md:w-[662px] md:h-[132px]  md:text-[55px]">
            Optimize Your Energy With Grandeur Smart
          </div>

          <div className="w-[375px] h-[213px] mt-[8px] md:w-[597px] md:h-[166px] md:mt-[21px] ">
            <div className="w-[373px] h-[44px] font-roboto text-[15px] font-medium  text-white md:text-[16px] md:w-[544px] md:h-[44px] ">
              Reduce costs and increase efficiency with smart energy insights tailored to your usage.
            </div>

            <div className=" mt-[17px] gap-[4px] w-[375px] h-[152px] flex flex-col md:w-[599px] md:h-[105px] md:mt-[17px] md:flex-col md:gap-[11px]">
              <div className=" w-[375px] h-[48px] flex gap-[7px] md:w-[586px] md:h-[28px] md:flex md:items-center">
                <div className="md:w-[28px] md:h-[28px] md:mr-[7px]">
                  <Image 
                  src='/images/smarthome.svg'
                  width={28}
                  height={28}
                  alt='Smart Home'
                  />
                </div>
                <div className=" w-[340px] h-[44px] font-roboto text-[15px] text-white font-medium md:text-[16px]">
                  Reduce heating during peak hours to save 20% on energy costs.
                </div>
              </div>

              <div className=" w-[375px] h-[48px] flex gap-[7px] md:w-[586px] md:h-[28px] md:flex md:items-center">
                <div className="md:w-[28px] md:h-[28px] md:mr-[7px]">
                  <Image 
                  src='/images/smarthome.svg'
                  width={28}
                  height={28}
                  alt='Smart Home'
                  />
                </div>
                <div className=" w-[340px] h-[44px] font-roboto text-[15px] text-white font-medium md:text-[16px]">
                  Run appliances after 9 PM for reduced rates & energy efficiency.
                </div>
              </div>

              <div className=" w-[375px] h-[48px] flex gap-[7px] md:w-[586px] md:h-[28px] md:flex md:items-center">
                <div className="md:w-[28px] md:h-[28px] md:mr-[7px]">
                  <Image 
                  src='/images/smarthome.svg'
                  width={28}
                  height={28}
                  alt='Smart Home'
                  />
                </div>
                <div className=" w-[340px] h-[44px] font-roboto text-[15px] text-white font-medium md:text-[16px]">
                  Switch to eco-mode in the early afternoon to save energy.
                </div>
              </div>
            </div>
          </div>

          <button className="
            bg-[#A97D5D] w-[136px] h-[45px] md:w-[158px] md:h-[52px] flex
            mt-[28px] justify-center items-center text-white 
            rounded-[99px] border-none md:mt-[39px] hover:scale-110
            transform transition-transform">
            <div className="md:font-helvetica md:font-bold md:text-[16px]">
              Learn More
            </div>
          </button>
        </div>
        <div className='md:w-[320px] md:h-[498px] '>
          <Image 
            src="/images/reduce-energy-phone.svg"
            alt="Grandeur-smart phone"
            width={260}
            height={478}
          />
        </div>
      </div>
    </div>
  )
}

export default Section1c