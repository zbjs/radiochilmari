
import createNextIntlPlugin from 'next-intl/plugin';

const nextIntlPlugin = createNextIntlPlugin({
    locales: ['en', 'bn'],
    defaultLocale: 'en',
  });


/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      postcss: {},
      nextIntl: nextIntlPlugin,
      
      
    },
    
  };
  
  export default config;


