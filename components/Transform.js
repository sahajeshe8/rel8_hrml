import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { gsap } from "gsap";
// Import Swiper styles
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Transform = () => {
useEffect(() => { 
}, []);
return (
<section className={` ${rel.pb_100} ${rel.pt_50}`}>
<div className={`${rel.container} `}>
   <div className={`${rel.pt_100} ${rel.w_100} ${rel.d_flex} ${rel.two_col} ${rel.row_reverce}` }>
   <div className={`${rel.img_block_01}`}>
      <Swiper
      spaceBetween={28}
      loop={true}
      modules={[Autoplay]}
      slidesPerView={1}
      //  pagination={true}
      pagination={{ clickable: true }}
      autoplay={{
      delay: 2500,
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide className={`${rel.item} ${rel.border_radius}`}>
      <Image
      className={`${rel.fit_img_max} ${rel.me_2}`}
      src="/images/slide-img_01.jpg"
      alt="e8"
      width={626}
      height={626}
      priority
      />
      </SwiperSlide>
      <SwiperSlide className={`${rel.item} ${rel.border_radius}`}>
      <Image
      className={`${rel.fit_img_max} ${rel.me_2}`}
      src="/images/slide-img_01.jpg"
      alt="e8"
      width={626}
      height={626}
      priority
      />
      </SwiperSlide>
      <SwiperSlide className={`${rel.item} ${rel.border_radius}`}>
      <Image
      className={`${rel.fit_img_max} ${rel.me_2}`}
      src="/images/slide-img_01.jpg"
      alt="e8"
      width={626}
      height={626}
      priority
      />
      </SwiperSlide>
      </Swiper>
   </div>
   <div className={`${rel.txt_block_01}  ${rel.flex_center}`}>
   <div className={`${rel.w_100} ${rel.text_dark}  ${rel.text_yellow} ${rel.pe_0} ${rel.left_txt_block}`}>
   <div className={`${rel.w_100}`}>
      <div className={`${rel.w_100} ${rel.mb_2}`}>
      <h3>
         <span>Transform Your</span>  
         Organization
      </h3>
   </div>
   <p>
      HR Portal is a platform for managing, administering, 
      assessing, and accounting for all the operations 
      of the human resources.
   </p>
</div>
</div>
</div>
</div>
<div className={`${rel.pt_100} ${rel.w_100} ${rel.d_flex} ${rel.two_col}`}>
<div className={`${rel.img_block_01}`}>
   <Swiper
   spaceBetween={28}
   loop={true}
   modules={[Autoplay]}
   slidesPerView={1}
   //  pagination={true}
   pagination={{ clickable: true }}
   autoplay={{
   delay: 2500,
   }}
   onSlideChange={() => console.log('slide change')}
   onSwiper={(swiper) => console.log(swiper)}
   >
   <SwiperSlide className={`${rel.item} ${rel.border_radius}`}>
   <Image
   className={`${rel.fit_img_max} ${rel.me_2}`}
   src="/images/slide-img-02.jpg"
   alt="e8"
   width={626}
   height={626}
   priority
   />
   </SwiperSlide>
   <SwiperSlide className={`${rel.item} ${rel.border_radius}`}>
   <Image
   className={`${rel.fit_img_max} ${rel.me_2}`}
   src="/images/slide-img-02.jpg"
   alt="e8"
   width={626}
   height={626}
   priority
   />
   </SwiperSlide>
   <SwiperSlide className={`${rel.item} ${rel.border_radius}`}>
   <Image
   className={`${rel.fit_img_max} ${rel.me_2}`}
   src="/images/slide-img-02.jpg"
   alt="e8"
   width={626}
   height={626}
   priority
   />
   </SwiperSlide>
   </Swiper>
</div>
<div className={`${rel.txt_block_01}   ${rel.flex_center}`}>
<div className={`${rel.w_100} ${rel.text_dark}  ${rel.text_yellow} ${rel.pe_0} ${rel.left_txt_block}`}>
<div className={`${rel.w_100}`}>
   <div className={`${rel.w_100} ${rel.mb_2}`}>
   <h3>
      <span>Foster a Positive</span>  
      Organizational 
      Culture
   </h3>
</div>
<p>
   HR Portal is a platform for managing, administering, 
   assessing, and accounting for all the operations 
   of the human resources.
</p>
<Link href="#" className={`${rel.but_01} ${rel.but_black} ${rel.mt_50}`}>Request a demo</Link>
</div>
</div>
</div>
</div>
</div>
</section>
);
};
export default Transform;