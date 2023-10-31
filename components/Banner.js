import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import $ from "jquery";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Banner = () => {
useEffect(() => {

 
}, []);
return (
<section className={`${rel.banner_main} `} style={{background: `url(../images/circle-1.png) no-repeat center top #E2D8FF`,  height: '100%',
}}>
<div id="container" className={`${rel.container} ${rel.text_center}`}>
<div className={`${rel.banner_title_block}`}>
   <h1>
      <span>Where HR Tech</span>
      Meets Healthy Work Culture.
   </h1>
   <h4>Creating a Harmonious Workplace While Simplifying HR Management</h4>
   <div className={`${rel.banner_but_block}`}>
      <ul>
         <li>
            <Link href="#" className={`${rel.but_01} ${rel.but_gray}`}>
            <Image
            className={`${rel.logo} ${rel.me_2}`}
            src="/images/play_icn.svg"
            alt="e8"
            width={21}
            height={21}
            priority
            />
            Watch promo</Link>
         </li>
         <li><Link href="#" className={`${rel.but_01} ${rel.but_gray}`}>Request a demo</Link></li>
      </ul>
   </div>
</div>
<div className={`${rel.banner_moc_block} `}>
<div className={`${rel.banner_lab_01}`}>
   <Image
      className={`${rel.fit_img}`}
      src="/images/annual-leave-1@2x.png"
      alt="e8"
      width={550}
      height={138}
      priority
      />
</div>
<div className={`${rel.banner_lab_02}`}>
   <Image
      className={`${rel.fit_img}`}
      src="/images/group-289396-1@2x.png"
      alt="e8"
      width={550}
      height={138}
      priority
      />
</div>
<Image
className={`${rel.fit_img} ${rel.me_2}`}
src="/images/moc-01.png"
alt="e8"
width={1046}
height={672}
priority
/>
<div className={`${rel.mob_moc}`}>
   <div className={`${rel.mob_ic_01}`}>
      <Image
      className={`${rel.fit_img} ${rel.me_2}`}
      src="/images/locatino-1@2x.png"
      alt="e8"
      width={1046}
      height={672}
      priority
      />
   </div>
   <div className={`${rel.mob_ic_02}`}>
      <Image
      className={`${rel.fit_img} ${rel.me_2}`}
      src="/images/img-1.png"
      alt="e8"
      width={1046}
      height={672}
      priority
      />
   </div>
   <div className={`${rel.mob_ic_03}`}>
      <Image
      className={`${rel.fit_img} ${rel.me_2}`}
      src="/images/emoji2-1@2x.png"
      alt="e8"
      width={1046}
      height={672}
      priority
      />
   </div>
   <div className={`${rel.mob_ic_04}`}>
      <Image
      className={`${rel.fit_img} ${rel.me_2}`}
      src="/images/emoji1-1@2x.png"
      alt="e8"
      width={1046}
      height={672}
      priority
      />
   </div>
   <div className={`${rel.mob_ic_05}`}>
      <Image
      className={`${rel.fit_img} ${rel.me_2}`}
      src="/images/like-1@2x.png"
      alt="e8"
      width={1046}
      height={672}
      priority
      />
   </div>
   <Image
   className={`${rel.fit_img} ${rel.me_2}`}
   src="/images/bannermob-1@2x.png"
   alt="e8"
   width={1046}
   height={672}
   priority
   />
</div>
<div className={`${rel.mob_shade}`}>
   <Image
   className={`${rel.fit_img} ${rel.me_2}`}
   src="/images/ellipse-1.png"
   alt="e8"
   width={529}
   height={529}
   priority
   />
</div>
</div>
</div>
</section>
);
};
export default Banner;