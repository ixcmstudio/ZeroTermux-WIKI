// .vitepress/config.mjs
import { defineConfig } from 'vitepress'

export default defineConfig({
  // --- 基础信息 ---
  title: 'ZeroTermux教程 - ZeroTermux WIKI',
  description: 'A wiki for ZeroTermux.',

  // 部署根路径：改为 '/' 因为您部署在自定义域名的根目录
  base: '/',

  // --- 核心配置 ---
  cleanUrls: true,
  ignoreDeadLinks: true,

  // --- 主题配置 ---
  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '功能指南', link: '/features/common/source-switching' },
      { text: '开发者', link: '/developer/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ixcmstudio/zerotermux-wiki' }
    ],

    sidebar: [
      {
        text: '入门指南',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '安装教程', link: '/guide/installation' },
          { text: '首次启动与其的故障排除', link: '/guide/first-install-error' }
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
          { text: 'ZT设置', link: '/features/common/zt-settings' }
        ]
      },
      {
        text: 'X11 功能',
        collapsed: true,
        items: [
          { text: 'X11设置', link: '/features/x11/settings' },
          { text: '显示/隐藏终端', link: '/features/x11/toggle-terminal' },
          { text: 'X11环境', link: '/features/x11/environment' },
          { text: '修复环境错误', link: '/features/x11/fix-errors' },
          { text: '安装X11', link: '/features/x11/install' },
          { text: '显示/隐藏键盘', link: '/features/x11/toggle-keyboard' }
        ]
      },
      {
        text: '线上功能',
        collapsed: false,
        items: [
          { text: '在线脚本', link: '/online/scripts' },
          { text: 'Zero论坛', link: '/online/forum' },
          { text: '下载站', link: '/online/downloads' },
          { text: '公共仓库', link: '/online/public-repo' }
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
          { text: '视频背景', link: '/features/ui/video-background' }
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
          { text: '语言切换', link: '/features/zt/language-switching' }
        ]
      },
      {
        text: '开发者文档',
        collapsed: false,
        items: [
          { text: '开发者总览', link: '/developer/' },
          { text: '从 0 开始', link: '/developer/from-zero' },
          { text: '构建与发布', link: '/developer/build-and-release' },
          { text: '项目结构', link: '/developer/project-structure' },
          { text: '运行架构', link: '/developer/runtime-architecture' },
          { text: '功能开发入口', link: '/developer/feature-entrypoints' },
          { text: '左侧菜单系统', link: '/developer/main-menu' },
          { text: 'zt 命令系统', link: '/developer/zt-command' },
          { text: '资源与数据目录', link: '/developer/resources-and-storage' },
          { text: '调试与排错', link: '/developer/debugging' },
          { text: '给 AI 编程工具看', link: '/developer/ai-coding-tools' }
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License.'
    }
  }
})
