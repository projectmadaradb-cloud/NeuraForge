import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://neuraforge.tech";
  const lastModified = new Date();
  
  return [
    { 
      url: `${base}/`, 
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0
    },
    { 
      url: `${base}/services`, 
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9
    },
    { 
      url: `${base}/portfolio`, 
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9
    },
    { 
      url: `${base}/about`, 
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    { 
      url: `${base}/contact`, 
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    { 
      url: `${base}/pricing`, 
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7
    },
    { 
      url: `${base}/process`, 
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6
    },
    { 
      url: `${base}/work`, 
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8
    },
    { 
      url: `${base}/qa`, 
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5
    },
    { 
      url: `${base}/privacy`, 
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    },
    { 
      url: `${base}/terms`, 
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];
}