import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SliderFeatures() {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slider-one p-4'>
                        <div>
                            <h2 className='text-[24px] text-[#FFFFFF]'> Galesyn®</h2>
                            <p className='text-[32px] mt-3 text-[#FFFFFF] w-4/12'>Γνωρίστε τη νέα σειρά δερμοκαλλυντικών προϊόντων
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slider-one p-4'>
                        <div>
                            <h2 className='text-[24px] text-[#FFFFFF]'> Galesyn®</h2>
                            <p className='text-[32px] mt-3 text-[#FFFFFF] w-4/12'>Γνωρίστε τη νέα σειρά δερμοκαλλυντικών προϊόντων
                            </p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}
