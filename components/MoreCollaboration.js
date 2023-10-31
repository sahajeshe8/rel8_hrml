import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const MoreCollaboration = () => {
useEffect(() => {

   var counter = gsap.utils.toArray('.number-counter');		
   counter.forEach(function(countNumber) {
      gsap.fromTo(countNumber, {innerText: countNumber.innerText}, {innerText: function() {return Math.floor(parseFloat(countNumber.getAttribute('data-target')));},
         duration: 1,
         snap: { innerText: 1 }, 
         scrollTrigger: {
            trigger: countNumber,
            start: "top 90%", 
         }
      });
   });



}, []);
return (
<section  >
   <div className={`${rel.container} `}>
      <div className={`${rel.title_block_03} ${rel.text_center} ${rel.rel} `}>
      <div className={`${rel.element_title_01}`}>
         <Image
         className={`${rel.fit_img} ${rel.me_2}`}
         src="/images/msg-1@2x.png"
         alt="e8"
         width={529}
         height={529}
         priority
         />
      </div>
      <div className={`${rel.element_title_02}`}>
         <Image
         className={`${rel.fit_img} ${rel.me_2}`}
         src="/images/bulb-1@2x.png"
         alt="e8"
         width={529}
         height={529}
         priority
         />
      </div>
      <h2>More collaboration,<br/>
         <span>Better</span> communication
      </h2>
   </div>
   <div className={`${rel.w_100} ${rel.mt_100} ${rel.mb_100}`}>
   <div className={`${rel.w_100} ${rel.rel}`}>
   <div className={`${rel.moc_bg} ${rel.rel}`}>
   <Image
   className={`${rel.fit_img} ${rel.me_2}`}
   src="/images/imgbg-1@2x.png"
   alt="e8"
   width={529}
   height={529}
   priority
   />
   <div className={`${rel.moc_03} ${rel.rel}`}>
   <Image
   className={`${rel.fit_img} ${rel.me_2}`}
   src="/images/mockupmac-1@2x.png"
   alt="e8"
   width={1052}
   height={558}
   priority
   />
   </div>
   </div>
   </div>
   </div>
   <div className={`${rel.w_100} ${rel.rel} ${rel.pt_100} ${rel.pb_100}`}>
   <div className={`${rel.sub_title}`}>
      <h4>An intuitive & Powerful HR  software solution for your business</h4>
   </div>
   <ul className={`${rel.count_ul}`}>
      <li>
         <div className={`${rel.count_txt}`}>
            <h5 className="number-counter" data-target="500" data-symbol="+">0</h5>
         </div>
         <div className={`${rel.count_dis}`}>
            <p>Companies<br/> 
               Serve
            </p>
         </div>
      </li>
      <li>
         <div className={`${rel.count_txt}`}>
            <h5 className="number-counter" data-target="599" data-symbol="+">0</h5>
         </div>
         <div className={`${rel.count_dis}`}>
            <p>Daily <br/>
               Active Users
            </p>
         </div>
      </li>
      <li>
         <div className={`${rel.count_txt}`}>
            <h5 className={`${rel.number_counter} number-counter`} data-target="20" data-symbol="+">0</h5>
         </div>
         <div className={`${rel.count_dis}`}>
            <p>Industries<br/>
               Served
            </p>
         </div>
      </li>
   </ul>
   </div>
   </div>
</section>
);
};
export default MoreCollaboration;