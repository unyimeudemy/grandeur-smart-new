import React from 'react'
import Image from 'next/image'
import styles from './Recommendation.module.css'
import drivercustomize from "/public/images/drivercustomize.svg"

import robotassistance from "/public/images/robotassistance.png"
import gsmart from "/public/images/gsmart.svg"


function Recommendation() {
  return (
    // <div className={styles.main}>
    <div className="w-[100%] h-[1300px] mt-[20px] xl:mt-0 xl:h-[406px] bg-gradient-to-l from-[#78A67C] to-[#5C755E] flex gap-[88px] items-center justify-center ">
        <div className=' mb-[-300px] xl:mb-0 h-full flex flex-col xl:flex-row items-center justify-center'>
            <div className={styles.mainrobot}>
            <div className={styles.robot1}>
                <div className={styles.robotassistancediv}>
                    <Image 
                        // src={robotassistance}
                        src={robotassistance}
                        alt='Robot Assistance'
                        width={19}
                        height={19}
                    />
                </div>
                <div className={styles.robotassistancediv2}>
                    <Image 
                        src={robotassistance}
                        alt='Robot Assistance'
                        width={19}
                        height={19}
                    />
                </div>
            </div>
            <div className={styles.gsmartdiv4}>
            <div className={styles.gsmartdiv3}>
            <div className={styles.gsmartdiv2}>
            <div className={styles.gsmartdiv}>
                <Image 
                    // src={gsmart}
                    src={gsmart}
                    alt='smart'
                    width={144}
                    height={92}
                    className={styles.gsmartimg}
                />
            </div>
            </div>
            </div>
            </div>
            <div className={styles.robot2}>
                <div className={styles.robotassistancediv3}>
                    <Image 
                        src={robotassistance}
                        alt='Robot Assistance'
                        width={19}
                        height={19}
                    />
                </div>
                <div className={styles.robotassistancediv4}>
                    <Image 
                        src={robotassistance}
                        alt='Robot Assistance'
                        width={19}
                        height={19}
                    />
                </div>
            </div>
            </div>
            <div>
                <div className={styles.hpdiv}>
                    <div className={styles.hdiv}>
                    <h1 className={styles.h1text}>Automated Recommendations</h1>
                    </div>
                    <div className={styles.pdiv}>
                    <p className={styles.ptext}> analyzes user habits and suggests
                        personalized flows like “Would you like to 
                        activate ‘Night Mode’ automatically at 9 PM?
                    </p>
                    </div>
                </div>
            </div>
            <div className={styles.mainrobot2}>
            <div className={styles.robot1}>
                <div className={styles.robotassistancediv}>
                    <Image 
                        src={robotassistance}
                        alt='Robot Assistance'
                        width={19}
                        height={19}
                    />
                </div>
                <div className={styles.robotassistancediv2}>
                    <Image 
                        src={robotassistance}
                        alt='Robot Assistance'
                        width={19}
                        height={19}
                    />
                </div>
            </div>
            <div className={styles.gsmartdiv4}>
            <div className={styles.gsmartdiv3}>
            <div className={styles.gsmartdiv2}>
            <div className={styles.gsmartdiv}>
                <Image 
                    src={gsmart}
                    alt='smart'
                    width={144}
                    height={92}
                    className={styles.gsmartimg}
                />
            </div>
            </div>
            </div>
            </div>
            <div className={styles.robot2}>
                <div className={styles.robotassistancediv3}>
                    <Image 
                        src={robotassistance}
                        alt='Robot Assistance'
                        width={19}
                        height={19}
                    />
                </div>
                <div className={styles.robotassistancediv4}>
                    <Image 
                        src={robotassistance}
                        alt='Robot Assistance'
                        width={19}
                        height={19}
                    />
                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Recommendation