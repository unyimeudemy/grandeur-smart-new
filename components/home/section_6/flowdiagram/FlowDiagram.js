import React from 'react';
import 'reactflow/dist/style.css';
import styles from './FlowDiagram.module.css';
import Image from 'next/image';
import AutomateSmart from '../automatesmart/AutomateSmart';
import { LuMoveDown } from "react-icons/lu";

const FlowDiagram = () => {
//   return (
//     // <div className="flex justify-center items-center">
//     <div className={styles.divmain}>
//         <div className={styles.autosmart}>
//             <AutomateSmart />
//         </div>
//         <div className={styles.seendown}>
//         <div className={styles.divmain2}>
//         <div className={styles.divss}>
//         <div className={styles.div1}>
//             <div className={styles.staffsnakediv}>
//                 {/* <FaStaffSnake className={styles.staffsnake} /> */}
//                 <Image 
//                     src='/smallsnake.svg'
//                     width={38}
//                     height={24}
//                     alt='Smart Movement'
//                     className={styles.snakeimg}
//                 />
//             </div>
//             <div>
//                 <p className={styles.ptext1}>Unusual Movement Detected</p>
//             </div>
//         </div>
//         </div>
//         <div className={styles.seenflowdiv}>
//             <Image 
//                 src='/smallseen.svg'
//                 alt='seen flow'
//                 width={206}
//                 height={206}
//                 className={styles.seenflowimage}
//             />
//         </div>
//         </div>
//         <div className={styles.arrow1}>
//             {/* <LuMoveDown className={styles.lumove} /> */}
//             <Image 
//                 src='/automatearrow1.svg'
//                 width={23}
//                 height={79}
//                 alt='arrow one'
//                 className='mobile-321'
//             />
//         </div>
//         <div className={styles.div2}>
//             <div className={styles.staffsnakediv2}>
//                 <Image 
//                     src='/smallalert.svg'
//                     alt='warning alert'
//                     width={24}
//                     height={24}
//                     className={styles.smallalertimg}
//                 />
//             </div>
//             <div>
//                 <p className={styles.ptext2}>Theft Prevention Mode Activated</p>
//             </div>
//         </div>
//         <div className={styles.arrow3}>
//             {/* <LuMoveDown className={styles.lumove} /> */}
//             <Image 
//                 src='/automatearrow1.svg'
//                 width={23}
//                 height={79}
//                 alt='arrow one'
//                 className='mobile-321'
//             />
//         </div>
//         <div className={styles.arrow2}>
//             <Image 
//                 src='/automatearrow2.svg'
//                 width={538}
//                 height={147}
//                 alt='arrow one'
//             />
//         {/* <div className={styles.lumoveleftdiv}>
//             <LuMoveDownLeft className={styles.lumoveleft} />
//         </div>
//         <div className={styles.lumovediv2}>
//             <LuMoveDown className={styles.lumove2} />
//         </div>
//         <div className={styles.lumoveright}>
//             <LuMoveDownRight className={styles.lumoveright} />
//         </div> */}
//         </div>
//         <div className={styles.div3mains}>
//         <div className={styles.div3}>
//             <div className={styles.staffsnakediv3}>
//                 <Image 
//                     src='/smalldoors.svg'
//                     alt='Door mart'
//                     width={80}
//                     height={154}
//                     className={styles.doorimg}
//                 />
//             </div>
//             <div>
//                 <p className={styles.ptext3}>Lock All Doors</p>
//             </div>
//         </div>
//         <div className={styles.arrow4}>
//             {/* <LuMoveDown className={styles.lumove} /> */}
//             <Image 
//                 src='/automatearrow1.svg'
//                 width={23}
//                 height={79}
//                 alt='arrow one'
//                 className='mobile-321'
//             />
//         </div>
//         <div className={styles.lumovediv3}>
//             <LuMoveDown className={styles.lumove3} />
//         </div>
//         <div className={styles.div4}>
//             <div className={styles.staffsnakediv4}>
//                 <Image 
//                     src='/smallbulbs.svg'
//                     alt='bulb'
//                     width={184}
//                     height={185}
//                 />
//             </div>
//             <div>
//                 <p className={styles.ptext4}>Turn On All Lights</p>
//             </div>
//         </div>
//         <div className={styles.arrow5}>
//             {/* <LuMoveDown className={styles.lumove} /> */}
//             <Image 
//                 src='/automatearrow1.svg'
//                 width={23}
//                 height={79}
//                 alt='arrow one'
//                 className='mobile-321'
//             />
//         </div>
//         <div className={styles.lumovediv4}>
//             <LuMoveDown className={styles.lumove4} />
//         </div>
//         <div className={styles.div5}>
//             <div className={styles.staffsnakediv5}>
//                 <Image 
//                     src='/smallalarms.svg'
//                     alt='trigger alarm'
//                     width={90}
//                     height={144}
//                 />
//             </div>
//             <div>
//                 <p className={styles.ptext5}>Trigger Alarm</p>
//             </div>
//         </div>
//         </div>
//         <div className={styles.alertmain}>
//         <div className={styles.alert1}>
//         <div className={styles.alertdiv}>
//             <Image 
//                 src='/alertlaysmall.svg' 
//                 alt='Alert'
//                 width={32}
//                 height={32}
//                 className={styles.alertimg}
//             />
//         </div>
//         <div>
//             <div className={styles.alerth1div}>
//                 <h1 className={styles.alerth1}>Alert</h1>
//             </div>
//             <div className={styles.alertp1div}>
//                 <p className={styles.alertp1}>Send an immediate notification to the user, with a live feed from
//                 security cameras.</p>
//             </div>
//         </div>
//         </div>
//         <div className={styles.alert2}>
//         <div className={styles.alertdiv2}>
//             <Image 
//                 src='/callsmall.svg' 
//                 alt='Alert'
//                 width={32}
//                 height={32}
//                 className={styles.alertimg2}
//             />
//         </div>
//         <div>
//             <div className={styles.alerth2div}>
//                 <h1 className={styles.alerth2}>Follow-Up</h1>
//             </div>
//             <div className={styles.alertp2div}>
//                 <p className={styles.alertp2}>Send an immediate notification to the user, with a live feed from
//                 security cameras.</p>
//             </div>
//         </div>
//         </div>
//         </div> 
//         </div>
//     </div>
//     // </div>
//   );

return (
    <div className=' w-[100%] h-[787px] flex flex-col items-center justify-center bg-gradient-to-r from-[#5C755E] to-[#78A67C]'>
      <div className="flex w-[1196px] h-[747px] mt-[63px] ml-[83px] mr-[70px] mb-[104px] ">
        {/* Left Section */}
        <div className="w-[403px] h-[747px] flex flex-col mt-[20px]">
          <div className="w-[403px] h-[146px] mt-[44px] flex flex-col">
            <Image 
              src="/images/logoplustext.svg" 
              width={403} 
              height={84} 
              alt="Logo Plus Text" 
            />
            <div className="w-[403px] h-[44px] font-roboto text-[16px] font-medium text-white mt-[18px]">
              Experience proactive, AI-driven control that adapts to your needs—even when you’re not around.
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[749px] h-[747px] flex flex-col items-center">
          <Image 
            src="/images/flow.svg" 
            width={739} 
            height={627} 
            alt="Flow Diagram" 
          />
          <div className="w-[739px] h-[111px] mt-[9px] flex gap-[31px]">
            {/* Item 1 */}
            <div className="w-[356px] h-[111px] flex">
              <div className="w-[72px] h-[111px] flex flex-col">
                <Image 
                  src="/images/warninglogo.svg" 
                  width={54} 
                  height={54} 
                  alt="Warning Logo" 
                />
              </div>
              <div className="w-[384px] h-[111px] ml-[14px]">
                <div className="w-[284px] h-[42px] font-helvetica text-[24px] font-bold text-white">
                  Alert
                </div>
                <div className="w-[259px] h-[66px] font-roboto text-[16px] font-medium text-white">
                  Send an immediate notification to the user, with a live feed from security cameras.
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="w-[356px] h-[111px] flex">
              <div className="w-[72px] h-[111px] flex flex-col">
                <Image 
                  src="/images/phonelogo.svg" 
                  width={54} 
                  height={54} 
                  alt="Phone Logo" 
                />
              </div>
              <div className="w-[384px] h-[111px] ml-[14px]">
                <div className="w-[284px] h-[42px] font-helvetica text-[24px] font-bold text-white">
                  Follow-up
                </div>
                <div className="w-[259px] h-[66px] font-roboto text-[16px] font-medium text-white">
                  AI initiates a check with nearby trusted contacts or security services if the user doesn’t respond.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDiagram;