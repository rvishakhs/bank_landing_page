import React from 'react'
import styles , { layout } from '../style'
import Button from './Button'

function Business() {
  return (
    <section id='features' className={`${layout.section} px-6 md:px-16 my-6 md:my-10`}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                You do the business, <br className='sm:block hidden' /> we’ll handle the money.
            </h2>
            <p className={`max-w-[470px] ${styles.paragraph} mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>   
            <Button styles="rounded-xl"/> 
        </div>
    </section>
  )
}

export default Business