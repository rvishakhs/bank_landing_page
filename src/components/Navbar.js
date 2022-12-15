import React from 'react'
import {logo} from '../assets/logo.svg'
import {navLinks} from "../constants"


function Navbar() {
  return (
    <nav className='w-full flex py-6 justify-between items-center'>
        <img src={logo} alt="hoobank" className='w-[124px] h-[32px]'/>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={'font-sans'}
                >
                    <a href={`#${nav.id}`}> 
                        {nav.title}
                    </a>
                </li>
            )  )}
        </ul>
    </nav>
  )
}

export default Navbar