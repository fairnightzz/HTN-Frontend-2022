import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="application-name" content="HTN Frontend" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HTN Frontend" />
        <meta name="description" content="Hackathon Global Inc Event Hackathon!" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        {
          /*
        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

          */

        }

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://htn.zhehaizhang.com" />
        <meta name="twitter:title" content="HTN Frontend" />
        <meta name="twitter:description" content="Hackathon Global Inc Event Hackathon!" />
        <meta name="twitter:image" content="https://htn.zhehaizhang.com/icons/android-chrome-192x192.png" />
        <meta name="twitter:creator" content="@zhehaizhang" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HTN Frontend" />
        <meta property="og:description" content="Hackathon Global Inc Event Hackathon!" />
        <meta property="og:site_name" content="HTN Frontend" />
        <meta property="og:url" content="https://htn.zhehaizhang.com" />
        <meta property="og:image" content="https://htn.zhehaizhang.com/icons/apple-touch-icon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
