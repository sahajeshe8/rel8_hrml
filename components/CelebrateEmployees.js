import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { gsap } from "gsap";
import AddBranch from "./FormPop";
// Import Swiper styles
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const CelebrateEmployees = () => {
   const [modalShow, setModalShow] = useState(false);
useEffect(() => { 
  
}, []);
return (
<section  style={{background: `#c2b2ef`}}>
<div className={`${rel.container} ${rel.rel}`}>
<div className={`${rel.pt_100} ${rel.pb_100} ${rel.empower_sec} ${rel.w_100} ${rel.d_flex} ${rel.two_col}  ` }>
<div className={`${rel.txt_block_empower}  ${rel.flex_center}`}>
<div className={`${rel.w_100} ${rel.pe_0} ${rel.left_txt_block}`}>
<div className={`${rel.w_100} ${rel.text_black}`}>
<div className={`${rel.w_100} ${rel.title_52} ${rel.title_black} ${rel.mb_2}`}>
<h3>
 
   <span>Empower Your
Organizations Productivity
With Our Well Equipped </span>
HR Portal Software.


</h3>
</div>
<p>
   Join us in creating a workplace where every milestone is valued and every 
   achievement is celebrated. With our employee-centric software, 
   it&apos;s easy to spread the joy!
</p>
<div className={`${rel.w_100}`}>
   <ul className={`${rel.but_ul} ${rel.mt_60}`}>
   <li><span onClick={() => setModalShow(true)} className={`${rel.but_01} ${rel.but_yellow }`}>Request a demo</span>
   <AddBranch show={modalShow} onHide={() => setModalShow(false)} />
   
   </li>
   <li><Link href="#" className={`${rel.but_01} ${rel.white } `}>Contact Us</Link></li>
   </ul>
</div>
</div>
</div>
</div>
<div className={`${rel.empower_img_right}`}>
   <Image
  className={`${rel.fit_img_max}`}
   src="/images/empower_img.png"
   alt="e8"
   width={675}
   height={603}
   priority
   />
</div>

</div>

</div>
</section>
);
};
export default CelebrateEmployees;