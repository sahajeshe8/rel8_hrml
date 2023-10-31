"use client";
import React, { useState, useEffect, useRef } from "react";

// import required modules
import Image from "next/image";
import Link from "next/link";
import $ from "jquery";
import rel from "@/styles/rel.module.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Stacksection from "@/components/Stacksection";
import Banner from "@/components/Banner";
import MoreCollaboration from "@/components/MoreCollaboration";
import Solutions from "@/components/Solutions";
import Transform from "@/components/Transform";
import Testimonial from "@/components/Testimonial";
import Elevate from "@/components/Elevate";
import MobileMoc from "@/components/MobileMoc";
import CompaniesTrust from "@/components/CompaniesTrust";
import CustomersExperience from "@/components/CustomersExperience";
import Faq from "@/components/Faq";
import CelebrateEmployees from "@/components/CelebrateEmployees";
import CompleteHR from "@/components/CompleteHR";
import MocTab from "@/components/MocTab";
import Pinning from "@/components/Pinning";







import "swiper/scss/navigation";
import "swiper/css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CountUp from "react-countup";
import AOS from "aos";
import Head from "next/head";
 export const metadata = {
title: "Element 8 | Leading Digital Web Agency in Saudi Arabia",
description:
"Elevate your online presence with Element 8, the leading Digital Web Agency in Saudi Arabia. Our expert team crafts tailored digital solutions, from design to development, ensuring top-notch results for your website. ",
};
const Homepage = (props) => {
const [counterOn, setCounterOn] = useState(false);
const content_change = "Amp up your online presence";
// ----smooth--scroll--------start--
// useEffect( () => {
// gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);






useEffect(() => {
 


window.onbeforeunload = function () {
window.scrollTo(0, 0);
}
// --------aos----
AOS.init({
easing: "ease-out-cubic",
once: false,
offset: 50,
});
// --------aos----
}, []);
// ----smooth--scroll--------start--
useEffect(() => { 
   (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

}, []);
// ----smooth--scroll--------end--
return (
<>
<Head>
   <link href="https://fonts.googleapis.com/css2?family=Metrophobic&display=swap" rel="stylesheet" />
   <title> </title>
   <meta
      name="description"
      content="Elevate your online presence with Element 8, the leading Digital Web Agency in Saudi Arabia. Our expert team crafts tailored digital solutions, from design to development, ensuring top-notch results for your website. "
      />
   <meta
      property="og:title"
      content="Element 8 | Leading Digital Web Agency in Saudi Arabia"
      key="title"
      />
   <meta
      property="og:description"
      content="Elevate your online presence with Element 8, the leading Digital Web Agency in Saudi Arabia. Our expert team crafts tailored digital solutions, from design to development, ensuring top-notch results for your website. "
      />
</Head>
<main className={`${rel.app_main} ${rel.footer_margin}`}>
<Header />
<Banner />
<MoreCollaboration />
<Solutions />
<Stacksection />
<Elevate />
<Transform />
<MobileMoc />
{/* <MocTab/> */}
<CompleteHR />
<CompaniesTrust />
<Testimonial />
<CustomersExperience />
<Faq />
<CelebrateEmployees />
{/* --- */}
{/* <Stacksection /> */}
{/* 
<Solutions />
 
<Pinning />
<Transform />
<Testimonial />

<MobileMoc />
<CompaniesTrust />
<CustomersExperience />
<Faq />
<CelebrateEmployees />
<CompleteHR /> */}
 

 {/* dd */}

 

{/* ------------------- */}

























 






<Footer />

</main>
</>
);
};
export default Homepage;