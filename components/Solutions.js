import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Solutions = () => {
useEffect(() => {
	if (window.innerWidth > 479) {			
      var pinnedSection = gsap.utils.toArray('.pinned-element');			
      pinnedSection.forEach(function(pinElement) {
         var parentNode = pinElement.parentNode;
         var scrollingElement = parentNode.querySelector('.scrolling-element');
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
   <div className="content-row row_padding_bottom light-section" data-bgcolor="#fff">
                          
   <div className="pinned-section " >
       <div className={`   ${rel.left_txt_block} ${rel.bg_blue} ${rel.h_100vh} pinned-element left`} >
       <div className={`${rel.w_100} padding_left`}>
      <h3>
         <span>The one <br/>
         solution for <br/>
         Managing your</span> 
         Organization & 
         Employees.
      </h3>
      <p>
         HR Portal is a platform for managing, administering, 
         assessing, and accounting for all the operations 
         of the human resources.
      </p>
      <Link href="#" className={`${rel.but_01} ${rel.but_black} ${rel.mt_50}`}>Request a demo</Link>
   </div>
       </div>
       
       <div className={`${rel.righgt_scroll_block}  pinned-element scrolling-element right`}   >
       <ul className={`${rel.right_scroll_ul}`}>
   <li className={`${rel.bg_02}`}>
      <div className={`${rel.ser_img}`}>
         <Image
         className={`${rel.img_mx_fluid} ${rel.me_2}`}
         src="/images/sol-1.png"
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
   <li>
      <div className={`${rel.ser_img}`}>
         <Image
         className={`${rel.fit_img_max} ${rel.me_2}`}
         src="/images/sol-2.png"
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
   <li>
      <div className={`${rel.ser_img}`}>
         <Image
         className={`${rel.fit_img_max} ${rel.me_2}`}
         src="/images/sol-3.png"
         alt="e8"
         width={170}
         height={161}
         priority
         />
      </div>
      <h5>Leave Management</h5>
      <p>
      Managing employee vacation & 
absence requests doesn’t have to be 
time consuming.
      </p>
   </li>
   <li className={`${rel.bg_02}`}>
      <div className={`${rel.ser_img}`}>
         <Image
         className={`${rel.fit_img_max} ${rel.me_2}`}
         src="/images/sol-4.png"
         alt="e8"
         width={170}
         height={161}
         priority
         />
      </div>
      <h5>KPI  & Performance</h5>
      <p>
      KPIs provide clarity, direction, 
and a clear picture of how well we are 
doing.
      </p>
   </li>
   <li className={`${rel.bg_02}`}>
      <div className={`${rel.ser_img}`}>
         <Image
         className={`${rel.fit_img_max} ${rel.me_2}`}
         src="/images/sol-5.png"
         alt="e8"
         width={170}
         height={161}
         priority
         />
      </div>
      <h5>Attendance</h5>
      <p>
      Our software offers a streamlined, 
automated solution. From clock-ins to 
leave requests.
      </p>
   </li>
   <li  >
      <div className={`${rel.ser_img}`}>
         <Image
         className={`${rel.fit_img_max} ${rel.me_2}`}
         src="/images/sol-6.png"
         alt="e8"
         width={170}
         height={161}
         priority
         />
      </div>
      <h5>Training</h5>
      <p>
      We offers comprehensive training 
modules. Equip your team with the tools 

they need to excel.
      </p>
   </li>
   <li >
      <div className={`${rel.ser_img}`}>
         <Image
         className={`${rel.fit_img_max} ${rel.me_2}`}
         src="/images/sol-7.png"
         alt="e8"
         width={170}
         height={161}
         priority
         />
      </div>
      <h5>Employee Management</h5>
      <p>
      Manage employees seamlessly. 
From onboarding to performance reviews, 
our software does it all.
      </p>
   </li>
   <li className={`${rel.bg_02}`} >
      <div className={`${rel.ser_img}`}>
         <Image
         className={`${rel.fit_img_max} ${rel.me_2}`}
         src="/images/sol-8.png"
         alt="e8"
         width={170}
         height={161}
         priority
         />
      </div>
      <h5>Recruitment</h5>
      <p>
      Find the right talent, faster. Smarter hiring 
decisions, reduced time-to-fill. 
Transform your hiring process today
      </p>
   </li>
</ul>
      
       </div>
   </div>
   
</div>  
);
};
export default Solutions;