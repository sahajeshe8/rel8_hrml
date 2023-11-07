import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { gsap } from "gsap";
import AddBranch from "./FormPop";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const CompleteHR = () => {
   const [modalShow, setModalShow] = useState(false);
useEffect(() => { 
}, []);
return (
<section  >
   <div className={`${rel.container} ${rel.pt_100} ${rel.pb_100}`}>
   <div className={`${rel.title_52} ${rel.text_center}`}>
   <h3>
      <span>Benefits Of A </span> 
      Complete HR & Payroll Platform
   </h3>
   <p>We ensure your business runs smoothly, while increasing productivity and efficiency across the organization.</p>
   <span onClick={() => setModalShow(true)}  className={`${rel.but_01} ${rel.but_yellow } ${rel.mt_20}`}>Request a demo</span>
   <AddBranch show={modalShow} onHide={() => setModalShow(false)} />
   </div>
   <div className={`${rel.margin_} ${rel.d_flex} ${rel.mt_100} ${rel.margin_mob}`}>
   <div className={`${rel.better_block} ${rel.px_1}`}>
   <div className={`${rel.w_100} ${rel.radius_20}`}  style={{background: `#8A3BF8`,}}>
   <div className={`${rel.text_block_02}`}>
      <h4>Make Better Decisions</h4>
      <p>Our people data will help you automatically and accurately 
         report on the data that matters the most to your organization. 
         Enabling managers and stakeholders to make smarter,
         more timely decisions.
      </p>
   </div>
   <div className={`${rel.w_100}`}>
      <Image
         className={`${rel.d_flex}`}
         src="/images/moc_img_01.png"
         alt="e8"
         width={628}
         height={449}
         priority
         />
   </div>
   </div> 
   </div>
   <div className={`${rel.employee_block} ${rel.px_1}`}>
   <div className={`${rel.w_100} ${rel.radius_20}`} style={{background: `#F0ECFD`,
   }}>
   <div className={`${rel.text_block_02} ${rel.text_dark}`}>
   <h4>Improve Employee Experience</h4>
   <p>User-friendly, well designed HR software helps 
      transform your employees experience. Become a 
      forward-thinking and strategic organization.
   </p>
   </div>
   <div className={`${rel.w_100} `}>
      <Image
      className={`${rel.d_flex} ${rel.m_start_auto}`}
      src="/images/moc_img_02.png"
      alt="e8"
      width={463}
      height={449}
      priority
      />
   </div>
   </div>
   </div>
   <div className={`${rel.w_100} ${rel.mt_50}`}>
   <div className={`${rel.text_block_02} ${rel.pb_0} ${rel.text_dark} ${rel.radius_20}`} style={{background: `#BBA9FF`,
   }}>
   <div className={`${rel.w_100}`}>
      <h4>Efficiency and productivity</h4>
      <p>RPA harnesses advanced cognitive computing and AI to automate high-volume transactional tasks, 
         document handling and validation.
      </p>
   </div>
   <div className={`${rel.w_100} ${rel.mt_50}`}>
   <Image
   className={`${rel.d_flex} ${rel.mx_auto}`}
   src="/images/mock-02-x.png"
   alt="e8"
   width={998}
   height={443}
   priority
   />
   </div>
   </div>
  
   </div>
   </div>
   </div>
</section>
);
};
export default CompleteHR;