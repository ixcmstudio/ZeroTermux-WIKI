# 项目结构

先把目录认清楚，再改代码。ZeroTermux 的代码有两条线：一条是原 Termux 的终端能力，一条是 ZeroTermux 后来加的功能。大多数需求都在第二条线上，不需要动终端模拟器核心。

## 根目录

| 路径 | 说明 |
| --- | --- |
| `app/` | 主 Android 应用，ZeroTermux 大多数二开功能都在这里 |
| `termux-shared/` | Termux 共享工具库，包含路径、设置、Shell、文件、通知等通用能力 |
| `terminal-emulator/` | 终端模拟器核心，处理字符、屏幕缓冲、控制序列等 |
| `terminal-view/` | 终端视图层，负责显示、选择、手势、渲染 |
| `gradle/` | Gradle Wrapper |
| `config/` | checkstyle 等构建配置 |
| `fastlane/` | 应用商店元数据 |
| `img/`、`art/` | README 图片和图标资源 |
| `release/` | 发布输出元数据 |

## `app/src/main/java/com/termux`

| 包 | 说明 |
| --- | --- |
| `app` | Termux 原主应用逻辑，包含 `TermuxActivity`、`TermuxService`、RunCommand 等 |
| `filepicker` | 文件接收、分享、文档 Provider |
| `shared` | app 模块内复用的 Termux 共享逻辑引用 |
| `zerocore` | ZeroTermux 自己新增的核心功能 |

## `zerocore` 重点目录

| 路径 | 说明 |
| --- | --- |
| `activity/` | ZeroTermux 自定义 Activity，例如编辑器、图片、切换页面 |
| `ai/` | DeepSeek、自定义 AI、LLM 聊天和设置 |
| `back/`、`fragment/` | 备份/恢复界面和逻辑 |
| `config/mainmenu/` | 左侧功能菜单系统 |
| `config/ztcommand/` | 终端 `zt` 命令系统 |
| `dialog/` | 自定义弹窗 |
| `ftp/` | FTP 服务与新 FTP 实现 |
| `guide/` | 首次启动引导 |
| `settings/` | ZeroTermux 设置、X11 设置、定时任务等 |
| `url/` | 路径集中管理，重点看 `FileUrl.kt` |
| `utermux_windows/qemu/` | QEMU/Windows 运行相关 |
| `utils/` | 工具类 |
| `zero/` | ZeroCore 引擎相关 |

## `app/src/main/assets`

| 路径 | 说明 |
| --- | --- |
| `runcommand/` | 安装到 `$PREFIX/usr/bin` 或运行环境中的命令脚本 |
| `linux/` | Linux 发行版安装工具 |
| `qemu/` | QEMU 脚本资源 |
| `x11/` | X11 通道相关资源 |
| `zipcommand/` | busybox、filebrowser 等压缩资源 |
| `textmate/` | 编辑器语法高亮资源 |
| `font/` | 内置字体 |
| `mainmenu/` | 菜单相关资源 |
| `properties/` | 配置资源 |

## `app/src/main/res`

| 路径 | 说明 |
| --- | --- |
| `layout/` | Activity、Dialog、列表项、编辑器等 XML 布局 |
| `values/` | 默认字符串、颜色、主题、尺寸 |
| `values-zh-rCN/` | 中文字符串 |
| `values-en/` | 英文字符串 |
| `xml/` | Termux 设置页、Provider 路径、快捷方式等 XML |
| `mipmap-*` | 图标 |
| `drawable/` | 背景、shape、图标、图片资源 |
| `raw/` | 音频、shader、脚本等原始资源 |

## 三个最常改的位置

| 需求 | 优先看 |
| --- | --- |
| 新增左侧菜单功能 | `zerocore/config/mainmenu/` |
| 新增终端命令 | `zerocore/config/ztcommand/` |
| 新增设置或页面 | `zerocore/settings/`、`res/layout/`、`AndroidManifest.xml` |

如果你不确定该改哪里，先从 `MainMenuConfig.java` 找用户入口。用户能点到的功能，基本都能从那里追出去。
