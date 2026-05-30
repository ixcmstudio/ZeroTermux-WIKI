# 开发者文档

这份文档不是拿来摆样子的。它的目标很简单：一个刚把 ZeroTermux 拉下来的人，能知道先别碰哪里、该从哪里改、改完怎么验证。

ZeroTermux 不是一个“干净的小 Demo”。它是从 Termux 改出来的 Android 工程，里面有原版 Termux 的终端、会话、bootstrap、文件接收、RunCommand，也有后来加上的左侧菜单、X11、QEMU、备份恢复、AI、FTP、`zt` 命令、各种脚本和本地资源。接手时最容易犯的错，就是把这些层混在一起改。

## 先按这个顺序看

1. [从 0 开始](/developer/from-zero)
   先把项目跑起来。没跑起来之前，不建议讨论架构优雅不优雅。

2. [项目结构](/developer/project-structure)
   先知道 `app`、`termux-shared`、`terminal-emulator`、`terminal-view` 分别管什么。

3. [功能开发入口](/developer/feature-entrypoints)
   想改某个功能时，从这里找入口，比全局搜索瞎撞快很多。

4. [左侧菜单系统](/developer/main-menu)
   大多数用户能点到的 ZeroTermux 功能，都是从这套菜单系统进去的。

5. [`zt` 命令系统](/developer/zt-command)
   如果你要让终端里能执行 `zt xxx`，看这一页。

## 你大概会遇到的项目现实

| 现实 | 建议 |
| --- | --- |
| `TermuxActivity.java` 很大 | 先搜调用链，不要一上来重构 |
| 很多功能通过 assets 里的脚本落地 | 改 Java/Kotlin 前先看 `app/src/main/assets` |
| 路径分内部 `$PREFIX` 和外部 `/sdcard/xinhao` | 涉及文件先看 `FileUrl.kt` |
| 菜单项很多，看起来散 | 从 `MainMenuConfig.java` 找注册顺序 |
| `zt` 命令不是普通 shell 脚本那么简单 | 它会连到 Android 侧 `ZTSocketService` |
| X11、QEMU、备份恢复都比较重 | 改完一定真机验证，不要只看编译通过 |

## 按你要做的事选页面

| 你想做什么 | 看哪页 |
| --- | --- |
| 第一次编译项目 | [从 0 开始](/developer/from-zero) |
| 出 APK 或改版本号 | [构建与发布](/developer/build-and-release) |
| 了解整体目录 | [项目结构](/developer/project-structure) |
| 理清启动和运行流程 | [运行架构](/developer/runtime-architecture) |
| 找某个功能的代码入口 | [功能开发入口](/developer/feature-entrypoints) |
| 新增左侧菜单按钮 | [左侧菜单系统](/developer/main-menu) |
| 新增 `zt` 命令 | [`zt` 命令系统](/developer/zt-command) |
| 处理文件路径和资源 | [资源与数据目录](/developer/resources-and-storage) |
| 编译或运行出错 | [调试与排错](/developer/debugging) |
| 让 AI 工具帮你改代码 | [给 AI 编程工具看的文档](/developer/ai-coding-tools) |

## 给后来人的一句话

改 ZeroTermux 时，先尊重现有入口。菜单走菜单系统，命令走 `zt` 命令系统，路径走 `FileUrl.kt`，脚本放 assets，文案放 strings。能顺着原来的路走，就不要重新开一条路。
