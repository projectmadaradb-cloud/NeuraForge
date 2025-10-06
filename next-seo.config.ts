import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  titleTemplate: "%s | NeuraForge",
  defaultTitle: "NeuraForge — Turning Data into Power. Code into Profits.",
  description: "AI-native boutique studio shipping revenue-driving products quickly. We build web apps, automation, AI agents, and custom solutions for SMB founders.",
  canonical: "https://neuraforge.tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neuraforge.tech/",
    siteName: "NeuraForge",
    title: "NeuraForge — Turning Data into Power. Code into Profits.",
    description: "AI-native boutique studio shipping revenue-driving products quickly. We build web apps, automation, AI agents, and custom solutions for SMB founders.",
    images: [
      {
        url: "https://neuraforge.tech/og.png",
        width: 1200,
        height: 630,
        alt: "NeuraForge - AI-native boutique studio",
      },
    ],
  },
  twitter: {
    handle: "@neuraforge",
    site: "@neuraforge",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#7C3AED",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
};

export default SEO;