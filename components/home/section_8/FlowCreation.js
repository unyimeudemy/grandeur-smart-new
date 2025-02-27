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
    <div className=" overflow-hidden w-[100%] xl:h-[937px] flex flex-col justify-center items-center mt-[-50px]">
      <div className=" mb-[20px] xl:mb-0 w-[1186px] h-[136px] flex justify-center">
        <div className="w-[947px] h-[136px] flex flex-col items-center">
          <div className="w-[947px] h-[55px] font-helvetica font-bold text-[40px] text-[#5C755E] flex justify-center">
            Flow Creation
          </div>
          <div className="w-[452px] h-[42px] font-helvetica font-bold text-[36px] text-[#212121] mt-[4px]">
            Your space. Your control.
          </div>
          <div className="w-[521px] h-[22px] flex justify-center font-roboto font-medium text-[16px] text-[#212121] mt-[13px]">
            Explore practical scenarios where SMART automation shines
          </div>
        </div>
      </div>
      <div className="xl:w-[1100px] xl:h-[742px] xl:mt-[65px] ">
              <video 
                ref={videoRef}
                autoPlay
                muted
                onEnded={() => handleSetflowCreationEnded()}
          >
              <source src="/videos/flow-with-flashlight-cut.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
      </div>
      <div className='  h-[40px] w-full  flex justify-center xl:mt-[-250px] z-10'>
        <div className="  w-[80%] xl:w-[1200px] flex justify-end ">
          {flowCreationEnded && 
          <div 
              className=' w-[120px] flex items-center gap-[10px] mr-[50px] hover:cursor-pointer'
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
  );
};

export default FlowCreation;
