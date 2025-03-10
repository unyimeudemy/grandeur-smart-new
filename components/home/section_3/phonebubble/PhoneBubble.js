
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './PhoneBubble.module.css'
import Slider from 'react-slick';


import smallmatter00 from '/public/images/smallmatter00.svg';
import smallaws00 from '/public/images/smallaws00.svg';
import smallzigbee00 from '/public/images/smallzigbee00.svg';
import smallwave00 from '/public/images/smallwave00.svg';
import smalllorawan00 from '/public/images/smalllorawan00.svg';
import smallalexa00 from '/public/images/smallalexa00.svg';
import grouprainbow from '/public/images/grouprainbow.png';
import smallhomekit00 from '/public/images/smallhomekit00.svg';
import groupphonesmall from '/public/images/groupphonesmall.svg';


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
                { threshold: 0.4 } 
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
    <div className=" xl:gap-[100px]  flex flex-col xl:flex-row justify-center items-center mt-[20px] xl:mt-[60px] xl:mb-[80px] ">
            <div className=" flex justify-center items-center relative  w-[430px] h-[400px] overflow-hidden">

                <div className="  absolute w-[350px] h-[350px] bg-black/5 rounded-full flex justify-center items-center">
                    <div className={styles.mymatterdiv1}>
                        <Image src={smallmatter00} alt='matter' width={136} height={96} />
                    </div>
                    <div className={styles.myawsdiv1}>
                        <Image src={smallaws00} alt='aws' width={136} height={96} />
                    </div>
                    <div className={styles.myzigbeediv1}>
                        <Image src={smallzigbee00} alt='zigbee' width={136} height={96} />
                    </div>
                    <div className={styles.mywavediv1}>
                        <Image src={smallwave00} alt='wave' width={136} height={96} />
                    </div>
                    <div className={styles.myawsdiv2}>
                        <Image src={smallaws00} alt='aws' width={136} height={96} />
                    </div>
                    <div className={styles.mymatterdiv2}>
                        <Image src={smallmatter00} alt='matter' width={136} height={96} />
                    </div>
                    <div className={styles.myzigbeediv2}>
                        <Image src={smallzigbee00} alt='zigbee' width={136} height={96} />
                    </div>
                    <div className={styles.mylorawandiv}>
                        <Image src={smalllorawan00} alt='Lorawan' width={166} height={96} className={styles.mylorawanimg} />
                    </div>
                    <div className={styles.myzigbeediv3}>
                        <Image src={smallzigbee00} alt='zigbee' width={136} height={96} />
                    </div>
                    <div className={styles.myawsdiv3}>
                        <Image src={smallaws00} alt='aws' width={136} height={96} />
                    </div>
                    <div className={styles.mymatterdiv3}>
                        <Image src={smallmatter00} alt='matter' width={136} height={96} />
                    </div>
                    <div className={styles.belowdiv}>
                        <div className={styles.myalexadiv1}>
                            <Image src={smallalexa00} alt='alexa' width={136} height={96} />
                        </div>
                        <div className={styles.myrainbowdiv1}>
                            <Image src={grouprainbow} alt='rainbow' width={136} height={96} />
                        </div>
                        <div className={styles.myhomekitdiv1}>
                            <Image src={smallhomekit00} alt='Home Kit' width={136} height={96} />
                        </div>
                        <div className={styles.mymatterdiv4}>
                            <Image src={smallmatter00} alt='Matter' width={136} height={96} />
                        </div>
                        <div className={styles.mywavediv2}>
                            <Image src={smallwave00} alt='Matter' width={136} height={96} />
                        </div>
                        <div className={styles.myhomekitdiv2}>
                            <Image src={smallhomekit00} alt='Home Kit' width={136} height={96} />
                        </div>
                        <div className={styles.myalexadiv2}>
                            <Image src={smallalexa00} alt='alexa' width={136} height={96} />
                        </div>
                        <div className={styles.myrainbowdiv2}>
                            <Image src={grouprainbow} alt='rainbow' width={136} height={96} />
                        </div>
                    </div>
                    <div className={styles.mybackground3}>
                        <div className={styles.mybackground2}>
                            <div className={styles.mybackground1}></div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <Image 
                        // src='/images/groupphonesmall.svg'
                        src={groupphonesmall}
                        width={200}
                        height={350}
                        alt='Phone Image'
                        className="relative z-3 h-[250px] xl:h-[500px] xl:w-[200px]"
                    />
                </div>

            </div>

            <div className='  h-[300px]  xl:h-[110%] ml-[-150px] xl:ml-0  flex flex-col'>
                <div className=' mr-[-80px]  w-[500px] h-[300px] xl:ml-[100px] xl:mb-[-50px] outline-none  xl:mt-0'>
                    <video 
                        className="xl:max-w-[680px]  xl:ml-[-150px]"
                        ref={videoRef}
                        autoPlay
                        muted
                        onEnded={() => handleSetVideoEnded()}
                    >
                    <source src="/videos/combined-cut.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                <div className='  h-[40px] w-full  flex justify-end xl:mt-[50px] z-10'>
                    {videoEnded && 
                    <div 
                        className='flex items-center gap-[5px] xl:gap-[10px]  hover:cursor-pointer mr-[30px] xl:mr-[100px] '
                        onClick={handleReplay}
                    > 
                        <div className='  w-[11px] xl:w-[15px] h-full  flex items-center'>
                            <Image 
                                src='/images/replay.svg'
                                width={22}
                                height={22}
                                alt='replay icon'
                            />
                        </div>
                        <div className='text-[#212121] font-normal font-roboto text-[12px] xl:text-[17px]'>Replay</div>
                    </div>}
                </div>
            </div>
    </div>
  )
}

export default PhoneBubble

