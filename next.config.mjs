
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();


/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
      tailwindcss: {},
    },
    i18n: {
        locales: ['en', 'bn'], 
        defaultLocale: 'en',
      },
  };
  
  export default withNextIntl(config);




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
//     basePath: process.env.BASE_PATH || '',
//     reactStrictMode: true,
//     images: {
//         domains: ['images.unsplash.com'],
//     },

//     i18n: {
//         locales: ['en', 'bn'], 
//         defaultLocale: 'en',
//       },
// };

