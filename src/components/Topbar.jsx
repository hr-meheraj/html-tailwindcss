import React from 'react'
import { IoIosCall } from 'react-icons/io'
function Topbar() {
  return (
    <div className='text-white bg-[#009289] items-center flex justify-around sm:justify-between px-2 py-[5px]'>
        <div className='hidden md:block'>
                
        </div>
        <div className='flex items-center gap-3 text-[12px] items-center'>
            <span>Εταιρία </span>
            <span>Νέα</span>
            <span>Επικοινωνία</span>
            <span>Κατηγορίες</span>
              
        </div>
        <div>
            <span className='hidden md:flex justify-center items-center gap-2 text-[12px]'>
                <span>Χρειάζεστε βοήθεια? Καλέστε μας: 210 269 3600</span>
                <span className='h-5 w-8 text-white flex items-center'><IoIosCall/></span>
            </span>
            <span className='md:hidden'>
                <IoIosCall/>
            </span>
        </div>
    </div>
  )
}

export default Topbar