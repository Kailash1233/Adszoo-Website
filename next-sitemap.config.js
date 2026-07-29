require("ts-node/register/transpile-only");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.adszoo.in",
  sitemapSize: 7000,
  autoLastmod: true,

  exclude: ["/thank-you", "/ads", "/landing"],

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
  },

  transform: async (config, url) => {
    const { blogPosts } = require("./lib/blog-posts");
    const slug = url.split("/blogs/")[1];
    const post = slug ? blogPosts.find((p) => p.slug === slug) : null;

    return {
      loc: url,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: post?.updatedDate ?? post?.date ?? new Date().toISOString(),
    };
  },
};
