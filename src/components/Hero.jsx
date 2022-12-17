import React from 'react'
import styles from '../style'
import {discount} from '../assets'
import Getstarted from './Getstarted'

function Hero() {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className={`flex flex-row rounded-[10px] py-[6px] px-4 bg-discount-gradient mb-2 `}>
                <img 
                    src={discount}
                    alt="discount"
                    className={`w-[32px] h-[32px]`}
                />
                <p className={`${styles.paragraph} ml-1`}>
                    <span className='text-white'>20% </span> DISCOUNT FOR {" "}
                    
                    <span className='text-white'>1 MONTH</span> ACCOUNT
                    
                </p>
            </div>
            <div className='flex flex-row w-full items-center '>
                <h1 className='font-poppins text-white ss:text-[72px] font-semibold text-[52px] leading-[75px] ss:leading-[100px]'>
                    The Next <br />
                    <span className='text-gradient'>Generation</span> {" "} <br />
                    Payment Method
                </h1>
                <div className='ss:flex hidden md:-mr-4 absolute md:-mt-1'>
                    <Getstarted />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero