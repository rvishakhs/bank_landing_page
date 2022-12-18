import React from 'react'
import styles, {layout} from '../style'
import { feedback } from '../constants'
import Feedback from './Feedback'

function Testimonial() {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} md:px-16 px-3 flex-col relative`}>

        {/* <div className="absolute z-[0] w-[50%] h-[50%] -right-1/2 rounded-full blue__gradient bottom-40" /> */}
        
        <div className='flex md:flex-row flex-col justify-between w-full items-center sm:mb-16 mb-6 relative z-[1]'>
            <h2 className={`${styles.heading2}`}>What people are <br className='sm:block hidden' /> saying about us</h2>
            <div className='w-full md:mt-0 mt-6'>
                <p className={`${styles.paragraph} max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
        </div>
        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-50'>
            {feedback.map((feedback) =>(
                <Feedback key={feedback.id} {...feedback}/>
            ))}
        </div>
    </section>
  )
}

export default Testimonial