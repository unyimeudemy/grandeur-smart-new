import React, { useCallback, useEffect } from 'react';
import { ReactFlow,ReactFlowProvider, useNodesState, useEdgesState, addEdge, Background, Controls, useReactFlow } from 'reactflow';
import InkEdge from './InkEdge';
import 'reactflow/dist/style.css';
import styles from './FlowDiagram2.module.css';
import { RiAlertFill } from "react-icons/ri";
import { GiMovementSensor } from "react-icons/gi";
import Image from 'next/image';
import AutomateSmart from '../automatesmart/AutomateSmart';
import { FaStaffSnake } from "react-icons/fa6";
import { LuMoveDown } from "react-icons/lu";
import { LuMoveDownLeft } from "react-icons/lu";
import { LuMoveDownRight } from "react-icons/lu";

const FlowDiagram2 = () => {
//   return (
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
//                     src='/hatman2.svg'
//                     width={23}
//                     height={36}
//                     alt='hatman'
//                     className={styles.hatman}
//                 />
//             </div>
//             <div>
//                 <p className={styles.ptext1}>Enable Traveller Mode</p>
//             </div>
//         </div>
//         </div>
//         <div className={styles.seenflowdivs}>
//             <Image 
//                 src='/checkairsg.svg'
//                 alt='air'
//                 width={125}
//                 height={150}
//                 className={styles.seenflowimages}
//             />
//         </div>
//         </div>
//         <div className={styles.lumovedivs}>
//             {/* <LuMoveDown className={styles.lumoves} /> */}
//             <Image 
//                 src='/automatearrow1.svg'
//                 width={23}
//                 height={79}
//                 alt='Arrow'
//             />
//         </div>
//         <div className={styles.div2}>
//             <div className={styles.staffsnakediv2}>
//                 <Image 
//                     src='/humidvector.svg'
//                     alt='warning alert'
//                     width={24}
//                     height={24}
//                 />
//             </div>
//             <div>
//                 <p className={styles.ptext2}>Set humidity to 40%-60%</p>
//             </div>
//         </div>
//         <div className={styles.lumovedivs2}>
//             {/* <LuMoveDown className={styles.lumoves} /> */}
//             <Image 
//                 src='/automatearrow1.svg'
//                 width={23}
//                 height={79}
//                 alt='Arrow'
//             />
//         </div>
//         {/* <div className={styles.arrows}>
//         <div className={styles.lumoveleftdiv}>
//             <LuMoveDownLeft className={styles.lumoveleft} />
//         </div>
//         <div className={styles.lumovediv2}>
//             <LuMoveDown className={styles.lumove2} />
//         </div>
//         <div className={styles.lumoveright}>
//             <LuMoveDownRight className={styles.lumoveright} />
//         </div>
//         </div> */}
//         <div className={styles.div3mains}>
//         <div className={styles.div3}>
//             <div className={styles.staffsnakediv3}>
//                 <Image 
//                     src='/checkairsmall.svg'
//                     alt='Door mart'
//                     width={83}
//                     height={154}
//                     className={styles.doorimg}
//                 />
//             </div>
//             <div>
//                 <p className={styles.ptext3}>Sensors Check Air Quality levels</p>
//             </div>
//         </div>
//         <div className={styles.lumovedivs3}>
//             {/* <LuMoveDown className={styles.lumoves} /> */}
//             <Image 
//                 src='/automatearrow1.svg'
//                 width={23}
//                 height={79}
//                 alt='Arrow'
//             />
//         </div>
//         {/* <div className={styles.lumovediv3}>
//             <LuMoveDown className={styles.lumove3} />
//         </div> */}
//         <div className={styles.div4}>
//             <div className={styles.staffsnakediv4}>
//                 <Image 
//                     src='/phonesmalls.svg'
//                     alt='Mobile Device'
//                     width={184}
//                     height={185}
//                 />
//             </div>
//             <div>
//                 <p className={styles.ptext4}>User receives App notofications</p>
//             </div>
//         </div>
//         {/* <div className={styles.lumovediv4}>
//             <LuMoveDown className={styles.lumove4} />
//         </div> */}
//         <div className={styles.lumovedivs4}>
//             {/* <LuMoveDown className={styles.lumoves} /> */}
//             <Image 
//                 src='/automatearrow1.svg'
//                 width={23}
//                 height={79}
//                 alt='Arrow'
//             />
//         </div>
//         <div className={styles.div5}>
//             <div className={styles.staffsnakediv5}>
//                 <Image 
//                     src='/togglesmall.svg'
//                     alt='trigger alarm'
//                     width={90}
//                     height={144}
//                 />
//             </div>
//             <div>
//                 <p className={styles.ptext5}>User deactivate travellers mode.</p>
//             </div>
//         </div>
//         </div>
//         {/* <div className={styles.alertmain}>
//         <div className={styles.alert1}>
//         <div className={styles.alertdiv}>
//             <Image 
//                 src='/alerticonss.png' 
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
//                 src='/callflow.png' 
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
//         </div>  */}
//         </div>
//     </div>
//   );

return (
    // <div className=' w-[100%] h-[787px] flex flex-col items-center justify-center bg-gradient-to-r from-[#5C755E] to-[#78A67C]'>
    <div className=' overflow-hidden w-[100%] h-[787px] flex flex-col items-center justify-center bg-gradient-to-r from-[#5C755E] to-[#78A67C]'>
      <div className="mt-[80px]  w-[90%] items-center flex flex-col xl:flex-row  xl:gap-[175px] xl:w-[1196px] xl:h-[747px] xl:mt-[63px] xl:ml-[83px] xl:mr-[70px] xl:mb-[104px] ">
        <div className=" w-[95%] xl:w-[403px] xl:h-[747px] flex flex-col xl:mt-[20px]">
          <div className="xl:w-[403px] xl:h-[146px] xl:mt-[44px] flex flex-col">
            <div className='w-[350px]  xl:w-[403px] xl:h-[84px]'>
              <Image 
                src="/images/logoplustext.svg" 
                width={403} 
                height={84} 
                alt="Logo Plus Text" 
              />
            </div>
            <div className=" mt-[15px] text-[15px] xl:w-[403px] xl:h-[44px] font-roboto xl:text-[16px] font-medium text-white xl:mt-[18px]">
              Experience proactive, AI-driven control that adapts to your needs—even when you’re not around.
            </div>
          </div>
        </div>
        <div className=" mt-[-20px] xl:mt-[-280px] xl:w-[390px] xl:h-[506px] flex flex-col items-center">
          <div className='w-[330px]  xl:w-[434px] xl:h-[706px]'>
            <Image 
              src="/images/flow2.svg" 
              width={464} 
              height={706} 
              alt="Flow Diagram" 
            />
         </div>
        </div>
      </div>
    </div>
  );

};

export default FlowDiagram2;