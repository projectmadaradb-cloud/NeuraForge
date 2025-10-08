/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://neuraforge.tech",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/api/*',
    '/admin/*',
    '/draft/*',
    '/_*',
  ],
  additionalPaths: async (config) => [
    // Static paths
    await config.transform(config, '/'),
    await config.transform(config, '/services'),
    await config.transform(config, '/portfolio'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/research'),
    await config.transform(config, '/pricing'),
    await config.transform(config, '/process'),
    await config.transform(config, '/work'),
    await config.transform(config, '/qa'),
    await config.transform(config, '/terms'),
    await config.transform(config, '/privacy'),
    
    // Dynamic service pages
    await config.transform(config, '/services/web-development'),
    await config.transform(config, '/services/app-development'),
    await config.transform(config, '/services/ai-solutions'),
    await config.transform(config, '/services/web-scraping'),
    await config.transform(config, '/services/trading-bots'),
    await config.transform(config, '/services/business-automation'),
    await config.transform(config, '/services/ai-agents'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/draft/", "/_next/"],
      },
    ],
    additionalSitemaps: [
      "https://neuraforge.tech/sitemap.xml",
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
};