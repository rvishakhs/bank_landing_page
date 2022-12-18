import React from 'react'
import {clients} from "../constants/index"
import styles from '../style'

function Client() {
  return (
    <section className={` ${styles.flexCenter} my-4 md:px-16 px-3 `}>
        <div className={`flex items-center flex-wrap w-full ${styles.flexCenter}`}>
            {clients.map((client) => (
                <div key={client.id} className={`${styles.flexCenter} flex-1  sm:min-w-[192px] min-w-[120px] m-5`}>
                    <img 
                        src={client.logo}
                        alt="logo"
                        className='w-[192px] h-[60px] object-contain hover:scale-105 '
                    />
                </div>
            ))}
        </div>
    </section>
  )
}

export default Client