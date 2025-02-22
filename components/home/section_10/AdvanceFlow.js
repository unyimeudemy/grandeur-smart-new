import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 1222px;
    height: 715px;
    background: red;
    display: flex;
`

const AdvanceFlow = () => {
  return (
    <div className=" mt-[72px] xl:w-[1222px] h-[504px] xl:h-[804px] flex flex-col items-center overflow-hidden">
        <div className=" text-[30px] mb-[30px] xl:mb-0 flex justify-center xl:w-[589px] xl:h-[55px] font-helvetica font-bold xl:text-[40px] text-[#5C755E]">
            <div>Advanced Flow Creation</div>
        </div>
        <div className=" overflow-hidden w-[522px] xl:mt-[34px] xl:w-[1022px] xl:h-[715px]  flex flex-col items-center">
            <video 
                autoPlay
                muted
                loop 
                width="1122px" 
                height="auto"
            >
                <source  src="/videos/advance-flow-cut.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default AdvanceFlow
