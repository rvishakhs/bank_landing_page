import React from 'react'

function Feature({id, icon, title, content, index}) {
  return (
    <div className={`flex flex-row items-center p-6 rounded-[20px] mb-6 feature-card`}>
        <div className='flex'>
            <div className='flex w-[64px]  h-[64px] rounded-full bg-dimBlue  items-center space-x- justify-center'>
                <img 
                    src={icon} 
                    alt="icon"
                    className='w-[50%] h-[50%] object-contain'
                />
            </div>
        </div>
        <div className='flex flex-col mx-2 space-y-2'>
            <h4 className='text-white font-poppins font-semibold text-lg leading-[23px] uppercase'>{title}</h4>
            <p className='text-dimWhite font-poppins font-normal text-[16px] leading-[24px]'>{content}</p>
        </div>
    </div>
  )
}

export default Feature