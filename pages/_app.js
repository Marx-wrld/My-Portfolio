// _app.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import MyDefaultSeo from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <MyDefaultSeo />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
