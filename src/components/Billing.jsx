import React from 'react'
import styles, {layout} from '../style'
import {apple, bill, google} from '../assets'

function Billing() {
  return (
    <section className={`${layout.sectionReverse} px-3 md:px-16`}>
        <div className={`${layout.sectionImgReverse}`}>
            <img 
                src={bill}
                alt="billing"
                className='w-[100%] h-[100%] z-50 relative'
            />

            <div className='absolute -left-1/2 z-30 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
            <div className='absolute -left-1/2 z-0 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
        </div>
        <div className={`${layout.sectionInfo} flex-col space-y-4`}>
            <h2 className='font-poppins font-semibold md:text-[48px] text-[32px] leading-[52px] md:leading-[76px] text-white'>Easily control your billing & invoicing.</h2>
            <p className={`font-poppins ${styles.paragraph} max-w-[470px] font-normal text-[18px] leading-[28px]`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>    
            <div className='flex flex-row space-x-6 my-2'>
                <img 
                    src={apple}
                    alt="apple"
                    className='cursor-pointer w-[128px] h-[42px] object-contain'
                />
                <img 
                    src={google}
                    alt="google"
                    className='cursor-pointer w-[128px] h-[42px] object-contain'
                />
            </div>
        </div>
    </section>
  )
}

export default Billing