# 开发者文档

这里整理的是 ZeroTermux 的开发入口、构建方式和常见修改位置。刚接手项目时可以先按顺序看一遍，后面改具体功能时再回到对应页面查文件。

ZeroTermux 基于 Termux 二次开发。项目里同时有 Termux 原本的终端、会话、bootstrap、文件接收、RunCommand，也有 ZeroTermux 后续增加的左侧菜单、X11、QEMU、备份恢复、AI、FTP、`zt` 命令、脚本和本地资源。改功能前先确认它属于哪一层。

## 阅读顺序

1. [从 0 开始](/developer/from-zero)
   先把项目拉下来，完成一次 debug 构建和真机启动。

2. [项目结构](/developer/project-structure)
   了解 `app`、`termux-shared`、`terminal-emulator`、`terminal-view` 的分工。

3. [功能开发入口](/developer/feature-entrypoints)
   按功能查对应的入口类和资源位置。

4. [左侧菜单系统](/developer/main-menu)
   大多数用户能点到的 ZeroTermux 功能都从这里注册。

5. [`zt` 命令系统](/developer/zt-command)
   如果你要让终端里能执行 `zt xxx`，看这一页。

## 常见情况

| 情况 | 处理方式 |
| --- | --- |
| `TermuxActivity.java` 很大 | 先查调用链，少做无关重构 |
| 很多功能通过 assets 里的脚本落地 | 改 Java/Kotlin 前先看 `app/src/main/assets` |
| 路径分内部 `$PREFIX` 和外部 `/sdcard/xinhao` | 涉及文件先看 `FileUrl.kt` |
| 菜单项很多，看起来散 | 从 `MainMenuConfig.java` 找注册顺序 |
| `zt` 命令会连接 Android 侧服务 | 同时看脚本和 `ZTSocketService` |
| X11、QEMU、备份恢复依赖较多 | 改完做一次真机验证 |

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
