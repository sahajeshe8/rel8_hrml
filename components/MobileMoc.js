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
<section className={`${rel.bg_gray} ${rel.text_center} `}>
<Image
   className={` `}
   src="/images/mobile_banner.png"
   alt="e8"
   width={1052}
   height={558}
   priority
   />
</section>
);
};
export default MobileMoc;