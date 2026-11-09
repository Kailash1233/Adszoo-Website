require("ts-node/register/transpile-only");

/** Convert loosely formatted dates ("JULY 7, 2025") to ISO-8601 for <lastmod>. */
function iso(date) {
  if (!date) return undefined;
  const d = new Date(date);
  return isNaN(d.getTime()) ? undefined : d.toISOString();
}

// Money pages get a higher priority hint.
const PRIORITY = [
  [/^\/$/, 1.0],
  [/^\/(products|services)(\/|$)/, 0.9],
  [/^\/seo-aeo-geo-services$/, 0.9],
  [/^\/case-study(\/|$)/, 0.8],
  [/^\/locations\//, 0.8],
  [/^\/blogs(\/|$)/, 0.7],
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.adszoo.in",
  sitemapSize: 7000,
  autoLastmod: true,

  exclude: ["/thank-you", "/ads", "/landing", "/api/*", "/404", "/_not-found"],

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/thank-you"] },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
  },

  transform: async (config, url) => {
    const { blogPosts } = require("./lib/blog-posts");
    const slug = url.split("/blogs/")[1];
    const post = slug ? blogPosts.find((p) => p.slug === slug) : null;
    const priority = (PRIORITY.find(([re]) => re.test(url)) || [null, 0.6])[1];

    return {
      loc: url,
      changefreq: url.startsWith("/blogs/") ? "monthly" : "weekly",
      priority,
      lastmod: iso(post?.updatedDate) ?? iso(post?.date) ?? new Date().toISOString(),
    };
  },
};
