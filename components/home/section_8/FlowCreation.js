import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const FlowCreation = () => {
      const videoRef = useRef(null);
      const [flowCreationEnded, setflowCreationEnded] = useState(false);
  
      const handleReplay = () => {
          videoRef.current.play()
          setflowCreationEnded(false)
      }
      const handleSetflowCreationEnded = () => {
          setflowCreationEnded(true)
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
            { threshold: 0.5 } 
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
    <div className=" overflow-hidden w-[100%] xl:h-[937px] flex flex-col justify-center items-center mt-[-50px]">
      <div className=" z-[2] mb-[20px] xl:mb-0 w-[1186px] h-[136px] flex justify-center ">
        <div className=" w-[947px] h-[136px] flex flex-col items-center">
          <div className="  xl:w-[947px] xl:h-[55px] font-helvetica font-bold text-[28px] xl:text-[40px] text-[#5C755E] flex justify-center">
            Flow Creation
          </div>
          <div className=" flex justify-center xl:flex-none  xl:w-[452px] xl:h-[42px] font-helvetica font-bold text-[22px] xl:text-[36px] text-[#212121] mt-[4px]">
            Your space. Your control.
          </div>
          <div className="  w-[350px] xl:w-[521px] xl:h-[22px] flex text-center justify-center font-roboto font-medium text-[13px] xl:text-[16px] text-[#212121] mt-[13px]">
            Explore practical scenarios where SMART automation shines
          </div>
        </div>
      </div>
      <div className=" z-[1] w-[400px] xl:w-[1100px] xl:h-[742px] xl:mt-[63px] ">
              <video 
                ref={videoRef}
                autoPlay
                muted
                onEnded={() => handleSetflowCreationEnded()}
          >
              <source src="/videos/create-flow.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
      </div>
      <div className='  h-[40px] w-full  flex justify-center xl:mt-[-250px] z-10'>
        <div className="  w-[80%] xl:w-[1200px] flex justify-end ">
          {flowCreationEnded && 
          <div 
              className='ml-[40px]  w-[70px] xl:w-[120px] flex items-center gap-[3px] xl:gap-[10px] xl:mr-[50px] hover:cursor-pointer'
              onClick={handleReplay}
              > 
              <div className=' w-[10px] xl:w-[15px] h-full  flex items-center'>
                  <Image 
                      src='/images/replay.svg'
                      width={22}
                      height={22}
                      alt='replay icon'
                  />
              </div>
              <div className='text-[#212121] font-normal font-roboto text-[11px] xl:text-[17px]'>Replay</div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default FlowCreation;
