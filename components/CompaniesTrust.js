import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const CompaniesTrust = () => {
useEffect(() => { 
gsap.utils.toArray('.moving-gallery').forEach((section, index) => {
const w = section.querySelector('.wrapper-gallery');
const [x, xEnd] = (index % 2) ? [(section.offsetWidth - w.scrollWidth), 0] : [0, section.offsetWidth - w.scrollWidth];
gsap.fromTo(w, {  x  }, {
x: xEnd,
scrollTrigger: { 
trigger: section,
scrub: 0.5,
}
});
});
}, []);
return (
<section className={`${rel.pt_100} ${rel.pb_100} ${rel.company_logo}`}>
<div className={`${rel.title_52} ${rel.text_center}`}>
<h3>
   <span>Companies That </span>Trust Us
</h3>
<p>Some of the region and the worlds leading brands have chosen us.</p>
</div>   
<div className={`${rel.pt_20} ${rel.overflow_hide} content-row text-align-center full light-section`} data-bgcolor="#fff">
<div className={`${rel.red} moving-gallery fw-gallery`}>
   <ul className={`${rel.logo_marqr} wrapper-gallery`}>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_1.png"
               alt="e8"
               width={173}
               height={51}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_2.png"
               alt="e8"
               width={236}
               height={42}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_3.png"
               alt="e8"
               width={171}
               height={49}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_4.png"
               alt="e8"
               width={204}
               height={88}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_5.png"
               alt="e8"
               width={256}
               height={30}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_1.png"
               alt="e8"
               width={173}
               height={51}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_2.png"
               alt="e8"
               width={236}
               height={42}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_3.png"
               alt="e8"
               width={171}
               height={49}
               priority
               />
         </div>
      </li>
   </ul>
</div>
<div className={`${rel.red} moving-gallery bw-gallery`}>
   <ul className={`${rel.logo_marqr} wrapper-gallery`}>
   <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_1.png"
               alt="e8"
               width={173}
               height={51}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_2.png"
               alt="e8"
               width={236}
               height={42}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_3.png"
               alt="e8"
               width={171}
               height={49}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_4.png"
               alt="e8"
               width={204}
               height={88}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_5.png"
               alt="e8"
               width={256}
               height={30}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_1.png"
               alt="e8"
               width={173}
               height={51}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_2.png"
               alt="e8"
               width={236}
               height={42}
               priority
               />
         </div>
      </li>
      <li>
         <div className={`${rel.logo_box_marqe}`}>
            <Image
               className={`${rel.fit_img_max}`}
               src="/images/cl_3.png"
               alt="e8"
               width={171}
               height={49}
               priority
               />
         </div>
      </li>
   </ul>
</div>

<div className={`${rel.w_100} ${rel.mt_30}`}>
   <div className={`${rel.text_center} ${rel.container}`}>
      <Link href="#" className={`${rel.but_01} ${rel.but_black } ${rel.mt_20}`}>Request a demo</Link>
   </div>
</div>
</div> 
</section>
);
};
export default CompaniesTrust;