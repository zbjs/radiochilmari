// lib/seo.ts

import { SeoMetadata } from "@/types/seo";  // Import types

export const seoMetadata: SeoMetadata = {
  title: "Radio Chilmari - Community Radio Station in Chilmari, Bangladesh",
  description: "Radio Chilmari is a community radio station providing educational content, including women's rights and local news, broadcasting in the Rangpur-Dinajpur region of Bangladesh.",
  keywords: "Radio Chilmari, community radio, women's rights, Bangla radio, 99.20 FM, Chilmari, Kurigram, FM radio Bangladesh, RDRS Bangladesh, Kurigram, Bangladesh, Kurigram district, Rangpur, Dinajpur",
  author: "Radio Chilmari",
  creator: "RDRS Bangladesh",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Radio Chilmari - Empowering Communities Through Radio",
    description: "Radio Chilmari broadcasts local and cultural content focused on empowering women and promoting community development in Bangladesh.",
    type: "website",
    url: "https://www.radiochilmari.com",
    image: "/public/images/og-image.jpg",  // Ensure path is correct
    site_name: "Radio Chilmari",
  },
  twitter: {
    card: "summary_large_image",
    site: "@RadioChilmari",
    title: "Radio Chilmari - Community Radio for Social Change",
    description: "Listen to Radio Chilmari for insightful content on women's rights and local news from Bangladesh's rural regions.",
    image: "/public/images/twitter-card-image.jpg",  // Update path accordingly
  },
};
