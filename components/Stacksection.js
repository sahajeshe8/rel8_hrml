import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Stacksection = () => {
useEffect(() => {
         const cards = gsap.utils.toArray(".card");
         const spacer = 0;
         cards.forEach((card, index) => {
            ScrollTrigger.create({
            trigger: card,
            start: `top-=${index * spacer} top+=0px`,
            endTrigger: '.pin-panel',
            end: `bottom top+=${(cards.length * spacer)}`,
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
            });
         });
}, []);
return (
<section className={`${rel.rel} ${rel.z_50}`}>
<div className={`${rel.container_1400} ${rel.rel}`}>
<div className="pin-panel">
   <div className="cards">
      <div className={`${rel.card_img} card video-home`} >
         <div className={`${rel.card_top_padding1}`}>
            <div className={`${rel.card_block} ${rel.card_01} ${rel.d_flex}`}>
            <div className={`${rel.card_left_block}`}>
               <div className={`${rel.w_100} ${rel.title_52} ${rel.mb_2}`}>
               <h3> 
                  <span>Appreciate Your </span>
                  Employees On Their
                  Achievements.
               </h3>
               <p>Award employees efforts with badges 
                  as a testament of achievements Encourage employees to be in sprint.
               </p>
            </div>
         </div>
         <div className={`${rel.card_right_block}`}>
            <Image
               src="/images/carg-img-1.jpg"
               className={`${rel.img_mx_fluid}`}
               alt="e8"
               width={809}
               height={660}
               priority
               />
         </div>
         </div>
   </div>
</div>
<div className={`${rel.card_img} card video-home`} >
         <div className={`${rel.card_top_padding2}`}>
            <div className={`${rel.card_block} ${rel.card_02} ${rel.d_flex}`}>
            <div className={`${rel.card_left_block}`}>
               <div className={`${rel.w_100} ${rel.title_52} ${rel.mb_2}`}>
               <h3> 
               <span>An Accurate</span>
               Employees Time
Tracking.
               </h3>
               <p>Our accurate time tracking system ensures that every moment counts, 
contributing to a more productive and accountable workforce.
               </p>
            </div>
         </div>
         <div className={`${rel.card_right_block}`}>
            <Image
               src="/images/carg-img-2.png"
               className={`${rel.img_mx_fluid}`}
               alt="e8"
               width={611}
               height={514}
               priority
               />
         </div>
         </div>
   </div>
</div>
<div className={`${rel.card_img} card video-home`} >
         <div className={`${rel.card_top_padding3}`}>
            <div className={`${rel.card_block} ${rel.card_03} ${rel.d_flex}`}>
            <div className={`${rel.card_left_block}`}>
               <div className={`${rel.w_100} ${rel.title_52} ${rel.mb_2}`}>
               <h3> 
                  <span>Celebrate Employees</span>
                  Employees On Their
                  Achievements.
               </h3>
               <p>Join us in creating a workplace where every milestone is valued and every 
achievement is celebrated. With our employee-centric software, 
it&apos;s easy to spread the joy!
               </p>
            </div>
         </div>
         <div className={`${rel.card_right_block}`}>
            <Image
               src="/images/carg-img-3.png"
               alt="e8"
               className={`${rel.img_mx_fluid}`}
               width={499}
               height={352}
               priority
               />
         </div>
         </div>
   </div>
</div>
</div>
</div>
</div>
</section>
);
};
export default Stacksection;