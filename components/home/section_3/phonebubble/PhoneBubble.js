
import React from 'react'
import Image from 'next/image'
import styles from './PhoneBubble.module.css'
import Slider from 'react-slick';


const CustomPrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute z-10 flex justify-center cursor-pointer top-[138px] left-[-520px]"
    >
      <Image
          src="/images/section3_carousal_arrowL.svg"
          alt="Grandeur Smart Logo"
          width={100}
          height={32}
      />
    </div>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute z-10 flex justify-center cursor-pointer right-[-100px] bottom-[185px]"
    >
      <Image
          src="/images/section3_carousal_arrowR.svg"
          alt="Grandeur Smart Logo"
          width={100}
          height={32}
      />
    </div>
  );


function PhoneBubble() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 50000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
      };

  return (
    <div className="flex justify-center items-center mt-[60px] mb-[80px]">
        <div className='flex items-center w-[100%] justify-center'>
            <div class="flex justify-center items-center relative  w-[440px] h-[400px]">
                <div class="absolute w-[350px] h-[350px] bg-black/5 rounded-full flex justify-center items-center">
                    <div className={styles.mymatterdiv1}>
                        <Image 
                            src='/images/smallmatter00.svg'
                            alt='matter'
                            width={136}
                            height={96}
                        />
                    </div>
                    <div className={styles.myawsdiv1}>
                        <Image 
                            src='/images/smallaws00.svg'
                            alt='aws'
                            width={136}
                            height={96}
                        />
                    </div>
                    <div className={styles.myzigbeediv1}>
                        <Image 
                            src='/images/smallzigbee00.svg'
                            alt='zigbee'
                            width={136}
                            height={96}
                        />
                    </div>
                    <div className={styles.mywavediv1}>
                        <Image 
                            src='/images/smallwave00.svg'
                            alt='wave'
                            width={136}
                            height={96}
                        />
                    </div>
                    <div className={styles.myawsdiv2}>
                        <Image 
                            src='/images/smallaws00.svg'
                            alt='aws'
                            width={136}
                            height={96}
                        />
                    </div>
                    <div className={styles.mymatterdiv2}>
                        <Image 
                            src='/images/smallmatter00.svg'
                            alt='matter'
                            width={136}
                            height={96}
                        />
                    </div>
                    <div className={styles.myzigbeediv2}>
                        <Image 
                            src='/images/smallzigbee00.svg'
                            alt='zigbee'
                            width={136}
                            height={96}
                        />
                    </div>
                    <div className={styles.mylorawandiv}>
                        <Image 
                            src='/images/smalllorawan00.svg'
                            alt='Lorawan'
                            width={166}
                            height={96}
                            className={styles.mylorawanimg}
                        />
                    </div>
                    <div className={styles.myzigbeediv3}>
                        <Image 
                            src='/images/smallzigbee00.svg'
                            alt='zigbee'
                            width={136}
                            height={96}
                        />
                    </div>
                    <div className={styles.myawsdiv3}>
                        <Image 
                            src='/images/smallaws00.svg'
                            alt='aws'
                            width={136}
                            height={96}
                        />
                    </div>
                    <div className={styles.mymatterdiv3}>
                        <Image 
                            src='/images/smallmatter00.svg'
                            alt='matter'
                            width={136}
                            height={96}
                        />
                    </div>
                    <div className={styles.belowdiv}>
                    <div className={styles.myalexadiv1}>
                        <Image 
                            src='/images/smallalexa00.svg'
                            alt='alexa'
                            width={136}
                            height={96}
                        />
                    </div>
                    <div className={styles.myrainbowdiv1}>
                        <Image 
                            src='/images/grouprainbow.png'
                            alt='rainbow'
                            width={136}
                            height={96}  
                        />
                    </div>
                    <div className={styles.myhomekitdiv1}>
                        <Image 
                            src='/images/smallhomekit00.svg'
                            alt='Home Kit'
                            width={136}
                            height={96} 
                        />
                    </div>
                    <div className={styles.mymatterdiv4}>
                        <Image 
                            src='/images/smallmatter00.svg'
                            alt='Matter'
                            width={136}
                            height={96} 
                        />
                    </div>
                    <div className={styles.mywavediv2}>
                        <Image 
                            src='/images/smallwave00.svg'
                            alt='Matter'
                            width={136}
                            height={96} 
                        />
                    </div>
                    <div className={styles.myhomekitdiv2}>
                        <Image 
                            src='/images/smallhomekit00.svg'
                            alt='Home Kit'
                            width={136}
                            height={96} 
                        />
                    </div>
                    <div className={styles.myalexadiv2}>
                        <Image 
                            src='/images/smallalexa00.svg'
                            alt='alexa'
                            width={136}
                            height={96}
                        />
                    </div>
                    <div className={styles.myrainbowdiv2}>
                        <Image 
                            src='/images/grouprainbow.png'
                            alt='rainbow'
                            width={136}
                            height={96} 
                        />
                    </div>
                    </div>
                    <div className={styles.mybackground3}>
                        <div className={styles.mybackground2}>
                        <div className={styles.mybackground1}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.myphonediv}>
                <Image 
                    src='/images/groupphonesmall.svg'
                    width={200}
                    height={350}
                    alt='Phone Image'
                    className={styles.myphoneimg}
                />
                </div>
            </div>
            <div className='w-[750px]'>
                {/* <Slider {...settings}> */}
                    <div className='ml-[-10px] mb-[-50px] outline-none'>
                            <video 
                            className="w-[780px] "
                            autoPlay
                            muted
                            loop 
                            width="780px" 
                            height="auto"
                        >
                            <source className='w-[850px]' src="/videos/combined-cut.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    {/* <div className=' ml-[-10px]'>
                            <video 
                            className="w-[780px] "
                            autoPlay
                            muted
                            loop 
                            width="780px" 
                            height="auto"
                        >
                            <source className='w-[850px]' src="/videos/modern-thermo-cut.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className=' ml-[-10px]'>
                            <video 
                            className="w-[780px] "
                            autoPlay
                            muted
                            loop 
                            width="780px" 
                            height="auto"
                        >
                            <source className='w-[850px]' src="/videos/camera-view-cut.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div> */}
                {/* </Slider> */}
            </div>
        </div>
    </div>
  )
}

export default PhoneBubble

































































































































































































































































































































































































































































































































































































































