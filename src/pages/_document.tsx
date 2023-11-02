import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/react';


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
      </Head>
      <body>
       
        <Main />
        <NextScript />
      <Analytics />
      </body>
    </Html>
  );
}
