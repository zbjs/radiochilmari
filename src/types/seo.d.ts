// types/seo.d.ts

export interface OpenGraphMetadata {
    title: string;
    description: string;
    type: string;
    url: string;
    image: string;
    site_name: string;
  }
  
  export interface TwitterMetadata {
    card: string;
    site: string;
    title: string;
    description: string;
    image: string;
  }
  
  export interface SeoMetadata {
    title: string;
    description: string;
    keywords: string;
    author: string;
    creator: string;
    robots: string;
    viewport: string;
    openGraph: OpenGraphMetadata;
    twitter: TwitterMetadata;
  }
  