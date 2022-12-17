import React from 'react'
import { quotes } from '../assets'

function Feedback({id, content, name, title, img}) {
  return (
    <div className='flex space-y-10 justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
        <img 
            src={quotes}
            alt='quotes'
            className='w-[42px] h-[27px] object-contain'
        />
        <p className='text-white font-poppins font-normal text-[18px] leading-[32px]'>{content}</p>
        <div className='flex flex-row mt-4 items-center'>
            <img 
                src={img}
                alt="person"
                className='w-[48px] h-[48px] rounded-full'
            />
            <div className='flex flex-col ml-4'>
                <h2 className='font-poppins font-normal text-[20px] leading-[32px] text-white'>{name}</h2>
                <h2 className='font-poppins font-normal text-[16px] leading-[24px] text-white/50'>{title}</h2>
            </div>

        </div>
    </div>
  )
}

export default Feedback