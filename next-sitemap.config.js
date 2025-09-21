/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://armaerfootball.com',
    generateRobotsTxt: true, // robots.txt を生成
    sitemapSize: 5000, // sitemapのサイズを調整（デフォルトは5000）
    changefreq: 'daily', // 更新頻度の設定（適宜変更）
    priority: 0.7, // 全体的な優先度（適宜変更）
    exclude: ['/excluded-page'], // 除外するページがあれば追加
    additionalSitemaps: [
      // 他のsitemapがあれば追加
      'https://armaerfootball.com/some-other-sitemap.xml',
    ],
  }
  