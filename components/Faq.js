import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Faq = () => {
useEffect(() => {
const accSingleTriggers = document.querySelectorAll('.js_acc_single_trigger');
accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));
function toggleAccordion() {
const items = document.querySelectorAll('.js_acc_item');
const thisItem = this.parentNode;
items.forEach(item => {
if (thisItem == item) {
thisItem.classList.toggle('is_open');
return;
}
item.classList.remove('is_open');
});
} 
}, []);
return (
<section className={` ${rel.pb_100}`}>
<div className={`${rel.container} ${rel.rel} `}>
<div className={`${rel.w_100}   ${rel.d_flex}`}>
<div className={`${rel.faq_left}`}>
   <div className={`${rel.title_52} ${rel.mb_20}`}>
   <h3>
      <span>Frequently </span><br/>Asked Questions
   </h3>
</div>
<p>Quick answers to questions you may have.<br/> 
   Can’t find answer to your questions ?
</p>
<Link href="#" className={`${rel.but_01} ${rel.mt_30} ${rel.but_yellow }`}>Contact Us</Link>      </div>
<div className={`${rel.faq_right}`}>
   <div className={`${rel.accordion_single} accordion_single js_acc_single js_acc_single`} >
      <div className={`${rel.accordion_single_item}   accordion_single_item js_acc_item`} >
         <h2 className={`${rel.accordion_single_title} ${rel.js_acc_single_trigger} accordion_single_title js_acc_single_trigger`}>How does the software help increase productivity? 
         <span className={`${rel.acc_icn}`}>
            <Image
               className="plus_icn"
               src="/images/plus_icn.svg"
               alt="e8"
               width={24}
               height={24}
               priority
               />
            <Image
               src="/images/minus_icn.svg"
               className="minus_icn"
               alt="e8"
               width={24}
               height={24}
               priority
               />
         </span>
         </h2>
         <div className={`${rel.accordion_single_content} accordion_single_content`}>
            <p>Yes, the software provides reporting and analytics capabilities to measure 
               the effectiveness of the employees and identify areas for improvement.
            </p>
         </div>
      </div>
      <div className={`${rel.accordion_single_item}   accordion_single_item js_acc_item`} >
         <h2 className={`${rel.accordion_single_title} ${rel.js_acc_single_trigger} accordion_single_title js_acc_single_trigger`}>How can i use this software for my company? 
         <span className={`${rel.acc_icn}`}>
            <Image
               className="plus_icn"
               src="/images/plus_icn.svg"
               alt="e8"
               width={24}
               height={24}
               priority
               />
            <Image
               src="/images/minus_icn.svg"
               className="minus_icn"
               alt="e8"
               width={24}
               height={24}
               priority
               />
         </span>
         </h2>
         <div className={`${rel.accordion_single_content} accordion_single_content`}>
            <p>Yes, the software provides reporting and analytics capabilities to measure 
               the effectiveness of the employees and identify areas for improvement.
            </p>
         </div>
      </div>
      <div className={`${rel.accordion_single_item}   accordion_single_item js_acc_item`} >
         <h2 className={`${rel.accordion_single_title} ${rel.js_acc_single_trigger} accordion_single_title js_acc_single_trigger`}>Is the software capable of managing attendance & leaves? 
         <span className={`${rel.acc_icn}`}>
            <Image
               className="plus_icn"
               src="/images/plus_icn.svg"
               alt="e8"
               width={24}
               height={24}
               priority
               />
            <Image
               src="/images/minus_icn.svg"
               className="minus_icn"
               alt="e8"
               width={24}
               height={24}
               priority
               />
         </span>
         </h2>
         <div className={`${rel.accordion_single_content} accordion_single_content`}>
            <p>Yes, the software provides reporting and analytics capabilities to measure 
               the effectiveness of the employees and identify areas for improvement.
            </p>
         </div>
      </div>
      <div className={`${rel.accordion_single_item}   accordion_single_item js_acc_item`} >
         <h2 className={`${rel.accordion_single_title} ${rel.js_acc_single_trigger} accordion_single_title js_acc_single_trigger`}>Can we generate reports & analytics on performance? 
         <span className={`${rel.acc_icn}`}>
            <Image
               className="plus_icn"
               src="/images/plus_icn.svg"
               alt="e8"
               width={24}
               height={24}
               priority
               />
            <Image
               src="/images/minus_icn.svg"
               className="minus_icn"
               alt="e8"
               width={24}
               height={24}
               priority
               />
         </span>
         </h2>
         <div className={`${rel.accordion_single_content} accordion_single_content`}>
            <p>Yes, the software provides reporting and analytics capabilities to measure 
               the effectiveness of the employees and identify areas for improvement.
            </p>
         </div>
      </div>
      <div className={`${rel.accordion_single_item}   accordion_single_item js_acc_item`} >
         <h2 className={`${rel.accordion_single_title} ${rel.js_acc_single_trigger} accordion_single_title js_acc_single_trigger`}>How does the community works on this software? 
         <span className={`${rel.acc_icn}`}>
            <Image
               className="plus_icn"
               src="/images/plus_icn.svg"
               alt="e8"
               width={24}
               height={24}
               priority
               />
            <Image
               src="/images/minus_icn.svg"
               className="minus_icn"
               alt="e8"
               width={24}
               height={24}
               priority
               />
         </span>
         </h2>
         <div className={`${rel.accordion_single_content} accordion_single_content`}>
            <p>Yes, the software provides reporting and analytics capabilities to measure 
               the effectiveness of the employees and identify areas for improvement.
            </p>
         </div>
      </div>
   </div>
</div>
</div>
</div>
</section>
);
};
export default Faq;