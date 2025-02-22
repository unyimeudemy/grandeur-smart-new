import React from 'react'
// import styles from './Footer.module.css'
// import styles from "./Footer.module.css"
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <div className=" px-[50px] h-[438px] py-12 flex flex-col bg-gradient-to-l from-[#5C755E] to-[#78AC76]">
        <div className="ml-[20px]">
        <Image
            src='/images/grandeurfooter.svg'
            alt='Grandeur smart Image'
            width={145}
            height={63}
            className="w-[150px] h-[63px]"
          />
        </div>
      <div className=" p-[40px] px-[30px] flex justify-between">
        <div>
          <div>
            <h1 className='text-white text-[14px] font-bold tracking-widest'><a href='#'>QUICKLINKS</a></h1>
          </div>
          <div>
            <p className='text-white text-[14px] tracking-widest'><a href='#'>Blog</a></p>
          </div>
          <div>
            <p className='text-white text-[14px] tracking-widest'><a href='#'>Documentation</a></p>
          </div>
          <div>
            <p className='text-white text-[14px] tracking-widest'><a href='#'>Integration</a></p>
          </div>
          <div>
            <p className='text-white text-[14px] tracking-widest'><a href='#'>Product</a></p>
          </div>
        </div>
        <div>
          <div>
          <h1 className='text-white text-[14px] font-bold tracking-widest'><a href='#'>STORE</a></h1>
          </div>
          <div>
            <p className='text-white text-[14px] tracking-widest'><a href='#'>Buy Grandeur Smart</a></p>
          </div>
          <div>
            <p className='text-white text-[14px] tracking-widest'><a href='#'>Where To Buy</a></p>
          </div>
        </div>
        <div>
          <div>
          <h1 className='text-white text-[14px] font-bold tracking-widest '><a href='#'>Developers</a></h1>
          </div>
          <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>Get Started</a></p>
          </div>
          <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>Server Status</a></p>
          </div>
          <div>
          <p className='text-white text-[14px] mt-4 font-bold tracking-widest'><a href='#'>PARTNERS</a></p>
          </div>
          <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>For Installers</a></p>
          </div>
          <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>For Manaufacturers</a></p>
          </div>
          <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>For Retailers</a></p>
          </div>
        </div>
        <div>
          <div>
          <h1 className='text-white text-[14px] font-bold tracking-widest'><a href='#'>COMPANY</a></h1>
          </div>
          <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>Career</a></p>
          </div>
          <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>Our Story</a></p>
          </div>
          <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>Support</a></p>
          </div>
          <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>Press</a></p>
          </div>
          <div>
          <p className='text-white text-[14px] tracking-widest'><a href='#'>Contact</a></p>
          </div>
        </div>
        <div>
          <div>
            <h1 className='text-white text-[14px] font-bold tracking-widest'><a href='#'>CONTACT</a></h1>
          </div>
          <div className='flex'>
            <Image 
              src='/images/grlocate.svg'
              width={24}
              height={24}
              alt='Location'
              className='mt-[-25px] mr-2'
            />
          <p className='flex tracking-wide text-white w-[241px] text-[14px]'><a href='#'>315 Herbert Macaulay Way, Yaba, Lagos 100001 Nigeria.</a></p>
          </div>
          <div className='flex'>
            <Image 
              src='/images/footercall.svg'
              width={22}
              height={22}
              alt='Footer call'
              className='mt-[-18px] mr-2'
            />
            <p className='flex tracking-widest text-white w-[241px] text-[14px]'><a href='#'>+234 813 997 2473</a></p>
          </div>
          <div className='flex'>
            <Image 
              src='/images/footermail.svg'
              width={20}
              height={16}
              alt='Mail'
              className='mt-[-15px] mr-2'
            />
            <p className='flex tracking-widest text-white w-[241px] text-[14px]'><a href='#'>info@grandeursmart.com</a></p>
          </div>
        </div>
        <div>
          <div>
            <h1 className='text-white text-[14px] font-bold tracking-widest'><a href='#'>SOCIAL LINKS</a></h1>
          </div>
          <div className='flex gap-2 mt-2'>
            <div className='bg-white w-[31px] h-[31px] rounded-full'>
            <a href='#'>
              <Image 
                src='/images/footerfacebook.svg'
                width={19}
                height={10}
                alt='Facebook'
                className='mx-auto pt-[5px]'
              />
              </a>
            </div>
            <div className='bg-white w-[31px] h-[31px] rounded-full'>
            <a href='#'>
              <Image 
                src='/images/footerlinkedin.svg'
                width={15}
                height={15}
                alt='Facebook'
                className='mx-auto pt-[5px]'
              />
              </a>
            </div>
            <div className='bg-white w-[31px] h-[31px] rounded-full'>
            <a href='#'>
              <Image 
                src='/images/footerinstagram.svg'
                width={20}
                height={22}
                alt='Facebook'
                className='mx-auto pt-[5px]'
              />
              </a>
            </div>
            <div className='bg-white w-[31px] h-[31px] rounded-full'>
            <a href='#'>
              <Image 
                src='/images/footertwitter.svg'
                width={20}
                height={20}
                alt='Facebook'
                className='mx-auto pt-[5px]'
              />
              </a>
            </div>
          </div>
          <div className='flex gap-2 mt-[17px]'>
            <div>
            <a href='#'>
              <Image 
                src='/images/appstorefooter.svg'
                width={119}
                height={35}
                alt='AppStore'
              />
            </a>
            </div>
            <div>
            <a href='#'>
              <Image 
                src='/images/googlestorefooter.svg'
                width={119}
                height={35}
                alt='AppStore'
              />
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto w-[90%] h-[1px] bg-white'></div>
      <div className='flex justify-center mt-4 tracking-widest'>
        <p className='text-white text-[13px]'>© Website 2024 All Right Reserved.</p>
      </div>
      </div>
      <div className="hidden">
        <div className="ml-[20px]">
          <a href='#'>
            <Image 
              src='/images/grandeurfooter.svg'
              alt='Grandeur smart Image'
              width={145}
              height={63}
              className="w-[300px] h-[73px]"
            />
          </a>
        </div>
        <div className=" flex gap-[50px] z-[100]">
          <div>
            <div>
              <h1 className='text-white text-[16px] font-bold tracking-widest'><a href='#'>QUICKLINKS</a></h1>
            </div>
            <div>
              <p className='text-white text-[16px] mt-3 tracking-widest'><a href='#'>Blog</a></p>
            </div>
            <div>
              <p className='text-white text-[16px] tracking-widest'><a href='#'>Documentation</a></p>
            </div>
            <div>
            <p className='text-white text-[16px] tracking-widest'><a href='#'>Integration</a></p>
            </div>
            <div>
              <p className='text-white text-[16px] tracking-widest'><a href='#'>Product</a></p>
            </div>
          </div>
          <div>
            <div>
              <h1 className='text-white text-[16px] font-bold tracking-widest'><a href='#'>STORE</a></h1>
            </div>
            <div>
              <p className='text-white text-[16px] mt-3 tracking-widest'><a href='#'>Buy Grandeur Smart</a></p>
            </div>
            <div>
              <p className='text-white text-[16px] tracking-widest'><a href='#'>Where to buy</a></p>
            </div>
          </div>
        </div>
        <div className=" flex mt-[30px] gap-[60px] z-[100]">
          <div>
            <div>
              <h1 className='text-white text-[16px] font-bold tracking-widest'><a href='#'>DEVELOPERS</a></h1>
            </div>
            <div>
              <p className='text-white text-[16px] mt-3 tracking-widest'><a href='#'>Get Started</a></p>
            </div>
            <div>
              <p className='text-white text-[16px] tracking-widest'><a href='#'>Server Status</a></p>
            </div>
            <div>
              <p className='text-white font-bold text-[16px] tracking-widest'><a href='#'>PARTNERS</a></p>
            </div>
            <div>
              <p className='text-white text-[16px] tracking-widest'><a href='#'>For installers</a></p>
            </div>
            <div>
              <p className='text-white text-[16px] tracking-widest'><a href='#'>For Manufacturers</a></p>
            </div>
            <div>
              <p className='text-white text-[16px] tracking-widest'><a href='#'>For retailers</a></p>
            </div>
          </div>
          <div>
            <div>
              <h1 className='text-white text-[16px] font-bold tracking-widest'><a href='#'>COMPANY</a></h1>
            </div>
            <div>
              <p className='text-white text-[16px] mt-3 tracking-widest'><a href='#'>Careers</a></p>
            </div>
            <div>
              <p className='text-white text-[16px] tracking-widest'><a href='#'>Our story</a></p>
            </div>
            <div>
              <p className='text-white text-[16px] tracking-widest'><a href='#'>Support</a></p>
            </div>
            <div>
              <p className='text-white text-[16px] tracking-widest'><a href='#'>Press</a></p>
            </div>
            <div>
              <p className='text-white text-[16px] tracking-widest mb-[10.04px]'><a href='#'>Contact</a></p>
            </div>
          </div>
        </div>
        <div className="bg-red-500 flex flex-col text-center mt-[30px] gap-[50px] z-[100] ">
          <div>
            <div>
              <h1 className='text-white text-[16px] font-bold tracking-widest'><a href='#'>CONTACT</a></h1>
            </div>
            <div className=" w-[241px] h-[36.13px] mt-[10.04px] flex">
              <Image 
                src='/images/grlocate.svg'
                width={24}
                height={24}
                alt='Location'
                className='mt-[-33px] mr-[-5px] h-[24px] w-[24px]'
              />
              <p className='flex tracking-wide leading-normal text-white w-[241px] text-[16px]'><a href='#'>315 Herbert Macaulay Way, Yaba, Lagos 100001 Nigeria.</a></p>
            </div>
            <div className='flex'>
              <Image 
                src='/images/footercall.svg'
                width={22}
                height={22}
                alt='Footer call'
                className='mt-[-18px] mr-2 h-[22px] w-[22px]'
              />
              <p className='flex tracking-widest text-white w-[241px] text-[16px]'><a href='#'>+234 813 997 2473</a></p>
            </div>
            <div className='flex'>
              <Image 
                src='/images/footermail.svg'
                width={20}
                height={16}
                alt='Mail'
                className='mt-[-15px] mr-2 h-[16px] w-[20px]'
              />
              <p className='flex tracking-widest text-white w-[241px] text-[16px]'><a href='#'>info@grandeursmart.com</a></p>
            </div>
          </div>
          <div>
            <div>
              <h1 className='text-white text-[16px] font-bold tracking-widest'><a href='#'>SOCIAL LINKS</a></h1>
            </div>
            <div className='flex justify-center gap-2 mt-2'>
              <div className='bg-white w-[31px] h-[31px] rounded-full'>
                <a href='#'>
                <Image 
                  src='/images/footerfacebook.svg'
                  width={19}
                  height={10}
                  alt='Facebook'
                  className='mx-auto pt-[5px]  h-[10px] w-[19px]'
                />
                </a>
              </div>
              <div className='bg-white w-[31px] h-[31px] rounded-full'>
                <a href='#'>
                <Image 
                  src='/images/footerlinkedin.svg'
                  width={15}
                  height={15}
                  alt='Facebook'
                  className='mx-auto pt-[5px]  w-[15px] h-[15px]'
                />
                </a>
              </div>
              <div className='bg-white w-[31px] h-[31px] rounded-full'>
                <a href='#'>
                <Image 
                  src='/images/footerinstagram.svg'
                  width={20}
                  height={22}
                  alt='Facebook'
                  className='mx-auto pt-[5px] w-[20px] h-[22px]'
                />
                </a>
              </div>
              <div className='bg-white w-[31px] h-[31px] rounded-full'>
                <a href='#'>
                <Image 
                  src='/images/footertwitter.svg'
                  width={20}
                  height={20}
                  alt='Facebook'
                  className='mx-auto pt-[5px] w-[20px] h-[20px]'
                />
                </a>
              </div>
            </div>
            <div className='flex justify-center gap-2 mt-[17px]'>
              <div>
                <a href='https://play.google.com/store/apps/details?id=com.grandeursmart.home.android'>
                <Image 
                  src='/images/appstorefooter.svg'
                  width={119}
                  height={35}
                  alt='AppStore'
                  className='  w-[119px] h-[35px]'
                />
                </a>
              </div>
              <div>
                <a href='https://play.google.com/store/apps/details?id=com.grandeursmart.home.android'>
                <Image 
                  src='/images/googlestorefooter.svg'
                  width={119}
                  height={35}
                  alt='AppStore'
                  className='  w-[119px] h-[35px]'
                />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto mt-5 w-[90%] h-[1px] bg-white'></div>
        <div className='flex justify-center mt-4 tracking-widest'>
          <p className='text-white text-center flex justify-center item-center text-[14px]'>© Website 2024 All Right Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer