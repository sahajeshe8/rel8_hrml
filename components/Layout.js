import React from "react";
import Head from 'next/head';
import e8 from '@/styles/rel.module.scss';
const variants = {
hidden: { opacity: 0, x: -200, y: 0 },
enter: { opacity: 1, x: 0, y: 0 },
exit: { opacity: 0, x: 0, y: -100 },
}
const Layout = (props) => {
return (
<React.Fragment>
   <Head>
      {/* <script
      dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TNK2H8N');`,
      }}
      /> */}
      <meta name="robots" content="noindex, nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
   </Head>
   {/* <noscript
   dangerouslySetInnerHTML={{
   __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNK2H8N" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
   }}
   /> */}
   {props.children}
</React.Fragment>
);
}
export default Layout;