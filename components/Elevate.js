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
const Elevate = () => {
useEffect(() => { 




	if (window.innerWidth > 479) {			
      var pinnedSection = gsap.utils.toArray('.pinned-element-2');			
      pinnedSection.forEach(function(pinElement) {
         var parentNode = pinElement.parentNode;
         var scrollingElement = parentNode.querySelector('.scrolling-element-2');
         var pinnedScene = ScrollTrigger.create({
            trigger: pinElement,
            //start: "top top-=-50px",
            start: function() {
               const startPin = (window.innerHeight - pinElement.offsetHeight)/2;
               return "top +=" + startPin;
              },
            end: () => `+=${scrollingElement.offsetHeight - pinElement.offsetHeight}`,
            pin: pinElement,
         });
      });
   }





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
   <section className={`${rel.rel} ${rel.bg_gray} ${rel.z_100} content-row row_padding_bottom light-section padding_left`}  data-bgcolor="#fff">

         <div className={`${rel.container}`}>                    
   <div className="pinned-section" >
       <div className={`${rel.h_100vh} ${rel.left_txt_block} ${rel.pl_0} ${rel.elevate_left_block} pinned-element left `} >
       <div className={` ${rel.text_dark} ${rel.pe_0} ${rel.left_txt_block}`}>
<div className={`${rel.w_100}`}>
   <h3>
      <span>Elevate Your<br/>
      HR Experience With</span> 
      Rel8 AI
   </h3>
   <h4>
      Discover the Future of HR<br/>
      with Element8&apos;s AI-Powered Solutions 
   </h4>
   <p>
      At Element8, we&apos;re not just keeping up with the times; 
      we&apos;re shaping the future of HR. Our innovative software 
      leverages the latest in AI technology to revolutionize 
      how you manage your workforce.
   </p>
   <Link href="#" className={`${rel.but_01} ${rel.but_yellow } ${rel.mt_50}`}>Get Started</Link>
</div>
</div>
       </div>
       
       <div className={`${rel.red} ${rel.elevate_right_block} pinned-element scrolling-element right`}   >
       <ul className={`${rel.right_scroll_ul} ${rel.right_elevate_ul}`}>
   <li className={`${rel.w_100} ${rel.elevate}`}>
   <div className={`${rel.ser_img}`}>
      <Image
      className={`${rel.fit_img_max} ${rel.me_2}`}
      src="/images/img-1-1@2x.png"
      alt="e8"
      width={170}
      height={161}
      priority
      />
   </div>
   <h5>Payroll & Salary</h5>
   <p>
      Streamline and centralize 
      payroll operations, providing the tools 
      for quick and easy payments.
   </p>
   </li>
   <li className={`${rel.w_100} ${rel.elevate}`}>
   <div className={`${rel.ser_img}`}>
      <Image
      className={`${rel.fit_img_max} ${rel.me_2}`}
      src="/images/img-2-1@2x.png"
      alt="e8"
      width={170}
      height={161}
      priority
      />
   </div>
   <h5>Employee Time Clock</h5>
   <p>
      Track and manage employee work 
      hours on jobs, projects.
   </p>
   </li>
   <li className={`${rel.w_100} ${rel.elevate}`}>
   <div className={`${rel.ser_img}`}>
      <Image
      className={`${rel.fit_img_max} ${rel.me_2}`}
      src="/images/img-2-1@2x.png"
      alt="e8"
      width={170}
      height={161}
      priority
      />
   </div>
   <h5>Employee Time Clock</h5>
   <p>
      Track and manage employee work 
      hours on jobs, projects.
   </p>
   </li>
   <li className={`${rel.w_100} ${rel.elevate}`}>
   <div className={`${rel.ser_img}`}>
      <Image
      className={`${rel.fit_img_max} ${rel.me_2}`}
      src="/images/img-2-1@2x.png"
      alt="e8"
      width={170}
      height={161}
      priority
      />
   </div>
   <h5>Employee Time Clock</h5>
   <p>
      Track and manage employee work 
      hours on jobs, projects.
   </p>
   </li>

   <li className={`${rel.w_100} ${rel.elevate}`}>
   <div className={`${rel.ser_img}`}>
      <Image
      className={`${rel.fit_img_max} ${rel.me_2}`}
      src="/images/img-2-1@2x.png"
      alt="e8"
      width={170}
      height={161}
      priority
      />
   </div>
   <h5>Employee Time Clock</h5>
   <p>
      Track and manage employee work 
      hours on jobs, projects.
   </p>
   </li>

   <li className={`${rel.w_100} ${rel.elevate}`}>
   <div className={`${rel.ser_img}`}>
      <Image
      className={`${rel.fit_img_max} ${rel.me_2}`}
      src="/images/img-2-1@2x.png"
      alt="e8"
      width={170}
      height={161}
      priority
      />
   </div>
   <h5>Employee Time Clock</h5>
   <p>
      Track and manage employee work 
      hours on jobs, projects.
   </p>
   </li>
</ul>
       </div>
   </div>
   </div>
   
</section>
);
};
export default Elevate;