// .vitepress/config.mjs
export default {
  title: "ZeroTermux Wiki",
  description: "A wiki for ZeroTermux.",

  themeConfig: {
    // 这里可以配置导航栏、侧边栏等
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            // 在这里添加更多页面
          ]
        }
      ]
    }
  }
}
