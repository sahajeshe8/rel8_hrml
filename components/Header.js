"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import rel from "@/styles/rel.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Header = () => {
useEffect(() => {
let lastScrollTop = 0;
document.addEventListener("scroll", function () {
const st = window.pageYOffset || document.documentElement.scrollTop;
if (st > lastScrollTop) {
// Scrolling down
document.body.classList.remove("scroll-up");
document.body.classList.add("scroll-down");
} else {
// Scrolling up
document.body.classList.remove("scroll-down");
document.body.classList.add("scroll-up");
}
// Check if scroll position is at the top (offset 0)
if (st === 0) {
document.body.classList.remove("scroll-up");
document.body.classList.remove("scroll-down");
}
lastScrollTop = st;
});
// -------------sub-menu--script-------start-
function classToggle() {
this.classList.toggle('sub_menu_close');
this.classList.toggle('sub_menu_open');
}
document.querySelector('.sub_menu_close').addEventListener('click', classToggle);
// ------------------
// -------------sub-menu--script-------end-
}, []);
useEffect(() => {
const ham = document.querySelector(".ham");
const hamcl = document.querySelector(".close_menu_icn");
const menu = document.querySelector(".myNav");
const links = menu.querySelectorAll(
".nav_ul li , .nav_ul_2 li , .nav_ul_2 p , .menu_img_block, .nav_ul_2 h5 "
);
var tl = gsap.timeline({ paused: true });
tl.to(menu, {
duration: 0.8,
opacity: 1,
height: "100vh", // change this to 100vh for full-height menu
ease: "expo.inOut",
});
tl.from(
links,
{
duration: 0.8,
opacity: 0,
y: 20,
stagger: 0.1,
ease: "expo.inOut",
},
"-=0.5"
);
tl.reverse();
var body = document.body;
ham.addEventListener("click", () => {
tl.reversed(!tl.reversed());
body.classList.add("nav-open");
});
hamcl.addEventListener("click", () => {
body.classList.remove("nav-open");
tl.reverse();
});
}, []);
return (
<header
className={`${rel.pt_20} ${rel.pb_20} ${rel.hed_position} ${rel.hed_white} header_main`}
>
<div className={`${rel.wrap} ${rel.d_flex}`}>
<div className={`${rel.logo_main} ${rel.mr_auto} main_logo`}>
<Link href="/">
<Image
   className={`${rel.logo} ${rel.img_mx_fluid}`}
   src="/images/lgogbanner-1@2x.png"
   alt="e8"
   width={133}
   height={85}
   priority
   />
</Link>
</div>
<div className={`${rel.nav_right}`}>
   <ul className={`${rel.menu_ul}`}>
      <li>
         <Link href="#">
         Features</Link>
      </li>
      <li>
         <Link href="#">
         Contact</Link>
      </li>
      <li>
         <Link href="#">
         Login</Link>
      </li>
   </ul>
   <Link href="#" className={`${rel.but_01} ${rel.but_yellow} top_but`}>
   <span className={`${rel.mob_hide}`}>Request for </span>demo
   </Link>
</div>
<div id="toggle_nav" className={`${rel.toggle_menu} ${rel.ml_auto}`}>
<div className={`${rel.burger} ${rel.burger_sub} ham`}>
<div className={rel.burger__patty}></div>
<div className={`${rel.burger__patty} ${rel.center_nav}`}></div>
<div className={rel.burger__patty}></div>
</div>
</div>
</div>
<div
id="myNav"
className={`${rel.nav_pane_mian} myNav`}
style={{ background: "#000000  ", height: "0", overflow: "hidden" }}
> 
<Link
href="#"
className={`${rel.close_menu} ${rel.icon_close} close_menu_icn`}
></Link>
<div className={`${rel.wrap} ${rel.d_flex}`}>
<ul className={`${rel.nav_ul} nav_ul`}>
   <li>
      <Link href="/about-us">
      Who we are</Link>
   </li>
   <li className={`${rel.sub_menu} sub_menu_close`}>
      <Link href="#" >
      What we Do</Link>
      <ul className={`${rel.trans}  `}>
         <li>
            <Link  href="/services#branding">
            Immersive Brands</Link>
         </li>
         <li>
            <Link href="/services#website_development">
            Interactive Digital</Link>
         </li>
         <li>
            <Link href="/services#digital_marketing">
            Effective Communication</Link>
         </li>
      </ul>
   </li>
   <li>
      <Link href="/case-studies">
      Our Work</Link>
   </li>
   <li>
      <Link href="/careers">
      Careers</Link>
   </li>
   <li>
      <Link href="/contact-us">
      Contact Us</Link>
   </li>
</ul>
<div className={`${rel.menu_row_02} nav_ul_2`}>
   <h5>Dubai</h5>
   <p>
      Latifa Towers,
      <br />
      Sheikh Zayed Road, <br />
      Dubai, UAE
      <br />
      <Link href="tel:04 3545956">
      04 3545956</Link>
      <br />
      <Link href="mailto:info@element8.ae">
      info@element8.ae</Link>
   </p>
   <ul className={`${rel.social_ul} ${rel.mt_70}`}>
   <li>
      <Link className={`${rel.icon_linkedin2}`} href="#">
      </Link>
   </li>
   <li>
      <Link className={`${rel.icon_instagram}`} href="#">
      </Link>
   </li>
   <li>
      <Link className={`${rel.icon_facebook}`} href="#">
      </Link>
   </li>
   </ul>
</div>
</div>
</div>
</header>
);
};
export default Header;