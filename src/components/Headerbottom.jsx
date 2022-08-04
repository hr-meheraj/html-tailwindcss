import React from 'react'
// import features from '../assets/header-bottom-large.png'
import galesyn from '../assets/galesyn_products.png'
function Headerbottom() {
    return (
        <div className='gap-[10px] grid grid-cols-1 md:grid-cols-12'>
            <div className='md:col-span-5 features flex flex-col items-end p-4'>
                <span className='text-white text-[24px]'>Sales</span><br/>
                <p className='text-[28px] text-white text-right'>
                Γνωρίστε τη νέα σειρά δερμοκαλλυντικών προϊόντων Galesyn®
                </p>
            </div>
            <div className='grid gap-2 grid-cols-2 md:col-span-7 hidden md:grid'>
                
               <div className='bg-[#E0E00D]'> 
                   <div className='flex text-black font-semibold flex-col gap-2 p-4'>
                    <h2 className=' text-[24px]'>New Products</h2>
                    <p className='text-[28px]'>Ενυδατικό Γαλάκτωμα με Εντομοαπωθητική Δράση</p>
                   </div>
                   <div className='flex flex justify-end p-4 h-[100%]'>
                        <img src={galesyn} className='w-full h-[262px] w-[210px]'/>
                   </div>
                </div>

                <div className='bg-[#009289]'>
                    <p className='text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[40px] lg:p-6 p-2 text-white mr-4'>
                        <span className=' text-[40px] md:text-[60px] lg:text-[80px] mt-[20px]  font-bold ml-2'>30</span>
                        <span className='font-bold' >χρόνια</span> <br />
                        δίπλα στον Έλληνα φαρμακοποιό και επαγγελματία υγείας
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Headerbottom