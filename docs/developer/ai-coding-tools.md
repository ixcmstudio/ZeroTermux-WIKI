# 给 AI 编程工具看的文档

这一页给 Codex、Cursor、Claude Code、Copilot Chat 这类 AI 编程工具使用。下面的内容都可以直接复制，正文尽量保留用户自己的口吻。

## 通用项目上下文

```text
我正在维护 ZeroTermux。这个项目基于 Termux 二次开发，是 Android 多模块项目。

请你先按现有项目结构理解代码，先不要重构，也不要自己另起一套架构。

项目基本情况：
- 主包名仍然是 com.termux。
- ZeroTermux 自己新增的功能主要在 app/src/main/java/com/termux/zerocore/。
- 原 Termux 主流程仍在 app/src/main/java/com/termux/app/。
- 项目有 4 个 Gradle 模块：
  - :app
  - :termux-shared
  - :terminal-emulator
  - :terminal-view

当前工具链：
- Java + Kotlin
- Gradle Wrapper 9.2.1
- Android Gradle Plugin 8.13.2
- Kotlin 2.2.0
- compileSdk 36
- minSdk 23
- targetSdk 28
- NDK 29.0.14206865

不要随手升级 Gradle、AGP、Kotlin、SDK、NDK 或依赖版本，除非我明确要求。
不要改包名、sharedUserId、签名、bootstrap，除非我明确要求。
```

## 开始改代码前先读这些文件

```text
在开始改 ZeroTermux 代码之前，请你先阅读这些文件并总结项目入口：

- settings.gradle
- build.gradle
- gradle.properties
- app/build.gradle
- app/src/main/AndroidManifest.xml
- app/src/main/java/com/termux/app/TermuxActivity.java
- app/src/main/java/com/termux/zerocore/url/FileUrl.kt
- app/src/main/java/com/termux/zerocore/config/mainmenu/MainMenuConfig.java
- app/src/main/java/com/termux/zerocore/config/mainmenu/config/BaseMenuClickConfig.java

读完后请先告诉我：
1. 这个功能大概率应该改哪一层。
2. 入口文件是什么。
3. 有没有涉及权限、assets 脚本、外部存储、Termux $PREFIX。
4. 你准备怎么最小改动。

先说清楚这些，再开始改代码。
```

## 新增或修改左侧菜单功能

```text
我想新增或修改 ZeroTermux 左侧菜单里的功能。

请按现有菜单系统来做，先不要新建入口体系。

请先阅读：
- app/src/main/java/com/termux/zerocore/config/mainmenu/MainMenuConfig.java
- app/src/main/java/com/termux/zerocore/config/mainmenu/config/MainMenuClickConfig.java
- app/src/main/java/com/termux/zerocore/config/mainmenu/config/BaseMenuClickConfig.java
- 同分类里已有的 ClickConfig

实现要求：
1. 先在 MainMenuConfig.java 找到功能所属分类。
2. 新增或修改 app/src/main/java/com/termux/zerocore/config/mainmenu/config/ 下的 ClickConfig。
3. 菜单文案放到 strings.xml，不要直接写死在代码里。
4. 图标优先使用现有 mipmap/drawable 资源。
5. 如果要打开新 Activity，必须同步修改 AndroidManifest.xml。
6. 如果要向终端发送命令，优先复用 SingletonCommunicationUtils 的现有模式。
7. 如果要复制脚本，先检查 app/src/main/assets/ 下有没有现成资源。
8. 如果涉及文件路径，优先使用 FileUrl.kt。

最后请你说明：
- 改了哪些文件。
- 为什么改这些文件。
- 用户在 APP 里从哪里点进去。
- 我应该怎么真机验证。
```

## 新增或修改 `zt` 命令

```text
我想新增或修改 ZeroTermux 终端里的 zt 命令。

请注意：zt 会连接 Android 侧服务，只改 shell 脚本不够。

请先阅读：
- app/src/main/java/com/termux/zerocore/config/ztcommand/ZTSocketService.java
- app/src/main/java/com/termux/zerocore/config/ztcommand/ZTCommandConfigStore.java
- app/src/main/java/com/termux/zerocore/config/ztcommand/config/ZTKeyConstants.java
- app/src/main/java/com/termux/zerocore/config/ztcommand/config/ToastConfig.java
- app/src/main/java/com/termux/zerocore/config/ztcommand/config/VersionConfig.java
- app/src/main/res/values-zh-rCN/strings.xml 里的 zt_command_help

实现要求：
1. 在 ZTKeyConstants.java 添加命令 ID 和命令字符串。
2. 如有短命令，也一起添加。
3. 新增或修改对应的 ZTConfig 实现。
4. 在 ZTCommandConfigStore.java 注册命令字符串到 ID。
5. 在 ZTCommandConfigStore.java register 对应实现。
6. 更新 zt_command_help，告诉用户怎么用。
7. 如果命令会打开 Activity、Dialog 或系统权限页面，检查上下文是否可用。

最后请你说明：
- 终端里应该执行什么命令测试。
- 如果提示“不支持或ZT版本低不识别”，应该检查哪里。
- 是否需要确认 $PREFIX/usr/bin/zt 已经更新。
```

## 涉及路径、文件、存储权限的功能

```text
我要改的功能涉及文件路径、外部存储、备份包、字体、QEMU、脚本或数据目录。

请先阅读：
- app/src/main/java/com/termux/zerocore/url/FileUrl.kt
- app/src/main/AndroidManifest.xml
- app/src/main/assets/

请你遵守：
1. 路径优先走 FileUrl.kt，不要到处硬编码 /sdcard/xinhao。
2. 区分 Termux 内部目录和外部存储目录。
3. 区分 $PREFIX、home、/sdcard/xinhao。
4. 如果要访问外部存储，检查 Manifest 权限和运行时权限。
5. 如果要写入 assets 里的脚本，确认资源路径存在。

ZeroTermux 常用外部目录是：
- /sdcard/xinhao/data/
- /sdcard/xinhao/apk/
- /sdcard/xinhao/command/
- /sdcard/xinhao/font/
- /sdcard/xinhao/iso/
- /sdcard/xinhao/qemu/
- /sdcard/xinhao/server/
- /sdcard/xinhao/share/
- /sdcard/xinhao/web_config/

最后请你告诉我：
- 这次改动读写了哪些目录。
- 首次启动没创建目录时会不会出错。
- 用户拒绝权限时会发生什么。
```

## 涉及 assets 脚本的功能

```text
我要改的功能涉及脚本、安装工具、QEMU、X11、Linux 发行版或命令文件。

请先检查 app/src/main/assets/，不要凭空新写一套脚本逻辑。

重点目录：
- app/src/main/assets/runcommand/
- app/src/main/assets/linux/
- app/src/main/assets/qemu/
- app/src/main/assets/x11/
- app/src/main/assets/zipcommand/
- app/src/main/assets/textmate/
- app/src/main/assets/font/

请你确认：
1. 哪个 Java/Kotlin 类会复制 assets 文件。
2. 复制到哪个目标路径。
3. 复制后是否会向终端发送命令。
4. 相关命令是否在 CodeString 里。
5. 脚本是否依赖 /sdcard/xinhao 或 $PREFIX。

改完请给出真机验证步骤，不要只说编译通过。
```

## 修复一个已有功能

```text
我要修复 ZeroTermux 的一个已有功能。请先定位，不要猜。

请按这个顺序查：
1. 先在 MainMenuConfig.java 找用户入口。
2. 打开对应 ClickConfig。
3. 看它是启动 Activity、打开 Dialog、发送终端命令，还是复制 assets 脚本。
4. 如果涉及路径，查 FileUrl.kt。
5. 如果涉及命令字符串，查 CodeString。
6. 如果涉及 zt 命令，查 ZTCommandConfigStore。
7. 如果涉及界面文案，查 strings.xml。
8. 如果涉及权限，查 Manifest 和运行时权限申请。

请给我最小修改方案。除非问题确实出在架构上，否则不要做大重构。
```

## 补 Wiki 文档

```text
我要根据 ZeroTermux 源码补 Wiki 文档。

请不要写泛泛的功能介绍。每个页面尽量写清楚：
1. 功能入口在哪里。
2. 源码里对应哪些类。
3. 相关 assets 或资源文件在哪里。
4. 用户怎么使用。
5. 哪些目录会被读写。
6. 常见问题怎么排查。
7. 改这个功能时开发者要注意什么。

语气按项目维护文档来写，少用模板式总结。
能写具体文件路径就写具体文件路径。
不确定的地方要说不确定，不要编。
```

## 请 AI 最后必须交付这些内容

```text
完成后请你按这个格式回复我：

1. 改动文件列表
   - 每个文件改了什么。

2. 为什么这样改
   - 说明你是顺着哪个现有入口改的。

3. 验证方式
   - 编译命令。
   - 真机操作路径。
   - 终端命令测试方式。

4. 风险点
   - 是否涉及权限。
   - 是否涉及签名。
   - 是否涉及包名或 sharedUserId。
   - 是否涉及 bootstrap。
   - 是否涉及外部存储。
   - 是否涉及 assets 脚本。

5. 没做或没验证的内容
   - 不要只写“应该没问题”。
```

## 一整段可直接复制的总提示词

```text
我正在维护 ZeroTermux。这个项目基于 Termux 二次开发，是 Android 多模块项目。

请你先理解现有结构，再做最小改动。先不要重构，不要自己新建一套架构，不要随手升级 Gradle、AGP、Kotlin、SDK、NDK 或依赖版本。不要改包名、sharedUserId、签名、bootstrap，除非我明确要求。

项目基本情况：
- 主包名仍然是 com.termux。
- ZeroTermux 新增功能主要在 app/src/main/java/com/termux/zerocore/。
- 原 Termux 主流程在 app/src/main/java/com/termux/app/。
- 模块包括 :app、:termux-shared、:terminal-emulator、:terminal-view。
- 常用外部数据目录是 /sdcard/xinhao/。

开始改之前，请先阅读：
- settings.gradle
- build.gradle
- gradle.properties
- app/build.gradle
- app/src/main/AndroidManifest.xml
- app/src/main/java/com/termux/app/TermuxActivity.java
- app/src/main/java/com/termux/zerocore/url/FileUrl.kt
- app/src/main/java/com/termux/zerocore/config/mainmenu/MainMenuConfig.java
- app/src/main/java/com/termux/zerocore/config/mainmenu/config/BaseMenuClickConfig.java

如果是菜单功能，请从 MainMenuConfig.java 和对应 ClickConfig 入手。
如果是 zt 命令，请从 ZTKeyConstants.java、ZTCommandConfigStore.java、ZTSocketService.java 入手。
如果涉及路径，请优先使用 FileUrl.kt。
如果涉及脚本，请先检查 app/src/main/assets/。
如果涉及 Activity，请同步检查 AndroidManifest.xml。
如果涉及文案，请改 strings.xml。

请你先告诉我：
1. 这个需求应该改哪些入口文件。
2. 是否涉及权限、assets、外部存储、$PREFIX、bootstrap、签名或包名。
3. 你的最小修改方案。

然后再开始改代码。

完成后请给我：
1. 改动文件列表。
2. 每个文件为什么改。
3. 编译和真机验证步骤。
4. 风险点。
5. 没做或没验证的内容。
```
