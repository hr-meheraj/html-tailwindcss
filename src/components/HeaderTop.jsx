import React from 'react'
import ship from '../assets/ship.png'
import kidCare from '../assets/kidsCare.png'
function HeaderTop() {
  return (
    <div className='gap-[5px]  grid-cols-1 md:grid-cols-2 hidden md:grid'>
        <div className='grid gap-2 grid-cols-2'>
            <div className='relative'>
                <img className='w-full lg:h-[416px] h-[200px]' src={kidCare}/>
                <div className='bg-[#dd1b1ec4] absolute top-0 right-0 left-0 bottom-[20%] lg:bottom-[50%]'>
                        <div className='flex justify-end p-2 mt-[20px]'>
                            <span className='text-white text-[28px]'>Παιδικά & Βρεφικά!</span>
                        </div>
                        <span className='flex justify-end text-[24px] uppercase mt-[20px] text-white  p-3'>KIDS CARE!</span>
                </div>
            </div>
            <div className='bg-[#009289]'>
                <p className='text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[40px] lg:p-6 p-2 text-white mr-4'>
                <span className=' text-[40px] md:text-[60px] lg:text-[80px] mt-[20px]  font-bold ml-2'>30</span>
                <span className='font-bold' >χρόνια</span> <br/>
                δίπλα στον Έλληνα φαρμακοποιό και επαγγελματία υγείας
                </p>
            </div>
        </div>
        <div>
            <img className='w-full lg:h-[416px] h-[200px]' src={ship}/>
        </div>
    </div>
  )
}

export default HeaderTop