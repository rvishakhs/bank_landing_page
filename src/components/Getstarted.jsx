import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

function Getstarted() {
  return (
    <div className={`${styles.flexCenter} h-[140px] w-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px]`}>
        <div className='bg-black w-[100%] h-[100%] rounded-full flex items-center justify-center flex-col'>
            <div className={`${styles.flexStart} flex-row mr-3`}>
                <p className='font-poppins font-medium leading-[23px] text-[18px]'>
                    <span className='text-gradient'>Get</span>
                </p>
                <img 
                    src={arrowUp}
                    alt="arrowup"
                    className='h-[23px] w-[23px] flex items-center object-contain'
                />
            </div>
                <p className='font-poppins font-medium leading-[23px] text-[18px]'>
                    <span className='text-gradient'>Started</span>
                </p>
        </div>
    </div>
  )
}

export default Getstarted