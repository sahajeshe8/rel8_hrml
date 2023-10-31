import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const MobileMoc = () => {
useEffect(() => { 
}, []);
return (
<section style={{background: `#eeeeee`}} className={` ${rel.text_center} `}>
<Image
   className={`${rel.fit_img_max} ${rel.me_2}`}
   src="/images/mob_moc.jpg"
   alt="e8"
   width={1600}
   height={810}
   priority
   />
</section>

);
};
export default MobileMoc;