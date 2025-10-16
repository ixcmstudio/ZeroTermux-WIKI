// .vitepress/config.mjs
export default {
  title: "ZeroTermux Wiki",
  description: "A wiki for ZeroTermux.",

  // Cloudflare Pages 上一般部署在根目录
  base: "/",

  cleanUrls: true,
  ignoreDeadLinks: true,

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/getting-started' },
      { text: '在线功能', link: '/docs/online/scripts' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ixcmstudio/zerotermux-wiki' }
    ],

    sidebar: [
      {
        text: '入门',
        items: [
          { text: '快速开始', link: '/docs/getting-started' },
          { text: '安装教程', link: '/docs/installation' },
        ]
      },
      {
        text: '常用功能',
        collapsed: false,
        items: [
          { text: '切换源', link: '/docs/features/common/source-switching' },
          { text: '容器切换', link: '/docs/features/common/container-switching' },
          { text: '备份/恢复', link: '/docs/features/common/backup-restore' },
          { text: 'MOE全能', link: '/docs/features/common/moe-all-in-one' },
          { text: '发行版本', link: '/docs/features/common/linux-distros' },
          { text: 'QEMU', link: '/docs/features/common/qemu' },
          { text: '定时任务', link: '/docs/features/common/scheduled-tasks' },
          { text: 'ZT设置', link: '/docs/features/common/zt-settings' },
        ]
      },
      {
        text: 'X11 功能',
        collapsed: true,
        items: [
          { text: 'X11设置', link: '/docs/features/x11/settings' },
          { text: '安装X11', link: '/docs/features/x11/install' },
          { text: '修复环境错误', link: '/docs/features/x11/fix-errors' },
        ]
      },
      {
        text: '美化/UI 功能',
        collapsed: true,
        items: [
          { text: '悬浮窗口', link: '/docs/features/ui/floating-window' },
          { text: '美化设置', link: '/docs/features/ui/beautify-settings' },
          { text: '字体设置', link: '/docs/features/ui/font-settings' },
        ]
      },
      {
        text: 'ZT 功能',
        collapsed: true,
        items: [
          { text: 'Zero功能', link: '/docs/features/zt/zero-functions' },
          { text: 'VNC', link: '/docs/features/zt/vnc' },
          { text: '命令定义', link: '/docs/features/zt/custom-commands' },
          { text: '短信/通话', link: '/docs/features/zt/sms-call' },
          { text: '打开目录', link: '/docs/features/zt/open-directory' },
          { text: '开机启动', link: '/docs/features/zt/startup' },
          { text: '实验功能', link: '/docs/features/zt/experimental' },
          { text: '语言切换', link: '/docs/features/zt/language-switching' },
        ]
      },
      {
        text: '线上功能',
        collapsed: false,
        items: [
          { text: '在线脚本', link: '/docs/online/scripts' },
          { text: 'Zero论坛', link: '/docs/online/forum' },
          { text: '下载站', link: '/docs/online/downloads' },
          { text: '公共仓库', link: '/docs/online/public-repo' },
        ]
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © IXCMSTUDIO'
    }
  }
}
