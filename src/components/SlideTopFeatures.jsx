import React from 'react';
import { AiOutlineRight } from 'react-icons/ai'
const SlideTopFeatures = () => {
    return (
        <div className='flex max-w-[1200px] mx-auto w-[95%] justify-between px-4 py-2 mt-[40px] text-xl font-bold'>
            <p>Νέα Προϊόντα</p>
            <span className='lg:hidden'><AiOutlineRight/></span>
        </div>
    );
}

export default SlideTopFeatures;
