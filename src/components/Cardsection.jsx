import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

function Cardsection() {
  return (
    <section className={`${layout.section} px-3 md:px-16`}>
        <div className={`${layout.sectionInfo} flex-col space-y-3`}>
            <h2 className='font-poppins max-w-[550px] font-semibold md:text-[48px] text-[32px] leading-[52px] md:leading-[76px] text-white'>
                Find a better card deal in few easy steps.
            </h2>
            <p className={`font-poppins ${styles.paragraph} mb-6 max-w-[470px] font-normal text-[18px] leading-[30px]`}>
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <Button />
        </div>
        <div className={`${layout.sectionImg}`}>
            <img 
                src={card}
                alt="card"
                className='w-[100%] h-[100%] object-contain'
            />
        </div>

    </section>
  )
}

export default Cardsection