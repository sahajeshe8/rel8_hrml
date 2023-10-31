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
const Testimonial = () => {
useEffect(() => { 


      const targetElement = document.querySelectorAll(".padding_left");
      const sourceElements = document.querySelectorAll('.container');
      
      sourceElements.forEach(sourceElement => {
        const offsetLeft = sourceElement.offsetLeft;
      
        targetElement.forEach(target => {
          target.style.paddingLeft = offsetLeft + "px";
        });
      });






}, []);
return (
<section  style={{background: `url(../images/about_bg.jpg) no-repeat center top #E2D8FF`,  height: '100%',
}} className={`${rel.pt_100} ${rel.pb_100} ${rel.about_sec} ${rel.testimonial_block} ${rel.mb_100}`}>
<div className={`${rel.w_100} `}>
<div className={`${rel.container} ${rel.rel} container`}>
<div className={`${rel.title_52} ${rel.testi_title_block}`}>
   <h3>
      <span>What People Are Saying <br/></span>About Us
   </h3>
</div>
<div className={`${rel.swipper_nav_box} `}>
   <div className={`${rel.slider_nav} ${rel.icon_arrow_left} ${rel.prev} ${rel.trans} prev`}>
   <Image
      src="/images/arrow_left.png"
      alt="e8"
      width={66}
      height={66}
      priority
      />
</div>
<div className={`${rel.slider_nav} ${rel.icon_arrow_right} ${rel.next} ${rel.trans} next`}>
<Image
   src="/images/arrow-right.png"
   alt="e8"
   width={66}
   height={66}
   priority
   />
</div>
</div>
</div>
</div>
<div className={`${rel.about_slider_block} padding_left`}>
   <Swiper
   // install Swiper modules
   modules={[Navigation, Scrollbar]}
   spaceBetween={20}
   slidesPerView={1}
   breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }}
   loop={true}
   autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
   
   navigation={{ prevEl: '.prev', nextEl: '.next', clickable: true, }}
   // navigation
   // pagination={{ clickable: true }}
   // scrollbar={{ draggable: true }}
   onSwiper={(swiper) => console.log(swiper)}
   onSlideChange={() => console.log('slide change')}
   >
   <SwiperSlide className={`${rel.item}`}>
      <div className={`${rel.testi_title} `}>
         <div className={`${rel.testi_name} `}>
            <div className={`${rel.testi_user}`}>
               <Image
                  src="/images/user_1.png"
                  alt="e8"
                  width={64}
                  height={64}
                  priority
                  />
            </div>
            <div className={`${rel.testi_user_det}`}>
               <h5>Emre Bana</h5>
               <p>Director of Claims Experience</p>
            </div>
         </div>
         <div className={`${rel.testi_logo}`}>
            <Image
               src="/images/hisense-logo-4.png"
               alt="e8"
               width={122}
               height={52}
               priority
               />
         </div>
      </div>
      <div className={`${rel.testi_txt}`} style={{background: `url(../images/testi_bg.png) no-repeat 7% 18px`}}>
      <p>“Compared to our old provider, it&apos;s so much easier to
         manage our calls, messages, and team with their user-friendly 
         interface. Our HRMS was incredible and made onboarding and launching seamless – we&apos;re thrilled with the switch.”
      </p>
</div>
</SwiperSlide>
<SwiperSlide className={`${rel.item}`}>
   <div className={`${rel.testi_title} `}>
      <div className={`${rel.testi_name} `}>
         <div className={`${rel.testi_user}`}>
            <Image
               src="/images/user_2.png"
               alt="e8"
               width={64}
               height={64}
               priority
               />
         </div>
         <div className={`${rel.testi_user_det}`}>
            <h5>Jonas Perez</h5>
            <p>Managing Director</p>
         </div>
      </div>
      <div className={`${rel.testi_logo}`}>
         <Image
            src="/images/mb-21.png"
            alt="e8"
            width={149}
            height={17}
            priority
            />
      </div>
   </div>
   <div className={`${rel.testi_txt}`} style={{background: `url(../images/testi_bg.png) no-repeat 7% 18px`}}>
   <p>“Overall, a wonderful experience with this product. I don&apos;t really have any complaints, and have actually recommended Rel8 to a few friends.</p>
   </div>
</SwiperSlide>
<SwiperSlide className={`${rel.item}`}>
   <div className={`${rel.testi_title} `}>
      <div className={`${rel.testi_name} `}>
         <div className={`${rel.testi_user}`}>
            <Image
               src="/images/user_3.png"
               alt="e8"
               width={64}
               height={64}
               priority
               />
         </div>
         <div className={`${rel.testi_user_det}`}>
            <h5>Meharn Kalis</h5>
            <p>Managing Director DIF</p>
         </div>
      </div>
      <div className={`${rel.testi_logo}`}>
         <Image
            src="/images/mb-21.png"
            alt="e8"
            width={149}
            height={17}
            priority
            />
      </div>
   </div>
   <div className={`${rel.testi_txt}`} style={{background: `url(../images/testi_bg.png) no-repeat 7% 18px`}}>
   <p>“Overall, a wonderful experience with this product. I don&apos;t really have any complaints, and have actually recommended Rel8 to a few friends.
   </p>
   </div>
</SwiperSlide>
<SwiperSlide className={`${rel.item}`}>
   <div className={`${rel.testi_title} `}>
      <div className={`${rel.testi_name} `}>
         <div className={`${rel.testi_user}`}>
            <Image
               src="/images/user_1.png"
               alt="e8"
               width={64}
               height={64}
               priority
               />
         </div>
         <div className={`${rel.testi_user_det}`}>
            <h5>Emre Bana</h5>
            <p>Director of Claims Experience</p>
         </div>
      </div>
      <div className={`${rel.testi_logo}`}>
         <Image
            src="/images/hisense-logo-4.png"
            alt="e8"
            width={122}
            height={52}
            priority
            />
      </div>
   </div>
   <div className={`${rel.testi_txt}`} style={{background: `url(../images/testi_bg.png) no-repeat 7% 18px`}}>
   <p>“Compared to our old provider, it&apos;s so much easier to
      manage our calls, messages, and team with their user-friendly 
      interface. Our HRMS was incredible and made onboarding and launching seamless – we&apos;re thrilled with the switch.”
   </p>
   </div>
</SwiperSlide>
</Swiper>
</div>
</section>
);
};
export default Testimonial;