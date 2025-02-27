
import React, { useEffect, useRef, useState } from 'react'
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

    const videoRef = useRef(null);
    const [videoEnded, setVideoEnded] = useState(false);

    const handleReplay = () => {
        videoRef.current.play()
        setVideoEnded(false)

    }

    const handleSetVideoEnded = () => {
        setVideoEnded(true)
    }

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        videoRef.current.play();
                    } else {
                        videoRef.current.pause();
                    }
                },
                { threshold: 0.7 } 
            );

            if (videoRef.current) {
                observer.observe(videoRef.current);
            }

            return () => {
                if (videoRef.current) {
                    observer.unobserve(videoRef.current);
                }
            };
        }, []);

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
    <div className="flex justify-center items-center mt-[60px] mb-[80px] ">
        <div className='flex flex-col xl:flex-row  items-center w-[100%] justify-center '>
            <div className="flex justify-center items-center relative  w-[430px] h-[400px] overflow-hidden">
                <div className=" absolute w-[350px] h-[350px] bg-black/5 rounded-full flex justify-center items-center">
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
                <div className={`${styles.myphonediv} `}>
                    <Image 
                        src='/images/groupphonesmall.svg'
                        width={200}
                        height={350}
                        alt='Phone Image'
                        className={styles.myphoneimg}
                    />
                </div>
            </div>
            <div className=' h-[110%] ml-[-150px] xl:ml-0  flex flex-col'>
                <div className='xl:ml-[100px] xl:mb-[-50px] outline-none mt-[60px] xl:mt-0'>
                    <video 
                        className="xl:max-w-[680px] xl:mr-0"
                        ref={videoRef}
                        autoPlay
                        muted
                        onEnded={() => handleSetVideoEnded()}
                    >
                    <source src="/videos/combined-cut.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className=' h-[40px] w-full  flex justify-end mt-[50px] z-10'>
                    {videoEnded && 
                    <div 
                        className='flex items-center gap-[10px]  hover:cursor-pointer mr-[100px]'
                        onClick={handleReplay}
                    > 
                        <div className='w-[15px] h-full  flex items-center'>
                            <Image 
                                src='/images/replay.svg'
                                width={22}
                                height={22}
                                alt='replay icon'
                            />
                        </div>
                        <div className='text-[#212121] font-normal font-roboto text-[17px]'>Replay</div>
                    </div>}
                </div>
            </div>

        </div>
    </div>
  )
}

export default PhoneBubble

