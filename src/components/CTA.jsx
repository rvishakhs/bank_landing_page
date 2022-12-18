import React from 'react'
import styles from '../style'
import Button from './Button'

function CTA() {
  return (
    <section className={`${styles.flexCenter} justify-between ${styles.marginY} ${styles.padding } md:mx-20 mx-2 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className='flex flex-col'>
            <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
            <p className={`${styles.paragraph} max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className={`${styles.flexCenter} `}>
            <Button />
        </div>
    </section>
  )
}

export default CTA