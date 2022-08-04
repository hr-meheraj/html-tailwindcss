import React from 'react'
import { RiMenu3Line } from 'react-icons/ri'
import mainLogo from '../assets/main-logo.svg'
import { BsSearch } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai'

function Navbar() {
    return (
        <div class="navbar shadow-sm flex justify-between">
            <div class="md:flex-1">
                <div className='flex gap-3 items-center '>
                    <img src={mainLogo} className='h-[50px] w-[181px]' />
                    <span className=' ml-[30px] gap-3 text-[16px] text-[#9d9d9d] flex items-center'>
                        <span className='text-3xl mobile-menuLine'>
                            <RiMenu3Line />
                        </span>
                        <span className='hidden md:block'>
                            Προϊόντα
                        </span>
                    </span>
                </div>
            </div>
            <div class="flex-none gap-2">
                <div class="hidden md:block">
                    <input placeholder='ψάχνω για …' className='border-none search py-2  w-[420px] outline-none' />
                </div>
                <div class="z-100">
                    <ul class="menu-mobile z-100 absolute bottom-0 right-0 left-0 bg-white shadow-sm  sm:static flex lg:gap-3 md:gap-[20px] sm:gap-[25px] gap-[30px]  text-xl items-center">
                        <li>
                            <a><BsSearch /></a>
                        </li>
                        <li>
                            <a><AiOutlineHeart /></a>
                        </li>
                        <li>
                            <a><AiOutlineMessage /></a>
                        </li>
                        <li>
                            <a className='flex gap-2 items-center'><BiUserCircle /> <span className='hidden md:block'>Σύνδεση</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Navbar