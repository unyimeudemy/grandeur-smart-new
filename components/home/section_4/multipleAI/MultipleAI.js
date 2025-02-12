import React from 'react'
import styles from './MultipleAI.module.css'
import MyCarousel1 from '../MyCarousel1'

function MultipleAI() {
  return (
    <div class="mb-[100px] p-[100px_50px] bg-gradient-to-r from-[#5C755E] to-[#78A67C] w-[100%]">

        <div className={styles.hdiv}>
            <h1 className={styles.htext}>Multiple Integrations Suggested By AI</h1>
        </div>
        <div className={styles.pdiv}>
            <p className={styles.ptext}>
                Discover the power of Smart AI, your intelligent companion
                designed to streamline processes, enhance productivity, and 
                enable innovative solutions across platforms. With a focus 
                on seamless integration, Smart AI connects with your favorite 
                tools to create a unified experience tailored to your needs.
            </p>
        </div>
        <div>
            <MyCarousel1 />
        </div>
    </div>
  )
}

export default MultipleAI