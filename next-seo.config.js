// next-seo.config.js

import { DefaultSeo } from 'next-seo';

const defaultSeoConfig = {
  title: 'Ian Marx - Portfolio',
  description: 'A software engineer passionate about coding, problem solving, and continuously expanding knowledge in the ever-evolving field of software engineering.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imarx-webportfolio.netlify.app/',
    site_name: 'Ian Marx - Portfolio',
    images: [
      {
        url: 'https://drive.google.com/file/d/1w58AgqLM76Gj2C4jjT_tvcmCsQ-f_xnS/view',
        alt: 'Ian Marx - Portfolio',
      },
    ],
  },
  twitter: {
    handle: '@its_imarx',
    site: '@its_imarx',
    cardType: 'Ian Marx',
  },
};

export default function MyDefaultSeo() {
  return <DefaultSeo {...defaultSeoConfig} />;
}
