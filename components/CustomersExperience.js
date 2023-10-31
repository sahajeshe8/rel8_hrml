import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const CustomersExperience = () => {
useEffect(() => { 


   var counter = gsap.utils.toArray('.number-counter-2');		
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
<section className={`${rel.pb_100}`}>
<div className={`${rel.container} ${rel.rel} `}>
<div className={`${rel.title_52} ${rel.text_center}`}>
<h3>
   <span>What’s Our </span>Customers Experience
</h3>
</div>
<div className={`${rel.counder_block} ${rel.mt_50}`}>
<ul>
   <li>
      <h4 className={`${rel.number_counter_experience}  number-counter-2`} data-target="20" data-symbol="%">0</h4>
      <p>
         Increased
         Productivity
      </p>
   </li>
   <li>
      <h4 className={`${rel.number_counter_experience}  number-counter-2`} data-target="80" data-symbol="%">0</h4>
      <p>
         Reduction of
         Labour
      </p>
   </li>
   <li>
      <h4 className={`${rel.number_counter_experience}  number-counter-2`} data-target="70" data-symbol="%">0</h4>
      <p>
         Efficiency of
         Team
      </p>
   </li>
</ul>
</div>
</div>
</section>
);
};
export default CustomersExperience;