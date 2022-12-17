import React, { Fragment, useState } from 'react'
import {logo, close, menu}  from '../assets'
import { Menu } from '@headlessui/react'

import {navLinks} from "../constants"


function Navbar() {


    const [toggle, setToggle] = useState(true)
  return (
    <nav className='w-full flex py-6 justify-between items-center'>
        <img src={logo} alt="hoobank" className='w-[124px] cursor-pointer h-[32px]'/>
            <div>
                <ul className='list-none sm:flex hidden justify-end gap-7 items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={'font-sans text-white  font-medium text-lg'}
                        >
                            <a href={`#${nav.id}`}> 
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul> 
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <Menu >
                        <Menu.Button className="">
                            <img 
                                src={toggle ? menu : close} 
                                alt="menu" 
                                className='w-6 h-6 flex md:hidden cursor-pointer'
                                onClick={() => setToggle((prev) => !prev)}
                            />
                        </Menu.Button>
                        <div
                            className={`${toggle ? "hidden" : "flex" } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                        >

                                <Menu.Items className="flex flex-col md:hidden justify-end gap-7 items-center ">
                                    {navLinks.map((nav) => (
                                    /* Use the `active` state to conditionally style the active item. */
                                    <Menu.Item className="font-sans text-white font-medium text-lg" key={nav.id} as={Fragment}>
                                        {({ active }) => (
                                        <a
                                            href={nav.id}
                                            className={`${
                                            active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                            }`}
                                        >
                                            {nav.title}
                                        </a>
                                        )}
                                    </Menu.Item>
                                    ))}
                            </Menu.Items>
                        </div>
                    </Menu>
                </div>






                {/* <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img 
                        src={toggle ? menu : close} 
                        alt="menu" 
                        className='w-6 h-6 flex md:hidden cursor-pointer'
                        onClick={() => setToggle((prev) => !prev)}
                    />

                    <div
                        className={`${toggle ? "hidden" : "flex" } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                    >
                        <ul className='list-none flex flex-col md:hidden justify-end gap-7 items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={'font-sans text-white font-medium text-lg'}
                        >
                            <a href={`#${nav.id}`}> 
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul> 

                    </div>
                </div>         */}
            </div>

       

                    
    </nav>
  )
}

export default Navbar