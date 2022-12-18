import React from 'react'
import { logo } from '../assets'
import styles from '../style'
import {footerLinks, socialMedia} from '../constants'

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} flex-col md:px-16 px-4 `}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className='flex-[1] flex-col  justify-start space-y-2 mr-10'>
                <img 
                    src={logo}
                    alt="logo"
                    className="w-[266px] h-[72px] object-contain "
                />
                <p className={`${styles.paragraph} max-w-[350px]`}>A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className={`flex-[1.5] flex w-full flex-row justify-between flex-wrap md:mt-0 mt-10  `}>
                {footerLinks.map((footerlink) => (
                    <div key={footerlink.title} className="flex flex-col space-y-3 text-dimWhite">
                        <h2 className={`font-poppins font-medium text-[18px] leading-[27px] text-white`}>{footerlink.title}</h2>
                        {footerlink.links.map((link) => (
                            <li className='list-none cursor-pointer hover:text-blue-300'>{link.name}</li>
                        ))}
                    </div>
                )) }
            </div>
        </div>
        <div className='flex md:flex-row justify-between'>
            <p className='text-white flex items-center'>Copyright © 2021 HooBank. All Rights Reserved.</p>
                {socialMedia.map((social) => (
                    <div id={social.id} className='flex flex-row  space-x-3'>
                        <img 
                            src={social.icon}
                            alt={social.id}
                            className="w-[21px] h-[21px]" 
                        />
                    </div>
                ))}
        </div>
    </section>
  )
}

export default Footer