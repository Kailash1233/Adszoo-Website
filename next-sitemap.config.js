/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://adszoo.in', // Replace with your site's URL
    generateRobotsTxt: true, // Generate robots.txt file
    sitemapSize: 7000, // Limit the number of URLs per sitemap (if needed)
  };
  