import React,  { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import AddBranch from "./FormPop";
// fancy-box---------import--
 
const Footer = () => {
   const [modalShow, setModalShow] = useState(false);


    




return (
<footer className={`${rel.footer_mian} ${rel.app_main}   ${rel.z_150} `}>
 



<div className={`${rel.wrap} ${rel.pt_100} ${rel.pb_100} ${rel.d_flex} `}>
<div className={`${rel.footer_left_cl}`}>
   <Image
   className={` ${rel.img_mx_fluid}`}
   src="/images/footer-logo.png"
   alt="e8"
   width={133}
   height={84}
   priority
   />
</div>
<div className={`${rel.footer_right_cl} ${rel.d_flex}`}>
{/* <div className={`${rel.fcl_01}`}>
   <ul className={`${rel.footer_link_ul}`}>
      <li>
         <Link href="#">
         Terms and Conditions</Link>
      </li>
      <li>
         <Link href="#">
         Privacy Policy</Link>
      </li>
      <li>
         <Link href="#">
         FAQS</Link>
      </li>
   </ul>
</div> */}
{/* <div className={`${rel.fcl_02}`}>
   <ul className={`${rel.footer_link_ul}`}>
      <li>
         <Link href="#">
         Contact Us</Link>
      </li>
   </ul>
</div> */}
<div className={`${rel.fcl_03} ${rel.d_flex} ${rel.ms_auto}`}>
   <p>Upgrade to Rel8 today and improve your organization</p>
   <span   onClick={() => setModalShow(true)} className={`${rel.but_01} ${rel.but_yellow} ${rel.mr_auto}  `}>Book a demo</span>
   <AddBranch show={modalShow} onHide={() => setModalShow(false)} />
</div>
</div>
</div>
<div className={`${rel.footer_copy_box} ${rel.d_flex}`}>
<div className={`${rel.wrap} ${rel.d_flex}`}>
<div className={`${rel.copy_left_block} ${rel.mr_auto}`}>
<p>Copyright 2023. All Rights Reserved.</p>
</div>
<div className={`${rel.copy_right_block} ${rel.ml_auto}`}>
<ul>
   <li><a href="#">Linkedin</a></li>
   <li><a href="#">Facebook</a></li>
   <li><a href="#">Instagram</a></li>
   <li><a href="#">X</a></li>
</ul>
</div>
</div>
</div>

<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/2924872.js"></script>

</footer>
);
};
export default Footer;