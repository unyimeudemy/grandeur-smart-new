import React from 'react'
// import styles from './Footer.module.css'
// import styles from "./Footer.module.css"
import Image from 'next/image';
import grandeurfooter from "/public/images/grandeurfooter.svg";
import footerfacebook from "/public/images/footerfacebook.svg";
import footerlinkedin from "/public/images/footerlinkedin.svg";
import footerinstagram from "/public/images/footerinstagram.svg";
import footertwitter from "/public/images/footertwitter.svg";
import appstorefooter from "/public/images/appstorefooter.svg";
import googlestorefooter from "/public/images/googlestorefooter.svg";
import grlocate from "/public/images/grlocate.svg";
import footercall from "/public/images/footercall.svg";
import footermail from "/public/images/footermail.svg";

const Footer = () => {

  const currentYear = new Date().getFullYear();


  return (
      <div className="  pb-[30px] h-auto w-full overflow-hidden xl:px-[50px] xl:h-[438px] mt-[80px] pt-[50px] xl:py-12 flex flex-col items-center bg-gradient-to-l from-[#5C755E] to-[#78AC76]">
        <div className="  w-[98%] xl:w-auto  overflow-hidden">

            <div className="  w-full ">
              <div className='ml-[30px] xl:ml-0'>
                <Image
                  // src='/images/grandeurfooter.svg'
                  src={grandeurfooter}
                  alt='Grandeur smart Image'
                  width={145}
                  height={63}
                  className="w-[150px] h-[63px]"
                />
              </div>
            </div>

            <div className="  xl:gap-[56px] mt-[40px] xl:p-0 px-[30px] xl:px-0 flex flex-col xl:flex-row xl:justify-between">
                <div className=' gap-[15%]  xl:justify-normal flex  xl:gap-[56px]'>
                  <div className=' m'>
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
                  <div className=''>
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
                </div>

                <div className=' gap-[15%]  flex xl:gap-[56px] mt-[36px] xl:mt-0  xl:justify-normal'>
                  <div className=''>
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
                  <div className=' mr-[75px] xl:mr-0'>
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
                </div>


                <div className='  flex gap-[56px] mt-[36px] xl:mt-0 flex-col xl:flex-row'>
                  <div className='  xl:flex xl:flex-col xl:gap-[10px]'>
                    <div>
                      <h1 className='text-white text-[14px] font-bold tracking-widest'><a href='#'>CONTACT</a></h1>
                    </div>
                    <div className='flex  xl:items-center '>
                      <Image 
                        // src='/images/grlocate.svg'
                        src={grlocate}
                        width={24}
                        height={24}
                        alt='Location'
                        className='mt-[-25px] mr-2 xl:mt-[-10px]'
                      />
                    <p className='flex tracking-wide text-white w-[241px] text-[14px]'><a href='#'>315 Herbert Macaulay Way, Yaba, Lagos 100001 Nigeria.</a></p>
                    </div>
                    <div className='flex xl:justify-center xl:items-center '>
                      <Image 
                        // src='/images/footercall.svg'
                        src={footercall}
                        width={22}
                        height={22}
                        alt='Footer call'
                        className='mt-[-18px] mr-2 xl:mt-[0px]'
                      />
                      <p className='flex tracking-widest text-white w-[241px] text-[14px]'><a href='#'>+234 813 997 2473</a></p>
                    </div>
                    <div className='flex'>
                      <Image 
                        // src='/images/footermail.svg'
                        src={footermail}
                        width={20}
                        height={16}
                        alt='Mail'
                        className='mt-[-15px] mr-2 xl:mt-[0px]'
                      />
                      <p className='flex tracking-widest text-white w-[241px] text-[14px]'><a href='#'>info@grandeursmart.com</a></p>
                    </div>
                  </div>

                  <div className=' '>
                    <div>
                      <h1 className='text-white text-[14px] font-bold tracking-widest'><a href='#'>SOCIAL LINKS</a></h1>
                    </div>
                    <div className='flex gap-2 mt-2'>
                      <div className='bg-white w-[31px] h-[31px] rounded-full'>
                      <a href='https://web.facebook.com/p/Mainlogix-Technology-Limited'
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Image 
                          // src='/images/footerfacebook.svg'
                          src={footerfacebook}
                          width={19}
                          height={10}
                          alt='Facebook'
                          className='mx-auto pt-[5px]'
                        />
                        </a>
                      </div>
                      <div className='bg-white w-[31px] h-[31px] rounded-full'>
                      <a href='https://www.linkedin.com/company/mainlogixafrica'
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Image 
                          // src='/images/footerlinkedin.svg'
                          src={footerlinkedin}
                          width={15}
                          height={15}
                          alt='Facebook'
                          className='mx-auto pt-[5px]'
                        />
                        </a>
                      </div>
                      <div className='bg-white w-[31px] h-[31px] rounded-full'>
                      <a 
                        href='https://www.instagram.com/mainlogix_africa/'
                        target="_blank"
                        rel="noopener noreferrer"
                      
                      >
                        <Image 
                          // src='/images/footerinstagram.svg'
                          src={footerinstagram}
                          width={20}
                          height={22}
                          alt='Facebook'
                          className='mx-auto pt-[5px]'
                        />
                        </a>
                      </div>
                      <div className='bg-white w-[31px] h-[31px] rounded-full'>
                      <a 
                        href='https://x.com/MainLogiXTech'
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image 
                          // src='/images/footertwitter.svg'
                          src={footertwitter}
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
                      <a 
                        href='https://apps.apple.com/ng/app/grandeursmart/id6670559995'
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Image 
                          // src='/images/appstorefooter.svg'
                          src={appstorefooter}
                          width={119}
                          height={35}
                          alt='AppStore'
                        />
                      </a>
                      </div>
                      <div>
                      <a 
                        href='https://play.google.com/store/apps/details?id=com.grandeursmart.home.android'
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Image 
                          // src='/images/googlestorefooter.svg'
                          src={googlestorefooter}
                          width={119}
                          height={35}
                          alt='AppStore'
                        />
                      </a>
                      </div>
                    </div>
                  </div>
                </div>

            </div>

            <div className=' my-5 mx-auto w-[90%] h-[1px] bg-white' />

            <div className='  flex justify-center mt-4 tracking-widest'>
              <p className='text-white text-[13px]'>{`© Website ${currentYear} All Right Reserved.`}</p>
            </div>
        </div>

      </div> 
  )
}

export default Footer