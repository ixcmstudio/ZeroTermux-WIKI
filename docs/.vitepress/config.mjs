// .vitepress/config.mjs
export default {
  // --- 基础信息 ---
  title: "ZeroTermux Wiki",
  description: "A wiki for ZeroTermux.",

  // --- 添加这一行来开启“干净链接”功能 ---
  cleanUrls: true,

  // --- 主题配置 ---
  themeConfig: {
    // 网站 Logo (可选)
    logo: '/logo.png',

    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '功能指南', link: '/features/common/source-switching' },
      { text: '在线功能', link: '/online/scripts' },
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ixcmstudio/zerotermux-wiki' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '入门指南',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '安装教程', link: '/guide/installation' }
        ]
      },
      {
        text: '常用功能',
        collapsed: false,
        items: [
          { text: '切换源', link: '/features/common/source-switching' },
          { text: '容器切换', link: '/features/common/container-switching' },
          { text: '备份/恢复', link: '/features/common/backup-restore' },
          { text: 'MOE全能', link: '/features/common/moe-all-in-one' },
          { text: '发行版本', link: '/features/common/linux-distros' },
          { text: 'QEMU', link: '/features/common/qemu' },
          { text: '定时任务', link: '/features/common/scheduled-tasks' },
          { text: 'ZT设置', link: '/features/common/zt-settings' },
        ]
      },
      // ... 其他侧边栏项目保持不变 ...
      {
        text: 'X11 功能',
        collapsed: true,
        items: [
          { text: 'X11设置', link: '/features/x11/settings' },
          { text: '显示/隐藏终端', link: '/features/x11/toggle-terminal' },
          { text: 'X11环境', link: '/features/x11/environment' },
          { text: '修复环境错误', link: '/features/x11/fix-errors' },
          { text: '安装X11', link: '/features/x11/install' },
          { text: '显示/隐藏键盘', link: '/features/x11/toggle-keyboard' },
        ]
      },
      {
        text: '美化/UI 功能',
        collapsed: true,
        items: [
          { text: '悬浮窗口', link: '/features/ui/floating-window' },
          { text: '美化设置', link: '/features/ui/beautify-settings' },
          { text: '字体设置', link: '/features/ui/font-settings' },
          { text: '全屏模式', link: '/features/ui/fullscreen-mode' },
          { text: '雪花/粒子动画', link: '/features/ui/animations' },
          { text: '视频背景', link: '/features/ui/video-background' },
        ]
      },
      {
        text: 'ZT 功能',
        collapsed: true,
        items: [
          { text: 'Zero功能', link: '/features/zt/zero-functions' },
          { text: 'VNC', link: '/features/zt/vnc' },
          { text: '命令定义', link: '/features/zt/custom-commands' },
          { text: '短信/通话', link: '/features/zt/sms-call' },
          { text: '打开目录', link: '/features/zt/open-directory' },
          { text: '开机启动', link: '/features/zt/startup' },
          { text: '实验功能', link: '/features/zt/experimental' },
          { text: '语言切换', link: '/features/zt/language-switching' },
        ]
      },
      {
        text: '线上功能',
        collapsed: false,
        items: [
          { text: '在线脚本', link: '/online/scripts' },
          { text: 'Zero论坛', link: '/online/forum' },
          { text: '下载站', link: '/online/downloads' },
          { text: '公共仓库', link: '/online/public-repo' },
        ]
      }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © IXCMSTUDIO'
    }
  }
}
