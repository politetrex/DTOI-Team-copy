import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DTOI守夜人团队",
  description: "DTOI守夜人团队官网",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '项目',
        items: [
          {
            text: '娱乐项目',
            items: [
              { text: '迷宫', link: '/projects/1' }
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/projects/':
      [
        {
          text: '娱乐项目',
          items: [
            { text: '迷宫', link: '/projects/1' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'luogu', link: 'https://www.luogu.com.cn/team/118648' }
    ]
  }
})
