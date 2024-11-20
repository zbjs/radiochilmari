/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
      tailwindcss: {},
      
    },
    output: "export",
    experimental: {
      appDir: true,
    },
    images: {
      unoptimized: true,
    },
    
    i18n: {
        locales: ['en', 'bn'],
        defaultLocale: 'en',
      },
  };
  
  export default config;


