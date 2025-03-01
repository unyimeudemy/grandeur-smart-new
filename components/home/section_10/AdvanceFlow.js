import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Image from "next/image";


const Container = styled.div`
    width: 1222px;
    height: 715px;
    background: red;
    display: flex;
`

const AdvanceFlow = () => {
      const videoRef = useRef(null);
      const [advanceflowEnded, setadvanceflowEnded] = useState(false);
  
      const handleReplay = () => {
          videoRef.current.play()
          setadvanceflowEnded(false)
      }
      const handleSetadvanceflowEnded = () => {
          setadvanceflowEnded(true)
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



  return (
    <div className="mt-[72px] xl:w-[1222px] h-[504px] xl:h-[804px] flex flex-col items-center overflow-hidden">
        <div className=" text-[30px] mb-[30px] xl:mb-0 flex justify-center xl:w-[589px] xl:h-[55px] font-helvetica font-bold xl:text-[40px] text-[#5C755E]">
            <div>Advanced Flow Creation</div>
        </div>
        <div className=" ml-[20px] overflow-hidden w-[522px] xl:mt-[34px] xl:w-[1022px] xl:h-[715px]  flex flex-col items-center">
            <video 
                ref={videoRef}
                muted
                onEnded={() => handleSetadvanceflowEnded()}
                width="1132px" 
                height="auto"
            >
                <source  src="/videos/advance-flow-cut.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
 
        <div className='  h-[40px] w-full  flex justify-center xl:mt-[-140px] z-10'>
                <div className=" w-[80%] xl:w-[1200px] flex justify-end ">
                    {advanceflowEnded && 
                    <div 
                        className='  w-[120px] flex items-center gap-[10px]  hover:cursor-pointer mr-[50px] xl:mr-0'
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
        <div className='w-full h-[110px]  flex justify-center'>
            <div className='w-[90%] xl:w-[1222px] h-full  flex items-center rounded-2xl shadow-lg '>
                <Image 
                    src='/images/advance-flow-wide-card.svg'
                    width={22}
                    height={22}
                    alt='replay icon'
                    className='w-full h-full '
                />
            </div>
        </div>

    </div>
  )
}

export default AdvanceFlow
