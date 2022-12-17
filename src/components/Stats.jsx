import React from 'react'
import { stats } from '../constants'
import styles from '../style'

function Stats() {
  return (
    <section className={`${styles.flexCenter} px-6 md:px-16 justify-between flex-row flex-wrap sm:my-20 my-6`}>
            {stats.map((stat) => (
                <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
                    <h4 className='text-white font-poppins text-[40px] font-semibold leading-7 mr-3'>{stat.value}{" "}</h4>  
                    <p className={`text-gradient font-poppins text-[20px] font-normal`}>{stat.title}</p>  
                </div>
            ))}
    </section>
  )
}

export default Stats