import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Prompt:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0Q6JE2208E"/>
<script
dangerouslySetInnerHTML={{
  __html:`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0Q6JE2208E');
  `
}}
/>


 



      </Head>
      <body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-0Q6JE2208E" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-0Q6JE2208E');
        `}
      </Script>
        <Main />
        <NextScript />
      <Analytics />
      </body>
    </Html>
  );
}
