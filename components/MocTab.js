import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";

// Import Swiper styles
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';



import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const MocTab = () => {
useEffect(() => { 



    var tabs = document.querySelector('.tabs-buttons .swiper-wrapper');

    var tabButtons = new Swiper('.tabs-buttons', {
      slidesPerView: 'auto',
      freeMode: true,
      // scrollbar: '.swiper-scrollbar',
      mousewheelControl: true,
      onTap: function(swiper, event) {
        if ( event.target.classList.contains('swiper-slide') && !event.target.classList.contains('active-tab') ) {
          event.target.parentElement.querySelector('.active-tab').classList.remove('active-tab');
          event.target.classList.add('active-tab');
          tabContent.slideTo(swiper.clickedIndex);
        }
      }
    });
    
    var tabContent = new Swiper('.tabs-content', {
      slidesPerView: "auto",
      onSlideChangeStart: function(swiper, event) {
        tabs.children[swiper.previousIndex].classList.remove('active');
        tabs.children[swiper.activeIndex].classList.add('active');
      }
    });



}, []);
return (
<section  className={` ${rel.text_center} `}>
 

<div className={`${rel.container} `}>







<div className="swiper_container tabs_buttons">
  <div className="swiper-wrapper">
    <div className="swiper-slide active-tab">Tab 01</div>
    <div className="swiper-slide">Tab 02</div>
    <div className="swiper-slide">Tab 03</div>
    <div className="swiper-slide">Tab 04</div>
    <div className="swiper-slide">Tab 05</div>
  </div>
 </div>

<div className="swiper-container tabs-content">
  <div className="swiper-wrapper">
    <div className="swiper-slide"><h1>Slide 01</h1></div>
    <div className="swiper-slide"><h1>Slide 02</h1></div>
    <div className="swiper-slide"><h1>Slide 03</h1></div>
    <div className="swiper-slide"><h1>Slide 04</h1></div>
    <div className="swiper-slide"><h1>Slide 05</h1></div>
  </div>
</div>



</div>


</section>

);
};
export default MocTab;