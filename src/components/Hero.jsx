import React from 'react'
import styles from '../style'
import {discount, robot} from '../assets'
import Getstarted from './Getstarted'

function Hero() {
  return (
    <section id='home' className={`flex md:flex-row flex-col  ${styles.paddingX}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-3 `}>
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
                </h1>
                <div className='ss:flex hidden md:mr-4 mr-0 ml-10'>
                    <Getstarted />
                </div>
            </div>
            <h1 className='font-poppins text-white ss:text-[64px] font-semibold text-[52px] leading-[75px] ss:leading-[100px]'>
                    Payment Method 
            </h1>
            <p className={`${styles.paragraph} max-w-[500px] mt-5 `}>
                Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                We examine annual percentage rates, annual fees.
            </p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} relative -mb-10 md:-mb-0`}>
            <img 
                src={robot}
                alt="robot"
                className='w-[669px] h-[669px] object-contain z-50 relative'
            />

            <div className='absolute z-0 w-[40%] h-[35%] top-0 pink__gradient'/>
            <div className='absolute z-10 w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
            <div className='absolute z-0 w-[50%] h-[55%] right-20 bottom-20 blue__gradient'/>

        </div>
    </section>
  )
}

export default Hero