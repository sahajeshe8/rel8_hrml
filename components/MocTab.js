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
  let btns = document.querySelectorAll('#btn')
  let tabs = document.querySelectorAll('[data-tab]')
  btns.forEach((btn, btnIndex,btnArr) => {
    btn.addEventListener('click', function() {
   
    
      tabs.forEach((tab, tabIndex) => {
        if (btnIndex === tabIndex) {
       
          if (!tab.classList.contains('hidden')) {
            return
          } else {
            tab.classList.remove('hidden')
            gsap.from(tab,{opacity:0,scale:0.95})
          }
        } 
        else {
          tab.classList.add('hidden')
       
        }
      })
      btnArr.forEach((b,bi)=>{
        if(bi===btnIndex){
         b.classList.add('bg-green-500')
        }else{
           b.classList.remove('bg-green-500')
        }
      })
    })
  })
  
}, []);
return (
<section  className={` ${rel.text_center}  ${rel.tab_section} `}>
 

<div className={`${rel.container} `}>

<div className='p-4'>

<div className={`${rel.title_52}`}>
<h3><span>Transform Your Organization</span><br/> 
With Our Feature-Packed Software.
      </h3>
      
   </div>





  <div className="max-w-5xl mx-auto  ">
    <div className="flex lg:justify-evenly flex-wrap gap-3 mb-5">
      <ul className={`${rel.tab_but_row}`}>
        <li id='btn' className=" transition-all  text-xl py-2 px-8 bg-white/25 flex justify-center items-center border rounded-full bg-green-500">Dashboard</li>
        <li id='btn' className=" transition-all text-xl py-2  px-8 bg-white/25 flex justify-center items-center border rounded-full">Payroll & Salary</li>
        <li id='btn' className=" transition-all text-xl py-2  px-8 bg-white/25 flex justify-center items-center border rounded-full">Leave & Attendance</li>
        <li id='btn' className=" transition-all text-xl py-2  px-8 bg-white/25 flex justify-center items-center border rounded-full">Performance KPI</li>
        <li id='btn' className=" transition-all text-xl py-2  px-8 bg-white/25 flex justify-center items-center border rounded-full">Training</li>
      </ul>
    </div>
    <div className="w-full overflow-hidden rounded-xl">
      <div data-tab  className={`${rel.tab_container} grid`}>
      <Image
      className={`${rel.fit_img_max}`}
      src="/images/dashboard-main21.png"
      alt="e8"
      width={1183}
      height={764}
      priority
      />
      </div>
      <div data-tab  className={`${rel.tab_container} hidden`}>
      <Image
      className={`${rel.fit_img_max}`}
      src="/images/dashboard-main21.png"
      alt="e8"
      width={1183}
      height={764}
      priority
      />
      </div>


      <div data-tab  className={`${rel.tab_container} hidden`}>
      <Image
      className={`${rel.fit_img_max}`}
      src="/images/dashboard-main21.png"
      alt="e8"
      width={1183}
      height={764}
      priority
      />
      </div>

      <div data-tab  className={`${rel.tab_container} hidden`}>
      <Image
      className={`${rel.fit_img_max}`}
      src="/images/dashboard-main21.png"
      alt="e8"
      width={1183}
      height={764}
      priority
      />
      </div>


      <div data-tab  className={`${rel.tab_container}   hidden`}>
      <Image
      className={`${rel.fit_img_max}`}
      src="/images/dashboard-main21.png"
      alt="e8"
      width={1183}
      height={764}
      priority
      />
      </div>
      
 
    </div>

  </div>


  <div  className={`${rel.w_100} ${rel.text_center} ${rel.tab_bot_txt}`}>
    <h5>Our Dashboard includes many widgets containing information&apos;s 
about the whole organization of yours. it includes quick view of leave & work updates,
Attendance overview,  Attendance Reports, Leaves and upcoming events.</h5>
  </div>

</div>


 
</div>


</section>

);
};
export default MocTab;